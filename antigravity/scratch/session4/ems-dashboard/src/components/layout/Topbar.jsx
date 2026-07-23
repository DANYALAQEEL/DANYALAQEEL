import { useState } from 'react'
import { Bell, ChevronDown, LogOut, User, Settings } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { notifications } from '../../data/dummy'

export default function Topbar({ title }) {
  const { user, logout }   = useAuth()
  const navigate           = useNavigate()
  const [dropOpen, setDropOpen]     = useState(false)
  const [notifOpen, setNotifOpen]   = useState(false)
  const unread = notifications.slice(0, 5)

  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <header className="h-14 bg-surface-950 border-b border-surface-800 flex items-center justify-between px-6 sticky top-0 z-30">
      <h1 className="text-sm font-semibold text-surface-200">{title}</h1>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            className="btn-ghost p-2 relative"
            onClick={() => { setNotifOpen(o => !o); setDropOpen(false) }}
          >
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger-600 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-surface-900 border border-surface-700 rounded-xl shadow-2xl z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-surface-800">
                <p className="text-sm font-semibold text-surface-100">Notifications</p>
                <span className="badge badge-danger">{notifications.length}</span>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-surface-800">
                {unread.map(n => (
                  <div key={n.id} className="px-4 py-3 hover:bg-surface-800/50 cursor-pointer">
                    <p className="text-xs font-medium text-surface-200">{n.triggerName}</p>
                    <p className="text-xs text-surface-500 mt-0.5 truncate">{n.description}</p>
                    <p className="text-[10px] text-surface-600 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-surface-800 text-center">
                <button className="text-xs text-primary-400 hover:text-primary-300">View all</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center gap-2 btn-ghost px-2 py-1.5"
            onClick={() => { setDropOpen(o => !o); setNotifOpen(false) }}
          >
            <div className="w-7 h-7 rounded-full bg-primary-600/20 border border-primary-600/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold text-primary-400">
                {user?.name?.[0] ?? 'A'}
              </span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-medium text-surface-200 leading-tight">{user?.name}</p>
              <p className="text-[10px] text-surface-500">{user?.email}</p>
            </div>
            <ChevronDown size={13} className="text-surface-500" />
          </button>

          {dropOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-surface-900 border border-surface-700 rounded-xl shadow-2xl z-50 py-1">
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-surface-300 hover:bg-surface-800 hover:text-surface-100">
                <User size={14} /> Profile
              </button>
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-surface-300 hover:bg-surface-800 hover:text-surface-100">
                <Settings size={14} /> Settings
              </button>
              <div className="border-t border-surface-800 my-1" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-danger-600 hover:bg-danger-600/10"
              >
                <LogOut size={14} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
