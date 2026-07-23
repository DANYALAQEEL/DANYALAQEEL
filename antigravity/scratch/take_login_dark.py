import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        time.sleep(3)
        
        print("Toggling dark mode on login screen...")
        page.locator("button[title*='Switch to']").first.click()
        time.sleep(2)
        
        # Capture screenshot
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_login_dark.png")
        print("Saved screenshot to live_login_dark.png")
        
        browser.close()

if __name__ == "__main__":
    run()
