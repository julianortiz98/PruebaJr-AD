"""
Regenera js/data.js a partir de mensajes_limpios.csv (salida real del
RETO 1 / reto1_pipeline.py).

Esto es, literalmente, el "refresh" del que habla la propuesta de
arquitectura del RETO 5: en vez de que 50 supervisores golpeen la base
de datos cada vez que abren el tablero, este script se corre una vez
cada 15-30 min (cron / GitHub Action / tarea programada) y regenera el
archivo estático que el navegador ya sirve. Nadie consulta Postgres al
hacer clic en "Actualizar".

Uso:
    python scripts/generar_data.py [ruta_csv] [ruta_salida_js]

Por defecto:
    ruta_csv       = ./mensajes_limpios.csv
    ruta_salida_js = ./js/data.js

No inventa columnas ni categorías nuevas: reutiliza exactamente los
mismos nombres y la misma lógica de agregación que 05_consultas_dashboard.sql
(funnel por día, SLA con MIN() OVER ROWS BETWEEN 1 FOLLOWING AND UNBOUNDED
FOLLOWING, volumen por hora, categorías, errores y plantillas).
"""

import sys
import json
import datetime
from pathlib import Path

import pandas as pd

STATUSES = ["sent", "delivered", "read", "failed"]
CATEGORIAS = ["Pedido", "Soporte", "Queja", "Sin contenido", "Otro / sin clasificar"]


def compute_siguiente_accion(grupo_conversacion: pd.DataFrame) -> pd.DataFrame:
    """Replica en pandas la window function SQL:
    MIN(created_at) OVER (PARTITION BY conversation_id
                           ORDER BY created_at, id
                           ROWS BETWEEN 1 FOLLOWING AND UNBOUNDED FOLLOWING)
    filtrando message_type IN ('activity','outgoing').
    """
    g = grupo_conversacion.sort_values(["created_at", "id"]).reset_index(drop=True)
    es_accion = g["message_type"].isin(["activity", "outgoing"]).to_numpy()
    ts = g["created_at"].to_numpy()
    siguiente = [pd.NaT] * len(g)
    minimo_actual = None
    for j in range(len(g) - 1, -1, -1):
        siguiente[j] = minimo_actual
        if es_accion[j]:
            if minimo_actual is None or ts[j] < minimo_actual:
                minimo_actual = ts[j]
    g["siguiente_accion_ts"] = siguiente
    return g


