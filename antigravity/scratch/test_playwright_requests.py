import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        
        # Log all requests and their responses/failures
        page.on("request", lambda req: print(f"-> REQ: {req.url}"))
        page.on("requestfailed", lambda req: print(f"xx FAIL: {req.url} - {req.failure.error_text if req.failure else ''}"))
        page.on("response", lambda res: print(f"<- RES: {res.url} - {res.status}"))
        
        try:
            print("Navigating to https://www.cfsmartems.com...")
            await page.goto("https://www.cfsmartems.com", wait_until="commit", timeout=15000)
            print("Reached commit state! Waiting 12 seconds to observe requests...")
            await page.wait_for_timeout(12000)
            print("Finished waiting.")
        except Exception as e:
            print(f"Navigation error: {e}")
            
        await browser.close()

asyncio.run(main())
