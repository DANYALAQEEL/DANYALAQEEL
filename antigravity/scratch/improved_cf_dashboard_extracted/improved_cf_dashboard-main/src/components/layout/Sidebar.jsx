import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, ChevronLeft, PanelLeftClose, PanelLeft } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

function SidebarItem({ item, depth = 0, collapsed }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children?.length > 0

  if (hasChildren) {
    if (collapsed) {
      // In collapsed mode, render parent item icon only (no dropdown list expansion to avoid breaking UI layout)
      return (
        <div className="relative group">
          <button
            type="button"
            className={`sidebar-link justify-center py-3 w-full`}
          >
            {item.icon && <item.icon size={18} className="flex-shrink-0 text-surface-500 group-hover:text-surface-100" />}
          </button>
          {/* Tooltip on hover */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-surface-900 border border-surface-700 text-surface-100 text-xs px-2.5 py-1.5 rounded-md shadow-floating opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap">
            {item.label}
          </div>
        </div>
      )
    }

    return (
      <div>
        <button
          onClick={() => setOpen(o => !o)}
          className={`sidebar-link w-full ${depth > 0 ? 'pl-8' : ''}`}
        >
          {item.icon && <item.icon size={16} className="flex-shrink-0" />}
          <span className="flex-1 text-left truncate">{item.label}</span>
          {open
            ? <ChevronDown size={13} className="flex-shrink-0" />
            : <ChevronRight size={13} className="flex-shrink-0" />
          }
        </button>
        {open && (
          <div className="ml-2 pl-3 border-l border-surface-800 mt-0.5 space-y-0.5">
            {item.children.map(child => (
              <SidebarItem key={child.to} item={child} depth={depth + 1} collapsed={collapsed} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `sidebar-link ${depth > 0 ? 'pl-3' : ''} ${isActive ? 'active' : ''} ${
          collapsed ? 'justify-center py-3' : ''
        }`
      }
    >
      {({ isActive }) => (
        <div className="flex items-center gap-3 w-full justify-center group relative">
          {item.icon && (
            <item.icon
              size={18}
              className={`flex-shrink-0 ${
                isActive ? 'text-primary-500' : 'text-surface-500 group-hover:text-surface-100'
              }`}
            />
          )}
          {!collapsed && <span className="truncate flex-1">{item.label}</span>}
          {collapsed && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-surface-900 border border-surface-700 text-surface-100 text-xs px-2.5 py-1.5 rounded-md shadow-floating opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 z-50 whitespace-nowrap">
              {item.label}
            </div>
          )}
        </div>
      )}
    </NavLink>
  )
}

export default function Sidebar({ navItems, role }) {
  const { user } = useAuth()
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('sidebar-collapsed') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', collapsed)
    // Dispatch custom event to notify parent containers of width resize
    window.dispatchEvent(new Event('resize'))
  }, [collapsed])

  const roleLabels = { admin: 'Super Admin', org: 'Organization', user: 'User' }
  const roleColors = { 
    admin: 'text-danger-600', 
    org:   'text-info-600', 
    user:  'text-primary-500' 
  }

  return (
    <aside
      className={`flex-shrink-0 bg-surface-950 border-r border-surface-800 flex flex-col h-screen sticky top-0 transition-all duration-250 z-40 select-none ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-surface-800 min-h-[57px]">
        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-surface-950">
            <circle cx="4" cy="6"  r="2" fill="currentColor"/>
            <circle cx="4" cy="12" r="2" fill="currentColor"/>
            <circle cx="4" cy="18" r="2" fill="currentColor"/>
            <line x1="6"  y1="6"  x2="12" y2="6"  stroke="currentColor" strokeWidth="1.5"/>
            <line x1="6"  y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="6"  y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12" y1="6"  x2="12" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="12" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="14" y1="18" x2="14" y2="21" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12" y1="9"  x2="20" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
            <line x1="16" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="14" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-bold text-surface-100 leading-none tracking-wide">
              EMBED<span className="text-primary-500">AI</span>OT
            </p>
            <p className="text-[9px] font-semibold tracking-widest text-surface-500 uppercase mt-0.5">
              Smarter Solutions
            </p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-0.5">
        {navItems.map((item, idx) =>
          item.divider ? (
            !collapsed ? (
              <div key={item.label ?? idx} className="pt-5 pb-1 px-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-surface-500">
                  {item.label}
                </p>
              </div>
            ) : (
              <div key={idx} className="border-t border-surface-800/60 my-4" />
            )
          ) : (
            <SidebarItem key={item.to ?? item.label ?? idx} item={item} collapsed={collapsed} />
          )
        )}
      </nav>

      {/* User Profile Strip & Collapse Toggle */}
      <div className="border-t border-surface-800 bg-surface-950/50 flex flex-col">
        {/* User Card */}
        <div className={`flex items-center gap-3 p-4 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center flex-shrink-0 text-primary-500 font-bold text-sm">
            {user?.name?.[0] ?? 'U'}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-surface-200 truncate leading-tight">
                {user?.name ?? 'Guest User'}
              </p>
              <p className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${roleColors[role]}`}>
                {roleLabels[role]}
              </p>
            </div>
          )}
        </div>

        {/* Collapse Button */}
        <button
          type="button"
          onClick={() => setCollapsed(c => !c)}
          className="border-t border-surface-800 py-3 text-surface-500 hover:text-surface-200 flex items-center justify-center transition-colors duration-150"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
        </button>
      </div>
    </aside>
  )
}
