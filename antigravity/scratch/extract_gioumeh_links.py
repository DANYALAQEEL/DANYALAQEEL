import re

file_path = r"C:\Users\Administrator\.gemini\antigravity\brain\6beefdb0-c605-4cab-814c-4080f8ab73f2\.system_generated\steps\313\content.md"

def extract_links():
    print("Reading fetched page content...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    print("Extracting download buttons and links...")
    # Search for download links (e.g. mega.nz, google drive, mediafire, dropbox, pdf links)
    links = re.findall(r'href="([^"]*(?:drive\.google|mega\.nz|mediafire|dropbox|download|wp-content|pdf)[^"]*)"', content, re.IGNORECASE)
    
    print("Found links:")
    for idx, link in enumerate(set(links)):
        print(f"  {idx+1}: {link}")

if __name__ == "__main__":
    extract_links()
