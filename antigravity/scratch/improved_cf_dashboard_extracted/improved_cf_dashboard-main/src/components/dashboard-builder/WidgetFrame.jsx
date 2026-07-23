import { useState, useRef, useEffect } from 'react'
import { GripVertical, MoreVertical, Settings, Trash2 } from 'lucide-react'

export default function WidgetFrame({ widget, editing, onSettings, onRemove, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <div className="card h-full flex flex-col overflow-hidden group">
      <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 border-b border-surface-100 flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          {editing && (
            <span className="widget-drag-handle cursor-move text-surface-300 hover:text-surface-500 flex-shrink-0">
              <GripVertical size={14} />
            </span>
          )}
          <h4 className="text-xs font-bold text-surface-800 truncate">{widget.title}</h4>
        </div>
        {editing && (
          <div className="relative flex-shrink-0" ref={menuRef}>
            <button type="button" className="btn-ghost p-1" onClick={() => setMenuOpen(o => !o)}>
              <MoreVertical size={14} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-surface-200 rounded-lg shadow-elevated z-20 py-1">
                <button
                  type="button"
                  className="w-full text-left px-3 py-1.5 text-xs font-semibold text-surface-700 hover:bg-surface-50 flex items-center gap-2"
                  onClick={() => { setMenuOpen(false); onSettings() }}
                >
                  <Settings size={12} /> Widget Settings
                </button>
                <button
                  type="button"
                  className="w-full text-left px-3 py-1.5 text-xs font-semibold text-danger-600 hover:bg-danger-100/40 flex items-center gap-2"
                  onClick={() => { setMenuOpen(false); onRemove() }}
                >
                  <Trash2 size={12} /> Remove
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 min-h-0 p-3">
        {children}
      </div>
    </div>
  )
}
