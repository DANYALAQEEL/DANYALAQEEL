import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { Eye } from 'lucide-react'

const timestampData = [
  { id:1, device:'Main Wapda',      org:'Delicia Warehouse',   lastOnline:'2026-06-10 14:30', lastData:'2026-06-10 14:32', uptime:'99.2%', downtime:'0.8%',  status:'Online'  },
  { id:2, device:'CF Smart Panel',  org:'CF Smart Technology', lastOnline:'2026-06-10 14:28', lastData:'2026-06-10 14:30', uptime:'98.7%', downtime:'1.3%',  status:'Online'  },
  { id:3, device:'Fico Furnace 1',  org:'FICO',                lastOnline:'2026-06-09 22:00', lastData:'2026-06-09 22:01', uptime:'87.3%', downtime:'12.7%', status:'Offline' },
  { id:4, device:'EMS Panel',       org:'NUST',                lastOnline:'2026-06-08 18:00', lastData:'2026-06-08 18:02', uptime:'72.1%', downtime:'27.9%', status:'Offline' },
  { id:5, device:'Supra Furnace A', org:'Supra Steel',         lastOnline:'2026-06-10 13:55', lastData:'2026-06-10 13:57', uptime:'95.4%', downtime:'4.6%',  status:'Online'  },
  { id:6, device:'C Power Gen',     org:'C Power',             lastOnline:'2026-06-10 14:00', lastData:'2026-06-10 14:01', uptime:'97.8%', downtime:'2.2%',  status:'Online'  },
]

export default function AdminDeviceTimestamps() {
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)

  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const uptimeBar = (pct) => {
    const num = parseFloat(pct)
    const color = num >= 95 ? 'bg-success-600' : num >= 80 ? 'bg-warning-600' : 'bg-danger-600'
    return (
      <div className="flex items-center gap-2">
        <div className="w-20 h-1.5 bg-surface-700 rounded-full overflow-hidden">
          <div className={`h-full ${color} rounded-full`} style={{ width: pct }} />
        </div>
        <span className="text-xs">{pct}</span>
      </div>
    )
  }

  const columns = [
    { key: 'device',     label: 'Device Name' },
    { key: 'org',        label: 'Organization' },
    { key: 'lastOnline', label: 'Last Seen Online' },
    { key: 'lastData',   label: 'Last Data Received' },
    { key: 'uptime',     label: 'Total Uptime', render: v => uptimeBar(v) },
    { key: 'downtime',   label: 'Total Downtime' },
    { key: 'status',     label: 'Status', render: v =>
        <span className={`badge ${v === 'Online' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Device Timestamps</h2>
          <p className="breadcrumb">Admin / System / Device Timestamps</p>
        </div>
        <span className="text-xs text-surface-500 bg-surface-800 px-3 py-1.5 rounded-lg border border-surface-700">
          System generated — read only
        </span>
      </div>

      <DataTable
        columns={columns}
        data={timestampData}
        searchPlaceholder="Search devices..."
        actions={(row) => (
          <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
        )}
      />

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Device Timestamp Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Device Name',         selected.device],
              ['Organization',        selected.org],
              ['Last Seen Online',    selected.lastOnline],
              ['Last Data Received',  selected.lastData],
              ['Total Uptime',        selected.uptime],
              ['Total Downtime',      selected.downtime],
              ['Status',              selected.status],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-40 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-200">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
