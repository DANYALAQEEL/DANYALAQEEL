import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, TextareaInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, List } from 'lucide-react'
import { deviceTemplates as initialData, organizations } from '../../data/dummy'

const VARIABLES = [
  'Voltage Phase A', 'Voltage Phase B', 'Voltage Phase C',
  'Current Phase A', 'Current Phase B', 'Current Phase C',
  'Active Power', 'Reactive Power', 'Power Factor',
  'Frequency', 'kWh Import', 'kWh Export',
]

const blank = { name: '', org: '', method: 'Modbus RTU', description: '' }

export default function AdminDeviceTemplates() {
  const [data, setData]         = useState(initialData)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blank)

  const openAdd       = () => { setForm(blank); setModal('add') }
  const openEdit      = (row) => { setSelected(row); setForm({ name: row.name, org: row.org, method: row.method, description: row.description || '' }); setModal('edit') }
  const openView      = (row) => { setSelected(row); setModal('view') }
  const openVariables = (row) => { setSelected(row); setModal('variables') }
  const close         = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const now = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), variables: 12, devices: 0, updatedAt: now, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete template "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const columns = [
    { key: 'name',      label: 'Template Name' },
    { key: 'org',       label: 'Organization' },
    { key: 'variables', label: 'Variables', render: v => <span className="badge badge-info">{v}</span> },
    { key: 'devices',   label: 'Devices',   render: v => <span className="badge badge-neutral">{v}</span> },
    { key: 'method',    label: 'Communication Method' },
    { key: 'updatedAt', label: 'Last Updated' },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Device Templates</h2>
          <p className="breadcrumb">Admin / Device Templates</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Template</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search templates..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-ghost p-1.5 text-info-600" onClick={() => openVariables(row)} title="Variables"><List size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Template' : 'Edit Template'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Template Name" required placeholder="e.g. CF Smart Main Panel"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <SelectInput label="Organization" placeholder="Select organization"
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          <SelectInput label="Communication Method"
            value={form.method} onChange={e => setForm(f => ({ ...f, method: e.target.value }))}
            options={['Modbus RTU', 'Modbus TCP', 'Modbus ASCII']} />
          <TextareaInput label="Description" placeholder="Template description..."
            value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        </div>
      </Modal>

      {/* View */}
      <Modal open={modal === 'view'} onClose={close} title="Template Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Template Name', selected.name],
              ['Organization', selected.org],
              ['Variables', selected.variables],
              ['Devices', selected.devices],
              ['Method', selected.method],
              ['Last Updated', selected.updatedAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>

      {/* Variables sub-modal */}
      <Modal open={modal === 'variables'} onClose={close} title={`Variables — ${selected?.name}`} size="sm">
        <div className="space-y-1">
          {VARIABLES.map((v, i) => (
            <div key={v} className="flex items-center gap-3 py-1.5 border-b border-surface-200 last:border-0">
              <span className="text-xs text-surface-500 w-5 flex-shrink-0">{i + 1}</span>
              <span className="text-sm text-surface-800">{v}</span>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}
