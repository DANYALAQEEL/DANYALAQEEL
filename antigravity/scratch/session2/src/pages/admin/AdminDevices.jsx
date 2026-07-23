import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, ToggleInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, BarChart2 } from 'lucide-react'
import { devices as initialData, organizations, gateways, deviceTemplates } from '../../data/dummy'

const blank = { name: '', org: '', gateway: '', template: '', switchOn: false }

export default function AdminDevices() {
  const navigate = useNavigate()
  const [data, setData]         = useState(initialData)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blank)

  const openAdd  = () => { setForm(blank); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name: row.name, org: row.org, gateway: row.gateway, template: row.template, switchOn: row.switchOn }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), status: 'Offline', ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete device "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const columns = [
    { key: 'name',     label: 'Device Name' },
    { key: 'org',      label: 'Organization' },
    { key: 'gateway',  label: 'Gateway' },
    { key: 'template', label: 'Template', render: v => <span className="text-surface-400 text-xs">{v}</span> },
    { key: 'status',   label: 'Status',   render: v => <span className={`badge ${v === 'Online' ? 'badge-success' : 'badge-danger'}`}>{v}</span> },
    { key: 'switchOn', label: 'Switch',   render: v => <span className={`badge ${v ? 'badge-success' : 'badge-neutral'}`}>{v ? 'On' : 'Off'}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Manage Devices</h2>
          <p className="breadcrumb">Admin / Devices</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Device</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search devices..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-ghost p-1.5 text-info-600" onClick={() => navigate('/admin/data-center')} title="Data Center"><BarChart2 size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Device' : 'Edit Device'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Device Name" required placeholder="e.g. Main Wapda"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <SelectInput label="Organization" required placeholder="Select organization"
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          <SelectInput label="Gateway" required placeholder="Select gateway"
            value={form.gateway} onChange={e => setForm(f => ({ ...f, gateway: e.target.value }))}
            options={gateways.map(g => ({ value: g.name, label: g.name }))} />
          <SelectInput label="Device Template" placeholder="Select template"
            value={form.template} onChange={e => setForm(f => ({ ...f, template: e.target.value }))}
            options={deviceTemplates.map(t => ({ value: t.name, label: t.name }))} />
          <ToggleInput label="Switch On" checked={form.switchOn}
            onChange={v => setForm(f => ({ ...f, switchOn: v }))} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Device Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Device Name', selected.name],
              ['Organization', selected.org],
              ['Gateway', selected.gateway],
              ['Template', selected.template],
              ['Status', selected.status],
              ['Switch', selected.switchOn ? 'On' : 'Off'],
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
