import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../components/ui/DataTable'
import Modal from '../../components/ui/Modal'
import { TextInput, TextareaInput, SelectInput } from '../../components/ui/FormFields'
import HierarchyEditor from '../../components/facility/HierarchyEditor'
import { Plus, Pencil, Trash2, Eye, LogIn, Building2, Sparkles, ListTree } from 'lucide-react'
import { organizations as initialData } from '../../data/dummy'
import { useAuth, ROLES } from '../../context/AuthContext'
import {
  getOrgHierarchyOverride, saveOrgHierarchy, clearOrgHierarchyOverride, renameOrgHierarchyOverride,
} from '../../data/facilitiesHierarchy'


export default function AdminOrganizations() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [data, setData]       = useState(initialData)
  const [modal, setModal]     = useState(null) // null | 'add' | 'edit' | 'view'
  const [selected, setSelected] = useState(null)
  const [form, setForm]       = useState({ name:'', description:'', status:'Active' })
  const [hierarchyMode, setHierarchyMode] = useState('auto') // 'auto' | 'manual'
  const [hierarchyBuildings, setHierarchyBuildings] = useState([])
  const [origName, setOrigName] = useState('')

  const handleLoginAsOrg = (row) => {
    login(ROLES.ORG)
    navigate('/org')
  }


  const openAdd  = () => {
    setForm({ name:'', description:'', status:'Active' })
    setHierarchyMode('auto')
    setHierarchyBuildings([])
    setOrigName('')
    setModal('add')
  }
  const openEdit = (row) => {
    setSelected(row)
    setForm({ name:row.name, description:row.description, status:row.status })
    setOrigName(row.name)
    const override = getOrgHierarchyOverride(row.name)
    if (override) {
      setHierarchyMode('manual')
      setHierarchyBuildings(override.buildings)
    } else {
      setHierarchyMode('auto')
      setHierarchyBuildings([])
    }
    setModal('edit')
  }
  const openView = (row) => { setSelected(row); setModal('view') }
  const close    = () => { setModal(null); setSelected(null) }

  const handleSave = () => {
    const orgName = form.name.trim()

    if (modal === 'add') {
      setData(d => [...d, { id: Date.now(), ...form, createdAt: new Date().toISOString().slice(0,10) }])
    } else {
      setData(d => d.map(r => r.id === selected.id ? { ...r, ...form } : r))
      if (origName && origName !== orgName) {
        renameOrgHierarchyOverride(origName, orgName)
      }
    }

    if (hierarchyMode === 'manual') {
      saveOrgHierarchy(orgName, hierarchyBuildings)
    } else {
      clearOrgHierarchyOverride(orgName)
    }

    close()
  }

  const handleDelete = (row) => {
    if (confirm(`Delete organization "${row.name}"?`)) {
      setData(d => d.filter(r => r.id !== row.id))
      clearOrgHierarchyOverride(row.name)
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
            <button
              className="btn-ghost p-1.5 text-primary-600 hover:text-primary-300"
              onClick={() => handleLoginAsOrg(row)}
              title="Login as Organization"
            >
              <LogIn size={14} />
            </button>
            <button className="btn-danger p-1.5"  onClick={() => handleDelete(row)} title="Delete"><Trash2 size={14} /></button>
          </>
        )}
      />

      {/* Note about Operations column */}
      <p className="text-xs text-surface-600 mt-3">
        <LogIn size={11} className="inline mr-1" />
        The <span className="text-primary-600">Login as Organization</span> action switches your session into that organization's dashboard (Operations column).
      </p>


      {/* Add / Edit Modal */}
      <Modal
        open={modal === 'add' || modal === 'edit'}
        onClose={close}
        title={modal === 'add' ? 'Add Organization' : 'Edit Organization'}
        size="xl"
        footer={
          <>
            <button className="btn-secondary" onClick={close}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>
              {modal === 'add' ? 'Create' : 'Save Changes'}
            </button>
          </>
        }
      >
        <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Organization Name" required
              placeholder="e.g. CF Smart Technology"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <SelectInput
              label="Status" required
              value={form.status}
              onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              options={['Active', 'Inactive']}
            />
          </div>
          <TextareaInput
            label="Description"
            placeholder="Brief description of the organization"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          />

          <div className="pt-4 border-t border-surface-100">
            <div className="flex items-center gap-2 mb-1.5">
              <ListTree size={14} className="text-primary-600" />
              <label className="text-xs font-bold text-surface-800 uppercase tracking-wide">Facility Structure</label>
            </div>
            <p className="text-xs text-surface-500 mb-3">
              Does this organization have multiple buildings, floors, or departments? Set them up now so their Custom Dashboards can drill down building-wise, floor-wise, and department-wise. Skip anything you're not sure about — we'll generate a sensible sample structure for it automatically.
            </p>

            <div className="flex items-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => setHierarchyMode('auto')}
                className={`flex-1 flex items-center gap-2 p-2.5 rounded-lg border text-left ${hierarchyMode === 'auto' ? 'border-primary-500 bg-primary-100/40' : 'border-surface-200 hover:bg-surface-50'}`}
              >
                <Sparkles size={14} className={hierarchyMode === 'auto' ? 'text-primary-600' : 'text-surface-400'} />
                <span className="text-xs font-bold text-surface-700">Auto-generate for me</span>
              </button>
              <button
                type="button"
                onClick={() => setHierarchyMode('manual')}
                className={`flex-1 flex items-center gap-2 p-2.5 rounded-lg border text-left ${hierarchyMode === 'manual' ? 'border-primary-500 bg-primary-100/40' : 'border-surface-200 hover:bg-surface-50'}`}
              >
                <Building2 size={14} className={hierarchyMode === 'manual' ? 'text-primary-600' : 'text-surface-400'} />
                <span className="text-xs font-bold text-surface-700">I'll set this up now</span>
              </button>
            </div>

            {hierarchyMode === 'manual' && (
              <HierarchyEditor buildings={hierarchyBuildings} onChange={setHierarchyBuildings} />
            )}
          </div>
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
                <span className="text-xs text-surface-800">{value}</span>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}
