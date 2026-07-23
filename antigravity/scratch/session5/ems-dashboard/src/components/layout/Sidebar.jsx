import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, Zap } from 'lucide-react'

function SidebarItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children?.length > 0

  if (hasChildren) {
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
              <SidebarItem key={child.to} item={child} depth={depth + 1} />
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
        `sidebar-link ${depth > 0 ? 'pl-3' : ''} ${isActive ? 'active' : ''}`
      }
    >
      {item.icon && <item.icon size={16} className="flex-shrink-0" />}
      <span className="truncate">{item.label}</span>
    </NavLink>
  )
}

export default function Sidebar({ navItems, role }) {
  const roleLabels = { admin: 'Super Admin', org: 'Organization', user: 'User' }
  const roleColors = { admin: 'text-danger-600', org: 'text-warning-600', user: 'text-primary-400' }

  return (
    <aside className="w-60 flex-shrink-0 bg-surface-950 border-r border-surface-800 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-surface-800">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Zap size={16} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-surface-100 leading-tight">CF Smart EMS</p>
          <p className={`text-xs font-medium ${roleColors[role]}`}>{roleLabels[role]}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {navItems.map(item =>
          item.divider ? (
            <div key={item.label} className="pt-3 pb-1 px-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-surface-600">
                {item.label}
              </p>
            </div>
          ) : (
            <SidebarItem key={item.to ?? item.label} item={item} />
          )
        )}
      </nav>
    </aside>
  )
}
