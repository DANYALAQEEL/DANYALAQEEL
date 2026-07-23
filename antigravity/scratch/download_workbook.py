import urllib.request
import urllib.error
import http.client
import re
import os
import time

md5 = "1c961cc1199116bdc3e9fb36db2b45d1"
download_page = f"https://libgen.li/ads.php?md5={md5}"
output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_complex_workbook.pdf"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def get_html_with_retry(url, retries=5):
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                return response.read().decode('utf-8')
        except http.client.IncompleteRead as e:
            print(f"IncompleteRead on page fetch, attempting to recover partial data...")
            return e.partial.decode('utf-8', errors='ignore')
        except Exception as e:
            print(f"Attempt {i+1} failed: {e}")
            if i < retries - 1:
                time.sleep(2)
    raise Exception(f"Failed to fetch page after {retries} attempts.")

def download_workbook():
    try:
        html = get_html_with_retry(download_page)
        print("Fetched page successfully. Searching for direct file link...")
        
        # Search for links starting with "get.php?key=" or containing "get.php?md5="
        direct_links = re.findall(r'href="([^"]*get\.php[^"]*)"', html)
        if not direct_links:
            direct_links = re.findall(r'href="([^"]*/get\.php\?[^"]*)"', html)
            
        print("Found direct links:")
        for idx, dlink in enumerate(direct_links):
            print(f"  {idx+1}: {dlink}")
            
        if direct_links:
            target_link = direct_links[0]
            if not target_link.startswith("http"):
                target_link = "https://libgen.li/" + target_link.lstrip("/")
                
            print(f"Downloading file from direct link: {target_link}")
            
            # Retry loop for file download
            for attempt in range(5):
                try:
                    req_file = urllib.request.Request(target_link, headers=headers)
                    with urllib.request.urlopen(req_file, timeout=30) as file_resp, open(output_path, "wb") as out_file:
                        buffer_size = 1024 * 1024
                        while True:
                            try:
                                buf = file_resp.read(buffer_size)
                            except http.client.IncompleteRead as e:
                                print("IncompleteRead during file download, writing partial data and breaking...")
                                out_file.write(e.partial)
                                break
                            if not buf:
                                break
                            out_file.write(buf)
                    print(f"\nDownload finished! Saved to: {output_path}")
                    print(f"Size: {os.path.getsize(output_path)} bytes")
                    break
                except Exception as dl_err:
                    print(f"Download attempt {attempt+1} failed: {dl_err}")
                    if attempt < 4:
                        time.sleep(3)
            
            # Verify the first few pages using pypdf
            import pypdf
            reader = pypdf.PdfReader(output_path)
            print(f"Total Pages in PDF: {len(reader.pages)}")
            print("First page text:")
            print(reader.pages[0].extract_text()[:1000].encode('ascii', errors='replace').decode('ascii'))
            
        else:
            print("Could not find a direct download link on the page.")
            
    except Exception as e:
        print(f"Error occurred: {e}")

if __name__ == "__main__":
    download_workbook()
