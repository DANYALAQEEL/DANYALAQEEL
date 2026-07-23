import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 1000})
        page = context.new_page()
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        time.sleep(3)
        
        print("Clicking Super Admin demo access button...")
        page.locator("button").nth(3).click()
        
        print("Waiting for redirect...")
        time.sleep(4)
        
        # Toggle dark mode first
        print("Toggling dark mode...")
        page.locator("button[title*='Switch to']").first.click()
        time.sleep(1)
        
        print("Navigating to Organizations...")
        page.locator("aside a:has-text('Organizations')").click()
        time.sleep(2)
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_organizations_dark.png")
        print("Saved screenshot to live_organizations_dark.png")
        
        print("Navigating to Users...")
        page.locator("aside a:has-text('Users')").click()
        time.sleep(2)
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_users_dark.png")
        print("Saved screenshot to live_users_dark.png")
        
        browser.close()

if __name__ == "__main__":
    run()
