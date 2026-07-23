import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import StatCard from '../../components/ui/StatCard'
import { Cpu, Bell, AlertTriangle, CreditCard } from 'lucide-react'
import { userStats, historicalData, notifications } from '../../data/dummy'

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="My Devices"     value={userStats.assignedDevices} icon={Cpu}         color="primary" />
        <StatCard label="Active Alarms"  value={userStats.activeAlarms}    icon={AlertTriangle} color="warning" />
        <StatCard label="Notifications"  value={userStats.notifications}   icon={Bell}         color="info"    />
        <StatCard label="Subscription"   value={userStats.subscription}    icon={CreditCard}   color="success" />
      </div>

      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-200 mb-1">Live Readings — Main Wapda</h3>
        <p className="text-xs text-surface-500 mb-4">Voltage (V) across all three phases — last 24 hours</p>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill:'#64748b' }} />
            <YAxis domain={[210, 240]} tick={{ fontSize:11, fill:'#64748b' }} />
            <Tooltip contentStyle={{ background:'#0f172a', border:'1px solid #1e293b', borderRadius:8, fontSize:12 }} />
            <Legend wrapperStyle={{ fontSize:12, color:'#64748b' }} />
            <Line type="monotone" dataKey="voltageA" stroke="#3370f5" dot={false} strokeWidth={1.5} name="Phase A" />
            <Line type="monotone" dataKey="voltageB" stroke="#16a34a" dot={false} strokeWidth={1.5} name="Phase B" />
            <Line type="monotone" dataKey="voltageC" stroke="#ca8a04" dot={false} strokeWidth={1.5} name="Phase C" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <div className="p-4 border-b border-surface-800">
          <h3 className="text-sm font-semibold text-surface-200">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-surface-800">
          {notifications.slice(0, 8).map(n => (
            <div key={n.id} className="flex items-start gap-3 px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-warning-600 flex-shrink-0 mt-1.5" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-surface-200">{n.triggerName}</p>
                <p className="text-xs text-surface-500 truncate">{n.description}</p>
              </div>
              <span className="text-[10px] text-surface-600 flex-shrink-0 whitespace-nowrap">{n.time.slice(11)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
