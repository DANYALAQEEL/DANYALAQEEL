import { adminApi } from './adminApi'

export async function fetchFaqs() {
  const res = await adminApi.get('/faqs')
  return res.faqs || []
}

export async function createFaq(payload) {
  const res = await adminApi.post('/faqs', payload)
  return res.faq
}

export async function updateFaq(id, payload) {
  const res = await adminApi.put(`/faqs/${id}`, payload)
  return res.faq
}

export async function deleteFaq(id) {
  return adminApi.delete(`/faqs/${id}`)
}
