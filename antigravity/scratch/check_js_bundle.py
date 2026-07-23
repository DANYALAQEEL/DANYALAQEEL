import re
import urllib.request
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        
        # Find script tags containing assets/index
        scripts = page.locator("script[src*='assets/index']").all()
        if not scripts:
            print("No main JS script tag found.")
            browser.close()
            return
            
        script_src = scripts[0].get_attribute("src")
        # Full URL
        full_url = "https://embedaiot.vercel.app" + script_src
        print(f"Fetching JS bundle: {full_url}")
        
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            js_content = response.read().decode('utf-8')
            
        print("JS Bundle length:", len(js_content))
        
        # Let's search for "z-10" and see what string template it is inside.
        # We can find matches containing "w-full flex-1 flex flex-col justify-between"
        pattern = re.compile(r'"w-full flex-1 flex flex-col justify-between z-10.*?"')
        matches = pattern.findall(js_content)
        
        print("\n--- Matches for inner panel classes in JS bundle ---")
        for match in matches:
            print(match)
            
        # Let's also look for "lg:max-w-0" to check the outer panel classes in the bundle.
        pattern_outer = re.compile(r'"hidden lg:flex bg-surface-900.*?"')
        matches_outer = pattern_outer.findall(js_content)
        print("\n--- Matches for outer panel classes in JS bundle ---")
        for match in matches_outer:
            print(match)
            
        browser.close()

if __name__ == "__main__":
    run()
