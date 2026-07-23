import urllib.request
import re
import os

url = "https://dokumen.pub/solutions-manual-for-complex-analysis-9781449694623-1449694627.html"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def fetch_and_download():
    print(f"Fetching page: {url}")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        print("Page fetched successfully. Parsing for download links...")
        
        # Look for download links
        # Dokumen.pub download buttons usually point to /download/...
        links = re.findall(r'href="([^"]*download[^"]*)"', html)
        if not links:
            links = re.findall(r'href="([^"]*\.pdf[^"]*)"', html)
            
        print("Found links:")
        for idx, link in enumerate(links):
            print(f"  {idx+1}: {link}")
            
        # Let's try to construct the direct download page URL
        # For documents, the download button usually redirects to /download/<id>
        doc_id = "solutions-manual-for-complex-analysis-9781449694623-1449694627"
        download_page = f"https://dokumen.pub/download/{doc_id}"
        print(f"Accessing download page: {download_page}")
        
        req_dl = urllib.request.Request(download_page, headers=headers)
        with urllib.request.urlopen(req_dl) as response_dl:
            html_dl = response_dl.read().decode('utf-8')
            
        # Find the actual direct file link on the download page (often has a class or specific id, or just matches the CDN link)
        # Usually it's in a script or a button with href starting with https://file.dokumen.pub/... or /files/...
        cdn_links = re.findall(r'href="([^"]*file\.dokumen\.pub[^"]*)"', html_dl)
        if not cdn_links:
            cdn_links = re.findall(r'href="([^"]*download-link[^"]*)"', html_dl)
        if not cdn_links:
            # Let's look for any button/link that contains the file index
            cdn_links = re.findall(r'href="([^"]*/files/[^"]*)"', html_dl)
            
        print("Found CDN/Direct download links:")
        for idx, clink in enumerate(cdn_links):
            print(f"  {idx+1}: {clink}")
            
        target_link = None
        if cdn_links:
            target_link = cdn_links[0]
        elif links:
            target_link = links[0]
            if not target_link.startswith("http"):
                target_link = "https://dokumen.pub" + target_link
                
        if target_link:
            print(f"Attempting to download from target link: {target_link}")
            output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_solutions.pdf"
            
            # Download file
            req_file = urllib.request.Request(target_link, headers=headers)
            with urllib.request.urlopen(req_file) as response_file, open(output_path, 'wb') as out_file:
                shutil_copy(response_file, out_file)
            print(f"Downloaded solutions manual successfully to {output_path}!")
            print(f"Size: {os.path.getsize(output_path)} bytes")
        else:
            print("Could not find a direct download link.")
            
    except Exception as e:
        print(f"Error occurred: {e}")

def shutil_copy(src, dst):
    buffer_size = 1024 * 1024
    while True:
        copy_buffer = src.read(buffer_size)
        if not copy_buffer:
            break
        dst.write(copy_buffer)

if __name__ == "__main__":
    fetch_and_download()
