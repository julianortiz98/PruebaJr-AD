/* =====================================================================
   Campaña WhatsApp — Tablero operativo
   Data: window.DASHBOARD_DATA (js/data.js), generada desde el pipeline.
   El dashboard solo filtra y visualiza los agregados validados.
   ===================================================================== */
(function () {
  "use strict";

  const DATA = window.DASHBOARD_DATA;
  const MESES = { "07": "jul", "08": "ago" };
  const STATUS_LABEL = { sent: "Enviado", delivered: "Entregado", read: "Leído", failed: "Fallido" };
  const STATUS_COLOR = { sent: "var(--wait)", delivered: "var(--data)", read: "var(--ok)", failed: "var(--fail)" };
  const STATUS_ORDER = ["sent", "delivered", "read", "failed"];
  const CATEGORIA_ORDER = ["Pedido", "Soporte", "Queja", "Sin contenido", "Otro / sin clasificar"];
  const CATEGORIA_COLOR = { "Pedido":"var(--data)", "Soporte":"var(--wait)", "Queja":"var(--fail)", "Sin contenido":"var(--muted)", "Otro / sin clasificar":"var(--line)" };

  const state = { from: DATA.meta.periodo_inicio, to: DATA.meta.periodo_fin, status: "todos" };

  function formatDayShort(iso) { const parts=iso.split("-"); return `${parseInt(parts[2],10)} ${MESES[parts[1]]||parts[1]}`; }
  function fmtInt(n) { return Math.round(n).toLocaleString("es-CO"); }
  function fmtPct(n,decimals) { if(n==null||!isFinite(n)) return "—"; return n.toFixed(decimals==null?2:decimals).replace(".",",")+"%"; }
  function fmtMin(n) {
    if(n==null||!isFinite(n)) return "—";
    if(n>=60){const h=Math.floor(n/60),m=Math.round(n%60);return `${h} h ${m} min`;}
    const v=n<10?n.toFixed(1).replace(".",","):Math.round(n).toString(); return `${v} min`;
  }
  function median(arr){ if(!arr.length)return null; const s=arr.slice().sort((a,b)=>a-b),m=(s.length-1)/2; return (s[Math.floor(m)]+s[Math.ceil(m)])/2; }
  function percentile(arr,pct){ if(!arr.length)return null; const s=arr.slice().sort((a,b)=>a-b); const idx=(s.length-1)*pct; const lo=Math.floor(idx),hi=Math.ceil(idx); return lo===hi?s[lo]:s[lo]+(s[hi]-s[lo])*(idx-lo); }
  function barRow(opts){ const pct=Math.min(Math.max(opts.pct||0,0),100); return `<div class="bar-row" data-active="${!!opts.active}"><div class="bar-row__label">${opts.label}</div><div class="bar-track"><div class="bar-fill" style="width:${pct.toFixed(1)}%;background:${opts.color}"></div></div><div class="bar-row__value">${opts.valueText}</div></div>`; }
  function dayInRange(d){ return d>=state.from && d<=state.to; }
  function selectedDays(){ return DATA.meta.dias.filter(dayInRange); }

  function computeFunnel(){
    const totals={sent:0,delivered:0,read:0,failed:0};
    DATA.funnel_por_dia.forEach(r=>{if(dayInRange(r.dia)) totals[r.status]+=r.cantidad;});
    const total=STATUS_ORDER.reduce((a,s)=>a+totals[s],0); return {totals,total};
  }
  function computeSlaRecords(){ return DATA.sla_incoming.filter(r=>dayInRange(r.dia)); }
  function computeSlaStats(){
    const recs=computeSlaRecords(), vals=recs.filter(r=>r.min!=null).map(r=>r.min);
    const mean=vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null;
    return {total:recs.length,mean,median:median(vals),p90:percentile(vals,.90),lt1:recs.length?100*recs.filter(r=>r.min!=null&&r.min<1).length/recs.length:null,sinSeg:recs.length?100*(recs.length-vals.length)/recs.length:null};
  }
  function computeSlaPorDia(){ return DATA.sla_por_dia.filter(r=>dayInRange(r.dia)); }
  function computeHourlyByDay(){
    const byDay={}; DATA.hora_por_dia.forEach(r=>{if(!dayInRange(r.dia))return;if(!byDay[r.dia])byDay[r.dia]=new Array(24).fill(0);byDay[r.dia][r.hora]=r.cantidad;}); return byDay;
  }
  function computeCategorias(){
    const totals={}; CATEGORIA_ORDER.forEach(c=>totals[c]=0); DATA.categorias_por_dia.forEach(r=>{if(dayInRange(r.dia)&&totals[r.categoria]!=null)totals[r.categoria]+=r.cantidad;});
    return {totals,total:Object.values(totals).reduce((a,b)=>a+b,0)};
  }
  function computeErrores(){
    const totals={parametros:0,otros:0}; DATA.errores_por_dia.forEach(r=>{if(dayInRange(r.dia))totals[r.bucket]+=r.cantidad;}); return {totals,total:totals.parametros+totals.otros};
  }
  function computePlantillas(){
    const map={}; DATA.plantillas_por_dia.forEach(r=>{if(!dayInRange(r.dia))return;if(!map[r.plantilla])map[r.plantilla]={sent:0,delivered:0,read:0,failed:0,total:0};map[r.plantilla][r.status]+=r.cantidad;map[r.plantilla].total+=r.cantidad;}); return map;
  }

  function renderMasthead(){
    document.getElementById("masthead-subtitle").textContent=`${formatDayShort(DATA.meta.periodo_inicio)} – ${formatDayShort(DATA.meta.periodo_fin)} 2023 · datos reales de prueba.txt`;
    document.getElementById("masthead-stats").innerHTML=`<div class="masthead__stat"><b>${fmtInt(DATA.meta.total_mensajes)}</b><span>mensajes</span></div><div class="masthead__stat"><b>${fmtInt(DATA.meta.total_outgoing)}</b><span>salientes</span></div><div class="masthead__stat"><b>${fmtInt(DATA.meta.total_incoming)}</b><span>entrantes</span></div>`;
    document.getElementById("footer-generated").textContent=`Datos generados el ${DATA.meta.generado_el} · pipeline: ${DATA.meta.fuente}`;
  }
  function clampDate(v){ return v<DATA.meta.periodo_inicio?DATA.meta.periodo_inicio:v>DATA.meta.periodo_fin?DATA.meta.periodo_fin:v; }
  function validateDates(changed){
    const from=document.getElementById("date-from"),to=document.getElementById("date-to");
    from.value=clampDate(from.value||DATA.meta.periodo_inicio); to.value=clampDate(to.value||DATA.meta.periodo_fin);
    if(from.value>to.value){ if(changed==="from")to.value=from.value; else from.value=to.value; }
    state.from=from.value; state.to=to.value;
  }
  function initFilters(){
    const from=document.getElementById("date-from"),to=document.getElementById("date-to");
    from.min=DATA.meta.periodo_inicio;from.max=DATA.meta.periodo_fin;from.value=state.from;
    to.min=DATA.meta.periodo_inicio;to.max=DATA.meta.periodo_fin;to.value=state.to;
    from.addEventListener("change",()=>{validateDates("from");renderData();});
    to.addEventListener("change",()=>{validateDates("to");renderData();});
    document.getElementById("reset-days").addEventListener("click",()=>{state.from=DATA.meta.periodo_inicio;state.to=DATA.meta.periodo_fin;from.value=state.from;to.value=state.to;renderData();});
    document.getElementById("status-filter").addEventListener("change",e=>{state.status=e.target.value;renderData();});
  }

  function renderHero(){
    const {totals,total}=computeFunnel(),failPct=total?100*totals.failed/total:null;
    document.getElementById("hero-number").textContent=failPct!=null?fmtPct(failPct):"—";
    const periodLabel=state.from===state.to?formatDayShort(state.from):`${formatDayShort(state.from)} – ${formatDayShort(state.to)}`;
    document.getElementById("hero-caption").innerHTML=total?`de los mensajes salientes en <strong>${periodLabel}</strong> terminó en <strong>failed</strong>. El detalle por día permite aislar el incidente del 29 jul y validar su concentración.`:`Selecciona un periodo dentro de las fechas disponibles.`;
    const sla=computeSlaStats(); document.getElementById("chip-sla-avg").textContent=fmtMin(sla.mean);document.getElementById("chip-sla-median").textContent=fmtMin(sla.median);document.getElementById("chip-lt1").textContent=sla.lt1!=null?fmtPct(sla.lt1,1):"—";
  }
  function renderFunnel(){
    const {totals,total}=computeFunnel();
    const denominator=state.status==="todos"?total:(totals[state.status]||0);
    document.getElementById("funnel-bars").innerHTML=STATUS_ORDER.map(s=>{
      const pct=total?100*totals[s]/total:0;
      return barRow({label:STATUS_LABEL[s],pct,valueText:`${fmtInt(totals[s])} · ${fmtPct(pct,1)}`,color:STATUS_COLOR[s],active:state.status===s});
    }).join("");
    const note=document.getElementById("funnel-note");
    if(!total)note.textContent="Sin mensajes salientes en el periodo seleccionado.";
    else if(state.status==="todos")note.innerHTML=`<b>${fmtInt(total)}</b> mensajes salientes en el periodo seleccionado.`;
    else note.innerHTML=`Filtro activo: <b>${fmtInt(denominator)}</b> mensajes en estado <b>${STATUS_LABEL[state.status]}</b>. Las demás barras quedan visibles como referencia.`;
  }
  function renderSla(){
    const stats=computeSlaStats();
    document.getElementById("sla-kpis").innerHTML=`<div class="kpi"><b>${fmtMin(stats.mean)}</b><span>promedio</span></div><div class="kpi"><b>${fmtMin(stats.median)}</b><span>mediana</span></div><div class="kpi"><b>${fmtMin(stats.p90)}</b><span>P90</span></div><div class="kpi"><b>${stats.lt1!=null?fmtPct(stats.lt1,1):"—"}</b><span>&lt; 1 min</span></div><div class="kpi"><b>${stats.sinSeg!=null?fmtPct(stats.sinSeg,1):"—"}</b><span>sin seguimiento</span></div>`;
    const porDia=computeSlaPorDia(),maxAvg=Math.max(1,...porDia.map(r=>r.con_seguimiento?r.suma_min/r.con_seguimiento:0));
    document.getElementById("sla-bars").innerHTML=porDia.map(r=>{const avg=r.con_seguimiento?r.suma_min/r.con_seguimiento:0;return barRow({label:formatDayShort(r.dia),pct:100*avg/maxAvg,valueText:r.total===0?"sin mensajes":r.con_seguimiento?fmtMin(avg):"sin seguimiento",color:"var(--data)",active:false});}).join("");
    document.getElementById("sla-note").innerHTML=stats.total?`Minutos promedio hasta la siguiente acción del equipo (activity/outgoing), por día — <b>${fmtInt(stats.total)}</b> mensajes entrantes en el periodo.`:"Sin mensajes entrantes en el periodo seleccionado.";
  }
  function renderHeatmap(){
    const byDay=computeHourlyByDay(),days=selectedDays(),container=document.getElementById("heatmap"),hourLabels=document.getElementById("heat-hourlabels"),note=document.getElementById("heatmap-note");
    if(!days.length){container.innerHTML="";hourLabels.innerHTML="";note.textContent="Selecciona un periodo válido.";return;}
    const totalPerHour=new Array(24).fill(0);days.forEach(d=>(byDay[d]||new Array(24).fill(0)).forEach((v,h)=>totalPerHour[h]+=v));
    const maxDayCell=Math.max(1,...days.flatMap(d=>byDay[d]||new Array(24).fill(0))),maxTotalCell=Math.max(1,...totalPerHour),colTemplate=`74px repeat(24,minmax(24px,1fr))`;
    container.style.gridTemplateColumns=colTemplate;hourLabels.style.display="grid";hourLabels.style.gridTemplateColumns=colTemplate;
    let html="";days.forEach(d=>{html+=`<div class="heat-rowlabel">${formatDayShort(d)}</div>`;(byDay[d]||new Array(24).fill(0)).forEach((v,h)=>{const alpha=v?(0.16+0.74*v/maxDayCell).toFixed(2):0;html+=`<div class="heat-cell" style="background:${v?`rgba(224,166,62,${alpha})`:""}" title="${formatDayShort(d)}, ${h}:00 — ${v} mensajes" aria-label="${formatDayShort(d)}, ${h} horas: ${v} mensajes"></div>`;});});
    html+=`<div class="heat-rowlabel heat-rowlabel--total">Total</div>`;totalPerHour.forEach((v,h)=>{const alpha=v?(0.22+0.7*v/maxTotalCell).toFixed(2):0;html+=`<div class="heat-cell heat-cell--total" style="background:${v?`rgba(111,179,199,${alpha})`:""}" title="Total ${h}:00 — ${v} mensajes">${v||""}</div>`;});
    container.innerHTML=html;let labels="<span></span>";for(let h=0;h<24;h++)labels+=`<span>${h}</span>`;hourLabels.innerHTML=labels;
    const peakHour=totalPerHour.indexOf(Math.max(...totalPerHour));note.innerHTML=totalPerHour[peakHour]?`Pico en el periodo seleccionado: <b>${peakHour}:00</b> con <b>${fmtInt(totalPerHour[peakHour])}</b> mensajes entrantes.`:"Sin mensajes entrantes en el periodo seleccionado.";
  }
  function renderCategorias(){
    const {totals,total}=computeCategorias();document.getElementById("categorias-bars").innerHTML=CATEGORIA_ORDER.map(c=>{const pct=total?100*totals[c]/total:0;return barRow({label:c,pct,valueText:`${fmtInt(totals[c])} · ${fmtPct(pct,1)}`,color:CATEGORIA_COLOR[c],active:false});}).join("");
    const accionables=totals.Pedido+totals.Soporte+totals.Queja,pctAcc=total?100*accionables/total:0;document.getElementById("categorias-note").innerHTML=total?`<b>${fmtInt(accionables)}</b> mensajes (${fmtPct(pctAcc,1)}) requieren alguna acción del equipo; el resto es conversacional o sin contenido clasificable.`:"Sin mensajes entrantes en el periodo seleccionado.";
  }
  function renderErrores(){
    const panel=document.getElementById("errores-panel"),note=document.getElementById("errores-note");
    if(state.status!=="todos"&&state.status!=="failed"){
      panel.classList.add("panel--muted");document.getElementById("errores-bars").innerHTML="<p>El filtro de estado activo no corresponde a errores de envío.</p>";note.innerHTML=`Este panel se habilita al seleccionar <b>Todos</b> o <b>Fallido</b>.`;return;
    }
    panel.classList.remove("panel--muted");const {totals,total}=computeErrores();document.getElementById("errores-bars").innerHTML=[{key:"parametros",label:"Parámetros de plantilla",color:"var(--fail)"},{key:"otros",label:"Otros errores",color:"var(--wait)"}].map(({key,label,color})=>{const pct=total?100*totals[key]/total:0;return barRow({label,pct,valueText:`${fmtInt(totals[key])} · ${fmtPct(pct,1)}`,color,active:false});}).join("");
    note.innerHTML=total?`<b>${fmtPct(100*totals.parametros/total,1)}</b> de los mensajes fallidos en el periodo comparten el error de parámetros de plantilla.`:"Sin mensajes fallidos en el periodo seleccionado.";
  }
  function renderPlantillas(){
    const map=computePlantillas();
    const rows=Object.entries(map).map(([plantilla,v])=>{
      const visibleStatus=state.status==="todos"?null:state.status;
      const visible=visibleStatus? v[visibleStatus]:v.total;
      const pct=visibleStatus? (state.status==="failed"?(100*v.failed/(v.total||1)):(100*visible/(v.total||1))):(100*v.failed/(v.total||1));
      return {plantilla,...v,visible,pct};
    }).filter(r=>state.status==="todos"||r.visible>0).sort((a,b)=>b.visible-a.visible);
    const filtered=state.status!=="todos";
    document.querySelector("#plantillas-table thead tr").innerHTML=`<th>Plantilla</th><th>${filtered?STATUS_LABEL[state.status]:"Envíos"}</th><th>Fallidos</th><th>% fallo</th>${filtered?`<th>Total</th>`:""}`;
    const tbody=document.querySelector("#plantillas-table tbody");
    if(!rows.length){tbody.innerHTML=`<tr><td colspan="${filtered?5:4}" style="color:var(--muted)">Sin registros para el filtro seleccionado.</td></tr>`;return;}
    tbody.innerHTML=rows.map(r=>`<tr class="${r.pct>=50?"row-risk":""}"><td class="name-cell">${r.plantilla}</td><td>${fmtInt(r.visible)}</td><td>${fmtInt(r.failed)}</td><td>${fmtPct(r.pct,1)}</td>${filtered?`<td>${fmtInt(r.total)}</td>`:""}</tr>`).join("");
  }

  const DIAGNOSIS=[
    {titulo:"1. Problemas de entrega",dato:"55,68% de los mensajes salientes terminaron en failed.",interpretacion:"Al desagregar por día, el 98,4% de esos fallos ocurrió en una sola fecha (29 de julio); el dato apunta a un incidente concentrado, no demuestra por sí solo un problema crónico de infraestructura.",accion:"Reportar fallos por día y por plantilla, y no usar únicamente el acumulado histórico como KPI."},
    {titulo:"2. Errores de sistema",dato:"El 98,4% de los mensajes fallidos (1.374 de 1.396) comparte el mismo error de parámetros de plantilla.",interpretacion:"El código de error apunta a una discrepancia entre los parámetros enviados y los esperados por la plantilla.",accion:"Validar automáticamente el número de variables antes de enviar cualquier plantilla."},
    {titulo:"3. Plantillas afectadas",dato:"“lanzamiento_” y “lanzamiento__inactivas” fallaron el 100% de sus envíos en el periodo observado.",interpretacion:"El patrón es consistente con un problema puntual de parametrización de esas plantillas.",accion:"Congelar esas plantillas hasta confirmar sus parámetros vigentes y exigir un envío de prueba antes de una campaña masiva."},
    {titulo:"4. Volumen de mensajes de clientes",dato:"430 incoming en 9 días, con picos de 129 (28 jul) y 178 (30 jul).",interpretacion:"Los picos rodean el incidente del 29 de julio: existe asociación temporal, pero estos datos no prueban causalidad.",accion:"Activar un protocolo de refuerzo de soporte por 24–48 h al detectar una plantilla con fallo masivo."},
    {titulo:"5. Categorías de mensajes",dato:"69,3% de los incoming no clasifica en las palabras clave usadas; de los que sí clasifican, Pedido concentra la mayor parte.",interpretacion:"La mayoría del tráfico es conversacional o queda sin clasificar; el volumen accionable es menor que el total bruto.",accion:"Automatizar saludos y agradecimientos y reservar capacidad humana para pedidos y quejas."},
    {titulo:"6. Horarios de mayor demanda",dato:"No se observan incoming entre la 1am y las 11am; los picos están alrededor de las 3pm, 4pm y 7pm.",interpretacion:"La ventana operativa relevante se concentra desde el mediodía, con olas de actividad en media tarde y noche.",accion:"Concentrar capacidad entre 2pm y 5pm y evaluar refuerzo puntual alrededor de las 7pm."},
    {titulo:"7. Señales de saturación operativa",dato:"SLA promedio 127,2 min, mediana 0,7 min y 48,1% responde en menos de 1 min; el 30 de julio el promedio subió a 292 min.",interpretacion:"La diferencia entre promedio y mediana muestra casos extremos. El dataset permite observar un pico puntual, pero no prueba por sí solo saturación crónica.",accion:"Monitorear mediana y P90 del SLA y definir un plan de desborde para picos de volumen."}
  ];
  function renderDiagnosis(){document.getElementById("diagnosis-list").innerHTML=DIAGNOSIS.map((d,i)=>`<details class="diagnosis-item" ${i===0?"open":""}><summary>${d.titulo}</summary><div class="diagnosis-item__body"><p><b>Dato:</b> ${d.dato}</p><p><b>Interpretación:</b> ${d.interpretacion}</p><p><b>Acción:</b> ${d.accion}</p></div></details>`).join("");}
  function renderData(){validateDates();renderHero();renderFunnel();renderSla();renderHeatmap();renderCategorias();renderErrores();renderPlantillas();}
  function init(){renderMasthead();initFilters();renderDiagnosis();renderData();}
  document.addEventListener("DOMContentLoaded",init);
})();
