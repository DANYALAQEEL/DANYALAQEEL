with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_state = '''  const [devicesData, setDevicesData] = useState([
    { id: 1, status: "Online", name: "EV-CHG-001", org: "Acme Corp", gateway: "GW-101", template: "Standard-AC", enabled: true },
    { id: 2, status: "Offline", name: "EV-CHG-002", org: "Acme Corp", gateway: "GW-101", template: "Standard-AC", enabled: false },
    { id: 3, status: "Online", name: "EV-CHG-003", org: "Global Tech", gateway: "GW-102", template: "Fast-DC", enabled: true }
  ]);
  const [orgList] = useState([{name: "Acme Corp"}, {name: "Global Tech"}]);'''

new_state = '''  const [devicesData, setDevicesData] = useState([
    { id: 1, status: "Offline", name: "Imran's House", org: "CF Smart Technology", gateway: "GW-101", template: "Standard-AC", enabled: false },
    { id: 2, status: "Online", name: "Fico", org: "Fico Furnace", gateway: "GW-101", template: "Standard-AC", enabled: true },
    { id: 3, status: "Offline", name: "C Power", org: "C Power", gateway: "GW-102", template: "Fast-DC", enabled: false },
    { id: 4, status: "Online", name: "EMS PANEL", org: "EMS PANEL 1", gateway: "GW-103", template: "Standard-AC", enabled: true }
  ]);
  const [orgList] = useState([{name: "CF Smart Technology"}, {name: "Fico Furnace"}, {name: "C Power"}, {name: "EMS PANEL 1"}, {name: "NUST"}, {name: "Bakery"}]);'''

text = text.replace(old_state, new_state)

