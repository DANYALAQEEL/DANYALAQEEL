import {
  LineChart as LineIcon, AreaChart as AreaIcon, BarChart3, PieChart as PieIcon,
  Gauge, CreditCard, Table2, BellRing,
} from 'lucide-react'

// Every entry here is one "panel type" a user can drop onto their canvas —
// mirrors a Grafana-style visualization picker.
export const WIDGET_TYPES = [
  { type: 'line',   label: 'Line Chart',    icon: LineIcon, defaultSize: { w: 6, h: 8 }, description: 'Trend over time' },
  { type: 'area',   label: 'Area Chart',    icon: AreaIcon, defaultSize: { w: 6, h: 8 }, description: 'Filled trend over time' },
  { type: 'bar',    label: 'Bar Chart',     icon: BarChart3, defaultSize: { w: 6, h: 8 }, description: 'Compare values or groups' },
  { type: 'pie',    label: 'Pie / Donut',   icon: PieIcon,  defaultSize: { w: 4, h: 8 }, description: 'Share of total' },
  { type: 'gauge',  label: 'Radial Gauge',  icon: Gauge,    defaultSize: { w: 4, h: 8 }, description: 'Single current value' },
  { type: 'stat',   label: 'Stat Card',     icon: CreditCard, defaultSize: { w: 3, h: 5 }, description: 'Big number + trend' },
  { type: 'table',  label: 'Data Table',    icon: Table2,   defaultSize: { w: 6, h: 8 }, description: 'Per-device breakdown' },
  { type: 'alarms', label: 'Alarm List',    icon: BellRing, defaultSize: { w: 4, h: 8 }, description: 'Recent active alarms' },
]

export const METRIC_OPTIONS = [
  { value: 'energyConsumption', label: 'Energy Consumption' },
  { value: 'activePower',       label: 'Active Power' },
  { value: 'voltage',           label: 'Voltage' },
  { value: 'current',           label: 'Current' },
  { value: 'powerFactor',       label: 'Power Factor' },
  { value: 'cost',              label: 'Energy Cost' },
  { value: 'carbonEmissions',   label: 'Carbon Emissions' },
  { value: 'devicesOnline',     label: 'Devices Online' },
  { value: 'activeAlarms',      label: 'Active Alarms' },
]

export const GROUP_BY_OPTIONS = [
  { value: 'none',       label: 'No grouping (single scope value)' },
  { value: 'building',   label: 'Compare Buildings' },
  { value: 'floor',      label: 'Compare Floors' },
  { value: 'department', label: 'Compare Departments' },
]

export const COLOR_THEMES = [
  { value: 'primary', label: 'Amber',  hex: '#F5A623' },
  { value: 'info',    label: 'Blue',   hex: '#2563EB' },
  { value: 'success', label: 'Green',  hex: '#16A34A' },
  { value: 'danger',  label: 'Red',    hex: '#DC2626' },
  { value: 'neutral', label: 'Slate',  hex: '#4B5563' },
]

// Starter templates offered when a user creates a brand-new dashboard.
export const DASHBOARD_TEMPLATES = [
  {
    id: 'blank',
    name: 'Blank Dashboard',
    description: 'Start from scratch and add your own widgets',
    widgets: [],
  },
  {
    id: 'energy-overview',
    name: 'Energy Overview',
    description: 'Consumption trend, cost, power factor and live stats',
    widgets: [
      { type: 'stat',  title: 'Energy Consumption', metric: 'energyConsumption', groupBy: 'none', color: 'primary' },
      { type: 'stat',  title: 'Active Power',        metric: 'activePower',       groupBy: 'none', color: 'info' },
      { type: 'stat',  title: 'Energy Cost',         metric: 'cost',              groupBy: 'none', color: 'success' },
      { type: 'stat',  title: 'Active Alarms',       metric: 'activeAlarms',      groupBy: 'none', color: 'danger' },
      { type: 'line',  title: 'Energy Consumption Trend', metric: 'energyConsumption', groupBy: 'none', color: 'primary' },
      { type: 'area',  title: 'Active Power Trend',  metric: 'activePower', groupBy: 'none', color: 'info' },
      { type: 'gauge', title: 'Power Factor',        metric: 'powerFactor', groupBy: 'none', color: 'success' },
      { type: 'alarms',title: 'Recent Alarms',       metric: 'activeAlarms', groupBy: 'none', color: 'danger' },
    ],
  },
  {
    id: 'building-comparison',
    name: 'Building-wise Comparison',
    description: 'Compare energy & cost across buildings, floors, and departments',
    widgets: [
      { type: 'bar',  title: 'Energy Consumption by Building', metric: 'energyConsumption', groupBy: 'building', color: 'primary' },
      { type: 'bar',  title: 'Energy Cost by Building',        metric: 'cost',              groupBy: 'building', color: 'success' },
      { type: 'pie',  title: 'Consumption Share by Building',  metric: 'energyConsumption', groupBy: 'building', color: 'info' },
      { type: 'table',title: 'Device Breakdown',               metric: 'energyConsumption', groupBy: 'none',     color: 'neutral' },
    ],
  },
  {
    id: 'alarms-health',
    name: 'Alarms & System Health',
    description: 'Monitor devices online, alarms and power quality',
    widgets: [
      { type: 'stat',   title: 'Devices Online', metric: 'devicesOnline', groupBy: 'none', color: 'info' },
      { type: 'stat',   title: 'Active Alarms',  metric: 'activeAlarms',  groupBy: 'none', color: 'danger' },
      { type: 'alarms', title: 'Alarm Feed',     metric: 'activeAlarms',  groupBy: 'none', color: 'danger' },
      { type: 'line',   title: 'Voltage Trend',  metric: 'voltage',       groupBy: 'none', color: 'primary' },
      { type: 'line',   title: 'Current Trend',  metric: 'current',       groupBy: 'none', color: 'danger' },
    ],
  },
]

export function widgetTypeMeta(type) {
  return WIDGET_TYPES.find(w => w.type === type) || WIDGET_TYPES[0]
}
