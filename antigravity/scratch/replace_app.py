import codecs

with codecs.open('elsaenergy-agritech/Elsaenergy-Agritech-main/src/App.jsx', 'r', 'utf-8') as f:
    text = f.read()

start_str = '{/* ───────────────────────────────────────────────────────────\n             TAB VIEW: DEVICES LIST (landing / default page)\n             ─────────────────────────────────────────────────────────── */}\n          {activeTab === "devices" && ('
end_str = '            </div>\n          )}\n\n          {/* ADD DEVICE MODAL SIMULATION */}'

if start_str not in text:
    print('start not found')
elif end_str not in text:
    print('end not found')
else:
    start_idx = text.find(start_str)
    end_idx = text.find(end_str) + len('            </div>\n          )}\n')
    
    new_content = start_str + """
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              {/* Table Top Actions Bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <h2 style={{ fontSize: "20px", fontWeight: "700", color: C.textDark, margin: "0" }}>Manage Devices</h2>
                  <span style={{ fontSize: "12px", color: C.textMuted, fontWeight: "500" }}>Manage Devices - List</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button 
                    onClick={() => setShowAddModal(true)}
                    style={{ padding: "8px 16px", backgroundColor: C.primary, color: "#FFFFFF", border: "none", borderRadius: C.radiusSm, fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
                  >
                    Add Device
                  </button>
                  <button 
                    onClick={() => alert("Batch Delete function triggered.")}
                    style={{ padding: "8px 16px", backgroundColor: "#FFFFFF", color: C.textSlate, border: `1px solid ${C.border}`, borderRadius: C.radiusSm, fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
                  >
                    Batch Delete
                  </button>
                  <button 
                    onClick={() => alert("Export devices list to CSV.")}
                    style={{ padding: "8px 16px", backgroundColor: "#FFFFFF", color: C.textSlate, border: `1px solid ${C.border}`, borderRadius: C.radiusSm, fontWeight: "600", fontSize: "12px", cursor: "pointer" }}
                  >
                    Export
                  </button>
                </div>
              </div>

              {/* Table Data Grid Card */}
              <Card style={{ padding: "0", overflow: "hidden", border: `1px solid ${C.borderMed}`, boxShadow: "none" }} hover={false}>
                
                {/* Query Filter panel */}
                <div style={{ display: "flex", gap: "12px", padding: "16px", flexWrap: "wrap", alignItems: "center", borderBottom: `1px solid ${C.border}` }}>
                  <select 
                    value={selectedOrg} 
                    onChange={(e) => setSelectedOrg(e.target.value)}
                    style={{ padding: "8px 12px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif", width: "150px" }}
                  >
                    <option value="All">All</option>
                    {orgList.map(org => <option key={org.name} value={org.name}>{org.name}</option>)}
                  </select>

                  <select 
                    value={userFilter} 
                    onChange={(e) => setUserFilter(e.target.value)}
                    style={{ padding: "8px 12px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif", width: "150px" }}
                  >
                    <option value="All">All Users</option>
                    <option value="Admin">admin</option>
                    <option value="Operator">operator</option>
                    <option value="Guest">guest</option>
                  </select>

                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={{ padding: "8px 12px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif", width: "150px" }}
                  >
                    <option value="All">All status</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>

                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Please input device name"
                    style={{ padding: "8px 12px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif", width: "200px" }}
                  />

                  <button 
                    onClick={() => {}} 
                    style={{ padding: "8px 24px", backgroundColor: C.primary, color: "#FFFFFF", border: "none", borderRadius: C.radiusSm, fontSize: "12px", fontWeight: "600", cursor: "pointer" }}
                  >
                    Query
                  </button>

                  <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: C.textSlate }}>
                    Show 
                    <select style={{ padding: "4px 8px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none" }}><option>10</option></select>
                    <div style={{ marginLeft: "20px" }}>Search: <input type="text" style={{ padding: "4px 8px", borderRadius: C.radiusSm, border: `1px solid ${C.borderMed}`, fontSize: "12px", outline: "none", width: "150px", marginLeft: "10px" }}/></div>
                  </div>
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", textOrigin: "left" }}>
                  <thead>
                    <tr style={{ background: "#FFFFFF", borderBottom: `1px solid ${C.border}` }}>
                      <th style={{ width: "40px", padding: "16px" }}><input type="checkbox"/></th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "left" }}>Device Status</th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "left" }}>Device Name</th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "left" }}>Organization</th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "left" }}>Gateway</th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "left" }}>Device Template</th>
                      <th style={{ padding: "16px 10px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "center" }}>Switch</th>
                      <th style={{ padding: "16px 16px", fontSize: "13px", fontWeight: "600", color: C.textDark, textAlign: "center" }}>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDevices.map(d => (
                      <tr key={d.id} style={{ borderBottom: `1px solid ${C.border}`, transition: "background-color 0.2s" }}>
                        <td style={{ padding: "14px 16px" }}><input type="checkbox"/></td>
                        <td style={{ padding: "14px 10px" }}><Badge label={d.status} type={d.status}/></td>
                        <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textSlate }}>{d.name}</td>
                        <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textSlate }}>{d.org}</td>
                        <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textSlate }}>{d.gateway}</td>
                        <td style={{ padding: "14px 10px", fontSize: "13px", color: C.textSlate }}>{d.template}</td>
                        <td style={{ padding: "14px 10px", textAlign: "center" }}>
                          <div style={{ display: "flex", justifyContent: "center" }}>
                            <Toggle on={d.enabled} onToggle={() => toggleDeviceSwitch(d.id)}/>
                          </div>
                        </td>
                        <td style={{ padding: "14px 16px", textAlign: "center" }}>
                          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                            <span onClick={() => alert(`Editing details for device: ${d.name}`)} style={{ color: "#F6C000", fontSize: "14px", cursor: "pointer", background: "#FFF8DD", padding: "4px", borderRadius: "4px" }}>👁️</span>
                            <span onClick={() => alert(`Editing details for device: ${d.name}`)} style={{ color: C.primary, fontSize: "14px", cursor: "pointer", background: C.primaryLight, padding: "4px", borderRadius: "4px" }}>✏️</span>
                            <span onClick={() => handleDeleteDevice(d.id)} style={{ color: C.danger, fontSize: "14px", cursor: "pointer", background: C.dangerLight, padding: "4px", borderRadius: "4px" }}>🗑️</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredDevices.length === 0 && (
                      <tr>
                        <td colSpan="8" style={{ padding: "30px", textAlign: "center", color: C.textMuted, fontSize: "13px" }}>
                          No devices match the query filters. Click 'Reset' to clear.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

"""
    
    with codecs.open('elsaenergy-agritech/Elsaenergy-Agritech-main/src/App.jsx', 'w', 'utf-8') as f:
        f.write(text[:start_idx] + new_content + text[end_idx:])
    print('Done!')
