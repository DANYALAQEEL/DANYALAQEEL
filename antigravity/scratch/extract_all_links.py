import re

file_path = r"C:\Users\Administrator\.gemini\antigravity\brain\6beefdb0-c605-4cab-814c-4080f8ab73f2\.system_generated\steps\313\content.md"

def extract_all():
    print("Reading page source...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    print("Extracting all href links...")
    links = re.findall(r'href="([^"]*)"', content)
    
    print("\nExternal and Preview Links:")
    matched = set()
    for link in links:
        # Filter out local navigation links (unless they are preview/pdf links)
        if "gioumeh.com" in link and not ("uploads" in link or "preview" in link or "pdf" in link):
            continue
        if link.startswith("#") or link.startswith("javascript:") or len(link) < 2:
            continue
            
        matched.add(link)
        
    for idx, link in enumerate(sorted(matched)):
        print(f"  {idx+1}: {link}")

if __name__ == "__main__":
    extract_all()
