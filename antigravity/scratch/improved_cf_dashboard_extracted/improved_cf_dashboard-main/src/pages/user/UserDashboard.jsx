import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import StatCard from '../../components/ui/StatCard'
import { Cpu, Bell, AlertTriangle, CreditCard, Shield, Calendar, ArrowUpRight } from 'lucide-react'
import { userStats, historicalData, notifications } from '../../data/dummy'
import { Skeleton } from 'boneyard-js/react'

export default function UserDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('Today')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])
  
  // Dynamic time-of-day greeting
  const getGreeting = () => {
    const hr = new Date().getHours()
    if (hr < 12) return 'Good morning'
    if (hr < 18) return 'Good afternoon'
    return 'Good evening'
  }

  // Custom tooltips for Recharts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-surface-200 p-3 rounded-lg shadow-floating text-xs font-semibold text-surface-800">
          {label && <p className="text-surface-400 mb-1 font-bold">{label}</p>}
          {payload.map((item, i) => (
            <div key={i} className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span>{item.name}:</span>
              <span className="text-surface-900 font-bold">{item.value} {item.unit || ''}</span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <Skeleton name="user-dashboard" loading={isLoading} transition={300}>
      <div className="space-y-6">
      {/* Personalized Greeting Banner */}
      <div className="card p-6 bg-gradient-to-r from-surface-900 to-surface-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-none shadow-elevated">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-white">
            {getGreeting()}, Maryam 👋
          </h2>
          <p className="text-xs text-surface-400 flex items-center gap-1.5">
            <Shield size={12} className="text-primary-500" />
            Account Tier: <span className="text-primary-600 font-bold uppercase">{userStats.subscription} Plan</span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => alert('Latest PDF Report is being generated.')}
          className="btn-primary self-start sm:self-auto text-xs py-2 px-3 flex items-center gap-1 font-bold"
        >
          View Latest Report
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="My Assigned Devices" value={userStats.assignedDevices} icon={Cpu}           color="primary" />
        <StatCard label="Active Alarms"       value={userStats.activeAlarms}    icon={AlertTriangle} color="warning" />
        <StatCard label="Notifications"       value={userStats.notifications}   icon={Bell}          color="info"    />
        <StatCard label="Subscription"        value={userStats.subscription}    icon={CreditCard}    color="success" />
      </div>

      {/* Consumption Line Chart */}
      <div className="card p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <div>
            <h3 className="text-sm font-bold text-surface-900 leading-none">Live Readings — Main Wapda</h3>
            <p className="text-xs text-surface-400 mt-1">Voltage (V) logged across all three phases</p>
          </div>

          {/* Tab Selector */}
          <div className="flex bg-surface-100 p-0.5 rounded-lg border border-surface-200">
            {['Today', 'Week', 'Month'].map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
                  activeTab === tab 
                    ? 'bg-white text-surface-900 shadow-sm border border-surface-200/50' 
                    : 'text-surface-500 hover:text-surface-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
            <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <YAxis domain={[210, 240]} tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
            <Line type="monotone" dataKey="voltageA" stroke="#F5A623" dot={false} strokeWidth={2} name="Phase A" unit="V" />
            <Line type="monotone" dataKey="voltageB" stroke="#3B82F6" dot={false} strokeWidth={2} name="Phase B" unit="V" />
            <Line type="monotone" dataKey="voltageC" stroke="#EF4444" dot={false} strokeWidth={2} name="Phase C" unit="V" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Notifications Panel */}
      <div className="card flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-surface-200">
          <div>
            <h3 className="text-sm font-bold text-surface-900">Recent Notifications</h3>
            <p className="text-xs text-surface-400 mt-0.5">Critical system updates and threshold alarms</p>
          </div>
          <span className="badge badge-neutral flex items-center gap-1"><Calendar size={11} /> Logged events</span>
        </div>
        <div className="divide-y divide-surface-100 flex-1">
          {notifications.slice(0, 5).map(n => {
            const isCritical = n.severity === 'danger'
            return (
              <div 
                key={n.id} 
                className={`flex items-start gap-4 px-4 py-4 hover:bg-surface-50 transition-colors duration-100 border-l-4 ${
                  isCritical ? 'border-l-danger-600' : 'border-l-primary-500'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                  isCritical 
                    ? 'bg-danger-100/40 text-danger-700 border-danger-600/20' 
                    : 'bg-primary-100/40 text-primary-700 border-primary-500/20'
                }`}>
                  {isCritical ? <AlertTriangle size={14} /> : <Bell size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-surface-800 leading-tight">{n.triggerName}</p>
                  <p className="text-xs text-surface-400 mt-0.5 leading-relaxed">{n.description}</p>
                </div>
                <span className="text-[10px] font-bold text-surface-400 flex-shrink-0 whitespace-nowrap">
                  {n.time.slice(11)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </Skeleton>
  )
}
