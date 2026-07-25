import { useState, useEffect } from 'react'
import { fetchWebsiteSettings, updateWebsiteSettings } from '../../services/adminSettingsService'

function AdminWebsiteSettingsPage() {
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchWebsiteSettings().then(setSettings).catch((err) => setError(err.message)).finally(() => setLoading(false))
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    try {
      const updated = await updateWebsiteSettings(settings)
      setSettings(updated)
      setSaved(true)
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  const inputClass = "bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary w-full"
  const labelClass = "text-xs text-gray-500 block mb-1"

  if (loading) return <p className="text-gray-500 text-sm">Loading settings...</p>
  if (!settings) return <p className="text-gray-500 text-sm">No settings found.</p>

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Website Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Store contact details, socials, and general configuration</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}
      {saved && <div className="bg-green-950 border border-green-800 text-green-400 text-sm rounded-xl px-4 py-3 mb-6">Saved successfully.</div>}

      <form onSubmit={handleSave} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className={labelClass}>Website Name</label>
          <input className={inputClass} value={settings.websiteName || ''} onChange={(e) => setSettings({ ...settings, websiteName: e.target.value })} /></div>
        <div><label className={labelClass}>Contact Email</label>
          <input className={inputClass} value={settings.contactEmail || ''} onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })} /></div>
        <div><label className={labelClass}>Phone</label>
          <input className={inputClass} value={settings.phone || ''} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} /></div>
        <div><label className={labelClass}>WhatsApp</label>
          <input className={inputClass} value={settings.whatsapp || ''} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} /></div>
        <div className="md:col-span-2"><label className={labelClass}>Address</label>
          <input className={inputClass} value={settings.address || ''} onChange={(e) => setSettings({ ...settings, address: e.target.value })} /></div>
        <div><label className={labelClass}>Facebook</label>
          <input className={inputClass} value={settings.facebook || ''} onChange={(e) => setSettings({ ...settings, facebook: e.target.value })} /></div>
        <div><label className={labelClass}>Instagram</label>
          <input className={inputClass} value={settings.instagram || ''} onChange={(e) => setSettings({ ...settings, instagram: e.target.value })} /></div>
        <div><label className={labelClass}>Twitter</label>
          <input className={inputClass} value={settings.twitter || ''} onChange={(e) => setSettings({ ...settings, twitter: e.target.value })} /></div>
        <div><label className={labelClass}>YouTube</label>
          <input className={inputClass} value={settings.youtube || ''} onChange={(e) => setSettings({ ...settings, youtube: e.target.value })} /></div>
        <div><label className={labelClass}>Currency</label>
          <input className={inputClass} value={settings.currency || ''} onChange={(e) => setSettings({ ...settings, currency: e.target.value })} /></div>
        <div><label className={labelClass}>Default Shipping Charge (Rs.)</label>
          <input type="number" className={inputClass} value={settings.shippingCharge || 0} onChange={(e) => setSettings({ ...settings, shippingCharge: e.target.value })} /></div>
        <div><label className={labelClass}>Tax Percentage</label>
          <input type="number" className={inputClass} value={settings.taxPercentage || 0} onChange={(e) => setSettings({ ...settings, taxPercentage: e.target.value })} /></div>
        <label className="flex items-center gap-2 text-sm text-gray-300 md:col-span-2">
          <input type="checkbox" checked={settings.maintenanceMode || false} onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })} />
          Maintenance mode
        </label>
        <button type="submit" disabled={saving}
          className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60 md:col-span-2 w-fit">
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  )
}

export default AdminWebsiteSettingsPage
