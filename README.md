# Tablero operativo — Campaña WhatsApp

Dashboard estático (HTML/CSS/JS, sin frameworks ni build step) para el **RETO 3**
del caso técnico de Analista de Datos: consolida el funnel de entrega, el SLA
de respuesta y el volumen horario de la campaña, con dos filtros (fecha y
estado) para que un supervisor navegue la data sin tocar código.

Todos los números vienen de `mensajes_limpios.csv` (salida real de
`reto1_pipeline.py` sobre `prueba.txt`), agregados con la misma lógica que
`05_consultas_dashboard.sql`. No hay datos inventados ni de ejemplo.

## Estructura

```
index.html               estructura de la página
css/styles.css            estilos (sin dependencias externas de CSS)
js/data.js                 datos reales, ya agregados (ver "Cómo se generó")
js/app.js                  filtrado y render (vanilla JS, sin librerías)
scripts/generar_data.py    regenera js/data.js desde mensajes_limpios.csv
```

Las únicas llamadas externas son a Google Fonts (Space Grotesk, IBM Plex Sans
e IBM Plex Mono), declaradas en el `<head>` de `index.html`. Todo lo demás es
autocontenido.

## Ver el tablero en local

No requiere servidor ni instalación. Basta con abrir `index.html` en el
navegador, o servirlo con cualquier servidor estático:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Cómo se generó `js/data.js`

`js/data.js` es una vista materializada en JSON: el mismo principio que la
propuesta de arquitectura del RETO 5 (vistas materializadas + refresh
periódico), pero llevado al extremo de un sitio estático. En vez de que el
navegador consulte una base de datos en cada clic de "Actualizar", el archivo
ya trae los agregados listos.

Para regenerarlo con datos nuevos (nuevo extracto, nuevo periodo):

```bash
pip install pandas
python3 scripts/generar_data.py ruta/a/mensajes_limpios.csv js/data.js
```

El script reimplementa en pandas exactamente las mismas agregaciones de
`05_consultas_dashboard.sql` (funnel por día, SLA con la misma lógica de
`MIN() OVER (... ROWS BETWEEN 1 FOLLOWING AND UNBOUNDED FOLLOWING)`, volumen
por hora, categorías, errores y plantillas). Se corre una vez cada 15–30 min
(cron, GitHub Action programada, o manualmente) — ese es el "refresh"; nadie
más toca la base de datos al abrir la página.

## Desplegar en GitHub

```bash
git init
git add .
git commit -m "Tablero operativo campaña WhatsApp"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

## Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) → **Add New → Project**.
2. Importa el repositorio de GitHub recién creado.
3. Framework preset: **Other**. No hace falta build command ni output
   directory (el sitio ya es estático): déjalos vacíos o con los valores por
   defecto.
4. Deploy. Vercel te da una URL pública (`tu-proyecto.vercel.app`) que puedes
   compartir en la presentación en video del caso técnico.

No se necesita `vercel.json`: al no haber paso de build, Vercel sirve
`index.html` directamente desde la raíz.

## Filtros

- **Día**: chips de los 9 días del periodo (25 jul – 2 ago 2023). Se pueden
  activar/desactivar individualmente; "Todos" los reactiva de una vez.
- **Estado**: `sent / delivered / read / failed`. Aplica a los paneles que
  realmente dependen del estado del mensaje saliente — Funnel, Plantillas y
  Errores —, porque `status` solo varía en mensajes `outgoing` (los
  `incoming`/`activity` del dataset real siempre llegan como `sent`, así que
  aplicar el filtro a SLA o al volumen horario no tendría sentido con estos
  datos y el tablero no lo simula).

Ambos filtros son 100% client-side: recalculan sobre los agregados que ya
trae `js/data.js`, sin llamadas de red.


## Versión final de presentación
- Filtro de periodo con fecha inicial y final, limitado estrictamente a 2023-07-25 a 2023-08-02.
- El periodo recalcula KPIs, funnel, SLA, heatmap, categorías, plantillas y errores.
- Filtro de estado aplicado a funnel/plantillas y habilitación contextual del panel de errores.
- SLA incorpora P90 para complementar promedio y mediana.
- El dashboard sigue consumiendo `js/data.js`; no consulta la base de datos al abrirse.
