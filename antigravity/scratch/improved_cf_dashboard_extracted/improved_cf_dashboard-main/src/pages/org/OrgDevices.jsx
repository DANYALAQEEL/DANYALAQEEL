import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, ToggleInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, BarChart2 } from 'lucide-react'
import { devices as allDevices, gateways, deviceTemplates } from '../../data/dummy'

const myDevices = allDevices.filter(d => d.org === 'Delicia Warehouse')

export default function OrgDevices() {
  const [data, setData]         = useState(myDevices)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState({ name:'', gateway:'', template:'', switchOn:true })

  const openAdd  = () => { setForm({ name:'', gateway:'', template:'', switchOn:true }); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name:row.name, gateway:row.gateway, template:row.template, switchOn:row.switchOn }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), org:'Delicia Warehouse', status:'Offline', ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const columns = [
    { key:'name',     label:'Device Name' },
    { key:'gateway',  label:'Gateway' },
    { key:'template', label:'Template', render: v => <span className="text-xs text-surface-400 truncate max-w-xs block">{v}</span> },
    { key:'status',   label:'Status', render: v => <span className={`badge ${v === 'Online' ? 'badge-success' : 'badge-danger'}`}>{v}</span> },
    { key:'switchOn', label:'Switch', render: v => <span className={`badge ${v ? 'badge-success' : 'badge-neutral'}`}>{v ? 'On' : 'Off'}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">My Devices</h2>
          <p className="breadcrumb">Organization / Devices</p>
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
            <button className="btn-ghost p-1.5 text-primary-600" title="Data"><BarChart2 size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => setData(d => d.filter(r => r.id !== row.id))} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Device' : 'Edit Device'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Device Name" required placeholder="e.g. Main Wapda"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <SelectInput label="Device Template" required placeholder="Select template"
              value={form.template} onChange={e => setForm(f => ({ ...f, template: e.target.value }))}
              options={deviceTemplates.map(t => ({ value:t.name, label:t.name }))} />
          </div>
          <SelectInput label="Gateway" required placeholder="Select gateway"
            value={form.gateway} onChange={e => setForm(f => ({ ...f, gateway: e.target.value }))}
            options={gateways.filter(g => g.org === 'Delicia Warehouse').map(g => ({ value:g.name, label:g.name }))} />
          <ToggleInput label="Switch On" checked={form.switchOn} onChange={v => setForm(f => ({ ...f, switchOn:v }))} description="Enable remote switch control for this device" />
        </div>
      </Modal>

      <Modal open={modal === 'view'} onClose={close} title="Device Details">
        {selected && (
          <div className="space-y-3">
            {[['Name', selected.name],['Gateway', selected.gateway],['Template', selected.template],['Status', selected.status]].map(([l,v]) => (
              <div key={l} className="flex gap-4">
                <span className="text-xs text-surface-500 w-24 flex-shrink-0">{l}</span>
                <span className="text-xs text-surface-800">{v}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
