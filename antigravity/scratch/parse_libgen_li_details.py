import urllib.request
import urllib.parse
import re

url = "https://libgen.li/index.php?req=" + urllib.parse.quote("zill complex analysis")
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def parse_details():
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        # Find all table rows
        rows = re.findall(r'<tr[^>]*>.*?</tr>', html, re.DOTALL)
        print(f"Total rows found: {len(rows)}")
        
        for idx, row in enumerate(rows):
            # Extract MD5 from links like: ads.php?md5=...
            md5_match = re.search(r'ads\.php\?md5=([a-f0-9]{32})', row)
            md5 = md5_match.group(1) if md5_match else "None"
            
            # Extract hover title/details
            title_match = re.search(r'title="([^"]*)"', row)
            hover = title_match.group(1) if title_match else "None"
            
            # Extract text elements
            cells = re.findall(r'<td[^>]*>(.*?)</td>', row, re.DOTALL)
            cell_texts = [re.sub(r'<[^>]*>', '', c).strip() for c in cells]
            
            if cell_texts:
                print(f"\nResult {idx}:")
                print(f"  Title/Hover: {hover}")
                print(f"  Cells: {cell_texts}")
                print(f"  MD5: {md5}")
                
    except Exception as e:
        print(f"Error parsing details: {e}")

if __name__ == "__main__":
    parse_details()
