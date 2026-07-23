import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus, Search, Star, LayoutTemplate, Building2, User, Users, Clock, LayoutGrid,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCustomDashboards } from '../context/CustomDashboardContext'
import NewDashboardModal from '../components/dashboard-builder/NewDashboardModal'

const ROLE_EMPTY_COPY = {
  admin: 'Build a fully customizable, Grafana-style view for this organization — pick your widgets, chart types, and drill into buildings, floors, or departments.',
  org: "Build your own view or one to share with your organization's users — pick your widgets, chart types, and drill into buildings, floors, or departments.",
  user: 'Build your own personal dashboard — pick your widgets, chart types, and drill into buildings, floors, or departments. Your organization can also share dashboards with you here.',
}

function timeAgo(iso) {
  if (!iso) return ''
  const diffMs = Date.now() - new Date(iso).getTime()
  const mins = Math.round(diffMs / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.round(hrs / 24)
  return `${days}d ago`
}

export default function DashboardList() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const {
    orgKey, isAdmin, adminSelectedOrg, setAdminSelectedOrg, orgList,
    dashboards, canEdit, createDashboard, updateDashboard,
  } = useCustomDashboards()

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all') // all | mine | shared | favorites
  const [newOpen, setNewOpen] = useState(false)

  const isManager = user?.role === 'admin' || user?.role === 'org'
  const basePath = `/${user?.role}/custom-dashboard`

  const filtered = useMemo(() => {
    let list = dashboards
    if (filter === 'mine') list = list.filter(d => d.ownerEmail === user?.email)
    if (filter === 'shared') list = list.filter(d => d.ownerEmail !== user?.email)
    if (filter === 'favorites') list = list.filter(d => d.favorite)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(d => d.name.toLowerCase().includes(q) || (d.description || '').toLowerCase().includes(q))
    }
    return [...list].sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0) || new Date(b.updatedAt) - new Date(a.updatedAt))
  }, [dashboards, filter, query, user])

  function handleCreate(templateId, name) {
    const id = createDashboard(templateId, name)
    navigate(`${basePath}/${id}?edit=1`)
  }

  function toggleFavorite(e, dash) {
    e.stopPropagation()
    updateDashboard(dash.id, { favorite: !dash.favorite })
  }

  return (
    <div className="space-y-4">
      {isAdmin && (
        <div className="card p-3 flex items-center gap-2.5 bg-surface-900 border-none">
          <Building2 size={14} className="text-primary-500" />
          <span className="text-xs font-bold text-white uppercase tracking-wide">Managing Org:</span>
          <select
            className="select text-xs py-1.5 px-2 w-auto bg-surface-800 text-white border-surface-700"
            value={adminSelectedOrg}
            onChange={e => setAdminSelectedOrg(e.target.value)}
          >
            {orgList.map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>
      )}

      <div className="page-header">
        <div>
          <h2 className="page-title flex items-center gap-2"><LayoutGrid size={18} className="text-primary-600" /> Custom Dashboards</h2>
          <p className="breadcrumb">
            {isManager
              ? <>Build dashboards for <span className="font-semibold text-surface-600">{orgKey}</span> and share them with your organization's users.</>
              : <>Build your own personal dashboards, or view anything your organization shares with you.</>}
          </p>
        </div>
        <button type="button" className="btn-primary" onClick={() => setNewOpen(true)}>
          <Plus size={15} /> New Dashboard
        </button>
      </div>

      <div className="card p-3 flex flex-wrap items-center gap-2.5">
        <div className="relative flex-1 min-w-[14rem]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
          <input
            className="input pl-8 text-xs py-2"
            placeholder="Search dashboards..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { key: 'all', label: 'All' },
            { key: 'mine', label: 'My Dashboards' },
            { key: 'shared', label: 'Shared with me' },
            { key: 'favorites', label: 'Favorites' },
          ].map(f => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                filter === f.key ? 'bg-primary-500 text-white' : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="card flex flex-col items-center justify-center py-24 text-center border-dashed">
          <LayoutTemplate size={32} className="text-surface-300 mb-3" />
          <p className="text-sm font-bold text-surface-700">
            {dashboards.length === 0 ? 'No custom dashboards yet' : 'No dashboards match your search'}
          </p>
          {dashboards.length === 0 && (
            <p className="text-xs text-surface-400 mt-1 mb-4 max-w-sm">
              {ROLE_EMPTY_COPY[user?.role] || ROLE_EMPTY_COPY.user}
            </p>
          )}
          {dashboards.length === 0 && (
            <button type="button" className="btn-primary text-sm" onClick={() => setNewOpen(true)}>
              <Plus size={15} /> Create Your First Dashboard
            </button>
          )}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(d => {
            const ownIt = canEdit(d)
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => navigate(`${basePath}/${d.id}`)}
                className="card p-4 text-left hover:border-primary-300 hover:shadow-floating transition-all group relative"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-surface-900 leading-tight pr-6">{d.name}</h3>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => toggleFavorite(e, d)}
                    className="absolute top-3.5 right-3.5 text-surface-300 hover:text-primary-500"
                  >
                    <Star size={16} className={d.favorite ? 'fill-primary-500 text-primary-500' : ''} />
                  </span>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed line-clamp-2 min-h-[2.2em]">{d.description || 'No description'}</p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className={`badge ${ownIt ? 'badge-info' : 'badge-neutral'} flex items-center gap-1`}>
                    {ownIt ? <User size={10} /> : <Users size={10} />} {ownIt ? 'Yours' : 'Shared'}
                  </span>
                  {d.visibility === 'shared' && ownIt && (
                    <span className="badge badge-success flex items-center gap-1"><Users size={10} /> Shared with org</span>
                  )}
                  <span className="text-[10px] text-surface-400 font-semibold flex items-center gap-1 ml-auto">
                    <Clock size={10} /> {timeAgo(d.updatedAt)}
                  </span>
                </div>
                <p className="text-[10px] text-surface-400 font-semibold mt-2">{d.widgets.length} widget{d.widgets.length !== 1 ? 's' : ''}</p>
              </button>
            )
          })}
        </div>
      )}

      <NewDashboardModal open={newOpen} onClose={() => setNewOpen(false)} onCreate={handleCreate} />
    </div>
  )
}
