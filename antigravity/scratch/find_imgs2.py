import urllib.request
import re

url = 'https://danyalaqeelportfolio.vercel.app/assets/index-BpnrTQo2.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as r:
    js = r.read().decode('utf-8', errors='ignore')

# Save the JS for manual search
with open('bundle_sample.txt', 'w', encoding='utf-8') as f:
    # Search for image/asset references
    matches = re.findall(r'["\']([^"\']*\.(?:png|jpg|jpeg|webp))["\']', js, re.IGNORECASE)
    f.write('\n'.join(matches))
    print('Found', len(matches), 'image references')
    for m in matches[:20]:
        print(m)
