import { Construction, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function PlaceholderPage({ title, description, session }) {
  const navigate = useNavigate()
  return (
    <div className="card p-8 min-h-[400px] flex flex-col items-center justify-center text-center max-w-lg mx-auto my-12 animate-modal-entry shadow-elevated">
      <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 text-primary-500">
        <Construction size={32} />
      </div>
      
      <span className="badge badge-warning mb-2">Coming Soon</span>
      
      <h3 className="text-lg font-bold text-surface-900 tracking-tight mb-2">
        {title ? `${title} Feature` : 'Feature Workspace'}
      </h3>
      
      <p className="text-xs text-surface-500 max-w-sm leading-relaxed mb-6">
        {description ?? 'We are building a customized energy analytics interface for this module. This workspace will be activated shortly.'}
      </p>

      {session && (
        <div className="text-[10px] font-bold text-surface-400 bg-surface-100 border border-surface-200 px-3 py-1.5 rounded-lg mb-6 uppercase tracking-wider">
          Scheduled for Session {session} Integration
        </div>
      )}

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="btn-secondary text-xs flex items-center gap-1.5 py-1.5"
      >
        <ArrowLeft size={13} />
        Go back
      </button>
    </div>
  )
}
