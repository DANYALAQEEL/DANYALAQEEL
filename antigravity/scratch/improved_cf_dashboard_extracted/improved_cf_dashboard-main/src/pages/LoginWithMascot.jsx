import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, ROLES } from '../context/AuthContext'
import { Zap, Eye, EyeOff, ShieldCheck, Building2, User, CheckCircle2 } from 'lucide-react'

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
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')

  // View state: 'classic' or 'mascot'
  const [loginTheme, setLoginTheme] = useState('classic')

  // Panda Mascot states
  const [usernameFocused, setUsernameFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  // Portal transition states
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Hover Expand state
  const [isHovered, setIsHovered] = useState(false)
  const isExpanded = isHovered || usernameFocused || passwordFocused || isTransitioning

  const hoverTimeoutRef = useRef(null)

  const handleHoverEnter = (e) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    // Check extreme right scrollbar boundary for Classic view
    if (loginTheme === 'classic' && e.clientX > window.innerWidth - 25) {
      handleHoverLeave()
      return
    }
    setIsHovered(true)
  }

  const handleHoverMove = (e) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    // Check extreme right scrollbar boundary for Classic view
    if (loginTheme === 'classic' && e.clientX > window.innerWidth - 25) {
      handleHoverLeave()
      return
    }
    setIsHovered(true)
  }

  const handleHoverLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

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


  // Eyeball positions (in em)
  const eyeLStyle = usernameFocused
    ? { left: '0.75em', top: '1.12em' }
    : { left: '0.6em', top: '0.6em' }

  const eyeRStyle = usernameFocused
    ? { right: '0.75em', top: '1.12em' }
    : { right: '0.6em', top: '0.6em' }

  // Hand styles for cover-eyes animation (in em)
  const handLStyle = passwordFocused
    ? { width: '2.81em', height: '6.56em', top: '3.87em', left: '11.75em', transform: 'rotate(-155deg)' }
    : { width: '2.81em', height: '2.81em', top: '8.4em', left: '7.5em', transform: 'rotate(0deg)' }

  const handRStyle = passwordFocused
    ? { width: '2.81em', height: '6.56em', top: '3.87em', right: '11.75em', transform: 'rotate(155deg)' }
    : { width: '2.81em', height: '2.81em', top: '8.4em', right: '7.5em', transform: 'rotate(0deg)' }

  return (
    <div className="relative min-h-screen">
      {/* Floating Theme Toggle Switcher */}
      <button
        type="button"
        onClick={() => {
          setLoginTheme(prev => prev === 'classic' ? 'mascot' : 'classic')
          setError('')
        }}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-full shadow-md text-xs font-bold hover:border-primary-500 hover:text-primary-600 transition-all duration-200 cursor-pointer"
      >
        {loginTheme === 'classic' ? (
          <>
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Switch to Mascot View
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-surface-400" />
            Switch to Classic View
          </>
        )}
      </button>

      {loginTheme === 'classic' ? (
        /* ================= CLASSIC SAAS LOGIN LAYOUT ================= */
        <div className="min-h-screen bg-surface-50 flex animate-fadeIn relative">
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
            onMouseEnter={handleHoverEnter}
            onMouseMove={handleHoverMove}
            onMouseLeave={handleHoverLeave}
            className={`w-full flex flex-col bg-white transition-morph relative ${isTransitioning ? 'fixed inset-0 w-full h-full lg:w-full z-[9999] p-6 md:p-12' : (isExpanded ? 'lg:w-full px-12 md:px-24 py-12' : 'lg:w-1/2 px-6 py-12 md:px-16 lg:px-24')}`}
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
                <h1 className="text-sm font-bold text-surface-900 tracking-wide uppercase">
                  EMBED<span className="text-primary-500">AI</span>OT
                </h1>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-surface-900 tracking-tight">Sign in</h2>
                <p className="text-xs text-surface-500 mt-1">Enter your credentials to access the platform</p>
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
              <div className="pt-4 border-t border-surface-150">
                <p className="text-[10px] font-bold uppercase tracking-wider text-surface-400 mb-3">
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
                      <div className="w-8 h-8 rounded-lg bg-white border border-surface-200 flex items-center justify-center flex-shrink-0 text-surface-700 shadow-sm">
                        <acc.icon size={15} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-surface-800 leading-tight">{acc.label}</p>
                        <p className="text-[10px] text-surface-500 mt-0.5 truncate">{acc.hint}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ================= MASCOT LOGIN LAYOUT (FROM PIN VIDEO) ================= */
        <div className="min-h-screen bg-[#eef2f6] flex flex-col justify-center items-center py-12 px-4 select-none font-sans animate-fadeIn relative overflow-hidden">
          {/* Background Image Texture Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none select-none z-0" 
            style={{ backgroundImage: "url('/embedded_bg.png')" }}
          />
          {/* Panda + Card Container (sized using em for responsive scaling) */}
          <div className="text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] relative w-[31.25em] h-[33.5em] flex flex-col items-center">
            {/* Mascot parts container that fades out */}
            <div className={`absolute inset-0 z-20 pointer-events-none transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100'}`}>
              {/* Ears */}
              <div className="absolute w-[2.81em] h-[2.5em] bg-[#3f3554] border-[0.18em] border-[#2e0d30] rounded-t-[2.5em] top-[1.75em] left-[10.75em] origin-bottom-right rotate-[-38deg]"></div>
              <div className="absolute w-[2.81em] h-[2.5em] bg-[#3f3554] border-[0.18em] border-[#2e0d30] rounded-t-[2.5em] top-[1.75em] right-[10.75em] origin-bottom-left rotate-[38deg]"></div>

            {/* Panda Face */}
            <div className="absolute w-[8.4em] h-[7.5em] bg-white border-[0.18em] border-[#2e0d30] rounded-[7.5em_7.5em_5.62em_5.62em] top-[2.0em] left-1/2 -translate-x-1/2 z-10 shadow-sm">
              {/* Blush */}
              <div className="absolute w-[1.37em] h-[1em] bg-[#ff8bb1] rounded-full top-[4em] left-[1em] rotate-[25deg] opacity-80"></div>
              <div className="absolute w-[1.37em] h-[1em] bg-[#ff8bb1] rounded-full top-[4em] right-[1em] rotate-[-25deg] opacity-80"></div>

              {/* Eyes */}
              <div className="absolute w-[2em] h-[2.18em] bg-[#3f3554] rounded-[2em] top-[2.18em] left-[1.37em] rotate-[-20deg] overflow-hidden">
                <div
                  className="absolute w-[0.6em] h-[0.6em] bg-white rounded-full transition-all duration-300"
                  style={eyeLStyle}
                ></div>
              </div>
              <div className="absolute w-[2em] h-[2.18em] bg-[#3f3554] rounded-[2em] top-[2.18em] right-[1.37em] rotate-[20deg] overflow-hidden">
                <div
                  className="absolute w-[0.6em] h-[0.6em] bg-white rounded-full transition-all duration-300"
                  style={eyeRStyle}
                ></div>
              </div>

              {/* Nose */}
              <div className="absolute w-[1em] h-[1em] bg-[#3f3554] top-[4.37em] left-0 right-0 mx-auto rounded-[1.2em_0_0_0.25em] rotate-[45deg]">
                <div className="absolute bg-[#3f3554] h-[0.6em] w-[0.1em] -rotate-45 top-[0.75em] left-[0.9em]"></div>
              </div>

              {/* Mouth */}
              <div className="absolute w-[0.93em] h-[0.75em] bg-transparent top-[5.31em] left-[3.12em] rounded-full shadow-[0_0.18em_0_#3f3554]"></div>
              <div className="absolute w-[0.93em] h-[0.75em] bg-transparent top-[5.31em] left-[3.99em] rounded-full shadow-[0_0.18em_0_#3f3554]"></div>
            </div>

            {/* Hands */}
            <div
              className="absolute bg-[#3f3554] border-[0.18em] border-[#2e0d30] rounded-[0.6em_0.6em_2.18em_2.18em] transition-all duration-500 ease-in-out z-20"
              style={handLStyle}
            ></div>
            <div
              className="absolute bg-[#3f3554] border-[0.18em] border-[#2e0d30] rounded-[0.6em_0.6em_2.18em_2.18em] transition-all duration-500 ease-in-out z-20"
              style={handRStyle}
            ></div>

            </div>

            {/* Card Form */}
            <form
              onSubmit={handleSubmit}
              onMouseEnter={handleHoverEnter}
              onMouseMove={handleHoverMove}
              onMouseLeave={handleHoverLeave}
              className={`bg-white border-[0.18em] border-[#2e0d30] rounded-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[28%] px-8 py-7 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.15)] z-10 transition-morph ${
                isTransitioning ? 'fixed inset-0 w-full h-full top-0 left-0 translate-x-0 translate-y-0 rounded-none border-0 p-6 md:p-12 z-[9999]' : (isExpanded ? 'w-[31.25em]' : 'w-[23.75em]')
              }`}
            >
              {/* Form Content Wrapper (Fades out when transitioning) */}
              <div className={`w-full flex flex-col justify-center transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
              {/* Brand Header */}
              <div className="flex flex-col items-center mb-4 select-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-surface-950">
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
                  <span className="text-sm font-black text-[#2e0d30] uppercase tracking-wider">
                    EMBED<span className="text-primary-500">AI</span>OT
                  </span>
                </div>
                <p className="text-[10px] text-surface-400 uppercase tracking-widest mt-0.5">Smarter Solutions</p>
              </div>

              {/* Form Input fields */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-extrabold uppercase tracking-wide text-[#2e0d30]">Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    onFocus={() => setUsernameFocused(true)}
                    onBlur={() => setUsernameFocused(false)}
                    className="w-full text-sm font-semibold text-[#3f3554] px-2.5 py-1.5 bg-surface-50 border-b-2 border-surface-200 focus:border-[#f4c531] outline-none transition-colors duration-150"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold uppercase tracking-wide text-[#2e0d30]">Password</label>
                  <div className="relative">
                    <input
                      type={showPw ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={e => { setPassword(e.target.value); setError('') }}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      className="w-full text-sm font-semibold text-[#3f3554] px-2.5 py-1.5 bg-surface-50 border-b-2 border-surface-200 focus:border-[#f4c531] outline-none transition-colors duration-150 pr-10"
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
              </div>

              {error && (
                <p className="text-xs text-danger-600 bg-danger-600/10 border border-danger-600/20 rounded-lg px-2.5 py-1.5 flex items-center gap-1 mt-3">
                  <span>⚠</span> {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#f4c531] border-2 border-[#2e0d30] hover:bg-[#e2b629] text-[#2e0d30] font-black text-xs py-2 px-4 rounded-xl uppercase tracking-widest mt-4 shadow-sm active:translate-y-0.5 transition-all duration-150 cursor-pointer"
              >
                Sign in
              </button>

              {/* Quick Demo Access Options */}
              <div className="mt-4 pt-3 border-t border-surface-200">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-surface-400 mb-2 text-center">
                  Quick demo access
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {DEMO_ACCOUNTS.map(acc => (
                    <button
                      type="button"
                      key={acc.role}
                      onClick={() => handleDemo(acc.role)}
                      className="border border-[#2e0d30]/20 hover:border-[#2e0d30] bg-[#f4c531]/10 hover:bg-[#f4c531]/20 rounded-lg p-1.5 flex flex-col items-center text-center transition-all duration-150 cursor-pointer"
                    >
                      <div className="text-[#2e0d30]">
                        <acc.icon size={15} />
                      </div>
                      <span className="text-[10px] font-bold text-[#2e0d30] mt-0.5 leading-none">{acc.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Root-Level Welcoming Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[99999] px-6 select-none welcome-content-fade-in">
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
              <h2 className="text-3xl font-black text-[#141828] tracking-widest uppercase mt-4">
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
