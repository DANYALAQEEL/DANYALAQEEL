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
        
        # Dump header elements (like topbar, profile menu)
        print("\n--- DUMPING HEADER/TOPBAR ELEMENTS ---")
        headers = await page.query_selector_all(".header a, header a, .kt-header a, .topbar a, .user-menu a, [class*='header'] a, [class*='top'] a")
        print(f"Found {len(headers)} links in header-like classes")
        for idx, lnk in enumerate(headers[:50]):
            try:
                txt = (await lnk.inner_text()).strip()
                href = await lnk.get_attribute("href") or ""
                cls = await lnk.get_attribute("class") or ""
                print(f"  [{idx}] text='{txt[:50]}', href='{href}', class='{cls[:50]}'")
            except Exception as e:
                pass

        # Let's inspect the entire page links
        print("\n--- SEARCHING ALL LINKS FOR ROLE/SWITCH/IMPERSONATION/LOGIN ---")
        all_links = await page.query_selector_all("a, button, div, span")
        found = 0
        for idx, el in enumerate(all_links):
            try:
                txt = (await el.inner_text()).strip()
                # Check for attributes
                href = await el.get_attribute("href") or ""
                title = await el.get_attribute("title") or ""
                cls = await el.get_attribute("class") or ""
                onclick = await el.get_attribute("onclick") or ""
                
                # Keywords
                kw = ["login", "switch", "impersonate", "role", "user", "admin", "organization"]
                match = False
                for k in kw:
                    if k in txt.lower() or k in href.lower() or k in title.lower() or k in cls.lower() or k in onclick.lower():
                        match = True
                        break
                if match and (txt or href or title or onclick):
                    # Filter out sidebar common links to keep it clean
                    if "menu-" in cls or "kt-menu" in cls:
                        continue
                    tag = await el.evaluate("e => e.tagName.toLowerCase()")
                    print(f"  [{found}] tag='{tag}', text='{txt[:50]}', href='{href}', title='{title}', class='{cls[:50]}', onclick='{onclick[:50]}'")
                    found += 1
                    if found >= 100:
                        break
            except:
                pass
                
        await browser.close()

if __name__ == "__main__":
    import sys
    # Reconfigure stdout for UTF-8
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass
    asyncio.run(main())
