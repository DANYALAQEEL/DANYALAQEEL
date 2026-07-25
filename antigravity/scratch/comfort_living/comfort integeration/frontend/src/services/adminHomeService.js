import { adminApi } from './adminApi'

// Uses the dedicated Home Page sections API (/api/home), separate from the
// generic CMS pages API (/api/cms). includeInactive=true lets the admin see
// deactivated sections too (the backend list endpoint only returns
// active:true by default).

export async function fetchHomeSections() {
  const res = await adminApi.get('/home?includeInactive=true')
  return res.sections || []
}

export async function createHomeSection(payload) {
  const res = await adminApi.post('/home', payload)
  return res.section
}

export async function updateHomeSection(id, payload) {
  const res = await adminApi.put(`/home/${id}`, payload)
  return res.section
}

export async function deleteHomeSection(id) {
  return adminApi.delete(`/home/${id}`)
}
