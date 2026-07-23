import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating to http://127.0.0.1:8000...")
        try:
            page.goto("http://127.0.0.1:8000", timeout=10000)
            page.wait_for_load_state("networkidle")
            time.sleep(2.0)
            
            # Capture full-page screenshot
            page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\4c9955c9-8ae8-4841-9fd6-39381d2e97db\\current_homepage_full.png", full_page=True)
            print("Saved full page screenshot to current_homepage_full.png")
        except Exception as e:
            print(f"Error: {e}")
        
        browser.close()

if __name__ == "__main__":
    run()
