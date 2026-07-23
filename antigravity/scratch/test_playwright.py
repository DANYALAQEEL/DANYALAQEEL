import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        try:
            print("Navigating to google.com...")
            await page.goto("https://www.google.com", timeout=15000)
            print(f"Title: {await page.title()}")
            await page.screenshot(path="google_test.png")
            print("Successfully loaded google.com and saved screenshot.")
        except Exception as e:
            print(f"Failed to load google.com: {e}")
        await browser.close()

asyncio.run(main())
