import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        try:
            print("Navigating with wait_until='commit'...")
            # wait_until="commit" returns as soon as the main HTML page has started loading
            await page.goto("https://www.cfsmartems.com", wait_until="commit", timeout=15000)
            print("Successfully reached commit state!")
            await page.wait_for_timeout(5000) # Give it 5s to render what it can
            print(f"URL: {page.url}, Title: {await page.title()}")
            await page.screenshot(path="ems_commit_test.png")
            print("Saved screenshot.")
        except Exception as e:
            print(f"Failed: {e}")
        await browser.close()

asyncio.run(main())
