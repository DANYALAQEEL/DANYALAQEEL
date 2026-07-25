import { adminApi } from './adminApi'

// /api/about is a single-document endpoint (one About record for the
// whole site) — GET returns the raw document (or null if none exists yet).

export async function fetchAbout() {
  return adminApi.get('/about')
}

export async function updateAbout(payload) {
  return adminApi.put('/about', payload)
}
