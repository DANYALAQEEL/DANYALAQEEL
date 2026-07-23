import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { alarmSettings as allSettings } from '../../data/dummy'

const ORG = 'Delicia Warehouse'
const FOUNDER = 'Miss Maryam'

const mySettings = allSettings.filter(s => s.org === ORG)

const emptyForm = () => ({
  name:      '',
  pushType:  'Template Trigger',
  pushMethod:'Email',
  mechanism: 'Instant',
  status:    'Active',
})

export default function OrgAlarmSettings() {
  const [data, setData]         = useState(mySettings)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(emptyForm())

  const openAdd  = () => { setForm(emptyForm()); setModal('add') }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name: row.name, pushType: row.pushType, pushMethod: row.pushMethod, mechanism: row.mechanism, status: row.status })
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const now = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), org: ORG, founder: FOUNDER, updatedAt: now, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete alarm setting "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const f = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  const columns = [
    { key: 'name',      label: 'Configuration Name' },
    { key: 'pushType',  label: 'Push Type',      render: v => <span className="badge badge-info">{v}</span> },
    { key: 'pushMethod',label: 'Push Method',     render: v => <span className="badge badge-neutral">{v}</span> },
    { key: 'mechanism', label: 'Mechanism',       render: v => <span className={`badge ${v === 'Instant' ? 'badge-success' : 'badge-warning'}`}>{v}</span> },
    { key: 'status',    label: 'Status',          render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-danger'}`}>{v}</span> },
    { key: 'updatedAt', label: 'Updated',         render: v => <span className="text-xs text-surface-400">{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Alarm Settings</h2>
          <p className="breadcrumb">Organization / Alarm Settings</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Configuration
        </button>
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
        title={modal === 'add' ? 'Add Alarm Configuration' : 'Edit Alarm Configuration'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Configuration Name" required placeholder="e.g. High Current Alert"
            value={form.name} onChange={f('name')} />
          <SelectInput label="Push Type" value={form.pushType} onChange={f('pushType')}
            options={['Template Trigger']} />
          <SelectInput label="Push Method" value={form.pushMethod} onChange={f('pushMethod')}
            options={['Email', 'SMS', 'WhatsApp']} />
          <SelectInput label="Pushing Mechanism" value={form.mechanism} onChange={f('mechanism')}
            options={['Instant', 'Delayed']} />
          <SelectInput label="Status" value={form.status} onChange={f('status')}
            options={['Active', 'Inactive']} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Alarm Configuration Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Name',       selected.name],
              ['Push Type',  selected.pushType],
              ['Push Method',selected.pushMethod],
              ['Mechanism',  selected.mechanism],
              ['Status',     selected.status],
              ['Updated At', selected.updatedAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-200">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
