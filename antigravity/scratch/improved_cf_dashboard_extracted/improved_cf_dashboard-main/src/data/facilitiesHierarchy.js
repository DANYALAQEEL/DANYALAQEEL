// ─────────────────────────────────────────────────────────────────────────
// Facilities hierarchy + deterministic mock metric generation.
// Organization → Buildings → Floors → Departments
// Every function here is pure & deterministic (seeded), so charts stay
// stable across re-renders instead of jumping around randomly.
// ─────────────────────────────────────────────────────────────────────────

// Simple deterministic string hash → 32-bit int
function hashString(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0
  }
  return h
}

// Seeded pseudo-random generator (mulberry32), returns fn () => [0,1)
function seededRandom(seed) {
  let a = seed
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const DEPARTMENT_POOL = [
  'HVAC', 'Lighting', 'Production Floor', 'Server Room', 'Admin Offices',
  'Cold Storage', 'Compressors', 'Packaging', 'R&D Lab', 'Cafeteria',
  'Parking & EV', 'Security', 'Warehouse',
]

const BUILDING_NAME_PREFIXES = ['Block', 'Tower', 'Wing', 'Plant', 'Facility']

// ── Custom (admin-entered) hierarchy overrides ─────────────────────────
// When an organization is created/edited, an admin can manually define
// their real buildings/floors/departments. Anything they leave blank is
// auto-completed below so the feature never blocks on incomplete data.
const HIERARCHY_OVERRIDE_KEY = 'cf-ems-org-hierarchy-overrides-v1'

function loadHierarchyOverrides() {
  try {
    const raw = localStorage.getItem(HIERARCHY_OVERRIDE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveHierarchyOverrides(all) {
  try { localStorage.setItem(HIERARCHY_OVERRIDE_KEY, JSON.stringify(all)) } catch { /* ignore */ }
}

export function getOrgHierarchyOverride(orgName) {
  const all = loadHierarchyOverrides()
  return all[orgName] || null
}

export function hasCustomHierarchy(orgName) {
  return !!getOrgHierarchyOverride(orgName)
}

// Save a manually-built hierarchy for an org. Any building with no floors,
// or floor with no departments, is auto-completed with generated data —
// "if you skip anything, we'll add it for you."
export function saveOrgHierarchy(orgName, buildings) {
  const filled = autoFillHierarchy(orgName, buildings)
  const all = loadHierarchyOverrides()
  all[orgName] = { orgName, buildings: filled }
  saveHierarchyOverrides(all)
  return all[orgName]
}

export function clearOrgHierarchyOverride(orgName) {
  const all = loadHierarchyOverrides()
  delete all[orgName]
  saveHierarchyOverrides(all)
}

// Rename an org's stored hierarchy override when the org itself is renamed.
export function renameOrgHierarchyOverride(oldName, newName) {
  if (oldName === newName) return
  const all = loadHierarchyOverrides()
  if (all[oldName]) {
    all[newName] = { ...all[oldName], orgName: newName }
    delete all[oldName]
    saveHierarchyOverrides(all)
  }
}

function autoFillHierarchy(orgName, buildings) {
  const rnd = seededRandom(hashString(`autofill::${orgName}`))
  const usedBuildingIds = new Set()

  const result = (buildings && buildings.length > 0 ? buildings : []).map((b, bi) => {
    const buildingId = b.id || `${orgName}-b${bi}-${Date.now().toString(36)}`
    usedBuildingIds.add(buildingId)
    const buildingName = (b.name || '').trim() || `${BUILDING_NAME_PREFIXES[bi % BUILDING_NAME_PREFIXES.length]} ${String.fromCharCode(65 + bi)}`

    let floors = (b.floors || []).filter(f => (f.name || '').trim())
    if (floors.length === 0) {
      const floorCount = 2 + Math.floor(rnd() * 3)
      floors = Array.from({ length: floorCount }, (_, f) => ({
        id: `${buildingId}-f${f}-${Date.now().toString(36)}${f}`,
        name: f === 0 ? 'Ground Floor' : `Floor ${f}`,
        departments: [],
      }))
    }

    floors = floors.map((f, fi) => {
      const floorId = f.id || `${buildingId}-f${fi}-${Date.now().toString(36)}`
      const floorName = (f.name || '').trim() || (fi === 0 ? 'Ground Floor' : `Floor ${fi}`)
      let departments = (f.departments || []).filter(d => (d.name || '').trim())
      if (departments.length === 0) {
        const deptCount = 2 + Math.floor(rnd() * 3)
        const shuffled = [...DEPARTMENT_POOL].sort(() => rnd() - 0.5)
        departments = Array.from({ length: deptCount }, (_, d) => ({
          id: `${floorId}-d${d}-${Date.now().toString(36)}${d}`,
          name: shuffled[d % shuffled.length],
        }))
      } else {
        departments = departments.map((d, di) => ({ id: d.id || `${floorId}-d${di}-${Date.now().toString(36)}`, name: d.name.trim() }))
      }
      return { id: floorId, name: floorName, departments }
    })

    return { id: buildingId, name: buildingName, floors }
  })

  if (result.length === 0) {
    // Nothing entered at all → fall back to the fully generated hierarchy.
    return generateHierarchy(orgName).buildings
  }
  return result
}

// Build a deterministic *generated* hierarchy for a given organization name
// (used as the default until an admin defines a real one, and to auto-fill
// any gaps in a manually-entered hierarchy).
function generateHierarchy(orgName) {
  const seed = hashString(orgName || 'default-org')
  const rnd = seededRandom(seed)

  const buildingCount = 2 + Math.floor(rnd() * 3) // 2–4 buildings
  const buildings = []

  for (let b = 0; b < buildingCount; b++) {
    const buildingId = `${orgName}-b${b}`
    const prefix = BUILDING_NAME_PREFIXES[Math.floor(rnd() * BUILDING_NAME_PREFIXES.length)]
    const buildingName = `${prefix} ${String.fromCharCode(65 + b)}`
    const floorCount = 2 + Math.floor(rnd() * 4) // 2–5 floors
    const floors = []

    for (let f = 0; f < floorCount; f++) {
      const floorId = `${buildingId}-f${f}`
      const floorName = f === 0 ? 'Ground Floor' : `Floor ${f}`
      const deptCount = 2 + Math.floor(rnd() * 3) // 2–4 departments
      const depts = []
      const shuffled = [...DEPARTMENT_POOL].sort(() => rnd() - 0.5)
      for (let d = 0; d < deptCount; d++) {
        const departmentId = `${floorId}-d${d}`
        depts.push({ id: departmentId, name: shuffled[d % shuffled.length] })
      }
      floors.push({ id: floorId, name: floorName, departments: depts })
    }
    buildings.push({ id: buildingId, name: buildingName, floors })
  }

  return { orgName, buildings }
}

// Public entry point: prefer an admin-defined hierarchy; otherwise generate
// a deterministic mock one so every page still works out of the box.
export function getOrgHierarchy(orgName) {
  const override = getOrgHierarchyOverride(orgName)
  if (override && override.buildings?.length) return { orgName, buildings: override.buildings }
  return generateHierarchy(orgName)
}

export function findBuilding(hierarchy, buildingId) {
  return hierarchy.buildings.find(b => b.id === buildingId)
}
export function findFloor(hierarchy, buildingId, floorId) {
  const b = findBuilding(hierarchy, buildingId)
  return b?.floors.find(f => f.id === floorId)
}
export function findDepartment(hierarchy, buildingId, floorId, departmentId) {
  const f = findFloor(hierarchy, buildingId, floorId)
  return f?.departments.find(d => d.id === departmentId)
}

// Human readable label for a scope object { level, buildingId, floorId, departmentId }
export function scopeLabel(hierarchy, scope) {
  if (!scope || scope.level === 'organization') return hierarchy.orgName
  const building = findBuilding(hierarchy, scope.buildingId)
  if (scope.level === 'building') return building?.name || 'Building'
  const floor = findFloor(hierarchy, scope.buildingId, scope.floorId)
  if (scope.level === 'floor') return `${building?.name || ''} / ${floor?.name || 'Floor'}`
  const dept = findDepartment(hierarchy, scope.buildingId, scope.floorId, scope.departmentId)
  if (scope.level === 'department') return `${building?.name || ''} / ${floor?.name || ''} / ${dept?.name || 'Department'}`
  return hierarchy.orgName
}

// ── Metric catalog ─────────────────────────────────────────────────────
export const METRICS = {
  energyConsumption: { label: 'Energy Consumption', unit: 'kWh', base: 420, variance: 180, color: '#F5A623' },
  activePower:       { label: 'Active Power',        unit: 'kW',  base: 68,  variance: 30,  color: '#3B82F6' },
  voltage:           { label: 'Voltage',              unit: 'V',   base: 228, variance: 8,   color: '#F5A623' },
  current:           { label: 'Current',              unit: 'A',   base: 42,  variance: 15,  color: '#EF4444' },
  powerFactor:       { label: 'Power Factor',         unit: '',    base: 0.92,variance: 0.06,color: '#22C55E' },
  cost:              { label: 'Energy Cost',          unit: 'PKR', base: 12500, variance: 4200, color: '#8C510A' },
  carbonEmissions:   { label: 'Carbon Emissions',     unit: 'kg CO₂', base: 210, variance: 90, color: '#16A34A' },
  devicesOnline:     { label: 'Devices Online',       unit: '',    base: 14,  variance: 4,   color: '#2563EB' },
  activeAlarms:      { label: 'Active Alarms',        unit: '',    base: 3,   variance: 3,   color: '#DC2626' },
}

export const TIME_RANGES = {
  today: { label: 'Today',   points: 24, unitLabel: 'hr' },
  week:  { label: 'This Week', points: 7,  unitLabel: 'day' },
  month: { label: 'This Month', points: 30, unitLabel: 'day' },
  year:  { label: 'This Year', points: 12, unitLabel: 'mo' },
}

function scopeSeed(orgName, scope, metric, extra = '') {
  const scopeKey = !scope || scope.level === 'organization'
    ? 'org'
    : scope.level === 'building' ? scope.buildingId
    : scope.level === 'floor' ? scope.floorId
    : scope.departmentId
  return hashString(`${orgName}::${scopeKey}::${metric}::${extra}`)
}

function timeLabel(range, i) {
  if (range === 'today') return `${String(i).padStart(2, '0')}:00`
  if (range === 'week') return ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i] || `D${i+1}`
  if (range === 'month') return `${i + 1}`
  if (range === 'year') return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i] || `M${i+1}`
  return `${i}`
}

// Generate a time series for a metric within a given scope + time range.
export function generateSeries(orgName, scope, metric, timeRange = 'today') {
  const cfg = METRICS[metric] || METRICS.energyConsumption
  const rangeCfg = TIME_RANGES[timeRange] || TIME_RANGES.today
  const rnd = seededRandom(scopeSeed(orgName, scope, metric, timeRange))
  const points = rangeCfg.points

  // Scale factor so smaller scopes (department) show smaller absolute values
  // than a whole building/organization.
  const scaleByLevel = { organization: 1, building: 0.55, floor: 0.28, department: 0.12 }
  const scale = scaleByLevel[scope?.level || 'organization']

  const data = []
  for (let i = 0; i < points; i++) {
    // gentle daily/seasonal curve + noise, kept deterministic via rnd()
    const wave = Math.sin((i / points) * Math.PI * 2) * 0.3 + 1
    const noise = 0.85 + rnd() * 0.3
    let value = cfg.base * scale * wave * noise + (rnd() - 0.5) * cfg.variance * scale * 0.4
    if (metric === 'powerFactor') value = Math.min(0.99, Math.max(0.65, cfg.base + (rnd() - 0.5) * cfg.variance))
    if (metric === 'devicesOnline' || metric === 'activeAlarms') value = Math.max(0, Math.round(cfg.base * scale * (0.7 + rnd() * 0.6)))
    data.push({ label: timeLabel(timeRange, i), value: Math.round(value * 100) / 100 })
  }
  return data
}

// Get the immediate children of a scope, used for "compare buildings /
// floors / departments" style panels (the enterprise drill-down view).
export function getScopeChildren(hierarchy, scope) {
  if (!scope || scope.level === 'organization') {
    return hierarchy.buildings.map(b => ({ level: 'building', buildingId: b.id, name: b.name }))
  }
  if (scope.level === 'building') {
    const building = findBuilding(hierarchy, scope.buildingId)
    return (building?.floors || []).map(f => ({ level: 'floor', buildingId: scope.buildingId, floorId: f.id, name: f.name }))
  }
  if (scope.level === 'floor') {
    const floor = findFloor(hierarchy, scope.buildingId, scope.floorId)
    return (floor?.departments || []).map(d => ({ level: 'department', buildingId: scope.buildingId, floorId: scope.floorId, departmentId: d.id, name: d.name }))
  }
  return []
}

// Comparison dataset: aggregate a metric across the children of a scope
// (e.g. total energy per building, or per floor, or per department).
export function generateComparison(orgName, hierarchy, scope, metric, timeRange = 'today') {
  const children = getScopeChildren(hierarchy, scope)
  const cfg = METRICS[metric] || METRICS.energyConsumption
  return children.map(child => {
    const series = generateSeries(orgName, child, metric, timeRange)
    const total = series.reduce((s, p) => s + p.value, 0)
    const value = metric === 'powerFactor'
      ? series[series.length - 1]?.value ?? cfg.base
      : Math.round(total * 100) / 100
    return { name: child.name, value, unit: cfg.unit }
  })
}

// Single current-value read for stat cards / gauges.
export function generateCurrentValue(orgName, scope, metric) {
  const series = generateSeries(orgName, scope, metric, 'today')
  return series[series.length - 1]?.value ?? 0
}

// Mock table rows: per-device breakdown within a scope.
export function generateDeviceTable(orgName, scope, metric) {
  const rnd = seededRandom(scopeSeed(orgName, scope, metric, 'table'))
  const cfg = METRICS[metric] || METRICS.energyConsumption
  const count = 3 + Math.floor(rnd() * 4)
  const rows = []
  for (let i = 0; i < count; i++) {
    rows.push({
      device: `Device-${String(i + 1).padStart(2, '0')}`,
      value: Math.round(cfg.base * 0.1 * (0.5 + rnd()) * 100) / 100,
      status: rnd() > 0.15 ? 'Online' : 'Offline',
      unit: cfg.unit,
    })
  }
  return rows
}

// Mock alarms list within a scope.
export function generateAlarms(orgName, scope) {
  const rnd = seededRandom(scopeSeed(orgName, scope, 'alarms', 'list'))
  const templates = [
    { name: 'Voltage Imbalance', severity: 'warning' },
    { name: 'Overcurrent Trip', severity: 'danger' },
    { name: 'Power Factor Low', severity: 'warning' },
    { name: 'Device Offline', severity: 'danger' },
    { name: 'Temperature High', severity: 'warning' },
    { name: 'Scheduled Maintenance Due', severity: 'info' },
  ]
  const count = 2 + Math.floor(rnd() * 3)
  const rows = []
  for (let i = 0; i < count; i++) {
    const t = templates[Math.floor(rnd() * templates.length)]
    const hoursAgo = Math.floor(rnd() * 48)
    rows.push({ id: i, name: t.name, severity: t.severity, time: `${hoursAgo}h ago` })
  }
  return rows
}
