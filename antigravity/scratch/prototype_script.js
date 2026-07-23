
/* =====================================================================================
   CF ENERGY CLOUD — ENTERPRISE EMS DASHBOARD PROTOTYPE
   Front-end only. All data below is deterministically-seeded mock data standing in
   for the future backend/API. Every dashboard, widget and layout change lives in
   memory for this session so the flow can be demoed end-to-end without a server.
   ===================================================================================== */

/* ---------------------------------------------------------------------------------
   1. DATA LAYER — facility hierarchy, metric catalog, deterministic mock generators
   --------------------------------------------------------------------------------- */

const ORG = {
  name: 'Greenfield Textiles Ltd.',
  buildings: [
    { id:'hq', name:'HQ Tower', floors: [
        { id:'hq-g', name:'Ground Floor', depts:[{id:'hq-g-lobby',name:'Lobby & Security'},{id:'hq-g-retail',name:'Retail Outlet'}] },
        { id:'hq-1', name:'1st Floor', depts:[{id:'hq-1-admin',name:'Admin'},{id:'hq-1-hr',name:'HR & Finance'}] },
        { id:'hq-2', name:'2nd Floor', depts:[{id:'hq-2-it',name:'IT & Server Room'},{id:'hq-2-exec',name:'Executive Suite'}] },
      ] },
    { id:'plant', name:'Manufacturing Plant', floors: [
        { id:'plant-g', name:'Production Floor', depts:[{id:'plant-g-weaving',name:'Weaving Unit'},{id:'plant-g-dyeing',name:'Dyeing Unit'},{id:'plant-g-pack',name:'Packing'}] },
        { id:'plant-1', name:'Utility Floor', depts:[{id:'plant-1-hvac',name:'HVAC Plant'},{id:'plant-1-compressor',name:'Compressor Room'}] },
      ] },
    { id:'wh', name:'Warehouse & Logistics', floors: [
        { id:'wh-g', name:'Ground Storage', depts:[{id:'wh-g-cold',name:'Cold Storage'},{id:'wh-g-dispatch',name:'Dispatch Bay'}] },
      ] },
  ]
};

const CATEGORIES = {
  overview:      { label:'Overview',              icon:'layout-dashboard',  color:'#F5A623' },
  energy:        { label:'Loads & Energy',        icon:'zap',               color:'#F5A623' },
  solar:         { label:'Solar',                 icon:'sun',               color:'#16A34A' },
  generator:     { label:'Generators',             icon:'fuel',              color:'#DC2626' },
  grid:          { label:'Grid / Utility',        icon:'plug-zap',          color:'#2563EB' },
  battery:       { label:'Battery Storage',       icon:'battery-charging', color:'#8B5CF6' },
  water:         { label:'Water Usage',           icon:'droplets',          color:'#06B6D4' },
  powerquality:  { label:'Power Quality',         icon:'activity',          color:'#F97316' },
  alarms:        { label:'Alarms & Events',       icon:'triangle-alert',    color:'#DC2626' },
  cost:          { label:'Cost & Billing',        icon:'credit-card',       color:'#16A34A' },
  carbon:        { label:'Sustainability',        icon:'leaf',              color:'#10B981' },
};

// kind: series | multiseries | gauge | stat | donut | table
const METRICS = [
  { id:'total_load',        cat:'energy',       label:'Total Load',                unit:'kW',  kind:'series',     base:180 },
  { id:'load_phase',        cat:'energy',       label:'Load by Phase (A/B/C)',     unit:'kW',  kind:'multiseries',base:60  },
  { id:'peak_demand',       cat:'energy',       label:'Peak Demand',               unit:'kW',  kind:'series',     base:230 },
  { id:'load_factor',       cat:'energy',       label:'Load Factor',               unit:'%',   kind:'gauge',      base:72, max:100 },

  { id:'solar_gen',         cat:'solar',        label:'Solar Generation',          unit:'kW',  kind:'series',     base:95  },
  { id:'pv_efficiency',     cat:'solar',        label:'PV Efficiency',             unit:'%',   kind:'gauge',      base:84, max:100 },
  { id:'irradiance',        cat:'solar',        label:'Solar Irradiance',          unit:'W/m²',kind:'series',     base:650 },

  { id:'gen_output',        cat:'generator',    label:'Generator Output',          unit:'kW',  kind:'series',     base:45  },
  { id:'fuel_level',        cat:'generator',    label:'Fuel Level',                unit:'%',   kind:'gauge',      base:68, max:100 },
  { id:'gen_runtime',       cat:'generator',    label:'Runtime Hours (7d)',        unit:'hrs', kind:'series',     base:4   },

  { id:'grid_import',       cat:'grid',         label:'Grid Import',               unit:'kW',  kind:'series',     base:130 },
  { id:'grid_export',       cat:'grid',         label:'Grid Export',               unit:'kW',  kind:'series',     base:18  },
  { id:'utility_voltage',   cat:'grid',         label:'Utility Voltage (3-Phase)', unit:'V',   kind:'multiseries',base:230 },

  { id:'battery_soc',       cat:'battery',      label:'State of Charge',           unit:'%',   kind:'gauge',      base:76, max:100 },
  { id:'battery_rate',      cat:'battery',      label:'Charge / Discharge Rate',   unit:'kW',  kind:'series',     base:15  },
  { id:'battery_cycles',    cat:'battery',      label:'Cycle Count',               unit:'cycles',kind:'stat',     base:412 },

  { id:'water_usage',       cat:'water',        label:'Water Consumption',         unit:'m³',  kind:'series',     base:12  },
  { id:'tank_level',        cat:'water',        label:'Tank Level',                unit:'%',   kind:'gauge',      base:64, max:100 },
  { id:'flow_rate',         cat:'water',        label:'Flow Rate',                 unit:'L/min',kind:'series',    base:38  },

  { id:'voltage_3ph',       cat:'powerquality', label:'Voltage (3-Phase)',         unit:'V',   kind:'multiseries',base:230 },
  { id:'current_3ph',       cat:'powerquality', label:'Current (3-Phase)',         unit:'A',   kind:'multiseries',base:80  },
  { id:'power_factor',      cat:'powerquality', label:'Power Factor',              unit:'',    kind:'gauge',      base:0.92, max:1 },
  { id:'voltage_imbalance', cat:'powerquality', label:'Voltage Imbalance',         unit:'%',   kind:'series',     base:1.2 },
  { id:'current_imbalance', cat:'powerquality', label:'Current Imbalance',         unit:'%',   kind:'series',     base:2.4 },
  { id:'thd',               cat:'powerquality', label:'Harmonic Distortion (THD)', unit:'%',   kind:'series',     base:3.1 },

  { id:'active_alarms',     cat:'alarms',       label:'Active Alarms',             unit:'',    kind:'stat',       base:3   },
  { id:'alarm_trend',       cat:'alarms',       label:'Alarm Trend (7d)',          unit:'events',kind:'series',   base:5   },
  { id:'recent_events',     cat:'alarms',       label:'Recent Alarm Events',       unit:'',    kind:'table',      base:0   },

  { id:'energy_cost',       cat:'cost',         label:'Energy Cost Trend',         unit:'PKR', kind:'series',     base:45000 },
  { id:'billing_forecast',  cat:'cost',         label:'Billing Forecast (Month)',  unit:'PKR', kind:'stat',       base:520000 },
  { id:'cost_breakdown',    cat:'cost',         label:'Cost Breakdown by Source',  unit:'PKR', kind:'donut',      base:0 },

  { id:'co2_emissions',     cat:'carbon',       label:'CO₂ Emissions',             unit:'kg',  kind:'series',     base:210 },
  { id:'renewable_share',   cat:'carbon',       label:'Renewable Energy Share',    unit:'%',   kind:'gauge',      base:38, max:100 },
];

const VIZ_COMPAT = {
  series:      ['line','area','bar','stat'],
  multiseries: ['line','area','bar'],
  gauge:       ['gauge','stat'],
  stat:        ['stat'],
  donut:       ['donut','bar'],
  table:       ['table'],
};
const VIZ_LABEL = { line:'Line chart', area:'Area chart', bar:'Bar chart', stat:'Stat / KPI card', gauge:'Gauge', donut:'Donut chart', table:'Table' };

function metricById(id){ return METRICS.find(m=>m.id===id); }

/* ---- deterministic seeded RNG so numbers stay stable per scope during a session ---- */
function seededRng(seedStr){
  let h = 1779033703 ^ seedStr.length;
  for(let i=0;i<seedStr.length;i++){ h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h<<13)|(h>>>19); }
  return function(){
    h = Math.imul(h ^ (h>>>16), 2246822507);
    h = Math.imul(h ^ (h>>>13), 3266489909);
    h ^= h>>>16;
    return (h>>>0)/4294967296;
  };
}
function scopeKey(){ const s=state.scope; return [s.building||'', s.floor||'', s.dept||''].join('|'); }
function scopeMultiplier(){
  const s = state.scope; const rnd = seededRng('mult|'+scopeKey());
  if(s.dept) return 0.04 + rnd()*0.10;
  if(s.floor) return 0.12 + rnd()*0.18;
  if(s.building) return 0.35 + rnd()*0.45;
  return 1 + rnd()*0.15;
}
function scopeLabel(){
  const s = state.scope;
  if(s.dept){ return findDept(s.dept)?.name || 'Department'; }
  if(s.floor){ return findFloor(s.floor)?.name || 'Floor'; }
  if(s.building){ return findBuilding(s.building)?.name || 'Building'; }
  return 'All buildings · Org-wide';
}
function findBuilding(id){ return ORG.buildings.find(b=>b.id===id); }
function findFloor(id){ for(const b of ORG.buildings){ const f=b.floors.find(f=>f.id===id); if(f) return f; } return null; }
function findDept(id){ for(const b of ORG.buildings){ for(const f of b.floors){ const d=f.depts.find(d=>d.id===id); if(d) return d; } } return null; }

function generateSeries(metric, points, rangeKey){
  rangeKey = rangeKey || '24h';
  const rnd = seededRng('series|'+metric.id+'|'+scopeKey()+'|'+rangeKey);
  const mult = scopeMultiplier();
  const labels=[], data=[];
  for(let i=0;i<points;i++){
    let label;
    if(rangeKey==='24h') label = String(i).padStart(2,'0')+':00';
    else if(rangeKey==='7d') label = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i%7];
    else label = 'D'+(i+1);
    labels.push(label);
    let hourFactor;
    if(rangeKey==='24h'){
      if(['total_load','peak_demand','grid_import'].includes(metric.id)) hourFactor = 0.35+0.55*Math.max(0,Math.sin((i-5)/17*Math.PI));
      else if(['solar_gen','irradiance'].includes(metric.id)) hourFactor = Math.max(0, Math.sin((i-6)/12*Math.PI));
      else if(metric.id==='gen_output') hourFactor = (i>19||i<6) ? 0.7+rnd()*0.5 : 0.05+rnd()*0.1;
      else hourFactor = 0.55+0.35*Math.sin(i/3.2+rnd()*2);
    } else {
      hourFactor = 0.6+0.4*Math.sin(i/1.6+rnd()*3);
    }
    let val = metric.base * mult * hourFactor * (0.92+rnd()*0.16);
    data.push(Math.max(0, +val.toFixed(2)));
  }
  return { labels, data };
}
function generateMultiSeries(metric, points, rangeKey){
  const base = generateSeries(metric, points, rangeKey);
  const rnd = seededRng('ms|'+metric.id+'|'+scopeKey());
  const names = metric.id.includes('voltage')||metric.id.includes('current') || metric.id==='utility_voltage' || metric.id==='load_phase'
    ? ['Phase A','Phase B','Phase C'] : ['Series A','Series B','Series C'];
  const colors = ['#F5A623','#2563EB','#DC2626'];
  return {
    labels: base.labels,
    series: names.map((n,i)=>({
      name:n, color:colors[i],
      data: base.data.map(v=>+(v*(0.94+rnd()*0.12)).toFixed(2))
    }))
  };
}
function generateGauge(metric){
  const rnd = seededRng('gauge|'+metric.id+'|'+scopeKey());
  const max = metric.max || 100;
  let val;
  if(metric.id==='power_factor') val = 0.82+rnd()*0.16;
  else val = Math.min(max, metric.base*(0.8+rnd()*0.3));
  return { value:+val.toFixed(metric.max===1?2:1), max };
}
function generateStat(metric){
  const rnd = seededRng('stat|'+metric.id+'|'+scopeKey());
  const mult = metric.id==='active_alarms' ? 1 : scopeMultiplier();
  const val = metric.id==='active_alarms' ? Math.max(0,Math.round(metric.base*mult*(0.5+rnd()))) : metric.base*mult*(0.9+rnd()*0.2);
  const trend = +(rnd()*9-3.5).toFixed(1);
  return { value: val, trend };
}
function generateDonut(metric){
  const rnd = seededRng('donut|'+metric.id+'|'+scopeKey());
  const labels = ['Grid','Solar','Generator','Battery'];
  const raw = labels.map(()=>0.15+rnd());
  const total = raw.reduce((a,b)=>a+b,0);
  return { labels, data: raw.map(v=>+((v/total)*100).toFixed(1)), colors:['#2563EB','#16A34A','#DC2626','#8B5CF6'] };
}
const ALARM_MESSAGES = [
  ['danger','High Voltage Deviation','Phase B exceeded 250V threshold'],
  ['warning','Power Factor Low','PF dropped below 0.85 for 12 minutes'],
  ['danger','Generator Fuel Low','Fuel level under 20% — refill required'],
  ['warning','Water Tank Low','Tank level below 25% capacity'],
  ['danger','Current Imbalance','Phase imbalance exceeded 5% limit'],
  ['warning','Peak Demand Alert','Load approaching contracted demand limit'],
  ['warning','Battery SOC Low','State of charge below 20%'],
  ['danger','Communication Loss','Gateway offline for 8 minutes'],
];
function generateAlarms(count){
  const rnd = seededRng('alarms|'+scopeKey());
  const list = [];
  for(let i=0;i<count;i++){
    const [sev,title,desc] = ALARM_MESSAGES[Math.floor(rnd()*ALARM_MESSAGES.length)];
    const mins = Math.floor(rnd()*300);
    list.push({ severity:sev, title, desc, device: 'DEV-'+(1000+Math.floor(rnd()*899)), mins });
  }
  return list.sort((a,b)=>a.mins-b.mins);
}

/* ---------------------------------------------------------------------------------
   2. APP STATE
   --------------------------------------------------------------------------------- */
const state = {
  theme: 'light',
  primary: '#F5A623',
  brandInitials: 'CF',
  scope: { building:'', floor:'', dept:'' },
  editMode: false,
  currentDashboardId: null,
  currentEmsCat: 'energy',
  emsRange: '24h',
  facilityPath: {}, // building / floor selection for the explorer page
  dashboards: [],
  widgetIdSeed: 1,
  dashIdSeed: 1,
  charts: {}, // widgetId -> Chart.js instance
  drag: null,
  resize: null,
};

function uid(prefix){ return prefix + '-' + (Date.now().toString(36)) + '-' + Math.random().toString(36).slice(2,7); }

function makeWidget(metricId, viz, w, h, title){
  const m = metricById(metricId);
  return { id: uid('w'), metricId, viz: viz || VIZ_COMPAT[m.kind][0], w: w||4, h: h||6, title: title || m.label };
}

function defaultDashboards(){
  return [
    {
      id:'dash-exec', name:'Executive Overview', color:'#F5A623',
      widgets:[
        makeWidget('total_load','stat',3,5,'Total Load'),
        makeWidget('solar_gen','stat',3,5,'Solar Generation'),
        makeWidget('active_alarms','stat',3,5,'Active Alarms'),
        makeWidget('energy_cost','stat',3,5,'Energy Cost (Today)'),
        makeWidget('total_load','line',8,7,'Facility Load — 24h Trend'),
        makeWidget('cost_breakdown','donut',4,7,'Cost by Source'),
        makeWidget('recent_events','table',12,7,'Recent Alarm Events'),
      ]
    },
    {
      id:'dash-energy', name:'Energy Manager', color:'#F5A623',
      widgets:[
        makeWidget('total_load','line',6,7,'Total Load'),
        makeWidget('solar_gen','area',6,7,'Solar Generation'),
        makeWidget('gen_output','bar',4,6,'Generator Output'),
        makeWidget('grid_import','line',4,6,'Grid Import'),
        makeWidget('battery_soc','gauge',4,6,'Battery State of Charge'),
        makeWidget('load_phase','line',12,7,'Load by Phase (A/B/C)'),
      ]
    },
    {
      id:'dash-facility', name:'Facility Manager', color:'#2563EB',
      widgets:[
        makeWidget('water_usage','line',6,7,'Water Consumption'),
        makeWidget('tank_level','gauge',3,7,'Water Tank Level'),
        makeWidget('power_factor','gauge',3,7,'Power Factor'),
        makeWidget('voltage_3ph','line',8,7,'Voltage — 3 Phase'),
        makeWidget('recent_events','table',4,7,'Active Alarms'),
      ]
    },
    {
      id:'dash-sustain', name:'Sustainability', color:'#10B981',
      widgets:[
        makeWidget('co2_emissions','area',6,7,'CO₂ Emissions Trend'),
        makeWidget('renewable_share','gauge',3,7,'Renewable Share'),
        makeWidget('billing_forecast','stat',3,7,'Monthly Billing Forecast'),
        makeWidget('cost_breakdown','bar',12,7,'Energy Mix Breakdown'),
      ]
    },
  ];
}

/* ---------------------------------------------------------------------------------
   3. LUCIDE ICON HELPER
   --------------------------------------------------------------------------------- */
function icon(name, size){ return `<div data-lucide="${name}" style="width:${size||16}px;height:${size||16}px;"></div>`; }
function refreshIcons(){ if(window.lucide) lucide.createIcons(); }

/* ---------------------------------------------------------------------------------
   4. TOASTS
   --------------------------------------------------------------------------------- */
function toast(msg, ic){
  const c = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = icon(ic||'circle-check-big',15) + '<span>'+msg+'</span>';
  c.appendChild(el);
  refreshIcons();
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(),300); }, 2600);
}

/* ---------------------------------------------------------------------------------
   5. NAVIGATION / ROUTER
   --------------------------------------------------------------------------------- */
function showPage(pageId, opts){
  opts = opts||{};
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.nav-item[data-page]').forEach(n=>n.classList.remove('active'));

  let title='', crumb='';
  if(pageId==='page-dashboard'){
    const d = getCurrentDashboard();
    title = d ? d.name : 'Dashboard';
    crumb = 'Dashboards <ARROW> ' + title;
    document.querySelectorAll(`.nav-item[data-dash-id]`).forEach(n=>{ if(n.dataset.dashId===state.currentDashboardId) n.classList.add('active'); });
  } else if(pageId==='page-facility'){
    title='Facility Explorer'; crumb='Facility Explorer';
    document.querySelector(`.nav-item[data-page="page-facility"]`).classList.add('active');
  } else if(pageId==='page-ems'){
    const cat = opts.cat || state.currentEmsCat;
    state.currentEmsCat = cat;
    title = CATEGORIES[cat].label; crumb = 'Energy Management <ARROW> ' + title;
    document.querySelectorAll(`.nav-item[data-cat="${cat}"]`).forEach(n=>n.classList.add('active'));
    renderEmsPage(cat);
  } else if(pageId==='page-widgetlib'){
    title='Widget Library'; crumb='Administration <ARROW> Widget Library';
    document.querySelector(`.nav-item[data-page="page-widgetlib"]`).classList.add('active');
    renderWidgetLibraryPage();
  } else if(pageId==='page-devices'){
    title='Devices & Gateways'; crumb='Administration <ARROW> Devices & Gateways';
    document.querySelector(`.nav-item[data-page="page-devices"]`).classList.add('active');
    renderDevicesPage();
  } else if(pageId==='page-users'){
    title='Users & Roles'; crumb='Administration <ARROW> Users & Roles';
    document.querySelector(`.nav-item[data-page="page-users"]`).classList.add('active');
    renderUsersPage();
  } else if(pageId==='page-branding'){
    title='Branding & Theme'; crumb='Administration <ARROW> Branding & Theme';
    document.querySelector(`.nav-item[data-page="page-branding"]`).classList.add('active');
  } else if(pageId==='page-settings'){
    title='Settings'; crumb='Administration <ARROW> Settings';
    document.querySelector(`.nav-item[data-page="page-settings"]`).classList.add('active');
  }
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-crumb').innerHTML = crumb.replace(/<ARROW>/g, '<div data-lucide="chevron-right"></div>');
  refreshIcons();
  if(pageId==='page-facility') renderFacilityPage();
  window.scrollTo(0,0);
  document.getElementById('content').scrollTop = 0;
}

document.getElementById('nav-scroll').addEventListener('click', (e)=>{
  const item = e.target.closest('.nav-item');
  if(!item) return;
  const page = item.dataset.page;
  if(!page) return;
  if(page==='page-dashboard' && item.dataset.dashId){ state.currentDashboardId = item.dataset.dashId; }
  showPage(page, { cat: item.dataset.cat });
});

/* ---------------------------------------------------------------------------------
   6. SCOPE SELECTORS (Org > Building > Floor > Department)
   --------------------------------------------------------------------------------- */
function populateScopeSelectors(){
  const bSel = document.getElementById('scope-building');
  bSel.innerHTML = '<option value="">All Buildings</option>' + ORG.buildings.map(b=>`<option value="${b.id}">${b.name}</option>`).join('');
  bSel.value = state.scope.building;
  populateFloorSelector();
}
function populateFloorSelector(){
  const fSel = document.getElementById('scope-floor');
  const b = findBuilding(state.scope.building);
  fSel.innerHTML = '<option value="">All Floors</option>' + (b ? b.floors.map(f=>`<option value="${f.id}">${f.name}</option>`).join('') : '');
  fSel.disabled = !b;
  fSel.value = state.scope.floor;
  populateDeptSelector();
}
function populateDeptSelector(){
  const dSel = document.getElementById('scope-dept');
  const f = findFloor(state.scope.floor);
  dSel.innerHTML = '<option value="">All Departments</option>' + (f ? f.depts.map(d=>`<option value="${d.id}">${d.name}</option>`).join('') : '');
  dSel.disabled = !f;
  dSel.value = state.scope.dept;
}
document.getElementById('scope-building').addEventListener('change', e=>{
  state.scope.building = e.target.value; state.scope.floor=''; state.scope.dept='';
  populateFloorSelector(); onScopeChanged();
});
document.getElementById('scope-floor').addEventListener('change', e=>{
  state.scope.floor = e.target.value; state.scope.dept='';
  populateDeptSelector(); onScopeChanged();
});
document.getElementById('scope-dept').addEventListener('change', e=>{
  state.scope.dept = e.target.value; onScopeChanged();
});
function onScopeChanged(){
  toast('Scope changed to ' + scopeLabel(), 'map-pin');
  renderDashboardGrid();
  const activePage = document.querySelector('.page.active').id;
  if(activePage==='page-ems') renderEmsPage(state.currentEmsCat);
  if(activePage==='page-devices') renderDevicesPage();
}

/* ---------------------------------------------------------------------------------
   7. CHART RENDERING HELPERS (Chart.js)
   --------------------------------------------------------------------------------- */
