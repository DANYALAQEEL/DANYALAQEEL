import { useState } from 'react'
import { ToggleInput, TextInput, SelectInput, TextareaInput } from '../../components/ui/FormFields'
import { Save, CheckCircle } from 'lucide-react'

function SectionCard({ title, description, children, onSave, saved }) {
  return (
    <div className="card mb-5">
      <div className="p-5 border-b border-surface-800">
        <h3 className="text-sm font-semibold text-surface-100">{title}</h3>
        {description && <p className="text-xs text-surface-500 mt-0.5">{description}</p>}
      </div>
      <div className="p-5 space-y-4">
        {children}
      </div>
      <div className="px-5 pb-5 flex items-center justify-between">
        <div className={`flex items-center gap-2 text-xs transition-opacity duration-500 ${saved ? 'opacity-100 text-success-400' : 'opacity-0'}`}>
          <CheckCircle size={14} />
          <span>Saved successfully</span>
        </div>
        <button className="btn-primary" onClick={onSave}>
          <Save size={14} /> Save Changes
        </button>
      </div>
    </div>
  )
}

export default function OrgSettings() {
  const [saved, setSaved] = useState({ profile: false, notifications: false, display: false })

  const triggerSave = (section) => {
    setSaved(s => ({ ...s, [section]: true }))
    setTimeout(() => setSaved(s => ({ ...s, [section]: false })), 3000)
  }

  // Section 1: Profile
  const [profile, setProfile] = useState({
    name: 'Delicia Warehouse',
    email: 'admin@delicia.com',
    phone: '+92-306-7890123',
    address: 'Industrial Zone, Rawalpindi, Punjab, Pakistan',
    industry: 'Manufacturing',
  })

  // Section 2: Notifications
  const [notifications, setNotifications] = useState({
    emailAlerts:    true,
    smsAlerts:      false,
    whatsappAlerts: false,
    frequency:      'Instant',
    recipients:     'maryam@delicia.com, admin@delicia.com',
  })

  // Section 3: Display
  const [display, setDisplay] = useState({
    dateFormat:  'DD/MM/YYYY',
    timeFormat:  '12-hour',
    energyUnit:  'kWh',
    currency:    'PKR',
  })

  const pf = (k) => (e) => setProfile(p => ({ ...p, [k]: e.target.value }))
  const nf = (k) => (e) => setNotifications(n => ({ ...n, [k]: e.target.value }))
  const df = (k) => (e) => setDisplay(d => ({ ...d, [k]: e.target.value }))

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Settings</h2>
          <p className="breadcrumb">Organization / Settings</p>
        </div>
      </div>

      {/* Section 1: Organization Profile */}
      <SectionCard
        title="Organization Profile"
        description="Basic information about your organization"
        onSave={() => triggerSave('profile')}
        saved={saved.profile}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput label="Organization Name" required
            value={profile.name} onChange={pf('name')} />
          <TextInput label="Contact Email" required type="email"
            value={profile.email} onChange={pf('email')} />
          <TextInput label="Contact Phone" type="tel"
            value={profile.phone} onChange={pf('phone')} />
          <SelectInput label="Industry" value={profile.industry} onChange={pf('industry')}
            options={['Manufacturing', 'Energy', 'Education', 'Healthcare', 'Retail', 'F&B', 'Other']} />
        </div>
        <TextareaInput label="Address" rows={2}
          value={profile.address} onChange={pf('address')} />
      </SectionCard>

      {/* Section 2: Notification Preferences */}
      <SectionCard
        title="Notification Preferences"
        description="Configure how and when you receive alerts"
        onSave={() => triggerSave('notifications')}
        saved={saved.notifications}
      >
        <div className="space-y-1 divide-y divide-surface-800/50">
          <ToggleInput
            label="Receive Email Alerts"
            description="Get alarm notifications via email"
            checked={notifications.emailAlerts}
            onChange={v => setNotifications(n => ({ ...n, emailAlerts: v }))}
          />
          <ToggleInput
            label="Receive SMS Alerts"
            description="Get alarm notifications via SMS"
            checked={notifications.smsAlerts}
            onChange={v => setNotifications(n => ({ ...n, smsAlerts: v }))}
          />
          <ToggleInput
            label="Receive WhatsApp Alerts"
            description="Get alarm notifications via WhatsApp"
            checked={notifications.whatsappAlerts}
            onChange={v => setNotifications(n => ({ ...n, whatsappAlerts: v }))}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <SelectInput label="Alert Frequency" value={notifications.frequency} onChange={nf('frequency')}
            options={['Instant', 'Hourly', 'Daily']} />
          <TextInput label="Alert Email Recipients" placeholder="Comma-separated emails"
            value={notifications.recipients} onChange={nf('recipients')} />
        </div>
      </SectionCard>

      {/* Section 3: Display Preferences */}
      <SectionCard
        title="Display Preferences"
        description="Customize how data is displayed across the dashboard"
        onSave={() => triggerSave('display')}
        saved={saved.display}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectInput label="Date Format" value={display.dateFormat} onChange={df('dateFormat')}
            options={['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD']} />
          <SelectInput label="Time Format" value={display.timeFormat} onChange={df('timeFormat')}
            options={['12-hour', '24-hour']} />
          <SelectInput label="Energy Unit" value={display.energyUnit} onChange={df('energyUnit')}
            options={['kWh', 'MWh']} />
          <SelectInput label="Currency" value={display.currency} onChange={df('currency')}
            options={['PKR', 'USD', 'AED']} />
        </div>
      </SectionCard>
    </div>
  )
}
