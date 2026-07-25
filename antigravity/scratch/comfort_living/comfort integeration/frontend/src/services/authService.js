import { api, setToken } from './api'

export async function registerCustomer({ name, email, phone, password }) {
  const res = await api.post('/customers/register', { name, email, phone, password })
  setToken(res.data.token)
  return res.data.user
}

export async function loginCustomer({ email, password }) {
  const res = await api.post('/customers/login', { email, password })
  setToken(res.data.token)
  return res.data.user
}

export async function fetchCurrentCustomer() {
  const res = await api.get('/customers/me')
  return res.data
}

export function logoutCustomer() {
  setToken(null)
}
