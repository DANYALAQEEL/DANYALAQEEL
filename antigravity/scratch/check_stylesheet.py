import urllib.request
import re

url = "https://embedaiot.vercel.app"
try:
    with urllib.request.urlopen(url) as response:
        html = response.read().decode('utf-8')
    
    print("Page fetched successfully. HTML length:", len(html))
    
    # Find stylesheet hrefs using regex
    css_urls = re.findall(r'<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"', html)
    print("Live index.html stylesheet links:", css_urls)
    
    for href in css_urls:
        if href.startswith('/'):
            css_url = url + href
        else:
            css_url = href
            
        print(f"\nFetching stylesheet: {css_url}")
        req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as css_response:
            css_content = css_response.read().decode('utf-8')
            
        # Search for .dark in the CSS
        matches = re.findall(r'\.dark\s+\.text-surface-[0-9]+', css_content)
        print(f"Found .dark overrides: {matches}")
        
        # Check if '.dark' exists in CSS
        dark_occurrences = len(re.findall(r'\.dark\b', css_content))
        print(f"Occurrences of '.dark': {dark_occurrences}")
        
except Exception as e:
    print("Error:", e)
