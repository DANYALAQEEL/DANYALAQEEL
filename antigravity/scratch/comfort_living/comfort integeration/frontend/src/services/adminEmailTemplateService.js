import { adminApi } from './adminApi'

export async function fetchEmailTemplates() {
  const res = await adminApi.get('/email-templates')
  return res.templates || []
}

export async function createEmailTemplate(payload) {
  const res = await adminApi.post('/email-templates', payload)
  return res.template
}

export async function updateEmailTemplate(id, payload) {
  const res = await adminApi.put(`/email-templates/${id}`, payload)
  return res.template
}
