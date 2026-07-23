import { useState, useMemo, useEffect, lazy, Suspense } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCustomDashboards } from '../context/CustomDashboardContext'
import { getOrgHierarchy, scopeLabel } from '../data/facilitiesHierarchy'
import DashboardToolbar from '../components/dashboard-builder/DashboardToolbar'
import ContextFilterBar from '../components/dashboard-builder/ContextFilterBar'
import AddWidgetModal from '../components/dashboard-builder/AddWidgetModal'
import WidgetSettingsModal from '../components/dashboard-builder/WidgetSettingsModal'

// react-grid-layout is only needed here — lazy-loaded so it never bloats
// the bundle for people who never open a dashboard's editor.
const GridCanvas = lazy(() => import('../components/dashboard-builder/GridCanvas'))

function GridCanvasSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[0, 1, 2].map(i => <div key={i} className="card h-48 animate-pulse bg-surface-100" />)}
    </div>
  )
}

export default function DashboardEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const {
    orgKey, dashboards, canEdit, updateDashboard, deleteDashboard,
    duplicateDashboard, setDashboardLayout, addWidget, updateWidget, removeWidget,
    exportDashboard, importDashboard,
  } = useCustomDashboards()

  const basePath = `/${user?.role}/custom-dashboard`
  const dashboard = dashboards.find(d => d.id === id)

  const [editing, setEditing] = useState(searchParams.get('edit') === '1')
  const [addOpen, setAddOpen] = useState(false)
  const [settingsWidget, setSettingsWidget] = useState(null)

  const hierarchy = useMemo(() => getOrgHierarchy(orgKey), [orgKey])
  const isManager = user?.role === 'admin' || user?.role === 'org'

  useEffect(() => {
    // If the dashboard doesn't exist in this org's visible set (deleted, or
    // wrong org context), bounce back to the browse list instead of a blank page.
    if (!dashboard && dashboards.length >= 0) {
      const timeout = setTimeout(() => { if (!dashboards.find(d => d.id === id)) navigate(basePath, { replace: true }) }, 0)
      return () => clearTimeout(timeout)
    }
  }, [dashboard, dashboards, id, basePath, navigate])

  if (!dashboard) return null

  const ownIt = canEdit(dashboard)

  function handleContextChange(context) {
    updateDashboard(dashboard.id, { context })
  }
  function handleLayoutChange(layout) {
    setDashboardLayout(dashboard.id, layout)
  }
  function handleDelete() {
    if (confirm('Delete this dashboard? This cannot be undone.')) {
      deleteDashboard(dashboard.id)
      navigate(basePath)
    }
  }
  function handleDuplicate(asOwnerCopy) {
    const newId = duplicateDashboard(dashboard.id, asOwnerCopy)
    navigate(`${basePath}/${newId}`)
  }
  function handleImport(json) {
    const newId = importDashboard(json)
    navigate(`${basePath}/${newId}`)
  }

  return (
    <div className="space-y-4">
      <DashboardToolbar
        dashboard={dashboard}
        basePath={basePath}
        editing={editing && ownIt}
        onToggleEdit={() => setEditing(e => !e)}
        ownIt={ownIt}
        onRename={(name) => updateDashboard(dashboard.id, { name })}
        onDuplicate={handleDuplicate}
        onDelete={handleDelete}
        onExport={() => exportDashboard(dashboard.id)}
        onImport={handleImport}
        onToggleShare={() => updateDashboard(dashboard.id, { visibility: dashboard.visibility === 'shared' ? 'private' : 'shared' })}
        onToggleFavorite={() => updateDashboard(dashboard.id, { favorite: !dashboard.favorite })}
        isManager={isManager}
      />

      <ContextFilterBar hierarchy={hierarchy} context={dashboard.context} onChange={handleContextChange} />

      <div className="flex items-center justify-between">
        <p className="text-xs text-surface-400 font-semibold">
          Viewing: <span className="text-surface-700">{scopeLabel(hierarchy, dashboard.context)}</span>
        </p>
        {editing && ownIt && (
          <button type="button" className="btn-secondary text-xs py-2 px-3" onClick={() => setAddOpen(true)}>
            <Plus size={14} /> Add Widget
          </button>
        )}
      </div>

      <Suspense fallback={<GridCanvasSkeleton />}>
        <GridCanvas
          dashboard={dashboard}
          editing={editing && ownIt}
          orgName={orgKey}
          hierarchy={hierarchy}
          dashboardContext={dashboard.context}
          onLayoutChange={handleLayoutChange}
          onWidgetSettings={(w) => setSettingsWidget(w)}
          onWidgetRemove={(widgetId) => removeWidget(dashboard.id, widgetId)}
        />
      </Suspense>

      <AddWidgetModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={(widget) => addWidget(dashboard.id, widget)}
      />

      <WidgetSettingsModal
        open={!!settingsWidget}
        onClose={() => setSettingsWidget(null)}
        widget={settingsWidget}
        hierarchy={hierarchy}
        onSave={(patch) => updateWidget(dashboard.id, settingsWidget.id, patch)}
      />
    </div>
  )
}
