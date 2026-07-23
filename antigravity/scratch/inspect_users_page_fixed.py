import asyncio
from playwright.async_api import async_playwright
from pathlib import Path

BASE_URL = "https://www.cfsmartems.com"
USERNAME = "appadmin@yopmail.com"
PASSWORD = "Admin@123"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context(
            viewport={"width": 1400, "height": 900}
        )
        
        # Route to use local bundles and block fonts
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
        
        print("Logging in...")
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
        await page.fill("input[id='Email']", USERNAME)
        await page.fill("input[id='Password']", PASSWORD)
        await page.click(".btn-primary")
        await page.wait_for_load_state("domcontentloaded", timeout=60000)
        await page.wait_for_timeout(5000)
        
        print("Navigating to Account/Users...")
        await page.goto(f"{BASE_URL}/Account/Users", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(10000) # Let it render fully
        print(f"Current URL: {page.url}")
        
        print("Taking screenshot of users page...")
        await page.screenshot(path="users_page.png", timeout=5000)
        
        print("Dumping table columns...")
        headers = await page.query_selector_all("th")
        col_names = [await h.inner_text() for h in headers]
        print(f"Table columns: {col_names}")
        
        links = await page.query_selector_all("a, button")
        print(f"Found {len(links)} links/buttons on the page:")
        for idx, lnk in enumerate(links[:200]):
            txt = (await lnk.inner_text()).strip()
            href = await lnk.get_attribute('href') or ""
            html = await lnk.inner_html()
            cls = await lnk.get_attribute('class') or ""
            tag = await lnk.evaluate("el => el.tagName.toLowerCase()")
            if txt or "btn" in cls or "fa-" in html or tag == "button":
                print(f"  [{idx}] tag='{tag}', text='{txt[:30]}', href='{href[:100]}', class='{cls[:50]}'")
                
        await browser.close()

asyncio.run(main())
