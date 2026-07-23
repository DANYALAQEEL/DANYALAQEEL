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
        
        print("\nHovering at 1000, 400...")
        page.mouse.move(1000, 400)
        
        print("\nMonitoring Left Panel classes every 100ms for 2 seconds:")
        for idx in range(20):
            time.sleep(0.1)
            cls = left_panel.get_attribute("class")
            # extract key classes to see if it's expanded or not
            is_expanded_class = "lg:max-w-0" in cls
            print(f"Time {idx*100}ms: Expanded={is_expanded_class} | {cls[-50:]}")
            
        browser.close()

if __name__ == "__main__":
    run()
