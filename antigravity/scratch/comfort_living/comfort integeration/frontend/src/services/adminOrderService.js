import { adminApi } from './adminApi'

export async function fetchAdminOrders() {
  const res = await adminApi.get('/orders')
  return res.orders || []
}

export async function fetchAdminOrder(id) {
  const res = await adminApi.get(`/orders/${id}`)
  return res.order
}

export async function updateOrderStatus(id, status, remarks) {
  const res = await adminApi.put(`/orders/${id}/status`, { status, remarks })
  return res.order
}

export async function verifyOrderPayment(id, paymentStatus, paymentNotes) {
  const res = await adminApi.patch(`/orders/${id}/payment`, { paymentStatus, paymentNotes })
  return res.order
}

export async function updateOrderTracking(id, payload) {
  const res = await adminApi.put(`/orders/${id}/tracking`, payload)
  return res.order
}

export async function deleteAdminOrder(id) {
  return adminApi.delete(`/orders/${id}`)
}

export async function fetchOrderStats() {
  const res = await adminApi.get('/orders/admin/stats')
  return res.stats
}
