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
        page = await context.new_page()
        
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
        
        print("Logging in...")
        await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
        await page.fill("input[id='Email']", USERNAME)
        await page.fill("input[id='Password']", PASSWORD)
        await page.click(".btn-primary")
        await page.wait_for_load_state("domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)
        
        print("Navigating to User/Index...")
        await page.goto(f"{BASE_URL}/User/Index", wait_until="domcontentloaded", timeout=120000)
        await page.wait_for_timeout(8000)
        
        # Check rows
        rows = await page.query_selector_all("table tbody tr")
        print(f"Found {len(rows)} rows in table tbody")
        
        for r_idx, row in enumerate(rows[:5]):
            print(f"\n--- ROW {r_idx} ---")
            cells = await row.query_selector_all("td")
            print(f"  Row contains {len(cells)} cells")
            for c_idx, cell in enumerate(cells):
                txt = (await cell.inner_text()).strip()
                html = await cell.inner_html()
                print(f"    Cell {c_idx} (text): {txt[:100]}")
                print(f"    Cell {c_idx} (HTML): {html.strip()[:300]}")
                
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
