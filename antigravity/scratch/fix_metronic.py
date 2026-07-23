with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\MetronicLayout.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix logo
text = text.replace('<img alt="Logo" src="https://www.cfsmartems.com/Logo/logo.png" style={{ height: \'40px\', objectFit: \'contain\', maxWidth: \'140px\' }} />', '<div style={{ fontWeight: \'bold\', fontSize: \'24px\', color: \'#1B283F\', paddingLeft: \'10px\' }}>CF SmartEMS</div>')

# Fix 3-bar button icon
text = text.replace('<i className="ki-outline ki-abstract-14 fs-3 mt-1"></i>', '<i className="fa-solid fa-bars fs-3 mt-1" style={{color: \'#6c757d\'}}></i>')
text = text.replace('<i className="ki-outline ki-abstract-14 fs-2"></i>', '<i className="fa-solid fa-bars fs-2" style={{color: \'#6c757d\'}}></i>')

# Fix background color of root to match CFSmartEMS grey (#F5F6F8)
text = text.replace('<div className="d-flex flex-column flex-root app-root" id="kt_app_root">', '<div className="d-flex flex-column flex-root app-root" id="kt_app_root" style={{backgroundColor: \'#F5F6F8\'}}>')

# Fix minimized text issue
text = text.replace('<span className="menu-title">', '<span className="menu-title" style={{ display: isDesktopMinimized ? \'none\' : \'block\' }}>')
text = text.replace('<span className="menu-arrow"></span>', '<span className="menu-arrow" style={{ display: isDesktopMinimized ? \'none\' : \'block\' }}></span>')
text = text.replace('<span className="menu-arrow open"></span>', '<span className="menu-arrow open" style={{ display: isDesktopMinimized ? \'none\' : \'block\' }}></span>')

with open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\MetronicLayout.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('MetronicLayout.jsx updated!')
