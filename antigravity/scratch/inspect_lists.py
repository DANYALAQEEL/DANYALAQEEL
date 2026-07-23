import asyncio
from playwright.async_api import async_playwright
from pathlib import Path

BASE_URL = "https://www.cfsmartems.com"
USERNAME = "appadmin@yopmail.com"
PASSWORD = "Admin@123"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
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
        await page.wait_for_timeout(3000)
        
        # 1. Organization Index
        print("\n--- NAVIGATING TO ORGANIZATION INDEX ---")
        try:
            await page.goto(f"{BASE_URL}/Organization/Index", wait_until="domcontentloaded", timeout=120000)
            await page.wait_for_timeout(8000) # Let it render fully
            print(f"Current URL: {page.url}")
            body_text = await page.locator("body").inner_text()
            print(f"Body contains 'Oops': {'Oops' in body_text}")
            print(f"Body contains 'Not Found': {'Not Found' in body_text}")
            
            headers = await page.query_selector_all("th")
            col_names = [await h.inner_text() for h in headers]
            print(f"Table columns: {col_names}")
            
            links = await page.query_selector_all("a, button")
            print(f"Found {len(links)} links/buttons on page:")
            for idx, lnk in enumerate(links):
                txt = (await lnk.inner_text()).strip()
                href = await lnk.get_attribute('href') or ""
                cls = await lnk.get_attribute('class') or ""
                tag = await lnk.evaluate("el => el.tagName.toLowerCase()")
                if "login" in txt.lower() or "login" in href.lower() or "impersonate" in txt.lower() or "impersonate" in href.lower() or "view" in txt.lower():
                    print(f"  [{idx}] tag='{tag}', text='{txt}', href='{href}', class='{cls}'")
        except Exception as e:
            print(f"Error checking organization: {e}")

        # 2. User Index
        print("\n--- NAVIGATING TO USER INDEX ---")
        try:
            await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
            await page.wait_for_timeout(8000) # Let it render fully
            print(f"Current URL: {page.url}")
            body_text = await page.locator("body").inner_text()
            print(f"Body contains 'Oops': {'Oops' in body_text}")
            print(f"Body contains 'Not Found': {'Not Found' in body_text}")
            
            headers = await page.query_selector_all("th")
            col_names = [await h.inner_text() for h in headers]
            print(f"Table columns: {col_names}")
            
            links = await page.query_selector_all("a, button")
            print(f"Found {len(links)} links/buttons on page:")
            for idx, lnk in enumerate(links):
                txt = (await lnk.inner_text()).strip()
                href = await lnk.get_attribute('href') or ""
                cls = await lnk.get_attribute('class') or ""
                tag = await lnk.evaluate("el => el.tagName.toLowerCase()")
                if "login" in txt.lower() or "login" in href.lower() or "impersonate" in txt.lower() or "impersonate" in href.lower() or "view" in txt.lower():
                    print(f"  [{idx}] tag='{tag}', text='{txt}', href='{href}', class='{cls}'")
        except Exception as e:
            print(f"Error checking user: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
