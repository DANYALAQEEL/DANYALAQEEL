import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Zap, Sun, Wind, Activity, Shield, Settings, Droplets, Cpu } from 'lucide-react'
import { organizations } from '../../data/dummy'

const ICON_COMPONENTS = [Zap, Sun, Wind, Activity, Shield, Settings, Droplets, Cpu]
const ICON_COLORS = [
  'bg-primary-600', 'bg-warning-600', 'bg-success-600', 'bg-danger-600',
  'bg-info-600', 'bg-primary-800', 'bg-success-800', 'bg-surface-600',
]

const INITIAL_ICONS = [
  { id: 1, name: 'Energy Meter',    org: 'CF Smart Technology' },
  { id: 2, name: 'Solar Panel',     org: 'C Power'             },
  { id: 3, name: 'Generator',       org: 'CF Smart Technology' },
  { id: 4, name: 'Transformer',     org: 'FICO'                },
  { id: 5, name: 'Switchgear',      org: 'Supra Steel'         },
  { id: 6, name: 'Motor',           org: 'FICO'                },
  { id: 7, name: 'Pump',            org: 'Delicia Warehouse'   },
  { id: 8, name: 'Capacitor Bank',  org: 'NUST'                },
]

const blank = { name: '', org: '', file: '' }

export default function AdminManageIcons() {
  const [icons, setIcons]       = useState(INITIAL_ICONS)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blank)

  const openAdd  = () => { setForm(blank); setModal('add') }
  const openEdit = (icon) => { setSelected(icon); setForm({ name: icon.name, org: icon.org, file: '' }); setModal('edit') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (modal === 'add') {
      setIcons(d => [...d, { id: Date.now(), name: form.name, org: form.org }])
    } else {
      setIcons(d => d.map(r => r.id === selected.id ? { ...r, name: form.name, org: form.org } : r))
    }
    close()
  }

  const handleDelete = (icon) => {
    if (confirm(`Delete icon "${icon.name}"?`)) setIcons(d => d.filter(r => r.id !== icon.id))
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Manage Icons</h2>
          <p className="breadcrumb">Admin / Icons</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Icon</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {icons.map((icon, idx) => {
          const IconComp = ICON_COMPONENTS[idx % ICON_COMPONENTS.length]
          const colorCls = ICON_COLORS[idx % ICON_COLORS.length]
          return (
            <div key={icon.id} className="card p-5 flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-xl ${colorCls} flex items-center justify-center`}>
                <IconComp size={32} className="text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-surface-900">{icon.name}</p>
                <p className="text-xs text-surface-500 mt-0.5">{icon.org}</p>
              </div>
              <div className="flex gap-2 mt-1">
                <button className="btn-ghost p-1.5 text-xs" onClick={() => openEdit(icon)} title="Edit">
                  <Pencil size={13} />
                </button>
                <button className="btn-danger p-1.5 text-xs" onClick={() => handleDelete(icon)} title="Delete">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Icon' : 'Edit Icon'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Upload' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Icon Name" required placeholder="e.g. Energy Meter"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <div>
            <label className="label">Icon File</label>
            <input type="file" accept="image/*"
              className="w-full text-sm text-surface-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-primary-600 file:text-white hover:file:bg-primary-700 cursor-pointer"
              onChange={e => setForm(f => ({ ...f, file: e.target.value }))} />
          </div>
          <SelectInput label="Organization" placeholder="Select organization"
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
        </div>
      </Modal>
    </div>
  )
}
