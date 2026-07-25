import { adminApi } from './adminApi'

export async function fetchContactMessages() {
  const res = await adminApi.get('/contact')
  return res.messages || []
}
