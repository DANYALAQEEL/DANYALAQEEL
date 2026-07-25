import { useState, useEffect } from 'react'
import { fetchAbout, updateAbout } from '../../services/adminAboutService'

const emptyForm = { heroTitle: '', heroSubtitle: '', introText: '', mission: '', vision: '', values: '' }

function AdminAboutPage() {
  const [formData, setFormData] = useState(emptyForm)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchAbout()
      .then((data) => {
        if (data) {
          setFormData({
            heroTitle: data.heroTitle || '', heroSubtitle: data.heroSubtitle || '',
            introText: data.introText || '', mission: data.mission || '',
            vision: data.vision || '', values: data.values || '',
          })
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    try {
      await updateAbout(formData)
      setSaved(true)
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const inputClass = "bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary w-full"
  const labelClass = "text-xs text-gray-500 block mb-1"

  if (loading) return <p className="text-gray-500 text-sm">Loading...</p>

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">About Us</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your About page content</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}
      {saved && <div className="bg-green-950 border border-green-800 text-green-400 text-sm rounded-xl px-4 py-3 mb-6">Saved successfully.</div>}

      <form onSubmit={handleSave} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 grid grid-cols-1 gap-4">
        <div><label className={labelClass}>Hero Title</label>
          <input className={inputClass} value={formData.heroTitle} onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })} /></div>
        <div><label className={labelClass}>Hero Subtitle</label>
          <input className={inputClass} value={formData.heroSubtitle} onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })} /></div>
        <div><label className={labelClass}>Intro Text</label>
          <textarea className={inputClass + ' min-h-[90px]'} value={formData.introText} onChange={(e) => setFormData({ ...formData, introText: e.target.value })} /></div>
        <div><label className={labelClass}>Mission</label>
          <textarea className={inputClass + ' min-h-[70px]'} value={formData.mission} onChange={(e) => setFormData({ ...formData, mission: e.target.value })} /></div>
        <div><label className={labelClass}>Vision</label>
          <textarea className={inputClass + ' min-h-[70px]'} value={formData.vision} onChange={(e) => setFormData({ ...formData, vision: e.target.value })} /></div>
        <div><label className={labelClass}>Values</label>
          <textarea className={inputClass + ' min-h-[70px]'} value={formData.values} onChange={(e) => setFormData({ ...formData, values: e.target.value })} /></div>
        <button type="submit" disabled={saving}
          className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 w-fit">
          {saving ? 'Saving...' : 'Save About Page'}
        </button>
      </form>
    </div>
  )
}

export default AdminAboutPage