function destroyChart(widgetId){
  if(state.charts[widgetId]){ state.charts[widgetId].destroy(); delete state.charts[widgetId]; }
}
function baseChartOptions(extra){
  return Object.assign({
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'index', intersect:false },
    plugins:{ legend:{ display:false }, tooltip:{
      backgroundColor: state.theme==='dark' ? '#1a1f36' : '#fff',
      titleColor: state.theme==='dark' ? '#fff' : '#141828',
      bodyColor: state.theme==='dark' ? '#cbd0e0' : '#4B5563',
      borderColor:'#ECEEE6', borderWidth:1, padding:10, cornerRadius:8, titleFont:{weight:700,size:11}, bodyFont:{size:11,weight:600},
    }},
    scales:{
      x:{ grid:{display:false}, ticks:{ color:'#9AA09A', font:{size:10,weight:600} } },
      y:{ grid:{ color: state.theme==='dark'?'rgba(255,255,255,.06)':'#F2F3EC' }, ticks:{ color:'#9AA09A', font:{size:10,weight:600} } },
    }
  }, extra||{});
}
function renderLineBarChart(canvas, type, labels, datasets, stacked){
  const opts = baseChartOptions(type==='bar'&&stacked ? {scales:{x:{stacked:true,grid:{display:false},ticks:{color:'#9AA09A',font:{size:10,weight:600}}},y:{stacked:true,grid:{color:'#F2F3EC'},ticks:{color:'#9AA09A',font:{size:10,weight:600}}}}} : {});
  if(datasets.length>1) opts.plugins.legend = { display:true, position:'bottom', labels:{ boxWidth:8, boxHeight:8, usePointStyle:true, font:{size:10.5, weight:700}, color:'#6B7280', padding:12 } };
  return new Chart(canvas.getContext('2d'), { type: type==='area'?'line':type, data:{ labels, datasets }, options: opts });
}
function renderGaugeChart(canvas, value, max, color){
  return new Chart(canvas.getContext('2d'), {
    type:'doughnut',
    data:{ datasets:[{ data:[value, Math.max(0,max-value)], backgroundColor:[color, state.theme==='dark'?'#232842':'#ECEEE6'], borderWidth:0 }] },
    options:{ responsive:true, maintainAspectRatio:false, rotation:-90, circumference:180, cutout:'75%',
      plugins:{ legend:{display:false}, tooltip:{enabled:false} } }
  });
}
function renderDonutChart(canvas, labels, data, colors){
  return new Chart(canvas.getContext('2d'), {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor:colors, borderWidth:2, borderColor: state.theme==='dark'?'#131728':'#fff' }] },
    options:{ responsive:true, maintainAspectRatio:false, cutout:'62%',
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:8, boxHeight:8, usePointStyle:true, font:{size:10.5,weight:700}, color:'#6B7280', padding:10 } },
        tooltip:{ callbacks:{ label:(ctx)=> ctx.label+': '+ctx.parsed+'%' } } } }
  });
}
function renderSparkline(canvas, data, color){
  return new Chart(canvas.getContext('2d'), {
    type:'line',
    data:{ labels:data.map((_,i)=>i), datasets:[{ data, borderColor:color, borderWidth:2, pointRadius:0, tension:.4, fill:true, backgroundColor:color+'22' }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{enabled:false}}, scales:{ x:{display:false}, y:{display:false} }, elements:{point:{radius:0}} }
  });
}

/* ---------------------------------------------------------------------------------
   8. WIDGET CONTENT RENDERING (dashboard builder canvas)
   --------------------------------------------------------------------------------- */
function widgetHtml(w){
  const m = metricById(w.metricId);
  const cat = CATEGORIES[m.cat];
  let bodyHtml = '';
  if(w.viz==='stat'){
    bodyHtml = `<div class="stat-widget" id="body-${w.id}"></div>`;
  } else if(w.viz==='gauge'){
    bodyHtml = `<div class="gauge-wrap"><canvas id="chart-${w.id}"></canvas><div class="gauge-center" id="gc-${w.id}"></div></div>`;
  } else if(w.viz==='table'){
    bodyHtml = `<div style="overflow-y:auto;flex:1;" id="body-${w.id}"></div>`;
  } else {
    bodyHtml = `<div class="chart-wrap"><canvas id="chart-${w.id}"></canvas></div>`;
  }
  return `
  <div class="widget" style="--w:${w.w};--h:${w.h};" data-widget-id="${w.id}" draggable="false">
    <div class="widget-head">
      <div class="widget-drag" draggable="true" title="Drag to reorder">${icon('grip-vertical',14)}</div>
      <div class="widget-titlewrap">
        <div class="widget-title">${w.title}</div>
        <div class="widget-scope">${cat.label} · ${scopeLabel()}</div>
      </div>
      <div class="widget-actions">
        <select class="viz-select" data-action="change-viz" data-id="${w.id}">
          ${VIZ_COMPAT[m.kind].map(v=>`<option value="${v}" ${v===w.viz?'selected':''}>${VIZ_LABEL[v]}</option>`).join('')}
        </select>
        <button class="wa-btn" data-action="duplicate-widget" data-id="${w.id}" title="Duplicate">${icon('copy',13)}</button>
        <button class="wa-btn" data-action="remove-widget" data-id="${w.id}" title="Remove">${icon('trash-2',13)}</button>
      </div>
    </div>
    <div class="widget-body">${bodyHtml}</div>
    <div class="widget-resize" data-action="resize-handle" data-id="${w.id}">${icon('move-diagonal-2',12)}</div>
  </div>`;
}

function mountWidget(w){
  const m = metricById(w.metricId);
  const cat = CATEGORIES[m.cat];
  destroyChart(w.id);
  if(w.viz==='stat'){
    const body = document.getElementById('body-'+w.id);
    if(!body) return;
    if(m.kind==='table'){ body.innerHTML=''; return; }
    const s = generateStat(m);
    const up = s.trend >= 0;
    const displayVal = m.unit==='PKR' ? ('₨'+Math.round(s.value).toLocaleString()) : (s.value>=1000?Math.round(s.value).toLocaleString():s.value.toFixed(m.id==='active_alarms'?0:1));
    body.innerHTML = `
      <div class="big">${displayVal}<small>${m.unit && m.unit!=='PKR' ? ' '+m.unit : ''}</small></div>
      <span class="trend ${up?'up':'down'}">${icon(up?'trending-up':'trending-down',11)} ${Math.abs(s.trend)}% vs last period</span>
      <div style="height:36px;margin-top:2px;"><canvas id="spark-${w.id}"></canvas></div>`;
    refreshIcons();
    const sparkData = generateSeries(m, 12, '24h').data;
    state.charts[w.id] = renderSparkline(document.getElementById('spark-'+w.id), sparkData, cat.color);
    return;
  }
  if(w.viz==='gauge'){
    const g = generateGauge(m);
    const canvas = document.getElementById('chart-'+w.id);
    if(!canvas) return;
    state.charts[w.id] = renderGaugeChart(canvas, g.value, g.max, cat.color);
    const gc = document.getElementById('gc-'+w.id);
    if(gc) gc.innerHTML = `<b>${g.value}${m.unit==='%'?'%':(m.max===1?'':(' '+m.unit))}</b><span>${m.label}</span>`;
    return;
  }
  if(w.viz==='donut'){
    const d = generateDonut(m);
    const canvas = document.getElementById('chart-'+w.id);
    if(!canvas) return;
    state.charts[w.id] = renderDonutChart(canvas, d.labels, d.data, d.colors);
    return;
  }
  if(w.viz==='table'){
    const body = document.getElementById('body-'+w.id);
    if(!body) return;
    const alarms = generateAlarms(6);
    body.innerHTML = alarms.map(a=>`
      <div class="alarm-row ${a.severity}">
        <div class="aic" style="background:${a.severity==='danger'?'var(--danger-100)':'var(--warning-100)'};color:${a.severity==='danger'?'var(--danger-700)':'var(--primary-700)'};">${icon(a.severity==='danger'?'octagon-alert':'triangle-alert',13)}</div>
        <div class="body"><b>${a.title}</b><span>${a.desc} · ${a.device}</span></div>
        <time>${a.mins}m ago</time>
      </div>`).join('');
    return;
  }
  // line / area / bar
  const canvas = document.getElementById('chart-'+w.id);
  if(!canvas) return;
  if(m.kind==='multiseries'){
    const ms = generateMultiSeries(m, 24, '24h');
    const datasets = ms.series.map(s=>({ label:s.name, data:s.data, borderColor:s.color, backgroundColor: w.viz==='area'? s.color+'26' : s.color, fill: w.viz==='area', tension:.35, borderWidth:2, pointRadius:0, borderRadius: w.viz==='bar'?4:0 }));
    state.charts[w.id] = renderLineBarChart(canvas, w.viz, ms.labels, datasets);
  } else {
    const s = generateSeries(m, 24, '24h');
    const datasets = [{ label:m.label, data:s.data, borderColor:cat.color, backgroundColor: w.viz==='area'? cat.color+'26' : cat.color, fill: w.viz==='area', tension:.35, borderWidth:2.4, pointRadius:0, borderRadius: w.viz==='bar'?5:0 }];
    state.charts[w.id] = renderLineBarChart(canvas, w.viz, s.labels, datasets);
  }
}

/* ---------------------------------------------------------------------------------
   9. DASHBOARD GRID (add / remove / reorder / resize / persist)
   --------------------------------------------------------------------------------- */
function getCurrentDashboard(){ return state.dashboards.find(d=>d.id===state.currentDashboardId); }

