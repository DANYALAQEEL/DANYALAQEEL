import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, SelectInput } from '../../components/ui/FormFields'
import { Plus, Pencil, Trash2, Eye, LogIn } from 'lucide-react'
import { users as initialData, organizations } from '../../data/dummy'
import { useAuth, ROLES } from '../../context/AuthContext'

export default function AdminUsers() {
  const { login }   = useAuth()
  const navigate    = useNavigate()
  const [data, setData]       = useState(initialData)
  const [modal, setModal]     = useState(null)
  const [selected, setSelected] = useState(null)
  const [form, setForm]       = useState({ name:'', email:'', phone:'', org:'', role:'Customer', status:'Active' })

  const openAdd  = () => { setForm({ name:'', email:'', phone:'', org:'', role:'Customer', status:'Active' }); setModal('add') }
  const openEdit = (row) => { setSelected(row); setForm({ name:row.name, email:row.email, phone:row.phone, org:row.org, role:row.role, status:row.status }); setModal('edit') }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleLoginAsUser = (row) => {
    login(ROLES.USER)
    navigate('/user')
  }

  const handleSave = () => {
    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), ...form, createdAt: new Date().toISOString().slice(0,10) }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
    }
    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete user "${row.name}"?`)) setData(d => d.filter(r => r.id !== row.id))
  }

  const columns = [
    { key:'name',   label:'Name' },
    { key:'email',  label:'Email' },
    { key:'org',    label:'Organization' },
    { key:'role',   label:'Role',   render: v => <span className="badge badge-info">{v}</span> },
    { key:'status', label:'Status', render: v => <span className={`badge ${v === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{v}</span> },
    { key:'createdAt', label:'Created' },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Manage Users</h2>
          <p className="breadcrumb">Admin / Users</p>
        </div>
        <button className="btn-primary" onClick={openAdd}>
          <Plus size={15} /> Add User
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchPlaceholder="Search users..."
        actions={(row) => (
          <>
            <button className="btn-ghost p-1.5" onClick={() => openView(row)} title="View"><Eye size={14} /></button>
            <button className="btn-ghost p-1.5" onClick={() => openEdit(row)} title="Edit"><Pencil size={14} /></button>
            <button
              className="btn-ghost p-1.5 text-primary-600 hover:text-primary-300"
              onClick={() => handleLoginAsUser(row)}
              title="Login as User"
            >
              <LogIn size={14} />
            </button>
            <button className="btn-danger p-1.5" onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Note about Operations column */}
      <p className="text-xs text-surface-600 mt-3">
        <LogIn size={11} className="inline mr-1" />
        The <span className="text-primary-600">Login as User</span> action switches your session into that user's dashboard (Operations column).
      </p>

      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add User' : 'Edit User'}
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
            <TextInput label="Full Name" required placeholder="e.g. Miss Maryam"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <TextInput label="Phone Number" placeholder="+92-300-0000000"
              value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </div>
          <TextInput label="Email Address" required type="email" placeholder="user@example.com"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <SelectInput label="Organization" required
            value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
            placeholder="Select organization"
            options={organizations.map(o => ({ value: o.name, label: o.name }))} />
          <div className="grid grid-cols-2 gap-4">
            <SelectInput label="Role" value={form.role}
              onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
              options={['Admin', 'Customer']} />
            <SelectInput label="Status" value={form.status}
              onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              options={['Active', 'Inactive']} />
          </div>
        </div>
      </Modal>

      {/* View Modal */}
      <Modal open={modal === 'view'} onClose={close} title="User Details">
        {selected && (
          <div className="space-y-3">
            {[
              ['Name',         selected.name],
              ['Email',        selected.email],
              ['Phone',        selected.phone],
              ['Organization', selected.org],
              ['Role',         selected.role],
              ['Status',       selected.status],
              ['Created At',   selected.createdAt],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-xs text-surface-500 w-28 flex-shrink-0">{label}</span>
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
