import { useMemo, useState, useEffect, useCallback } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import WidgetFrame from './WidgetFrame'
import WidgetRenderer from './WidgetRenderer'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)
const BREAKPOINTS = { lg: 1024, md: 768, sm: 480 }
const COLS = { lg: 12, md: 12, sm: 4 }

// Re-flow a saved (lg, 12-col) layout down to a narrower column count by
// stacking items full-width in their original order — keeps every
// breakpoint looking intentional instead of squished/overlapping.
function stackForCols(layout, cols) {
  let y = 0
  return layout.map(item => {
    const h = item.h
    const out = { ...item, x: 0, y, w: cols, h }
    y += h
    return out
  })
}

export default function GridCanvas({
  dashboard, editing, orgName, hierarchy, dashboardContext,
  onLayoutChange, onWidgetSettings, onWidgetRemove,
}) {
  // Local, instantly-responsive layout state while dragging/resizing.
  // Only committed (persisted) on drag/resize *stop*, so localStorage
  // writes and parent re-renders don't fire on every intermediate frame.
  const [localLayout, setLocalLayout] = useState(dashboard.layout)

  useEffect(() => { setLocalLayout(dashboard.layout) }, [dashboard.id, dashboard.layout])

  const layouts = useMemo(() => ({
    lg: localLayout,
    md: localLayout,
    sm: stackForCols(localLayout, COLS.sm),
  }), [localLayout])

  const handleLayoutChange = useCallback((current, all) => {
    // Keep dragging smooth on the lg/md breakpoints; ignore the derived
    // single-column sm layout so it never gets persisted as the source of truth.
    setLocalLayout(prev => (all?.lg && all.lg.length ? all.lg : prev))
  }, [])

  const commitLayout = useCallback(() => {
    if (editing) onLayoutChange(localLayout)
  }, [editing, localLayout, onLayoutChange])

  if (!dashboard.widgets.length) {
    return (
      <div className="card flex flex-col items-center justify-center py-20 text-center border-dashed">
        <p className="text-sm font-bold text-surface-700">This dashboard is empty</p>
        <p className="text-xs text-surface-400 mt-1">Use "Add Widget" to build out your view.</p>
      </div>
    )
  }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={BREAKPOINTS}
      cols={COLS}
      rowHeight={28}
      margin={[14, 14]}
      isDraggable={editing}
      isResizable={editing}
      draggableHandle=".widget-drag-handle"
      onLayoutChange={handleLayoutChange}
      onDragStop={commitLayout}
      onResizeStop={commitLayout}
      compactType="vertical"
      useCSSTransforms
    >
      {dashboard.widgets.map(widget => (
        <div key={widget.id}>
          <WidgetFrame
            widget={widget}
            editing={editing}
            onSettings={() => onWidgetSettings(widget)}
            onRemove={() => onWidgetRemove(widget.id)}
          >
            <WidgetRenderer
              widget={widget}
              orgName={orgName}
              hierarchy={hierarchy}
              dashboardContext={dashboardContext}
            />
          </WidgetFrame>
        </div>
      ))}
    </ResponsiveGridLayout>
  )
}
