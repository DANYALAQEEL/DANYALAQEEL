import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { CustomDashboardProvider } from './context/CustomDashboardContext'
import DashboardLayout from './components/layout/DashboardLayout'
import { adminNav, orgNav, userNav } from './config/navConfig.jsx'

// Pages
import Login               from './pages/Login'

// Admin
import AdminDashboard      from './pages/admin/AdminDashboard'
import AdminOrganizations  from './pages/admin/AdminOrganizations'
import AdminUsers          from './pages/admin/AdminUsers'
import AdminGateways       from './pages/admin/AdminGateways'
import AdminDevices           from './pages/admin/AdminDevices'
import AdminDeviceTemplates   from './pages/admin/AdminDeviceTemplates'
import AdminManageIcons       from './pages/admin/AdminManageIcons'
import AdminProducts          from './pages/admin/AdminProducts'
import AdminDataCenter        from './pages/admin/AdminDataCenter'
import AdminHistoricalData    from './pages/admin/AdminHistoricalData'
import AdminVariableAlarms    from './pages/admin/AdminVariableAlarms'
import AdminLinkageRecords    from './pages/admin/AdminLinkageRecords'
import AdminTemplateTriggers  from './pages/admin/AdminTemplateTriggers'
import AdminAlarmSettings     from './pages/admin/AdminAlarmSettings'
import AdminAlarmContacts     from './pages/admin/AdminAlarmContacts'
import AdminDeviceTimestamps  from './pages/admin/AdminDeviceTimestamps'
import AdminScheduleTasks     from './pages/admin/AdminScheduleTasks'
import AdminThemeSettings     from './pages/admin/AdminThemeSettings'
import AdminSettings          from './pages/admin/AdminSettings'

// Org
import OrgDashboard        from './pages/org/OrgDashboard'
import OrgDevices          from './pages/org/OrgDevices'
import OrgGateways            from './pages/org/OrgGateways'
import OrgDeviceTemplates     from './pages/org/OrgDeviceTemplates'
import OrgHistoricalData      from './pages/org/OrgHistoricalData'
import OrgTemplateTriggers    from './pages/org/OrgTemplateTriggers'
import OrgAlarmSettings       from './pages/org/OrgAlarmSettings'
import OrgAlarmContacts       from './pages/org/OrgAlarmContacts'
import OrgScheduleTasks       from './pages/org/OrgScheduleTasks'
import OrgSettings            from './pages/org/OrgSettings'

// User
import UserDashboard       from './pages/user/UserDashboard'
import UserNotifications   from './pages/user/UserNotifications'
import UserSubscription       from './pages/user/UserSubscription'
import UserProducts           from './pages/user/UserProducts'
import UserSchedule           from './pages/user/UserSchedule'
import UserSlabRates          from './pages/user/UserSlabRates'
import UserIntervalHistory    from './pages/user/UserIntervalHistory'
import UserAlarmTemplate      from './pages/user/UserAlarmTemplate'
import UserAIAnalytics        from './pages/user/UserAIAnalytics'
import UserVoltageImbalance   from './pages/user/UserVoltageImbalance'
import UserCurrentImbalance   from './pages/user/UserCurrentImbalance'
import UserPowerFactor        from './pages/user/UserPowerFactor'
import UserEnergyConsumption  from './pages/user/UserEnergyConsumption'
import UserAnomalies          from './pages/user/UserAnomalies'

// Custom Dashboards (shared builder used by admin, org, and user roles)
import DashboardList          from './pages/DashboardList'
import DashboardEditor        from './pages/DashboardEditor'

function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (requiredRole && user.role !== requiredRole) return <Navigate to={`/${user.role}`} replace />
  return children
}

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
        <Route path="devices"           element={<AdminDevices />} />
        <Route path="device-templates"  element={<AdminDeviceTemplates />} />
        <Route path="icons"             element={<AdminManageIcons />} />
        <Route path="products"          element={<AdminProducts />} />
        <Route path="data-center"       element={<AdminDataCenter />} />
        <Route path="historical-data"   element={<AdminHistoricalData />} />
        <Route path="variable-alarms"   element={<AdminVariableAlarms />} />
        <Route path="linkage-records"   element={<AdminLinkageRecords />} />
        <Route path="template-triggers" element={<AdminTemplateTriggers />} />
        <Route path="alarm-settings"    element={<AdminAlarmSettings />} />
        <Route path="alarm-contacts"    element={<AdminAlarmContacts />} />
        <Route path="device-timestamps" element={<AdminDeviceTimestamps />} />
        <Route path="schedule-tasks"    element={<AdminScheduleTasks />} />
        <Route path="theme-settings"    element={<AdminThemeSettings />} />
        <Route path="settings"          element={<AdminSettings />} />
        <Route path="custom-dashboard" element={<DashboardList />} />
        <Route path="custom-dashboard/:id" element={<DashboardEditor />} />
      </Route>

      {/* ── Organization ── */}
      <Route path="/org" element={
        <ProtectedRoute requiredRole="org">
          <DashboardLayout navItems={orgNav} role="org" />
        </ProtectedRoute>
      }>
        <Route index                    element={<OrgDashboard />} />
        <Route path="devices"           element={<OrgDevices />} />
        <Route path="gateways"          element={<OrgGateways />} />
        <Route path="device-templates"  element={<OrgDeviceTemplates />} />
        <Route path="historical-data"   element={<OrgHistoricalData />} />
        <Route path="template-triggers" element={<OrgTemplateTriggers />} />
        <Route path="alarm-settings"    element={<OrgAlarmSettings />} />
        <Route path="alarm-contacts"    element={<OrgAlarmContacts />} />
        <Route path="schedule-tasks"    element={<OrgScheduleTasks />} />
        <Route path="settings"          element={<OrgSettings />} />
        <Route path="custom-dashboard" element={<DashboardList />} />
        <Route path="custom-dashboard/:id" element={<DashboardEditor />} />
      </Route>

      {/* ── User ── */}
      <Route path="/user" element={
        <ProtectedRoute requiredRole="user">
          <DashboardLayout navItems={userNav} role="user" />
        </ProtectedRoute>
      }>
        <Route index                     element={<UserDashboard />} />
        <Route path="notifications"      element={<UserNotifications />} />
        <Route path="subscription"       element={<UserSubscription />} />
        <Route path="products"           element={<UserProducts />} />
        <Route path="schedule"           element={<UserSchedule />} />
        <Route path="slab-rates"         element={<UserSlabRates />} />
        <Route path="interval-history"   element={<UserIntervalHistory />} />
        <Route path="alarm-template"     element={<UserAlarmTemplate />} />
        <Route path="ai-analytics"       element={<UserAIAnalytics />} />
        <Route path="voltage-imbalance"  element={<UserVoltageImbalance />} />
        <Route path="current-imbalance"  element={<UserCurrentImbalance />} />
        <Route path="power-factor"       element={<UserPowerFactor />} />
        <Route path="energy-consumption" element={<UserEnergyConsumption />} />
        <Route path="anomalies"          element={<UserAnomalies />} />
        <Route path="custom-dashboard" element={<DashboardList />} />
        <Route path="custom-dashboard/:id" element={<DashboardEditor />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CustomDashboardProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CustomDashboardProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
