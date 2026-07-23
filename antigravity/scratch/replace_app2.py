import codecs

with codecs.open('elsaenergy-agritech/Elsaenergy-Agritech-main/src/App.jsx', 'r', 'utf-8') as f:
    text = f.read()

with codecs.open('devices_block.jsx', 'r', 'utf-8') as f:
    replacement_content = f.read()

start_str = '{/* ───────────────────────────────────────────────────────────\n             TAB VIEW: DEVICES LIST (landing / default page)\n             ─────────────────────────────────────────────────────────── */}\n          {activeTab === "devices" && ('
end_str = '            </div>\n          )}\n\n          {/* ADD DEVICE MODAL SIMULATION */}'

if start_str not in text:
    print('start not found')
elif end_str not in text:
    print('end not found')
else:
    start_idx = text.find(start_str)
    end_idx = text.find(end_str) + len('            </div>\n          )}\n')
    
    new_text = text[:start_idx + len(start_str) + 1] + replacement_content + '\n          )}\n' + text[end_idx:]
            
    with codecs.open('elsaenergy-agritech/Elsaenergy-Agritech-main/src/App.jsx', 'w', 'utf-8') as f:
        f.write(new_text)
    print('Replaced successfully!')
