import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Zap, TrendingUp, Activity, Receipt } from 'lucide-react'

const cannedResponses = [
  "Based on your consumption data, you consumed 12,450 kWh this month, which is 8% above your 3-month average.",
  "I've detected a voltage imbalance on Phase B on June 9th between 14:00–16:00. Consider having your electrical team inspect the load distribution.",
  "Your power factor averaged 0.91 this month. Excellent performance! Maintaining PF above 0.90 is ideal for minimizing reactive power charges.",
  "Peak demand was recorded at 12:00 on June 10th at 24.3 kW. Consider shifting non-critical loads to off-peak hours (22:00–06:00) to reduce demand charges.",
]

const quickQuestions = [
  "What's my peak demand?",
  "Any anomalies this week?",
  "How can I reduce costs?",
]

const stats = [
  { label:'Monthly Energy',    value:'12,450 kWh', icon: Zap,       color:'text-primary-600'  },
  { label:'Peak Demand',       value:'24.3 kW',    icon: TrendingUp, color:'text-primary-600'  },
  { label:'Avg Power Factor',  value:'0.91',       icon: Activity,  color:'text-success-600'  },
  { label:'Cost Estimate',     value:'PKR 3,48,600',icon: Receipt,   color:'text-info-600'     },
]

export default function UserAIAnalytics() {
  const [messages, setMessages] = useState([
    { role:'assistant', text:"Hello! I'm your AI energy assistant. Ask me anything about your energy consumption, anomalies, or optimization tips." }
  ])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const responseIdx           = useRef(0)
  const bottomRef             = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { role:'user', text: msg }])
    setLoading(true)
    setTimeout(() => {
      const reply = cannedResponses[responseIdx.current % cannedResponses.length]
      responseIdx.current++
      setMessages(prev => [...prev, { role:'assistant', text: reply }])
      setLoading(false)
    }, 900)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h2 className="page-title">AI Analytics</h2>
          <p className="breadcrumb">User / AI Analytics</p>
        </div>
        <span className="badge badge-info flex items-center gap-1"><Bot size={11} /> AI Powered</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Panel */}
        <div className="lg:col-span-2 card flex flex-col" style={{ minHeight:'500px' }}>
          <div className="p-4 border-b border-surface-200 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-600/20 flex items-center justify-center">
              <Bot size={14} className="text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-surface-800">Energy AI Assistant</p>
              <p className="text-xs text-success-500">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight:'350px', maxHeight:'420px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'assistant' ? 'bg-primary-600/20' : 'bg-surface-700'
                }`}>
                  {msg.role === 'assistant'
                    ? <Bot  size={13} className="text-primary-600" />
                    : <User size={13} className="text-surface-700" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'assistant'
                    ? 'bg-surface-100 text-surface-800 rounded-tl-sm'
                    : 'bg-primary-500/10 text-surface-900 border border-primary-500/20 rounded-tr-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary-600/20 flex items-center justify-center">
                  <Bot size={13} className="text-primary-600" />
                </div>
                <div className="bg-surface-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}} />
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}} />
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-surface-200">
            <div className="flex gap-2">
              <input
                className="input flex-1"
                placeholder="Ask about energy consumption, anomalies, or tips..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
              />
              <button
                className="btn-primary px-3"
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats + Quick Questions */}
        <div className="space-y-4">
          <div className="card p-4">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-3">Quick Stats</p>
            <div className="space-y-3">
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="flex items-center justify-between p-3 bg-surface-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon size={14} className={color} />
                    <span className="text-xs text-surface-400">{label}</span>
                  </div>
                  <span className={`text-xs font-semibold ${color}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wide mb-3">Quick Questions</p>
            <div className="space-y-2">
              {quickQuestions.map(q => (
                <button
                  key={q}
                  className="w-full text-left text-xs text-surface-700 bg-surface-50 hover:bg-surface-100 border border-surface-200 hover:border-primary-600/40 rounded-lg px-3 py-2.5 transition-colors"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
