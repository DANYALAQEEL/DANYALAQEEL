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
            
            # Scroll down in increments to trigger AOS and take screenshots
            scroll_positions = [0, 800, 1600, 2400, 3200, 4000]
            for idx, pos in enumerate(scroll_positions):
                page.evaluate(f"window.scrollTo(0, {pos});")
                time.sleep(1.0)
                page.screenshot(path=f"C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\4c9955c9-8ae8-4841-9fd6-39381d2e97db\\homepage_scroll_{idx}.png")
                print(f"Captured screenshot at scroll position {pos} as homepage_scroll_{idx}.png")
                
        except Exception as e:
            print(f"Error: {e}")
            
        browser.close()

if __name__ == "__main__":
    run()
