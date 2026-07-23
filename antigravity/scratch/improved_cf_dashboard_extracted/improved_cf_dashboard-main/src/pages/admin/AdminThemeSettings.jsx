import { useState } from 'react'
import { ToggleInput, SelectInput } from '../../components/ui/FormFields'
import { Save, Palette } from 'lucide-react'

export default function AdminThemeSettings() {
  const [form, setForm] = useState({
    platformName: 'CF Smart EMS',
    primaryColor: '#7c3aed',
    secondaryColor: '#0ea5e9',
    sidebarColor: 'Dark',
    fontFamily: 'Inter',
    darkModeDefault: true,
    showLogo: true,
  })
  const [toast, setToast] = useState(false)

  const handleSave = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium shadow-lg bg-success-600 text-white flex items-center gap-2">
          <span>✓</span> Theme settings saved successfully
        </div>
      )}

      <div className="page-header">
        <div>
          <h2 className="page-title">Theme Settings</h2>
          <p className="breadcrumb">Admin / System / Theme Settings</p>
        </div>
      </div>

      <div className="card p-6 max-w-2xl">
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-surface-200">
          <div className="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center">
            <Palette size={18} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-surface-900">Platform Theme</h3>
            <p className="text-xs text-surface-500 mt-0.5">Customize the look and feel of the platform</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Platform Name */}
          <div>
            <label className="label">Platform Name</label>
            <input className="input" value={form.platformName}
              onChange={e => setForm(f => ({ ...f, platformName: e.target.value }))} />
          </div>

          {/* Platform Logo */}
          <div>
            <label className="label">Platform Logo</label>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-surface-100 border border-surface-200 flex items-center justify-center text-surface-500 text-xs">
                Logo
              </div>
              <label className="btn-secondary cursor-pointer text-xs">
                Choose File
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <span className="text-xs text-surface-500">PNG, SVG recommended</span>
            </div>
          </div>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Primary Color</label>
              <div className="flex items-center gap-2">
                <input type="color" value={form.primaryColor}
                  onChange={e => setForm(f => ({ ...f, primaryColor: e.target.value }))}
                  className="w-9 h-9 rounded cursor-pointer bg-surface-100 border border-surface-200 p-0.5" />
                <input className="input flex-1 font-mono text-xs" value={form.primaryColor}
                  onChange={e => setForm(f => ({ ...f, primaryColor: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className="label">Secondary Color</label>
              <div className="flex items-center gap-2">
                <input type="color" value={form.secondaryColor}
                  onChange={e => setForm(f => ({ ...f, secondaryColor: e.target.value }))}
                  className="w-9 h-9 rounded cursor-pointer bg-surface-100 border border-surface-200 p-0.5" />
                <input className="input flex-1 font-mono text-xs" value={form.secondaryColor}
                  onChange={e => setForm(f => ({ ...f, secondaryColor: e.target.value }))} />
              </div>
            </div>
          </div>

          {/* Sidebar Color */}
          <div>
            <label className="label">Sidebar Color</label>
            <select className="select"
              value={form.sidebarColor}
              onChange={e => setForm(f => ({ ...f, sidebarColor: e.target.value }))}>
              <option>Dark</option>
              <option>Light</option>
              <option>Custom</option>
            </select>
          </div>

          {/* Font Family */}
          <div>
            <label className="label">Font Family</label>
            <select className="select"
              value={form.fontFamily}
              onChange={e => setForm(f => ({ ...f, fontFamily: e.target.value }))}>
              <option>Inter</option>
              <option>Roboto</option>
              <option>Open Sans</option>
              <option>Poppins</option>
            </select>
          </div>

          {/* Toggles */}
          <div className="space-y-1 pt-2 border-t border-surface-200">
            <ToggleInput
              label="Dark Mode Default"
              description="Enable dark mode by default for all users"
              checked={form.darkModeDefault}
              onChange={v => setForm(f => ({ ...f, darkModeDefault: v }))}
            />
            <ToggleInput
              label="Show Logo in Sidebar"
              description="Display platform logo in the sidebar header"
              checked={form.showLogo}
              onChange={v => setForm(f => ({ ...f, showLogo: v }))}
            />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-surface-200 flex justify-end">
          <button className="btn-primary" onClick={handleSave}>
            <Save size={15} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
