import urllib.request
import time

url = "https://www.cfsmartems.com/assets/plugins/global/plugins.bundle.js"
print(f"Downloading {url}...")
start = time.time()
try:
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    with urllib.request.urlopen(req, timeout=120) as response:
        content = response.read()
        duration = time.time() - start
        size_mb = len(content) / (1024 * 1024)
        print(f"Success in {duration:.2f}s!")
        print(f"File size: {size_mb:.2f} MB")
        print(f"Content snippet: {content[:200]}")
except Exception as e:
    duration = time.time() - start
    print(f"Failed in {duration:.2f}s: {e}")
