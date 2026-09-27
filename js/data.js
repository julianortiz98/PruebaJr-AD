// Datos reales agregados desde mensajes_limpios.csv (RETO 1) mediante la
// misma logica de 05_consultas_dashboard.sql (RETO 2/3). No hay valores inventados:
// cada numero se puede volver a calcular ejecutando scripts/generar_data.py.
window.DASHBOARD_DATA = {
  "meta": {
    "total_mensajes": 3687,
    "total_outgoing": 2507,
    "total_incoming": 430,
    "total_activity": 750,
    "periodo_inicio": "2023-07-25",
    "periodo_fin": "2023-08-02",
    "dias": [
      "2023-07-25",
      "2023-07-26",
      "2023-07-27",
      "2023-07-28",
      "2023-07-29",
      "2023-07-30",
      "2023-07-31",
      "2023-08-01",
      "2023-08-02"
    ],
    "plantillas": [
      "ampliaciones_zafiro",
      "bienvenida",
      "lanzamiento_",
      "lanzamiento__activas_v2",
      "lanzamiento__inactivas",
      "rechazos_zafiro",
      "saludo"
    ],
    "generado_el": "2026-09-27",
    "fuente": "prueba.txt -> reto1_pipeline.py -> mensajes_limpios.csv -> agregados via 05_consultas_dashboard.sql"
  },
  "funnel_por_dia": [
    {
      "dia": "2023-07-25",
      "status": "sent",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "status": "delivered",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "status": "read",
      "cantidad": 1
    },
    {
      "dia": "2023-07-25",
      "status": "failed",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "status": "sent",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "status": "delivered",
      "cantidad": 4
    },
    {
      "dia": "2023-07-26",
      "status": "read",
      "cantidad": 21
    },
    {
      "dia": "2023-07-26",
      "status": "failed",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "status": "sent",
      "cantidad": 56
    },
    {
      "dia": "2023-07-27",
      "status": "delivered",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "status": "read",
      "cantidad": 53
    },
    {
      "dia": "2023-07-27",
      "status": "failed",
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "status": "sent",
      "cantidad": 121
    },
    {
      "dia": "2023-07-28",
      "status": "delivered",
      "cantidad": 16
    },
    {
      "dia": "2023-07-28",
      "status": "read",
      "cantidad": 134
    },
    {
      "dia": "2023-07-28",
      "status": "failed",
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "status": "sent",
      "cantidad": 55
    },
    {
      "dia": "2023-07-29",
      "status": "delivered",
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "status": "read",
      "cantidad": 67
    },
    {
      "dia": "2023-07-29",
      "status": "failed",
      "cantidad": 1374
    },
    {
      "dia": "2023-07-30",
      "status": "sent",
      "cantidad": 55
    },
    {
      "dia": "2023-07-30",
      "status": "delivered",
      "cantidad": 38
    },
    {
      "dia": "2023-07-30",
      "status": "read",
      "cantidad": 349
    },
    {
      "dia": "2023-07-30",
      "status": "failed",
      "cantidad": 11
    },
    {
      "dia": "2023-07-31",
      "status": "sent",
      "cantidad": 17
    },
    {
      "dia": "2023-07-31",
      "status": "delivered",
      "cantidad": 12
    },
    {
      "dia": "2023-07-31",
      "status": "read",
      "cantidad": 22
    },
    {
      "dia": "2023-07-31",
      "status": "failed",
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "status": "sent",
      "cantidad": 15
    },
    {
      "dia": "2023-08-01",
      "status": "delivered",
      "cantidad": 12
    },
    {
      "dia": "2023-08-01",
      "status": "read",
      "cantidad": 58
    },
    {
      "dia": "2023-08-01",
      "status": "failed",
      "cantidad": 11
    },
    {
      "dia": "2023-08-02",
      "status": "sent",
      "cantidad": 1
    },
    {
      "dia": "2023-08-02",
      "status": "delivered",
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "status": "read",
      "cantidad": 3
    },
    {
      "dia": "2023-08-02",
      "status": "failed",
      "cantidad": 0
    }
  ],
  "sla_por_dia": [
    {
      "dia": "2023-07-25",
      "total": 0,
      "con_seguimiento": 0,
      "sin_seguimiento": 0,
      "suma_min": 0,
      "lt1min": 0
    },
    {
      "dia": "2023-07-26",
      "total": 12,
      "con_seguimiento": 12,
      "sin_seguimiento": 0,
      "suma_min": 5.13,
      "lt1min": 11
    },
    {
      "dia": "2023-07-27",
      "total": 30,
      "con_seguimiento": 29,
      "sin_seguimiento": 1,
      "suma_min": 2911.22,
      "lt1min": 21
    },
    {
      "dia": "2023-07-28",
      "total": 129,
      "con_seguimiento": 126,
      "sin_seguimiento": 3,
      "suma_min": 3090.33,
      "lt1min": 49
    },
    {
      "dia": "2023-07-29",
      "total": 37,
      "con_seguimiento": 35,
      "sin_seguimiento": 2,
      "suma_min": 288.98,
      "lt1min": 17
    },
    {
      "dia": "2023-07-30",
      "total": 178,
      "con_seguimiento": 134,
      "sin_seguimiento": 44,
      "suma_min": 39173.97,
      "lt1min": 87
    },
    {
      "dia": "2023-07-31",
      "total": 13,
      "con_seguimiento": 7,
      "sin_seguimiento": 6,
      "suma_min": 1469.72,
      "lt1min": 0
    },
    {
      "dia": "2023-08-01",
      "total": 25,
      "con_seguimiento": 21,
      "sin_seguimiento": 4,
      "suma_min": 11.95,
      "lt1min": 17
    },
    {
      "dia": "2023-08-02",
      "total": 6,
      "con_seguimiento": 5,
      "sin_seguimiento": 1,
      "suma_min": 1.68,
      "lt1min": 5
    }
  ],
  "hora_por_dia": [
    {
      "dia": "2023-07-25",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 13,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 14,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 21,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "hora": 23,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 13,
      "cantidad": 3
    },
    {
      "dia": "2023-07-26",
      "hora": 14,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 16,
      "cantidad": 4
    },
    {
      "dia": "2023-07-26",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 21,
      "cantidad": 1
    },
    {
      "dia": "2023-07-26",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "hora": 23,
      "cantidad": 4
    },
    {
      "dia": "2023-07-27",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 12,
      "cantidad": 13
    },
    {
      "dia": "2023-07-27",
      "hora": 13,
      "cantidad": 8
    },
    {
      "dia": "2023-07-27",
      "hora": 14,
      "cantidad": 6
    },
    {
      "dia": "2023-07-27",
      "hora": 15,
      "cantidad": 3
    },
    {
      "dia": "2023-07-27",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 21,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "hora": 23,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 13,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 14,
      "cantidad": 3
    },
    {
      "dia": "2023-07-28",
      "hora": 15,
      "cantidad": 11
    },
    {
      "dia": "2023-07-28",
      "hora": 16,
      "cantidad": 7
    },
    {
      "dia": "2023-07-28",
      "hora": 17,
      "cantidad": 26
    },
    {
      "dia": "2023-07-28",
      "hora": 18,
      "cantidad": 9
    },
    {
      "dia": "2023-07-28",
      "hora": 19,
      "cantidad": 47
    },
    {
      "dia": "2023-07-28",
      "hora": 20,
      "cantidad": 22
    },
    {
      "dia": "2023-07-28",
      "hora": 21,
      "cantidad": 4
    },
    {
      "dia": "2023-07-28",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "hora": 23,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 13,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 14,
      "cantidad": 4
    },
    {
      "dia": "2023-07-29",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "hora": 19,
      "cantidad": 4
    },
    {
      "dia": "2023-07-29",
      "hora": 20,
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "hora": 21,
      "cantidad": 20
    },
    {
      "dia": "2023-07-29",
      "hora": 22,
      "cantidad": 5
    },
    {
      "dia": "2023-07-29",
      "hora": 23,
      "cantidad": 3
    },
    {
      "dia": "2023-07-30",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 13,
      "cantidad": 8
    },
    {
      "dia": "2023-07-30",
      "hora": 14,
      "cantidad": 3
    },
    {
      "dia": "2023-07-30",
      "hora": 15,
      "cantidad": 69
    },
    {
      "dia": "2023-07-30",
      "hora": 16,
      "cantidad": 54
    },
    {
      "dia": "2023-07-30",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 21,
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "hora": 22,
      "cantidad": 23
    },
    {
      "dia": "2023-07-30",
      "hora": 23,
      "cantidad": 21
    },
    {
      "dia": "2023-07-31",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 13,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 14,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 17,
      "cantidad": 1
    },
    {
      "dia": "2023-07-31",
      "hora": 18,
      "cantidad": 12
    },
    {
      "dia": "2023-07-31",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 21,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "hora": 23,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 0,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 13,
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "hora": 14,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "hora": 19,
      "cantidad": 11
    },
    {
      "dia": "2023-08-01",
      "hora": 20,
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "hora": 21,
      "cantidad": 5
    },
    {
      "dia": "2023-08-01",
      "hora": 22,
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "hora": 23,
      "cantidad": 3
    },
    {
      "dia": "2023-08-02",
      "hora": 0,
      "cantidad": 1
    },
    {
      "dia": "2023-08-02",
      "hora": 1,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 2,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 3,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 4,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 5,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 6,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 7,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 8,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 9,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 10,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 11,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 12,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 13,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 14,
      "cantidad": 5
    },
    {
      "dia": "2023-08-02",
      "hora": 15,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 16,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 17,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 18,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 19,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 20,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 21,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 22,
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "hora": 23,
      "cantidad": 0
    }
  ],
  "categorias_por_dia": [
    {
      "dia": "2023-07-25",
      "categoria": "Pedido",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "categoria": "Soporte",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "categoria": "Sin contenido",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "categoria": "Otro / sin clasificar",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "categoria": "Pedido",
      "cantidad": 4
    },
    {
      "dia": "2023-07-26",
      "categoria": "Soporte",
      "cantidad": 1
    },
    {
      "dia": "2023-07-26",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "categoria": "Sin contenido",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "categoria": "Otro / sin clasificar",
      "cantidad": 7
    },
    {
      "dia": "2023-07-27",
      "categoria": "Pedido",
      "cantidad": 6
    },
    {
      "dia": "2023-07-27",
      "categoria": "Soporte",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "categoria": "Sin contenido",
      "cantidad": 2
    },
    {
      "dia": "2023-07-27",
      "categoria": "Otro / sin clasificar",
      "cantidad": 22
    },
    {
      "dia": "2023-07-28",
      "categoria": "Pedido",
      "cantidad": 15
    },
    {
      "dia": "2023-07-28",
      "categoria": "Soporte",
      "cantidad": 2
    },
    {
      "dia": "2023-07-28",
      "categoria": "Queja",
      "cantidad": 3
    },
    {
      "dia": "2023-07-28",
      "categoria": "Sin contenido",
      "cantidad": 10
    },
    {
      "dia": "2023-07-28",
      "categoria": "Otro / sin clasificar",
      "cantidad": 99
    },
    {
      "dia": "2023-07-29",
      "categoria": "Pedido",
      "cantidad": 6
    },
    {
      "dia": "2023-07-29",
      "categoria": "Soporte",
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "categoria": "Queja",
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "categoria": "Sin contenido",
      "cantidad": 5
    },
    {
      "dia": "2023-07-29",
      "categoria": "Otro / sin clasificar",
      "cantidad": 24
    },
    {
      "dia": "2023-07-30",
      "categoria": "Pedido",
      "cantidad": 32
    },
    {
      "dia": "2023-07-30",
      "categoria": "Soporte",
      "cantidad": 13
    },
    {
      "dia": "2023-07-30",
      "categoria": "Queja",
      "cantidad": 2
    },
    {
      "dia": "2023-07-30",
      "categoria": "Sin contenido",
      "cantidad": 16
    },
    {
      "dia": "2023-07-30",
      "categoria": "Otro / sin clasificar",
      "cantidad": 115
    },
    {
      "dia": "2023-07-31",
      "categoria": "Pedido",
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "categoria": "Soporte",
      "cantidad": 1
    },
    {
      "dia": "2023-07-31",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "categoria": "Sin contenido",
      "cantidad": 1
    },
    {
      "dia": "2023-07-31",
      "categoria": "Otro / sin clasificar",
      "cantidad": 11
    },
    {
      "dia": "2023-08-01",
      "categoria": "Pedido",
      "cantidad": 3
    },
    {
      "dia": "2023-08-01",
      "categoria": "Soporte",
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "categoria": "Sin contenido",
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "categoria": "Otro / sin clasificar",
      "cantidad": 18
    },
    {
      "dia": "2023-08-02",
      "categoria": "Pedido",
      "cantidad": 1
    },
    {
      "dia": "2023-08-02",
      "categoria": "Soporte",
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "categoria": "Queja",
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "categoria": "Sin contenido",
      "cantidad": 3
    },
    {
      "dia": "2023-08-02",
      "categoria": "Otro / sin clasificar",
      "cantidad": 2
    }
  ],
  "errores_por_dia": [
    {
      "dia": "2023-07-25",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-25",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-26",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-27",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-28",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-29",
      "bucket": "parametros",
      "cantidad": 1374
    },
    {
      "dia": "2023-07-29",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-30",
      "bucket": "otros",
      "cantidad": 11
    },
    {
      "dia": "2023-07-31",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-07-31",
      "bucket": "otros",
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-08-01",
      "bucket": "otros",
      "cantidad": 11
    },
    {
      "dia": "2023-08-02",
      "bucket": "parametros",
      "cantidad": 0
    },
    {
      "dia": "2023-08-02",
      "bucket": "otros",
      "cantidad": 0
    }
  ],
  "plantillas_por_dia": [
    {
      "dia": "2023-07-27",
      "plantilla": "saludo",
      "status": "sent",
      "cantidad": 1
    },
    {
      "dia": "2023-07-27",
      "plantilla": "saludo",
      "status": "read",
      "cantidad": 5
    },
    {
      "dia": "2023-07-28",
      "plantilla": "ampliaciones_zafiro",
      "status": "read",
      "cantidad": 6
    },
    {
      "dia": "2023-07-28",
      "plantilla": "bienvenida",
      "status": "read",
      "cantidad": 1
    },
    {
      "dia": "2023-07-28",
      "plantilla": "saludo",
      "status": "delivered",
      "cantidad": 1
    },
    {
      "dia": "2023-07-28",
      "plantilla": "saludo",
      "status": "read",
      "cantidad": 5
    },
    {
      "dia": "2023-07-29",
      "plantilla": "lanzamiento_",
      "status": "failed",
      "cantidad": 1352
    },
    {
      "dia": "2023-07-29",
      "plantilla": "lanzamiento__inactivas",
      "status": "failed",
      "cantidad": 22
    },
    {
      "dia": "2023-07-29",
      "plantilla": "rechazos_zafiro",
      "status": "read",
      "cantidad": 4
    },
    {
      "dia": "2023-07-29",
      "plantilla": "saludo",
      "status": "sent",
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "plantilla": "saludo",
      "status": "delivered",
      "cantidad": 1
    },
    {
      "dia": "2023-07-29",
      "plantilla": "saludo",
      "status": "read",
      "cantidad": 2
    },
    {
      "dia": "2023-07-30",
      "plantilla": "bienvenida",
      "status": "read",
      "cantidad": 1
    },
    {
      "dia": "2023-07-30",
      "plantilla": "lanzamiento__activas_v2",
      "status": "delivered",
      "cantidad": 18
    },
    {
      "dia": "2023-07-30",
      "plantilla": "lanzamiento__activas_v2",
      "status": "read",
      "cantidad": 155
    },
    {
      "dia": "2023-07-30",
      "plantilla": "lanzamiento__activas_v2",
      "status": "failed",
      "cantidad": 8
    },
    {
      "dia": "2023-07-30",
      "plantilla": "saludo",
      "status": "delivered",
      "cantidad": 1
    },
    {
      "dia": "2023-07-30",
      "plantilla": "saludo",
      "status": "read",
      "cantidad": 4
    },
    {
      "dia": "2023-07-30",
      "plantilla": "saludo",
      "status": "failed",
      "cantidad": 2
    },
    {
      "dia": "2023-08-01",
      "plantilla": "ampliaciones_zafiro",
      "status": "sent",
      "cantidad": 4
    },
    {
      "dia": "2023-08-01",
      "plantilla": "ampliaciones_zafiro",
      "status": "delivered",
      "cantidad": 12
    },
    {
      "dia": "2023-08-01",
      "plantilla": "ampliaciones_zafiro",
      "status": "read",
      "cantidad": 21
    },
    {
      "dia": "2023-08-01",
      "plantilla": "ampliaciones_zafiro",
      "status": "failed",
      "cantidad": 11
    },
    {
      "dia": "2023-08-01",
      "plantilla": "lanzamiento__activas_v2",
      "status": "read",
      "cantidad": 1
    },
    {
      "dia": "2023-08-01",
      "plantilla": "saludo",
      "status": "read",
      "cantidad": 1
    }
  ],
  "sla_incoming": [
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.22
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 1670.52
    },
    {
      "dia": "2023-07-27",
      "min": 1415.25
    },
    {
      "dia": "2023-07-27",
      "min": 1394.15
    },
    {
      "dia": "2023-07-28",
      "min": 0.45
    },
    {
      "dia": "2023-07-28",
      "min": 0.38
    },
    {
      "dia": "2023-07-29",
      "min": 35.13
    },
    {
      "dia": "2023-07-29",
      "min": 35.08
    },
    {
      "dia": "2023-07-29",
      "min": 34.77
    },
    {
      "dia": "2023-07-29",
      "min": 34.28
    },
    {
      "dia": "2023-07-29",
      "min": 33.97
    },
    {
      "dia": "2023-07-28",
      "min": 7.42
    },
    {
      "dia": "2023-08-01",
      "min": 2.03
    },
    {
      "dia": "2023-08-01",
      "min": 1.98
    },
    {
      "dia": "2023-08-01",
      "min": 1.88
    },
    {
      "dia": "2023-08-01",
      "min": 1.57
    },
    {
      "dia": "2023-08-01",
      "min": null
    },
    {
      "dia": "2023-08-01",
      "min": null
    },
    {
      "dia": "2023-07-31",
      "min": 2.58
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 3.97
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.95
    },
    {
      "dia": "2023-07-30",
      "min": 0.57
    },
    {
      "dia": "2023-07-30",
      "min": 0.8
    },
    {
      "dia": "2023-07-30",
      "min": 2.77
    },
    {
      "dia": "2023-07-30",
      "min": 2.02
    },
    {
      "dia": "2023-07-30",
      "min": 1.93
    },
    {
      "dia": "2023-07-28",
      "min": 58.93
    },
    {
      "dia": "2023-07-28",
      "min": 1.75
    },
    {
      "dia": "2023-07-28",
      "min": 1.52
    },
    {
      "dia": "2023-07-28",
      "min": 19.82
    },
    {
      "dia": "2023-07-28",
      "min": 19.7
    },
    {
      "dia": "2023-07-28",
      "min": 19.6
    },
    {
      "dia": "2023-07-28",
      "min": 19.42
    },
    {
      "dia": "2023-07-28",
      "min": 19.28
    },
    {
      "dia": "2023-07-28",
      "min": 19.13
    },
    {
      "dia": "2023-07-28",
      "min": 19.0
    },
    {
      "dia": "2023-07-28",
      "min": 18.78
    },
    {
      "dia": "2023-07-28",
      "min": 18.57
    },
    {
      "dia": "2023-07-28",
      "min": 15.48
    },
    {
      "dia": "2023-07-28",
      "min": 11.1
    },
    {
      "dia": "2023-07-28",
      "min": 1.5
    },
    {
      "dia": "2023-07-28",
      "min": 1.43
    },
    {
      "dia": "2023-07-28",
      "min": 0.3
    },
    {
      "dia": "2023-07-28",
      "min": 0.08
    },
    {
      "dia": "2023-07-28",
      "min": 0.23
    },
    {
      "dia": "2023-07-30",
      "min": 1152.23
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-29",
      "min": 1.05
    },
    {
      "dia": "2023-07-29",
      "min": 0.93
    },
    {
      "dia": "2023-07-29",
      "min": 0.27
    },
    {
      "dia": "2023-07-29",
      "min": 0.12
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-28",
      "min": 0.15
    },
    {
      "dia": "2023-07-28",
      "min": 0.58
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 1.28
    },
    {
      "dia": "2023-07-28",
      "min": 1.25
    },
    {
      "dia": "2023-07-28",
      "min": 1.18
    },
    {
      "dia": "2023-07-28",
      "min": 13.65
    },
    {
      "dia": "2023-07-28",
      "min": null
    },
    {
      "dia": "2023-07-28",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.23
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 18.1
    },
    {
      "dia": "2023-07-30",
      "min": 0.58
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 3.47
    },
    {
      "dia": "2023-07-30",
      "min": 3.32
    },
    {
      "dia": "2023-07-28",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-28",
      "min": 0.15
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.68
    },
    {
      "dia": "2023-07-28",
      "min": 1.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.68
    },
    {
      "dia": "2023-07-30",
      "min": 1122.13
    },
    {
      "dia": "2023-07-30",
      "min": 1122.05
    },
    {
      "dia": "2023-07-30",
      "min": 1121.83
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-31",
      "min": 1415.77
    },
    {
      "dia": "2023-07-26",
      "min": 0.37
    },
    {
      "dia": "2023-07-26",
      "min": 0.42
    },
    {
      "dia": "2023-07-26",
      "min": 0.1
    },
    {
      "dia": "2023-07-26",
      "min": 0.97
    },
    {
      "dia": "2023-07-27",
      "min": null
    },
    {
      "dia": "2023-08-02",
      "min": 0.15
    },
    {
      "dia": "2023-08-02",
      "min": 0.15
    },
    {
      "dia": "2023-08-02",
      "min": 0.77
    },
    {
      "dia": "2023-08-02",
      "min": 0.43
    },
    {
      "dia": "2023-08-02",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 1923.2
    },
    {
      "dia": "2023-07-30",
      "min": 41.38
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.85
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 59.42
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 2.77
    },
    {
      "dia": "2023-07-30",
      "min": 0.93
    },
    {
      "dia": "2023-08-01",
      "min": 0.58
    },
    {
      "dia": "2023-08-01",
      "min": 0.32
    },
    {
      "dia": "2023-07-29",
      "min": 0.13
    },
    {
      "dia": "2023-07-29",
      "min": 2.68
    },
    {
      "dia": "2023-07-29",
      "min": 69.38
    },
    {
      "dia": "2023-08-01",
      "min": 0.15
    },
    {
      "dia": "2023-08-01",
      "min": 0.17
    },
    {
      "dia": "2023-08-01",
      "min": 0.13
    },
    {
      "dia": "2023-08-01",
      "min": 0.62
    },
    {
      "dia": "2023-08-01",
      "min": 0.45
    },
    {
      "dia": "2023-08-01",
      "min": 0.23
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 1947.65
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 1.23
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-27",
      "min": 0.18
    },
    {
      "dia": "2023-07-27",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 1142.97
    },
    {
      "dia": "2023-07-30",
      "min": 1141.33
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 2.43
    },
    {
      "dia": "2023-07-29",
      "min": 0.75
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": null
    },
    {
      "dia": "2023-07-29",
      "min": 0.18
    },
    {
      "dia": "2023-07-29",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.15
    },
    {
      "dia": "2023-07-28",
      "min": 0.38
    },
    {
      "dia": "2023-07-28",
      "min": 0.83
    },
    {
      "dia": "2023-07-28",
      "min": 0.52
    },
    {
      "dia": "2023-07-28",
      "min": 0.53
    },
    {
      "dia": "2023-07-28",
      "min": 0.48
    },
    {
      "dia": "2023-07-28",
      "min": 0.48
    },
    {
      "dia": "2023-07-28",
      "min": 0.27
    },
    {
      "dia": "2023-07-28",
      "min": 0.43
    },
    {
      "dia": "2023-07-28",
      "min": 0.38
    },
    {
      "dia": "2023-07-28",
      "min": 0.23
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 1.87
    },
    {
      "dia": "2023-07-28",
      "min": 1.82
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.02
    },
    {
      "dia": "2023-07-30",
      "min": 0.28
    },
    {
      "dia": "2023-07-30",
      "min": 0.2
    },
    {
      "dia": "2023-07-26",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 70.1
    },
    {
      "dia": "2023-07-28",
      "min": 69.98
    },
    {
      "dia": "2023-07-28",
      "min": 69.57
    },
    {
      "dia": "2023-07-28",
      "min": 35.22
    },
    {
      "dia": "2023-07-28",
      "min": 35.2
    },
    {
      "dia": "2023-07-28",
      "min": 35.15
    },
    {
      "dia": "2023-07-28",
      "min": 12.97
    },
    {
      "dia": "2023-07-28",
      "min": 12.48
    },
    {
      "dia": "2023-07-28",
      "min": 12.03
    },
    {
      "dia": "2023-07-28",
      "min": 11.6
    },
    {
      "dia": "2023-07-28",
      "min": 11.3
    },
    {
      "dia": "2023-07-28",
      "min": 10.78
    },
    {
      "dia": "2023-07-28",
      "min": 10.4
    },
    {
      "dia": "2023-07-28",
      "min": 10.02
    },
    {
      "dia": "2023-07-28",
      "min": 9.72
    },
    {
      "dia": "2023-07-28",
      "min": 9.35
    },
    {
      "dia": "2023-07-28",
      "min": 8.93
    },
    {
      "dia": "2023-07-28",
      "min": 8.43
    },
    {
      "dia": "2023-07-28",
      "min": 8.05
    },
    {
      "dia": "2023-07-28",
      "min": 7.68
    },
    {
      "dia": "2023-07-28",
      "min": 6.58
    },
    {
      "dia": "2023-07-28",
      "min": 6.23
    },
    {
      "dia": "2023-07-28",
      "min": 5.47
    },
    {
      "dia": "2023-07-28",
      "min": 5.07
    },
    {
      "dia": "2023-07-28",
      "min": 3.45
    },
    {
      "dia": "2023-07-28",
      "min": 1.97
    },
    {
      "dia": "2023-07-28",
      "min": 7.13
    },
    {
      "dia": "2023-07-28",
      "min": 5.38
    },
    {
      "dia": "2023-07-28",
      "min": 4.75
    },
    {
      "dia": "2023-07-28",
      "min": 7.82
    },
    {
      "dia": "2023-07-28",
      "min": 6.55
    },
    {
      "dia": "2023-07-30",
      "min": 1918.27
    },
    {
      "dia": "2023-07-30",
      "min": 1918.07
    },
    {
      "dia": "2023-07-30",
      "min": 43.7
    },
    {
      "dia": "2023-07-30",
      "min": 43.67
    },
    {
      "dia": "2023-07-30",
      "min": 43.63
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.23
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.88
    },
    {
      "dia": "2023-07-30",
      "min": 0.52
    },
    {
      "dia": "2023-07-30",
      "min": 80.72
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.88
    },
    {
      "dia": "2023-07-28",
      "min": 0.4
    },
    {
      "dia": "2023-07-28",
      "min": 0.38
    },
    {
      "dia": "2023-07-28",
      "min": 0.1
    },
    {
      "dia": "2023-07-28",
      "min": 0.73
    },
    {
      "dia": "2023-07-28",
      "min": 0.28
    },
    {
      "dia": "2023-07-28",
      "min": 0.3
    },
    {
      "dia": "2023-07-28",
      "min": 0.08
    },
    {
      "dia": "2023-07-28",
      "min": 3.83
    },
    {
      "dia": "2023-07-28",
      "min": 3.55
    },
    {
      "dia": "2023-07-28",
      "min": 2.08
    },
    {
      "dia": "2023-07-28",
      "min": 0.4
    },
    {
      "dia": "2023-07-28",
      "min": 0.58
    },
    {
      "dia": "2023-07-28",
      "min": 0.6
    },
    {
      "dia": "2023-07-28",
      "min": 0.1
    },
    {
      "dia": "2023-07-29",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 492.68
    },
    {
      "dia": "2023-07-26",
      "min": 0.15
    },
    {
      "dia": "2023-07-26",
      "min": 0.13
    },
    {
      "dia": "2023-07-26",
      "min": 0.8
    },
    {
      "dia": "2023-08-01",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 2.33
    },
    {
      "dia": "2023-07-26",
      "min": 0.13
    },
    {
      "dia": "2023-07-26",
      "min": 0.13
    },
    {
      "dia": "2023-07-26",
      "min": 0.52
    },
    {
      "dia": "2023-07-26",
      "min": 1.28
    },
    {
      "dia": "2023-07-27",
      "min": 0.15
    },
    {
      "dia": "2023-07-27",
      "min": 0.13
    },
    {
      "dia": "2023-07-27",
      "min": 0.77
    },
    {
      "dia": "2023-07-27",
      "min": 0.65
    },
    {
      "dia": "2023-07-27",
      "min": 0.27
    },
    {
      "dia": "2023-07-27",
      "min": 0.53
    },
    {
      "dia": "2023-07-27",
      "min": 0.57
    },
    {
      "dia": "2023-07-27",
      "min": 0.73
    },
    {
      "dia": "2023-07-27",
      "min": 0.63
    },
    {
      "dia": "2023-07-27",
      "min": 0.45
    },
    {
      "dia": "2023-07-27",
      "min": 0.07
    },
    {
      "dia": "2023-07-27",
      "min": 0.12
    },
    {
      "dia": "2023-07-27",
      "min": 0.28
    },
    {
      "dia": "2023-07-27",
      "min": 0.73
    },
    {
      "dia": "2023-07-28",
      "min": 83.43
    },
    {
      "dia": "2023-07-28",
      "min": 82.18
    },
    {
      "dia": "2023-07-28",
      "min": 81.77
    },
    {
      "dia": "2023-07-28",
      "min": 81.22
    },
    {
      "dia": "2023-07-28",
      "min": 81.08
    },
    {
      "dia": "2023-07-30",
      "min": 0.82
    },
    {
      "dia": "2023-07-30",
      "min": 0.62
    },
    {
      "dia": "2023-07-30",
      "min": 0.12
    },
    {
      "dia": "2023-07-30",
      "min": 0.1
    },
    {
      "dia": "2023-07-29",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.03
    },
    {
      "dia": "2023-07-29",
      "min": 1.12
    },
    {
      "dia": "2023-07-29",
      "min": 0.33
    },
    {
      "dia": "2023-07-29",
      "min": 0.05
    },
    {
      "dia": "2023-07-29",
      "min": 2.15
    },
    {
      "dia": "2023-07-29",
      "min": 2.12
    },
    {
      "dia": "2023-07-29",
      "min": 3.25
    },
    {
      "dia": "2023-07-29",
      "min": 4.48
    },
    {
      "dia": "2023-07-28",
      "min": 41.52
    },
    {
      "dia": "2023-07-28",
      "min": 3.82
    },
    {
      "dia": "2023-07-27",
      "min": 0.42
    },
    {
      "dia": "2023-07-27",
      "min": 0.08
    },
    {
      "dia": "2023-07-27",
      "min": 0.68
    },
    {
      "dia": "2023-07-27",
      "min": 0.9
    },
    {
      "dia": "2023-07-27",
      "min": 1.27
    },
    {
      "dia": "2023-07-27",
      "min": 0.88
    },
    {
      "dia": "2023-07-27",
      "min": 7.33
    },
    {
      "dia": "2023-07-27",
      "min": 6.62
    },
    {
      "dia": "2023-07-27",
      "min": 14.93
    },
    {
      "dia": "2023-07-27",
      "min": 31.2
    },
    {
      "dia": "2023-07-27",
      "min": 31.1
    },
    {
      "dia": "2023-07-28",
      "min": 0.23
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 0.13
    },
    {
      "dia": "2023-07-28",
      "min": 1007.42
    },
    {
      "dia": "2023-07-30",
      "min": 1586.88
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.83
    },
    {
      "dia": "2023-07-30",
      "min": 0.48
    },
    {
      "dia": "2023-07-30",
      "min": 0.38
    },
    {
      "dia": "2023-07-30",
      "min": 0.2
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-28",
      "min": 5.9
    },
    {
      "dia": "2023-07-28",
      "min": 5.8
    },
    {
      "dia": "2023-07-28",
      "min": 125.62
    },
    {
      "dia": "2023-07-28",
      "min": 121.05
    },
    {
      "dia": "2023-07-28",
      "min": 120.52
    },
    {
      "dia": "2023-07-28",
      "min": 120.38
    },
    {
      "dia": "2023-07-28",
      "min": 120.0
    },
    {
      "dia": "2023-07-28",
      "min": 67.07
    },
    {
      "dia": "2023-07-28",
      "min": 62.17
    },
    {
      "dia": "2023-07-30",
      "min": 0.17
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-31",
      "min": 10.53
    },
    {
      "dia": "2023-07-31",
      "min": 10.45
    },
    {
      "dia": "2023-07-31",
      "min": 10.28
    },
    {
      "dia": "2023-07-31",
      "min": 10.1
    },
    {
      "dia": "2023-07-31",
      "min": 10.0
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-28",
      "min": 0.6
    },
    {
      "dia": "2023-07-28",
      "min": 0.48
    },
    {
      "dia": "2023-07-28",
      "min": 0.52
    },
    {
      "dia": "2023-07-28",
      "min": 0.38
    },
    {
      "dia": "2023-07-28",
      "min": 0.48
    },
    {
      "dia": "2023-07-28",
      "min": 0.0
    },
    {
      "dia": "2023-07-28",
      "min": 29.48
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 66.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.17
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-28",
      "min": 0.15
    },
    {
      "dia": "2023-07-28",
      "min": 9.28
    },
    {
      "dia": "2023-07-29",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.15
    },
    {
      "dia": "2023-07-29",
      "min": 0.63
    },
    {
      "dia": "2023-07-29",
      "min": 5.67
    },
    {
      "dia": "2023-07-29",
      "min": 10.53
    },
    {
      "dia": "2023-07-29",
      "min": 3.03
    },
    {
      "dia": "2023-07-29",
      "min": 2.9
    },
    {
      "dia": "2023-07-29",
      "min": 0.63
    },
    {
      "dia": "2023-07-31",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 2684.18
    },
    {
      "dia": "2023-07-30",
      "min": 2683.73
    },
    {
      "dia": "2023-07-30",
      "min": 1911.1
    },
    {
      "dia": "2023-08-01",
      "min": 0.17
    },
    {
      "dia": "2023-08-01",
      "min": 0.13
    },
    {
      "dia": "2023-08-01",
      "min": 0.15
    },
    {
      "dia": "2023-08-01",
      "min": 0.63
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 2.32
    },
    {
      "dia": "2023-07-30",
      "min": 0.18
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 1143.78
    },
    {
      "dia": "2023-07-30",
      "min": 0.18
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 1.1
    },
    {
      "dia": "2023-07-30",
      "min": 0.67
    },
    {
      "dia": "2023-07-30",
      "min": 0.63
    },
    {
      "dia": "2023-07-30",
      "min": 0.43
    },
    {
      "dia": "2023-07-30",
      "min": 0.35
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 2.43
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-08-02",
      "min": 0.18
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 1155.07
    },
    {
      "dia": "2023-07-30",
      "min": 1154.7
    },
    {
      "dia": "2023-07-30",
      "min": 1154.2
    },
    {
      "dia": "2023-07-30",
      "min": 1152.98
    },
    {
      "dia": "2023-07-30",
      "min": 1152.08
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 1923.97
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 1630.75
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.8
    },
    {
      "dia": "2023-07-30",
      "min": 0.42
    },
    {
      "dia": "2023-07-30",
      "min": 0.23
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 0.13
    },
    {
      "dia": "2023-07-30",
      "min": 21.07
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": null
    },
    {
      "dia": "2023-07-30",
      "min": 2695.82
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 0.15
    },
    {
      "dia": "2023-07-30",
      "min": 1.22
    },
    {
      "dia": "2023-07-30",
      "min": 0.38
    },
    {
      "dia": "2023-08-01",
      "min": 0.2
    },
    {
      "dia": "2023-08-01",
      "min": 0.15
    },
    {
      "dia": "2023-08-01",
      "min": 0.13
    },
    {
      "dia": "2023-08-01",
      "min": 0.13
    },
    {
      "dia": "2023-08-01",
      "min": 0.13
    },
    {
      "dia": "2023-08-01",
      "min": null
    }
  ]
};