new_tab = '''          {/* ════ MANAGE DEVICES ════ */}
          {tab==="devices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "#071437", fontSize: "18px", fontWeight: "700" }}>Manage Devices</div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{ backgroundColor: "#FFFFFF", border: "1px solid #F1F1F2", padding: "8px 17px", borderRadius: "5px", color: "#252F4A", fontWeight: "600", cursor: "pointer" }}>Export</button>
                  <button style={{ backgroundColor: "#F1416C", border: "none", padding: "8px 17px", borderRadius: "5px", color: "#FFFFFF", fontWeight: "600", cursor: "pointer" }}>Batch Delete</button>
                  <button style={{ backgroundColor: "#3E97FF", border: "none", padding: "8px 17px", borderRadius: "5px", color: "#FFFFFF", fontWeight: "600", cursor: "pointer" }}>+ Add Device</button>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "250px", backgroundColor: "#FFFFFF", border: "1px solid #F1F1F2", borderRadius: "12px", padding: "16px", flexShrink: 0 }}>
                  <div style={{ color: "#252F4A", fontSize: "14px", fontWeight: "600", marginBottom: "16px", paddingLeft: "8px" }}>Organizations</div>
                  {["All", ...orgList.map(o=>o.name)].map(org => (
                    <div key={org} onClick={() => setSelectedOrg(org)} style={{ padding: "10px 12px", borderRadius: "6px", cursor: "pointer", backgroundColor: selectedOrg === org ? "#EEF6FF" : "transparent", color: selectedOrg === org ? "#3E97FF" : "#78829D", fontWeight: selectedOrg === org ? "600" : "500", fontSize: "13px", marginBottom: "4px", transition: "all 0.2s" }}>{org}</div>
                  ))}
                </div>
                <div style={{ flex: 1, backgroundColor: "#FFFFFF", border: "1px solid #F1F1F2", borderRadius: "12px", overflow: "hidden" }}>
                  <div style={{ padding: "16px", borderBottom: "1px solid #F1F1F2", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                    <select style={{ padding: "8px 12px", border: "1px solid #F1F1F2", borderRadius: "5px", outline: "none", color: "#78829D", fontSize: "13px", minWidth: "150px", backgroundColor: "#F6F6F6" }}><option>Select User</option><option>Admin</option></select>
                    <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} style={{ padding: "8px 12px", border: "1px solid #F1F1F2", borderRadius: "5px", outline: "none", color: "#78829D", fontSize: "13px", minWidth: "150px", backgroundColor: "#F6F6F6" }}><option value="All">All Status</option><option value="Online">Online</option><option value="Offline">Offline</option><option value="Alarm">Alarm</option></select>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #F1F1F2", borderRadius: "5px", padding: "0 10px", flex: 1, minWidth: "200px", backgroundColor: "#F6F6F6" }}><i className="fa-solid fa-search" style={{ color: "#99A1B7", fontSize: "12px", marginRight: "8px" }}></i><input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search by device name..." style={{ border: "none", padding: "8px 0", outline: "none", width: "100%", fontSize: "13px", background:"transparent" }}/></div>
                    <button style={{ backgroundColor: "#3E97FF", border: "none", padding: "8px 17px", borderRadius: "5px", color: "#FFFFFF", fontWeight: "600", cursor: "pointer" }}>Query</button>
                  </div>
                  <div style={{ width: "100%", overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px dashed #F1F1F2" }}>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Status</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Device Name</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Organization</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Gateway</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Device Template</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600" }}>Switch</th>
                          <th style={{ padding: "14px 16px", color: "#252F4A", fontSize: "13px", fontWeight: "600", textAlign: "right" }}>Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDevices.map(d => (
                          <tr key={d.id} style={{ borderBottom: "1px dashed #F1F1F2" }}>
                            <td style={{ padding: "14px 16px" }}>{d.status === 'Online' ? <span style={{ backgroundColor: "#50CD89", color: "#FFFFFF", padding: "4px 8px", borderRadius: "5px", fontSize: "11px", fontWeight: "600" }}>Online</span> : <span style={{ backgroundColor: "#DBDFE9", color: "#4B5675", padding: "4px 8px", borderRadius: "5px", fontSize: "11px", fontWeight: "600" }}>Offline</span>}</td>
                            <td style={{ padding: "14px 16px", color: "#071437", fontSize: "13px", fontWeight: "600" }}>{d.name}</td>
                            <td style={{ padding: "14px 16px", color: "#78829D", fontSize: "13px", fontWeight: "500" }}>{d.org}</td>
                            <td style={{ padding: "14px 16px", color: "#78829D", fontSize: "13px", fontWeight: "500" }}>{d.gateway}</td>
                            <td style={{ padding: "14px 16px", color: "#78829D", fontSize: "13px", fontWeight: "500" }}>{d.template}</td>
                            <td style={{ padding: "14px 16px" }}><div onClick={() => toggleDeviceSwitch(d.id)} style={{ width: "44px", height: "24px", backgroundColor: d.enabled ? "#3E97FF" : "#DBDFE9", borderRadius: "12px", position: "relative", cursor: "pointer", transition: "background 0.3s" }}><div style={{ width: "18px", height: "18px", backgroundColor: "#FFFFFF", borderRadius: "50%", position: "absolute", top: "3px", left: d.enabled ? "23px" : "3px", transition: "left 0.3s", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} /></div></td>
                            <td style={{ padding: "14px 16px", textAlign: "right", whiteSpace: "nowrap" }}><button style={{ background: "none", border: "none", cursor: "pointer", color: "#3E97FF", marginRight: "12px", fontSize: "13px" }}><i className="fa-solid fa-pen-to-square"></i></button><button onClick={() => handleDeleteDevice(d.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#F1416C", marginRight: "12px", fontSize: "13px" }}><i className="fa-solid fa-trash"></i></button><button style={{ background: "none", border: "none", cursor: "pointer", color: "#3E97FF", fontSize: "13px", fontWeight: "500" }}>Details</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ LIVE SESSION ════ */}'''

idx = text.find('{/* ════ LIVE SESSION ════ */}')
if idx != -1:
    text = text[:idx] + new_tab + text[idx+32:]
else:
    print('COULD NOT FIND LIVE SESSION!')

with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('App.jsx updated with Devices list!')
