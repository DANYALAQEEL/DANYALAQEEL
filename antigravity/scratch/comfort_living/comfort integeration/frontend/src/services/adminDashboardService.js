import { adminApi } from './adminApi'

// All of these hit the existing, already-mounted /api/dashboard/* endpoints
// (backend/routes/dashboardRoutes.js + controllers/dashboardController.js).
// Nothing here is invented — every field mirrors the controller's response.

export async function fetchDashboardStats() {
  const res = await adminApi.get('/dashboard')
  return { stats: res.stats, recentOrders: res.recentOrders || [] }
}

export async function fetchMonthlySales() {
  const res = await adminApi.get('/dashboard/monthly-sales')
  return res.analytics || []
}

export async function fetchTopSellingProducts() {
  const res = await adminApi.get('/dashboard/top-products')
  return res.products || []
}

export async function fetchCustomerAnalytics() {
  const res = await adminApi.get('/dashboard/customer-analytics')
  return res.analytics
}

export async function fetchInventoryAnalytics() {
  const res = await adminApi.get('/dashboard/inventory-analytics')
  return { analytics: res.analytics, recentInventoryLogs: res.recentInventoryLogs || [] }
}

export async function fetchOrderAnalytics() {
  const res = await adminApi.get('/dashboard/order-analytics')
  return res.analytics
}

export async function fetchSystemHealth() {
  const res = await adminApi.get('/dashboard/health')
  return res.system
}
