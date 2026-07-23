import re
import codecs

with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'r', 'utf-8') as f:
    text = f.read()

# 1. Add MetronicLayout import
if 'import MetronicLayout' not in text:
    text = text.replace('import { useState, useEffect, useRef } from "react";', 
                        'import { useState, useEffect, useRef } from "react";\nimport MetronicLayout from "./MetronicLayout";')

# 2. Add devices state variables
devices_state = """
  // --- CFSmartEMS Devices State ---
  const [selectedOrg, setSelectedOrg] = useState("All");
  const [userFilter, setUserFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [devicesData, setDevicesData] = useState([
    { id: 1, status: "Online", name: "EV-CHG-001", org: "Acme Corp", gateway: "GW-101", template: "Standard-AC", enabled: true },
    { id: 2, status: "Offline", name: "EV-CHG-002", org: "Acme Corp", gateway: "GW-101", template: "Standard-AC", enabled: false },
    { id: 3, status: "Online", name: "EV-CHG-003", org: "Global Tech", gateway: "GW-102", template: "Fast-DC", enabled: true }
  ]);
  const [orgList] = useState([{name: "Acme Corp"}, {name: "Global Tech"}]);

  const toggleDeviceSwitch = (id) => {
    setDevicesData(prev => prev.map(d => d.id === id ? { ...d, enabled: !d.enabled } : d));
  };
  const handleDeleteDevice = (id) => {
    if(window.confirm("Are you sure you want to delete this device?")) {
      setDevicesData(prev => prev.filter(d => d.id !== id));
    }
  };

  const filteredDevices = devicesData.filter(d => {
    if (selectedOrg !== "All" && d.org !== selectedOrg) return false;
    if (statusFilter !== "All" && d.status !== statusFilter) return false;
    if (searchQuery && !d.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const Badge = ({label, type}) => {
    const c = type === "Online" ? C.green : C.red;
    return <span style={{background: c+"18", color: c, padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "700"}}>{label}</span>;
  };
  // ---------------------------------
"""
if 'const [selectedOrg' not in text:
    text = text.replace('const [aiLogFilter,   setAiLogFilter]   = useState("all");', 
                        'const [aiLogFilter,   setAiLogFilter]   = useState("all");\n' + devices_state)

# 3. Replace the Voltix main return wrapper and sidebar
start_return = text.find('  return (\n    <div style={{background:C.bg')
end_sidebar = text.find('      {/* MAIN CONTENT */}')

