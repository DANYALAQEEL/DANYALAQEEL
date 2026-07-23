import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, RefreshCw } from 'lucide-react'
import { gateways as initialData, organizations } from '../../data/dummy'

export default function AdminGateways() {
  const [data, setData]         = useState(initialData)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState({ name:'', serial:'', model:'CF-G200', org:'', status:'Online' })

  const openAdd  = () => { setForm({ name:'', serial:'', model:'CF-G200', org:'', status:'Online' }); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name:row.name, serial:row.serial, model:row.model, org:row.org, status:row.status }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), devices:0, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete gateway "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const columns = [
    { key:'name',    label:'Gateway Name' },
    { key:'serial',  label:'Serial Number', render: v => <span className="font-mono text-xs text-surface-400">{v}</span> },
    { key:'model',   label:'Model' },
    { key:'org',     label:'Organization' },
    { key:'devices', label:'Devices', render: v => <span className="badge badge-info">{v}</span> },
    { key:'status',  label:'Status', render: v => <span className={`badge ${v === 'Online' ? 'badge-success' : 'badge-danger'}`}>{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Manage Gateways</h2>
          <p className="breadcrumb">Admin / Gateways</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Gateway
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search gateways..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-ghost p-1.5 text-info-600" title="Sync"><RefreshCw size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Gateway' : 'Edit Gateway'}
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
            <TextInput label="Gateway Name" required placeholder="e.g. CF-GW-001"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <TextInput label="Serial Number" required placeholder="e.g. SN-10021"
              value={form.serial} onChange={e => setForm(f => ({ ...f, serial: e.target.value }))} />
          </div>
          <SelectInput label="Organization" required
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            placeholder="Select organization"
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Model" value={form.model}
              onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
              options={['CF-G100', 'CF-G200', 'CF-G300']} />
            <SelectInput label="Status" value={form.status}
              onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              options={['Online', 'Offline']} />
          </div>
        </div>
      </Modal>

      <Modal open={modal === 'view'} onClose={close} title="Gateway Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Name',         selected.name],
              ['Serial',       selected.serial],
              ['Model',        selected.model],
              ['Organization', selected.org],
              ['Devices',      selected.devices],
              ['Status',       selected.status],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
