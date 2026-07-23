import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, TextareaInput, ToggleInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, ToggleLeft, ToggleRight } from 'lucide-react'
import { alarmSettings, organizations, deviceTemplates } from '../../data/dummy'

const extraRows = [
  { id: 101, name: 'Low Power Factor',   org: 'FICO',            template: 'Fico Furnace',       variable: 'Power Factor',      condition: 'Less Than',    threshold: '0.85', methods: ['Email', 'WhatsApp'], message: 'Power factor is below threshold.', status: 'Active' },
  { id: 102, name: 'Phase Imbalance',    org: 'Supra Steel',     template: 'Fico Furnace',       variable: 'Voltage Phase A',   condition: 'Greater Than', threshold: '250',  methods: ['SMS'],              message: 'Phase imbalance detected.',        status: 'Active' },
  { id: 103, name: 'Overtemperature',    org: 'NUST',            template: 'EMS PANEL',          variable: 'Temperature',       condition: 'Greater Than', threshold: '75',   methods: ['Email', 'SMS'],     message: 'Temperature exceeded limit.',      status: 'Inactive' },
]

const base = alarmSettings.map((r, i) => ({
  id: r.id,
  name: r.name,
  org: r.org,
  template: deviceTemplates[i % deviceTemplates.length].name,
  variable: ['Voltage Phase A', 'Current Phase B', 'Active Power'][i % 3],
  condition: ['Greater Than', 'Less Than', 'Equal To'][i % 3],
  threshold: ['240', '25', '100'][i % 3],
  methods: r.pushMethod === 'Email' ? ['Email'] : r.pushMethod === 'SMS' ? ['SMS'] : ['WhatsApp'],
  message: `Alert: ${r.name} triggered.`,
  status: r.status,
}))

const initialData = [...base, ...extraRows]

const blankForm = {
  name: '', org: '', template: '', variable: '', condition: 'Greater Than',
  threshold: '', methods: [], message: '', status: 'Active',
}

const CONDITIONS = ['Greater Than', 'Less Than', 'Equal To', 'Greater or Equal', 'Less or Equal']
const METHODS = ['Email', 'SMS', 'WhatsApp']

export default function AdminTemplateTriggers() {
  const [data, setData]       = useState(initialData)
  const [modal, setModal]     = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]       = useState(blankForm)
  const [toast, setToast]     = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const openAdd  = () => { setForm(blankForm); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ ...row }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const toggleMethod = (m) => {
    setForm(f => ({
      ...f,
      methods: f.methods.includes(m) ? f.methods.filter(x => x !== m) : [...f.methods, m],
    }))
  }

  const handleSave = () => {
    if (!form.name.trim()) return
    if (modal === 'add') {
      setData(d => [...d, { ...form, id: Date.now() }])
      showToast('Trigger created successfully')
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
      showToast('Trigger updated successfully')
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete trigger "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
      showToast('Trigger deleted', 'danger')
    }
  }

  const handleToggle = (row) => {
    setData(d => d.map(r => r.id === row.id
      ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' }
      : r
    ))
  }

  const methodBadge = (methods) => (
    <div className="flex gap-1 flex-wrap">
      {methods.map(m => (
        <span key={m} className={`badge ${m === 'Email' ? 'badge-info' : m === 'SMS' ? 'badge-warning' : 'badge-success'}`}>{m}</span>
      ))}
    </div>
  )

  const columns = [
    { key: 'name',      label: 'Trigger Name' },
    { key: 'org',       label: 'Organization' },
    { key: 'template',  label: 'Device Template' },
    { key: 'variable',  label: 'Variable Name' },
    { key: 'condition', label: 'Condition', render: v => <span className="badge badge-info">{v}</span> },
    { key: 'threshold', label: 'Threshold' },
    { key: 'methods',   label: 'Push Method', render: v => methodBadge(v) },
    { key: 'status',    label: 'Status', render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
  ]

  return (
    <div>
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium shadow-lg ${toast.type === 'danger' ? 'bg-danger-600 text-white' : 'bg-success-600 text-white'}`}>
          {toast.msg}
        </div>
      )}

      <div className="page-header">
        <div>
          <h2 className="page-title">Template Triggers</h2>
          <p className="breadcrumb">Admin / Alarms / Template Triggers</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Trigger</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search triggers..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => handleToggle(row)} title="Toggle Status">
              {row.status === 'Active'
                ? <ToggleRight size={14} className="text-success-600" />
                : <ToggleLeft size={14} className="text-surface-500" />}
            </button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Template Trigger' : 'Edit Template Trigger'}
        size="lg"
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>
              {modal === 'add' ? 'Create' : 'Save Changes'}
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Trigger Name" required placeholder="e.g. Overvoltage Alert"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <SelectInput label="Organization" required placeholder="Select organization"
              value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
              options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Device Template" required placeholder="Select template"
              value={form.template} onChange={e => setForm(f => ({ ...f, template: e.target.value }))}
              options={deviceTemplates.map(t => ({ value: t.name, label: t.name }))} />
            <TextInput label="Variable Name" placeholder="e.g. Voltage Phase A"
              value={form.variable} onChange={e => setForm(f => ({ ...f, variable: e.target.value }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Condition" value={form.condition}
              onChange={e => setForm(f => ({ ...f, condition: e.target.value }))}
              options={CONDITIONS} />
            <TextInput label="Threshold Value" placeholder="e.g. 240"
              value={form.threshold} onChange={e => setForm(f => ({ ...f, threshold: e.target.value }))} />
          </div>

          <div>
            <label className="label">Push Method</label>
            <div className="flex gap-4 mt-1">
              {METHODS.map(m => (
                <label key={m} className="flex items-center gap-2 cursor-pointer text-sm text-surface-700">
                  <input
                    type="checkbox"
                    checked={form.methods.includes(m)}
                    onChange={() => toggleMethod(m)}
                    className="accent-primary-500"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          <TextareaInput label="Notification Message" placeholder="Enter message..."
            value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
          <ToggleInput label="Status (Active)" checked={form.status === 'Active'}
            onChange={v => setForm(f => ({ ...f, status: v ? 'Active' : 'Inactive' }))} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Trigger Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Trigger Name', selected.name],
              ['Organization', selected.org],
              ['Device Template', selected.template],
              ['Variable Name', selected.variable],
              ['Condition', selected.condition],
              ['Threshold', selected.threshold],
              ['Push Methods', selected.methods?.join(', ')],
              ['Message', selected.message],
              ['Status', selected.status],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-32 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
