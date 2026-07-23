import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import DashboardLayout from './components/layout/DashboardLayout'
import { adminNav, orgNav, userNav } from './config/navConfig.jsx'

// Pages
import Login               from './pages/Login'
import PlaceholderPage     from './pages/PlaceholderPage'

// Admin
import AdminDashboard      from './pages/admin/AdminDashboard'
import AdminOrganizations  from './pages/admin/AdminOrganizations'
import AdminUsers          from './pages/admin/AdminUsers'
import AdminGateways       from './pages/admin/AdminGateways'

// Org
import OrgDashboard        from './pages/org/OrgDashboard'
import OrgDevices          from './pages/org/OrgDevices'

// User
import UserDashboard       from './pages/user/UserDashboard'
import UserNotifications   from './pages/user/UserNotifications'

function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (requiredRole && user.role !== requiredRole) return <Navigate to={`/${user.role}`} replace />
  return children
}

const ph = (title, session) => <PlaceholderPage title={title} session={session} />

function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to={user ? `/${user.role}` : '/login'} replace />} />

      {/* ── Super Admin ── */}
      <Route path="/admin" element={
        <ProtectedRoute requiredRole="admin">
          <DashboardLayout navItems={adminNav} role="admin" />
        </ProtectedRoute>
      }>
        <Route index                    element={<AdminDashboard />} />
        <Route path="organizations"     element={<AdminOrganizations />} />
        <Route path="users"             element={<AdminUsers />} />
        <Route path="gateways"          element={<AdminGateways />} />
        <Route path="devices"           element={ph('Devices',           2)} />
        <Route path="device-templates"  element={ph('Device Templates',  2)} />
        <Route path="icons"             element={ph('Manage Icons',      2)} />
        <Route path="products"          element={ph('Manage Products',   2)} />
        <Route path="data-center"       element={ph('Data Center',       2)} />
        <Route path="historical-data"   element={ph('Historical Data',   2)} />
        <Route path="variable-alarms"   element={ph('Variable Alarms',   2)} />
        <Route path="linkage-records"   element={ph('Linkage Records',   2)} />
        <Route path="template-triggers" element={ph('Template Triggers', 3)} />
        <Route path="alarm-settings"    element={ph('Alarm Settings',    3)} />
        <Route path="alarm-contacts"    element={ph('Alarm Contacts',    3)} />
        <Route path="device-timestamps" element={ph('Device Timestamps', 3)} />
        <Route path="schedule-tasks"    element={ph('Schedule Tasks',    3)} />
        <Route path="theme-settings"    element={ph('Theme Settings',    3)} />
        <Route path="settings"          element={ph('Settings',          3)} />
      </Route>

      {/* ── Organization ── */}
      <Route path="/org" element={
        <ProtectedRoute requiredRole="org">
          <DashboardLayout navItems={orgNav} role="org" />
        </ProtectedRoute>
      }>
        <Route index                    element={<OrgDashboard />} />
        <Route path="devices"           element={<OrgDevices />} />
        <Route path="gateways"          element={ph('Org Gateways',         4)} />
        <Route path="device-templates"  element={ph('Org Device Templates', 4)} />
        <Route path="historical-data"   element={ph('Org Historical Data',  4)} />
        <Route path="template-triggers" element={ph('Org Template Triggers',4)} />
        <Route path="alarm-settings"    element={ph('Org Alarm Settings',   4)} />
        <Route path="alarm-contacts"    element={ph('Org Alarm Contacts',   4)} />
        <Route path="schedule-tasks"    element={ph('Org Schedule Tasks',   4)} />
        <Route path="settings"          element={ph('Org Settings',         4)} />
      </Route>

      {/* ── User ── */}
      <Route path="/user" element={
        <ProtectedRoute requiredRole="user">
          <DashboardLayout navItems={userNav} role="user" />
        </ProtectedRoute>
      }>
        <Route index                     element={<UserDashboard />} />
        <Route path="notifications"      element={<UserNotifications />} />
        <Route path="subscription"       element={ph('Subscription',       5)} />
        <Route path="products"           element={ph('Products',           5)} />
        <Route path="schedule"           element={ph('Schedule',           5)} />
        <Route path="slab-rates"         element={ph('Slab Rates',         5)} />
        <Route path="interval-history"   element={ph('Interval History',   5)} />
        <Route path="alarm-template"     element={ph('Alarm Template',     5)} />
        <Route path="ai-analytics"       element={ph('AI Analytics',       5)} />
        <Route path="voltage-imbalance"  element={ph('Voltage Imbalance',  5)} />
        <Route path="current-imbalance"  element={ph('Current Imbalance',  5)} />
        <Route path="power-factor"       element={ph('Power Factor',       5)} />
        <Route path="energy-consumption" element={ph('Energy Consumption', 5)} />
        <Route path="anomalies"          element={ph('Anomalies',          5)} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}
