import urllib.request
import urllib.parse
import re

query = "zill complex analysis solutions"
url = "https://libgen.li/index.php?req=" + urllib.parse.quote(query)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def fetch_libgen_li():
    print(f"Fetching from libgen.li: {url}")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        print("Page fetched successfully. Parsing...")
        # Check if there are any links containing "/get.php?" or similar download links
        links = re.findall(r'href="([^"]*get\.php[^"]*)"', html)
        if not links:
            links = re.findall(r'href="([^"]*ads\.php[^"]*)"', html)
            
        print(f"Found {len(links)} download links:")
        for idx, link in enumerate(links[:15]):
            print(f"  {idx+1}: {link}")
            
        # Let's extract book titles and authors from rows
        rows = re.findall(r'<tr[^>]*>.*?</tr>', html, re.DOTALL)
        print(f"Total rows found: {len(rows)}")
        for idx, row in enumerate(rows):
            if "Zill" in row or "Complex" in row or "complex" in row:
                # Clean html tags
                text = re.sub('<[^<]+?>', ' | ', row)
                text = " ".join(text.split())
                print(f"Row {idx}: {text[:300]}")
                
    except Exception as e:
        print(f"Error querying libgen.li: {e}")

if __name__ == "__main__":
    fetch_libgen_li()
