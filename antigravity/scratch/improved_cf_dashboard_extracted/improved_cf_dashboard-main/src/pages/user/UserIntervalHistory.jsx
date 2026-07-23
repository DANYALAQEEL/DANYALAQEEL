import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts'
import DataTable from '../../components/ui/DataTable'
import { historicalData } from '../../data/dummy'

const variables = ['Active Power (kW)', 'Voltage Phase A (V)', 'Current Phase A (A)', 'Power Factor']
const intervals  = ['15 min', '30 min', '1 hour', '1 day']

export default function UserIntervalHistory() {
  const [variable, setVariable]  = useState(variables[0])
  const [interval, setInterval]  = useState('1 hour')
  const [fromDate, setFromDate]  = useState('2026-06-10')
  const [toDate, setToDate]      = useState('2026-06-10')

  const chartData = historicalData.map(d => ({
    time:  d.time,
    value: variable.startsWith('Voltage') ? d.voltageA
         : variable.startsWith('Current') ? d.currentA
         : variable.startsWith('Power F') ? parseFloat((d.power / d.voltageA / d.currentA).toFixed(2))
         : parseFloat((d.power / 1000).toFixed(2)),
    unit:  variable.startsWith('Voltage') ? 'V'
         : variable.startsWith('Current') ? 'A'
         : variable.startsWith('Power F') ? ''
         : 'kW',
  }))

  const tableColumns = [
    { key:'time',  label:'Timestamp', render: v => <span className="font-mono text-xs">{`2026-06-10 ${v}`}</span> },
    { key:'value', label:'Value' },
    { key:'unit',  label:'Unit' },
  ]

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">Interval History</h2>
          <p className="breadcrumb">User / Interval History</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="label">Device</label>
            <input className="input w-40" value="Main Wapda" readOnly />
          </div>
          <div>
            <label className="label">Variable</label>
            <select className="select w-48" value={variable} onChange={e => setVariable(e.target.value)}>
              {variables.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Interval</label>
            <select className="select w-32" value={interval} onChange={e => setInterval(e.target.value)}>
              {intervals.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className="label">From Date</label>
            <input type="date" className="input w-40" value={fromDate} onChange={e => setFromDate(e.target.value)} />
          </div>
          <div>
            <label className="label">To Date</label>
            <input type="date" className="input w-40" value={toDate} onChange={e => setToDate(e.target.value)} />
          </div>
          <button className="btn-primary">Load</button>
        </div>
      </div>

      {/* Chart */}
      <div className="card p-5">
        <h3 className="text-sm font-semibold text-surface-800 mb-1">{variable} — Main Wapda</h3>
        <p className="text-xs text-surface-500 mb-4">Interval: {interval} · {fromDate}</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ECEEE6" />
            <XAxis dataKey="time" tick={{ fontSize:11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <YAxis tick={{ fontSize:11, fill: '#9AA09A' }} stroke="#D1D5C8" />
            <Tooltip
              contentStyle={{ background: '#ffffff', border: '1px solid #ECEEE6', borderRadius: 8, fontSize: 12, color: '#1F2937' }}
              itemStyle={{ color: '#1F2937' }}
              labelStyle={{ color: '#6B7280', fontWeight: 'bold' }}
              formatter={(v) => [`${v} ${chartData[0]?.unit}`, variable]}
            />
            <Bar dataKey="value" fill="#F5A623" radius={[3,3,0,0]} name={variable} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div>
        <h3 className="text-sm font-semibold text-surface-700 mb-3">Data Records</h3>
        <DataTable
          columns={tableColumns}
          data={chartData}
          searchable={false}
          pageSize={12}
        />
      </div>
    </div>
  )
}
