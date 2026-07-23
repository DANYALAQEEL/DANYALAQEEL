import sys

with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix 1: Add MetronicLayout
start_str = '  return (\n    <div style={{background:C.bg,minHeight:"100vh",color:C.text,fontFamily:"\'DM Sans\',sans-serif",display:"flex",flexDirection:"row"}}>'

new_start = '  return (\n    <MetronicLayout activeTab={tab} setActiveTab={setTab}>\n    <div style={{background:C.bg,minHeight:"100vh",color:C.text,fontFamily:"\'DM Sans\',sans-serif",display:"flex",flexDirection:"row"}}>'

if start_str in text:
    text = text.replace(start_str, new_start)
    print("Replaced start")
else:
    print("Could not find start_str!")

# Fix 2: Remove old Sidebar
idx_sidebar_start = text.find('      {/* SIDEBAR */}')
idx_main_area = text.find('      {/* MAIN AREA */}')
if idx_sidebar_start != -1 and idx_main_area != -1:
    text = text[:idx_sidebar_start] + text[idx_main_area:]
    print("Removed Voltix sidebar")
else:
    print("Could not find sidebar")

# Fix 3: Fix the end brackets
bad_end = '''        </div>
      </div>
      )}
    </MetronicLayout>
  );
}'''

good_end = '''        </div>
      </div>
    </div>
    </MetronicLayout>
  );
}'''

if bad_end in text:
    text = text.replace(bad_end, good_end)
    print("Fixed bad end")
else:
    print("Could not find bad end! Let's just fix the closing tags.")
    # fallback
    text = text.replace('      )}\n    </MetronicLayout>\n  );\n}', '    </div>\n    </MetronicLayout>\n  );\n}')

with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('App.jsx fixed!')
