import { useState } from 'react'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput, TextareaInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import { alarmContacts as initialData, organizations } from '../../data/dummy'

const blankForm = {
  name: '', org: '', phone: '', email: '', whatsapp: '', remark: '',
}

export default function AdminAlarmContacts() {
  const [data, setData]         = useState(initialData)
  const [modal, setModal]       = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]         = useState(blankForm)
  const [toast, setToast]       = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const openAdd  = () => { setForm(blankForm); setModal('add') }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name: row.name, org: row.org, phone: row.phone, email: row.email, whatsapp: row.whatsapp, remark: row.remark })
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    if (!form.name.trim()) return
    const now = new Date().toISOString().slice(0, 10)
    if (modal === 'add') {
      setData(d => [...d, { ...form, id: Date.now(), updatedAt: now }])
      showToast('Alarm contact added successfully')
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form, updatedAt: now } : r))
      showToast('Alarm contact updated successfully')
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete contact "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
      showToast('Contact deleted', 'danger')
    }
  }

  const columns = [
    { key: 'name',      label: 'Contact Name' },
    { key: 'org',       label: 'Organization' },
    { key: 'phone',     label: 'Phone' },
    { key: 'email',     label: 'Email' },
    { key: 'whatsapp',  label: 'WhatsApp Number' },
    { key: 'remark',    label: 'Remark' },
    { key: 'updatedAt', label: 'Last Updated' },
  ]

  return (
    <div>
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-sm font-medium shadow-lg ${toast.type === 'danger' ? 'bg-danger-600 text-white' : 'bg-success-600 text-white'}`}>
          {toast.msg}
        </div>
      )}

      <div className="page-header">
        <div>
          <h2 className="page-title">Alarm Contacts</h2>
          <p className="breadcrumb">Admin / Alarms / Alarm Contacts</p>
        </div>
        <button className="btn-primary" onClick={openAdd}><Plus size={15} /> Add Contact</button>
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
            <button className="btn-primary" onClick={handleSave}>
              {modal === 'add' ? 'Create' : 'Save Changes'}
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Full Name" required placeholder="e.g. Huzaifa Ahmed"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <SelectInput label="Organization" required placeholder="Select organization"
              value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
              options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Phone Number" placeholder="+92-300-0000000"
              value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
            <TextInput label="WhatsApp Number" placeholder="+92-300-0000000"
              value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} />
          </div>
          <TextInput label="Email Address" type="email" placeholder="contact@example.com"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <TextareaInput label="Remark" placeholder="e.g. Primary on-call contact"
            value={form.remark} onChange={e => setForm(f => ({ ...f, remark: e.target.value }))} />
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="Contact Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Full Name', selected.name],
              ['Organization', selected.org],
              ['Phone', selected.phone],
              ['Email', selected.email],
              ['WhatsApp', selected.whatsapp],
              ['Remark', selected.remark],
              ['Last Updated', selected.updatedAt],
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
