import { adminApi } from './adminApi'

export async function fetchCmsPages() {
  const res = await adminApi.get('/cms')
  return res.pages || []
}

export async function createCmsPage(payload) {
  const res = await adminApi.post('/cms', payload)
  return res.page
}

export async function updateCmsPage(id, payload) {
  const res = await adminApi.put(`/cms/${id}`, payload)
  return res.page
}

export async function deleteCmsPage(id) {
  return adminApi.delete(`/cms/${id}`)
}
