import { useState, useEffect } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { fetchSubscribers, deleteSubscriber } from '../../services/adminNewsletterService'

function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    fetchSubscribers().then(setSubscribers).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const handleDelete = async (id) => {
    if (!confirm('Remove this subscriber?')) return
    try { await deleteSubscriber(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Newsletter Subscribers</h1>
        <p className="text-gray-500 text-sm mt-1">{subscribers.length} subscriber{subscribers.length !== 1 ? 's' : ''}</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                <th className="px-5 py-3">Email</th><th className="px-5 py-3">Subscribed</th><th className="px-5 py-3">Status</th><th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={4} className="text-center text-gray-500 py-10">Loading...</td></tr>}
              {!loading && subscribers.length === 0 && <tr><td colSpan={4} className="text-center text-gray-500 py-10">No subscribers yet.</td></tr>}
              {!loading && subscribers.map((s) => (
                <tr key={s._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3 text-white">{s.email}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{new Date(s.createdAt).toLocaleDateString()}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${s.active ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                      {s.active ? 'Active' : 'Unsubscribed'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button onClick={() => handleDelete(s._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminNewsletterPage
