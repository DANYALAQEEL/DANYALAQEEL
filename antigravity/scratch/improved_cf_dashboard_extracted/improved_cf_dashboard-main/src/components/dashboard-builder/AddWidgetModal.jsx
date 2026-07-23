import { useState } from 'react'
import Modal from '../ui/Modal'
import { WIDGET_TYPES, METRIC_OPTIONS, GROUP_BY_OPTIONS, COLOR_THEMES, widgetTypeMeta } from '../../data/widgetCatalog'

export default function AddWidgetModal({ open, onClose, onAdd }) {
  const [type, setType] = useState('line')
  const [title, setTitle] = useState('')
  const [metric, setMetric] = useState('energyConsumption')
  const [groupBy, setGroupBy] = useState('none')
  const [color, setColor] = useState('primary')

  const supportsGroupBy = ['bar', 'pie', 'table'].includes(type)

  function handleAdd() {
    const meta = widgetTypeMeta(type)
    onAdd({
      type,
      title: title.trim() || `${meta.label} — ${METRIC_OPTIONS.find(m => m.value === metric)?.label}`,
      metric,
      groupBy: supportsGroupBy ? groupBy : 'none',
      color,
    })
    setTitle('')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Add Widget" size="lg" footer={
      <>
        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
        <button type="button" className="btn-primary" onClick={handleAdd}>Add to Dashboard</button>
      </>
    }>
      <div className="space-y-5">
        <div>
          <label className="label">Visualization Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {WIDGET_TYPES.map(w => {
              const Icon = w.icon
              const active = type === w.type
              return (
                <button
                  key={w.type}
                  type="button"
                  onClick={() => setType(w.type)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border text-center transition-colors ${
                    active ? 'border-primary-500 bg-primary-100/40 text-primary-700' : 'border-surface-200 hover:bg-surface-50 text-surface-600'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-[11px] font-bold leading-tight">{w.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label className="label">Widget Title (optional)</label>
          <input className="input" placeholder="e.g. Building A Energy Consumption" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Data / Metric</label>
            <select className="select" value={metric} onChange={e => setMetric(e.target.value)}>
              {METRIC_OPTIONS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Color Theme</label>
            <div className="flex items-center gap-2">
              {COLOR_THEMES.map(c => (
                <button
                  key={c.value}
                  type="button"
                  title={c.label}
                  onClick={() => setColor(c.value)}
                  className={`w-7 h-7 rounded-full border-2 ${color === c.value ? 'border-surface-900' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {supportsGroupBy && (
          <div>
            <label className="label">Grouping (Enterprise Drill-down)</label>
            <select className="select" value={groupBy} onChange={e => setGroupBy(e.target.value)}>
              {GROUP_BY_OPTIONS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
            </select>
            <p className="text-xs text-surface-400 mt-1.5">
              Choose "Compare Buildings/Floors/Departments" to turn this into a breakdown panel across your facility hierarchy, instead of a single scope value.
            </p>
          </div>
        )}
      </div>
    </Modal>
  )
}
