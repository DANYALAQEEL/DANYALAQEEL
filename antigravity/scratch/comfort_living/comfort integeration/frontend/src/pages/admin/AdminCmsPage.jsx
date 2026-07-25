import { useState, useEffect } from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi'
import { fetchCmsPages, createCmsPage, updateCmsPage, deleteCmsPage } from '../../services/adminCmsService'

const emptyForm = { key: '', title: '', content: '', active: true }

function AdminCmsPage() {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchCmsPages().then(setPages).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (page) => {
    setEditingId(page._id)
    setFormData({ key: page.key, title: page.title, content: page.content, active: page.active })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateCmsPage(editingId, formData)
      else await createCmsPage(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this page?')) return
    try { await deleteCmsPage(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">CMS Pages</h1>
          <p className="text-gray-500 text-sm mt-1">Manage static content pages (About, Privacy Policy, Terms, etc.)</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <FiPlus size={16} /> Add Page
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Page' : 'Add New Page'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Key (e.g. about-us, privacy-policy)" value={formData.key} disabled={!!editingId}
              onChange={(e) => setFormData({ ...formData, key: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary disabled:opacity-50" />
            <input required placeholder="Page title" value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <textarea placeholder="Content (HTML or plain text)" value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary min-h-[160px] md:col-span-2" />
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
              Active (visible on storefront)
            </label>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update Page' : 'Create Page'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                <th className="px-5 py-3">Key</th><th className="px-5 py-3">Title</th><th className="px-5 py-3">Status</th><th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={4} className="text-center text-gray-500 py-10">Loading...</td></tr>}
              {!loading && pages.length === 0 && <tr><td colSpan={4} className="text-center text-gray-500 py-10">No pages yet.</td></tr>}
              {!loading && pages.map((p) => (
                <tr key={p._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3 text-gray-400 font-mono text-xs">{p.key}</td>
                  <td className="px-5 py-3 text-white font-medium">{p.title}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${p.active ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                      {p.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(p)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors"><FiEdit2 size={14} /></button>
                      <button onClick={() => handleDelete(p._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
                    </div>
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

export default AdminCmsPage
