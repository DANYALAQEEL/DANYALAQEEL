import { api } from './api'

export async function placeOrder(payload) {
  const res = await api.post('/orders/place-order', payload)
  return res.order
}

export async function trackOrder(orderNumber, email) {
  const res = await api.post('/orders/track', { orderNumber, email })
  return res.order
}
