import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, Play } from 'lucide-react'
import { scheduleTasks as allTasks, devices as allDevices } from '../../data/dummy'

const ORG = 'Delicia Warehouse'
const CREATOR = 'Miss Maryam'

const orgDevices = allDevices.filter(d => d.org === ORG)
const myTasks    = allTasks.filter(t => t.org === ORG)

const SCHEDULE_OPTIONS = [
  'Daily 06:00', 'Daily 08:00', 'Daily 10:00', 'Daily 18:00',
  'Mon 09:00', 'Wed 09:00', 'Fri 09:00',
  '1st 10:00', '15th 10:00',
]

const emptyForm = () => ({
  name:     '',
  device:   orgDevices[0]?.name || '',
  schedule: 'Daily 08:00',
  status:   'Active',
})

export default function OrgScheduleTasks() {
  const [data, setData]         = useState(myTasks)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(emptyForm())
  const [running, setRunning]   = useState(null)

  const openAdd  = () => { setForm(emptyForm()); setModal('add') }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name: row.name, device: row.device, schedule: row.schedule, status: row.status })
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const today = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), org: ORG, createdBy: CREATOR, lastRun: '—', ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete task "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const handleRunNow = (row) => {
    setRunning(row.id)
    const today = new Date().toISOString().slice(0, 10)
    setTimeout(() => {
      setData(d => d.map(r => r.id === row.id ? { ...r, lastRun: today } : r))
      setRunning(null)
    }, 1500)
  }

  const f = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  const columns = [
    { key: 'name',     label: 'Task Name' },
    { key: 'device',   label: 'Device', render: v => <span className="text-xs text-surface-700">{v}</span> },
    { key: 'schedule', label: 'Schedule', render: v => <span className="badge badge-info">{v}</span> },
    { key: 'status',   label: 'Status',   render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key: 'lastRun',  label: 'Last Run', render: v => <span className="text-xs text-surface-400">{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Schedule Tasks</h2>
          <p className="breadcrumb">Organization / Schedule Tasks</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Task
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search tasks..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button
              className={`btn-ghost p-1.5 text-success-600 ${running === row.id ? 'opacity-50 cursor-wait' : ''}`}
              onClick={() => handleRunNow(row)}
              title="Run Now"
              disabled={running === row.id}
            >
              <Play size={14} className={running === row.id ? 'animate-pulse' : ''} />
            </button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Schedule Task' : 'Edit Schedule Task'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Task Name" required placeholder="e.g. Weekly Energy Report"
            value={form.name} onChange={f('name')} />
          <SelectInput label="Device" required value={form.device} onChange={f('device')}
            placeholder="Select device"
            options={orgDevices.map(d => ({ value: d.name, label: d.name }))} />
          <SelectInput label="Schedule" value={form.schedule} onChange={f('schedule')}
            options={SCHEDULE_OPTIONS} />
          <SelectInput label="Status" value={form.status} onChange={f('status')}
            options={['Active', 'Inactive']} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Task Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Task Name', selected.name],
              ['Device',    selected.device],
              ['Schedule',  selected.schedule],
              ['Status',    selected.status],
              ['Last Run',  selected.lastRun],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-24 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
