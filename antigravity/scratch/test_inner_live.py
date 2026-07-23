import time
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
        
        # Take initial screenshot to ensure hydration/load
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_initial.png")
        
        left_panel = page.locator("div.bg-surface-900").first
        # Find all z-10 divs inside left panel
        inner_content = left_panel.locator("div.z-10").first
        
        print("\n=== BEFORE HOVER ===")
        print("Left Panel: ", left_panel.get_attribute("class"))
        print("Inner Content Class:", inner_content.get_attribute("class"))
        
        print("\nHovering at x=1000, y=400...")
        page.mouse.move(1000, 400)
        time.sleep(2.0) # wait extra time for animation and React state updates
        
        # Take hover screenshot
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_hovered.png")
        
        print("\n=== AFTER HOVER ===")
        print("Left Panel: ", left_panel.get_attribute("class"))
        print("Inner Content Class:", inner_content.get_attribute("class"))
        
        browser.close()

if __name__ == "__main__":
    run()
