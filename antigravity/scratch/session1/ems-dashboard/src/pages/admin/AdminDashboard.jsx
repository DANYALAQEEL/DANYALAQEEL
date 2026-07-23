import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import StatCard from '../../components/ui/StatCard'
import { Building2, Users, Cpu, Wifi, AlertTriangle, Activity, CheckCircle, XCircle } from 'lucide-react'
import { adminStats, historicalData, devices, organizations } from '../../data/dummy'

const recentAlarms = [
  { id:1, device:'Main Wapda',     trigger:'Overvoltage Alert', time:'10 min ago', severity:'danger'  },
  { id:2, device:'CF Smart Panel', trigger:'High Current',      time:'32 min ago', severity:'warning' },
  { id:3, device:'EMS Panel',      trigger:'Device Offline',    time:'1 hr ago',   severity:'danger'  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Organizations" value={adminStats.totalOrgs}     icon={Building2} color="primary" trend={2}  />
        <StatCard label="Total Users"         value={adminStats.totalUsers}    icon={Users}     color="info"    trend={5}  />
        <StatCard label="Total Devices"       value={adminStats.totalDevices}  icon={Cpu}       color="neutral"            />
        <StatCard label="Total Gateways"      value={adminStats.totalGateways} icon={Wifi}      color="neutral"            />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Online Devices"  value={adminStats.onlineDevices}  icon={CheckCircle} color="success" />
        <StatCard label="Offline Devices" value={adminStats.offlineDevices} icon={XCircle}     color="danger"  />
        <StatCard label="Active Alarms"   value={adminStats.activeAlarms}   icon={AlertTriangle} color="warning" />
        <StatCard label="Total Alarms"    value={adminStats.totalAlarms}    icon={Activity}    color="neutral" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-200 mb-4">Power Consumption (kW) — Today</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={historicalData}>
              <defs>
                <linearGradient id="power" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#3370f5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3370f5" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
              <YAxis tick={{ fontSize:11, fill:'#64748b' }} />
              <Tooltip
                contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }}
                labelStyle={{ color:'#94a3b8' }}
              />
              <Area type="monotone" dataKey="power" stroke="#3370f5" fill="url(#power)" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold text-surface-200 mb-4">Voltage Phases (V) — Today</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={historicalData.filter((_, i) => i % 3 === 0)} barSize={6}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
              <YAxis domain={[200, 240]} tick={{ fontSize:11, fill:'#64748b' }} />
              <Tooltip
                contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }}
              />
              <Bar dataKey="voltageA" fill="#3370f5" radius={[2,2,0,0]} name="Phase A" />
              <Bar dataKey="voltageB" fill="#16a34a" radius={[2,2,0,0]} name="Phase B" />
              <Bar dataKey="voltageC" fill="#ca8a04" radius={[2,2,0,0]} name="Phase C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Alarms */}
        <div className="card">
          <div className="flex items-center justify-between p-4 border-b border-surface-800">
            <h3 className="text-sm font-semibold text-surface-200">Recent Alarms</h3>
            <span className="badge badge-danger">{recentAlarms.length} active</span>
          </div>
          <div className="divide-y divide-surface-800">
            {recentAlarms.map(a => (
              <div key={a.id} className="flex items-center gap-3 px-4 py-3">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${a.severity === 'danger' ? 'bg-danger-600' : 'bg-warning-600'}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-surface-200">{a.trigger}</p>
                  <p className="text-xs text-surface-500">{a.device}</p>
                </div>
                <span className="text-[10px] text-surface-600 flex-shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Status */}
        <div className="card">
          <div className="p-4 border-b border-surface-800">
            <h3 className="text-sm font-semibold text-surface-200">Device Status</h3>
          </div>
          <div className="divide-y divide-surface-800">
            {devices.slice(0, 5).map(d => (
              <div key={d.id} className="flex items-center gap-3 px-4 py-3">
                <span className={`badge ${d.status === 'Online' ? 'badge-success' : 'badge-danger'}`}>
                  {d.status}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-surface-200 truncate">{d.name}</p>
                  <p className="text-xs text-surface-500 truncate">{d.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
