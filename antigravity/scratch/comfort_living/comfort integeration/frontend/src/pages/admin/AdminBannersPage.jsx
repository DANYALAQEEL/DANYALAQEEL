import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi'
import { fetchBanners, createBanner, updateBanner, deleteBanner } from '../../services/adminBannerService'
import { resolveImageUrl } from '../../services/adminApi'

const emptyForm = { title: '', subtitle: '', image: '', buttonText: 'Shop Now', buttonLink: '/shop', position: 1, active: true }

function AdminBannersPage() {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchBanners().then(setBanners).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  const [searchParams] = useSearchParams()
  useEffect(load, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (searchParams.get('new') === '1') openCreate() }, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (b) => {
    setEditingId(b._id)
    setFormData({ title: b.title, subtitle: b.subtitle, image: b.image, buttonText: b.buttonText, buttonLink: b.buttonLink, position: b.position, active: b.active })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateBanner(editingId, formData)
      else await createBanner(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this banner?')) return
    try { await deleteBanner(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Banners</h1>
          <p className="text-gray-500 text-sm mt-1">Manage homepage promotional banners</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <FiPlus size={16} /> Add Banner
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Banner' : 'Add New Banner'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Title" value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Subtitle" value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input required placeholder="Image URL (e.g. /uploads/banner1.jpg or https://...)" value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />
            <input placeholder="Button text" value={formData.buttonText}
              onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Button link" value={formData.buttonLink}
              onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input type="number" placeholder="Position (order)" value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
              Active
            </label>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update Banner' : 'Create Banner'}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading && <p className="text-gray-500 text-sm">Loading...</p>}
        {!loading && banners.length === 0 && <p className="text-gray-500 text-sm">No banners yet.</p>}
        {!loading && banners.map((b) => (
          <div key={b._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
            <img src={resolveImageUrl(b.image)} alt={b.title} className="w-full h-32 object-cover bg-[#1a2a3a]" />
            <div className="p-4">
              <p className="text-white font-medium text-sm">{b.title}</p>
              <p className="text-gray-500 text-xs mt-1">{b.subtitle}</p>
              <div className="flex items-center justify-between mt-3">
                <span className={`text-xs px-2.5 py-1 rounded-full ${b.active ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                  {b.active ? 'Active' : 'Inactive'}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => openEdit(b)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors"><FiEdit2 size={14} /></button>
                  <button onClick={() => handleDelete(b._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminBannersPage
