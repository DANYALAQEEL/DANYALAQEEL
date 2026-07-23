import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        for url in ["https://www.cfsmartems.com", "https://cfsmartems.com"]:
            try:
                print(f"Navigating to {url}...")
                await page.goto(url, timeout=20000)
                print(f"Success! URL: {page.url}, Title: {await page.title()}")
                await page.screenshot(path="ems_test.png")
                break
            except Exception as e:
                print(f"Failed to load {url}: {e}")
        await browser.close()

asyncio.run(main())
