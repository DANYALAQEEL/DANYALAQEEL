import asyncio
from playwright.async_api import async_playwright
from pathlib import Path

BASE_URL = "https://www.cfsmartems.com"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context(viewport={"width": 1400, "height": 900})
        
        async def handle_route(route):
            url = route.request.url
            if "plugins.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\plugins.bundle.js")
                if local_path.exists():
                    await route.fulfill(status=200, content_type="application/javascript", body=local_path.read_bytes())
                    return
            elif "scripts.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\scripts.bundle.js")
                if local_path.exists():
                    await route.fulfill(status=200, content_type="application/javascript", body=local_path.read_bytes())
                    return
            if any(x in url.lower() for x in [".woff", ".woff2", ".ttf"]):
                await route.fulfill(status=200, content_type="font/woff2", body=b"")
                return
            await route.continue_()

        await context.route("**/*", handle_route)
        page = await context.new_page()
        
        print("Navigating...")
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)
        
        print("Dumping all inputs and buttons:")
        inputs = await page.query_selector_all("input")
        for idx, inp in enumerate(inputs):
            print(f"  Input [{idx}]: type='{await inp.get_attribute('type')}', id='{await inp.get_attribute('id')}', name='{await inp.get_attribute('name')}'")
            
        buttons = await page.query_selector_all("button")
        for idx, btn in enumerate(buttons):
            print(f"  Button [{idx}]: type='{await btn.get_attribute('type')}', class='{await btn.get_attribute('class')}', text='{(await btn.inner_text()).strip()}'")
            
        await page.screenshot(path="login_debug.png")
        print("Screenshot saved to login_debug.png")
        
        await browser.close()

asyncio.run(main())
