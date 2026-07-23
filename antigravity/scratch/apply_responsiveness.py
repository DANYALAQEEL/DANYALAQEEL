import os

file_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\App.jsx"

if not os.path.exists(file_path):
    print("Error: App.jsx not found.")
    exit(1)

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    # Devices Tab layout splitting
    (
        '              <div className="card-body py-6 px-8 d-flex gap-8">',
        '              <div className="card-body py-6 px-8 d-flex flex-column flex-md-row gap-8">'
    ),
    (
        '                <div style={{ width: "220px", borderRight: "1px solid #F1F1F4", paddingRight: "20px", flexShrink: 0 }}>',
        '                <div className="responsive-sidebar-col" style={{ width: "220px", paddingRight: "20px", flexShrink: 0 }}>'
    ),
    # Fixed grids
    (
        'style={{display:"grid",gridTemplateColumns:"400px 1fr",gap:16,height:"calc(100vh - 120px)"}}',
        'className="responsive-grid-fixed-left-400" style={{gap:16,height:"calc(100vh - 120px)"}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:16}}',
        'className="responsive-grid-fixed-left-360" style={{gap:16}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"340px 1fr",gap:16}}',
        'className="responsive-grid-fixed-left-340" style={{gap:16}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:16}}',
        'className="responsive-grid-fixed-right" style={{gap:16}}'
    ),
    # 5 column layout
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12}}',
        'className="responsive-grid-5" style={{gap:12}}'
    ),
    # 4 column layouts
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}',
        'className="responsive-grid-4" style={{gap:14}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}',
        'className="responsive-grid-4" style={{gap:12}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}',
        'className="responsive-grid-4" style={{gap:10}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginBottom:16}}',
        'className="responsive-grid-4" style={{gap:10,marginBottom:16}}'
    ),
    # 3 column layouts
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}',
        'className="responsive-grid-3" style={{gap:16}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}',
        'className="responsive-grid-3" style={{gap:8}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:16}}',
        'className="responsive-grid-3" style={{gap:8,marginTop:16}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}',
        'className="responsive-grid-3" style={{gap:10}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}',
        'className="responsive-grid-3" style={{gap:12}}'
    ),
    # 2 column layouts (equal split)
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}',
        'className="responsive-grid-1-1" style={{gap:8,marginBottom:16}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}',
        'className="responsive-grid-1-1" style={{gap:8}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}',
        'className="responsive-grid-1-1" style={{gap:14}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}',
        'className="responsive-grid-1-1" style={{gap:12}}'
    ),
    (
        'style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}',
        'className="responsive-grid-1-1" style={{gap:0}}'
    ),
    # 2:1 column layouts
    (
        'style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14}}',
        'className="responsive-grid-2-1" style={{gap:14}}'
    )
]

applied_count = 0
not_found_count = 0

for target, replacement in replacements:
    if target in content:
        # Replace all occurrences of this specific configuration
        occurrences = content.count(target)
        content = content.replace(target, replacement)
        print(f"Applied replacement (replaced {occurrences} occurrences):\n  FROM: {target[:60]}...\n  TO:   {replacement[:60]}...")
        applied_count += occurrences
    else:
        print(f"Target not found:\n  {target[:80]}...")
        not_found_count += 1

if applied_count > 0:
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"\nSuccessfully applied {applied_count} replacements. App.jsx updated.")
else:
    print("\nNo replacements were applied.")
