import { useState, useEffect, useRef } from "react";

/* ─── DESIGN TOKENS ──────────────────────────────────────────── */
const C = {
  bg: "#F8F9FB", surface: "#FFFFFF", card: "#FFFFFF", sidebar: "#FFFFFF",
  border: "#E8ECF0", borderMed: "#D1D9E0",
  accent: "#1D6FEB", accentLight: "#EBF2FF", accentMid: "#3B82F6",
  green: "#16A34A", greenLight: "#DCFCE7",
  amber: "#D97706", amberLight: "#FEF3C7",
  red: "#DC2626", redLight: "#FEE2E2",
  purple: "#7C3AED", purpleLight: "#EDE9FE",
  cyan: "#0891B2", cyanLight: "#CFFAFE",
  teal: "#0D9488", tealLight: "#CCFBF1",
  text: "#0F172A", textMed: "#334155", textMuted: "#64748B", textLight: "#94A3B8",
  white: "#FFFFFF",
  shadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
  shadowMd: "0 4px 16px rgba(0,0,0,0.08)",
  shadowLg: "0 8px 32px rgba(0,0,0,0.10)",
};

const fmt = (s) => { const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60; return h>0?`${h}h ${m}m`:`${m}m ${sc}s`; };
const clamp = (v,lo,hi) => Math.max(lo,Math.min(hi,v));

function ChargeArc({ pct, size=180, thick=14 }) {
  const r=(size-thick)/2, circ=2*Math.PI*r, p=clamp(pct,0,100);
  const color = p>65?C.green:p>30?C.amber:C.red;
  const offset = circ*(1-p/100);
  return (
    <svg width={size} height={size} style={{display:"block"}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={thick}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={thick} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset} transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{transition:"stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1),stroke 0.5s",filter:`drop-shadow(0 0 6px ${color}55)`}}/>
      <text x={size/2} y={size/2-10} textAnchor="middle" fill={color} fontSize={38} fontWeight="800" fontFamily="'DM Sans',sans-serif">{Math.round(p)}</text>
      <text x={size/2} y={size/2+10} textAnchor="middle" fill={C.textMuted} fontSize={12} fontFamily="'DM Sans',sans-serif">%</text>
      <text x={size/2} y={size/2+28} textAnchor="middle" fill={C.textMuted} fontSize={9} letterSpacing="1.5" fontFamily="'DM Sans',sans-serif">STATE OF CHARGE</text>
    </svg>
  );
}

