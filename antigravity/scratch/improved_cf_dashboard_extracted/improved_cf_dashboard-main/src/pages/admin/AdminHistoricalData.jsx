import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import DataTable from '../../components/ui/DataTable'
import { historicalData, organizations, devices } from '../../data/dummy'

const VARIABLES = [
  { value: 'voltageA',  label: 'Voltage Phase A', unit: 'V', color: '#F5A623' },
  { value: 'currentA',  label: 'Current Phase A', unit: 'A', color: '#3B82F6' },
  { value: 'power',     label: 'Active Power',    unit: 'W', color: '#10B981' },
]

const tableColumns = [
  { key: 'time',  label: 'Time' },
  { key: 'value', label: 'Value', render: v => <span className="font-mono text-primary-600">{v}</span> },
  { key: 'unit',  label: 'Unit' },
]

export default function AdminHistoricalData() {
  const [orgFilter, setOrgFilter]         = useState('')
  const [deviceFilter, setDeviceFilter]   = useState('')
  const [variableKey, setVariableKey]     = useState('voltageA')
  const [dateFrom, setDateFrom]           = useState('2026-06-10')
  const [dateTo, setDateTo]               = useState('2026-06-10')
  const [loaded, setLoaded]               = useState(true)

  const varMeta     = VARIABLES.find(v => v.value === variableKey)
  const chartData   = historicalData.map(row => ({ time: row.time, value: row[variableKey] }))
  const tableData   = chartData.map((row, i) => ({ id: i, time: row.time, value: row.value, unit: varMeta.unit }))

  const filteredDevices = orgFilter ? devices.filter(d => d.org === orgFilter) : devices

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Historical Data</h2>
          <p className="breadcrumb">Admin / Historical Data</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-32">
            <label className="label">Organization</label>
            <select className="select" value={orgFilter} onChange={e => { setOrgFilter(e.target.value); setDeviceFilter('') }}>
              <option value="">All Orgs</option>
              {organizations.map(o => <option key={o.id} value={o.name}>{o.name}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-32">
            <label className="label">Device</label>
            <select className="select" value={deviceFilter} onChange={e => setDeviceFilter(e.target.value)}>
              <option value="">All Devices</option>
              {filteredDevices.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-32">
            <label className="label">Variable</label>
            <select className="select" value={variableKey} onChange={e => setVariableKey(e.target.value)}>
              {VARIABLES.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-28">
            <label className="label">From</label>
            <input type="date" className="input" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
          </div>
          <div className="flex-1 min-w-28">
            <label className="label">To</label>
            <input type="date" className="input" value={dateTo} onChange={e => setDateTo(e.target.value)} />
          </div>
          <button className="btn-primary" onClick={() => setLoaded(true)}>Load</button>
        </div>
      </div>

      {/* Chart */}
      {loaded && (
        <div className="card p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-surface-800">{varMeta.label} — {dateFrom} to {dateTo}</h3>
            <span className="text-xs text-surface-500">{deviceFilter || 'All Devices'}</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
              <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #ECEEE6', borderRadius: 8, fontSize: 12, color: '#1F2937' }}
                itemStyle={{ color: '#1F2937' }}
                labelStyle={{ color: '#6B7280', fontWeight: 'bold' }}
              />
              <Legend wrapperStyle={{ fontSize: 11, color: '#6B7280' }} />
              <Line
                type="monotone"
                dataKey="value"
                name={varMeta.label}
                stroke={varMeta.color}
                strokeWidth={2}
                dot={{ fill: varMeta.color, r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Raw data table */}
      {loaded && (
        <DataTable
          columns={tableColumns}
          data={tableData}
          searchPlaceholder="Search data..."
          pageSize={12}
        />
      )}
    </div>
  )
}
