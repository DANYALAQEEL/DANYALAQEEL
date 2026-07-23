import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Eye, Pencil } from 'lucide-react'
import { deviceTemplates as allTemplates } from '../../data/dummy'

const ORG = 'Delicia Warehouse'

// Sample variables per template (would come from API in production)
const templateVariables = {
  'DELICIA WAREHOUSE': [
    'VoltageA (40097)', 'VoltageB (40099)', 'VoltageC (40101)',
    'Phase VoltageA (40103)', 'Phase VoltageB (40105)', 'Phase VoltageC (40107)',
    'CurrentA (40109)', 'CurrentB (40111)', 'CurrentC (40113)',
    'Active Power (40121)', 'Reactive Power (40129)', 'Apparent Power (40137)',
  ],
}

const myTemplates = allTemplates.filter(t => t.org === ORG)

export default function OrgDeviceTemplates() {
  const [data, setData]         = useState(myTemplates)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState({ name: '', method: 'Modbus RTU' })

  const openView = (row) => { setSelected(row); setModal('view') }
  const openEdit = (row) => { setSelected(row); setForm({ name: row.name, method: row.method }); setModal('edit') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: new Date().toISOString().slice(0, 10) } : r))
    close()
  }

  const columns = [
    { key: 'name',      label: 'Template Name' },
    { key: 'variables', label: 'Variables Count', render: v => <span className="badge badge-info">{v}</span> },
    { key: 'devices',   label: 'Devices Using It', render: v => <span className="badge badge-neutral">{v}</span> },
    { key: 'method',    label: 'Communication Method', render: v => (
      <span className={`badge ${v === 'Modbus TCP' ? 'badge-success' : 'badge-warning'}`}>{v}</span>
    )},
    { key: 'updatedAt', label: 'Last Updated', render: v => <span className="text-xs text-surface-400">{v}</span> },
  ]

  const vars = selected ? (templateVariables[selected.name] || Array.from({ length: selected.variables }, (_, i) => `Variable_${String(i + 1).padStart(2, '0')}`)) : []

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Device Templates</h2>
          <p className="breadcrumb">Organization / Device Templates</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-surface-500 bg-surface-800 border border-surface-700 rounded-lg px-3 py-2">
          <span className="w-2 h-2 rounded-full bg-warning-500 inline-block"></span>
          Templates are managed by your administrator
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search templates..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
          </>
        )}
      />

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Template Details" size="lg">
        {selected && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Template Name',       selected.name],
                ['Communication Method',selected.method],
                ['Variables Count',     selected.variables],
                ['Devices Using It',    selected.devices],
                ['Last Updated',        selected.updatedAt],
                ['Organization',        selected.org],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-surface-500 mb-0.5">{label}</p>
                  <p className="text-sm text-surface-200 font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-surface-800 pt-4">
              <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-3">Template Variables</p>
              <div className="grid grid-cols-2 gap-2">
                {vars.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 bg-surface-800 rounded-lg px-3 py-2">
                    <span className="text-xs text-surface-500 font-mono w-5 flex-shrink-0">{i + 1}</span>
                    <span className="text-xs text-surface-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        open={modal === 'edit'}
        onClose={close}
        title="Edit Template"
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>Save Changes</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Template Name" required
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <SelectInput label="Communication Method" value={form.method}
            onChange={e => setForm(f => ({ ...f, method: e.target.value }))}
            options={['Modbus RTU', 'Modbus TCP']} />
        </div>
      </Modal>
    </div>
  )
}
