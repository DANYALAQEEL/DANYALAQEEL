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
        
        # Select the inner content container (which should get 'hidden' when expanded)
        # In Login.jsx: <div className={`w-full flex-1 flex flex-col justify-between z-10 ${isExpanded ? 'hidden' : ''}`}>
        # It is the child of the left panel div.bg-surface-900.
        inner_content = page.locator("div.bg-surface-900 > div.z-10").first
        
        if inner_content.count() > 0:
            print("Before Hover - Inner content classes:", inner_content.get_attribute("class"))
            print("Before Hover - Inner content is_visible:", inner_content.is_visible())
        else:
            print("No inner content matching locator.")
            
        print("Hovering at x=1000...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        if inner_content.count() > 0:
            print("After Hover - Inner content classes:", inner_content.get_attribute("class"))
            print("After Hover - Inner content is_visible:", inner_content.is_visible())
            
        browser.close()

if __name__ == "__main__":
    run()