def construir_datos(df: pd.DataFrame) -> dict:
    df = df.copy()
    df["created_at"] = pd.to_datetime(df["created_at"])
    df["dia"] = df["created_at"].dt.date.astype(str)
    df["hora"] = df["created_at"].dt.hour
    df = df.sort_values(["conversation_id", "created_at", "id"]).reset_index(drop=True)

    dias = sorted(df["dia"].unique())

    # 1) Funnel por día (RETO 2 - FASE 7, desagregado por día para el filtro)
    out = df[df["message_type"] == "outgoing"]
    funnel_counts = out.groupby(["dia", "status"]).size().to_dict()
    funnel_por_dia = [
        {"dia": d, "status": s, "cantidad": int(funnel_counts.get((d, s), 0))}
        for d in dias
        for s in STATUSES
    ]

    # 2) SLA (RETO 2 - FASE 8): detalle crudo + agregado por día
    df2 = df.groupby("conversation_id", group_keys=False).apply(compute_siguiente_accion)
    incoming = df2[df2["message_type"] == "incoming"].copy()
    incoming["siguiente_accion_ts"] = pd.to_datetime(incoming["siguiente_accion_ts"])
    incoming["tiempo_min"] = (
        incoming["siguiente_accion_ts"] - incoming["created_at"]
    ).dt.total_seconds() / 60

    sla_incoming = [
        {"dia": r["dia"], "min": (round(float(r["tiempo_min"]), 2) if pd.notna(r["tiempo_min"]) else None)}
        for _, r in incoming.iterrows()
    ]

    sla_por_dia = []
    for d in dias:
        sub = incoming[incoming["dia"] == d]
        validos = sub["tiempo_min"].dropna()
        sla_por_dia.append({
            "dia": d,
            "total": int(len(sub)),
            "con_seguimiento": int(len(validos)),
            "sin_seguimiento": int(len(sub) - len(validos)),
            "suma_min": round(float(validos.sum()), 2) if len(validos) else 0,
            "lt1min": int((sub["tiempo_min"] < 1).sum()),
        })

    # 3) Volumen por hora (RETO 2 - FASE 9), desagregado por día para el heatmap
    hora_counts = incoming.groupby(["dia", "hora"]).size().to_dict()
    hora_por_dia = [
        {"dia": d, "hora": h, "cantidad": int(hora_counts.get((d, h), 0))}
        for d in dias
        for h in range(24)
    ]

    # 4) Categorías de mensajes entrantes, por día
    cat_counts = incoming.groupby(["dia", "categoria_mensaje"]).size().to_dict()
    categorias_por_dia = [
        {"dia": d, "categoria": c, "cantidad": int(cat_counts.get((d, c), 0))}
        for d in dias
        for c in CATEGORIAS
    ]

    # 5) Errores (bucket: parámetros de plantilla vs otros), por día
    failed = df[df["status"] == "failed"].copy()
    failed["bucket"] = failed["error_externo"].apply(
        lambda x: "parametros" if isinstance(x, str) and "132000" in x else "otros"
    )
    err_counts = failed.groupby(["dia", "bucket"]).size().to_dict()
    errores_por_dia = [
        {"dia": d, "bucket": b, "cantidad": int(err_counts.get((d, b), 0))}
        for d in dias
        for b in ["parametros", "otros"]
    ]

    # 6) Plantillas x día x estado (alimenta la tabla de envíos/fallos)
    out_tmpl = df[(df["message_type"] == "outgoing") & (df["nombre_plantilla"].notna())]
    plantillas = sorted(out_tmpl["nombre_plantilla"].unique())
    tmpl_counts = out_tmpl.groupby(["dia", "nombre_plantilla", "status"]).size().to_dict()
    plantillas_por_dia = [
        {"dia": d, "plantilla": p, "status": s, "cantidad": int(n)}
        for d in dias
        for p in plantillas
        for s in STATUSES
        if (n := tmpl_counts.get((d, p, s), 0)) > 0
    ]

    meta = {
        "total_mensajes": int(len(df)),
        "total_outgoing": int(len(out)),
        "total_incoming": int(len(incoming)),
        "total_activity": int((df["message_type"] == "activity").sum()),
        "periodo_inicio": dias[0],
        "periodo_fin": dias[-1],
        "dias": dias,
        "plantillas": plantillas,
        "generado_el": datetime.date.today().isoformat(),
        "fuente": "prueba.txt -> reto1_pipeline.py -> mensajes_limpios.csv -> agregados via 05_consultas_dashboard.sql",
    }

    return {
        "meta": meta,
        "funnel_por_dia": funnel_por_dia,
        "sla_por_dia": sla_por_dia,
        "hora_por_dia": hora_por_dia,
        "categorias_por_dia": categorias_por_dia,
        "errores_por_dia": errores_por_dia,
        "plantillas_por_dia": plantillas_por_dia,
        "sla_incoming": sla_incoming,
    }


def main():
    ruta_csv = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mensajes_limpios.csv")
    ruta_salida = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("js/data.js")

    if not ruta_csv.exists():
        sys.exit(f"No se encontró {ruta_csv}. Corre primero reto1_pipeline.py o pasa la ruta como argumento.")

    df = pd.read_csv(ruta_csv, dtype={"id": "Int64"})
    datos = construir_datos(df)

    encabezado = (
        "// Datos reales agregados desde mensajes_limpios.csv (RETO 1) mediante la\n"
        "// misma logica de 05_consultas_dashboard.sql (RETO 2/3). No hay valores\n"
        "// inventados: este archivo se regenera con scripts/generar_data.py.\n"
    )
    contenido = encabezado + "window.DASHBOARD_DATA = " + json.dumps(datos, ensure_ascii=False, indent=2) + ";\n"

    ruta_salida.parent.mkdir(parents=True, exist_ok=True)
    ruta_salida.write_text(contenido, encoding="utf-8")
    print(f"OK -> {ruta_salida} ({len(contenido):,} bytes, {len(df):,} filas procesadas)")


if __name__ == "__main__":
    main()
