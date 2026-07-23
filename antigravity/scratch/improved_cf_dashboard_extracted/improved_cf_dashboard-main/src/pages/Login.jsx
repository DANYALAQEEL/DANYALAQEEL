import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, ROLES } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { Zap, Eye, EyeOff, ShieldCheck, Building2, User, CheckCircle2, Sun, Moon } from 'lucide-react'

const DEMO_ACCOUNTS = [
  { 
    role: ROLES.ADMIN, 
    email: 'appadmin@yopmail.com', 
    label: 'Super Admin', 
    hint: 'Manage organizations & gateways',
    icon: ShieldCheck,
    color: 'border-danger-600/20 hover:border-danger-600/50 bg-danger-50/20'
  },
  { 
    role: ROLES.ORG, 
    email: 'org@cfsmartems.com', 
    label: 'Organization', 
    hint: 'Manage devices & triggers',
    icon: Building2,
    color: 'border-info-600/20 hover:border-info-600/50 bg-info-50/20'
  },
  { 
    role: ROLES.USER, 
    email: 'maryam@delicia.com', 
    label: 'End User', 
    hint: 'View consumption & anomalies',
    icon: User,
    color: 'border-success-600/20 hover:border-success-600/50 bg-success-50/20'
  },
]

export default function Login() {
  const { login } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')

  // Input focus states to lock expanded layout on hover
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  // Portal transition states
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Hover Expand state
  const [isHovered, setIsHovered] = useState(false)
  const isExpanded = isHovered || emailFocused || passwordFocused || isTransitioning

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (emailFocused || passwordFocused || isTransitioning) return
      
      const width = window.innerWidth
      if (width < 1024) {
        setIsHovered(false)
        return
      }

      // If cursor is in the right half of the screen (excluding the extreme right scrollbar margin)
      if (e.clientX >= width / 2 && e.clientX <= width - 25) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleGlobalMouseLeave = () => {
      setIsHovered(false)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseleave', handleGlobalMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseleave', handleGlobalMouseLeave)
    }
  }, [emailFocused, passwordFocused, isTransitioning])

  const triggerTransition = (role) => {
    setIsLoggingIn(true)
    setTimeout(() => {
      setIsTransitioning(true)
    }, 50)

    setTimeout(() => {
      login(role)
      navigate(`/${role}`)
    }, 1000)
  }

  const handleDemo = (role) => {
    triggerTransition(role)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const match = DEMO_ACCOUNTS.find(a => a.email === email)
    if (match && password === 'password123') {
      triggerTransition(match.role)
    } else {
      setError('Invalid credentials. Try selecting a demo account below.')
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Floating Theme Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-[999] p-2.5 rounded-full bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 shadow-md transition-all duration-150 active:scale-95 cursor-pointer"
        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      >
        {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
      </button>
      <div className="min-h-screen bg-surface-50 dark:bg-surface-950 flex animate-fadeIn relative transition-colors duration-200">
          {/* Left Panel: Hero Graphic */}
          <div className={`hidden lg:flex bg-surface-900 text-white flex-col relative overflow-hidden select-none border-r border-surface-800 transition-all duration-700 ease-in-out ${isExpanded ? 'lg:max-w-0 lg:w-0 lg:p-0 opacity-0 border-r-0 pointer-events-none' : 'lg:max-w-none lg:w-1/2 p-12 opacity-100'}`}>
            {/* Background Image Texture Overlay */}
            <div 
               className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-screen pointer-events-none select-none z-0" 
              style={{ backgroundImage: "url('/embedded_bg.png')" }}
            />
            {/* Circuit Pattern Background decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Inner Content Wrapper: hidden when expanded to prevent text-wrap height stretching */}
            <div className={`w-full flex-1 flex flex-col justify-between z-10 ${isExpanded ? 'hidden' : ''}`}>
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-surface-950">
                    <circle cx="4" cy="6"  r="2" fill="currentColor"/>
                    <circle cx="4" cy="12" r="2" fill="currentColor"/>
                    <circle cx="4" cy="18" r="2" fill="currentColor"/>
                    <line x1="6"  y1="6"  x2="12" y2="6"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="6"  y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="6"  y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="6"  x2="12" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="16" y1="12" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="14" y1="18" x2="14" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="9"  x2="20" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="16" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="14" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-base font-bold text-surface-100 tracking-wide leading-none">
                    EMBED<span className="text-primary-500">AI</span>OT
                  </h1>
                  <p className="text-[9px] text-surface-500 uppercase tracking-widest mt-0.5">Smarter Solutions</p>
                </div>
              </div>

              {/* Feature List */}
              <div className="my-auto space-y-8 max-w-md">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Next-generation IoT energy management.
                  </h2>
                  <p className="text-sm text-surface-400">
                    Optimize power factor, isolate load imbalances, and monitor consumption patterns across multi-org architectures in real-time.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    ['IoT Device Monitoring', 'Keep track of gateways and active endpoints in real-time.'],
                    ['AI-Driven Analytics', 'Detect consumption anomalies and voltage fluctuations instantly.'],
                    ['Role-Based Dashboards', 'Granular control workflows for admins, orgs, and end-users.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex gap-3.5">
                      <CheckCircle2 className="text-primary-500 flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <h4 className="text-xs font-bold text-surface-100 uppercase tracking-wide">{title}</h4>
                        <p className="text-xs text-surface-400 mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="text-xs text-surface-500">
                &copy; 2026 EmbedAIoT Platform. All rights reserved.
              </div>
            </div>
          </div>

          {/* Right Panel: Sign-In Form */}
          <div
            className={`w-full flex flex-col bg-white dark:bg-surface-900 transition-morph relative ${isTransitioning ? 'fixed inset-0 w-full h-full lg:w-full z-[9999] p-6 md:p-12' : (isExpanded ? 'lg:w-full px-12 md:px-24 py-12' : 'lg:w-1/2 px-6 py-12 md:px-16 lg:px-24')}`}
          >
            {/* Subtle background image overlay when expanded */}
            {isExpanded && (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none select-none z-0" 
                style={{ backgroundImage: "url('/embedded_bg.png')" }}
              />
            )}
            <div className={`mx-auto my-auto w-full max-w-md space-y-6 transition-all duration-300 z-10 ${isTransitioning ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
              {/* Logo on mobile, or on desktop when expanded */}
              <div className={`flex items-center gap-3 mb-4 ${isExpanded ? 'flex' : 'lg:hidden'}`}>
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-surface-950">
                    <circle cx="4" cy="6"  r="2" fill="currentColor"/>
                    <circle cx="4" cy="12" r="2" fill="currentColor"/>
                    <circle cx="4" cy="18" r="2" fill="currentColor"/>
                    <line x1="6"  y1="6"  x2="12" y2="6"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="6"  y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="6"  y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="6"  x2="12" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="16" y1="12" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="14" y1="18" x2="14" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="12" y1="9"  x2="20" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="16" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="14" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h1 className="text-sm font-bold text-surface-900 dark:text-surface-100 tracking-wide uppercase">
                  EMBED<span className="text-primary-500">AI</span>OT
                </h1>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-surface-900 dark:text-surface-100 tracking-tight">Sign in</h2>
                <p className="text-xs text-surface-500 dark:text-surface-400 mt-1">Enter your credentials to access the platform</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="label">Email address</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      className="input pr-10"
                      type={showPw ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={e => { setPassword(e.target.value); setError('') }}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600"
                      onClick={() => setShowPw(o => !o)}
                    >
                      {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-danger-600 bg-danger-600/10 border border-danger-600/20 rounded-lg px-3 py-2 flex items-center gap-1">
                    <span>⚠</span> {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Sign in
                </button>
              </form>

              {/* Quick Demo Access Options */}
              <div className="pt-4 border-t border-surface-150 dark:border-surface-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-surface-400 dark:text-surface-500 mb-3">
                  Quick demo access
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {DEMO_ACCOUNTS.map(acc => (
                    <button
                      type="button"
                      key={acc.role}
                      onClick={() => handleDemo(acc.role)}
                      className={`border rounded-xl p-3 flex items-start gap-3 text-left transition-all duration-150 select-none cursor-pointer ${acc.color}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 flex items-center justify-center flex-shrink-0 text-surface-700 dark:text-surface-300 shadow-sm">
                        <acc.icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-surface-800 dark:text-surface-100 leading-tight">{acc.label}</p>
                        <p className="text-[10px] text-surface-500 dark:text-surface-400 mt-0.5 truncate">{acc.hint}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Root-Level Welcoming Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-surface-950 z-[99999] px-6 select-none welcome-content-fade-in">
          <div className="text-center space-y-6 max-w-md">
            <div className="w-32 h-32 bg-primary-500 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-surface-950">
                <circle cx="4" cy="6"  r="2" fill="currentColor"/>
                <circle cx="4" cy="12" r="2" fill="currentColor"/>
                <circle cx="4" cy="18" r="2" fill="currentColor"/>
                <line x1="6"  y1="6"  x2="12" y2="6"  stroke="currentColor" strokeWidth="1.5"/>
                <line x1="6"  y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="6"  y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="12" y1="6"  x2="12" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                <line x1="16" y1="12" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="14" y1="18" x2="14" y2="21" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="12" y1="9"  x2="20" y2="9"  stroke="currentColor" strokeWidth="1.5"/>
                <line x1="16" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="14" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-[#141828] dark:text-surface-100 tracking-widest uppercase mt-4">
                EMBED<span className="text-primary-500 font-bold">AI</span>OT
              </h2>
              <p className="text-sm text-surface-500 uppercase tracking-[0.25em] font-bold animate-pulse mt-2">
                Opening secure portal...
              </p>
            </div>
            <div className="w-10 h-10 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin mx-auto mt-6"></div>
          </div>
        </div>
      )}
    </div>
  )
}
