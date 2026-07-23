import { useState } from 'react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { Zap, TrendingUp, Moon, Sun, Receipt } from 'lucide-react'
import { historicalData } from '../../data/dummy'

const dailyData = [
  { day:'Jun 4',  kWh: 390 },
  { day:'Jun 5',  kWh: 415 },
  { day:'Jun 6',  kWh: 380 },
  { day:'Jun 7',  kWh: 442 },
  { day:'Jun 8',  kWh: 410 },
  { day:'Jun 9',  kWh: 428 },
  { day:'Jun 10', kWh: 395 },
]

const periods = ['Today', 'This Week', 'This Month', 'Custom']

const statCards = [
  { label:'Total kWh',    value:'12,450', unit:'kWh', icon: Zap,       color:'primary' },
  { label:'Peak kW',      value:'24.3',   unit:'kW',  icon: TrendingUp, color:'warning' },
  { label:'Off-Peak kWh', value:'6,200',  unit:'kWh', icon: Moon,      color:'info'    },
  { label:'On-Peak kWh',  value:'6,250',  unit:'kWh', icon: Sun,       color:'success' },
  { label:'Cost',         value:'PKR 3,48,600', unit:'', icon: Receipt, color:'danger'  },
]

const colorClass = {
  primary: 'text-primary-400 bg-primary-600/10',
  warning: 'text-warning-400 bg-warning-600/10',
  info:    'text-info-400    bg-info-600/10',
  success: 'text-success-400 bg-success-600/10',
  danger:  'text-danger-400  bg-danger-600/10',
}

export default function UserEnergyConsumption() {
  const [period, setPeriod] = useState('This Month')

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Energy Consumption</h2>
          <p className="breadcrumb">User / Energy Consumption</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="label">Period</label>
            <select className="select w-36" value={period} onChange={e => setPeriod(e.target.value)}>
              {periods.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          {period === 'Custom' && <>
            <div>
              <label className="label">From</label>
              <input type="date" className="input w-40" defaultValue="2026-06-01" />
            </div>
            <div>
              <label className="label">To</label>
              <input type="date" className="input w-40" defaultValue="2026-06-10" />
            </div>
          </>}
          <button className="btn-primary">Load</button>
        </div>
      </div>

      {/* Area Chart */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-200 mb-1">Power Consumption — Main Wapda</h3>
        <p className="text-xs text-surface-500 mb-4">{period} · Active Power (kW)</p>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={historicalData}>
            <defs>
              <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#3370f5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3370f5" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
            <YAxis tick={{ fontSize:11, fill:'#64748b' }} tickFormatter={v => `${(v/1000).toFixed(0)}kW`} />
            <Tooltip
              contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }}
              formatter={v => [`${(v/1000).toFixed(1)} kW`, 'Active Power']}
            />
            <Area type="monotone" dataKey="power" stroke="#3370f5" fill="url(#powerGrad)" strokeWidth={2} name="Power" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map(({ label, value, unit, icon: Icon, color }) => (
          <div key={label} className="card p-4">
            <div className={`w-8 h-8 rounded-lg ${colorClass[color]} flex items-center justify-center mb-3`}>
              <Icon size={15} className={colorClass[color].split(' ')[0]} />
            </div>
            <p className="text-lg font-bold text-surface-100">{value}</p>
            {unit && <p className="text-xs text-surface-500">{unit}</p>}
            <p className="text-xs text-surface-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Daily Bar Chart */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-200 mb-1">Daily Consumption — Last 7 Days</h3>
        <p className="text-xs text-surface-500 mb-4">Energy consumed per day (kWh)</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="day" tick={{ fontSize:11, fill:'#64748b' }} />
            <YAxis tick={{ fontSize:11, fill:'#64748b' }} />
            <Tooltip
              contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }}
              formatter={v => [`${v} kWh`, 'Consumption']}
            />
            <Bar dataKey="kWh" fill="#3370f5" radius={[4,4,0,0]} name="kWh" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
