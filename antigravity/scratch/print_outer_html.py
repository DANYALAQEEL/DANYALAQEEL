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
        
        print("\n=== BEFORE HOVER ===")
        # Get the class of the first two div.bg-surface-900 or elements matching bg-surface-900
        elements = page.locator("div")
        count = elements.count()
        for i in range(count):
            el = elements.nth(i)
            cls = el.get_attribute("class")
            if cls and "bg-surface-900" in cls:
                print(f"Element {i} class: {cls}")
                
        # Let's hover
        print("\nHovering...")
        page.mouse.move(1000, 400)
        time.sleep(2.0)
        
        print("\n=== AFTER HOVER ===")
        for i in range(count):
            el = elements.nth(i)
            cls = el.get_attribute("class")
            if cls and "bg-surface-900" in cls:
                print(f"Element {i} class: {cls}")
                
        browser.close()

if __name__ == "__main__":
    run()
