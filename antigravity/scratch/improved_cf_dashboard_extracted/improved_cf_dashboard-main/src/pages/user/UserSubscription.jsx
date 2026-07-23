import { CreditCard, Calendar, Building2, Cpu, CheckCircle } from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import { subscriptions } from '../../data/dummy'

const history = [
  { id:1, plan:'Trial',        startDate:'2025-12-01', endDate:'2025-12-31', status:'Expired',  amount:'Free'          },
  { id:2, plan:'Professional', startDate:'2026-01-01', endDate:'2026-12-31', status:'Active',   amount:'PKR 15,000/mo' },
]

const current = subscriptions[0]

export default function UserSubscription() {
  const columns = [
    { key:'plan',      label:'Plan' },
    { key:'startDate', label:'Start Date' },
    { key:'endDate',   label:'End Date' },
    {
      key:'status', label:'Status',
      render: v => (
        <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span>
      )
    },
    { key:'amount', label:'Amount' },
  ]

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">My Subscription</h2>
          <p className="breadcrumb">User / Subscription</p>
        </div>
      </div>

      {/* Current Subscription Card */}
      <div className="card p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
              <CreditCard size={22} className="text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-surface-900">{current.plan}</h3>
              <p className="text-sm text-surface-400">Current Plan</p>
            </div>
          </div>
          <span className="badge badge-success flex items-center gap-1">
            <CheckCircle size={11} /> {current.status}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-surface-500 mb-1">
              <Building2 size={13} />
              <span className="text-xs uppercase tracking-wide">Organization</span>
            </div>
            <p className="text-sm font-medium text-surface-900">{current.org}</p>
          </div>
          <div className="bg-surface-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-surface-500 mb-1">
              <Calendar size={13} />
              <span className="text-xs uppercase tracking-wide">Start Date</span>
            </div>
            <p className="text-sm font-medium text-surface-900">{current.startDate}</p>
          </div>
          <div className="bg-surface-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-surface-500 mb-1">
              <Calendar size={13} />
              <span className="text-xs uppercase tracking-wide">End Date</span>
            </div>
            <p className="text-sm font-medium text-surface-900">{current.endDate}</p>
          </div>
          <div className="bg-surface-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-surface-500 mb-1">
              <Cpu size={13} />
              <span className="text-xs uppercase tracking-wide">Devices Allowed</span>
            </div>
            <p className="text-sm font-medium text-surface-900">{current.devices}</p>
          </div>
        </div>
      </div>

      {/* Subscription History */}
      <div>
        <h3 className="text-sm font-semibold text-surface-700 mb-3">Subscription History</h3>
        <DataTable
          columns={columns}
          data={history}
          searchable={false}
          pageSize={10}
        />
      </div>
    </div>
  )
}