function Spark({ data, color=C.accent, w=100, h=32, fill=false }) {
  if (!data?.length) return null;
  const max=Math.max(...data), min=Math.min(...data), rng=max-min||1;
  const pts=data.map((v,i)=>[(i/(data.length-1))*w, h-4-((v-min)/rng)*(h-8)]);
  const path=pts.map(([x,y],i)=>`${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return (
    <svg width={w} height={h} style={{display:"block",overflow:"visible"}}>
      {fill && <path d={`${path} L${w},${h} L0,${h} Z`} fill={color+"18"}/>}
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r={3} fill={color}/>
    </svg>
  );
}

function Pill({ label, color, bg, small }) {
  return <span style={{background:bg||color+"15",color,border:`1px solid ${color}30`,borderRadius:99,padding:small?"2px 8px":"3px 10px",fontSize:small?10:11,fontWeight:700,fontFamily:"'DM Sans',sans-serif",letterSpacing:0.3,whiteSpace:"nowrap"}}>{label}</span>;
}

function AlertDot({ type }) {
  const map = { fault:C.red, demand:C.amber, ai:C.accent, success:C.green, info:C.cyan };
  const labels = { fault:"FAULT", demand:"DEMAND", ai:"AI", success:"OK", info:"INFO" };
  const c = map[type]||C.textMuted;
  return <span style={{background:c+"18",color:c,border:`1px solid ${c}40`,borderRadius:99,padding:"1px 7px",fontSize:9,fontWeight:700,letterSpacing:0.5,fontFamily:"'DM Sans',sans-serif"}}>{labels[type]||type.toUpperCase()}</span>;
}

function Card({ children, style:s={}, accent, onClick, hover }) {
  const [hov,setHov]=useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:C.card,border:`1px solid ${accent?accent+"30":C.border}`,borderRadius:16,padding:"18px",overflow:"hidden",boxShadow:hov&&hover?C.shadowMd:C.shadow,cursor:onClick?"pointer":"default",transition:"box-shadow 0.2s,transform 0.15s",transform:hov&&hover?"translateY(-1px)":"none",...s}}>{children}</div>
  );
}

const SL = ({ children, right }) => (
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
    <span style={{color:C.textMuted,fontSize:10,fontWeight:700,letterSpacing:1.5,fontFamily:"'DM Sans',sans-serif",textTransform:"uppercase"}}>{children}</span>
    {right && <span style={{color:C.accent,fontSize:11,fontWeight:600,cursor:"pointer"}}>{right}</span>}
  </div>
);

function Toggle({ on, onToggle }) {
  return (
    <div onClick={onToggle} style={{width:38,height:21,borderRadius:99,background:on?C.accent:C.borderMed,position:"relative",cursor:"pointer",transition:"background 0.2s",flexShrink:0}}>
      <div style={{position:"absolute",top:2.5,left:on?19:2.5,width:16,height:16,borderRadius:"50%",background:C.white,transition:"left 0.2s",boxShadow:"0 1px 4px rgba(0,0,0,0.15)"}}/>
    </div>
  );
}

function Bar({ value, max=100, color=C.accent, height=6 }) {
  return (
    <div style={{background:C.border,borderRadius:99,height,overflow:"hidden"}}>
      <div style={{width:`${(value/max)*100}%`,height:"100%",background:color,borderRadius:99,transition:"width 0.8s cubic-bezier(.4,0,.2,1)"}}/>
    </div>
  );
}

function Kpi({ icon, label, value, color, delta, sub }) {
  return (
    <Card style={{padding:"16px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{width:36,height:36,borderRadius:10,background:color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{icon}</div>
        {delta && <span style={{fontSize:11,fontWeight:600,color:delta.startsWith("+")?C.green:C.red}}>{delta}</span>}
      </div>
      <div style={{fontSize:22,fontWeight:800,color:C.text,marginTop:10}}>{value}</div>
      <div style={{fontSize:11,color:C.textMuted,marginTop:2}}>{label}</div>
      {sub && <div style={{fontSize:10,color:C.textLight,marginTop:2}}>{sub}</div>}
    </Card>
  );
}

function IdleFeeBanner({ seconds }) {
  const mins = Math.floor(seconds/60), secs = seconds%60;
  const urgent = seconds < 120;
  return (
    <div style={{background:urgent?C.redLight:C.amberLight,border:`1px solid ${urgent?C.red:C.amber}40`,borderRadius:12,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
      <div>
        <div style={{fontSize:12,fontWeight:700,color:urgent?C.red:C.amber}}>⚠ Idle fee starts in {mins}:{String(secs).padStart(2,"0")}</div>
        <div style={{fontSize:11,color:C.textMuted,marginTop:2}}>$0.10/min after grace period — please move your vehicle</div>
      </div>
      <div style={{fontSize:18,fontWeight:800,color:urgent?C.red:C.amber}}>🚗</div>
    </div>
  );
}

function EnergySourceBar({ solar=0, bess=0, grid=100 }) {
  return (
    <div style={{marginTop:6}}>
      <div style={{display:"flex",height:6,borderRadius:99,overflow:"hidden"}}>
        {solar>0 && <div style={{width:`${solar}%`,background:C.amber}}/>}
        {bess>0  && <div style={{width:`${bess}%`,background:C.green}}/>}
        {grid>0  && <div style={{width:`${grid}%`,background:C.accent}}/>}
      </div>
      <div style={{display:"flex",gap:10,marginTop:4}}>
        {solar>0 && <span style={{fontSize:9,color:C.amber}}>☀ {solar}% solar</span>}
        {bess>0  && <span style={{fontSize:9,color:C.green}}>🔋 {bess}% battery</span>}
        {grid>0  && <span style={{fontSize:9,color:C.accent}}>⚡ {grid}% grid</span>}
      </div>
    </div>
  );
}

function AiLogEntry({ time, action, reason, type }) {
  const typeColor = {schedule:C.accent, savings:C.green, grid:C.amber, fault:C.red, export:C.purple}[type]||C.cyan;
  const typeIcon  = {schedule:"🕐",savings:"💡",grid:"⚡",fault:"⚠️",export:"♻️"}[type]||"🤖";
  return (
    <div style={{display:"flex",gap:12,padding:"10px 0",borderBottom:`1px solid ${C.border}`}}>
      <div style={{width:32,height:32,borderRadius:9,background:typeColor+"15",border:`1px solid ${typeColor}25`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{typeIcon}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}>
          <div style={{fontSize:12,fontWeight:600,color:C.text}}>{action}</div>
          <div style={{display:"flex",gap:6,alignItems:"center",flexShrink:0}}>
            <AlertDot type={type==="fault"?"fault":type==="grid"?"demand":"ai"}/>
            <span style={{fontSize:10,color:C.textMuted,whiteSpace:"nowrap"}}>{time}</span>
          </div>
        </div>
        <div style={{fontSize:11,color:C.textMuted,marginTop:3,lineHeight:1.5}}>💬 {reason}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const powerCurve   = [12,28,68,118,164,182,190,186,174,158,139,121,106,91,78,67,58];
const socHistory   = [22,28,35,44,53,62,69,74,78];
const weekEnergy   = [34,51,18,66,41,58,44];
const weekLabels   = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const monthCost    = [42,38,55,61,49,58,44,52,66,47,53,60];
const gridPriceData= [8,9,11,14,13,10,8,7,9,12,18,22,24,20,17,14,16,21,25,23,18,14,11,9];
const v2gEarnings  = [0,0,1.2,2.4,1.8,0.9,2.1,3.4,2.7,1.5,0,0];

const sessions = [
  { date:"Today, 9:14am", name:"Tesla SC · Downtown",     addr:"123 Main St",    dur:"47m",    kwh:42.3, cost:9.82,  icon:"⚡", type:"DC Fast 250kW", rating:5, network:"Tesla",      solar:22, bess:18, grid:60 },
  { date:"Yesterday",     name:"ChargePoint · Westfield", addr:"Mall of America",dur:"1h 11m", kwh:31.0, cost:7.44,  icon:"🏢", type:"Level 2 50kW",  rating:4, network:"ChargePoint", solar:0,  bess:0,  grid:100 },
  { date:"Jun 28",        name:"Home Charger",            addr:"My Home",        dur:"6h 08m", kwh:58.9, cost:5.20,  icon:"🏠", type:"Level 2 11kW",  rating:5, network:"Home",        solar:41, bess:31, grid:28 },
  { date:"Jun 26",        name:"Electrify America · I-95",addr:"Hwy 1 Stop",    dur:"22m",    kwh:38.5, cost:11.23, icon:"🛣", type:"DC Fast 350kW", rating:3, network:"EA",          solar:8,  bess:0,  grid:92 },
  { date:"Jun 24",        name:"EVgo · City Center",      addr:"456 Oak Ave",   dur:"35m",    kwh:28.1, cost:8.91,  icon:"🌆", type:"DC Fast 100kW", rating:4, network:"EVgo",        solar:0,  bess:12, grid:88 },
];

const nearby = [
  { name:"Tesla Supercharger", addr:"123 Main St",        dist:0.4, available:8, total:12, kw:250, status:"open", network:"Tesla",      connector:"NACS",  wait:0,  rating:4.8, price:"$0.25/kWh", amenities:["☕","🛍","🍔"], plugAndCharge:true,  checkins:142, recentNote:"\"Fast charge, clean stalls — 9/10\"" },
  { name:"ChargePoint Hub",    addr:"Mall of America",    dist:0.8, available:3, total:6,  kw:50,  status:"open", network:"ChargePoint",connector:"J1772", wait:0,  rating:4.5, price:"$0.22/kWh", amenities:["🛍","🅿"],     plugAndCharge:false, checkins:87,  recentNote:"\"Slow but reliable, good parking\"" },
  { name:"EVgo Station",       addr:"456 Oak Ave",        dist:1.2, available:0, total:4,  kw:150, status:"full", network:"EVgo",       connector:"CCS",   wait:12, rating:4.1, price:"$0.28/kWh", amenities:["🅿"],          plugAndCharge:true,  checkins:63,  recentNote:"\"Stall 3 out of order as of today\"" },
  { name:"Blink Level 2",      addr:"City Parking Garage",dist:1.5, available:5, total:8,  kw:7,   status:"open", network:"Blink",      connector:"J1772", wait:0,  rating:3.9, price:"$0.18/kWh", amenities:["🅿"],          plugAndCharge:false, checkins:41,  recentNote:"\"Very slow but free overnight\"" },
  { name:"Electrify America",  addr:"Hwy 1 Stop",         dist:2.1, available:2, total:8,  kw:350, status:"open", network:"EA",         connector:"CCS",   wait:0,  rating:3.7, price:"$0.30/kWh", amenities:["🛣","🍔","🚿"], plugAndCharge:true,  checkins:29,  recentNote:"\"2 stalls reported offline — check before driving\"" },
];

const badges = [
  { icon:"🌱", label:"Eco Warrior",    sub:"500kg CO₂ saved",      earned:true,  color:C.green  },
  { icon:"⚡", label:"Speed Charger",  sub:"10 DC fast sessions",   earned:true,  color:C.amber  },
  { icon:"🌙", label:"Night Owl",      sub:"20 off-peak charges",   earned:true,  color:C.purple },
  { icon:"🗺", label:"Road Tripper",   sub:"500+ miles planned",    earned:false, color:C.accent },
  { icon:"🔋", label:"Battery Guru",   sub:"Maintain 80% SoH",     earned:false, color:C.cyan   },
  { icon:"💎", label:"Diamond Driver", sub:"1000 sessions total",   earned:false, color:C.cyan   },
];

const notifications = [
  { icon:"✅", text:"Charging complete — 90% reached",            time:"2m ago",  color:C.green,  type:"success", read:false },
  { icon:"💡", text:"Off-peak window starts in 30min — charging?",time:"18m ago", color:C.amber,  type:"demand",  read:false },
  { icon:"⚠️", text:"Tesla SC Downtown: stall #4 hardware fault",  time:"1h ago",  color:C.red,    type:"fault",   read:true  },
  { icon:"🤖", text:"AI shifted schedule — grid demand spike 6pm", time:"3h ago",  color:C.accent, type:"ai",      read:true  },
  { icon:"💰", text:"V2G earnings: $3.40 credited last night",     time:"8h ago",  color:C.purple, type:"ai",      read:true  },
];

const aiLog = [
  { time:"09:41",   action:"Shifted charge start to 11:00 PM",        reason:"Current rate $0.24/kWh vs $0.08/kWh off-peak. Delaying saves $1.42 tonight.",    type:"savings"  },
  { time:"08:17",   action:"Activated demand response signal",         reason:"Grid operator requested 10% load reduction 6–8 PM. Pausing charge earns $0.18 credit.", type:"grid"     },
  { time:"07:52",   action:"Switched to solar input priority",         reason:"Solar generation (7.2 kW) exceeds home load. Routing surplus directly to vehicle.",  type:"schedule" },
  { time:"06:30",   action:"Pre-conditioned battery to 21°C",         reason:"Forecast: 10°C at departure. Pre-heating adds ~12% charging efficiency at station.",  type:"schedule" },
  { time:"Yesterday 23:04", action:"V2G export: 2.1 kWh @ $0.32/kWh",reason:"Spot price spike detected. Battery at 88% — exported above reserve floor (30%). Earned $0.67.", type:"export" },
  { time:"Yesterday 17:22", action:"Fault alert: Charger Temp 58°C",  reason:"Charger temperature exceeded warning threshold. Session rate reduced to 60 kW to protect hardware.", type:"fault" },
  { time:"Yesterday 14:10", action:"Recommended off-peak schedule",    reason:"Pattern analysis: you typically charge Wed evening. Off-peak window 11 PM–6 AM saves avg $1.20/session.", type:"savings" },
];

const energyTariffs = [
  { hour:"12am–6am", rate:"$0.08", label:"Super Off-Peak", color:C.green  },
  { hour:"6am–9am",  rate:"$0.14", label:"Off-Peak",       color:C.accent },
  { hour:"9am–5pm",  rate:"$0.18", label:"Mid-Peak",       color:C.amber  },
  { hour:"5pm–9pm",  rate:"$0.28", label:"Peak",           color:C.red    },
  { hour:"9pm–12am", rate:"$0.14", label:"Off-Peak",       color:C.accent },
];

const fleetVehicles = [
  { id:"V-001", name:"Tesla Model 3 LR",     plate:"EV·3201", soc:78, status:"charging", location:"Depot A",   driver:"Alex J."  },
  { id:"V-002", name:"Chevy Bolt EUV",       plate:"EV·5512", soc:45, status:"driving",  location:"En route",  driver:"Maria S." },
  { id:"V-003", name:"Ford F-150 Lightning", plate:"EV·7723", soc:91, status:"ready",    location:"Depot B",   driver:"James K." },
  { id:"V-004", name:"Rivian R1T",           plate:"EV·4490", soc:22, status:"idle",     location:"Site 3",    driver:"Sarah M." },
];

const operatorBays = [
  { id:"Bay 1", vehicle:"Tesla Model 3",     soc:78, power:98,  status:"charging", source:"solar",  alert:null },
  { id:"Bay 2", vehicle:"BMW iX",            soc:44, power:50,  status:"charging", source:"grid",   alert:null },
  { id:"Bay 3", vehicle:"Hyundai IONIQ 6",   soc:91, power:0,   status:"complete", source:null,     alert:"idle fee in 4m" },
  { id:"Bay 4", vehicle:"—",                soc:0,  power:0,   status:"fault",    source:null,     alert:"hardware fault — cable" },
];

const NAV = [
  { id:"live",    icon:"⚡",  label:"Live Session"  },
  { id:"find",    icon:"🗺",  label:"Find Charger"  },
  { id:"trip",    icon:"🧭",  label:"Trip Planner"  },
  { id:"stats",   icon:"📊",  label:"Analytics"     },
  { id:"energy",  icon:"🔋",  label:"Energy Hub"    },
  { id:"v2g",     icon:"♻️",  label:"V2G / Export"  },
  { id:"ailog",   icon:"🤖",  label:"AI Log"        },
  { id:"fleet",   icon:"🚐",  label:"Fleet"         },
  { id:"profile", icon:"◉",  label:"My Profile"    },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════════════ */
export default function App() {
  const [tab,           setTab]           = useState("live");
  const [charging,      setCharging]      = useState(true);
  const [soc,           setSoc]           = useState(78.0);
  const [powerKw]                         = useState(98);
  const [elapsed,       setElapsed]       = useState(2820);
  const [sessionKwh,    setSessionKwh]    = useState(42.3);
  const [chargeLimit,   setChargeLimit]   = useState(90);
  const [smartSched,    setSmartSched]    = useState(true);
  const [demandResp,    setDemandResp]    = useState(true);
  const [precond,       setPrecond]       = useState(false);
  const [v2gEnabled,    setV2gEnabled]    = useState(true);
  const [solarSync,     setSolarSync]     = useState(true);
  const [filterIdx,     setFilterIdx]     = useState(0);
  const [expandStation, setExpandStation] = useState(null);
  const [statPeriod,    setStatPeriod]    = useState("week");
  const [tripFrom,      setTripFrom]      = useState("New York, NY");
  const [tripTo,        setTripTo]        = useState("Boston, MA");
  const [showTrip,      setShowTrip]      = useState(false);
  const [notifOpen,     setNotifOpen]     = useState(false);
  const [notifList,     setNotifList]     = useState(notifications);
  const [activeAlert,   setActiveAlert]   = useState(null);
  const [reserveStation,setReserveStation]= useState(null);
  const [reserveCountdown,setReserveCountdown]=useState(null);
  const [schedHour,     setSchedHour]     = useState(23);
  const [schedPct,      setSchedPct]      = useState(80);
  const [deptTime,      setDeptTime]      = useState("07:30");
  const [deptTarget,    setDeptTarget]    = useState(80);
  const [v2gLimit,      setV2gLimit]      = useState(30);
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [driverMode,    setDriverMode]    = useState(true);
  const [aiGoal,        setAiGoal]        = useState("cost");
  const [idleCountdown, setIdleCountdown] = useState(null);
  const [aiLogFilter,   setAiLogFilter]   = useState("all");

  const unread = notifList.filter(n=>!n.read).length;

  useEffect(()=>{
    if (!charging) return;
    const t=setInterval(()=>{
      setSoc(s=>Math.min(chargeLimit,+(s+0.018).toFixed(3)));
      setElapsed(e=>e+1);
      setSessionKwh(k=>+(k+0.003).toFixed(3));
    },1000);
    return ()=>clearInterval(t);
  },[charging,chargeLimit]);

  useEffect(()=>{
    if (soc>=chargeLimit && charging) {
      setCharging(false);
      setActiveAlert({msg:`🎉 Reached ${chargeLimit}% charge limit!`,color:C.green});
      setTimeout(()=>setActiveAlert(null),4000);
      setIdleCountdown(600);
    }
  },[soc,chargeLimit,charging]);

  useEffect(()=>{
    if (idleCountdown===null||idleCountdown<=0) return;
    const t=setInterval(()=>setIdleCountdown(c=>c-1),1000);
    return ()=>clearInterval(t);
  },[idleCountdown]);

  useEffect(()=>{
    if (reserveCountdown===null||reserveCountdown<=0) {
      if (reserveCountdown===0) { setReserveStation(null); setReserveCountdown(null); }
      return;
    }
    const t=setInterval(()=>setReserveCountdown(c=>c-1),1000);
    return ()=>clearInterval(t);
  },[reserveCountdown]);

  const socPct     = Math.round(soc);
  const estMins    = charging?Math.max(0,Math.ceil((chargeLimit-soc)/0.018/60)):0;
  const costNow    = (sessionKwh*0.232).toFixed(2);
  const co2Saved   = (sessionKwh*0.386).toFixed(1);
  const milesAdded = Math.round(sessionKwh*3.8);
  const statColor  = v=>v>=65?C.green:v>=30?C.amber:C.red;

  const filters = ["All","DC Fast","Level 2","Available","< 1 mi","Plug&Charge"];
  const filteredStations = nearby.filter(s=>{
    if (filterIdx===0) return true;
    if (filterIdx===1) return s.kw>=50;
    if (filterIdx===2) return s.kw<50;
    if (filterIdx===3) return s.status==="open";
    if (filterIdx===4) return s.dist<1;
    if (filterIdx===5) return s.plugAndCharge;
    return true;
  });

  const aiLogFiltered = aiLog.filter(e=>aiLogFilter==="all"||e.type===aiLogFilter);
  const sideW = sideCollapsed?72:220;

  const scheduleReason = () => {
    if (schedHour>=22||schedHour<=5) return `💡 Charging at ${schedHour}:00 saves $1.42 vs now — super off-peak rate ($0.08/kWh) active until 6am.`;
    if (schedHour<=9) return `💡 Charging at ${schedHour}:00 saves $0.62 vs now — off-peak rate ($0.14/kWh).`;
    return `⚠ Charging at ${schedHour}:00 uses peak-adjacent rate ($0.18/kWh). Consider shifting to 11pm for $1.20 savings.`;
  };

  const goalDesc = { cost:"Minimise electricity cost — AI prioritises off-peak windows and V2G earnings.", green:"Maximise renewable energy — AI prioritises solar availability and BESS over grid.", battery:"Protect battery lifespan — AI limits peak charge to 80%, avoids fast-charge heat." };

  return (
    <div style={{background:C.bg,minHeight:"100vh",color:C.text,fontFamily:"'DM Sans',sans-serif",display:"flex",flexDirection:"row"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;height:5px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#D1D9E0;border-radius:99px}
        input::placeholder{color:${C.textLight}}
        input[type=range]{-webkit-appearance:none;height:4px;border-radius:2px;background:${C.border};outline:none}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:${C.accent};cursor:pointer;box-shadow:0 0 0 3px ${C.accentLight}}
        @keyframes slideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
      `}</style>

      {/* SIDEBAR */}
      <div style={{width:sideW,minHeight:"100vh",background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",transition:"width 0.25s",overflow:"hidden",flexShrink:0,position:"sticky",top:0,height:"100vh"}}>
        <div style={{padding:sideCollapsed?"20px 0":"20px 20px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:10,justifyContent:sideCollapsed?"center":"flex-start"}}>
          <div style={{width:34,height:34,borderRadius:10,background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>⚡</div>
          {!sideCollapsed && <div><div style={{fontSize:16,fontWeight:800,letterSpacing:-0.5}}>VOLTIX</div><div style={{fontSize:10,color:C.textMuted,letterSpacing:0.5}}>EV Dashboard</div></div>}
        </div>

        {!sideCollapsed && (
          <div style={{padding:"10px 14px",borderBottom:`1px solid ${C.border}`}}>
            <div style={{display:"flex",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,padding:3}}>
              {["Driver","Operator"].map((m,i)=>{
                const active=(driverMode&&i===0)||(!driverMode&&i===1);
                return <div key={m} onClick={()=>setDriverMode(i===0)} style={{flex:1,textAlign:"center",padding:"5px 0",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",background:active?C.accent:"none",color:active?C.white:C.textMuted,transition:"all 0.15s"}}>{m}</div>;
              })}
            </div>
          </div>
        )}

        <nav style={{flex:1,padding:"10px 0",overflowY:"auto"}}>
          {NAV.map(n=>{
            const active=tab===n.id;
            return (
              <div key={n.id} onClick={()=>setTab(n.id)} title={n.label} style={{display:"flex",alignItems:"center",gap:12,padding:sideCollapsed?"10px 0":"10px 20px",justifyContent:sideCollapsed?"center":"flex-start",background:active?C.accentLight:"transparent",borderLeft:active?`3px solid ${C.accent}`:"3px solid transparent",cursor:"pointer",transition:"all 0.15s",marginBottom:2}}>
                <span style={{fontSize:18,flexShrink:0}}>{n.icon}</span>
                {!sideCollapsed && <span style={{fontSize:13,fontWeight:active?700:500,color:active?C.accent:C.textMed,whiteSpace:"nowrap"}}>{n.label}</span>}
                {n.id==="ailog"&&!sideCollapsed&&<div style={{marginLeft:"auto",width:7,height:7,borderRadius:"50%",background:C.accent,flexShrink:0}}/>}
              </div>
            );
          })}
        </nav>

        <div style={{padding:"12px",borderTop:`1px solid ${C.border}`}}>
          <div onClick={()=>setSideCollapsed(c=>!c)} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"8px",borderRadius:10,cursor:"pointer",color:C.textMuted,fontSize:12,fontWeight:600,background:C.bg,border:`1px solid ${C.border}`}}>
            <span style={{transform:sideCollapsed?"rotate(180deg)":"none",transition:"transform 0.25s"}}>◀</span>
            {!sideCollapsed&&"Collapse"}
          </div>
        </div>

        {!sideCollapsed&&(
          <div style={{padding:"0 16px 16px"}}>
            <div style={{background:C.bg,borderRadius:12,padding:"10px 12px",border:`1px solid ${C.border}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:11,color:C.textMuted,fontWeight:600}}>Model 3 LR</span>
                <span style={{fontSize:12,fontWeight:700,color:statColor(socPct)}}>{socPct}%</span>
              </div>
              <Bar value={socPct} color={statColor(socPct)} height={5}/>
              <div style={{fontSize:10,color:C.textMuted,marginTop:5}}>{charging?`⚡ Charging · ${estMins}m left`:"● Idle"}</div>
            </div>
          </div>
        )}
      </div>

      {/* MAIN AREA */}
      <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0}}>

        {/* TOP BAR */}
        <div style={{height:60,background:C.surface,borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",position:"sticky",top:0,zIndex:100}}>
          <div>
            <div style={{fontSize:17,fontWeight:700}}>{NAV.find(n=>n.id===tab)?.label}{tab==="live"&&!driverMode&&<span style={{fontSize:12,fontWeight:600,color:C.amber,marginLeft:10}}>🏭 Operator View</span>}</div>
            <div style={{fontSize:11,color:C.textMuted}}>Monday, June 1, 2026</div>
          </div>
          <div style={{display:"flex",gap:10,alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"7px 14px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,minWidth:200}}>
              <span style={{color:C.textMuted,fontSize:14}}>🔍</span>
              <input placeholder="Search stations, routes..." style={{border:"none",background:"none",outline:"none",fontSize:12,color:C.text,width:"100%",fontFamily:"'DM Sans',sans-serif"}}/>
            </div>
            <div style={{position:"relative"}}>
              <div onClick={()=>setNotifOpen(o=>!o)} style={{width:38,height:38,borderRadius:10,background:C.bg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",position:"relative"}}>
                🔔
                {unread>0&&<div style={{position:"absolute",top:6,right:6,width:8,height:8,borderRadius:"50%",background:C.red,border:`2px solid ${C.white}`}}/>}
              </div>
              {notifOpen&&(
                <div style={{position:"absolute",right:0,top:46,width:360,background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,boxShadow:C.shadowLg,zIndex:300,animation:"slideIn 0.2s ease"}}>
                  <div style={{padding:"14px 16px",borderBottom:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontWeight:700,fontSize:13}}>Notifications</span>
                    <span onClick={()=>setNotifList(l=>l.map(n=>({...n,read:true})))} style={{fontSize:11,color:C.accent,cursor:"pointer"}}>Mark all read</span>
                  </div>
                  {notifList.map((n,i)=>(
                    <div key={i} onClick={()=>setNotifList(l=>l.map((x,j)=>j===i?{...x,read:true}:x))} style={{padding:"11px 16px",borderBottom:i<notifList.length-1?`1px solid ${C.border}`:"none",background:n.read?"none":n.color+"08",cursor:"pointer",display:"flex",gap:10,alignItems:"flex-start"}}>
                      <span style={{fontSize:18,marginTop:1}}>{n.icon}</span>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                          <AlertDot type={n.type}/>
                          <span style={{fontSize:10,color:C.textMuted}}>{n.time}</span>
                        </div>
                        <div style={{fontSize:12,fontWeight:n.read?400:600,color:C.text}}>{n.text}</div>
                      </div>
                      {!n.read&&<div style={{width:8,height:8,borderRadius:"50%",background:n.color,marginTop:5,flexShrink:0}}/>}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{width:38,height:38,borderRadius:10,background:`linear-gradient(135deg,${C.accent},${C.purple})`,display:"flex",alignItems:"center",justifyContent:"center",color:C.white,fontWeight:700,fontSize:14,cursor:"pointer"}}>AJ</div>
          </div>
        </div>

        {activeAlert&&<div style={{background:activeAlert.color+"15",borderBottom:`1px solid ${activeAlert.color}30`,padding:"10px 24px",fontSize:13,fontWeight:600,color:activeAlert.color}}>{activeAlert.msg}</div>}

        {/* PAGE CONTENT */}
        <div style={{flex:1,overflowY:"auto",padding:"24px"}}>

          {/* ════ LIVE SESSION ════ */}
          {tab==="live" && (
            driverMode ? (
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
                <Card style={{gridColumn:"1/2",gridRow:"1/3",padding:24}} accent={charging?C.green:null}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
                    <div>
                      <Pill label={charging?`● CHARGING ${powerKw}kW`:"● IDLE"} color={charging?C.green:C.textMuted}/>
                      <div style={{fontSize:16,fontWeight:700,marginTop:8}}>Tesla SC · Downtown Plaza</div>
                      <div style={{fontSize:12,color:C.textMuted,marginTop:2}}>Stall #7 · NACS · 250kW Max</div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:11,color:C.textMuted}}>Est. done</div>
                      <div style={{fontSize:22,fontWeight:800,color:C.green}}>{charging?`${estMins}m`:"—"}</div>
                    </div>
                  </div>
                  <div style={{display:"flex",justifyContent:"center",marginBottom:16}}>
                    <ChargeArc pct={soc} size={180} thick={14}/>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
                    {[
                      {label:"Power Now",   val:`${powerKw} kW`, color:C.accent},
                      {label:"Elapsed",     val:fmt(elapsed),    color:C.text},
                      {label:"Energy",      val:`${sessionKwh.toFixed(1)} kWh`,color:C.text},
                      {label:"Cost So Far", val:`$${costNow}`,   color:C.amber},
                      {label:"Miles Added", val:`+${milesAdded} mi`,color:C.green},
                      {label:"CO₂ Saved",   val:`${co2Saved} kg`,color:C.teal},
                    ].map(r=>(
                      <div key={r.label} style={{padding:"8px 10px",background:C.bg,borderRadius:10,border:`1px solid ${C.border}`}}>
                        <div style={{fontSize:11,color:C.textMuted}}>{r.label}</div>
                        <div style={{fontSize:14,fontWeight:700,color:r.color,marginTop:2}}>{r.val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{padding:"12px",background:C.bg,borderRadius:12,border:`1px solid ${C.border}`,marginBottom:14}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                      <span style={{fontSize:12,color:C.textMed,fontWeight:600}}>🎯 Charge Limit</span>
                      <span style={{fontSize:13,fontWeight:700,color:C.accent}}>{chargeLimit}%</span>
                    </div>
                    <input type="range" min={50} max={100} value={chargeLimit} onChange={e=>setChargeLimit(+e.target.value)} style={{width:"100%"}}/>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
                      <span style={{fontSize:10,color:C.textMuted}}>50% daily</span>
                      <span style={{fontSize:10,color:C.textMuted}}>100% road trip</span>
                    </div>
                  </div>
                  {!charging && idleCountdown!==null && idleCountdown>0 && <IdleFeeBanner seconds={idleCountdown}/>}
                  <button onClick={()=>{setCharging(c=>!c);if(!charging)setIdleCountdown(null);}} style={{width:"100%",padding:"12px",background:charging?C.redLight:C.greenLight,border:`1px solid ${charging?C.red+"40":C.green+"40"}`,borderRadius:12,color:charging?C.red:C.green,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginTop:14}}>
                    {charging?"⏹ Stop Charging":"▶ Resume Charging"}
                  </button>
                </Card>

                <Card style={{gridColumn:"2/4"}}>
                  <SL>Power Delivery Curve (kW)</SL>
                  <Spark data={powerCurve} color={C.accent} w={580} h={72} fill/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
                    <span style={{fontSize:10,color:C.textMuted}}>Session start</span>
                    <span style={{fontSize:11,fontWeight:700,color:C.accent}}>Peak: 190 kW</span>
                    <span style={{fontSize:10,color:C.textMuted}}>Now</span>
                  </div>
                </Card>

                <Card style={{gridColumn:"2/3"}}>
                  <SL>Smart Charging Controls</SL>
                  {[
                    {label:"Off-Peak Scheduling",    sub:"~38% avg savings",      state:smartSched, toggle:()=>setSmartSched(v=>!v), icon:"🕐"},
                    {label:"Demand Response",        sub:"Grid-aware charging",   state:demandResp, toggle:()=>setDemandResp(v=>!v), icon:"🔋"},
                    {label:"Battery Preconditioning",sub:"Pre-warm for DC fast",  state:precond,    toggle:()=>setPrecond(v=>!v),    icon:"🌡"},
                    {label:"Solar Sync",             sub:"Charge from solar first",state:solarSync, toggle:()=>setSolarSync(v=>!v),  icon:"☀️"},
                    {label:"V2G Export",             sub:"Sell back to grid at peak",state:v2gEnabled,toggle:()=>setV2gEnabled(v=>!v),icon:"♻️"},
                  ].map((s,i,arr)=>(
                    <div key={s.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}>
                      <div style={{display:"flex",gap:10,alignItems:"center"}}>
                        <span style={{fontSize:18}}>{s.icon}</span>
                        <div>
                          <div style={{fontSize:12,fontWeight:600}}>{s.label}</div>
                          <div style={{fontSize:11,color:C.textMuted}}>{s.sub}</div>
                        </div>
                      </div>
                      <Toggle on={s.state} onToggle={s.toggle}/>
                    </div>
                  ))}
                  <div style={{marginTop:14,padding:"12px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                      <span style={{fontSize:11,fontWeight:600,color:C.textMed}}>Schedule Start</span>
                      <span style={{fontSize:12,fontWeight:700,color:C.accent}}>{schedHour}:00 {schedHour<12?"AM":"PM"}</span>
                    </div>
                    <input type="range" min={0} max={23} value={schedHour} onChange={e=>setSchedHour(+e.target.value)} style={{width:"100%"}}/>
                    <div style={{marginTop:8,padding:"8px 10px",background:schedHour>=22||schedHour<=5?C.greenLight:schedHour<=9?C.accentLight:C.amberLight,borderRadius:9,fontSize:11,color:schedHour>=22||schedHour<=5?C.green:schedHour<=9?C.accent:C.amber,fontWeight:600,border:`1px solid ${schedHour>=22||schedHour<=5?C.green+"30":schedHour<=9?C.accent+"30":C.amber+"30"}`}}>
                      {scheduleReason()}
                    </div>
                  </div>
                  <div style={{marginTop:12,padding:"12px",background:C.purpleLight+"40",border:`1px solid ${C.purple}25`,borderRadius:12}}>
                    <div style={{fontSize:11,fontWeight:700,color:C.purple,marginBottom:8}}>🚗 Ready By (departure target)</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                      <div>
                        <div style={{fontSize:10,color:C.textMuted,marginBottom:4}}>Departure time</div>
                        <input type="time" value={deptTime} onChange={e=>setDeptTime(e.target.value)} style={{width:"100%",padding:"6px 8px",border:`1px solid ${C.border}`,borderRadius:8,fontSize:12,fontFamily:"'DM Sans',sans-serif",outline:"none",color:C.text,background:C.white}}/>
                      </div>
                      <div>
                        <div style={{fontSize:10,color:C.textMuted,marginBottom:4}}>Target charge %</div>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <input type="range" min={50} max={100} value={deptTarget} onChange={e=>setDeptTarget(+e.target.value)} style={{flex:1}}/>
                          <span style={{fontSize:12,fontWeight:700,color:C.purple,minWidth:32}}>{deptTarget}%</span>
                        </div>
                      </div>
                    </div>
                    <div style={{marginTop:8,fontSize:11,color:C.purple}}>AI will start charging at {deptTarget<=60?"11:02 PM":deptTarget<=80?"10:18 PM":"09:41 PM"} to reach {deptTarget}% by {deptTime}.</div>
                  </div>
                </Card>

                <Card style={{gridColumn:"3/4"}}>
                  <SL>Vehicle Health</SL>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    {[
                      {label:"Battery Temp",  val:"28°C",    icon:"🌡", color:C.green,  sub:"Optimal"},
                      {label:"Charger Temp",  val:"42°C",    icon:"⚡", color:C.amber,  sub:"Warm"},
                      {label:"Battery SoH",   val:"97%",     icon:"🔋", color:C.green,  sub:"Excellent"},
                      {label:"Cell Balance",  val:"±12mV",   icon:"⚖", color:C.accent, sub:"Good"},
                      {label:"Input Voltage", val:"800V",    icon:"🔌", color:C.text,   sub:"Nominal"},
                      {label:"Efficiency",    val:"94.1%",   icon:"📈", color:C.teal,   sub:"This session"},
                    ].map(v=>(
                      <div key={v.label} style={{background:C.bg,borderRadius:10,padding:"9px 11px",border:`1px solid ${C.border}`}}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                          <span style={{fontSize:16}}>{v.icon}</span>
                          <span style={{fontSize:11,fontWeight:700,color:v.color}}>{v.val}</span>
                        </div>
                        <div style={{fontSize:11,fontWeight:600,marginTop:4}}>{v.label}</div>
                        <div style={{fontSize:10,color:C.textMuted}}>{v.sub}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ) : (
              /* OPERATOR VIEW */
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div style={{background:C.amberLight,border:`1px solid ${C.amber}40`,borderRadius:14,padding:"12px 18px",display:"flex",gap:12,alignItems:"flex-start"}}>
                  <span style={{fontSize:24}}>🤖</span>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:C.amber}}>AI Forecast Alert — Peak demand window 5–9 PM today</div>
                    <div style={{fontSize:12,color:C.textMed,marginTop:2}}>Grid operator signal received. AI recommends shifting all bay charging to after 9 PM. Estimated savings: $4.80. Demand response credit: $0.18. <span style={{color:C.accent,fontWeight:600,cursor:"pointer"}}>Accept AI recommendation →</span></div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
                  {operatorBays.map((bay,i)=>{
                    const statusColor = bay.status==="charging"?C.green:bay.status==="complete"?C.accent:bay.status==="fault"?C.red:C.textMuted;
                    const sourceColor = bay.source==="solar"?C.amber:bay.source==="grid"?C.accent:C.green;
                    return (
                      <Card key={i} accent={statusColor} style={{padding:"18px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                          <div style={{fontSize:14,fontWeight:700}}>{bay.id}</div>
                          <Pill label={bay.status.toUpperCase()} color={statusColor} small/>
                        </div>
                        <div style={{fontSize:12,color:C.textMed,marginBottom:12}}>{bay.vehicle}</div>
                        {bay.status==="charging"&&<><ChargeArc pct={bay.soc} size={100} thick={9}/><div style={{fontSize:11,color:C.textMuted,marginTop:6,textAlign:"center"}}>{bay.power} kW · {bay.source&&<span style={{color:sourceColor,fontWeight:600}}>via {bay.source}</span>}</div></>}
                        {bay.status==="complete"&&<div style={{fontSize:28,textAlign:"center",margin:"12px 0"}}>✅</div>}
                        {bay.status==="fault"&&<div style={{fontSize:28,textAlign:"center",margin:"12px 0"}}>🔴</div>}
                        {bay.alert&&<div style={{marginTop:10,padding:"6px 10px",background:bay.status==="fault"?C.redLight:C.amberLight,border:`1px solid ${bay.status==="fault"?C.red+"40":C.amber+"40"}`,borderRadius:9,fontSize:11,fontWeight:600,color:bay.status==="fault"?C.red:C.amber}}>⚠ {bay.alert}</div>}
                      </Card>
                    );
                  })}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                  <Kpi icon="⚡" label="Active Sessions" value="2" color={C.green} sub="2 bays charging"/>
                  <Kpi icon="🔌" label="Total Power" value="148 kW" color={C.accent} sub="Bay 1+2 combined"/>
                  <Kpi icon="💰" label="Revenue Today" value="$38.40" color={C.amber} delta="+18%"/>
                  <Kpi icon="⚠️" label="Faults Active" value="1" color={C.red} sub="Bay 4 — cable"/>
                </div>
              </div>
            )
          )}

          {/* ════ FIND CHARGER ════ */}
          {tab==="find"&&(
            <div style={{display:"grid",gridTemplateColumns:"400px 1fr",gap:16,height:"calc(100vh - 120px)"}}>
              <div style={{display:"flex",flexDirection:"column",gap:12,overflowY:"auto"}}>
                <div style={{display:"flex",gap:8,alignItems:"center",padding:"10px 14px",background:C.surface,border:`1px solid ${C.border}`,borderRadius:12}}>
                  <span style={{fontSize:16}}>📍</span>
                  <input placeholder="Search location..." style={{border:"none",background:"none",outline:"none",fontSize:13,flex:1,fontFamily:"'DM Sans',sans-serif"}}/>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {filters.map((f,i)=>(
                    <div key={f} onClick={()=>setFilterIdx(i)} style={{padding:"5px 12px",borderRadius:99,cursor:"pointer",background:filterIdx===i?C.accent:C.surface,border:`1px solid ${filterIdx===i?C.accent:C.border}`,fontSize:11,fontWeight:600,color:filterIdx===i?C.white:C.textMed}}>{f}</div>
                  ))}
                </div>
                {filteredStations.map((s,i)=>(
                  <Card key={i} hover onClick={()=>setExpandStation(expandStation===i?null:i)}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4,flexWrap:"wrap"}}>
                          <span style={{fontSize:14,fontWeight:700}}>{s.name}</span>
                          {s.plugAndCharge&&<Pill label="P&C" color={C.purple} small/>}
                          <Pill label={s.status==="open"?"OPEN":"FULL"} color={s.status==="open"?C.green:C.red} small/>
                        </div>
                        <div style={{fontSize:11,color:C.textMuted}}>{s.addr} · {s.dist} mi away</div>
                        <div style={{display:"flex",gap:6,marginTop:6,flexWrap:"wrap",alignItems:"center"}}>
                          <Pill label={`${s.kw}kW`} color={C.accent} small/>
                          <Pill label={s.connector} color={C.textMuted} small/>
                          <Pill label={s.price} color={C.amber} small/>
                          <span style={{fontSize:11,color:C.amber}}>{"★".repeat(Math.floor(s.rating))} {s.rating}</span>
                        </div>
                        <div style={{display:"flex",gap:6,marginTop:6}}>{s.amenities.map((a,j)=><span key={j} style={{fontSize:12}}>{a}</span>)}</div>
                      </div>
                      <div style={{textAlign:"center",marginLeft:10}}>
                        <div style={{fontSize:20,fontWeight:800,color:s.available>0?C.green:C.red}}>{s.available}/{s.total}</div>
                        <div style={{fontSize:9,color:C.textMuted}}>avail</div>
                        {s.wait>0&&<div style={{fontSize:10,color:C.amber,marginTop:2}}>~{s.wait}m wait</div>}
                      </div>
                    </div>
                    {expandStation===i&&(
                      <div style={{marginTop:12,paddingTop:12,borderTop:`1px solid ${C.border}`}}>
                        <div style={{fontSize:11,color:C.textMuted,marginBottom:8}}>💬 Latest community check-in · {s.checkins} total</div>
                        <div style={{fontSize:12,color:C.textMed,fontStyle:"italic",background:C.bg,borderRadius:9,padding:"8px 10px",border:`1px solid ${C.border}`,marginBottom:12}}>{s.recentNote}</div>
                        <div style={{display:"flex",gap:8}}>
                          {reserveStation===i&&reserveCountdown!==null?(
                            <div style={{flex:2,padding:"8px 12px",background:C.greenLight,border:`1px solid ${C.green+"40"}`,borderRadius:9,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                              <span style={{fontSize:12,fontWeight:700,color:C.green}}>Reserved — expires {Math.floor(reserveCountdown/60)}:{String(reserveCountdown%60).padStart(2,"0")}</span>
                              <span onClick={e=>{e.stopPropagation();setReserveStation(null);setReserveCountdown(null);}} style={{fontSize:11,color:C.red,cursor:"pointer",fontWeight:600}}>Cancel</span>
                            </div>
                          ):(
                            <button onClick={e=>{e.stopPropagation();setReserveStation(i);setReserveCountdown(480);setActiveAlert({msg:`✅ Stall reserved at ${s.name} — expires in 8 min`,color:C.green});setTimeout(()=>setActiveAlert(null),3500);}} style={{flex:2,padding:"8px",background:C.accent,border:"none",borderRadius:9,color:C.white,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reserve Stall</button>
                          )}
                          <button style={{flex:1,padding:"8px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:9,color:C.textMed,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>🧭 Navigate</button>
                          <button style={{flex:1,padding:"8px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:9,color:C.textMed,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Report Issue</button>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
              <Card style={{position:"relative",overflow:"hidden",padding:0,borderRadius:16}}>
                <div style={{width:"100%",height:"100%",minHeight:400,background:"linear-gradient(135deg,#E8F4F8 0%,#D4ECD4 40%,#F0F0E8 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:12}}>
                  {nearby.map((s,i)=>(
                    <div key={i} style={{position:"absolute",top:`${20+i*15+(i%2===0?5:-5)}%`,left:`${15+i*16}%`}}>
                      <div style={{background:s.status==="open"?C.green:C.red,color:C.white,borderRadius:99,padding:"4px 10px",fontSize:11,fontWeight:700,whiteSpace:"nowrap",boxShadow:C.shadowMd,cursor:"pointer",border:"2px solid white",display:"flex",gap:4,alignItems:"center"}}>⚡ {s.kw}kW</div>
                      <div style={{width:2,height:10,background:s.status==="open"?C.green:C.red,margin:"0 auto"}}/>
                      <div style={{width:6,height:6,borderRadius:"50%",background:s.status==="open"?C.green:C.red,margin:"0 auto"}}/>
                    </div>
                  ))}
                  <div style={{position:"absolute",top:"60%",left:"35%",zIndex:10}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:C.accent,border:"3px solid white",boxShadow:`0 0 0 6px ${C.accentLight}`,margin:"0 auto"}}/>
                  </div>
                  <div style={{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"white",borderRadius:99,padding:"8px 16px",fontSize:12,color:C.textMuted,boxShadow:C.shadow,fontWeight:500}}>🗺 Interactive map — {filteredStations.length} stations shown</div>
                </div>
              </Card>
            </div>
          )}

          {/* ════ TRIP PLANNER ════ */}
          {tab==="trip"&&(
            <div style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:16}}>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Card accent={C.accent}>
                  <SL>AI-Powered Route Planner</SL>
                  <div style={{fontSize:11,color:C.textMuted,marginBottom:14}}>Optimizes stops using battery curve, elevation, weather & traffic</div>
                  {[{label:"🅰 From",val:tripFrom,set:setTripFrom,ph:"Starting point"},{label:"🅱 To",val:tripTo,set:setTripTo,ph:"Destination"}].map(f=>(
                    <div key={f.label} style={{marginBottom:10}}>
                      <div style={{fontSize:10,color:C.textMuted,marginBottom:4,fontWeight:600}}>{f.label}</div>
                      <input value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} style={{width:"100%",padding:"9px 12px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none"}}/>
                    </div>
                  ))}
                  <div style={{display:"flex",gap:8,marginBottom:14}}>
                    {["Fastest","Fewest Stops","Cheapest"].map((opt,i)=>(
                      <div key={opt} style={{flex:1,padding:"7px 4px",textAlign:"center",background:i===0?C.accentLight:C.bg,border:`1px solid ${i===0?C.accent:C.border}`,borderRadius:9,fontSize:11,fontWeight:600,cursor:"pointer",color:i===0?C.accent:C.textMed}}>{opt}</div>
                    ))}
                  </div>
                  <button onClick={()=>setShowTrip(true)} style={{width:"100%",padding:"12px",background:C.accent,border:"none",borderRadius:12,color:C.white,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>✨ Plan Route</button>
                </Card>
                <Card>
                  <SL right="View All">Saved Trips</SL>
                  {[{from:"New York, NY",to:"Boston, MA",dist:"215 mi",stops:1,time:"3h 42m"},{from:"Los Angeles, CA",to:"San Francisco, CA",dist:"381 mi",stops:2,time:"6h 15m"},{from:"Chicago, IL",to:"Detroit, MI",dist:"280 mi",stops:1,time:"4h 20m"}].map((t,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<2?`1px solid ${C.border}`:"none"}}>
                      <div><div style={{fontSize:12,fontWeight:600}}>{t.from} → {t.to}</div><div style={{fontSize:11,color:C.textMuted,marginTop:2}}>{t.dist} · {t.stops} stop · {t.time}</div></div>
                      <span style={{fontSize:11,color:C.accent,fontWeight:600,cursor:"pointer"}}>Use →</span>
                    </div>
                  ))}
                </Card>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {showTrip&&(
                  <Card>
                    <SL right="New York → Boston">Route Plan</SL>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:16}}>
                      {[{label:"Distance",val:"215 mi",icon:"📏"},{label:"Total Time",val:"3h 42m",icon:"⏱"},{label:"Charge Stops",val:"1 stop",icon:"⚡"},{label:"Trip Cost",val:"$12.40",icon:"💳"}].map(r=>(
                        <div key={r.label} style={{background:C.bg,borderRadius:12,padding:"12px",textAlign:"center",border:`1px solid ${C.border}`}}>
                          <div style={{fontSize:18}}>{r.icon}</div><div style={{fontSize:16,fontWeight:700,marginTop:6}}>{r.val}</div><div style={{fontSize:10,color:C.textMuted,marginTop:2}}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                    {[{label:"New York, NY",sub:"Depart · 90% SoC",icon:"🏙",time:"9:00 AM",soc:90},{label:"Milford, CT — Tesla SC",sub:"Charge 22→68% · ~22 min · $7.20",icon:"⚡",time:"10:28 AM",soc:22,stop:true},{label:"Boston, MA",sub:"Arrive · 68% SoC",icon:"🏛",time:"12:42 PM",soc:68}].map((stop,i,arr)=>(
                      <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                          <div style={{width:36,height:36,borderRadius:"50%",background:stop.stop?C.amberLight:C.accentLight,border:`2px solid ${stop.stop?C.amber:C.accent}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{stop.icon}</div>
                          {i<arr.length-1&&<div style={{width:2,height:28,background:C.border,margin:"4px 0"}}/>}
                        </div>
                        <div style={{flex:1,paddingTop:7,paddingBottom:8}}>
                          <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:13,fontWeight:600}}>{stop.label}</span><span style={{fontSize:11,color:C.textMuted}}>{stop.time}</span></div>
                          <div style={{fontSize:11,color:C.textMuted,marginTop:2}}>{stop.sub}</div>
                          <div style={{marginTop:6,maxWidth:200}}><Bar value={stop.soc} color={statColor(stop.soc)} height={4}/></div>
                        </div>
                      </div>
                    ))}
                    <div style={{marginTop:14,display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                      {[{icon:"🌤",label:"Weather",val:"72°F Sunny"},{icon:"⛰",label:"Elevation",val:"+340 ft net"},{icon:"💨",label:"Headwind",val:"12 mph"},{icon:"🚦",label:"Traffic",val:"Moderate I-95"}].map(f=>(
                        <div key={f.label} style={{display:"flex",gap:8,alignItems:"center",padding:"8px 10px",background:C.bg,borderRadius:10,border:`1px solid ${C.border}`}}>
                          <span style={{fontSize:16}}>{f.icon}</span><div><div style={{fontSize:10,color:C.textMuted}}>{f.label}</div><div style={{fontSize:12,fontWeight:600}}>{f.val}</div></div>
                        </div>
                      ))}
                    </div>
                    <button style={{marginTop:14,width:"100%",padding:"11px",background:C.accentLight,border:`1px solid ${C.accent+"40"}`,borderRadius:12,color:C.accent,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>🧭 Start Navigation</button>
                  </Card>
                )}
                <Card>
                  <SL>Route Charging Cost Breakdown</SL>
                  <div style={{display:"flex",gap:10,alignItems:"flex-end",height:80,marginBottom:8}}>
                    {["Standard","Off-Peak","Solar","V2G Credit"].map((label,i)=>{
                      const vals=[12.40,7.20,4.80,3.10], colors=[C.accent,C.green,C.amber,C.purple];
                      return <div key={label} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}><div style={{fontSize:10,fontWeight:700,color:colors[i]}}>{"$"+vals[i]}</div><div style={{width:"100%",height:(vals[i]/12.40)*60,background:colors[i]+"25",border:`1px solid ${colors[i]+"50"}`,borderRadius:"6px 6px 0 0"}}/><div style={{fontSize:9,color:C.textMuted,textAlign:"center"}}>{label}</div></div>;
                    })}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* ════ ANALYTICS ════ */}
          {tab==="stats"&&(
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                {["week","month","year"].map(p=>(
                  <div key={p} onClick={()=>setStatPeriod(p)} style={{padding:"7px 18px",borderRadius:99,cursor:"pointer",background:statPeriod===p?C.accent:C.surface,border:`1px solid ${statPeriod===p?C.accent:C.border}`,fontSize:12,fontWeight:600,textTransform:"capitalize",color:statPeriod===p?C.white:C.textMed,transition:"all 0.15s"}}>{p}</div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}>
                <Kpi icon="⚡" label="Sessions" value={statPeriod==="week"?"7":statPeriod==="month"?"28":"134"} color={C.accent} delta="+12%" sub="vs last period"/>
                <Kpi icon="🔋" label="Energy (kWh)" value={statPeriod==="week"?"277":statPeriod==="month"?"1,104":"2,841"} color={C.green} delta="+8%"/>
                <Kpi icon="💳" label="Total Cost" value={statPeriod==="week"?"$48":statPeriod==="month"?"$189":"$612"} color={C.amber} delta="-5%"/>
                <Kpi icon="🌱" label="CO₂ Saved" value={statPeriod==="week"?"107kg":statPeriod==="month"?"426kg":"1.1t"} color={C.teal} delta="+15%"/>
                <Kpi icon="💰" label="vs Gas Savings" value={statPeriod==="week"?"$68":statPeriod==="month"?"$271":"$987"} color={C.green} delta="+11%"/>
              </div>
              <Card accent={C.purple}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontSize:20}}>🤖</span><span style={{fontSize:14,fontWeight:700}}>AI Smart Charging Savings</span></div>
                    <div style={{fontSize:12,color:C.textMuted}}>What you paid vs what unmanaged charging would have cost</div>
                  </div>
                  <div style={{display:"flex",gap:20,textAlign:"center"}}>
                    <div><div style={{fontSize:22,fontWeight:800,color:C.green}}>{statPeriod==="week"?"$38":statPeriod==="month"?"$152":"$481"}</div><div style={{fontSize:11,color:C.textMuted}}>AI saved you</div></div>
                    <div style={{width:1,background:C.border}}/>
                    <div><div style={{fontSize:22,fontWeight:800,color:C.textMuted}}>{statPeriod==="week"?"$86":statPeriod==="month"?"$341":"$1,093"}</div><div style={{fontSize:11,color:C.textMuted}}>unmanaged would cost</div></div>
                    <div style={{width:1,background:C.border}}/>
                    <div><div style={{fontSize:22,fontWeight:800,color:C.purple}}>{statPeriod==="week"?"44%":statPeriod==="month"?"45%":"44%"}</div><div style={{fontSize:11,color:C.textMuted}}>reduction</div></div>
                  </div>
                </div>
              </Card>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14}}>
                <Card>
                  <SL right="277 kWh total">Energy by Day</SL>
                  <div style={{display:"flex",gap:8,alignItems:"flex-end",height:100}}>
                    {weekEnergy.map((v,i)=>{const today=i===6;return(
                      <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                        <div style={{fontSize:10,color:today?C.accent:C.textMuted,fontWeight:today?700:400}}>{v}</div>
                        <div style={{width:"100%",height:(v/66)*72,background:today?C.accent:C.accentLight,border:`1px solid ${today?C.accent:C.border}`,borderRadius:"6px 6px 0 0",transition:"height 0.5s"}}/>
                        <div style={{fontSize:10,color:today?C.accent:C.textMuted,fontWeight:today?700:400}}>{weekLabels[i]}</div>
                      </div>
                    );})}
                  </div>
                </Card>
                <Card>
                  <SL>Where You Charge</SL>
                  {[{label:"Home",pct:52,sessions:70,color:C.accent},{label:"Workplace",pct:22,sessions:29,color:C.purple},{label:"Public DC Fast",pct:18,sessions:24,color:C.green},{label:"Public Level 2",pct:8,sessions:11,color:C.amber}].map(b=>(
                    <div key={b.label} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:12,fontWeight:600}}>{b.label}</span><span style={{fontSize:11,color:b.color,fontWeight:700}}>{b.pct}%</span></div>
                      <Bar value={b.pct} color={b.color}/>
                      <div style={{fontSize:10,color:C.textMuted,marginTop:2}}>{b.sessions} sessions</div>
                    </div>
                  ))}
                </Card>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                <Card>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><SL>Monthly Cost Trend</SL><Spark data={monthCost} color={C.amber} w={80} h={28}/></div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                    {[{label:"Avg/Session",val:"$8.40"},{label:"Cheapest",val:"$2.10"},{label:"vs Gas",val:"-$312"}].map(m=>(
                      <div key={m.label} style={{background:C.bg,borderRadius:10,padding:"10px",textAlign:"center",border:`1px solid ${C.border}`}}>
                        <div style={{fontSize:16,fontWeight:800,color:C.amber}}>{m.val}</div>
                        <div style={{fontSize:10,color:C.textMuted,marginTop:2}}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card>
                  <SL right="View All">Recent Sessions</SL>
                  {sessions.slice(0,4).map((s,i)=>(
                    <div key={i} style={{padding:"9px 0",borderBottom:i<3?`1px solid ${C.border}`:"none"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex",gap:10,alignItems:"center"}}>
                          <div style={{width:32,height:32,borderRadius:9,background:C.accentLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{s.icon}</div>
                          <div>
                            <div style={{fontSize:12,fontWeight:600}}>{s.name}</div>
                            <div style={{fontSize:10,color:C.textMuted}}>{s.date} · {s.dur} · {s.type}</div>
                          </div>
                        </div>
                        <div style={{textAlign:"right"}}>
                          <div style={{fontSize:14,fontWeight:700,color:C.accent}}>${s.cost.toFixed(2)}</div>
                          <div style={{fontSize:10,color:C.textMuted}}>{s.kwh} kWh</div>
                        </div>
                      </div>
                      <EnergySourceBar solar={s.solar} bess={s.bess} grid={s.grid}/>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          )}

          {/* ════ ENERGY HUB ════ */}
          {tab==="energy"&&(
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                <Kpi icon="☀️" label="Solar Today" value="18.4 kWh" color={C.amber} delta="+23%" sub="7.2 kW current"/>
                <Kpi icon="🔋" label="Home Battery" value="82%" color={C.green} sub="Powerwall · 9.8 kWh"/>
                <Kpi icon="🏠" label="Home Usage" value="3.2 kW" color={C.accent} sub="4.1 kWh today"/>
                <Kpi icon="⚡" label="Grid Import" value="$0.08/kWh" color={C.teal} sub="Off-peak now"/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14}}>
                <Card>
                  <SL right="Today's tariff">Electricity Price — 24hr</SL>
                  <Spark data={gridPriceData} color={C.amber} w={600} h={72} fill/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
                    <span style={{fontSize:10,color:C.textMuted}}>12am</span>
                    <span style={{fontSize:10,fontWeight:700,color:C.red}}>⚠ Peak 5–9pm · $0.28</span>
                    <span style={{fontSize:10,color:C.textMuted}}>11pm</span>
                  </div>
                  <div style={{marginTop:14}}>
                    <SL>Rate Schedule</SL>
                    {energyTariffs.map((t,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 10px",borderRadius:9,marginBottom:4,background:t.color===C.red?C.redLight:t.color===C.amber?C.amberLight:C.greenLight,border:`1px solid ${t.color+"25"}`}}>
                        <span style={{fontSize:12,fontWeight:600,color:t.color}}>{t.label}</span>
                        <span style={{fontSize:12,color:C.textMed}}>{t.hour}</span>
                        <span style={{fontSize:12,fontWeight:700,color:t.color}}>{t.rate}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                <div style={{display:"flex",flexDirection:"column",gap:12}}>
                  <Card>
                    <SL>Live Energy Flow</SL>
                    {[{icon:"☀️",from:"Solar",to:"Car",kw:"3.2 kW",color:C.amber,active:solarSync},{icon:"🔋",from:"Powerwall",to:"Home",kw:"1.8 kW",color:C.green,active:true},{icon:"🔌",from:"Grid",to:"Powerwall",kw:"0.5 kW",color:C.accent,active:true},{icon:"♻️",from:"Car",to:"Grid",kw:"2.1 kW",color:C.purple,active:v2gEnabled}].map((f,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",background:f.active?f.color+"10":C.bg,borderRadius:10,border:`1px solid ${f.active?f.color+"30":C.border}`,marginBottom:6}}>
                        <span style={{fontSize:16}}>{f.icon}</span>
                        <div style={{flex:1,padding:"0 10px"}}><div style={{fontSize:11,fontWeight:600,color:f.active?f.color:C.textMuted}}>{f.from} → {f.to}</div></div>
                        <div style={{textAlign:"right"}}><div style={{fontSize:12,fontWeight:700,color:f.active?f.color:C.textMuted}}>{f.kw}</div><Pill label={f.active?"ACTIVE":"IDLE"} color={f.active?f.color:C.textMuted} small/></div>
                      </div>
                    ))}
                  </Card>
                  <Card>
                    <SL>Schedule Charging</SL>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                      <span style={{fontSize:12,fontWeight:600}}>Start Time</span>
                      <span style={{fontSize:13,fontWeight:700,color:C.accent}}>{schedHour}:00 {schedHour<12?"AM":"PM"}</span>
                    </div>
                    <input type="range" min={0} max={23} value={schedHour} onChange={e=>setSchedHour(+e.target.value)} style={{width:"100%"}}/>
                    <div style={{marginTop:8,padding:"8px 10px",background:schedHour>=22||schedHour<=5?C.greenLight:C.amberLight,borderRadius:9,fontSize:11,color:schedHour>=22||schedHour<=5?C.green:C.amber,fontWeight:600,border:`1px solid ${schedHour>=22||schedHour<=5?C.green+"30":C.amber+"30"}`}}>
                      {scheduleReason()}
                    </div>
                    <button style={{width:"100%",padding:"10px",background:C.accent,border:"none",borderRadius:10,color:C.white,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginTop:10}}>Set Schedule</button>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* ════ V2G / EXPORT ════ */}
          {tab==="v2g"&&(
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                <Kpi icon="💰" label="V2G Earnings Today" value="$3.40" color={C.purple} delta="+18%" sub="2.1 kWh exported"/>
                <Kpi icon="📅" label="This Month" value="$42.80" color={C.green} delta="+31%" sub="68.4 kWh exported"/>
                <Kpi icon="🌐" label="Grid Services" value="Active" color={C.teal} sub="Frequency reg."/>
                <Kpi icon="🔋" label="Available V2G" value="14 kWh" color={C.accent} sub="Battery reserve: 30%"/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14}}>
                <Card>
                  <SL right="Last 12 hours">V2G Export Earnings</SL>
                  <Spark data={v2gEarnings} color={C.purple} w={580} h={72} fill/>
                  <div style={{display:"flex",justifyContent:"space-between",marginTop:6}}>
                    <span style={{fontSize:10,color:C.textMuted}}>12am</span>
                    <span style={{fontSize:11,fontWeight:700,color:C.purple}}>Peak export 4–6am · $2.40</span>
                    <span style={{fontSize:10,color:C.textMuted}}>12pm</span>
                  </div>
                </Card>
                <Card>
                  <SL>V2G Settings</SL>
                  <div style={{marginBottom:14}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:12,fontWeight:600}}>Battery Reserve Limit</span><span style={{fontSize:13,fontWeight:700,color:C.purple}}>{v2gLimit}%</span></div>
                    <input type="range" min={10} max={80} value={v2gLimit} onChange={e=>setV2gLimit(+e.target.value)} style={{width:"100%"}}/>
                    <div style={{fontSize:11,color:C.textMuted,marginTop:4}}>V2G will never discharge below this level</div>
                  </div>
                  {[{label:"V2G Export",state:v2gEnabled,toggle:()=>setV2gEnabled(v=>!v),icon:"♻️",sub:"Sell back to grid"},{label:"Demand Response",state:demandResp,toggle:()=>setDemandResp(v=>!v),icon:"⚡",sub:"Auto-respond to grid signals"},{label:"Frequency Regulation",state:true,toggle:()=>{},icon:"📡",sub:"Ancillary services"}].map((s,i,arr)=>(
                    <div key={s.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}>
                      <div style={{display:"flex",gap:8}}><span style={{fontSize:16}}>{s.icon}</span><div><div style={{fontSize:12,fontWeight:600}}>{s.label}</div><div style={{fontSize:10,color:C.textMuted}}>{s.sub}</div></div></div>
                      <Toggle on={s.state} onToggle={s.toggle}/>
                    </div>
                  ))}
                </Card>
              </div>
              <Card>
                <SL right="Last 30 days">V2G Revenue Breakdown</SL>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                  {[{label:"Peak Shaving",val:"$18.40",pct:43,color:C.purple,icon:"⚡"},{label:"Freq. Regulation",val:"$12.20",pct:29,color:C.accent,icon:"📡"},{label:"Demand Response",val:"$8.80",pct:21,color:C.teal,icon:"🔋"},{label:"Spot Market",val:"$3.40",pct:8,color:C.amber,icon:"📈"}].map(b=>(
                    <div key={b.label} style={{padding:"14px",background:b.color+"08",border:`1px solid ${b.color+"25"}`,borderRadius:12}}>
                      <div style={{fontSize:22}}>{b.icon}</div>
                      <div style={{fontSize:18,fontWeight:800,color:b.color,marginTop:8}}>{b.val}</div>
                      <div style={{fontSize:12,color:C.textMed,marginTop:2}}>{b.label}</div>
                      <div style={{marginTop:8}}><Bar value={b.pct} color={b.color} height={4}/><div style={{fontSize:10,color:C.textMuted,marginTop:3}}>{b.pct}% of earnings</div></div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* ════ AI LOG ════ */}
          {tab==="ailog"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:16}}>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Card>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
                    <div>
                      <div style={{fontSize:16,fontWeight:700}}>AI Decision Log</div>
                      <div style={{fontSize:12,color:C.textMuted,marginTop:2}}>Every action the AI has taken — with full reasoning. No black box.</div>
                    </div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      {["all","savings","schedule","grid","export","fault"].map(f=>(
                        <div key={f} onClick={()=>setAiLogFilter(f)} style={{padding:"4px 12px",borderRadius:99,cursor:"pointer",background:aiLogFilter===f?C.accent:C.bg,border:`1px solid ${aiLogFilter===f?C.accent:C.border}`,fontSize:11,fontWeight:600,color:aiLogFilter===f?C.white:C.textMed,textTransform:"capitalize"}}>{f}</div>
                      ))}
                    </div>
                  </div>
                  {aiLogFiltered.map((e,i)=>(
                    <AiLogEntry key={i} time={e.time} action={e.action} reason={e.reason} type={e.type}/>
                  ))}
                  {aiLogFiltered.length===0&&<div style={{textAlign:"center",padding:"24px",color:C.textMuted,fontSize:13}}>No log entries for this filter.</div>}
                </Card>
              </div>

              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Card accent={C.accent}>
                  <SL>AI Optimisation Goal</SL>
                  <div style={{fontSize:11,color:C.textMuted,marginBottom:12}}>What should the AI prioritise when making charging decisions?</div>
                  {[{id:"cost",icon:"💰",label:"Minimise Cost",sub:"Off-peak, demand response, V2G"},{id:"green",icon:"🌱",label:"Maximise Green Energy",sub:"Solar first, avoid grid peak"},{id:"battery",icon:"🔋",label:"Protect Battery Life",sub:"80% cap, slow charge, no heat"}].map(g=>(
                    <div key={g.id} onClick={()=>setAiGoal(g.id)} style={{display:"flex",gap:12,padding:"12px",borderRadius:12,cursor:"pointer",border:`1.5px solid ${aiGoal===g.id?C.accent:C.border}`,background:aiGoal===g.id?C.accentLight:"none",marginBottom:8,transition:"all 0.15s"}}>
                      <span style={{fontSize:22}}>{g.icon}</span>
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:700,color:aiGoal===g.id?C.accent:C.text}}>{g.label}</div>
                        <div style={{fontSize:11,color:C.textMuted,marginTop:2}}>{g.sub}</div>
                      </div>
                      {aiGoal===g.id&&<div style={{width:18,height:18,borderRadius:"50%",background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:C.white,flexShrink:0,marginTop:2}}>✓</div>}
                    </div>
                  ))}
                  <div style={{padding:"10px 12px",background:C.greenLight,border:`1px solid ${C.green+"30"}`,borderRadius:10,fontSize:11,color:C.green,fontWeight:600}}>
                    Active: {goalDesc[aiGoal]}
                  </div>
                </Card>

                <Card>
                  <SL>AI Performance This Month</SL>
                  {[{label:"Decisions Made",val:"247",icon:"🤖"},{label:"Cost Saved",val:"$152",icon:"💰",color:C.green},{label:"CO₂ Avoided",val:"58 kg",icon:"🌱",color:C.teal},{label:"Grid Signals Acted On",val:"12",icon:"⚡",color:C.amber},{label:"Faults Detected Early",val:"2",icon:"⚠️",color:C.red}].map((m,i,arr)=>(
                    <div key={m.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none"}}>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}><span style={{fontSize:16}}>{m.icon}</span><span style={{fontSize:12,color:C.textMed}}>{m.label}</span></div>
                      <span style={{fontSize:14,fontWeight:700,color:m.color||C.text}}>{m.val}</span>
                    </div>
                  ))}
                </Card>

                <Card>
                  <SL>Static Safety Limits</SL>
                  <div style={{fontSize:11,color:C.textMuted,marginBottom:10}}>These limits are locked — the AI cannot override them regardless of goal.</div>
                  {[{label:"Max charge voltage",val:"410 V",icon:"🔌"},{label:"Max battery temp",val:"45°C",icon:"🌡"},{label:"Min reserve (V2G)",val:"20%",icon:"🔋"},{label:"Max session power",val:"250 kW",icon:"⚡"}].map((l,i,arr)=>(
                    <div key={l.label} style={{display:"flex",justifyContent:"space-between",padding:"8px 10px",background:C.amberLight,border:`1px solid ${C.amber+"30"}`,borderRadius:9,marginBottom:i<arr.length-1?6:0}}>
                      <span style={{fontSize:12,color:C.textMed,display:"flex",gap:6,alignItems:"center"}}><span>{l.icon}</span>{l.label}</span>
                      <span style={{fontSize:12,fontWeight:700,color:C.amber}}>{l.val} 🔒</span>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          )}

          {/* ════ FLEET ════ */}
          {tab==="fleet"&&(
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
                <Kpi icon="🚗" label="Total Vehicles" value="4" color={C.accent} sub="3 active · 1 idle"/>
                <Kpi icon="⚡" label="Currently Charging" value="1" color={C.green} sub="At depot A"/>
                <Kpi icon="🔋" label="Fleet Avg SoC" value="59%" color={C.amber} sub="Across all vehicles"/>
                <Kpi icon="💰" label="Fleet Energy Cost" value="$124/mo" color={C.teal} delta="-12%" sub="vs. last month"/>
              </div>
              <Card>
                <SL right="Manage Fleet">Fleet Vehicles</SL>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
                  {fleetVehicles.map((v,i)=>(
                    <div key={i} style={{padding:"14px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                        <div style={{display:"flex",gap:10,alignItems:"center"}}>
                          <span style={{fontSize:24}}>🚗</span>
                          <div><div style={{fontSize:13,fontWeight:700}}>{v.name}</div><div style={{fontSize:11,color:C.textMuted}}>{v.plate} · Driver: {v.driver}</div></div>
                        </div>
                        <Pill label={v.status.toUpperCase()} small color={v.status==="charging"?C.green:v.status==="driving"?C.accent:v.status==="ready"?C.teal:C.amber}/>
                      </div>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                        <span style={{fontSize:12,color:C.textMuted}}>SoC: <strong style={{color:statColor(v.soc)}}>{v.soc}%</strong></span>
                        <span style={{fontSize:12,color:C.textMuted}}>📍 {v.location}</span>
                      </div>
                      <Bar value={v.soc} color={statColor(v.soc)} height={6}/>
                    </div>
                  ))}
                </div>
              </Card>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                <Card>
                  <SL>Fleet Charging Schedule</SL>
                  {fleetVehicles.map((v,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:i<fleetVehicles.length-1?`1px solid ${C.border}`:"none"}}>
                      <div style={{fontSize:12,fontWeight:600}}>{v.id} · {v.name.split(" ").slice(-2).join(" ")}</div>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}>
                        <div style={{fontSize:11,color:C.textMuted}}>{v.status==="charging"?"Now → 100%":"Sched. 11pm"}</div>
                        <Pill label={v.soc+"%"} color={statColor(v.soc)} small/>
                      </div>
                    </div>
                  ))}
                </Card>
                <Card>
                  <SL>Fleet Health Alerts</SL>
                  {[{icon:"⚠️",text:"V-004 Rivian R1T — low SoC (22%), needs charge soon",color:C.red},{icon:"🔧",text:"V-002 Bolt EUV — battery check recommended at 50k mi",color:C.amber},{icon:"✅",text:"V-001 Model 3 — charging complete at 100%",color:C.green},{icon:"📅",text:"V-003 F-150 — scheduled maintenance Jun 15",color:C.accent}].map((a,i)=>(
                    <div key={i} style={{display:"flex",gap:10,padding:"9px 0",borderBottom:i<3?`1px solid ${C.border}`:"none",alignItems:"flex-start"}}>
                      <span style={{fontSize:16}}>{a.icon}</span>
                      <div style={{fontSize:12,color:C.textMed,flex:1,lineHeight:1.5}}>{a.text}</div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          )}

          {/* ════ PROFILE ════ */}
          {tab==="profile"&&(
            <div style={{display:"grid",gridTemplateColumns:"340px 1fr",gap:16}}>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Card style={{textAlign:"center",padding:"28px 20px",background:`linear-gradient(145deg,${C.accentLight},${C.surface})`}}>
                  <div style={{position:"relative",display:"inline-block",marginBottom:14}}>
                    <div style={{width:72,height:72,borderRadius:"50%",background:`linear-gradient(135deg,${C.accent},${C.purple})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,margin:"0 auto",color:C.white,fontWeight:800}}>AJ</div>
                    <div style={{position:"absolute",bottom:0,right:-2,background:C.green,borderRadius:"50%",width:18,height:18,border:"3px solid white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:C.white}}>✓</div>
                  </div>
                  <div style={{fontSize:20,fontWeight:800}}>Alex Johnson</div>
                  <div style={{fontSize:12,color:C.textMuted,marginTop:2}}>alex.johnson@email.com</div>
                  <div style={{marginTop:10,display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap"}}>
                    <Pill label="💎 PLATINUM" color={C.purple}/>
                    <Pill label="134 sessions" color={C.textMuted}/>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:16}}>
                    {[{val:"134",label:"Sessions"},{val:"1.1t",label:"CO₂ Saved"},{val:"2,841",label:"kWh Total"}].map(m=>(
                      <div key={m.label} style={{background:C.bg,borderRadius:10,padding:"10px 0",border:`1px solid ${C.border}`}}>
                        <div style={{fontSize:18,fontWeight:800,color:C.accent}}>{m.val}</div>
                        <div style={{fontSize:10,color:C.textMuted}}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card>
                  <SL>My Vehicle</SL>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                    <div style={{display:"flex",gap:10,alignItems:"center"}}><span style={{fontSize:32}}>🚗</span><div><div style={{fontSize:13,fontWeight:700}}>Tesla Model 3 LR</div><div style={{fontSize:11,color:C.textMuted}}>2023 · 75 kWh · NACS + CCS</div></div></div>
                    <Pill label="ACTIVE" color={C.green} small/>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    {[{label:"Range (Full)",val:"340 mi"},{label:"Max DC",val:"250 kW"},{label:"Battery Health",val:"97%"},{label:"Max AC",val:"11 kW"}].map(v=>(
                      <div key={v.label} style={{background:C.bg,borderRadius:9,padding:"8px 10px",border:`1px solid ${C.border}`}}><div style={{fontSize:13,fontWeight:700}}>{v.val}</div><div style={{fontSize:10,color:C.textMuted}}>{v.label}</div></div>
                    ))}
                  </div>
                </Card>
                <Card>
                  <SL>Payment Methods</SL>
                  {[{name:"Visa •••• 4921",icon:"💳",isDefault:true},{name:"Apple Pay",icon:"⬛",isDefault:false},{name:"RFID Card #A4",icon:"📟",isDefault:false}].map((p,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:i<2?`1px solid ${C.border}`:"none"}}>
                      <div style={{display:"flex",gap:10,alignItems:"center"}}><span style={{fontSize:18}}>{p.icon}</span><span style={{fontSize:13,fontWeight:500}}>{p.name}</span></div>
                      {p.isDefault?<Pill label="DEFAULT" color={C.green} small/>:<span style={{fontSize:11,color:C.accent,cursor:"pointer"}}>Set default</span>}
                    </div>
                  ))}
                </Card>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Card>
                  <SL right={`${badges.filter(b=>b.earned).length}/${badges.length} earned`}>Achievements</SL>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                    {badges.map((b,i)=>(
                      <div key={i} style={{background:b.earned?b.color+"08":C.bg,border:`1px solid ${b.earned?b.color+"30":C.border}`,borderRadius:12,padding:"14px 10px",textAlign:"center",opacity:b.earned?1:0.5}}>
                        <div style={{fontSize:28,filter:b.earned?"none":"grayscale(1)"}}>{b.icon}</div>
                        <div style={{fontSize:12,fontWeight:700,marginTop:6,color:b.earned?C.text:C.textMuted}}>{b.label}</div>
                        <div style={{fontSize:10,color:C.textMuted,marginTop:2}}>{b.sub}</div>
                        {b.earned&&<div style={{fontSize:9,color:b.color,marginTop:6,fontWeight:700}}>EARNED ✓</div>}
                      </div>
                    ))}
                  </div>
                </Card>
                <Card style={{background:`linear-gradient(135deg,#F5F0FF,#EEF6FF)`,border:`1px solid ${C.purple+"25"}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <Pill label="💎 PLATINUM MEMBER" color={C.purple}/>
                      <div style={{fontSize:15,fontWeight:700,marginTop:8}}>All Benefits Active</div>
                      <div style={{fontSize:12,color:C.textMuted,marginTop:2}}>Roaming on 350,000+ stations · 18% avg discount</div>
                      <div style={{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}}>
                        {["Plug & Charge","Priority Support","Roaming","V2G Access","AI Smart Schedule"].map(b=>(
                          <Pill key={b} label={b} color={C.purple} small/>
                        ))}
                      </div>
                    </div>
                    <div style={{textAlign:"center"}}><div style={{fontSize:28,fontWeight:800,color:C.purple}}>$7<span style={{fontSize:14}}>/mo</span></div><div style={{fontSize:10,color:C.textMuted}}>renews Jun 30</div></div>
                  </div>
                </Card>
                <Card>
                  <SL>Settings</SL>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
                    {["🔔 Notifications & Alerts","🌍 Roaming Networks","🔒 Privacy & Security","🤝 Refer a Friend","📞 Help & Support","🚪 Sign Out"].map((s,i)=>(
                      <div key={s} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 12px",borderBottom:`1px solid ${C.border}`,borderRight:i%2===0?`1px solid ${C.border}`:"none",cursor:"pointer"}}>
                        <span style={{fontSize:13,color:s.startsWith("🚪")?C.red:C.text}}>{s}</span>
                        {!s.startsWith("🚪")&&<span style={{color:C.textMuted,fontSize:14}}>›</span>}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
