import urllib.request
import re

url = 'https://danyalaqeelportfolio.vercel.app/assets/index-BpnrTQo2.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as r:
    js = r.read().decode('utf-8', errors='ignore')

# Look for asset references that Vite typically uses
# Vite bundles images as hashed URLs like /assets/photo-Abc123.jpg
matches = re.findall(r'["\']([^"\']*assets[^"\']*)["\']', js)
print('Asset refs found:', len(matches))
for m in matches[:30]:
    print(m)
