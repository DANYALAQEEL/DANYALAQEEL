import time
import requests
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        # We will check both recent deployments
        urls = [
            "https://improved-cf-dashboard-9oqbpajkn-danyalaqeels-projects.vercel.app",
            "https://improved-cf-dashboard-drs28nu0r-danyalaqeels-projects.vercel.app"
        ]
        
        for url in urls:
            print(f"\nNavigating to {url}...")
            try:
                page.goto(url)
                page.wait_for_load_state("networkidle")
                time.sleep(1.0)
                
                links = page.locator("link[rel='stylesheet']")
                count = links.count()
                for i in range(count):
                    href = links.nth(i).get_attribute("href")
                    if href and not href.startswith("http"):
                        full_url = f"{url}{href}"
                        resp = requests.get(full_url)
                        content = resp.text
                        has_override = ".dark .text-surface-900" in content or ".dark .text-surface-800" in content
                        print(f"URL: {url} | CSS: {href} | Has dark overrides: {has_override}")
            except Exception as e:
                print(f"Failed to check {url}: {e}")
                
        browser.close()

if __name__ == "__main__":
    run()
