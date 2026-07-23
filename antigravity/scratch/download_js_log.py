import urllib.request
import time
import os

url = "https://www.cfsmartems.com/assets/plugins/global/plugins.bundle.js"
local_file = "plugins.bundle.js"
log_file = "download_log.txt"

def log(msg):
    print(msg)
    with open(log_file, "a", encoding="utf-8") as lf:
        lf.write(msg + "\n")

if os.path.exists(log_file):
    os.remove(log_file)

log(f"Starting download of {url}...")
start_time = time.time()
try:
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    with urllib.request.urlopen(req, timeout=300) as response:
        info = response.info()
        content_length = info.get('Content-Length')
        if content_length:
            total_size = int(content_length)
            log(f"Total size: {total_size / (1024*1024):.2f} MB")
        else:
            log("Content-Length not provided")
            total_size = None
            
        chunk_size = 1024 * 64 # 64KB chunks
        bytes_read = 0
        chunks = []
        
        while True:
            chunk = response.read(chunk_size)
            if not chunk:
                break
            chunks.append(chunk)
            bytes_read += len(chunk)
            duration = time.time() - start_time
            speed = (bytes_read / 1024) / duration if duration > 0 else 0
            if total_size:
                log(f"  Downloaded {bytes_read / (1024*1024):.2f} MB / {total_size / (1024*1024):.2f} MB ({bytes_read/total_size*100:.1f}%) - Speed: {speed:.2f} KB/s - Time: {duration:.1f}s")
            else:
                log(f"  Downloaded {bytes_read / (1024*1024):.2f} MB - Speed: {speed:.2f} KB/s - Time: {duration:.1f}s")
                
        with open(local_file, "wb") as f:
            f.write(b"".join(chunks))
            
        log(f"Successfully saved to {local_file}")
except Exception as e:
    log(f"Error downloading: {e}")
