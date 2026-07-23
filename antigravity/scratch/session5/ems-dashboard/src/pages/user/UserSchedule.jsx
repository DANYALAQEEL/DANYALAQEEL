import { useState } from 'react'
import { Eye } from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'

const scheduleData = [
  { id:1, name:'Daily Energy Report',  device:'Main Wapda', type:'Energy Report', freq:'Daily',   nextRun:'2026-06-11 08:00', status:'Active' },
  { id:2, name:'Weekly Alarm Summary', device:'Main Wapda', type:'Alarm Summary', freq:'Weekly',  nextRun:'2026-06-15 09:00', status:'Active' },
  { id:3, name:'Monthly Export',       device:'Main Wapda', type:'Data Export',   freq:'Monthly', nextRun:'2026-07-01 10:00', status:'Active' },
]

export default function UserSchedule() {
  const [viewing, setViewing] = useState(null)

  const columns = [
    { key:'name',    label:'Task Name' },
    { key:'device',  label:'Device' },
    { key:'type',    label:'Task Type' },
    { key:'freq',    label:'Frequency' },
    { key:'nextRun', label:'Next Run', render: v => <span className="text-xs font-mono text-surface-400">{v}</span> },
    {
      key:'status', label:'Status',
      render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span>
    },
  ]

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Scheduled Tasks</h2>
          <p className="breadcrumb">User / Schedule</p>
        </div>
        <div className="text-xs text-surface-500 bg-surface-800/60 border border-surface-700 rounded-lg px-3 py-1.5">
          Device: <span className="text-surface-200 font-medium">Main Wapda</span>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={scheduleData}
        searchPlaceholder="Search tasks..."
        actions={row => (
          <button className="btn-ghost p-1.5 rounded" title="View" onClick={() => setViewing(row)}>
            <Eye size={14} />
          </button>
        )}
      />

      <Modal
        open={!!viewing}
        onClose={() => setViewing(null)}
        title="Task Details"
        size="sm"
      >
        {viewing && (
          <div className="space-y-3">
            {[
              ['Task Name',  viewing.name],
              ['Device',     viewing.device],
              ['Task Type',  viewing.type],
              ['Frequency',  viewing.freq],
              ['Next Run',   viewing.nextRun],
              ['Status',     viewing.status],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-surface-400">{label}</span>
                <span className="text-surface-100 font-medium">{val}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