function renderDashTabs(){
  const wrap = document.getElementById('dash-tabs');
  wrap.innerHTML = state.dashboards.map(d=>`
    <div class="dash-tab ${d.id===state.currentDashboardId?'active':''}" data-dash-tab="${d.id}">
      <span class="dot" style="background:${d.color}"></span>${d.name}
    </div>`).join('');
  wrap.querySelectorAll('[data-dash-tab]').forEach(el=>{
    el.addEventListener('click', ()=>{ state.currentDashboardId = el.dataset.dashTab; renderDashTabs(); renderNavDashboards(); renderDashboardGrid(); showPage('page-dashboard'); });
  });
}
function renderNavDashboards(){
  const wrap = document.getElementById('nav-dashboards');
  wrap.innerHTML = state.dashboards.map(d=>`
    <div class="nav-item ${d.id===state.currentDashboardId?'active':''}" data-page="page-dashboard" data-dash-id="${d.id}">
      ${icon('layout-dashboard',16)}${d.name}
    </div>`).join('');
  refreshIcons();
}

function renderDashboardGrid(){
  const dash = getCurrentDashboard();
  const grid = document.getElementById('dashboard-grid');
  if(!dash){ grid.innerHTML=''; return; }
  Object.keys(state.charts).forEach(id=>{ if(!dash.widgets.find(w=>w.id===id)) destroyChart(id); });
  if(dash.widgets.length===0){
    grid.innerHTML = `<div class="widget empty-state" style="--w:12;--h:8;">
      <div class="empty-hint">${icon('layout-grid',34)}<b>This dashboard is empty</b><p>Turn on Edit layout, then click "Add widget" to pull metrics from the library.</p></div>
    </div>`;
    return;
  }
  grid.innerHTML = dash.widgets.map(widgetHtml).join('');
  refreshIcons();
  dash.widgets.forEach(mountWidget);
  attachWidgetDrag();
  attachWidgetResize();
}

function saveScopeIntoTitleSuffix(){ /* placeholder for future backend save hook */ }

// ---- widget actions (event delegation) ----
document.getElementById('dashboard-grid').addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-action]');
  if(!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  const dash = getCurrentDashboard();
  if(action==='remove-widget'){
    dash.widgets = dash.widgets.filter(w=>w.id!==id);
    destroyChart(id);
    renderDashboardGrid();
    toast('Widget removed','trash-2');
  } else if(action==='duplicate-widget'){
    const w = dash.widgets.find(w=>w.id===id);
    const copy = Object.assign({}, w, { id: uid('w'), title: w.title+' (copy)' });
    dash.widgets.splice(dash.widgets.indexOf(w)+1, 0, copy);
    renderDashboardGrid();
    toast('Widget duplicated','copy');
  }
});
document.getElementById('dashboard-grid').addEventListener('change', (e)=>{
  const sel = e.target.closest('[data-action="change-viz"]');
  if(!sel) return;
  const dash = getCurrentDashboard();
  const w = dash.widgets.find(w=>w.id===sel.dataset.id);
  w.viz = sel.value;
  const idx = dash.widgets.indexOf(w);
  const el = document.querySelector(`.widget[data-widget-id="${w.id}"]`);
  el.outerHTML = widgetHtml(w);
  refreshIcons();
  mountWidget(w);
  attachWidgetDrag();
  attachWidgetResize();
});

// ---- drag to reorder ----
function attachWidgetDrag(){
  document.querySelectorAll('.widget-drag').forEach(handle=>{
    handle.addEventListener('dragstart', (e)=>{
      const widgetEl = handle.closest('.widget');
      state.drag = widgetEl.dataset.widgetId;
      widgetEl.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', state.drag);
    });
    handle.addEventListener('dragend', ()=>{
      document.querySelectorAll('.widget').forEach(w=>{ w.classList.remove('dragging'); w.classList.remove('drop-target'); });
      state.drag = null;
    });
  });
  document.querySelectorAll('.widget').forEach(w=>{
    w.addEventListener('dragover', (e)=>{
      if(!state.drag || !state.editMode) return;
      e.preventDefault();
      if(w.dataset.widgetId !== state.drag) w.classList.add('drop-target');
    });
    w.addEventListener('dragleave', ()=>{ w.classList.remove('drop-target'); });
    w.addEventListener('drop', (e)=>{
      e.preventDefault();
      w.classList.remove('drop-target');
      const targetId = w.dataset.widgetId;
      if(!state.drag || targetId===state.drag) return;
      const dash = getCurrentDashboard();
      const from = dash.widgets.findIndex(x=>x.id===state.drag);
      const to = dash.widgets.findIndex(x=>x.id===targetId);
      const [moved] = dash.widgets.splice(from,1);
      dash.widgets.splice(to,0,moved);
      renderDashboardGrid();
    });
  });
}

