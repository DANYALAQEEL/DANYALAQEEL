import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi'
import { fetchFaqs, createFaq, updateFaq, deleteFaq } from '../../services/adminFaqService'

const emptyForm = { question: '', answer: '', category: 'General', displayOrder: 0, active: true }

function AdminFaqsPage() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchFaqs().then(setFaqs).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  const [searchParams] = useSearchParams()
  useEffect(load, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (searchParams.get('new') === '1') openCreate() }, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (faq) => {
    setEditingId(faq._id)
    setFormData({ question: faq.question, answer: faq.answer, category: faq.category, displayOrder: faq.displayOrder, active: faq.active })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateFaq(editingId, formData)
      else await createFaq(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this FAQ?')) return
    try { await deleteFaq(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">FAQs</h1>
          <p className="text-gray-500 text-sm mt-1">Manage frequently asked questions</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <FiPlus size={16} /> Add FAQ
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit FAQ' : 'Add New FAQ'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 gap-4">
            <input required placeholder="Question" value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <textarea required placeholder="Answer" value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary min-h-[90px]" />
            <div className="grid grid-cols-3 gap-4">
              <input placeholder="Category" value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
              <input type="number" placeholder="Display order" value={formData.displayOrder}
                onChange={(e) => setFormData({ ...formData, displayOrder: e.target.value })}
                className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
                Active
              </label>
            </div>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update FAQ' : 'Create FAQ'}
            </button>
          </form>
        </div>
      )}

      <div className="space-y-3">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && faqs.length === 0 && <p className="text-gray-500 text-sm">No FAQs yet.</p>}
        {!loading && faqs.map((f) => (
          <div key={f._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-white font-medium text-sm">{f.question}</p>
              <p className="text-gray-500 text-xs mt-1">{f.answer}</p>
              <span className="inline-block mt-2 text-xs bg-[#1e293b] text-gray-400 px-2 py-0.5 rounded-full">{f.category}</span>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(f)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors"><FiEdit2 size={14} /></button>
              <button onClick={() => handleDelete(f._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminFaqsPage
