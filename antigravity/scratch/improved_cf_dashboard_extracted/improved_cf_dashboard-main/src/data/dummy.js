// Organizations
export const organizations = [
  { id: 1, name: 'CF Smart Technology', description: 'Main technology partner', status: 'Active',  createdAt: '2024-01-15' },
  { id: 2, name: 'FICO',                description: 'Industrial furnace client',status: 'Active',  createdAt: '2024-02-10' },
  { id: 3, name: 'C Power',             description: 'Power distribution',       status: 'Active',  createdAt: '2024-03-05' },
  { id: 4, name: 'NUST',                description: 'University campus EMS',    status: 'Active',  createdAt: '2024-03-20' },
  { id: 5, name: 'Guest Org',           description: 'Demo organization',        status: 'Inactive',createdAt: '2024-04-01' },
  { id: 6, name: 'Supra Steel',         description: 'Steel furnace monitoring', status: 'Active',  createdAt: '2024-04-15' },
  { id: 7, name: 'Japan Electronics',   description: 'Electronics manufacturer', status: 'Active',  createdAt: '2024-05-01' },
  { id: 8, name: 'Bakery',              description: 'Commercial bakery',        status: 'Active',  createdAt: '2024-05-10' },
  { id: 9, name: 'Red Chilli',          description: 'Restaurant chain',         status: 'Active',  createdAt: '2024-05-20' },
  { id:10, name: 'Delicia Warehouse',   description: 'Cold storage facility',    status: 'Active',  createdAt: '2024-06-01' },
]

// Users
export const users = [
  { id:1,  org:'CF Smart Technology', name:'Huzaifa Ahmed',   email:'huzaifa@cf.com',   phone:'+92-300-1234567', role:'Admin',    status:'Active',   createdAt:'2024-01-20' },
  { id:2,  org:'FICO',                name:'Ali Raza',         email:'ali@fico.com',      phone:'+92-301-2345678', role:'Customer', status:'Active',   createdAt:'2024-02-15' },
  { id:3,  org:'C Power',             name:'Sara Khan',        email:'sara@cpower.com',   phone:'+92-302-3456789', role:'Customer', status:'Active',   createdAt:'2024-03-10' },
  { id:4,  org:'NUST',                name:'Ahmed Malik',      email:'ahmed@nust.edu',    phone:'+92-303-4567890', role:'Customer', status:'Active',   createdAt:'2024-03-25' },
  { id:5,  org:'Guest Org',           name:'Guest User',       email:'guest@guest.com',   phone:'+92-304-5678901', role:'Customer', status:'Inactive', createdAt:'2024-04-05' },
  { id:6,  org:'Supra Steel',         name:'Bilal Hussain',    email:'bilal@supra.com',   phone:'+92-305-6789012', role:'Customer', status:'Active',   createdAt:'2024-04-20' },
  { id:7,  org:'Delicia Warehouse',   name:'Miss Maryam',      email:'maryam@delicia.com',phone:'+92-306-7890123', role:'Customer', status:'Active',   createdAt:'2024-06-05' },
  { id:8,  org:'Japan Electronics',   name:'Taro Yamamoto',    email:'taro@japaelec.com', phone:'+92-307-8901234', role:'Customer', status:'Active',   createdAt:'2024-05-05' },
  { id:9,  org:'Bakery',              name:'Fatima Zahra',     email:'fatima@bakery.com', phone:'+92-308-9012345', role:'Customer', status:'Active',   createdAt:'2024-05-15' },
  { id:10, org:'Red Chilli',          name:'Usman Ghani',      email:'usman@redchilli.com',phone:'+92-309-0123456',role:'Customer', status:'Active',   createdAt:'2024-05-25' },
]

// Gateways
export const gateways = [
  { id:1, status:'Online',  name:'CF-GW-001',    serial:'SN-10021', model:'CF-G200', devices:3, org:'CF Smart Technology' },
  { id:2, status:'Online',  name:'FICO-GW-001',  serial:'SN-10022', model:'CF-G200', devices:5, org:'FICO'                },
  { id:3, status:'Offline', name:'NUST-GW-001',  serial:'SN-10023', model:'CF-G100', devices:2, org:'NUST'               },
  { id:4, status:'Online',  name:'CPOWER-GW-01', serial:'SN-10024', model:'CF-G200', devices:4, org:'C Power'            },
  { id:5, status:'Offline', name:'SUPRA-GW-001', serial:'SN-10025', model:'CF-G300', devices:6, org:'Supra Steel'        },
  { id:6, status:'Online',  name:'DELI-GW-001',  serial:'SN-10026', model:'CF-G200', devices:3, org:'Delicia Warehouse'  },
]

