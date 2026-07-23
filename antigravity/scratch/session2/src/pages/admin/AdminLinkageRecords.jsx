import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, ToggleLeft, ToggleRight } from 'lucide-react'
import { devices } from '../../data/dummy'

const INITIAL_RECORDS = [
  { id:1, name:'Overload Shutoff',   srcDevice:'Main Wapda',     srcVar:'Current Phase A', condition:'>',  threshold:'30A',  tgtDevice:'CF Smart Panel',  action:'Turn Off', status:'Active',   createdAt:'2026-05-10' },
  { id:2, name:'Low Voltage Alert',  srcDevice:'CF Smart Panel', srcVar:'Voltage Phase A', condition:'<',  threshold:'210V', tgtDevice:'Fico Furnace 1',  action:'Turn Off', status:'Active',   createdAt:'2026-05-15' },
  { id:3, name:'Gen Auto Start',     srcDevice:'EMS Panel',      srcVar:'Voltage Phase B', condition:'<',  threshold:'200V', tgtDevice:'C Power Gen',     action:'Turn On',  status:'Active',   createdAt:'2026-05-20' },
  { id:4, name:'Backup Pump Switch', srcDevice:'Main Wapda',     srcVar:'Power Factor',    condition:'<',  threshold:'0.80', tgtDevice:'Supra Furnace A', action:'Turn On',  status:'Inactive', createdAt:'2026-06-01' },
]

const blank = { name: '', srcDevice: '', srcVar: '', condition: '>', threshold: '', tgtDevice: '', action: 'Turn Off', status: 'Active' }

export default function AdminLinkageRecords() {
  const [data, setData]         = useState(INITIAL_RECORDS)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blank)

  const openAdd  = () => { setForm(blank); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name: row.name, srcDevice: row.srcDevice, srcVar: row.srcVar, condition: row.condition, threshold: row.threshold, tgtDevice: row.tgtDevice, action: row.action, status: row.status }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const today = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), createdAt: today, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete linkage "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const toggleStatus = (row) => {
    setData(d => d.map(r => r.id === row.id ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' } : r))
  }

  const columns = [
    { key: 'name',      label: 'Linkage Name' },
    { key: 'srcDevice', label: 'Source Device' },
    { key: 'srcVar',    label: 'Source Variable' },
    { key: 'condition', label: 'Condition', render: v => <span className="font-mono badge badge-info">{v}</span> },
    { key: 'threshold', label: 'Threshold', render: v => <span className="font-mono text-xs">{v}</span> },
    { key: 'tgtDevice', label: 'Target Device' },
    { key: 'action',    label: 'Action', render: v => <span className={`badge ${v === 'Turn On' ? 'badge-success' : 'badge-danger'}`}>{v}</span> },
    { key: 'status',    label: 'Status', render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key: 'createdAt', label: 'Created At' },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Linkage Records</h2>
          <p className="breadcrumb">Admin / Linkage Records</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Linkage</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search linkages..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button
              className={`btn-ghost p-1.5 ${row.status === 'Active' ? 'text-success-600' : 'text-surface-500'}`}
              onClick={() => toggleStatus(row)}
              title="Toggle Status"
            >
              {row.status === 'Active' ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
            </button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Linkage' : 'Edit Linkage'}
        size="lg"
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <TextInput label="Linkage Name" required placeholder="e.g. Overload Shutoff"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <SelectInput label="Source Device" placeholder="Select device"
            value={form.srcDevice} onChange={e => setForm(f => ({ ...f, srcDevice: e.target.value }))}
            options={devices.map(d => ({ value: d.name, label: d.name }))} />
          <TextInput label="Source Variable" placeholder="e.g. Current Phase A"
            value={form.srcVar} onChange={e => setForm(f => ({ ...f, srcVar: e.target.value }))} />
          <SelectInput label="Condition"
            value={form.condition} onChange={e => setForm(f => ({ ...f, condition: e.target.value }))}
            options={['>', '<', '=', '>=', '<=']} />
          <TextInput label="Threshold Value" placeholder="e.g. 30A"
            value={form.threshold} onChange={e => setForm(f => ({ ...f, threshold: e.target.value }))} />
          <SelectInput label="Target Device" placeholder="Select device"
            value={form.tgtDevice} onChange={e => setForm(f => ({ ...f, tgtDevice: e.target.value }))}
            options={devices.map(d => ({ value: d.name, label: d.name }))} />
          <SelectInput label="Action"
            value={form.action} onChange={e => setForm(f => ({ ...f, action: e.target.value }))}
            options={['Turn On', 'Turn Off']} />
          <div className="col-span-2">
            <SelectInput label="Status"
              value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              options={['Active', 'Inactive']} />
          </div>
        </div>
      </Modal>

      {/* View */}
      <Modal open={modal === 'view'} onClose={close} title="Linkage Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Name',            selected.name],
              ['Source Device',   selected.srcDevice],
              ['Source Variable', selected.srcVar],
              ['Condition',       selected.condition],
              ['Threshold',       selected.threshold],
              ['Target Device',   selected.tgtDevice],
              ['Action',          selected.action],
              ['Status',          selected.status],
              ['Created',         selected.createdAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-32 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-200">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
