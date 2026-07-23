import urllib.request

url = 'https://danyalaqeelportfolio.vercel.app/assets/index-BpnrTQo2.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as r:
    js = r.read().decode('utf-8', errors='ignore')

# Print first 2000 chars to see what's in the bundle
print(repr(js[:2000]))
