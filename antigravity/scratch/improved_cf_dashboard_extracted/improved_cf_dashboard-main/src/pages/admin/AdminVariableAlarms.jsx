import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { Eye, CheckCircle } from 'lucide-react'

const INITIAL_ALARMS = [
  { id:1, device:'Main Wapda',      variable:'Voltage Phase A', type:'High', threshold:'235V',   actual:'238V',   time:'2026-06-10 10:22', status:'Active'   },
  { id:2, device:'CF Smart Panel',  variable:'Current Phase B', type:'High', threshold:'25A',    actual:'27.3A',  time:'2026-06-10 09:15', status:'Active'   },
  { id:3, device:'Fico Furnace 1',  variable:'Power Factor',    type:'Low',  threshold:'0.85',   actual:'0.79',   time:'2026-06-09 18:44', status:'Resolved' },
  { id:4, device:'EMS Panel',       variable:'Voltage Phase C', type:'Low',  threshold:'210V',   actual:'207V',   time:'2026-06-09 14:30', status:'Resolved' },
  { id:5, device:'Supra Furnace A', variable:'Active Power',    type:'High', threshold:'20kW',   actual:'22.1kW', time:'2026-06-09 11:05', status:'Active'   },
  { id:6, device:'Main Wapda',      variable:'Frequency',       type:'Low',  threshold:'49.5Hz', actual:'49.1Hz', time:'2026-06-08 22:10', status:'Resolved' },
  { id:7, device:'C Power Gen',     variable:'Voltage Phase A', type:'High', threshold:'235V',   actual:'237V',   time:'2026-06-08 16:55', status:'Active'   },
  { id:8, device:'CF Smart Panel',  variable:'kWh Import',      type:'High', threshold:'5000',   actual:'5210',   time:'2026-06-08 12:00', status:'Resolved' },
]

export default function AdminVariableAlarms() {
  const [data, setData]         = useState(INITIAL_ALARMS)
  const [selected, setSelected] = useState(null)
  const [modal, setModal]       = useState(null)

  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const markResolved = (row) => {
    setData(d => d.map(r => r.id === row.id ? { ...r, status: 'Resolved' } : r))
  }

  const columns = [
    { key: 'device',    label: 'Device Name' },
    { key: 'variable',  label: 'Variable Name' },
    { key: 'type',      label: 'Alarm Type', render: v => <span className={`badge ${v === 'High' ? 'badge-danger' : 'badge-warning'}`}>{v}</span> },
    { key: 'threshold', label: 'Threshold', render: v => <span className="font-mono text-xs">{v}</span> },
    { key: 'actual',    label: 'Actual Value', render: v => <span className="font-mono text-xs text-primary-600">{v}</span> },
    { key: 'time',      label: 'Triggered At', render: v => <span className="text-xs text-surface-400">{v}</span> },
    { key: 'status',    label: 'Status', render: v => <span className={`badge ${v === 'Active' ? 'badge-danger' : 'badge-success'}`}>{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Variable Alarms</h2>
          <p className="breadcrumb">Admin / Variable Alarms</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge badge-danger">{data.filter(d => d.status === 'Active').length} Active</span>
          <span className="badge badge-success">{data.filter(d => d.status === 'Resolved').length} Resolved</span>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search alarms..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            {row.status === 'Active' && (
              <button className="btn-ghost p-1.5 text-success-600" onClick={() => markResolved(row)} title="Mark Resolved">
                <CheckCircle size={14} />
              </button>
            )}
          </>
        )}
      />

      <Modal open={modal === 'view'} onClose={close} title="Alarm Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Device',    selected.device],
              ['Variable',  selected.variable],
              ['Type',      selected.type],
              ['Threshold', selected.threshold],
              ['Actual',    selected.actual],
              ['Triggered', selected.time],
              ['Status',    selected.status],
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