// Devices
export const devices = [
  { id:1, status:'Online',  name:'Main Wapda',         org:'Delicia Warehouse',   gateway:'DELI-GW-001',  template:'DELICIA WAREHOUSE',              switchOn:true  },
  { id:2, status:'Online',  name:'CF Smart Panel',     org:'CF Smart Technology', gateway:'CF-GW-001',    template:'CF Smart Main Panel',            switchOn:true  },
  { id:3, status:'Offline', name:'Fico Furnace 1',     org:'FICO',                gateway:'FICO-GW-001',  template:'Fico Furnace',                   switchOn:false },
  { id:4, status:'Online',  name:'PV Genset Sync',     org:'CF Smart Technology', gateway:'CF-GW-001',    template:'PV GENSET SYNC',                 switchOn:true  },
  { id:5, status:'Offline', name:'EMS Panel',          org:'NUST',                gateway:'NUST-GW-001',  template:'EMS PANEL',                      switchOn:false },
  { id:6, status:'Online',  name:'Supra Furnace A',    org:'Supra Steel',         gateway:'SUPRA-GW-001', template:'Fico Furnace',                   switchOn:true  },
  { id:7, status:'Online',  name:'Imran House Main',   org:'CF Smart Technology', gateway:'CF-GW-001',    template:"IMRAN's HOUSE",                  switchOn:true  },
  { id:8, status:'Online',  name:'C Power Gen',        org:'C Power',             gateway:'CPOWER-GW-01', template:'CF Smart Technologies Generator',switchOn:true  },
]

// Device Templates
export const deviceTemplates = [
  { id:1, name:'DELICIA WAREHOUSE',               org:'Delicia Warehouse',   variables:12, devices:1, method:'Modbus RTU', updatedAt:'2026-06-01' },
  { id:2, name:'CF Smart Main Panel',             org:'CF Smart Technology', variables:15, devices:2, method:'Modbus TCP', updatedAt:'2026-05-20' },
  { id:3, name:'Fico Furnace',                    org:'FICO',                variables:8,  devices:2, method:'Modbus RTU', updatedAt:'2026-05-15' },
  { id:4, name:'PV GENSET SYNC',                  org:'CF Smart Technology', variables:10, devices:1, method:'Modbus TCP', updatedAt:'2026-05-10' },
  { id:5, name:'EMS PANEL',                       org:'NUST',                variables:9,  devices:1, method:'Modbus RTU', updatedAt:'2026-04-30' },
  { id:6, name:'CF Smart Technologies Generator', org:'CF Smart Technology', variables:11, devices:1, method:'Modbus TCP', updatedAt:'2026-04-20' },
  { id:7, name:"IMRAN's HOUSE",                   org:'CF Smart Technology', variables:7,  devices:1, method:'Modbus RTU', updatedAt:'2026-04-10' },
  { id:8, name:'CFBAG',                           org:'CF Smart Technology', variables:9,  devices:1, method:'Modbus RTU', updatedAt:'2026-04-01' },
  { id:9, name:'Gulshan-e-Zia',                   org:'CF Smart Technology', variables:6,  devices:1, method:'Modbus TCP', updatedAt:'2026-03-20' },
]

// Products
export const products = [
  { id:1, name:'Basic EMS',      description:'Up to 5 devices',     price:'PKR 5,000/mo',  status:'Active'   },
  { id:2, name:'Professional',   description:'Up to 20 devices',    price:'PKR 15,000/mo', status:'Active'   },
  { id:3, name:'Enterprise',     description:'Unlimited devices',   price:'PKR 40,000/mo', status:'Active'   },
  { id:4, name:'Trial',          description:'14 days, 2 devices',  price:'Free',           status:'Active'   },
  { id:5, name:'Legacy Basic',   description:'Discontinued plan',   price:'PKR 3,000/mo',  status:'Inactive' },
]

// Alarm Contacts
export const alarmContacts = [
  { id:1, name:'Huzaifa Ahmed', org:'CF Smart Technology', phone:'+92-300-1234567', email:'huzaifa@cf.com',    whatsapp:'+92-300-1234567', remark:'Primary contact', updatedAt:'2026-05-01' },
  { id:2, name:'Ali Raza',      org:'FICO',                phone:'+92-301-2345678', email:'ali@fico.com',       whatsapp:'N/A',             remark:'On-site manager', updatedAt:'2026-05-10' },
  { id:3, name:'Miss Maryam',   org:'Delicia Warehouse',   phone:'+92-306-7890123', email:'maryam@delicia.com', whatsapp:'+92-306-7890123', remark:'Ops manager',     updatedAt:'2026-06-01' },
]

