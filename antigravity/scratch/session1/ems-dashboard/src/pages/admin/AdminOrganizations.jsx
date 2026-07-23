import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, TextareaInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { organizations as initialData } from '../../data/dummy'

export default function AdminOrganizations() {
  const [data, setData]       = useState(initialData)
  const [modal, setModal]     = useState(null) // null | 'add' | 'edit' | 'view'
  const [selected, setSelected] = useState(null)
  const [form, setForm]       = useState({ name:'', description:'', status:'Active' })

  const openAdd  = () => { setForm({ name:'', description:'', status:'Active' }); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name:row.name, description:row.description, status:row.status }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), ...form, createdAt: new Date().toISOString().slice(0,10) }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete organization "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
    }
  }

  const columns = [
    { key:'name',        label:'Organization Name' },
    { key:'description', label:'Description' },
    { key:'status',      label:'Status', render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key:'createdAt',   label:'Created At' },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Manage Organizations</h2>
          <p className="breadcrumb">Admin / Organizations</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Organization
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search organizations..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button className="btn-danger p-1.5"  onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Organization' : 'Edit Organization'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>
              {modal === 'add' ? 'Create' : 'Save Changes'}
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput
            label="Organization Name" required
            placeholder="e.g. CF Smart Technology"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <TextareaInput
            label="Description"
            placeholder="Brief description of the organization"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          />
          <SelectInput
            label="Status" required
            value={form.status}
            onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
            options={['Active', 'Inactive']}
          />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Organization Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['ID',           selected.id],
              ['Name',         selected.name],
              ['Description',  selected.description],
              ['Status',       selected.status],
              ['Created At',   selected.createdAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-200">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
