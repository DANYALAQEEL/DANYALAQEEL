import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, ROLES } from '../context/AuthContext'
import { Zap, Eye, EyeOff, ChevronDown } from 'lucide-react'

const DEMO_ACCOUNTS = [
  { label: '👑 Super Admin',   role: ROLES.ADMIN, email: 'appadmin@yopmail.com',   hint: 'Full platform access' },
  { label: '🏢 Organization',  role: ROLES.ORG,   email: 'org@cfsmartems.com',     hint: 'Organization dashboard' },
  { label: '👤 User',          role: ROLES.USER,  email: 'maryam@delicia.com',     hint: 'End-user dashboard' },
]

export default function Login() {
  const { login }   = useAuth()
  const navigate    = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw]     = useState(false)
  const [error, setError]       = useState('')
  const [demoOpen, setDemoOpen] = useState(false)

  const handleDemo = (role) => {
    login(role)
    setDemoOpen(false)
    navigate(`/${role}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const match = DEMO_ACCOUNTS.find(a => a.email === email)
    if (match && password === 'password123') {
      login(match.role)
      navigate(`/${match.role}`)
    } else {
      setError('Invalid credentials. Try a demo account below.')
    }
  }

  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-surface-100">CF Smart EMS</h1>
            <p className="text-xs text-surface-500">Energy Management System</p>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-sm font-semibold text-surface-100 mb-1">Sign in</h2>
          <p className="text-xs text-surface-500 mb-5">Access your dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Email address</label>
              <input
                className="input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
              />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input
                  className="input pr-10"
                  type={showPw ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError('') }}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 hover:text-surface-300"
                  onClick={() => setShowPw(o => !o)}
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-xs text-danger-600 bg-danger-600/10 border border-danger-600/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <button type="submit" className="btn-primary w-full justify-center py-2.5">
              Sign in
            </button>
          </form>

          {/* Demo accounts */}
          <div className="mt-4 pt-4 border-t border-surface-800">
            <div className="relative">
              <button
                onClick={() => setDemoOpen(o => !o)}
                className="btn-secondary w-full justify-between"
              >
                <span>Quick demo access</span>
                <ChevronDown size={14} className={`transition-transform ${demoOpen ? 'rotate-180' : ''}`} />
              </button>
              {demoOpen && (
                <div className="absolute bottom-full mb-2 left-0 right-0 bg-surface-900 border border-surface-700 rounded-xl shadow-2xl py-1 z-10">
                  {DEMO_ACCOUNTS.map(a => (
                    <button
                      key={a.role}
                      onClick={() => handleDemo(a.role)}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-800 text-left"
                    >
                      <div>
                        <p className="text-sm text-surface-200 font-medium">{a.label}</p>
                        <p className="text-xs text-surface-500">{a.hint}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
