import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        
        # Enable request blocking
        async def block_resources(route):
            url = route.request.url.lower()
            if any(x in url for x in [".woff", ".woff2", ".ttf", "fonts.googleapis", "fonts.gstatic"]):
                print(f"  [BLOCKED] {url}")
                await route.abort()
            else:
                await route.continue_()
                
        await page.route("**/*", block_resources)
        
        try:
            print("Navigating to https://www.cfsmartems.com...")
            # We use domcontentloaded which should be fast now
            await page.goto("https://www.cfsmartems.com", wait_until="domcontentloaded", timeout=20000)
            print("Success loading page!")
            print(f"URL: {page.url}, Title: {await page.title()}")
            
            # Take screenshot with 5s timeout
            print("Taking screenshot...")
            await page.screenshot(path="ems_blocked_test.png", timeout=5000)
            print("Screenshot saved successfully!")
        except Exception as e:
            print(f"Failed: {e}")
            
        await browser.close()

asyncio.run(main())
