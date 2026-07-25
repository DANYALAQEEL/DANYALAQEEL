import { api } from './api'
import { mapProduct } from '../utils/mapProduct'

// Note: the wishlist endpoints respond with { success, wishlist } directly
// (not wrapped in a `data` field like most of the other endpoints).
// Only GET /wishlist populates the product details (add/remove return
// unpopulated product IDs), so add/remove just confirm success and the
// caller re-fetches via fetchWishlist() for the full, up-to-date list.

export async function fetchWishlist(email) {
  const res = await api.get(`/wishlist?email=${encodeURIComponent(email)}`)
  const products = res.wishlist?.products || []
  return products.map((p) => mapProduct(p.product))
}

export async function addWishlistItem(customer, productId) {
  await api.post('/wishlist/add', { customer, productId })
  return fetchWishlist(customer.email)
}

export async function removeWishlistItem(email, productId) {
  await api.delete(`/wishlist/${productId}`, { email })
  return fetchWishlist(email)
}