if start_return != -1 and end_sidebar != -1:
    new_return = """  return (
    <MetronicLayout activeTab={tab} setActiveTab={setTab}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;height:5px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#D1D9E0;border-radius:99px}
        input::placeholder{color:${C.textLight}}
        input[type=range]{-webkit-appearance:none;height:4px;border-radius:2px;background:${C.border};outline:none}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:${C.accent};cursor:pointer;box-shadow:0 0 0 3px ${C.accentLight}}
        @keyframes slideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
      `}</style>
      
      {/* ───────────────────────────────────────────────────────────
          TAB VIEW: DEVICES LIST (CFSmartEMS style)
      ─────────────────────────────────────────────────────────── */}
      {tab === "devices" && (
        <div style={{ display: "flex", flexDirection: "column", padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "700", color: C.text, margin: "0" }}>Manage Devices</h2>
              <span style={{ fontSize: "12px", color: C.textMuted, fontWeight: "500" }}>Manage Devices - List</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button 
                onClick={() => setShowAddModal(true)}
                style={{ padding: "8px 16px", backgroundColor: C.accent, color: "#FFFFFF", border: "none", borderRadius: "6px", fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
              >
                Add Device
              </button>
              <button 
                onClick={() => alert("Batch Delete")}
                style={{ padding: "8px 16px", backgroundColor: "#FFFFFF", color: C.textMed, border: `1px solid ${C.border}`, borderRadius: "6px", fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
              >
                Batch Delete
              </button>
              <button 
                onClick={() => alert("Export")}
                style={{ padding: "8px 16px", backgroundColor: "#FFFFFF", color: C.textMed, border: `1px solid ${C.border}`, borderRadius: "6px", fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
              >
                Export
              </button>
            </div>
          </div>

          <Card style={{ padding: "0", overflow: "hidden", border: `1px solid ${C.borderMed}`, boxShadow: "none" }} hover={false}>
            <div style={{ display: "flex", gap: "12px", padding: "16px", flexWrap: "wrap", alignItems: "center", borderBottom: `1px solid ${C.border}` }}>
              <select value={selectedOrg} onChange={e => setSelectedOrg(e.target.value)} style={{ padding: "8px 12px", borderRadius: "6px", border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif" }}>
                <option value="All">All</option>
                {orgList.map(org => <option key={org.name} value={org.name}>{org.name}</option>)}
              </select>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: "8px 12px", borderRadius: "6px", border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif" }}>
                <option value="All">All status</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Please input device name" style={{ padding: "8px 12px", borderRadius: "6px", border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", width: "200px" }} />
              <button style={{ padding: "8px 24px", backgroundColor: C.accent, color: "#FFFFFF", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>Query</button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", textOrigin: "left" }}>
              <thead>
                <tr style={{ background: "#FFFFFF", borderBottom: `1px solid ${C.border}` }}>
                  <th style={{ width: "40px", padding: "16px" }}><input type="checkbox"/></th>
                  <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "left" }}>Device Status</th>
                  <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "left" }}>Device Name</th>
                  <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "left" }}>Organization</th>
                  <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "left" }}>Gateway</th>
                  <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "center" }}>Switch</th>
                  <th style={{ padding: "16px 16px", fontSize: "13px", fontWeight: "600", color: C.text, textAlign: "center" }}>Operation</th>
                </tr>
              </thead>
              <tbody>
                {filteredDevices.map(d => (
                  <tr key={d.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                    <td style={{ padding: "14px 16px" }}><input type="checkbox"/></td>
                    <td style={{ padding: "14px 10px" }}><Badge label={d.status} type={d.status}/></td>
                    <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textMed }}>{d.name}</td>
                    <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textMed }}>{d.org}</td>
                    <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textMed }}>{d.gateway}</td>
                    <td style={{ padding: "14px 10px", textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center" }}><Toggle on={d.enabled} onToggle={() => toggleDeviceSwitch(d.id)}/></div>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center" }}>
                      <span onClick={() => handleDeleteDevice(d.id)} style={{ color: C.red, fontSize: "12px", cursor: "pointer", fontWeight: "bold" }}>Delete</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────
          TAB VIEW: VOLTIX EV DASHBOARD (only when tab starts with ev-)
      ─────────────────────────────────────────────────────────── */}
      {tab.startsWith("ev-") && (
"""
    text = text[:start_return] + new_return + text[end_sidebar + len('      {/* MAIN CONTENT */}'):]

# 4. We need to find the ending tags of App.jsx and replace them.
# The original ended with:
#         </div>
#       </div>
#     </div>
#   );
# }
end_tags = """        </div>
      </div>
    </div>
  );
}"""

if end_tags in text:
    new_end_tags = """        </div>
      )}
    </MetronicLayout>
  );
}"""
    text = text.replace(end_tags, new_end_tags)

# 5. Fix tabs in Voltix content
# In the original Voltix code, it checks `tab === "live"`, `tab === "find"`, etc.
# We need to change these to `tab === "ev-live"`, etc.
text = text.replace('tab==="live"', 'tab==="ev-live"')
text = text.replace('tab==="find"', 'tab==="ev-find"')
text = text.replace('tab==="trip"', 'tab==="ev-trip"')
text = text.replace('tab==="stats"', 'tab==="ev-stats"')
text = text.replace('tab==="energy"', 'tab==="ev-energy"')
text = text.replace('tab==="v2g"', 'tab==="ev-v2g"')
text = text.replace('tab==="ailog"', 'tab==="ev-ailog"')
text = text.replace('tab==="fleet"', 'tab==="ev-fleet"')
text = text.replace('tab==="profile"', 'tab==="ev-profile"')

# Change the initial state of tab to "devices" instead of "live"
text = text.replace('useState("live")', 'useState("devices")')

with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'w', 'utf-8') as f:
    f.write(text)

print("Applied CFSmartEMS layout successfully!")
