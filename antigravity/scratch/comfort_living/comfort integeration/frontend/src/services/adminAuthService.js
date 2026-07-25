import { adminApi, setAdminSession } from './adminApi'

export async function loginAdmin({ email, password }) {
  const res = await adminApi.post('/auth/admin-login', { email, password })
  setAdminSession(res.token, res.user)
  return res.user
}

export function logoutAdmin() {
  setAdminSession(null, null)
}
