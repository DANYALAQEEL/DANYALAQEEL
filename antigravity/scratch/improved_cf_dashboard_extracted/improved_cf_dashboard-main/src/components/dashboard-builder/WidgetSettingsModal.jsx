import { useState, useEffect } from 'react'
import Modal from '../ui/Modal'
import { METRIC_OPTIONS, GROUP_BY_OPTIONS, COLOR_THEMES } from '../../data/widgetCatalog'
import { TIME_RANGES } from '../../data/facilitiesHierarchy'

export default function WidgetSettingsModal({ open, onClose, widget, hierarchy, onSave }) {
  const [form, setForm] = useState(null)

  useEffect(() => {
    if (widget) {
      setForm({
        title: widget.title,
        metric: widget.metric,
        groupBy: widget.groupBy || 'none',
        color: widget.color,
        timeRange: widget.timeRange || 'inherit',
        overrideScope: !!widget.scopeOverride,
        buildingId: widget.scopeOverride?.buildingId || '',
        floorId: widget.scopeOverride?.floorId || '',
        departmentId: widget.scopeOverride?.departmentId || '',
      })
    }
  }, [widget])

  if (!open || !form) return null

  const supportsGroupBy = ['bar', 'pie', 'table'].includes(widget.type)
  const building = hierarchy.buildings.find(b => b.id === form.buildingId)
  const floor = building?.floors.find(f => f.id === form.floorId)

  function handleSave() {
    let scopeOverride = null
    if (form.overrideScope) {
      if (form.departmentId) scopeOverride = { level: 'department', buildingId: form.buildingId, floorId: form.floorId, departmentId: form.departmentId }
      else if (form.floorId) scopeOverride = { level: 'floor', buildingId: form.buildingId, floorId: form.floorId }
      else if (form.buildingId) scopeOverride = { level: 'building', buildingId: form.buildingId }
      else scopeOverride = { level: 'organization' }
    }
    onSave({
      title: form.title,
      metric: form.metric,
      groupBy: supportsGroupBy ? form.groupBy : 'none',
      color: form.color,
      timeRange: form.timeRange,
      scopeOverride,
    })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Widget Settings" size="lg" footer={
      <>
        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
        <button type="button" className="btn-primary" onClick={handleSave}>Save Changes</button>
      </>
    }>
      <div className="space-y-5">
        <div>
          <label className="label">Widget Title</label>
          <input className="input" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Data / Metric</label>
            <select className="select" value={form.metric} onChange={e => setForm(f => ({ ...f, metric: e.target.value }))}>
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
                  onClick={() => setForm(f => ({ ...f, color: c.value }))}
                  className={`w-7 h-7 rounded-full border-2 ${form.color === c.value ? 'border-surface-900' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {supportsGroupBy && (
          <div>
            <label className="label">Grouping (Enterprise Drill-down)</label>
            <select className="select" value={form.groupBy} onChange={e => setForm(f => ({ ...f, groupBy: e.target.value }))}>
              {GROUP_BY_OPTIONS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
            </select>
          </div>
        )}

        <div>
          <label className="label">Time Range</label>
          <select className="select" value={form.timeRange} onChange={e => setForm(f => ({ ...f, timeRange: e.target.value }))}>
            <option value="inherit">Inherit from dashboard filter</option>
            {Object.entries(TIME_RANGES).map(([key, v]) => <option key={key} value={key}>{v.label}</option>)}
          </select>
        </div>

        <div className="pt-3 border-t border-surface-100">
          <label className="flex items-center gap-2 cursor-pointer mb-3">
            <input
              type="checkbox"
              checked={form.overrideScope}
              onChange={e => setForm(f => ({ ...f, overrideScope: e.target.checked, buildingId: '', floorId: '', departmentId: '' }))}
            />
            <span className="text-xs font-bold text-surface-700 uppercase tracking-wide">Pin this widget to a fixed scope</span>
          </label>
          {form.overrideScope && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select className="select text-xs" value={form.buildingId} onChange={e => setForm(f => ({ ...f, buildingId: e.target.value, floorId: '', departmentId: '' }))}>
                <option value="">Whole Organization</option>
                {hierarchy.buildings.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <select className="select text-xs" value={form.floorId} disabled={!building} onChange={e => setForm(f => ({ ...f, floorId: e.target.value, departmentId: '' }))}>
                <option value="">All Floors</option>
                {building?.floors.map(fl => <option key={fl.id} value={fl.id}>{fl.name}</option>)}
              </select>
              <select className="select text-xs" value={form.departmentId} disabled={!floor} onChange={e => setForm(f => ({ ...f, departmentId: e.target.value }))}>
                <option value="">All Departments</option>
                {floor?.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}
