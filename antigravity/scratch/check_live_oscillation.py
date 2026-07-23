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
        
        left_panel = page.locator("div.bg-surface-900").first
        
        print("\nHovering at x=1000...")
        page.mouse.move(1000, 400)
        
        print("\nMonitoring Live Left Panel classes every 100ms for 2 seconds:")
        for idx in range(20):
            time.sleep(0.1)
            cls = left_panel.get_attribute("class")
            is_expanded = "lg:max-w-0" in cls
            print(f"Time {idx*100}ms: Expanded={is_expanded} | {cls[-50:]}")
            
        # Also take a screenshot to visually verify that it is fully expanded and completely clean
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\final_live_hovered.png")
        print("Saved final live hover screenshot to final_live_hovered.png")
        
        browser.close()

if __name__ == "__main__":
    run()
