import { adminApi } from './adminApi'

export async function fetchCoupons() {
  const res = await adminApi.get('/coupons')
  return res.coupons || []
}

export async function createCoupon(payload) {
  const res = await adminApi.post('/coupons', payload)
  return res.coupon
}

export async function deleteCoupon(id) {
  return adminApi.delete(`/coupons/${id}`)
}
