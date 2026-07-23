import { useState } from 'react'
import { Eye, Zap, Receipt } from 'lucide-react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { slabRates } from '../../data/dummy'

export default function UserSlabRates() {
  const [viewing, setViewing] = useState(null)

  const columns = [
    { key:'variableName', label:'Variable Name' },
    { key:'slaveName',    label:'Slave / Device Name' },
    { key:'totalUnit',    label:'Total Units', render: v => `${v.toLocaleString()} kWh` },
    { key:'tariff',       label:'Tariff Rate' },
    { key:'startDate',    label:'Billing Period Start' },
    { key:'endDate',      label:'Billing Period End' },
  ]

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Slab Rates</h2>
          <p className="breadcrumb">User / Slab Rates</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={slabRates}
        searchable={false}
        actions={row => (
          <button className="btn-ghost p-1.5 rounded" title="View Details" onClick={() => setViewing(row)}>
            <Eye size={14} />
          </button>
        )}
      />

      {/* Summary Card */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Receipt size={16} className="text-primary-600" />
          <h3 className="text-sm font-semibold text-surface-800">Estimated Monthly Bill</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-surface-500 mb-1">
              <Zap size={13} />
              <span className="text-xs uppercase tracking-wide">Total Units</span>
            </div>
            <p className="text-xl font-bold text-surface-900">12,450</p>
            <p className="text-xs text-surface-500 mt-0.5">kWh</p>
          </div>
          <div className="bg-surface-50 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-surface-500 mb-1">
              <span className="text-xs uppercase tracking-wide">Rate</span>
            </div>
            <p className="text-xl font-bold text-surface-900">PKR 28</p>
            <p className="text-xs text-surface-500 mt-0.5">per unit</p>
          </div>
          <div className="bg-success-600/10 border border-success-600/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-success-600 mb-1">
              <Receipt size={13} />
              <span className="text-xs uppercase tracking-wide">Estimated Bill</span>
            </div>
            <p className="text-xl font-bold text-success-600">PKR 3,48,600</p>
            <p className="text-xs text-surface-500 mt-0.5">this billing period</p>
          </div>
        </div>
      </div>

      <Modal open={!!viewing} onClose={() => setViewing(null)} title="Slab Rate Details" size="sm">
        {viewing && (
          <div className="space-y-3">
            {[
              ['Variable Name', viewing.variableName],
              ['Device',        viewing.slaveName],
              ['Total Units',   `${viewing.totalUnit?.toLocaleString()} kWh`],
              ['Tariff Rate',   viewing.tariff],
              ['Period Start',  viewing.startDate],
              ['Period End',    viewing.endDate],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-surface-400">{label}</span>
                <span className="text-surface-900 font-medium">{val}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
