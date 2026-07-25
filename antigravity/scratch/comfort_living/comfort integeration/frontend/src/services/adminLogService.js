import { adminApi } from './adminApi'

export async function fetchAuditLogs() {
  const res = await adminApi.get('/audit')
  return res.logs || []
}

export async function fetchActivityLogs() {
  const res = await adminApi.get('/activity')
  return res.logs || []
}
