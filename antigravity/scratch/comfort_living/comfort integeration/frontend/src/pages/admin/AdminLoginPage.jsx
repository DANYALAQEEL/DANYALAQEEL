import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLock, FiMail } from 'react-icons/fi'
import { useAdminAuth } from '../../context/AdminAuthContext'

function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const { login } = useAdminAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(formData)
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand flex items-center justify-center px-4">
      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-1">Comfort Livings</h1>
        <p className="text-gray-400 text-sm mb-8">Admin Dashboard — Sign in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-11 pr-4 py-3 bg-[#0d1829] border border-[#1e3a4a] rounded-xl text-sm text-white outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full pl-11 pr-4 py-3 bg-[#0d1829] border border-[#1e3a4a] rounded-xl text-sm text-white outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-opacity-90 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLoginPage
