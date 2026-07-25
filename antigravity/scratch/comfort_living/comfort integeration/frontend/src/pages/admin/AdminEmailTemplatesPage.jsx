import { useState, useEffect } from 'react'
import { FiPlus, FiEdit2, FiX } from 'react-icons/fi'
import { fetchEmailTemplates, createEmailTemplate, updateEmailTemplate } from '../../services/adminEmailTemplateService'

const emptyForm = { name: '', slug: '', subject: '', body: '', active: true }

function AdminEmailTemplatesPage() {
  const [templates, setTemplates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchEmailTemplates().then(setTemplates).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (t) => {
    setEditingId(t._id)
    setFormData({ name: t.name, slug: t.slug, subject: t.subject, body: t.body, active: t.active })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateEmailTemplate(editingId, formData)
      else await createEmailTemplate(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Email Templates</h1>
          <p className="text-gray-500 text-sm mt-1">Manage transactional email content</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <FiPlus size={16} /> Add Template
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Template' : 'Add New Template'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Name (e.g. Order Confirmation)" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input required placeholder="Slug (e.g. order-confirmation)" value={formData.slug} disabled={!!editingId}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary disabled:opacity-50" />
            <input required placeholder="Email subject" value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />
            <textarea required placeholder="Email body (HTML supported)" value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary min-h-[160px] md:col-span-2 font-mono" />
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
              Active
            </label>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update Template' : 'Create Template'}
            </button>
          </form>
        </div>
      )}

      <div className="space-y-3">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && templates.length === 0 && <p className="text-gray-500 text-sm">No templates yet.</p>}
        {!loading && templates.map((t) => (
          <div key={t._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-white font-medium text-sm">{t.name} <span className="text-gray-500 font-mono text-xs">({t.slug})</span></p>
              <p className="text-gray-500 text-xs mt-1">Subject: {t.subject}</p>
            </div>
            <button onClick={() => openEdit(t)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors shrink-0"><FiEdit2 size={14} /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminEmailTemplatesPage
