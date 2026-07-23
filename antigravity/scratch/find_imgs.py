import urllib.request
import re

url = 'https://danyalaqeelportfolio.vercel.app/assets/index-BpnrTQo2.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as r:
    js = r.read().decode('utf-8', errors='ignore')

# Find image paths
imgs = re.findall(r'["\'](/[^"\']+\.(png|jpg|jpeg|webp|PNG|JPG|JPEG|WEBP))', js)
print('Image paths found:')
for img, ext in imgs[:30]:
    print(img)
