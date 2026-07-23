import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, ToggleInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { alarmSettings as initialRaw, organizations } from '../../data/dummy'

const initialData = initialRaw.map(r => ({ ...r }))

const blankForm = {
  name: '', org: '', pushType: 'Template Trigger', pushMethod: 'Email',
  mechanism: 'Instant', delay: '', status: 'Active',
}

export default function AdminAlarmSettings() {
  const [data, setData]         = useState(initialData)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blankForm)
  const [toast, setToast]       = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const openAdd  = () => { setForm(blankForm); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ ...row }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (!form.name.trim()) return
    const now = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { ...form, id: Date.now(), updatedAt: now }])
      showToast('Alarm setting created successfully')
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
      showToast('Alarm setting updated successfully')
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete alarm setting "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
      showToast('Alarm setting deleted', 'danger')
    }
  }

  const columns = [
    { key: 'name',       label: 'Setting Name' },
    { key: 'org',        label: 'Organization' },
    { key: 'pushType',   label: 'Push Type' },
    { key: 'pushMethod', label: 'Push Method', render: v => <span className="badge badge-info">{v}</span> },
    { key: 'mechanism',  label: 'Alarm Mechanism', render: v =>
        <span className={`badge ${v === 'Instant' ? 'badge-warning' : 'badge-neutral'}`}>{v}</span> },
    { key: 'status',     label: 'Status', render: v =>
        <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key: 'updatedAt',  label: 'Last Updated' },
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
          <h2 className="page-title">Alarm Settings</h2>
          <p className="breadcrumb">Admin / Alarms / Alarm Settings</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Setting</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search alarm settings..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Alarm Setting' : 'Edit Alarm Setting'}
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
            <TextInput label="Setting Name" required placeholder="e.g. Overvoltage Alert"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <SelectInput label="Organization" required placeholder="Select organization"
              value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
              options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Push Type" value={form.pushType}
              onChange={e => setForm(f => ({ ...f, pushType: e.target.value }))}
              options={['Template Trigger', 'Custom']} />
            <SelectInput label="Push Method" value={form.pushMethod}
              onChange={e => setForm(f => ({ ...f, pushMethod: e.target.value }))}
              options={['Email', 'SMS', 'WhatsApp', 'All']} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Alarm Mechanism" value={form.mechanism}
              onChange={e => setForm(f => ({ ...f, mechanism: e.target.value }))}
              options={['Instant', 'Delayed']} />
            {form.mechanism === 'Delayed' ? (
              <TextInput label="Delay Duration" placeholder="e.g. 5 minutes"
                value={form.delay} onChange={e => setForm(f => ({ ...f, delay: e.target.value }))} />
            ) : <div />}
          </div>
          <ToggleInput label="Status (Active)" checked={form.status === 'Active'}
            onChange={v => setForm(f => ({ ...f, status: v ? 'Active' : 'Inactive' }))} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Alarm Setting Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Setting Name', selected.name],
              ['Organization', selected.org],
              ['Push Type', selected.pushType],
              ['Push Method', selected.pushMethod],
              ['Mechanism', selected.mechanism],
              ...(selected.mechanism === 'Delayed' ? [['Delay Duration', selected.delay]] : []),
              ['Status', selected.status],
              ['Last Updated', selected.updatedAt],
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
