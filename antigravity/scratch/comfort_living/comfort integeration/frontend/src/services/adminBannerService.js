import { adminApi } from './adminApi'

export async function fetchBanners() {
  const res = await adminApi.get('/banners')
  return res.banners || []
}

export async function createBanner(payload) {
  const res = await adminApi.post('/banners', payload)
  return res.banner
}

export async function updateBanner(id, payload) {
  const res = await adminApi.put(`/banners/${id}`, payload)
  return res.banner
}

export async function deleteBanner(id) {
  return adminApi.delete(`/banners/${id}`)
}
