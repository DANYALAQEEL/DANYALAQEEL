import time
import requests
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        time.sleep(2.0)
        
        # Get all link elements with rel="stylesheet" or any css files
        links = page.locator("link[rel='stylesheet']")
        count = links.count()
        print(f"Found {count} stylesheet links:")
        for i in range(count):
            href = links.nth(i).get_attribute("href")
            print(f"CSS Link {i}: {href}")
            
            # Download and check
            if href:
                full_url = href if href.startswith("http") else f"https://embedaiot.vercel.app{href}"
                try:
                    resp = requests.get(full_url)
                    content = resp.text
                    print(f"Length of {full_url}: {len(content)} characters")
                    # Check for our overrides
                    has_override = ".dark .text-surface-900" in content or ".dark .text-surface-800" in content
                    print(f"Has dark overrides: {has_override}")
                except Exception as e:
                    print(f"Failed to download: {e}")
                    
        browser.close()

if __name__ == "__main__":
    run()
