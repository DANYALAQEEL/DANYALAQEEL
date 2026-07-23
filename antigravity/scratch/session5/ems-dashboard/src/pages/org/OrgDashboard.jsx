import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import StatCard from '../../components/ui/StatCard'
import { Cpu, AlertTriangle, Users, Zap, CheckCircle, XCircle } from 'lucide-react'
import { orgStats, historicalData, devices } from '../../data/dummy'

const myDevices = devices.filter(d => d.org === 'Delicia Warehouse')

export default function OrgDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="My Devices"      value={orgStats.totalDevices}  icon={Cpu}           color="primary" />
        <StatCard label="Online"          value={orgStats.onlineDevices} icon={CheckCircle}   color="success" />
        <StatCard label="Active Alarms"   value={orgStats.activeAlarms}  icon={AlertTriangle} color="warning" />
        <StatCard label="Monthly Energy"  value={orgStats.monthlyEnergy} icon={Zap}           color="info"    />
      </div>

      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-200 mb-4">Power Consumption — Last 24 Hours</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={historicalData}>
            <defs>
              <linearGradient id="orgPower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#3370f5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3370f5" stopOpacity={0}   />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
            <YAxis tick={{ fontSize:11, fill:'#64748b' }} />
            <Tooltip contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }} />
            <Area type="monotone" dataKey="power" stroke="#3370f5" fill="url(#orgPower)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="p-4 border-b border-surface-800">
          <h3 className="text-sm font-semibold text-surface-200">My Devices</h3>
        </div>
        <div className="divide-y divide-surface-800">
          {myDevices.map(d => (
            <div key={d.id} className="flex items-center gap-3 px-4 py-3">
              <span className={`badge ${d.status === 'Online' ? 'badge-success' : 'badge-danger'}`}>{d.status}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-surface-200">{d.name}</p>
                <p className="text-xs text-surface-500 truncate">{d.template}</p>
              </div>
              <span className="text-xs text-surface-500">{d.gateway}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
