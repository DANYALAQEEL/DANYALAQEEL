import { useState } from 'react'
import { Eye, Edit2, ToggleLeft, ToggleRight } from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'

const initData = [
  { id:1, name:'Overvoltage',  variable:'Voltage Phase A', condition:'>', threshold:'235V', method:'Email',    status:'Active'   },
  { id:2, name:'High Current', variable:'Current Phase A', condition:'>', threshold:'25A',  method:'SMS',      status:'Active'   },
  { id:3, name:'Low PF',       variable:'Power Factor',    condition:'<', threshold:'0.85', method:'WhatsApp', status:'Inactive' },
]

const variableOptions = ['Voltage Phase A','Voltage Phase B','Voltage Phase C','Current Phase A','Current Phase B','Current Phase C','Active Power','Power Factor','Frequency']
const conditionOptions = ['>','<','=','>=','<=']
const methodOptions   = ['Email','SMS','WhatsApp']

function methodBadge(method) {
  const m = { Email:'badge-info', SMS:'badge-warning', WhatsApp:'badge-success' }
  return <span className={`badge ${m[method] || 'badge-neutral'}`}>{method}</span>
}

export default function UserAlarmTemplate() {
  const [data, setData]       = useState(initData)
  const [viewing, setViewing] = useState(null)
  const [editing, setEditing] = useState(null)
  const [form, setForm]       = useState({})

  const openEdit = (row) => { setEditing(row); setForm({ ...row }) }

  const saveEdit = () => {
    setData(prev => prev.map(r => r.id === form.id ? { ...form } : r))
    setEditing(null)
  }

  const toggle = (row) => {
    setData(prev => prev.map(r =>
      r.id === row.id
        ? { ...r, status: r.status === 'Active' ? 'Inactive' : 'Active' }
        : r
    ))
  }

  const setField = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const columns = [
    { key:'name',      label:'Trigger Name' },
    { key:'variable',  label:'Variable' },
    { key:'condition', label:'Condition', render: v => <span className="font-mono text-surface-300">{v}</span> },
    { key:'threshold', label:'Threshold' },
    { key:'method',    label:'Push Method', render: v => methodBadge(v) },
    { key:'status',    label:'Status', render: v => <span className={`badge ${v==='Active'?'badge-success':'badge-neutral'}`}>{v}</span> },
  ]

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Alarm Templates</h2>
          <p className="breadcrumb">User / Alarm Template</p>
        </div>
        <div className="text-xs text-surface-500 bg-surface-800/60 border border-surface-700 rounded-lg px-3 py-1.5">
          Device: <span className="text-surface-200 font-medium">Main Wapda</span>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search alarms..."
        actions={row => (<>
          <button className="btn-ghost p-1.5 rounded" title="View" onClick={() => setViewing(row)}><Eye size={14} /></button>
          <button className="btn-ghost p-1.5 rounded" title="Edit" onClick={() => openEdit(row)}><Edit2 size={14} /></button>
          <button
            className="btn-ghost p-1.5 rounded"
            title="Toggle Status"
            onClick={() => toggle(row)}
          >
            {row.status === 'Active'
              ? <ToggleRight size={16} className="text-success-500" />
              : <ToggleLeft  size={16} className="text-surface-500" />}
          </button>
        </>)}
      />

      {/* View Modal */}
      <Modal open={!!viewing} onClose={() => setViewing(null)} title="Alarm Details" size="sm">
        {viewing && (
          <div className="space-y-3">
            {[
              ['Trigger Name', viewing.name],
              ['Variable',     viewing.variable],
              ['Condition',    viewing.condition],
              ['Threshold',    viewing.threshold],
              ['Push Method',  viewing.method],
              ['Status',       viewing.status],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-surface-400">{label}</span>
                <span className="text-surface-100 font-medium">{val}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title="Edit Alarm Template"
        size="md"
        footer={<>
          <button className="btn-secondary" onClick={() => setEditing(null)}>Cancel</button>
          <button className="btn-primary" onClick={saveEdit}>Save Changes</button>
        </>}
      >
        <div className="space-y-4">
          <div>
            <label className="label">Trigger Name</label>
            <input className="input" value={form.name || ''} onChange={e => setField('name', e.target.value)} />
          </div>
          <div>
            <label className="label">Variable</label>
            <select className="select" value={form.variable || ''} onChange={e => setField('variable', e.target.value)}>
              {variableOptions.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Condition</label>
              <select className="select" value={form.condition || ''} onChange={e => setField('condition', e.target.value)}>
                {conditionOptions.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Threshold Value</label>
              <input className="input" value={form.threshold || ''} onChange={e => setField('threshold', e.target.value)} />
            </div>
          </div>
          <div>
            <label className="label">Push Method</label>
            <div className="flex gap-4 mt-1">
              {methodOptions.map(m => (
                <label key={m} className="flex items-center gap-2 text-sm text-surface-300 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary-500"
                    checked={form.method === m}
                    onChange={() => setField('method', m)}
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Status</label>
            <div className="flex items-center gap-3 mt-1">
              <button
                type="button"
                onClick={() => setField('status', form.status === 'Active' ? 'Inactive' : 'Active')}
                className="flex items-center gap-2 text-sm"
              >
                {form.status === 'Active'
                  ? <ToggleRight size={22} className="text-success-500" />
                  : <ToggleLeft  size={22} className="text-surface-500" />}
                <span className={form.status === 'Active' ? 'text-success-400' : 'text-surface-400'}>
                  {form.status}
                </span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
