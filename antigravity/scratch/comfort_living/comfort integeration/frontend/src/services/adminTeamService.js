import { adminApi } from './adminApi'

// includeInactive=true lets the admin see deactivated members too (the
// backend list endpoint only returns active:true by default).
export async function fetchTeamMembers() {
  const res = await adminApi.get('/team?includeInactive=true')
  return res.members || []
}

export async function createTeamMember(payload) {
  const res = await adminApi.post('/team', payload)
  return res.member
}

export async function updateTeamMember(id, payload) {
  const res = await adminApi.put(`/team/${id}`, payload)
  return res.member
}

// Soft delete — sets active:false server-side. The member can be brought
// back later by editing them and setting Active back on.
export async function deleteTeamMember(id) {
  return adminApi.delete(`/team/${id}`)
}
