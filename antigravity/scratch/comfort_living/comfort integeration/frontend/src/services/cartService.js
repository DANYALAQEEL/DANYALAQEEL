import { api } from './api'

export async function fetchCart() {
  const res = await api.get('/cart')
  return res.data.items
}

export async function addCartItem(productId, quantity, selectedColor, selectedSize) {
  const res = await api.post('/cart/add', { productId, quantity, selectedColor, selectedSize })
  return res.data.items
}

export async function updateCartItem(productId, quantity) {
  const res = await api.put(`/cart/${productId}`, { quantity })
  return res.data.items
}

export async function removeCartItem(productId) {
  const res = await api.delete(`/cart/${productId}`)
  return res.data.items
}

export async function clearCartBackend() {
  const res = await api.delete('/cart')
  return res.data.items
}