// ---- freeform resize via corner handle ----
function attachWidgetResize(){
  document.querySelectorAll('[data-action="resize-handle"]').forEach(handle=>{
    handle.addEventListener('mousedown', (e)=>{
      if(!state.editMode) return;
      e.preventDefault();
      const widgetEl = handle.closest('.widget');
      const id = widgetEl.dataset.widgetId;
      const dash = getCurrentDashboard();
      const w = dash.widgets.find(x=>x.id===id);
      const grid = document.getElementById('dashboard-grid');
      const gridWidth = grid.clientWidth;
      const colWidth = (gridWidth - 16*11) / 12; // 12 cols, 16px gaps
      const rowHeight = 38 + 16; // grid-auto-rows + gap
      const startX = e.clientX, startY = e.clientY;
      const startW = w.w, startH = w.h;
      widgetEl.style.zIndex = 10;
      function onMove(ev){
        const deltaCols = Math.round((ev.clientX-startX)/colWidth);
        const deltaRows = Math.round((ev.clientY-startY)/rowHeight);
        const newW = Math.max(3, Math.min(12, startW+deltaCols));
        const newH = Math.max(4, Math.min(16, startH+deltaRows));
        widgetEl.style.setProperty('--w', newW);
        widgetEl.style.setProperty('--h', newH);
        widgetEl._pendingW = newW; widgetEl._pendingH = newH;
      }
      function onUp(){
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        widgetEl.style.zIndex = '';
        if(widgetEl._pendingW){ w.w = widgetEl._pendingW; w.h = widgetEl._pendingH; }
        Object.keys(state.charts).forEach(cid=>{ if(cid===id && state.charts[cid]) state.charts[cid].resize(); });
        mountWidget(w); // re-render content sized to new box (esp. for charts)
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  });
}

/* ---- edit mode toggle ---- */
document.getElementById('edit-switch').addEventListener('click', ()=>{
  state.editMode = !state.editMode;
  const sw = document.getElementById('edit-switch');
  sw.classList.toggle('on', state.editMode);
  document.getElementById('edit-banner').classList.toggle('show', state.editMode);
  document.getElementById('btn-open-lib').style.display = state.editMode ? 'inline-flex' : 'none';
  document.getElementById('btn-save-layout').style.display = state.editMode ? 'inline-flex' : 'none';
  document.getElementById('dashboard-grid').closest('#page-dashboard').classList.toggle('editing', state.editMode);
  document.body.classList.toggle('editing', state.editMode);
});
document.getElementById('btn-save-layout').addEventListener('click', ()=>{
  state.editMode = false;
  document.getElementById('edit-switch').classList.remove('on');
  document.getElementById('edit-banner').classList.remove('show');
  document.getElementById('btn-open-lib').style.display = 'none';
  document.getElementById('btn-save-layout').style.display = 'none';
  document.body.classList.remove('editing');
  renderDashboardGrid();
  toast('Dashboard layout saved','save');
});

/* ---- new / rename / duplicate / delete dashboard ---- */
document.getElementById('btn-new-dashboard').addEventListener('click', ()=>{
  openPrompt('New dashboard', 'Dashboard name', 'Untitled Dashboard', (val)=>{
    const d = { id: uid('dash'), name: val || 'Untitled Dashboard', color:'#6B7280', widgets:[] };
    state.dashboards.push(d);
    state.currentDashboardId = d.id;
    renderDashTabs(); renderNavDashboards(); renderDashboardGrid(); showPage('page-dashboard');
    toast('Dashboard created','folder-plus');
  });
});
document.getElementById('btn-dash-rename').addEventListener('click', ()=>{
  const d = getCurrentDashboard(); if(!d) return;
  openPrompt('Rename dashboard', 'Dashboard name', d.name, (val)=>{
    d.name = val || d.name; renderDashTabs(); renderNavDashboards(); showPage('page-dashboard');
  });
});
document.getElementById('btn-dash-duplicate').addEventListener('click', ()=>{
  const d = getCurrentDashboard(); if(!d) return;
  const copy = { id: uid('dash'), name: d.name+' (copy)', color:d.color, widgets: d.widgets.map(w=>Object.assign({},w,{id:uid('w')})) };
  state.dashboards.push(copy);
  state.currentDashboardId = copy.id;
  renderDashTabs(); renderNavDashboards(); renderDashboardGrid(); showPage('page-dashboard');
  toast('Dashboard duplicated','copy');
});
document.getElementById('btn-dash-delete').addEventListener('click', ()=>{
  if(state.dashboards.length<=1){ toast('You need at least one dashboard','info'); return; }
  const d = getCurrentDashboard();
  if(!confirm(`Delete "${d.name}"? This cannot be undone.`)) return;
  state.dashboards = state.dashboards.filter(x=>x.id!==d.id);
  state.currentDashboardId = state.dashboards[0].id;
  renderDashTabs(); renderNavDashboards(); renderDashboardGrid(); showPage('page-dashboard');
  toast('Dashboard deleted','trash-2');
});

/* ---------------------------------------------------------------------------------
   10. GENERIC PROMPT MODAL
   --------------------------------------------------------------------------------- */
let promptCallback = null;
function openPrompt(title, label, value, cb){
  document.getElementById('modal-prompt-title').textContent = title;
  document.getElementById('modal-prompt-label').textContent = label;
  const input = document.getElementById('modal-prompt-input');
  input.value = value || '';
  promptCallback = cb;
  document.getElementById('modal-overlay').classList.add('show');
  setTimeout(()=>input.focus(),50);
}
document.getElementById('modal-prompt-confirm').addEventListener('click', ()=>{
  const val = document.getElementById('modal-prompt-input').value.trim();
  document.getElementById('modal-overlay').classList.remove('show');
  if(promptCallback) promptCallback(val);
});
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click', ()=>document.getElementById('modal-overlay').classList.remove('show')));

/* ---------------------------------------------------------------------------------
   11. WIDGET LIBRARY DRAWER (add widget to current dashboard)
   --------------------------------------------------------------------------------- */
let libActiveCat = 'all';
function renderLibDrawer(){
  const catsWrap = document.getElementById('lib-cats');
  const cats = ['all', ...Object.keys(CATEGORIES).filter(c=>c!=='overview')];
  catsWrap.innerHTML = cats.map(c=>`<div class="lib-cat-chip ${c===libActiveCat?'active':''}" data-lib-cat="${c}">${c==='all'?'All':CATEGORIES[c].label}</div>`).join('');
  catsWrap.querySelectorAll('[data-lib-cat]').forEach(chip=>chip.addEventListener('click', ()=>{ libActiveCat = chip.dataset.libCat; renderLibDrawer(); }));

  const list = document.getElementById('lib-list');
  const metrics = METRICS.filter(m=>libActiveCat==='all' || m.cat===libActiveCat);
  list.innerHTML = metrics.map(m=>{
    const cat = CATEGORIES[m.cat];
    return `<div class="lib-item">
      <div class="ic" style="background:${cat.color}22;color:${cat.color};">${icon(cat.icon,15)}</div>
      <div class="meta"><b>${m.label}</b><span>${cat.label} · default: ${VIZ_LABEL[VIZ_COMPAT[m.kind][0]]}</span></div>
      <button class="addbtn" data-lib-add="${m.id}" title="Configure & add">${icon('plus',14)}</button>
    </div>`;
  }).join('');
  list.querySelectorAll('[data-lib-add]').forEach(btn=>btn.addEventListener('click', ()=>openWidgetConfigModal(btn.dataset.libAdd)));
  refreshIcons();
}
document.getElementById('btn-open-lib').addEventListener('click', ()=>{ renderLibDrawer(); document.getElementById('lib-drawer').classList.add('open'); });
document.getElementById('lib-close').addEventListener('click', ()=> document.getElementById('lib-drawer').classList.remove('open'));

/* ---- widget configuration modal (viz type + size before adding) ---- */
let wmMetricId = null, wmViz=null, wmW=4, wmH=6;
function openWidgetConfigModal(metricId){
  wmMetricId = metricId;
  const m = metricById(metricId);
  wmViz = VIZ_COMPAT[m.kind][0]; wmW=4; wmH=6;
  document.getElementById('wm-title').value = m.label;
  const vizRow = document.getElementById('wm-viz-row');
  vizRow.innerHTML = VIZ_COMPAT[m.kind].map(v=>`<button class="chip-option ${v===wmViz?'active':''}" data-viz="${v}">${VIZ_LABEL[v]}</button>`).join('');
  vizRow.querySelectorAll('[data-viz]').forEach(b=>b.addEventListener('click', ()=>{ wmViz=b.dataset.viz; vizRow.querySelectorAll('.chip-option').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }));
  document.querySelectorAll('[data-w]').forEach(b=>{ b.classList.toggle('active', +b.dataset.w===wmW); b.onclick=()=>{ wmW=+b.dataset.w; document.querySelectorAll('[data-w]').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }; });
  document.querySelectorAll('[data-h]').forEach(b=>{ b.classList.toggle('active', +b.dataset.h===wmH); b.onclick=()=>{ wmH=+b.dataset.h; document.querySelectorAll('[data-h]').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }; });
  document.getElementById('widget-modal-overlay').classList.add('show');
}
document.querySelectorAll('[data-close-widget-modal]').forEach(b=>b.addEventListener('click', ()=>document.getElementById('widget-modal-overlay').classList.remove('show')));
document.getElementById('wm-confirm').addEventListener('click', ()=>{
  const dash = getCurrentDashboard();
  const title = document.getElementById('wm-title').value.trim() || metricById(wmMetricId).label;
  const w = makeWidget(wmMetricId, wmViz, wmW, wmH, title);
  dash.widgets.push(w);
  document.getElementById('widget-modal-overlay').classList.remove('show');
  document.getElementById('lib-drawer').classList.remove('open');
  renderDashboardGrid();
  toast('Widget added to '+dash.name,'plus');
});

/* ---------------------------------------------------------------------------------
   12. FACILITY EXPLORER PAGE
   --------------------------------------------------------------------------------- */
function renderFacilityPage(){
  const crumbs = document.getElementById('facility-crumbs');
  const grid = document.getElementById('facility-grid');
  const path = state.facilityPath;

  let crumbHtml = `<div class="cr ${!path.building?'active':''}" data-fp="org">${ORG.name}</div>`;
  let cards = [];

  if(!path.building){
    cards = ORG.buildings.map(b=>({
      id:b.id, kind:'building', name:b.name, sub:`${b.floors.length} floors`,
      stat1:['Total Load', (120+Math.round(seededRng('bl'+b.id)()*300))+' kW'],
      stat2:['Alarms', Math.round(seededRng('ba'+b.id)()*5)]
    }));
  } else if(!path.floor){
    const b = findBuilding(path.building);
    crumbHtml += `<div>${icon('chevron-right',12)}</div><div class="cr active">${b.name}</div>`;
    cards = b.floors.map(f=>({
      id:f.id, kind:'floor', name:f.name, sub:`${f.depts.length} departments`,
      stat1:['Load', (30+Math.round(seededRng('fl'+f.id)()*90))+' kW'],
      stat2:['Devices', 4+Math.round(seededRng('fd'+f.id)()*10)]
    }));
  } else if(!path.dept){
    const b = findBuilding(path.building); const f = findFloor(path.floor);
    crumbHtml += `<div>${icon('chevron-right',12)}</div><div class="cr" data-fp="building">${b.name}</div><div>${icon('chevron-right',12)}</div><div class="cr active">${f.name}</div>`;
    cards = f.depts.map(d=>({
      id:d.id, kind:'dept', name:d.name, sub:'Department',
      stat1:['Load', (5+Math.round(seededRng('dl'+d.id)()*25))+' kW'],
      stat2:['Devices', 1+Math.round(seededRng('dd'+d.id)()*4)]
    }));
  } else {
    const b = findBuilding(path.building); const f = findFloor(path.floor); const d = findDept(path.dept);
    crumbHtml += `<div>${icon('chevron-right',12)}</div><div class="cr" data-fp="building">${b.name}</div><div>${icon('chevron-right',12)}</div><div class="cr" data-fp="floor">${f.name}</div><div>${icon('chevron-right',12)}</div><div class="cr active">${d.name}</div>`;
  }

  crumbs.innerHTML = crumbHtml;
  crumbs.querySelectorAll('[data-fp]').forEach(el=>el.addEventListener('click', ()=>{
    const level = el.dataset.fp;
    if(level==='org'){ state.facilityPath = {}; }
    if(level==='building'){ state.facilityPath = { building: path.building }; }
    if(level==='floor'){ state.facilityPath = { building: path.building, floor: path.floor }; }
    renderFacilityPage();
  }));

  if(path.building && path.floor && path.dept){
    grid.innerHTML = `<div class="card" style="padding:22px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
        <div class="tree-card .ic" style="width:44px;height:44px;border-radius:11px;background:rgba(var(--primary-rgb),.14);color:var(--primary-700);display:flex;align-items:center;justify-content:center;">${icon('door-open',20)}</div>
        <div><div style="font-weight:800;font-size:15px;">${findDept(path.dept).name}</div><div style="font-size:11.5px;color:var(--text-dim);">${findBuilding(path.building).name} · ${findFloor(path.floor).name}</div></div>
      </div>
      <p style="font-size:12.5px;color:var(--text-dim);margin-bottom:16px;">Scope every dashboard and EMS report to this department, or jump straight into the customizable dashboard builder.</p>
      <button class="btn btn-primary" id="fp-view-dash">${icon('layout-dashboard',14)}View live dashboard for this department</button>
    </div>`;
    document.getElementById('fp-view-dash').addEventListener('click', ()=>{
      state.scope = { building:path.building, floor:path.floor, dept:path.dept };
      populateScopeSelectors();
      renderDashboardGrid();
      showPage('page-dashboard');
      toast('Scoped to '+findDept(path.dept).name,'map-pin');
    });
    refreshIcons();
    return;
  }

  grid.innerHTML = cards.map(c=>`
    <div class="tree-card card" data-fp-card="${c.kind}" data-fp-id="${c.id}">
      <div class="arrow">${icon('chevron-right',15)}</div>
      <div class="ic">${icon(c.kind==='building'?'building-2':c.kind==='floor'?'layers':'users',18)}</div>
      <h4>${c.name}</h4><p>${c.sub}</p>
      <div class="stats">
        <div>${c.stat1[0]}<b>${c.stat1[1]}</b></div>
        <div>${c.stat2[0]}<b>${c.stat2[1]}</b></div>
      </div>
    </div>`).join('');
  grid.querySelectorAll('[data-fp-card]').forEach(card=>card.addEventListener('click', ()=>{
    const kind = card.dataset.fpCard, id = card.dataset.fpId;
    if(kind==='building') state.facilityPath = { building:id };
    if(kind==='floor') state.facilityPath = { building:path.building, floor:id };
    if(kind==='dept') state.facilityPath = { building:path.building, floor:path.floor, dept:id };
    renderFacilityPage();
  }));
  refreshIcons();
}

/* ---------------------------------------------------------------------------------
   13. GENERIC EMS CATEGORY PAGE (Loads, Solar, Generators, Grid, Battery, Water,
       Power Quality, Alarms, Cost, Carbon) — one renderer, driven by METRICS data
   --------------------------------------------------------------------------------- */
let emsMainChart = null;
function renderEmsPage(catId){
  const cat = CATEGORIES[catId];
  const metrics = METRICS.filter(m=>m.cat===catId);
  document.getElementById('ems-title').textContent = cat.label;
  document.getElementById('ems-sub').textContent = `Live and historical ${cat.label.toLowerCase()} data for ${scopeLabel()}.`;
  const catic = document.getElementById('ems-catic');
  catic.style.background = cat.color+'22'; catic.style.color = cat.color;
  catic.innerHTML = icon(cat.icon, 22);

  // KPI row: stat/gauge metrics
  const kpiWrap = document.getElementById('ems-kpis');
  kpiWrap.innerHTML = metrics.filter(m=>m.kind!=='table').slice(0,4).map(m=>{
    if(m.kind==='gauge'){
      const g = generateGauge(m);
      const pct = Math.round((g.value/g.max)*100);
      return `<div class="card kpi"><div class="top"><div><div class="lbl">${m.label}</div><div class="val">${g.value}${m.unit==='%'?'%':(m.max===1?'':' '+m.unit)}</div></div><div class="ic" style="background:${cat.color}22;color:${cat.color};">${icon(cat.icon,16)}</div></div><span class="badge ${pct>70?'success':pct>35?'primary':'danger'}">${pct}% of max</span></div>`;
    }
    const s = generateStat(m);
    const up = s.trend>=0;
    const dv = m.unit==='PKR' ? ('₨'+Math.round(s.value).toLocaleString()) : (s.value>=1000?Math.round(s.value).toLocaleString():s.value.toFixed(1));
    return `<div class="card kpi"><div class="top"><div><div class="lbl">${m.label}</div><div class="val">${dv}<small>${m.unit&&m.unit!=='PKR'?m.unit:''}</small></div></div><div class="ic" style="background:${cat.color}22;color:${cat.color};">${icon(cat.icon,16)}</div></div><span class="trend ${up?'up':'down'}">${icon(up?'trending-up':'trending-down',11)} ${Math.abs(s.trend)}%</span></div>`;
  }).join('');

  // Main trend chart: first series/multiseries metric
  const mainMetric = metrics.find(m=>m.kind==='series'||m.kind==='multiseries') || metrics[0];
  document.getElementById('ems-main-title').textContent = mainMetric.label + ' Trend';
  document.getElementById('ems-main-sub').textContent = `Primary metric over the selected range`;
  renderEmsMainChart(mainMetric, state.emsRange);
  document.querySelectorAll('#ems-range-tabs button').forEach(b=>{
    b.classList.toggle('active', b.dataset.range===state.emsRange);
    b.onclick = ()=>{ state.emsRange=b.dataset.range; document.querySelectorAll('#ems-range-tabs button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); renderEmsMainChart(mainMetric, state.emsRange); };
  });

  // side card: alarms table for 'alarms' cat, else breakdown list of the other metrics
  const side = document.getElementById('ems-side-card');
  if(catId==='alarms'){
    const alarms = generateAlarms(7);
    side.innerHTML = `<div class="lh"><div><h3>Recent Events</h3><p>${scopeLabel()}</p></div><span class="badge danger">${alarms.filter(a=>a.severity==='danger').length} critical</span></div>` +
      alarms.map(a=>`<div class="alarm-row ${a.severity}"><div class="aic" style="background:${a.severity==='danger'?'var(--danger-100)':'var(--warning-100)'};color:${a.severity==='danger'?'var(--danger-700)':'var(--primary-700)'};">${icon(a.severity==='danger'?'octagon-alert':'triangle-alert',13)}</div><div class="body"><b>${a.title}</b><span>${a.desc} · ${a.device}</span></div><time>${a.mins}m ago</time></div>`).join('');
  } else {
    side.innerHTML = `<div class="lh"><div><h3>Related Metrics</h3><p>${cat.label}</p></div></div>` +
      metrics.filter(m=>m.id!==mainMetric.id && m.kind!=='table').map(m=>{
        let display;
        if(m.kind==='gauge'){ const g=generateGauge(m); display = g.value+(m.unit==='%'?'%':(m.max===1?'':' '+m.unit)); }
        else { const s=generateStat(m); display = m.unit==='PKR'?('₨'+Math.round(s.value).toLocaleString()):(s.value>=1000?Math.round(s.value).toLocaleString():s.value.toFixed(1))+(m.unit&&m.unit!=='PKR'?(' '+m.unit):''); }
        return `<div class="alarm-row" style="border-left-color:${cat.color};"><div class="aic" style="background:${cat.color}22;color:${cat.color};">${icon(cat.icon,13)}</div><div class="body"><b>${m.label}</b><span>Current reading for ${scopeLabel()}</span></div><time class="mono" style="font-weight:800;color:var(--text);font-size:12px;">${display}</time></div>`;
      }).join('');
  }
  refreshIcons();
}
function renderEmsMainChart(metric, range){
  const canvas = document.getElementById('ems-main-chart');
  if(emsMainChart){ emsMainChart.destroy(); emsMainChart=null; }
  const points = range==='24h'?24:range==='7d'?7:30;
  const cat = CATEGORIES[metric.cat];
  if(metric.kind==='multiseries'){
    const ms = generateMultiSeries(metric, points, range);
    const datasets = ms.series.map(s=>({ label:s.name, data:s.data, borderColor:s.color, backgroundColor:s.color+'20', fill:false, tension:.35, borderWidth:2.2, pointRadius:0 }));
    emsMainChart = renderLineBarChart(canvas, 'line', ms.labels, datasets);
  } else {
    const s = generateSeries(metric, points, range);
    emsMainChart = renderLineBarChart(canvas, 'area', s.labels, [{ label:metric.label, data:s.data, borderColor:cat.color, backgroundColor:cat.color+'26', fill:true, tension:.35, borderWidth:2.4, pointRadius:0 }]);
  }
}
document.getElementById('ems-add-to-dash').addEventListener('click', ()=>{
  showPage('page-dashboard');
  toast('Switched to dashboard — use "Add widget" to pull in these metrics','arrow-right');
});

/* ---------------------------------------------------------------------------------
   14. WIDGET LIBRARY (full catalog) PAGE
   --------------------------------------------------------------------------------- */
function renderWidgetLibraryPage(){
  const grid = document.getElementById('widgetlib-grid');
  grid.innerHTML = METRICS.map(m=>{
    const cat = CATEGORIES[m.cat];
    return `<div class="tree-card card">
      <div class="ic" style="background:${cat.color}22;color:${cat.color};">${icon(cat.icon,18)}</div>
      <h4>${m.label}</h4><p>${cat.label} · ${VIZ_COMPAT[m.kind].map(v=>VIZ_LABEL[v]).join(', ')}</p>
      <button class="btn sm btn-primary" data-wl-add="${m.id}" style="width:100%;justify-content:center;">${icon('plus',13)}Add to dashboard</button>
    </div>`;
  }).join('');
  grid.querySelectorAll('[data-wl-add]').forEach(btn=>btn.addEventListener('click', ()=>{
    showPage('page-dashboard');
    openWidgetConfigModal(btn.dataset.wlAdd);
  }));
  refreshIcons();
}

/* ---------------------------------------------------------------------------------
   15. DEVICES & USERS PAGES (static representative tables)
   --------------------------------------------------------------------------------- */
function renderDevicesPage(){
  const rnd = seededRng('devices|'+scopeKey());
  const types = ['Smart Meter','Solar Inverter','Generator Controller','Water Flow Sensor','Gateway','Power Quality Analyzer'];
  const rows = Array.from({length:8}).map((_,i)=>{
    const online = rnd()>0.15;
    return `<tr><td class="mono">DEV-${1000+Math.floor(rnd()*899)}</td><td>${types[Math.floor(rnd()*types.length)]}</td><td>${scopeLabel()}</td><td><span class="badge ${online?'success':'danger'}">${online?'Online':'Offline'}</span></td><td>${Math.floor(rnd()*59)} min ago</td></tr>`;
  }).join('');
  document.getElementById('devices-table').innerHTML = `<thead><tr><th>Device ID</th><th>Type</th><th>Location</th><th>Status</th><th>Last Seen</th></tr></thead><tbody>${rows}</tbody>`;
}
function renderUsersPage(){
  const users = [
    ['Maryam Ahmed','Facility Manager','maryam@greenfield.com','Full access'],
    ['Bilal Raza','Energy Analyst','bilal@greenfield.com','Dashboards only'],
    ['Sana Tariq','Admin','sana@greenfield.com','Full access'],
    ['Hamza Iqbal','Viewer','hamza@greenfield.com','Read only'],
  ];
  document.getElementById('users-table').innerHTML = `<thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Permissions</th></tr></thead><tbody>${
    users.map(u=>`<tr><td>${u[0]}</td><td>${u[1]}</td><td>${u[2]}</td><td><span class="badge neutral">${u[3]}</span></td></tr>`).join('')
  }</tbody>`;
}

/* ---------------------------------------------------------------------------------
   16. BRANDING / THEME ENGINE (live, per-organization)
   --------------------------------------------------------------------------------- */
const BRAND_SWATCHES = ['#F5A623','#2563EB','#16A34A','#DC2626','#8B5CF6','#06B6D4','#F97316','#141828'];
function renderSwatches(){
  const wrap = document.getElementById('swatch-row');
  wrap.innerHTML = BRAND_SWATCHES.map(c=>`<div class="swatch ${c.toLowerCase()===state.primary.toLowerCase()?'active':''}" style="background:${c}" data-swatch="${c}">${icon('check',16)}</div>`).join('');
  wrap.querySelectorAll('[data-swatch]').forEach(sw=>sw.addEventListener('click', ()=>applyPrimaryColor(sw.dataset.swatch)));
  refreshIcons();
}
function hexToRgb(hex){ const v=hex.replace('#',''); const n=parseInt(v.length===3?v.split('').map(c=>c+c).join(''):v,16); return [(n>>16)&255,(n>>8)&255,n&255]; }
function shade(hex, amt){ const [r,g,b]=hexToRgb(hex); const f=(c)=>Math.max(0,Math.min(255,Math.round(c+amt))); return `rgb(${f(r)},${f(g)},${f(b)})`; }
function applyPrimaryColor(hex){
  state.primary = hex;
  document.documentElement.style.setProperty('--primary-500', hex);
  document.documentElement.style.setProperty('--primary-600', shade(hex,-25));
  document.documentElement.style.setProperty('--primary-400', shade(hex,25));
  document.documentElement.style.setProperty('--primary-700', shade(hex,-50));
  document.documentElement.style.setProperty('--primary-rgb', hexToRgb(hex).join(','));
  document.getElementById('custom-color-input').value = hex;
  renderSwatches();
  toast('Brand color updated','palette');
  // repaint any open charts that used category colors tied to primary
  const activePage = document.querySelector('.page.active').id;
  if(activePage==='page-dashboard') renderDashboardGrid();
  if(activePage==='page-ems') renderEmsPage(state.currentEmsCat);
}
document.getElementById('custom-color-input').addEventListener('input', (e)=>applyPrimaryColor(e.target.value));
document.querySelectorAll('[data-theme-mode]').forEach(btn=>btn.addEventListener('click', ()=>{
  document.querySelectorAll('[data-theme-mode]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  setTheme(btn.dataset.themeMode);
}));
document.getElementById('brand-initials-input').addEventListener('input', (e)=>{
  const val = (e.target.value || 'CF').toUpperCase().slice(0,3);
  document.querySelector('.brand-mark').textContent = val;
});

function setTheme(mode){
  state.theme = mode;
  document.documentElement.setAttribute('data-theme', mode);
  document.getElementById('theme-toggle').innerHTML = icon(mode==='dark'?'sun':'moon',17);
  refreshIcons();
  const activePage = document.querySelector('.page.active').id;
  if(activePage==='page-dashboard') renderDashboardGrid();
  if(activePage==='page-ems') renderEmsPage(state.currentEmsCat);
}
document.getElementById('theme-toggle').addEventListener('click', ()=>{
  const next = state.theme==='light'?'dark':'light';
  document.querySelectorAll('[data-theme-mode]').forEach(b=>b.classList.toggle('active', b.dataset.themeMode===next));
  setTheme(next);
});

/* ---------------------------------------------------------------------------------
   17. ORG SWITCHER (demo: cosmetic — shows the multi-tenant concept)
   --------------------------------------------------------------------------------- */
document.getElementById('org-switcher-btn').addEventListener('click', ()=>{
  toast('In production this lets an admin switch between tenant organizations','building-2');
});

/* ---------------------------------------------------------------------------------
   18. SIDEBAR TOGGLE (responsive)
   --------------------------------------------------------------------------------- */
document.getElementById('sidebar-toggle').addEventListener('click', ()=>{
  const sb = document.getElementById('sidebar');
  if(window.innerWidth <= 860) sb.classList.toggle('mobile-open');
  else sb.classList.toggle('collapsed');
});

/* ---------------------------------------------------------------------------------
   19. NAV SECTION EXPAND (not strictly required — kept flat per design; group labels
       act as static section headers matching the existing product's nav pattern)
   --------------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------
   20. INIT
   --------------------------------------------------------------------------------- */
function init(){
  state.dashboards = defaultDashboards();
  state.currentDashboardId = state.dashboards[0].id;
  populateScopeSelectors();
  renderDashTabs();
  renderNavDashboards();
  renderSwatches();
  refreshIcons();
  showPage('page-dashboard');
  renderDashboardGrid();
  window.addEventListener('resize', ()=>{
    Object.values(state.charts).forEach(c=>{ try{ c.resize(); }catch(e){} });
    if(emsMainChart){ try{ emsMainChart.resize(); }catch(e){} }
  });
}
window.addEventListener('DOMContentLoaded', init);
