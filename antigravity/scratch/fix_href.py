import codecs
import re

with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\MetronicLayout.jsx', 'r', 'utf-8') as f:
    text = f.read()

text = re.sub(r'href="/[A-Za-z0-9]+/Index"', 'href="#" onClick={(e) => { e.preventDefault(); setActiveTab("devices"); }}', text)
text = re.sub(r'href="/Device/[A-Za-z0-9]+"', 'href="#" onClick={(e) => { e.preventDefault(); setActiveTab("devices"); }}', text)

with codecs.open(r'C:\Users\Administrator\.gemini\antigravity\scratch\elsaenergy-agritech\Elsaenergy-Agritech-main\src\MetronicLayout.jsx', 'w', 'utf-8') as f:
    f.write(text)
print('Fixed hrefs')
