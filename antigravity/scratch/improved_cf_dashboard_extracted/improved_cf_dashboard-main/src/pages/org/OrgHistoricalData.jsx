import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Download } from 'lucide-react'
import { historicalData, devices as allDevices, gateways as allGateways } from '../../data/dummy'

const ORG = 'Delicia Warehouse'
const orgDevices  = allDevices.filter(d => d.org === ORG)
const orgGateways = allGateways.filter(g => g.org === ORG)

const VARIABLES = ['voltageA', 'voltageB', 'voltageC', 'currentA', 'power']
const VAR_LABELS = {
  voltageA: 'Voltage A',
  voltageB: 'Voltage B',
  voltageC: 'Voltage C',
  currentA: 'Current A',
  power:    'Active Power',
}
const VAR_COLORS = {
  voltageA: '#F5A623',
  voltageB: '#3B82F6',
  voltageC: '#EF4444',
  currentA: '#10B981',
  power:    '#06b6d4',
}

export default function OrgHistoricalData() {
  const [device,       setDevice]       = useState(orgDevices[0]?.name || '')
  const [dateRange,    setDateRange]    = useState('today')
  const [selectedVars, setSelectedVars] = useState(['voltageA', 'currentA'])

  const toggleVar = (v) => {
    setSelectedVars(prev =>
      prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]
    )
  }

  const tableColumns = ['Variable Name', 'Min', 'Max', 'Average', 'Last Value']

  const tableData = selectedVars.map(v => {
    const values = historicalData.map(d => d[v])
    const min    = Math.min(...values).toFixed(1)
    const max    = Math.max(...values).toFixed(1)
    const avg    = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)
    const last   = values[values.length - 1]
    return { key: v, label: VAR_LABELS[v], min, max, avg, last }
  })

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Historical Data</h2>
          <p className="breadcrumb">Organization / Historical Data</p>
        </div>
        <button className="btn-secondary">
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-40">
            <label className="label">Device</label>
            <select className="select" value={device} onChange={e => setDevice(e.target.value)}>
              <option value="">Select Device</option>
              {orgDevices.map(d => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
              {orgGateways.map(g => (
                <option key={g.id} value={g.name}>{g.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-40">
            <label className="label">Date Range</label>
            <select className="select" value={dateRange} onChange={e => setDateRange(e.target.value)}>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="flex-1 min-w-40">
            <label className="label">Variables</label>
            <div className="flex flex-wrap gap-2">
              {VARIABLES.map(v => (
                <button
                  key={v}
                  onClick={() => toggleVar(v)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-colors ${
                    selectedVars.includes(v)
                      ? 'border-primary-500 bg-primary-600/20 text-primary-800 font-bold'
                      : 'border-surface-200 text-surface-600 hover:border-surface-500'
                  }`}
                >
                  {VAR_LABELS[v]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card p-5 mb-5">
        <h3 className="text-sm font-semibold text-surface-700 mb-4">
          {device || 'Select a device'} — Variable Trend
        </h3>
        {selectedVars.length === 0 ? (
          <div className="h-64 flex items-center justify-center text-surface-500 text-sm">
            Select at least one variable to display the chart
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={historicalData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
              <YAxis tick={{ fontSize: 11, fill: '#9AA09A' }} stroke="#D1D5C8" />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #ECEEE6', borderRadius: 8, fontSize: 12, color: '#1F2937' }}
                itemStyle={{ color: '#1F2937' }}
                labelStyle={{ color: '#6B7280', fontWeight: 'bold' }}
              />
              <Legend wrapperStyle={{ fontSize: 11, color: '#6B7280' }} />
              {selectedVars.map(v => (
                <Line
                  key={v}
                  type="monotone"
                  dataKey={v}
                  name={VAR_LABELS[v]}
                  stroke={VAR_COLORS[v]}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Summary Table */}
      <div className="table-container">
        <div className="p-4 border-b border-surface-200">
          <h3 className="text-sm font-semibold text-surface-700">Variable Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                {tableColumns.map(col => <th key={col}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-surface-500">
                    Select variables to see summary
                  </td>
                </tr>
              ) : (
                tableData.map(row => (
                  <tr key={row.key}>
                    <td className="font-medium text-surface-800">{row.label}</td>
                    <td className="text-danger-600">{row.min}</td>
                    <td className="text-success-600">{row.max}</td>
                    <td className="text-primary-600">{row.avg}</td>
                    <td>{row.last}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
