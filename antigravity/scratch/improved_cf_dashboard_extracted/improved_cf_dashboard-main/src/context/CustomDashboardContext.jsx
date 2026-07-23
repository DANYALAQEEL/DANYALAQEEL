import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react'
import { useAuth } from './AuthContext'
import { users as dummyUsers, organizations as dummyOrgs } from '../data/dummy'
import { DASHBOARD_TEMPLATES, widgetTypeMeta } from '../data/widgetCatalog'

const STORAGE_KEY = 'cf-ems-custom-dashboards-v1'

const CustomDashboardContext = createContext(null)

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveStore(store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    // storage unavailable — fail silently, in-memory state still works this session
  }
}

function uid(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function makeWidget(partial, colIndex = 0) {
  const meta = widgetTypeMeta(partial.type)
  return {
    id: uid('widget'),
    type: partial.type,
    title: partial.title || meta.label,
    metric: partial.metric || 'energyConsumption',
    groupBy: partial.groupBy || 'none',
    color: partial.color || 'primary',
    timeRange: partial.timeRange || 'inherit',
    scopeOverride: partial.scopeOverride || null, // null = inherit dashboard context
    w: partial.w || meta.defaultSize.w,
    h: partial.h || meta.defaultSize.h,
  }
}

function layoutForWidgets(widgets) {
  // Simple auto-flow packer: 12-column grid, place widgets left-to-right,
  // wrapping to the next row. react-grid-layout's own collision handling
  // will still let the user rearrange things afterwards.
  const cols = 12
  let cursorX = 0
  let cursorY = 0
  let rowH = 0
  return widgets.map(w => {
    const width = Math.min(w.w, cols)
    if (cursorX + width > cols) {
      cursorX = 0
      cursorY += rowH
      rowH = 0
    }
    const item = { i: w.id, x: cursorX, y: cursorY, w: width, h: w.h, minW: 2, minH: 4 }
    cursorX += width
    rowH = Math.max(rowH, w.h)
    return item
  })
}

function buildFromTemplate(templateId, name) {
  const template = DASHBOARD_TEMPLATES.find(t => t.id === templateId) || DASHBOARD_TEMPLATES[0]
  const widgets = template.widgets.map((w, i) => makeWidget(w, i))
  return {
    id: uid('dash'),
    name: name || template.name,
    description: template.description,
    visibility: 'private', // 'private' | 'shared'
    context: { level: 'organization', buildingId: null, floorId: null, departmentId: null, timeRange: 'today' },
    widgets,
    layout: layoutForWidgets(widgets),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

// Resolve which "org bucket" the current user's dashboards live under, and
// what permission level they have (own/shared/manage-all-orgs for admin).
function resolveOrgKey(user, adminSelectedOrg) {
  if (!user) return null
  if (user.role === 'admin') return adminSelectedOrg || dummyOrgs[0]?.name || 'CF Smart Technology'
  if (user.role === 'org') return user.name
  // user role → look up their org from the dummy users table
  const match = dummyUsers.find(u => u.email === user.email)
  return match?.org || 'Delicia Warehouse'
}

export function CustomDashboardProvider({ children }) {
  const { user } = useAuth()
  const [store, setStore] = useState(loadStore)
  const [adminSelectedOrg, setAdminSelectedOrg] = useState(dummyOrgs[0]?.name || 'CF Smart Technology')

  useEffect(() => { saveStore(store) }, [store])

  const orgKey = useMemo(() => resolveOrgKey(user, adminSelectedOrg), [user, adminSelectedOrg])

  const allForOrg = orgKey ? (store[orgKey] || []) : []

  // Visibility rules:
  // - admin & org roles see every dashboard in the selected/own org
  // - user role sees their own private dashboards + anything shared
  const visibleDashboards = useMemo(() => {
    if (!user) return []
    if (user.role === 'admin' || user.role === 'org') return allForOrg
    return allForOrg.filter(d => d.visibility === 'shared' || d.ownerEmail === user.email)
  }, [allForOrg, user])

  const canEdit = useCallback((dashboard) => {
    if (!user || !dashboard) return false
    if (user.role === 'admin' || user.role === 'org') return true
    return dashboard.ownerEmail === user.email
  }, [user])

  const setOrgDashboards = useCallback((updater) => {
    setStore(prev => {
      const current = prev[orgKey] || []
      const next = typeof updater === 'function' ? updater(current) : updater
      return { ...prev, [orgKey]: next }
    })
  }, [orgKey])

  const createDashboard = useCallback((templateId, name) => {
    const dash = buildFromTemplate(templateId, name)
    dash.ownerEmail = user?.email
    dash.ownerRole = user?.role
    dash.visibility = user?.role === 'user' ? 'private' : 'private'
    setOrgDashboards(list => [...list, dash])
    return dash.id
  }, [setOrgDashboards, user])

  const updateDashboard = useCallback((id, patch) => {
    setOrgDashboards(list => list.map(d => d.id === id
      ? { ...d, ...patch, updatedAt: new Date().toISOString() }
      : d))
  }, [setOrgDashboards])

  const deleteDashboard = useCallback((id) => {
    setOrgDashboards(list => list.filter(d => d.id !== id))
  }, [setOrgDashboards])

  const duplicateDashboard = useCallback((id, asOwnerCopy = false) => {
    const newId = uid('dash')
    setOrgDashboards(list => {
      const src = list.find(d => d.id === id)
      if (!src) return list
      const clone = {
        ...src,
        id: newId,
        name: `${src.name} (Copy)`,
        visibility: 'private',
        ownerEmail: asOwnerCopy ? user?.email : src.ownerEmail,
        ownerRole: asOwnerCopy ? user?.role : src.ownerRole,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      return [...list, clone]
    })
    return newId
  }, [setOrgDashboards, user])

  const setDashboardLayout = useCallback((id, layout) => {
    updateDashboard(id, { layout })
  }, [updateDashboard])

  const addWidget = useCallback((dashboardId, widgetPartial) => {
    setOrgDashboards(list => list.map(d => {
      if (d.id !== dashboardId) return d
      const widget = makeWidget(widgetPartial)
      const widgets = [...d.widgets, widget]
      const layout = [...d.layout, { i: widget.id, x: 0, y: Infinity, w: widget.w, h: widget.h, minW: 2, minH: 4 }]
      return { ...d, widgets, layout, updatedAt: new Date().toISOString() }
    }))
  }, [setOrgDashboards])

  const updateWidget = useCallback((dashboardId, widgetId, patch) => {
    setOrgDashboards(list => list.map(d => {
      if (d.id !== dashboardId) return d
      return {
        ...d,
        widgets: d.widgets.map(w => w.id === widgetId ? { ...w, ...patch } : w),
        updatedAt: new Date().toISOString(),
      }
    }))
  }, [setOrgDashboards])

  const removeWidget = useCallback((dashboardId, widgetId) => {
    setOrgDashboards(list => list.map(d => {
      if (d.id !== dashboardId) return d
      return {
        ...d,
        widgets: d.widgets.filter(w => w.id !== widgetId),
        layout: d.layout.filter(l => l.i !== widgetId),
        updatedAt: new Date().toISOString(),
      }
    }))
  }, [setOrgDashboards])

  const exportDashboard = useCallback((id) => {
    const dash = allForOrg.find(d => d.id === id)
    if (!dash) return
    const blob = new Blob([JSON.stringify(dash, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${dash.name.replace(/\s+/g, '_')}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [allForOrg])

  const importDashboard = useCallback((jsonObj) => {
    const dash = {
      ...jsonObj,
      id: uid('dash'),
      ownerEmail: user?.email,
      ownerRole: user?.role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setOrgDashboards(list => [...list, dash])
    return dash.id
  }, [setOrgDashboards, user])

  const value = {
    orgKey,
    isAdmin: user?.role === 'admin',
    adminSelectedOrg,
    setAdminSelectedOrg,
    orgList: dummyOrgs.map(o => o.name),
    dashboards: visibleDashboards,
    canEdit,
    createDashboard,
    updateDashboard,
    deleteDashboard,
    duplicateDashboard,
    setDashboardLayout,
    addWidget,
    updateWidget,
    removeWidget,
    exportDashboard,
    importDashboard,
  }

  return (
    <CustomDashboardContext.Provider value={value}>
      {children}
    </CustomDashboardContext.Provider>
  )
}

export const useCustomDashboards = () => useContext(CustomDashboardContext)
