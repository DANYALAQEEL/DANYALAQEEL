import { useState, useEffect } from 'react'
import { fetchAuditLogs, fetchActivityLogs } from '../../services/adminLogService'

function AdminLogsPage() {
  const [tab, setTab] = useState('audit')
  const [auditLogs, setAuditLogs] = useState([])
  const [activityLogs, setActivityLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchAuditLogs(), fetchActivityLogs()])
      .then(([audit, activity]) => { setAuditLogs(audit); setActivityLogs(activity) })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const logs = tab === 'audit' ? auditLogs : activityLogs

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Logs</h1>
        <p className="text-gray-500 text-sm mt-1">Admin actions and store activity</p>
      </div>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab('audit')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'audit' ? 'bg-primary text-white' : 'bg-[#1e293b] text-gray-400'}`}>
          Audit Log ({auditLogs.length})
        </button>
        <button onClick={() => setTab('activity')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'activity' ? 'bg-primary text-white' : 'bg-[#1e293b] text-gray-400'}`}>
          Activity Log ({activityLogs.length})
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                {tab === 'audit' ? (
                  <><th className="px-5 py-3">Admin</th><th className="px-5 py-3">Action</th><th className="px-5 py-3">Module</th><th className="px-5 py-3">Description</th><th className="px-5 py-3">When</th></>
                ) : (
                  <><th className="px-5 py-3">Type</th><th className="px-5 py-3">Message</th><th className="px-5 py-3">When</th></>
                )}
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={5} className="text-center text-gray-500 py-10">Loading...</td></tr>}
              {!loading && logs.length === 0 && <tr><td colSpan={5} className="text-center text-gray-500 py-10">No logs yet.</td></tr>}
              {!loading && tab === 'audit' && auditLogs.map((l) => (
                <tr key={l._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3 text-white">{l.admin?.name || '—'}</td>
                  <td className="px-5 py-3"><span className="text-xs bg-[#1e293b] text-gray-300 px-2 py-1 rounded">{l.action}</span></td>
                  <td className="px-5 py-3 text-gray-400">{l.module}</td>
                  <td className="px-5 py-3 text-gray-400">{l.description}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{new Date(l.createdAt).toLocaleString()}</td>
                </tr>
              ))}
              {!loading && tab === 'activity' && activityLogs.map((l) => (
                <tr key={l._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3"><span className="text-xs bg-[#1e293b] text-gray-300 px-2 py-1 rounded">{l.type}</span></td>
                  <td className="px-5 py-3 text-gray-300">{l.message}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{new Date(l.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminLogsPage
