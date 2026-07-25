import { api } from './api'

// Fetch a large page so existing components (which filter/sort/search
// client-side) keep working exactly as they did with the dummy data array.
export async function fetchAllProducts() {
  const res = await api.get('/products?limit=1000&sort=latest')
  return res.data || []
}

export async function fetchProductBySlug(slug) {
  const res = await api.get(`/products/slug/${slug}`)
  return res.data
}

export async function fetchCategories() {
  const res = await api.get('/products/categories')
  return res.data || []
}
