import { useState, useEffect } from 'react'
import { FiBell, FiCheck } from 'react-icons/fi'
import { fetchNotifications, markNotificationRead, markAllNotificationsRead } from '../../services/adminNotificationService'

function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    fetchNotifications().then(setNotifications).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const handleMarkRead = async (id) => {
    try {
      await markNotificationRead(id)
      setNotifications((prev) => prev.map((n) => n._id === id ? { ...n, isRead: true } : n))
    } catch (err) { setError(err.message) }
  }

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsRead()
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
    } catch (err) { setError(err.message) }
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
          <p className="text-gray-500 text-sm mt-1">{unreadCount} unread</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={handleMarkAllRead} className="flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
            <FiCheck size={16} /> Mark all as read
          </button>
        )}
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      <div className="space-y-2">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && notifications.length === 0 && <p className="text-gray-500 text-sm">No notifications yet.</p>}
        {!loading && notifications.map((n) => (
          <div key={n._id} onClick={() => !n.isRead && handleMarkRead(n._id)}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-colors cursor-pointer ${n.isRead ? 'bg-[#050a14] border-[#1a2a3a]' : 'bg-[#0d1829] border-primary/40'}`}>
            <FiBell size={16} className={n.isRead ? 'text-gray-600 mt-0.5' : 'text-primary mt-0.5'} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-white text-sm font-medium">{n.title}</p>
                <span className="text-xs bg-[#1e293b] text-gray-400 px-2 py-0.5 rounded-full">{n.type}</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">{n.message}</p>
              <p className="text-gray-600 text-xs mt-1">{new Date(n.createdAt).toLocaleString()}</p>
            </div>
            {!n.isRead && <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminNotificationsPage
