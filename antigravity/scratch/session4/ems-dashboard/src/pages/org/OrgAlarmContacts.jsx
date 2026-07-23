import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, TextareaInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { alarmContacts as allContacts } from '../../data/dummy'

const ORG = 'Delicia Warehouse'

const myContacts = allContacts.filter(c => c.org === ORG)

const emptyForm = () => ({
  name:     '',
  phone:    '',
  email:    '',
  whatsapp: '',
  remark:   '',
})

export default function OrgAlarmContacts() {
  const [data, setData]         = useState(myContacts)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(emptyForm())

  const openAdd  = () => { setForm(emptyForm()); setModal('add') }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name: row.name, phone: row.phone, email: row.email, whatsapp: row.whatsapp, remark: row.remark })
    setModal('edit')
  }
  const openView   = (row) => { setSelected(row); setModal('view') }
  const close      = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const now = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), org: ORG, updatedAt: now, ...form }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete contact "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const f = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  const columns = [
    { key: 'name',      label: 'Contact Name' },
    { key: 'phone',     label: 'Mobile Phone',  render: v => <span className="font-mono text-xs text-surface-300">{v}</span> },
    { key: 'email',     label: 'Email',          render: v => <span className="text-xs text-surface-300">{v}</span> },
    { key: 'whatsapp',  label: 'WhatsApp',       render: v => <span className="text-xs text-surface-400">{v}</span> },
    { key: 'remark',    label: 'Remark',         render: v => <span className="text-xs text-surface-400 italic">{v}</span> },
    { key: 'updatedAt', label: 'Updated',        render: v => <span className="text-xs text-surface-400">{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Alarm Contacts</h2>
          <p className="breadcrumb">Organization / Alarm Contacts</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add Contact
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search contacts..."
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
        title={modal === 'add' ? 'Add Alarm Contact' : 'Edit Alarm Contact'}
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>{modal === 'add' ? 'Create' : 'Save Changes'}</button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput label="Contact Name" required placeholder="e.g. John Doe"
            value={form.name} onChange={f('name')} />
          <TextInput label="Mobile Phone" required placeholder="e.g. +92-300-1234567" type="tel"
            value={form.phone} onChange={f('phone')} />
          <TextInput label="Email" required placeholder="e.g. john@example.com" type="email"
            value={form.email} onChange={f('email')} />
          <TextInput label="WhatsApp" placeholder="e.g. +92-300-1234567 (or N/A)"
            value={form.whatsapp} onChange={f('whatsapp')} />
          <TextareaInput label="Remark" placeholder="e.g. Primary on-site contact" rows={2}
            value={form.remark} onChange={f('remark')} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Contact Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Name',       selected.name],
              ['Phone',      selected.phone],
              ['Email',      selected.email],
              ['WhatsApp',   selected.whatsapp],
              ['Remark',     selected.remark],
              ['Updated At', selected.updatedAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-24 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-200 break-all">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
