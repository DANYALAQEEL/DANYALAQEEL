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
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=60000)
        await page.fill("input[type='email'], input[name='Email']", USERNAME)
        await page.fill("input[type='password']", PASSWORD)
        await page.click("button[type='submit']")
        await page.wait_for_load_state("domcontentloaded", timeout=60000)
        
        print("Navigating to Account/Users...")
        await page.goto(f"{BASE_URL}/Account/Users", wait_until="domcontentloaded", timeout=30000)
        await page.wait_for_timeout(5000) # Let it render
        
        print("Taking screenshot of users page...")
        await page.screenshot(path="users_page.png", timeout=5000)
        
        print("Dumping table columns and links...")
        headers = await page.query_selector_all("th")
        col_names = [await h.inner_text() for h in headers]
        print(f"Table columns: {col_names}")
        
        links = await page.query_selector_all("a")
        print(f"Found {len(links)} links on the page:")
        for idx, lnk in enumerate(links):
            txt = await lnk.inner_text()
            href = await lnk.get_attribute("href") or ""
            html = await lnk.inner_html()
            if txt.strip() or "btn" in (await lnk.get_attribute("class") or "") or "fa-" in html:
                print(f"  [{idx}] text='{txt.strip()}', href='{href}', html='{html.strip()[:100]}'")
                
        await browser.close()

asyncio.run(main())
