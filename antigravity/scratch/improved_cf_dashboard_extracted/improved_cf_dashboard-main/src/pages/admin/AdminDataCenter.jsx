import { useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { organizations, devices } from '../../data/dummy'

const LIVE_DATA = [
  { id: 1, variable: 'Voltage Phase A', value: '229.4', unit: 'V',   time: '2026-06-10 14:32:01' },
  { id: 2, variable: 'Voltage Phase B', value: '228.1', unit: 'V',   time: '2026-06-10 14:32:01' },
  { id: 3, variable: 'Voltage Phase C', value: '230.2', unit: 'V',   time: '2026-06-10 14:32:01' },
  { id: 4, variable: 'Current Phase A', value: '18.3',  unit: 'A',   time: '2026-06-10 14:32:01' },
  { id: 5, variable: 'Active Power',    value: '12450', unit: 'W',   time: '2026-06-10 14:32:01' },
  { id: 6, variable: 'Power Factor',    value: '0.94',  unit: '',    time: '2026-06-10 14:32:01' },
  { id: 7, variable: 'Frequency',       value: '50.01', unit: 'Hz',  time: '2026-06-10 14:32:01' },
  { id: 8, variable: 'kWh Import',      value: '4821',  unit: 'kWh', time: '2026-06-10 14:32:01' },
]

export default function AdminDataCenter() {
  const [orgFilter, setOrgFilter]       = useState('')
  const [deviceFilter, setDeviceFilter] = useState('')
  const [tick, setTick]                 = useState(0)

  const filteredDevices = orgFilter
    ? devices.filter(d => d.org === orgFilter)
    : devices

  const handleRefresh = () => setTick(t => t + 1)

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Data Center</h2>
          <p className="breadcrumb">Admin / Data Center</p>
        </div>
        <button className="btn-secondary" onClick={handleRefresh}>
          <RefreshCw size={14} className={tick % 2 === 1 ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5 flex flex-wrap gap-4">
        <div className="flex-1 min-w-40">
          <label className="label">Select Organization</label>
          <select className="select" value={orgFilter} onChange={e => { setOrgFilter(e.target.value); setDeviceFilter('') }}>
            <option value="">All Organizations</option>
            {organizations.map(o => <option key={o.id} value={o.name}>{o.name}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-40">
          <label className="label">Select Device</label>
          <select className="select" value={deviceFilter} onChange={e => setDeviceFilter(e.target.value)}>
            <option value="">All Devices</option>
            {filteredDevices.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-container">
        <div className="p-4 border-b border-surface-200 flex items-center justify-between">
          <p className="text-xs text-surface-500">
            Live readings — {deviceFilter || (orgFilter ? `All devices in ${orgFilter}` : 'All devices')}
          </p>
          <span className="badge badge-success">● Live</span>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-10">#</th>
                <th>Variable Name</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {LIVE_DATA.map((row, idx) => (
                <tr key={row.id}>
                  <td className="text-surface-500 font-mono text-xs">{idx + 1}</td>
                  <td className="font-medium text-surface-800">{row.variable}</td>
                  <td className="font-mono text-primary-600 font-semibold">{row.value}</td>
                  <td className="text-surface-400 text-xs">{row.unit || '—'}</td>
                  <td className="text-surface-500 text-xs font-mono">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
