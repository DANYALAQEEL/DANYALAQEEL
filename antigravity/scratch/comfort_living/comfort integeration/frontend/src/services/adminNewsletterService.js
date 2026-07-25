import { adminApi } from './adminApi'

export async function fetchSubscribers() {
  const res = await adminApi.get('/newsletter')
  return res.subscribers || []
}

export async function deleteSubscriber(id) {
  return adminApi.delete(`/newsletter/${id}`)
}
