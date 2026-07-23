import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts'
import { historicalData } from '../../data/dummy'

// Power factor trend — hardcoded around 0.90–0.94
const pfTrend = historicalData.map((d, i) => ({
  time: d.time,
  pf:   [0.93, 0.91, 0.90, 0.94, 0.92, 0.93, 0.91, 0.92, 0.90, 0.93, 0.94, 0.91][i % 12],
}))

const pfEvents = [
  { time:'2026-06-09 11:00', pf:'0.84', duration:'45 min', status:'Resolved' },
  { time:'2026-06-08 15:30', pf:'0.83', duration:'20 min', status:'Resolved' },
  { time:'2026-06-05 09:10', pf:'0.82', duration:'55 min', status:'Resolved' },
]

const CURRENT_PF = 0.91
const MIN_PF = 0
const MAX_PF = 1

function GaugeArc({ value }) {
  // SVG half-circle gauge
  const pct    = (value - 0.7) / (1.0 - 0.7)  // 0.7–1.0 range
  const angle  = pct * 180 - 90                 // -90 to 90 degrees
  const cx = 100, cy = 90, r = 70

  const toXY = (angleDeg) => ({
    x: cx + r * Math.cos((angleDeg * Math.PI) / 180),
    y: cy + r * Math.sin((angleDeg * Math.PI) / 180),
  })

  const start  = toXY(-180)
  const endGood = toXY(angle)
  const largeArc = angle > -90 ? 1 : 0

  const needleX = cx + (r - 5) * Math.cos(((angle) * Math.PI) / 180)
  const needleY = cy + (r - 5) * Math.sin(((angle) * Math.PI) / 180)

  // Color: green if >=0.90, yellow if >=0.85, red otherwise
  const arcColor = value >= 0.90 ? '#16a34a' : value >= 0.85 ? '#ca8a04' : '#dc2626'

  return (
    <svg viewBox="0 0 200 110" className="w-full max-w-xs mx-auto">
      {/* Background arc */}
      <path
        d={`M 30 90 A 70 70 0 0 1 170 90`}
        fill="none" stroke="#1e293b" strokeWidth="14" strokeLinecap="round"
      />
      {/* Value arc */}
      <path
        d={`M 30 90 A 70 70 0 ${largeArc} 1 ${endGood.x.toFixed(2)} ${endGood.y.toFixed(2)}`}
        fill="none" stroke={arcColor} strokeWidth="14" strokeLinecap="round"
      />
      {/* Needle */}
      <line x1={cx} y1={cy} x2={needleX.toFixed(2)} y2={needleY.toFixed(2)}
        stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4" fill="#f1f5f9" />
      {/* Labels */}
      <text x="28" y="106" fontSize="9" fill="#64748b" textAnchor="middle">0.70</text>
      <text x="172" y="106" fontSize="9" fill="#64748b" textAnchor="middle">1.00</text>
      {/* Value */}
      <text x={cx} y="80" fontSize="20" fill="#f1f5f9" textAnchor="middle" fontWeight="700">{value}</text>
      <text x={cx} y="94" fontSize="8" fill="#64748b" textAnchor="middle">POWER FACTOR</text>
    </svg>
  )
}

export default function UserPowerFactor() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Power Factor</h2>
          <p className="breadcrumb">User / Power Factor</p>
        </div>
      </div>

      {/* Gauge */}
      <div className="card p-6">
        <h3 className="text-sm font-semibold text-surface-200 text-center mb-4">Current Power Factor — Main Wapda</h3>
        <GaugeArc value={CURRENT_PF} />
        <p className="text-center text-xs text-success-400 mt-2">Excellent — above 0.90 threshold</p>
      </div>

      {/* PF Trend */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-200 mb-1">Power Factor Trend</h3>
        <p className="text-xs text-surface-500 mb-4">Last 24 hours — 2-hour intervals</p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={pfTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
            <YAxis domain={[0.8, 1.0]} tick={{ fontSize:11, fill:'#64748b' }} />
            <Tooltip
              contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }}
              formatter={v => [v, 'Power Factor']}
            />
            {/* Threshold line at 0.85 */}
            <Line type="monotone" dataKey="pf" stroke="#16a34a" dot={false} strokeWidth={2} name="Power Factor" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label:'Avg PF This Month', value:'0.91', color:'text-success-400' },
          { label:'Min PF',            value:'0.87', color:'text-warning-400' },
          { label:'Hours Below 0.85',  value:'2 hrs', color:'text-danger-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="card p-4 text-center">
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-surface-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Events Table */}
      <div>
        <h3 className="text-sm font-semibold text-surface-300 mb-3">PF Below Threshold Events</h3>
        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Timestamp</th>
                  <th>Power Factor</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pfEvents.map((e, i) => (
                  <tr key={i}>
                    <td className="text-surface-500 font-mono text-xs">{i+1}</td>
                    <td><span className="font-mono text-xs">{e.time}</span></td>
                    <td className="text-warning-400 font-semibold">{e.pf}</td>
                    <td>{e.duration}</td>
                    <td><span className="badge badge-success">{e.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
