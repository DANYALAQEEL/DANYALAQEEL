import DataTable from '../../components/ui/DataTable'
import { notifications } from '../../data/dummy'
import { Bell } from 'lucide-react'

export default function UserNotifications() {
  const columns = [
    { key:'triggerName', label:'Trigger Name' },
    { key:'deviceName',  label:'Device' },
    { key:'description', label:'Description' },
    { key:'time',        label:'Time', render: v => <span className="text-xs text-surface-500 font-mono">{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Notifications</h2>
          <p className="breadcrumb">User / Notifications</p>
        </div>
        <span className="badge badge-warning"><Bell size={12} /> {notifications.length} total</span>
      </div>
      <DataTable columns={columns} data={notifications} searchPlaceholder="Search notifications..." pageSize={15} />
    </div>
  )
}
