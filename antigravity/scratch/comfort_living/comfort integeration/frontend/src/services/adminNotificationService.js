import { adminApi } from './adminApi'

export async function fetchNotifications() {
  const res = await adminApi.get('/notifications')
  return res.notifications || []
}

export async function markNotificationRead(id) {
  const res = await adminApi.patch(`/notifications/${id}/read`)
  return res.notification
}

export async function markAllNotificationsRead() {
  return adminApi.patch('/notifications/read-all')
}
