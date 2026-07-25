// ============================================
// CENTRAL API CLIENT
// All frontend <-> backend requests go through here.
// Handles the base URL, JSON headers, and the customer
// auth token (stored in localStorage) automatically.
// ============================================

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Backend origin (without the /api suffix) — used to resolve
// relative image paths like "/uploads/xyz.png" returned by the API.
export const API_ORIGIN = API_URL.replace(/\/api\/?$/, '')

const TOKEN_KEY = 'cl_customer_token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token)
  } else {
    localStorage.removeItem(TOKEN_KEY)
  }
}

async function request(path, options = {}) {
  const token = getToken()

  const headers = {
    ...(options.body && !(options.body instanceof FormData)
      ? { 'Content-Type': 'application/json' }
      : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  })

  let data
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    const message = data?.message || `Request failed (${response.status})`
    const error = new Error(message)
    error.status = response.status
    error.data = data
    throw error
  }

  return data
}

export const api = {
  get: (path) => request(path, { method: 'GET' }),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  patch: (path, body) => request(path, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (path, body) =>
    request(path, { method: 'DELETE', ...(body ? { body: JSON.stringify(body) } : {}) }),
}

// Resolves a relative "/uploads/..." path from the backend into a full URL.
// Leaves already-absolute URLs (e.g. the old Unsplash dummy-data images) untouched.
export function resolveImageUrl(path) {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  return `${API_ORIGIN}${path.startsWith('/') ? '' : '/'}${path}`
}
