import { useState } from 'react'
import { ToggleInput } from '../../components/ui/FormFields'
import { Globe, Shield, Bell, Database, Save } from 'lucide-react'

function Section({ icon: Icon, title, description, children, onSave }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-surface-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center">
            <Icon size={18} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-surface-900">{title}</h3>
            {description && <p className="text-xs text-surface-500 mt-0.5">{description}</p>}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
      <div className="mt-5 pt-4 border-t border-surface-200 flex justify-end">
        <button className="btn-primary text-xs" onClick={onSave}>
          <Save size={13} /> Save
        </button>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  )
}

export default function AdminSettings() {
  const [toast, setToast] = useState(null)

  const [platform, setPlatform] = useState({
    name: 'CF Smart EMS', supportEmail: 'support@cfsmart.com',
    supportPhone: '+92-300-0000000', language: 'English', timezone: 'Asia/Karachi',
  })

  const [security, setSecurity] = useState({
    sessionTimeout: '1 hour', twoFA: false,
    passwordExpiry: '90', lockoutAttempts: '5',
  })

  const [notifications, setNotifications] = useState({
    email: true, sms: true, whatsapp: false, frequency: 'Instant',
  })

  const [dataSettings, setDataSettings] = useState({
    retention: '1 year', autoExport: false, exportFormat: 'CSV',
  })

  const showToast = (section) => {
    setToast(`${section} settings saved successfully`)
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div>
      {toast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium shadow-lg bg-success-600 text-white flex items-center gap-2">
          <span>✓</span> {toast}
        </div>
      )}

      <div className="page-header">
        <div>
          <h2 className="page-title">Settings</h2>
          <p className="breadcrumb">Admin / System / Settings</p>
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">

        {/* Section 1 — Platform */}
        <Section icon={Globe} title="Platform Settings" description="General platform configuration" onSave={() => showToast('Platform')}>
          <Field label="Platform Name">
            <input className="input" value={platform.name}
              onChange={e => setPlatform(p => ({ ...p, name: e.target.value }))} />
          </Field>
          <Field label="Support Email">
            <input className="input" type="email" value={platform.supportEmail}
              onChange={e => setPlatform(p => ({ ...p, supportEmail: e.target.value }))} />
          </Field>
          <Field label="Support Phone">
            <input className="input" value={platform.supportPhone}
              onChange={e => setPlatform(p => ({ ...p, supportPhone: e.target.value }))} />
          </Field>
          <Field label="Default Language">
            <select className="select" value={platform.language}
              onChange={e => setPlatform(p => ({ ...p, language: e.target.value }))}>
              <option>English</option>
              <option>Urdu</option>
              <option>Arabic</option>
            </select>
          </Field>
          <Field label="Timezone">
            <select className="select" value={platform.timezone}
              onChange={e => setPlatform(p => ({ ...p, timezone: e.target.value }))}>
              <option>Asia/Karachi</option>
              <option>UTC</option>
              <option>Asia/Dubai</option>
            </select>
          </Field>
        </Section>

        {/* Section 2 — Security */}
        <Section icon={Shield} title="Security Settings" description="Authentication and access control" onSave={() => showToast('Security')}>
          <Field label="Session Timeout">
            <select className="select" value={security.sessionTimeout}
              onChange={e => setSecurity(s => ({ ...s, sessionTimeout: e.target.value }))}>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>4 hours</option>
              <option>8 hours</option>
            </select>
          </Field>
          <ToggleInput
            label="Two-Factor Authentication"
            description="Require 2FA for all admin logins"
            checked={security.twoFA}
            onChange={v => setSecurity(s => ({ ...s, twoFA: v }))}
          />
          <Field label="Password Expiry Days">
            <input className="input" type="number" value={security.passwordExpiry}
              onChange={e => setSecurity(s => ({ ...s, passwordExpiry: e.target.value }))} />
          </Field>
          <Field label="Failed Login Attempts Before Lockout">
            <select className="select" value={security.lockoutAttempts}
              onChange={e => setSecurity(s => ({ ...s, lockoutAttempts: e.target.value }))}>
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </select>
          </Field>
        </Section>

        {/* Section 3 — Notifications */}
        <Section icon={Bell} title="Notification Settings" description="Control how alerts are delivered" onSave={() => showToast('Notification')}>
          <ToggleInput label="Email Notifications" checked={notifications.email}
            onChange={v => setNotifications(n => ({ ...n, email: v }))} />
          <ToggleInput label="SMS Notifications" checked={notifications.sms}
            onChange={v => setNotifications(n => ({ ...n, sms: v }))} />
          <ToggleInput label="WhatsApp Notifications" checked={notifications.whatsapp}
            onChange={v => setNotifications(n => ({ ...n, whatsapp: v }))} />
          <Field label="Notification Frequency">
            <select className="select" value={notifications.frequency}
              onChange={e => setNotifications(n => ({ ...n, frequency: e.target.value }))}>
              <option>Instant</option>
              <option>Hourly Digest</option>
              <option>Daily Digest</option>
            </select>
          </Field>
        </Section>

        {/* Section 4 — Data */}
        <Section icon={Database} title="Data Settings" description="Data retention and export preferences" onSave={() => showToast('Data')}>
          <Field label="Data Retention Period">
            <select className="select" value={dataSettings.retention}
              onChange={e => setDataSettings(d => ({ ...d, retention: e.target.value }))}>
              <option>30 days</option>
              <option>90 days</option>
              <option>1 year</option>
              <option>Forever</option>
            </select>
          </Field>
          <ToggleInput
            label="Auto Export Data"
            description="Automatically export data on a scheduled basis"
            checked={dataSettings.autoExport}
            onChange={v => setDataSettings(d => ({ ...d, autoExport: v }))}
          />
          <Field label="Export Format">
            <select className="select" value={dataSettings.exportFormat}
              onChange={e => setDataSettings(d => ({ ...d, exportFormat: e.target.value }))}>
              <option>CSV</option>
              <option>Excel</option>
              <option>JSON</option>
            </select>
          </Field>
        </Section>

      </div>
    </div>
  )
}
