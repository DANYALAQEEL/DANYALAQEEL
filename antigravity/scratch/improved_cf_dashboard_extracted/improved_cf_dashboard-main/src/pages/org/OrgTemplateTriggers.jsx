import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { deviceTemplates } from '../../data/dummy'

const ORG = 'Delicia Warehouse'
const FOUNDER = 'Miss Maryam'

const orgTemplates = deviceTemplates.filter(t => t.org === ORG)

const initialTriggers = [
  {
    id: 1,
    name: 'Overvoltage Alert',
    org: ORG,
    templateName: 'DELICIA WAREHOUSE',
    founder: FOUNDER,
    triggerCondition: 'Value is more than B',
    aValue: '',
    bValue: '240',
    deadZone: '5',
    updatedAt: '2026-06-01 10:30:00',
  },
  {
    id: 2,
    name: 'Power Outage',
    org: ORG,
    templateName: 'DELICIA WAREHOUSE',
    founder: FOUNDER,
    triggerCondition: 'Value is less than A',
    aValue: '100',
    bValue: '',
    deadZone: '0',
    updatedAt: '2026-05-15 08:00:00',
  },
]

const TRIGGER_CONDITIONS = [
  'OFF', 'ON',
  'Value is less than A',
  'Value is more than B',
  'Value is more than A and less than B',
  'Value is more than B or less than A',
  'Value is equal to A',
]

const emptyForm = () => ({
  name: '',
  templateName: orgTemplates[0]?.name || '',
  triggerCondition: 'Value is more than B',
  aValue: '',
  bValue: '',
  deadZone: '',
})

export default function OrgTemplateTriggers() {
  const [data, setData]         = useState(initialTriggers)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(emptyForm())

  const openAdd  = () => { setForm(emptyForm()); setModal('add') }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name: row.name, templateName: row.templateName, triggerCondition: row.triggerCondition, aValue: row.aValue, bValue: row.bValue, deadZone: row.deadZone })
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const now = new Date().toISOString().replace('T', ' ').slice(0, 19)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), org: ORG, founder: FOUNDER, updatedAt: now, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete trigger "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const f = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  const columns = [
    { key: 'name',             label: 'Trigger Name' },
    { key: 'templateName',     label: 'Template Name', render: v => <span className="text-xs text-surface-400">{v}</span> },
    { key: 'founder',          label: 'Founder', render: v => <span className="text-xs">{v}</span> },
    { key: 'triggerCondition', label: 'Condition', render: v => <span className="badge badge-warning text-xs">{v}</span> },
    { key: 'updatedAt',        label: 'Update Time', render: v => <span className="text-xs text-surface-400">{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Template Triggers</h2>
          <p className="breadcrumb">Organization / Template Triggers</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Trigger
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search triggers..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Template Trigger' : 'Edit Template Trigger'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Trigger Name" required placeholder="e.g. High Voltage Alert"
              value={form.name} onChange={f('name')} />
            <SelectInput label="Template" required value={form.templateName} onChange={f('templateName')}
              placeholder="Select template"
              options={orgTemplates.map(t => ({ value: t.name, label: t.name }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Trigger Condition" value={form.triggerCondition} onChange={f('triggerCondition')}
              options={TRIGGER_CONDITIONS} />
            <TextInput label="Alarm Dead Zone" placeholder="e.g. 5"
              value={form.deadZone} onChange={f('deadZone')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Value A" placeholder="Threshold A" type="number"
              value={form.aValue} onChange={f('aValue')} />
            <TextInput label="Value B" placeholder="Threshold B" type="number"
              value={form.bValue} onChange={f('bValue')} />
          </div>
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Trigger Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Trigger Name',    selected.name],
              ['Template',        selected.templateName],
              ['Condition',       selected.triggerCondition],
              ['Value A',         selected.aValue || '—'],
              ['Value B',         selected.bValue || '—'],
              ['Dead Zone',       selected.deadZone],
              ['Founder',         selected.founder],
              ['Last Updated',    selected.updatedAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-32 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
