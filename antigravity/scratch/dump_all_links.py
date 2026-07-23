import asyncio
from playwright.async_api import async_playwright
from pathlib import Path
import sys

BASE_URL = "https://www.cfsmartems.com"
USERNAME = "appadmin@yopmail.com"
PASSWORD = "Admin@123"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1600, "height": 900}
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
        await page.wait_for_timeout(5000)
        
        print(f"URL after login: {page.url}")
        
        # Wait for sidebar or main elements
        print("Waiting for sidebar...")
        for i in range(30):
            items = await page.query_selector_all(".sidebar a, aside a, .kt-menu__link, .menu-item a")
            if len(items) > 5:
                print(f"Sidebar rendered after {i}s")
                break
            await page.wait_for_timeout(1000)
            
        # Dump all elements on the page
        print("Dumping all links on page...")
        elements = await page.query_selector_all("a, button, div.menu-item, div.btn, span.btn")
        print(f"Found {len(elements)} clickable elements")
        
        output_lines = []
        for idx, el in enumerate(elements):
            try:
                tag = await el.evaluate("e => e.tagName.toLowerCase()")
                txt = (await el.inner_text()).strip().replace("\n", " ")
                href = await el.get_attribute("href") or ""
                title = await el.get_attribute("title") or ""
                cls = await el.get_attribute("class") or ""
                onclick = await el.get_attribute("onclick") or ""
                data_id = await el.get_attribute("data-id") or ""
                data_url = await el.get_attribute("data-url") or ""
                
                output_lines.append(
                    f"[{idx}] tag={tag} | text='{txt[:100]}' | href='{href}' | title='{title}' | class='{cls[:100]}' | onclick='{onclick[:100]}' | data-id='{data_id}' | data-url='{data_url}'"
                )
            except Exception as e:
                pass
                
        out_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\page_links.txt")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write("\n".join(output_lines))
        print(f"Saved {len(output_lines)} elements to {out_path}")
        
        await browser.close()

if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
