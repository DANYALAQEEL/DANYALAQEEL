import { Building2, Layers3, DoorOpen, Clock } from 'lucide-react'
import { TIME_RANGES } from '../../data/facilitiesHierarchy'

export default function ContextFilterBar({ hierarchy, context, onChange }) {
  const building = hierarchy.buildings.find(b => b.id === context.buildingId)
  const floor = building?.floors.find(f => f.id === context.floorId)

  function setLevel(level) {
    if (level === 'organization') onChange({ level, buildingId: null, floorId: null, departmentId: null, timeRange: context.timeRange })
  }

  function setBuilding(buildingId) {
    if (!buildingId) return setLevel('organization')
    onChange({ level: 'building', buildingId, floorId: null, departmentId: null, timeRange: context.timeRange })
  }

  function setFloor(floorId) {
    if (!floorId) return setBuilding(context.buildingId)
    onChange({ level: 'floor', buildingId: context.buildingId, floorId, departmentId: null, timeRange: context.timeRange })
  }

  function setDepartment(departmentId) {
    if (!departmentId) return setFloor(context.floorId)
    onChange({ level: 'department', buildingId: context.buildingId, floorId: context.floorId, departmentId, timeRange: context.timeRange })
  }

  function setTimeRange(timeRange) {
    onChange({ ...context, timeRange })
  }

  return (
    <div className="card p-3 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1.5 text-surface-400">
        <Building2 size={14} />
        <select className="select text-xs py-1.5 px-2 w-auto min-w-[9rem]" value={context.buildingId || ''} onChange={e => setBuilding(e.target.value)}>
          <option value="">All Buildings (Org-wide)</option>
          {hierarchy.buildings.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-1.5 text-surface-400">
        <Layers3 size={14} />
        <select
          className="select text-xs py-1.5 px-2 w-auto min-w-[8rem]"
          value={context.floorId || ''}
          onChange={e => setFloor(e.target.value)}
          disabled={!building}
        >
          <option value="">All Floors</option>
          {building?.floors.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-1.5 text-surface-400">
        <DoorOpen size={14} />
        <select
          className="select text-xs py-1.5 px-2 w-auto min-w-[9rem]"
          value={context.departmentId || ''}
          onChange={e => setDepartment(e.target.value)}
          disabled={!floor}
        >
          <option value="">All Departments</option>
          {floor?.departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-1.5 text-surface-400 ml-auto">
        <Clock size={14} />
        <select className="select text-xs py-1.5 px-2 w-auto" value={context.timeRange} onChange={e => setTimeRange(e.target.value)}>
          {Object.entries(TIME_RANGES).map(([key, v]) => <option key={key} value={key}>{v.label}</option>)}
        </select>
      </div>
    </div>
  )
}
