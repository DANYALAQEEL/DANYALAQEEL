import { useState, useEffect, useRef } from 'react'
import { Bell, ChevronDown, LogOut, User, Settings, Search, Sun, Moon } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { notifications } from '../../data/dummy'

export default function Topbar({ title }) {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [dropOpen, setDropOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  
  const dropRef = useRef(null)
  const notifRef = useRef(null)
  const searchRef = useRef(null)
  const searchInputRef = useRef(null)
  
  const unread = notifications.slice(0, 5)

  const handleLogout = () => { logout(); navigate('/login') }

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdowns on route changes
  useEffect(() => {
    setDropOpen(false)
    setNotifOpen(false)
    setSearchOpen(false)
    setQuery('')
  }, [location.pathname])

  // Map breadcrumb based on URL
  const pathParts = location.pathname.split('/').filter(Boolean)
  const breadcrumbText = pathParts.join(' / ')

  // Role badge styles
  const roleBadges = {
    admin: <span className="badge badge-danger">ADMIN</span>,
    org:   <span className="badge badge-info">ORG</span>,
    user:  <span className="badge badge-success">USER</span>,
  }

  // Severity color dot mapping
  const severityColors = {
    danger:  'bg-danger-600',
    warning: 'bg-primary-500',
    info:    'bg-info-600',
  }

  const getSearchItems = () => {
    if (!user?.role) return []
    
    const pageItems = {
      admin: [
        { title: 'Dashboard Home', path: '/admin', category: 'Pages' },
        { title: 'Manage Organizations', path: '/admin/organizations', category: 'Pages' },
        { title: 'Manage Users', path: '/admin/users', category: 'Pages' },
        { title: 'Manage Gateways', path: '/admin/gateways', category: 'Pages' },
        { title: 'Manage Devices', path: '/admin/devices', category: 'Pages' },
        { title: 'Device Templates', path: '/admin/device-templates', category: 'Pages' },
        { title: 'Manage Icons', path: '/admin/icons', category: 'Pages' },
        { title: 'Manage Products', path: '/admin/products', category: 'Pages' },
        { title: 'Data Center', path: '/admin/data-center', category: 'Pages' },
        { title: 'Historical Data', path: '/admin/historical-data', category: 'Pages' },
        { title: 'Variable Alarm Records', path: '/admin/variable-alarms', category: 'Pages' },
        { title: 'Linkage Records', path: '/admin/linkage-records', category: 'Pages' },
        { title: 'Template Triggers', path: '/admin/template-triggers', category: 'Pages' },
        { title: 'Alarm Settings', path: '/admin/alarm-settings', category: 'Pages' },
        { title: 'Alarm Contacts', path: '/admin/alarm-contacts', category: 'Pages' },
        { title: 'Device Timestamps', path: '/admin/device-timestamps', category: 'Pages' },
        { title: 'Schedule Tasks', path: '/admin/schedule-tasks', category: 'Pages' },
        { title: 'Theme Settings', path: '/admin/theme-settings', category: 'Pages' },
        { title: 'Platform Settings', path: '/admin/settings', category: 'Pages' },
      ],
      org: [
        { title: 'Dashboard Home', path: '/org', category: 'Pages' },
        { title: 'My Devices', path: '/org/devices', category: 'Pages' },
        { title: 'My Gateways', path: '/org/gateways', category: 'Pages' },
        { title: 'Device Templates', path: '/org/device-templates', category: 'Pages' },
        { title: 'Historical Data', path: '/org/historical-data', category: 'Pages' },
        { title: 'Template Triggers', path: '/org/template-triggers', category: 'Pages' },
        { title: 'Alarm Settings', path: '/org/alarm-settings', category: 'Pages' },
        { title: 'Alarm Contacts', path: '/org/alarm-contacts', category: 'Pages' },
        { title: 'Schedule Tasks', path: '/org/schedule-tasks', category: 'Pages' },
        { title: 'Settings', path: '/org/settings', category: 'Pages' },
      ],
      user: [
        { title: 'My Dashboard', path: '/user', category: 'Pages' },
        { title: 'Subscription Info', path: '/user/subscription', category: 'Pages' },
        { title: 'Products Catalogue', path: '/user/products', category: 'Pages' },
        { title: 'Task Schedule', path: '/user/schedule', category: 'Pages' },
        { title: 'Slab Rates & Tariff', path: '/user/slab-rates', category: 'Pages' },
        { title: 'Interval History', path: '/user/interval-history', category: 'Pages' },
        { title: 'Alarm Templates', path: '/user/alarm-template', category: 'Pages' },
        { title: 'Notifications Center', path: '/user/notifications', category: 'Pages' },
        { title: 'AI Analytics Insights', path: '/user/ai-analytics', category: 'Pages' },
        { title: 'Voltage Imbalance Diagnostic', path: '/user/voltage-imbalance', category: 'Pages' },
        { title: 'Current Imbalance Diagnostic', path: '/user/current-imbalance', category: 'Pages' },
        { title: 'Power Factor Analytics', path: '/user/power-factor', category: 'Pages' },
        { title: 'Energy Consumption Logs', path: '/user/energy-consumption', category: 'Pages' },
        { title: 'System Anomalies List', path: '/user/anomalies', category: 'Pages' },
      ]
    }

    const items = [...(pageItems[user.role] ?? [])]

    if (user.role === 'admin') {
      items.push(
        { title: 'Delicia Warehouse (Org)', path: '/admin/organizations', category: 'Organizations' },
        { title: 'CF Smart Technology (Org)', path: '/admin/organizations', category: 'Organizations' },
        { title: 'FICO (Org)', path: '/admin/organizations', category: 'Organizations' },
        { title: 'NUST (Org)', path: '/admin/organizations', category: 'Organizations' },
        { title: 'Miss Maryam (User)', path: '/admin/users', category: 'Users' },
        { title: 'Huzaifa Ahmed (User)', path: '/admin/users', category: 'Users' },
        { title: 'Ali Raza (User)', path: '/admin/users', category: 'Users' },
        { title: 'Main Wapda (Device)', path: '/admin/devices', category: 'Devices' },
        { title: 'CF Smart Panel (Device)', path: '/admin/devices', category: 'Devices' },
        { title: 'Fico Furnace 1 (Device)', path: '/admin/devices', category: 'Devices' },
      )
    } else if (user.role === 'org') {
      items.push(
        { title: 'Main Wapda (Device)', path: '/org/devices', category: 'Devices' },
        { title: 'CF Smart Panel (Device)', path: '/org/devices', category: 'Devices' },
        { title: 'Fico Furnace 1 (Device)', path: '/org/devices', category: 'Devices' },
        { title: 'DELI-GW-001 (Gateway)', path: '/org/gateways', category: 'Gateways' },
        { title: 'CF-GW-001 (Gateway)', path: '/org/gateways', category: 'Gateways' },
      )
    }
    
    return items
  }

  const searchItems = getSearchItems()
  const searchResults = query
    ? searchItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems.slice(0, 5)

  const searchCategories = Array.from(new Set(searchResults.map(r => r.category)))

  return (
    <header className="h-14 bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm select-none transition-colors duration-200">
      {/* Title & Breadcrumbs */}
      <div className="min-w-0 flex items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold text-surface-900 dark:text-surface-100 tracking-tight leading-none">{title}</h1>
            {user?.role && roleBadges[user.role]}
          </div>
          <p className="breadcrumb text-[10px] text-surface-400 mt-0.5 tracking-wider uppercase font-semibold">
            {breadcrumbText || 'EMS'}
          </p>
        </div>
      </div>

      {/* Toolbar actions */}
      <div className="flex items-center gap-4">
        {/* Global Search Bar */}
        <div className="relative w-64 hidden md:block" ref={searchRef}>
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
          <input
            className="input pl-9 pr-12 py-1.5 text-xs bg-surface-50 dark:bg-surface-950 border-surface-200 dark:border-surface-800 focus:bg-white focus:dark:bg-surface-900 w-full"
            placeholder="Search anything..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => { setSearchOpen(true); setDropOpen(false); setNotifOpen(false); }}
            ref={searchInputRef}
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-surface-400 dark:text-surface-500 bg-surface-100 dark:bg-surface-900 px-1.5 py-0.5 rounded border border-surface-200 dark:border-surface-800 pointer-events-none">
            Ctrl+K
          </span>

          {/* Search Dropdown Modal */}
          {searchOpen && (
            <div className="absolute right-0 top-full mt-2 w-[320px] bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-xl shadow-floating z-50 py-2 animate-modal-entry max-h-80 overflow-y-auto">
              {searchResults.length === 0 ? (
                <div className="px-4 py-3 text-center text-xs text-surface-400">
                  No results matching "{query}"
                </div>
              ) : (
                searchCategories.map(cat => (
                  <div key={cat} className="px-2 mb-2 last:mb-0">
                    <h5 className="text-[9px] font-bold text-surface-400 uppercase tracking-wider px-2 py-1">{cat}</h5>
                    <div className="space-y-0.5">
                      {searchResults.filter(r => r.category === cat).map(r => (
                        <button
                          type="button"
                          key={r.title + r.path}
                          onClick={() => {
                            navigate(r.path)
                            setSearchOpen(false)
                            setQuery('')
                          }}
                          className="w-full text-left px-3 py-1.5 text-xs text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-950 dark:hover:text-surface-100 rounded-lg font-medium flex items-center justify-between cursor-pointer"
                        >
                          <span>{r.title}</span>
                          <span className="text-[9px] text-surface-400 bg-surface-100 dark:bg-surface-800 dark:text-surface-500 px-1 py-0.5 rounded uppercase font-semibold scale-90">Go</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Theme Toggler */}
        <button
          type="button"
          onClick={toggleTheme}
          className="btn-ghost p-2 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 rounded-full"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            type="button"
            className="btn-ghost p-2 relative text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 rounded-full"
            onClick={() => { setNotifOpen(o => !o); setDropOpen(false) }}
          >
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-xl shadow-floating z-50 animate-modal-entry">
              <div className="flex items-center justify-between px-4 py-3 border-b border-surface-100 dark:border-surface-800">
                <p className="text-sm font-bold text-surface-900 dark:text-surface-100">Notifications</p>
                <button type="button" className="text-xs text-primary-600 hover:text-primary-700 font-bold">
                  Mark all as read
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-surface-100 dark:divide-surface-800">
                {unread.map(n => (
                  <div key={n.id} className="px-4 py-3 hover:bg-surface-50 dark:hover:bg-surface-800 flex items-start gap-2.5 cursor-pointer">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${severityColors[n.severity] || 'bg-surface-400'}`} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-surface-800 dark:text-surface-200 leading-tight">{n.triggerName}</p>
                      <p className="text-xs text-surface-400 mt-0.5 truncate">{n.description}</p>
                      <p className="text-[10px] text-surface-400 mt-1 font-semibold">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t border-surface-100 dark:border-surface-800 text-center bg-surface-50 dark:bg-surface-950 rounded-b-xl">
                <button
                  type="button"
                  onClick={() => navigate(user?.role === 'user' ? '/user/notifications' : '#')}
                  className="text-xs text-primary-600 hover:text-primary-700 font-bold"
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile avatar dropdown */}
        <div className="relative" ref={dropRef}>
          <button
            type="button"
            className="flex items-center gap-2 btn-ghost px-2 py-1.5 rounded-lg text-surface-700 dark:text-surface-300"
            onClick={() => { setDropOpen(o => !o); setNotifOpen(false) }}
          >
            <div className="w-7 h-7 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center flex-shrink-0 text-primary-600 font-bold">
              {user?.name?.[0] ?? 'U'}
            </div>
            <ChevronDown size={13} className="text-surface-400" />
          </button>

          {dropOpen && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-xl shadow-floating z-50 py-1 animate-modal-entry">
              {/* User Header */}
              <div className="px-4 py-3 border-b border-surface-100 dark:border-surface-800">
                <p className="text-xs font-bold text-surface-800 dark:text-surface-200 leading-none">{user?.name}</p>
                <p className="text-[10px] text-surface-400 mt-1 truncate">{user?.email}</p>
              </div>
              {/* Menu items */}
              <button
                type="button"
                onClick={() => navigate(user?.role === 'admin' ? '/admin/settings' : user?.role === 'org' ? '/org/settings' : '/user/subscription')}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200 font-semibold"
              >
                <User size={14} /> Profile
              </button>
              <button
                type="button"
                onClick={() => navigate(user?.role === 'admin' ? '/admin/settings' : user?.role === 'org' ? '/org/settings' : '/user/notifications')}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-200 font-semibold"
              >
                <Settings size={14} /> Settings
              </button>
              <div className="border-t border-surface-100 dark:border-surface-800 my-1" />
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-danger-600 hover:bg-danger-50 dark:hover:bg-danger-950/20 font-bold"
              >
                <LogOut size={14} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
