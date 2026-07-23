import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  RadialBarChart, RadialBar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PolarAngleAxis,
} from 'recharts'
import { TrendingUp, TrendingDown, AlertTriangle, Bell, Info } from 'lucide-react'
import {
  METRICS, generateSeries, generateComparison, generateCurrentValue, generateDeviceTable, generateAlarms,
} from '../../data/facilitiesHierarchy'
import { COLOR_THEMES } from '../../data/widgetCatalog'

function themeHex(color) {
  return COLOR_THEMES.find(c => c.value === color)?.hex || '#F5A623'
}

function CustomTooltip({ active, payload, label, unit }) {
  if (!(active && payload && payload.length)) return null
  return (
    <div className="bg-white border border-surface-200 p-2.5 rounded-lg shadow-floating text-xs font-semibold text-surface-800">
      {label && <p className="text-surface-400 mb-1 font-bold">{label}</p>}
      {payload.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color || item.fill }} />
          <span>{item.name}:</span>
          <span className="text-surface-900 font-bold">{item.value} {unit || ''}</span>
        </div>
      ))}
    </div>
  )
}

// Resolves the effective scope + time range a widget should read data from,
// honoring per-widget overrides and otherwise inheriting the dashboard's
// shared context filter (building / floor / department / time range).
export function resolveWidgetContext(widget, dashboardContext) {
  const scope = widget.scopeOverride || {
    level: dashboardContext.level,
    buildingId: dashboardContext.buildingId,
    floorId: dashboardContext.floorId,
    departmentId: dashboardContext.departmentId,
  }
  const timeRange = widget.timeRange === 'inherit' || !widget.timeRange
    ? dashboardContext.timeRange
    : widget.timeRange
  return { scope, timeRange }
}

export default function WidgetRenderer({ widget, orgName, hierarchy, dashboardContext }) {
  const { scope, timeRange } = resolveWidgetContext(widget, dashboardContext)
  const cfg = METRICS[widget.metric] || METRICS.energyConsumption
  const color = themeHex(widget.color)

  if (widget.groupBy && widget.groupBy !== 'none' && ['bar', 'pie', 'table'].includes(widget.type)) {
    // Use the *parent* of the requested groupBy level so its children can be compared
    const parentScope = widget.groupBy === 'building' ? { level: 'organization' }
      : widget.groupBy === 'floor' ? { level: 'building', buildingId: scope.buildingId || hierarchy.buildings[0]?.id }
      : { level: 'floor', buildingId: scope.buildingId || hierarchy.buildings[0]?.id, floorId: scope.floorId || hierarchy.buildings[0]?.floors[0]?.id }
    const data = generateComparison(orgName, hierarchy, parentScope, widget.metric, timeRange)

    if (widget.type === 'table') {
      return (
        <div className="overflow-auto h-full">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-surface-400 uppercase tracking-wide border-b border-surface-100">
                <th className="py-1.5 pr-2 font-bold">Name</th>
                <th className="py-1.5 font-bold">{cfg.label}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="py-1.5 pr-2 font-semibold text-surface-700">{row.name}</td>
                  <td className="py-1.5 text-surface-900 font-bold">{row.value} <span className="text-surface-400 font-normal">{row.unit}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    if (widget.type === 'pie') {
      const palette = ['#F5A623', '#2563EB', '#16A34A', '#DC2626', '#8C510A', '#6B7280']
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius="45%" outerRadius="75%" paddingAngle={2}>
              {data.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}
            </Pie>
            <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
          </PieChart>
        </ResponsiveContainer>
      )
    }

    // bar comparison
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#9AA09A' }} stroke="#D1D5C8" interval={0} angle={-15} textAnchor="end" height={45} />
          <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
          <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
          <Bar dataKey="value" name={cfg.label} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  if (widget.type === 'stat') {
    const value = generateCurrentValue(orgName, scope, widget.metric)
    const trend = Math.round((Math.sin(value) * 12) * 10) / 10
    const isUp = trend >= 0
    const TrendIcon = isUp ? TrendingUp : TrendingDown
    return (
      <div className="h-full flex flex-col justify-between">
        <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest truncate">{widget.title}</p>
        <h3 className="text-3xl font-bold text-surface-900 leading-none tracking-tight">
          {value} <span className="text-sm font-semibold text-surface-400">{cfg.unit}</span>
        </h3>
        <div className={`inline-flex items-center gap-1 text-xs font-semibold w-fit ${isUp ? 'text-success-600' : 'text-danger-600'}`}>
          <TrendIcon size={12} /> {Math.abs(trend)}% vs last period
        </div>
      </div>
    )
  }

  if (widget.type === 'gauge') {
    const value = generateCurrentValue(orgName, scope, widget.metric)
    const max = widget.metric === 'powerFactor' ? 1 : cfg.base + cfg.variance
    const pct = Math.min(100, Math.round((value / max) * 100))
    const data = [{ name: cfg.label, value: pct, fill: color }]
    return (
      <div className="h-full flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="65%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar background dataKey="value" cornerRadius={8} angleAxisId={0} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-surface-900">{value}</span>
          <span className="text-[10px] text-surface-400 font-semibold">{cfg.unit || cfg.label}</span>
        </div>
      </div>
    )
  }

  if (widget.type === 'table') {
    const rows = generateDeviceTable(orgName, scope, widget.metric)
    return (
      <div className="overflow-auto h-full">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-left text-surface-400 uppercase tracking-wide border-b border-surface-100">
              <th className="py-1.5 pr-2 font-bold">Device</th>
              <th className="py-1.5 pr-2 font-bold">{cfg.label}</th>
              <th className="py-1.5 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100">
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="py-1.5 pr-2 font-semibold text-surface-700">{row.device}</td>
                <td className="py-1.5 pr-2 text-surface-900 font-bold">{row.value} <span className="text-surface-400 font-normal">{row.unit}</span></td>
                <td className="py-1.5">
                  <span className={`badge ${row.status === 'Online' ? 'badge-success' : 'badge-danger'}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (widget.type === 'alarms') {
    const alarms = generateAlarms(orgName, scope)
    const severityStyle = {
      danger: 'border-l-danger-600 bg-danger-100/40 text-danger-700 border-danger-600/20',
      warning: 'border-l-primary-500 bg-primary-100/40 text-primary-700 border-primary-500/20',
      info: 'border-l-info-600 bg-info-100/40 text-info-700 border-info-600/20',
    }
    const IconFor = (sev) => sev === 'danger' ? AlertTriangle : sev === 'info' ? Info : Bell
    return (
      <div className="h-full overflow-auto divide-y divide-surface-100">
        {alarms.map(a => {
          const Icon = IconFor(a.severity)
          return (
            <div key={a.id} className={`flex items-center gap-3 py-2 pl-2 border-l-4 ${severityStyle[a.severity] || severityStyle.info}`}>
              <Icon size={14} className="flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-surface-800 truncate">{a.name}</p>
              </div>
              <span className="text-[10px] font-bold text-surface-400 flex-shrink-0">{a.time}</span>
            </div>
          )
        })}
        {alarms.length === 0 && <p className="text-xs text-surface-400 py-4 text-center">No active alarms</p>}
      </div>
    )
  }

  if (widget.type === 'pie') {
    const series = generateSeries(orgName, scope, widget.metric, timeRange)
    const palette = ['#F5A623', '#2563EB', '#16A34A', '#DC2626', '#8C510A', '#6B7280']
    const sample = series.filter((_, i) => i % Math.ceil(series.length / 6) === 0).slice(0, 6)
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={sample} dataKey="value" nameKey="label" innerRadius="45%" outerRadius="75%" paddingAngle={2}>
            {sample.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}
          </Pie>
          <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  // line / area / bar — plain time series
  const series = generateSeries(orgName, scope, widget.metric, timeRange)
  if (widget.type === 'area') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={series}>
          <defs>
            <linearGradient id={`grad-${widget.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.35} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
          <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
          <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
          <Area type="monotone" dataKey="value" name={cfg.label} stroke={color} fill={`url(#grad-${widget.id})`} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  if (widget.type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={series}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
          <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
          <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
          <Bar dataKey="value" name={cfg.label} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={series}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
        <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
        <Tooltip content={<CustomTooltip unit={cfg.unit} />} />
        <Line type="monotone" dataKey="value" name={cfg.label} stroke={color} dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
