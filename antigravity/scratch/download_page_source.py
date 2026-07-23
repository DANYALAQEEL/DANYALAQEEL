import urllib.request
import urllib.parse
import re

query = "zill complex analysis solutions"
url = "https://libgen.is/search.php?req=" + urllib.parse.quote(query)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def fetch_libgen():
    print(f"Fetching LibGen search results for: {query}")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        print("Successfully fetched LibGen search page. Analyzing content...")
        
        # Look for table rows in Libgen search output
        # Usually contain titles and links to mirrors
        # Let's search for download links/mirrors (like library.lol/main/...)
        mirrors = re.findall(r'href="([^"]*library\.lol[^"]*)"', html)
        if not mirrors:
            mirrors = re.findall(r'href="([^"]*libgen\.li/file[^"]*)"', html)
        if not mirrors:
            mirrors = re.findall(r'href="([^"]*book/index\.php[^"]*)"', html)
            
        print(f"Found {len(mirrors)} mirror links:")
        for idx, mirror in enumerate(mirrors):
            print(f"  {idx+1}: {mirror}")
            
        # Also print any row text that contains "Complex Analysis" and "Zill"
        # to see the titles of found books
        rows = re.findall(r'<tr[^>]*>.*?</tr>', html, re.DOTALL)
        print(f"Analyzing {len(rows)} table rows...")
        for row in rows:
            if "Zill" in row and ("Complex" in row or "complex" in row or "Solutions" in row):
                # Clean html tags to show readable text
                cleaned_row = re.sub('<[^<]+?>', ' | ', row)
                # Remove extra spaces/newlines
                cleaned_row = " ".join(cleaned_row.split())
                print(f"Matching Row: {cleaned_row[:500]}")
                
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    fetch_libgen()
