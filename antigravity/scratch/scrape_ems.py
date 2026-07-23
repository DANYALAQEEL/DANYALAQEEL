import asyncio
from playwright.async_api import async_playwright
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        
        print("Navigating to login...")
        # Start at the root or login page
        await page.goto("https://www.cfsmartems.com/")
        await page.wait_for_load_state("networkidle")
        
        print("Attempting to fill credentials...")
        try:
            # Let's try some common selectors for email and password
            await page.fill("input[type='text'], input[type='email'], input[name*='email'], input[name*='user']", "appadmin@yopmail.com")
            await page.fill("input[type='password']", "Admin@123")
            
            print("Clicking submit...")
            # Try finding a button that says Login or Sign In or has type submit
            await page.click("button[type='submit'], input[type='submit'], .btn-primary, button")
            
            # Wait for dashboard to load
            print("Waiting for dashboard to load...")
            await page.wait_for_timeout(5000) # wait 5 seconds for redirects
            await page.wait_for_load_state("networkidle")
            
            print("Current URL:", page.url)
            
            print("Taking screenshot...")
            await page.screenshot(path="dashboard_full.png", full_page=True)
            
            print("Extracting HTML...")
            html = await page.content()
            with open("dashboard.html", "w", encoding="utf-8") as f:
                f.write(html)
                
            print("Success")
        except Exception as e:
            print(f"Error during login: {e}")
            await page.screenshot(path="error.png")
            
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
