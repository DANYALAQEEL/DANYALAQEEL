import { useState, useEffect } from 'react'
import { fetchSeoSettings, updateSeoSettings } from '../../services/adminSettingsService'

function AdminSeoSettingsPage() {
  const [seo, setSeo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchSeoSettings().then(setSeo).catch((err) => setError(err.message)).finally(() => setLoading(false))
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    try {
      const updated = await updateSeoSettings(seo)
      setSeo(updated)
      setSaved(true)
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const inputClass = "bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary w-full"
  const labelClass = "text-xs text-gray-500 block mb-1"

  if (loading) return <p className="text-gray-500 text-sm">Loading SEO settings...</p>
  if (!seo) return <p className="text-gray-500 text-sm">No SEO settings found.</p>

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">SEO / Meta Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Default meta tags used across the storefront</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}
      {saved && <div className="bg-green-950 border border-green-800 text-green-400 text-sm rounded-xl px-4 py-3 mb-6">Saved successfully.</div>}

      <form onSubmit={handleSave} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 grid grid-cols-1 gap-4">
        <div><label className={labelClass}>Meta Title</label>
          <input className={inputClass} value={seo.metaTitle || ''} onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })} /></div>
        <div><label className={labelClass}>Meta Description</label>
          <textarea className={inputClass + ' min-h-[80px]'} value={seo.metaDescription || ''} onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })} /></div>
        <div><label className={labelClass}>Meta Keywords</label>
          <input className={inputClass} value={seo.metaKeywords || ''} onChange={(e) => setSeo({ ...seo, metaKeywords: e.target.value })} /></div>
        <div><label className={labelClass}>Canonical URL</label>
          <input className={inputClass} value={seo.canonicalUrl || ''} onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })} /></div>
        <div><label className={labelClass}>OG Image URL</label>
          <input className={inputClass} value={seo.ogImage || ''} onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })} /></div>
        <div><label className={labelClass}>Robots</label>
          <input className={inputClass} value={seo.robots || ''} onChange={(e) => setSeo({ ...seo, robots: e.target.value })} /></div>
        <button type="submit" disabled={saving}
          className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 w-fit">
          {saving ? 'Saving...' : 'Save SEO Settings'}
        </button>
      </form>
    </div>
  )
}

export default AdminSeoSettingsPage
