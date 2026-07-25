import { adminApi } from './adminApi'

export async function fetchWebsiteSettings() {
  const res = await adminApi.get('/settings')
  return res.settings
}

export async function updateWebsiteSettings(payload) {
  const res = await adminApi.put('/settings', payload)
  return res.settings
}

export async function fetchSeoSettings() {
  const res = await adminApi.get('/seo')
  return res.seo
}

export async function updateSeoSettings(payload) {
  const res = await adminApi.put('/seo', payload)
  return res.seo
}
