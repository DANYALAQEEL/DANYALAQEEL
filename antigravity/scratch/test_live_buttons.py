import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()
        
        print("Navigating to https://embedaiot.vercel.app...")
        page.goto("https://embedaiot.vercel.app")
        time.sleep(5)
        
        print(f"Current URL: {page.url}")
        print(f"Title: {page.title()}")
        
        buttons = page.locator("button").all()
        print(f"Found {len(buttons)} buttons on the page:")
        for idx, btn in enumerate(buttons):
            try:
                print(f"Button {idx}: Text = '{btn.inner_text()}', Class = '{btn.get_attribute('class')}', Title = '{btn.get_attribute('title')}'")
            except Exception as e:
                print(f"Button {idx} error: {e}")
                
        # Take screen shot of page
        page.screenshot(path="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\live_debug.png")
        print("Saved screenshot to live_debug.png")
        browser.close()

if __name__ == "__main__":
    run()
