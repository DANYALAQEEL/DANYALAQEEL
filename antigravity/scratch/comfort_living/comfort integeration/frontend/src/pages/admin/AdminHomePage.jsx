import { useState, useEffect } from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi'
import { fetchHomeSections, createHomeSection, updateHomeSection, deleteHomeSection } from '../../services/adminHomeService'
import { resolveImageUrl } from '../../services/adminApi'

const emptyForm = { sectionKey: '', title: '', subtitle: '', content: '', image: '', buttonText: '', buttonLink: '', active: true }

function AdminHomePage() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchHomeSections().then(setSections).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (s) => {
    setEditingId(s._id)
    setFormData({
      sectionKey: s.sectionKey, title: s.title || '', subtitle: s.subtitle || '', content: s.content || '',
      image: s.image || '', buttonText: s.buttonText || '', buttonLink: s.buttonLink || '', active: s.active,
    })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateHomeSection(editingId, formData)
      else await createHomeSection(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this home page section?')) return
    try { await deleteHomeSection(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Home Page</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage homepage content sections (hero, featured, promo, etc.)
          </p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
          <FiPlus size={16} /> Add Section
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Section' : 'Add New Section'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Section key (e.g. hero, promo-banner)" value={formData.sectionKey} disabled={!!editingId}
              onChange={(e) => setFormData({ ...formData, sectionKey: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary disabled:opacity-50" />
            <input placeholder="Title" value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Subtitle" value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />
            <textarea placeholder="Content" value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary min-h-[90px] md:col-span-2" />
            <input placeholder="Image URL" value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />
            <input placeholder="Button text" value={formData.buttonText}
              onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Button link" value={formData.buttonLink}
              onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
              Active
            </label>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update Section' : 'Create Section'}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && sections.length === 0 && <p className="text-gray-500 text-sm">No sections yet.</p>}
        {!loading && sections.map((s) => (
          <div key={s._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
            {s.image && <img src={resolveImageUrl(s.image)} alt={s.title} className="w-full h-32 object-cover bg-[#1a2a3a]" />}
            <div className="p-4">
              <p className="text-xs text-gray-500 font-mono mb-1">{s.sectionKey}</p>
              <p className="text-white font-medium text-sm">{s.title}</p>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">{s.subtitle}</p>
              {!s.active && <span className="inline-block mt-1 text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full">Inactive</span>}
              <div className="flex justify-end gap-2 mt-3">
                <button onClick={() => openEdit(s)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors"><FiEdit2 size={14} /></button>
                <button onClick={() => handleDelete(s._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminHomePage
