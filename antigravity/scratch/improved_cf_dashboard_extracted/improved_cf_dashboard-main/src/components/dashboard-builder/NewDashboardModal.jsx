import { useState } from 'react'
import Modal from '../ui/Modal'
import { LayoutTemplate } from 'lucide-react'
import { DASHBOARD_TEMPLATES } from '../../data/widgetCatalog'

export default function NewDashboardModal({ open, onClose, onCreate }) {
  const [templateId, setTemplateId] = useState('blank')
  const [name, setName] = useState('')

  function handleCreate() {
    onCreate(templateId, name.trim())
    setName('')
    setTemplateId('blank')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Create New Dashboard" size="lg" footer={
      <>
        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
        <button type="button" className="btn-primary" onClick={handleCreate}>Create Dashboard</button>
      </>
    }>
      <div className="space-y-5">
        <div>
          <label className="label">Dashboard Name</label>
          <input
            className="input"
            placeholder="e.g. Building A — Facilities Overview"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="label">Start From a Template</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DASHBOARD_TEMPLATES.map(t => {
              const active = templateId === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTemplateId(t.id)}
                  className={`text-left p-4 rounded-xl border transition-colors ${
                    active ? 'border-primary-500 bg-primary-100/40' : 'border-surface-200 hover:bg-surface-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <LayoutTemplate size={14} className={active ? 'text-primary-600' : 'text-surface-400'} />
                    <span className="text-xs font-bold text-surface-800">{t.name}</span>
                  </div>
                  <p className="text-[11px] text-surface-500 leading-relaxed">{t.description}</p>
                  <p className="text-[10px] text-surface-400 mt-1.5 font-semibold uppercase tracking-wide">{t.widgets.length} widgets</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </Modal>
  )
}
