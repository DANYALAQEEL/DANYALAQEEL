import time
from playwright.sync_api import sync_playwright

def test_url(url):
    print(f"\n--- Testing URL: {url} ---")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        page.goto(url)
        page.wait_for_load_state("networkidle")
        
        # Check title
        print("Title:", page.title())
        
        # Check if the dark mode toggler is visible in the login header? 
        # Wait, the login page doesn't have the topbar, so the theme toggle isn't visible there.
        # But let's check the DOM for the left panel inner container
        inner_content = page.locator("div.bg-surface-900 > div.z-10").first
        
        if inner_content.count() > 0:
            print("Before Hover - Inner content classes:", inner_content.get_attribute("class"))
        else:
            print("No inner content matching locator.")
            
        print("Hovering at x=1000...")
        page.mouse.move(1000, 400)
        time.sleep(1.0)
        
        if inner_content.count() > 0:
            print("After Hover - Inner content classes:", inner_content.get_attribute("class"))
            
        browser.close()

test_url("https://embedaiot.vercel.app")
test_url("https://improved-cf-dashboard-bnh9pdj8u-danyalaqeels-projects.vercel.app")
