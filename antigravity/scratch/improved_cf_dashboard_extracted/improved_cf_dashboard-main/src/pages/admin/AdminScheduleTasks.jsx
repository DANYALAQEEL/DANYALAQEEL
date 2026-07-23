import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, ToggleInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, Play, ToggleLeft, ToggleRight } from 'lucide-react'
import { scheduleTasks as initialData, organizations, devices } from '../../data/dummy'

const blankForm = {
  name: '', org: '', device: '', taskType: 'Energy Report',
  frequency: 'Daily', time: '08:00', recipients: '', status: 'Active',
}

export default function AdminScheduleTasks() {
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
  const openEdit = (row) => {
    setSelected(row)
    setForm({
      name: row.name, org: row.org, device: row.device,
      taskType: row.taskType || 'Energy Report',
      frequency: row.frequency || 'Daily',
      time: row.time || '08:00',
      recipients: row.recipients || '',
      status: row.status,
    })
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (!form.name.trim()) return
    const now = new Date().toISOString().slice(0, 10)
    const schedule = `${form.frequency === 'Daily' ? 'Daily' : form.frequency === 'Weekly' ? 'Mon' : '1st'} ${form.time}`
    if (modal === 'add') {
      setData(d => [...d, { ...form, id: Date.now(), schedule, lastRun: '—' }])
      showToast('Schedule task created successfully')
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, schedule, lastRun: r.lastRun } : r))
      showToast('Schedule task updated successfully')
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete task "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
      showToast('Task deleted', 'danger')
    }
  }

  const handleToggle = (row) => {
    setData(d => d.map(r => r.id === row.id
      ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' }
      : r
    ))
  }

  const handleRunNow = (row) => {
    showToast(`Task "${row.name}" triggered successfully`)
    setData(d => d.map(r => r.id === row.id
      ? { ...r, lastRun: new Date().toISOString().slice(0, 10) }
      : r
    ))
  }

  const columns = [
    { key: 'name',     label: 'Task Name' },
    { key: 'org',      label: 'Organization' },
    { key: 'device',   label: 'Device' },
    { key: 'schedule', label: 'Schedule' },
    { key: 'status',   label: 'Status', render: v =>
        <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key: 'lastRun',  label: 'Last Run' },
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
          <h2 className="page-title">Schedule Tasks</h2>
          <p className="breadcrumb">Admin / System / Schedule Tasks</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Task</button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search tasks..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-ghost p-1.5 text-primary-600 hover:text-primary-300" onClick={() => handleRunNow(row)} title="Run Now">
              <Play size={14} />
            </button>
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
        title={modal === 'add' ? 'Add Schedule Task' : 'Edit Schedule Task'}
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
          <TextInput label="Task Name" required placeholder="e.g. Daily Energy Report"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <SelectInput label="Organization" required placeholder="Select organization"
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          <SelectInput label="Device" required placeholder="Select device"
            value={form.device} onChange={e => setForm(f => ({ ...f, device: e.target.value }))}
            options={devices.map(d => ({ value: d.name, label: d.name }))} />
          <SelectInput label="Task Type" value={form.taskType}
            onChange={e => setForm(f => ({ ...f, taskType: e.target.value }))}
            options={['Energy Report', 'Alarm Summary', 'Data Export', 'Custom']} />
          <SelectInput label="Frequency" value={form.frequency}
            onChange={e => setForm(f => ({ ...f, frequency: e.target.value }))}
            options={['Daily', 'Weekly', 'Monthly']} />
          <div>
            <label className="label">Time</label>
            <input type="time" className="input" value={form.time}
              onChange={e => setForm(f => ({ ...f, time: e.target.value }))} />
          </div>
          <TextInput label="Email Recipients" placeholder="email1@x.com, email2@x.com"
            value={form.recipients} onChange={e => setForm(f => ({ ...f, recipients: e.target.value }))} />
          <ToggleInput label="Status (Active)" checked={form.status === 'Active'}
            onChange={v => setForm(f => ({ ...f, status: v ? 'Active' : 'Inactive' }))} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Schedule Task Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Task Name',   selected.name],
              ['Organization',selected.org],
              ['Device',      selected.device],
              ['Schedule',    selected.schedule],
              ['Status',      selected.status],
              ['Last Run',    selected.lastRun],
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
