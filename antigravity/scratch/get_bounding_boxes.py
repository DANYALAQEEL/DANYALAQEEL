import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating...")
        page.goto("https://embedaiot.vercel.app")
        page.wait_for_load_state("networkidle")
        time.sleep(2.0)
        
        left_panel = page.locator("div.bg-surface-900").first
        right_panel = page.locator("div.transition-morph").first
        
        print("\n=== BEFORE HOVER ===")
        print("Left Panel Box: ", left_panel.bounding_box())
        print("Right Panel Box:", right_panel.bounding_box())
        
        print("\nHovering...")
        page.mouse.move(1000, 400)
        time.sleep(2.0) # Wait for transition to fully complete
        
        print("\n=== AFTER HOVER ===")
        print("Left Panel Box: ", left_panel.bounding_box())
        print("Right Panel Box:", right_panel.bounding_box())
        
        browser.close()

if __name__ == "__main__":
    run()
