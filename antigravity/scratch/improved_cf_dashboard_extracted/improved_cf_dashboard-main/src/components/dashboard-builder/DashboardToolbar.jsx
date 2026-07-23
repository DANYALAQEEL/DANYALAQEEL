import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Pencil, Check, Copy, Download, Upload, Trash2, Share2, Lock, Star, User, Users,
} from 'lucide-react'

// Slim action bar shown inside a single dashboard's editor view (as opposed
// to the browse list). Handles rename-in-place, edit toggle, sharing,
// duplication, import/export, favoriting, and delete.
export default function DashboardToolbar({
  dashboard, basePath, editing, onToggleEdit,
  ownIt, onRename, onDuplicate, onDelete, onExport, onImport, onToggleShare, onToggleFavorite, isManager,
}) {
  const navigate = useNavigate()
  const fileRef = useRef(null)
  const [renaming, setRenaming] = useState(false)
  const [nameDraft, setNameDraft] = useState(dashboard.name)

  function handleImportFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (evt) => {
      try {
        const json = JSON.parse(evt.target.result)
        onImport(json)
      } catch {
        alert('Invalid dashboard JSON file.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  function commitRename() {
    const trimmed = nameDraft.trim()
    if (trimmed && trimmed !== dashboard.name) onRename(trimmed)
    setRenaming(false)
  }

  return (
    <div className="card p-3 flex flex-wrap items-center gap-2.5">
      <button type="button" className="btn-ghost text-xs py-2 px-2" title="Back to Dashboards" onClick={() => navigate(basePath)}>
        <ArrowLeft size={15} />
      </button>

      <div className="flex items-center gap-2 min-w-0 flex-1">
        {renaming ? (
          <input
            autoFocus
            className="input py-1.5 text-sm font-bold max-w-xs"
            value={nameDraft}
            onChange={e => setNameDraft(e.target.value)}
            onBlur={commitRename}
            onKeyDown={e => { if (e.key === 'Enter') commitRename(); if (e.key === 'Escape') { setNameDraft(dashboard.name); setRenaming(false) } }}
          />
        ) : (
          <h2
            className={`text-sm font-bold text-surface-900 truncate ${ownIt ? 'cursor-text hover:text-primary-600' : ''}`}
            title={ownIt ? 'Click to rename' : dashboard.name}
            onClick={() => ownIt && setRenaming(true)}
          >
            {dashboard.name}
          </h2>
        )}
        <button type="button" onClick={onToggleFavorite} className="text-surface-300 hover:text-primary-500 flex-shrink-0">
          <Star size={15} className={dashboard.favorite ? 'fill-primary-500 text-primary-500' : ''} />
        </button>
        <span className={`badge ${ownIt ? 'badge-info' : 'badge-neutral'} flex items-center gap-1 flex-shrink-0`}>
          {ownIt ? <User size={10} /> : <Users size={10} />} {ownIt ? 'Owned by you' : 'Shared by organization'}
        </span>
      </div>

      {ownIt ? (
        <button
          type="button"
          className={editing ? 'btn-primary text-xs py-2 px-3' : 'btn-secondary text-xs py-2 px-3'}
          onClick={onToggleEdit}
        >
          {editing ? <Check size={14} /> : <Pencil size={14} />}
          {editing ? 'Done Editing' : 'Edit Layout'}
        </button>
      ) : (
        <span className="badge badge-neutral flex items-center gap-1"><Lock size={11} /> Read-only</span>
      )}

      <button
        type="button"
        className="btn-ghost text-xs py-2 px-2"
        title={ownIt ? 'Duplicate' : 'Make your own editable copy'}
        onClick={() => onDuplicate(!ownIt)}
      >
        <Copy size={14} />
      </button>

      {isManager && ownIt && (
        <button
          type="button"
          className="btn-ghost text-xs py-2 px-2"
          title={dashboard.visibility === 'shared' ? 'Shared with organization users — click to make private' : 'Private — click to share with organization users'}
          onClick={onToggleShare}
        >
          <Share2 size={14} className={dashboard.visibility === 'shared' ? 'text-primary-600' : ''} />
        </button>
      )}

      <button type="button" className="btn-ghost text-xs py-2 px-2" title="Export as JSON" onClick={onExport}>
        <Download size={14} />
      </button>

      <button type="button" className="btn-ghost text-xs py-2 px-2" title="Import dashboard JSON" onClick={() => fileRef.current?.click()}>
        <Upload size={14} />
      </button>
      <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={handleImportFile} />

      {ownIt && (
        <button type="button" className="btn-danger text-xs py-2 px-2" title="Delete dashboard" onClick={onDelete}>
          <Trash2 size={14} />
        </button>
      )}
    </div>
  )
}
