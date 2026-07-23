import urllib.request
import re

css_url = "https://embedaiot.vercel.app/assets/index-B9fWf_Bv.css"
try:
    req = urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as css_response:
        css_content = css_response.read().decode('utf-8')
        
    print("CSS length:", len(css_content))
    
    # Search for text-surface-900 in the CSS
    ts_900 = re.findall(r'[^\}]*text-surface-900[^\}]*\}', css_content)
    print("Matches for text-surface-900:")
    for match in ts_900[:10]:
        print("  -", match)
        
    # Search for FEFEF8 in the CSS
    fefef8_matches = re.findall(r'[^\}]*#FEFEF8[^\}]*\}', css_content, re.IGNORECASE)
    print("Matches for FEFEF8:")
    for match in fefef8_matches[:10]:
        print("  -", match)
        
    # Search for dark class text-surface-900
    dark_ts_900 = [m for m in re.findall(r'[^\}]*dark[^\}]*\}', css_content) if 'text-surface-900' in m]
    print("Matches for dark and text-surface-900:")
    for match in dark_ts_900[:10]:
        print("  -", match)
except Exception as e:
    print("Error:", e)
