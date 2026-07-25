import { useState, useEffect } from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiRotateCcw, FiX } from 'react-icons/fi'
import {
  fetchTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember,
} from '../../services/adminTeamService'
import { resolveImageUrl } from '../../services/adminApi'

const emptyForm = {
  name: '', designation: '', bio: '', image: '',
  email: '', phone: '', linkedin: '', facebook: '',
  displayOrder: 0, active: true,
}

function AdminTeamPage() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchTeamMembers().then(setMembers).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  useEffect(load, [])

  const openCreate = () => { setEditingId(null); setFormData(emptyForm); setShowForm(true) }
  const openEdit = (m) => {
    setEditingId(m._id)
    setFormData({
      name: m.name || '', designation: m.designation || '', bio: m.bio || '', image: m.image || '',
      email: m.email || '', phone: m.phone || '', linkedin: m.linkedin || '', facebook: m.facebook || '',
      displayOrder: m.displayOrder || 0, active: m.active,
    })
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (editingId) await updateTeamMember(editingId, formData)
      else await createTeamMember(formData)
      setShowForm(false)
      load()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Remove this team member? They can be restored later.')) return
    try { await deleteTeamMember(id); load() } catch (err) { setError(err.message) }
  }

  const handleRestore = async (m) => {
    try { await updateTeamMember(m._id, { ...m, active: true }); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Team Members</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your "meet the team" section</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors shrink-0">
          <FiPlus size={16} /> Add Member
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Team Member' : 'Add Team Member'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Name" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input required placeholder="Designation (e.g. Founder, Sales Lead)" value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <textarea placeholder="Bio" value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2 min-h-[70px]" />
            <input placeholder="Image URL" value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />
            <input type="email" placeholder="Email" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Phone" value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="LinkedIn URL" value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input placeholder="Facebook URL" value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input type="number" placeholder="Display order" value={formData.displayOrder}
              onChange={(e) => setFormData({ ...formData, displayOrder: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" checked={formData.active} onChange={(e) => setFormData({ ...formData, active: e.target.checked })} />
              Active
            </label>
            <button type="submit" disabled={saving}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
              {saving ? 'Saving...' : editingId ? 'Update Member' : 'Add Member'}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading && <p className="text-gray-500 text-sm col-span-full">Loading...</p>}
        {!loading && members.length === 0 && <p className="text-gray-500 text-sm col-span-full">No team members yet.</p>}
        {!loading && members.map((m) => (
          <div key={m._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden text-center">
            {m.image ? (
              <img src={resolveImageUrl(m.image)} alt={m.name} className="w-full aspect-square object-cover" />
            ) : <div className="w-full aspect-square bg-[#1a2a3a]" />}
            <div className="p-3">
              <p className="text-white text-sm font-medium">{m.name}</p>
              <p className="text-gray-500 text-xs">{m.designation}</p>
              {!m.active && <span className="inline-block mt-1 text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full">Inactive</span>}
              <div className="flex justify-center gap-2 mt-3">
                <button onClick={() => openEdit(m)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors"><FiEdit2 size={14} /></button>
                {m.active ? (
                  <button onClick={() => handleDelete(m._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors"><FiTrash2 size={14} /></button>
                ) : (
                  <button onClick={() => handleRestore(m)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-green-600 hover:text-white transition-colors"><FiRotateCcw size={14} /></button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminTeamPage
