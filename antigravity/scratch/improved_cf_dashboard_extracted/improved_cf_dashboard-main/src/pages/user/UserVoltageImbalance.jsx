import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'
import { AlertTriangle } from 'lucide-react'
import { historicalData } from '../../data/dummy'

const events = [
  { time:'2026-06-09 14:22', phaseA:'224V', phaseB:'219V', phaseC:'231V', imbalance:'2.1%', severity:'Warning'  },
  { time:'2026-06-08 09:45', phaseA:'226V', phaseB:'220V', phaseC:'228V', imbalance:'1.6%', severity:'Warning'  },
  { time:'2026-06-07 22:10', phaseA:'221V', phaseB:'216V', phaseC:'229V', imbalance:'2.9%', severity:'Critical' },
]

const stats = [
  { label:'Max Imbalance',  value:'1.8%', color:'text-primary-600' },
  { label:'Avg Imbalance',  value:'0.6%', color:'text-info-600'    },
  { label:'Events Detected',value:'3',    color:'text-danger-600'  },
]

export default function UserVoltageImbalance() {
  const [from, setFrom] = useState('2026-06-07')
  const [to,   setTo  ] = useState('2026-06-10')

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Voltage Imbalance</h2>
          <p className="breadcrumb">User / Voltage Imbalance</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="label">From Date</label>
            <input type="date" className="input w-40" value={from} onChange={e => setFrom(e.target.value)} />
          </div>
          <div>
            <label className="label">To Date</label>
            <input type="date" className="input w-40" value={to} onChange={e => setTo(e.target.value)} />
          </div>
          <button className="btn-primary">Load</button>
        </div>
      </div>

      {/* Chart */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-800 mb-1">Phase Voltage Trend — Main Wapda</h3>
        <p className="text-xs text-surface-500 mb-4">Three-phase voltage comparison (V)</p>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <YAxis domain={[210,240]} tick={{ fontSize:11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <Tooltip
              contentStyle={{ background: '#ffffff', border: '1px solid #ECEEE6', borderRadius: 8, fontSize: 12, color: '#1F2937' }}
              itemStyle={{ color: '#1F2937' }}
              labelStyle={{ color: '#6B7280', fontWeight: 'bold' }}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: '#6B7280' }} />
            <Line type="monotone" dataKey="voltageA" stroke="#F5A623" dot={false} strokeWidth={2} name="Phase A" />
            <Line type="monotone" dataKey="voltageB" stroke="#3B82F6" dot={false} strokeWidth={2} name="Phase B" />
            <Line type="monotone" dataKey="voltageC" stroke="#EF4444" dot={false} strokeWidth={2} name="Phase C" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map(({ label, value, color }) => (
          <div key={label} className="card p-4 text-center">
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-surface-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Events Table */}
      <div>
        <h3 className="text-sm font-semibold text-surface-700 mb-3 flex items-center gap-2">
          <AlertTriangle size={14} className="text-primary-600" /> Detected Imbalance Events
        </h3>
        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Timestamp</th>
                  <th>Phase A</th>
                  <th>Phase B</th>
                  <th>Phase C</th>
                  <th>Imbalance</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr key={i}>
                    <td className="text-surface-500 font-mono text-xs">{i+1}</td>
                    <td><span className="font-mono text-xs">{e.time}</span></td>
                    <td>{e.phaseA}</td>
                    <td>{e.phaseB}</td>
                    <td>{e.phaseC}</td>
                    <td className="font-semibold text-primary-600">{e.imbalance}</td>
                    <td>
                      <span className={`badge ${e.severity === 'Critical' ? 'badge-danger' : 'badge-warning'}`}>
                        {e.severity}
                      </span>
                    </td>
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
