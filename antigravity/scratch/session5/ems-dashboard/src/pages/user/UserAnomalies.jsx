import { useState } from 'react'
import { Eye, AlertTriangle } from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'

const anomalies = [
  { id:1, type:'Overvoltage',     device:'Main Wapda', variable:'Voltage Phase A', desc:'Phase A exceeded 235V threshold',      time:'2026-06-10 10:22', severity:'High',   status:'Active'   },
  { id:2, type:'Current Spike',   device:'Main Wapda', variable:'Current Phase B', desc:'Sudden current spike to 31A',          time:'2026-06-09 15:40', severity:'High',   status:'Active'   },
  { id:3, type:'PF Degradation',  device:'Main Wapda', variable:'Power Factor',    desc:'PF dropped below 0.85 for 45 minutes', time:'2026-06-09 11:00', severity:'Medium', status:'Resolved' },
  { id:4, type:'Phase Imbalance', device:'Main Wapda', variable:'Voltage',         desc:'Phase voltage imbalance of 2.9%',      time:'2026-06-07 22:10', severity:'Medium', status:'Resolved' },
  { id:5, type:'Data Gap',        device:'Main Wapda', variable:'All Variables',   desc:'No data received for 12 minutes',      time:'2026-06-06 03:15', severity:'Low',    status:'Resolved' },
]

const severityBadge = {
  High:   'badge-danger',
  Medium: 'badge-warning',
  Low:    'badge-info',
}

export default function UserAnomalies() {
  const [viewing, setViewing] = useState(null)

  const columns = [
    { key:'type',     label:'Anomaly Type' },
    { key:'device',   label:'Device' },
    { key:'variable', label:'Variable' },
    { key:'desc',     label:'Description' },
    { key:'time',     label:'Detected At', render: v => <span className="font-mono text-xs text-surface-400">{v}</span> },
    {
      key:'severity', label:'Severity',
      render: v => <span className={`badge ${severityBadge[v] || 'badge-neutral'}`}>{v}</span>
    },
    {
      key:'status', label:'Status',
      render: v => <span className={`badge ${v === 'Active' ? 'badge-danger' : 'badge-success'}`}>{v}</span>
    },
  ]

  const activeCount   = anomalies.filter(a => a.status === 'Active').length
  const resolvedCount = anomalies.filter(a => a.status === 'Resolved').length

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Anomalies</h2>
          <p className="breadcrumb">User / Anomalies</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge badge-danger flex items-center gap-1">
            <AlertTriangle size={11} /> {activeCount} Active
          </span>
          <span className="badge badge-success">{resolvedCount} Resolved</span>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={anomalies}
        searchPlaceholder="Search anomalies..."
        actions={row => (
          <button className="btn-ghost p-1.5 rounded" title="View Details" onClick={() => setViewing(row)}>
            <Eye size={14} />
          </button>
        )}
      />

      <Modal open={!!viewing} onClose={() => setViewing(null)} title="Anomaly Details" size="md">
        {viewing && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <span className={`badge ${severityBadge[viewing.severity] || 'badge-neutral'}`}>
                {viewing.severity} Severity
              </span>
              <span className={`badge ${viewing.status === 'Active' ? 'badge-danger' : 'badge-success'}`}>
                {viewing.status}
              </span>
            </div>
            {[
              ['Anomaly Type', viewing.type],
              ['Device',       viewing.device],
              ['Variable',     viewing.variable],
              ['Description',  viewing.desc],
              ['Detected At',  viewing.time],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm gap-4">
                <span className="text-surface-400 flex-shrink-0">{label}</span>
                <span className="text-surface-100 font-medium text-right">{val}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
