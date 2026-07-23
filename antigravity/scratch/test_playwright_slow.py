import asyncio
from playwright.async_api import async_playwright
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        
        # Log response events to track progress
        start_time = time.time()
        page.on("request", lambda req: print(f"-> REQ [{time.time()-start_time:.1f}s]: {req.url}"))
        page.on("response", lambda res: print(f"<- RES [{time.time()-start_time:.1f}s]: {res.url} - {res.status}"))
        page.on("requestfailed", lambda req: print(f"xx FAIL [{time.time()-start_time:.1f}s]: {req.url}"))
        
        try:
            print("Navigating to https://www.cfsmartems.com with 120s timeout...")
            await page.goto("https://www.cfsmartems.com", wait_until="domcontentloaded", timeout=120000)
            print("SUCCESS: domcontentloaded reached!")
            await page.screenshot(path="ems_slow_test.png")
            print("Screenshot saved.")
        except Exception as e:
            print(f"FAILED: {e}")
            
        await browser.close()

asyncio.run(main())
