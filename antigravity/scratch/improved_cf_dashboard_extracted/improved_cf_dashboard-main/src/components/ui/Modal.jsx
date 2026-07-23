import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children, footer, size = 'md', variant }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const sizes = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl' }
  const isDanger = variant === 'danger'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal w-full ${sizes[size]} shadow-elevated`}
        onClick={e => e.stopPropagation()}
      >
        <div className={`modal-header ${isDanger ? 'border-l-4 border-danger-600' : ''}`}>
          <h3 className={`text-sm font-bold tracking-tight ${isDanger ? 'text-danger-600' : 'text-surface-900'}`}>
            {title}
          </h3>
          <button type="button" className="btn-ghost p-1" onClick={onClose}>
            <X size={15} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
