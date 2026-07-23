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
        
        left_panel = page.locator("div.hidden.lg\\:flex").first
        right_panel = page.locator("div.transition-morph").first
        inner_content = page.locator("div.hidden.lg\\:flex > div.z-10").first
        
        print("\n=== BEFORE HOVER ===")
        print("Left Panel: ", left_panel.get_attribute("class") if left_panel.count() > 0 else "N/A")
        print("Right Panel:", right_panel.get_attribute("class") if right_panel.count() > 0 else "N/A")
        print("Inner:      ", inner_content.get_attribute("class") if inner_content.count() > 0 else "N/A")
        
        print("\nHovering at x=1000...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        print("\n=== AFTER HOVER ===")
        print("Left Panel: ", left_panel.get_attribute("class") if left_panel.count() > 0 else "N/A")
        print("Right Panel:", right_panel.get_attribute("class") if right_panel.count() > 0 else "N/A")
        print("Inner:      ", inner_content.get_attribute("class") if inner_content.count() > 0 else "N/A")
        
        browser.close()

if __name__ == "__main__":
    run()
