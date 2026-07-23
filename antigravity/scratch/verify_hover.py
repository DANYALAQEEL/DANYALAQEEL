import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        
        left_panel = page.locator("div.bg-surface-900").first
        
        print("Before hover classes:", left_panel.get_attribute("class"))
        
        # Hover at x=1000
        print("Moving mouse to 1000, 400...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        print("After hover classes:", left_panel.get_attribute("class"))
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\verify_hover_1000.png")
        
        # Move mouse to x=800
        print("Moving mouse to 800, 400...")
        page.mouse.move(800, 400)
        time.sleep(1.0)
        
        print("After hover at 800 classes:", left_panel.get_attribute("class"))
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\verify_hover_800.png")
        
        browser.close()

if __name__ == "__main__":
    run()
