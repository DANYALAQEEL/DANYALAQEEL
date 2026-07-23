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
        time.sleep(2.0) # Wait for React mount and event binding
        
        left_panel = page.locator("div.bg-surface-900").first
        inner_content = page.locator("div.bg-surface-900 > div.z-10").first
        
        print("Initial Left Panel:", left_panel.get_attribute("class"))
        print("Initial Inner Content:", inner_content.get_attribute("class"))
        
        # Hover to trigger expansion
        print("Moving mouse to 1000, 400...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        print("Hovered Left Panel:", left_panel.get_attribute("class"))
        print("Hovered Inner Content:", inner_content.get_attribute("class"))
        
        browser.close()

if __name__ == "__main__":
    run()