// Schedule Tasks
export const scheduleTasks = [
  { id:1, name:'Daily Energy Report',  org:'CF Smart Technology', device:'CF Smart Panel',  schedule:'Daily 08:00',  status:'Active',   lastRun:'2026-06-08' },
  { id:2, name:'Weekly Alarm Summary', org:'Delicia Warehouse',   device:'Main Wapda',       schedule:'Mon 09:00',    status:'Active',   lastRun:'2026-06-02' },
  { id:3, name:'Monthly Audit Export', org:'FICO',                device:'Fico Furnace 1',   schedule:'1st 10:00',    status:'Inactive', lastRun:'2026-06-01' },
]

// Alarm Settings
export const alarmSettings = [
  { id:1, name:'Overvoltage Alert', org:'CF Smart Technology', pushType:'Template Trigger', pushMethod:'Email',  mechanism:'Instant', status:'Active',   updatedAt:'2026-06-01' },
  { id:2, name:'High Current',      org:'FICO',                pushType:'Template Trigger', pushMethod:'SMS',    mechanism:'Delayed', status:'Active',   updatedAt:'2026-05-20' },
  { id:3, name:'Power Outage',      org:'Delicia Warehouse',   pushType:'Template Trigger', pushMethod:'Email',  mechanism:'Instant', status:'Inactive', updatedAt:'2026-05-10' },
]

// Dashboard stats
export const adminStats = {
  totalOrgs:     10,
  totalUsers:    96,
  totalDevices:  13,
  totalGateways: 13,
  onlineDevices: 8,
  offlineDevices:5,
  activeAlarms:  3,
  totalAlarms:   91,
}

export const orgStats = {
  totalDevices:  3,
  onlineDevices: 2,
  activeAlarms:  1,
  totalUsers:    5,
  monthlyEnergy: '12,450 kWh',
}

export const userStats = {
  assignedDevices: 1,
  activeAlarms:    34,
  notifications:   91,
  subscription:    'Professional',
}

// Historical / Variable Data (for charts)
export const historicalData = [
  { time:'00:00', voltageA:224, voltageB:222, voltageC:226, currentA:12.1, power:8200  },
  { time:'02:00', voltageA:225, voltageB:223, voltageC:225, currentA:11.8, power:7900  },
  { time:'04:00', voltageA:223, voltageB:221, voltageC:224, currentA:10.5, power:7100  },
  { time:'06:00', voltageA:226, voltageB:224, voltageC:227, currentA:13.2, power:8900  },
  { time:'08:00', voltageA:228, voltageB:226, voltageC:229, currentA:18.5, power:12400 },
  { time:'10:00', voltageA:230, voltageB:228, voltageC:231, currentA:22.1, power:14800 },
  { time:'12:00', voltageA:231, voltageB:229, voltageC:232, currentA:24.3, power:16100 },
  { time:'14:00', voltageA:229, voltageB:227, voltageC:230, currentA:23.8, power:15700 },
  { time:'16:00', voltageA:227, voltageB:225, voltageC:228, currentA:21.2, power:14200 },
  { time:'18:00', voltageA:225, voltageB:223, voltageC:226, currentA:19.5, power:13100 },
  { time:'20:00', voltageA:224, voltageB:222, voltageC:225, currentA:16.8, power:11200 },
  { time:'22:00', voltageA:223, voltageB:221, voltageC:224, currentA:14.1, power:9500  },
]

// Notifications
export const notifications = Array.from({ length: 20 }, (_, i) => ({
  id:          i + 1,
  triggerName: ['Overvoltage Alert','High Current','Power Outage','Low PF','Phase Imbalance'][i % 5],
  deviceName:  ['Main Wapda','CF Smart Panel','Fico Furnace 1','EMS Panel','Supra Furnace A'][i % 5],
  description: ['Voltage exceeded 240V threshold','Current exceeded 25A limit','Device went offline','Power factor below 0.85','Phase imbalance detected'][i % 5],
  time:        `2026-06-0${(i % 9) + 1} ${String(i % 24).padStart(2,'0')}:${String(i * 3 % 60).padStart(2,'0')}`,
}))

// Subscriptions (for user dashboard)
export const subscriptions = [
  { id:1, plan:'Professional', org:'Delicia Warehouse', startDate:'2026-01-01', endDate:'2026-12-31', status:'Active', devices:3 },
]

// Slab Rates
export const slabRates = [
  { id:1, variableName:'Power Consumption (kWh)', slaveName:'Main Wapda', totalUnit:12450, tariff:'PKR 28/unit', startDate:'2026-01-01', endDate:'2026-12-31' },
]
