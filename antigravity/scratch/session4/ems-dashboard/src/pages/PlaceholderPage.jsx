import { Construction } from 'lucide-react'

export default function PlaceholderPage({ title, description, session }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 text-center">
      <div className="w-12 h-12 rounded-2xl bg-surface-800 flex items-center justify-center mb-4">
        <Construction size={22} className="text-surface-500" />
      </div>
      <h3 className="text-sm font-semibold text-surface-300 mb-1">{title}</h3>
      <p className="text-xs text-surface-500 max-w-xs">
        {description ?? 'This page will be built in a future session.'}
      </p>
      {session && (
        <span className="badge badge-info mt-3">Session {session}</span>
      )}
    </div>
  )
}
