import { useState, useEffect } from 'react'
import { fetchContactMessages } from '../../services/adminContactService'

function AdminContactMessagesPage() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchContactMessages().then(setMessages).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Contact Messages</h1>
        <p className="text-gray-500 text-sm mt-1">
          {messages.length} message{messages.length !== 1 ? 's' : ''} received via the contact form.
          <br />
          <span className="text-gray-600">TODO: backend has no reply/mark-as-read endpoint yet — this is a read-only inbox.</span>
        </p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      <div className="space-y-3">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && messages.length === 0 && <p className="text-gray-500 text-sm">No messages yet.</p>}
        {!loading && messages.map((m) => (
          <div key={m._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-white font-medium text-sm">{m.name}</p>
                <p className="text-gray-500 text-xs">{m.email}{m.phone ? ` · ${m.phone}` : ''}</p>
              </div>
              <span className="text-gray-600 text-xs">{new Date(m.createdAt).toLocaleString()}</span>
            </div>
            {m.subject && <p className="text-gray-300 text-sm font-medium mt-2">{m.subject}</p>}
            <p className="text-gray-400 text-sm mt-1">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminContactMessagesPage
