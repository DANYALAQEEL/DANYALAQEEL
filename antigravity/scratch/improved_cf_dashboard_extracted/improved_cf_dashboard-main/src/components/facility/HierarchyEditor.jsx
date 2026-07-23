import { useState } from 'react'
import { Plus, Trash2, Building2, Layers3, DoorOpen, ChevronDown, ChevronRight, Sparkles } from 'lucide-react'

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

// Reusable tree editor for Organization → Buildings → Floors → Departments.
// Anything left blank is auto-completed on save (see facilitiesHierarchy.js).
export default function HierarchyEditor({ buildings, onChange }) {
  const [openBuildings, setOpenBuildings] = useState({})
  const [openFloors, setOpenFloors] = useState({})

  function toggleBuilding(id) { setOpenBuildings(o => ({ ...o, [id]: !o[id] })) }
  function toggleFloor(id) { setOpenFloors(o => ({ ...o, [id]: !o[id] })) }

  function addBuilding() {
    const b = { id: uid('b'), name: '', floors: [] }
    onChange([...buildings, b])
    setOpenBuildings(o => ({ ...o, [b.id]: true }))
  }
  function removeBuilding(id) {
    onChange(buildings.filter(b => b.id !== id))
  }
  function updateBuilding(id, name) {
    onChange(buildings.map(b => b.id === id ? { ...b, name } : b))
  }

  function addFloor(buildingId) {
    const f = { id: uid('f'), name: '', departments: [] }
    onChange(buildings.map(b => b.id === buildingId ? { ...b, floors: [...b.floors, f] } : b))
    setOpenFloors(o => ({ ...o, [f.id]: true }))
  }
  function removeFloor(buildingId, floorId) {
    onChange(buildings.map(b => b.id === buildingId ? { ...b, floors: b.floors.filter(f => f.id !== floorId) } : b))
  }
  function updateFloor(buildingId, floorId, name) {
    onChange(buildings.map(b => b.id === buildingId
      ? { ...b, floors: b.floors.map(f => f.id === floorId ? { ...f, name } : f) }
      : b))
  }

  function addDepartment(buildingId, floorId) {
    const d = { id: uid('d'), name: '' }
    onChange(buildings.map(b => b.id === buildingId
      ? { ...b, floors: b.floors.map(f => f.id === floorId ? { ...f, departments: [...f.departments, d] } : f) }
      : b))
  }
  function removeDepartment(buildingId, floorId, deptId) {
    onChange(buildings.map(b => b.id === buildingId
      ? { ...b, floors: b.floors.map(f => f.id === floorId ? { ...f, departments: f.departments.filter(d => d.id !== deptId) } : f) }
      : b))
  }
  function updateDepartment(buildingId, floorId, deptId, name) {
    onChange(buildings.map(b => b.id === buildingId
      ? { ...b, floors: b.floors.map(f => f.id === floorId ? { ...f, departments: f.departments.map(d => d.id === deptId ? { ...d, name } : d) } : f) }
      : b))
  }

  return (
    <div className="space-y-3">
      {buildings.length === 0 && (
        <div className="border border-dashed border-surface-200 rounded-lg p-4 text-center">
          <Sparkles size={16} className="mx-auto text-surface-300 mb-1.5" />
          <p className="text-xs text-surface-500">
            No buildings added yet — that's fine, we'll auto-generate a sample facility structure. Add one below if you'd rather define it yourself.
          </p>
        </div>
      )}

      {buildings.map((b, bi) => {
        const isOpen = openBuildings[b.id] !== false
        return (
          <div key={b.id} className="border border-surface-200 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 p-2.5 bg-surface-50">
              <button type="button" className="text-surface-400 flex-shrink-0" onClick={() => toggleBuilding(b.id)}>
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              <Building2 size={14} className="text-primary-600 flex-shrink-0" />
              <input
                className="input py-1.5 text-xs flex-1"
                placeholder={`Building ${bi + 1} name (e.g. Main Plant)`}
                value={b.name}
                onChange={e => updateBuilding(b.id, e.target.value)}
              />
              <span className="text-[10px] text-surface-400 font-semibold flex-shrink-0">{b.floors.length} floor{b.floors.length !== 1 ? 's' : ''}</span>
              <button type="button" className="btn-ghost p-1.5 text-danger-600 flex-shrink-0" onClick={() => removeBuilding(b.id)}>
                <Trash2 size={13} />
              </button>
            </div>

            {isOpen && (
              <div className="p-2.5 pl-8 space-y-2 border-t border-surface-100">
                {b.floors.length === 0 && (
                  <p className="text-[11px] text-surface-400">No floors yet — will auto-generate 2–4 sample floors if left empty.</p>
                )}
                {b.floors.map((f, fi) => {
                  const floorOpen = openFloors[f.id] !== false
                  return (
                    <div key={f.id} className="border border-surface-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 p-2 bg-white">
                        <button type="button" className="text-surface-400 flex-shrink-0" onClick={() => toggleFloor(f.id)}>
                          {floorOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        </button>
                        <Layers3 size={12} className="text-info-600 flex-shrink-0" />
                        <input
                          className="input py-1 text-xs flex-1"
                          placeholder={`Floor ${fi + 1} name (e.g. Ground Floor)`}
                          value={f.name}
                          onChange={e => updateFloor(b.id, f.id, e.target.value)}
                        />
                        <span className="text-[10px] text-surface-400 font-semibold flex-shrink-0">{f.departments.length} dept{f.departments.length !== 1 ? 's' : ''}</span>
                        <button type="button" className="btn-ghost p-1 text-danger-600 flex-shrink-0" onClick={() => removeFloor(b.id, f.id)}>
                          <Trash2 size={12} />
                        </button>
                      </div>
                      {floorOpen && (
                        <div className="p-2 pl-7 space-y-1.5 border-t border-surface-100">
                          {f.departments.length === 0 && (
                            <p className="text-[11px] text-surface-400">No departments yet — will auto-generate a few if left empty.</p>
                          )}
                          {f.departments.map((d, di) => (
                            <div key={d.id} className="flex items-center gap-2">
                              <DoorOpen size={11} className="text-success-600 flex-shrink-0" />
                              <input
                                className="input py-1 text-xs flex-1"
                                placeholder={`Department ${di + 1} name (e.g. HVAC, Server Room)`}
                                value={d.name}
                                onChange={e => updateDepartment(b.id, f.id, d.id, e.target.value)}
                              />
                              <button type="button" className="btn-ghost p-1 text-danger-600 flex-shrink-0" onClick={() => removeDepartment(b.id, f.id, d.id)}>
                                <Trash2 size={11} />
                              </button>
                            </div>
                          ))}
                          <button type="button" className="btn-ghost text-[11px] py-1 px-2" onClick={() => addDepartment(b.id, f.id)}>
                            <Plus size={11} /> Add Department
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}
                <button type="button" className="btn-secondary text-[11px] py-1.5 px-2.5" onClick={() => addFloor(b.id)}>
                  <Plus size={12} /> Add Floor
                </button>
              </div>
            )}
          </div>
        )
      })}

      <button type="button" className="btn-secondary text-xs py-2 px-3" onClick={addBuilding}>
        <Plus size={14} /> Add Building
      </button>
    </div>
  )
}
