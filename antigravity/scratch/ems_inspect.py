"""Save full page HTML after login for structure inspection"""
import asyncio
from playwright.async_api import async_playwright
from pathlib import Path

OUTPUT = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output")
OUTPUT.mkdir(exist_ok=True)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False, args=["--start-maximized"])
        page = await browser.new_page(viewport={"width": 1600, "height": 900})

        print("Navigating to login...")
        await page.goto("https://www.cfsmartems.com/", timeout=30000)
        await page.wait_for_timeout(3000)
        print(f"URL: {page.url}")

        # Try all input types
        inputs = await page.query_selector_all("input")
        print(f"Found {len(inputs)} inputs")
        for inp in inputs:
            name = await inp.get_attribute("name")
            itype = await inp.get_attribute("type")
            print(f"  input: name={name}, type={itype}")

        email = await page.query_selector("input[name='Email'], input[name='email'], input[type='email'], input[type='text']")
        pwd = await page.query_selector("input[type='password']")
        if email:
            await email.fill("appadmin@yopmail.com")
            print("Filled email")
        if pwd:
            await pwd.fill("Admin@123")
            print("Filled password")

        submit = await page.query_selector("button[type='submit'], input[type='submit'], .btn-primary, button")
        if submit:
            txt = await submit.inner_text()
            print(f"Clicking submit: {txt}")
            await submit.click()
        elif pwd:
            await pwd.press("Enter")
            print("Pressed Enter")

        # Wait generously
        await page.wait_for_timeout(5000)
        print(f"After login URL: {page.url}")

        # Wait for any main content to appear
        try:
            await page.wait_for_selector("body", timeout=10000)
        except:
            pass
        await page.wait_for_timeout(2000)

        # Save HTML
        html = await page.content()
        html_path = OUTPUT / "page_after_login.html"
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Saved HTML: {html_path} ({len(html)} chars)")

        # Take screenshot
        await page.screenshot(path=str(OUTPUT / "after_login.png"), full_page=True)
        print("Screenshot saved")

        # Try to get all links now
        links = await page.query_selector_all("a")
        print(f"\nFound {len(links)} links")
        for lnk in links[:50]:
            try:
                txt = await lnk.inner_text()
                href = await lnk.get_attribute("href") or ""
                if txt.strip():
                    print(f"  [{txt.strip()[:50]}] -> {href[:80]}")
            except:
                pass

        # Try to get sidebar
        selectors_to_try = [
            "ul.nav", ".nav-sidebar", ".sidebar-menu", "#sidebar-menu",
            ".main-sidebar", ".aside-menu", ".left-sidebar", ".sidebar",
            "aside", "nav", ".navigation", ".menu",
            "[class*='sidebar']", "[class*='menu']", "[id*='sidebar']", "[id*='menu']",
        ]
        for sel in selectors_to_try:
            el = await page.query_selector(sel)
            if el:
                inner = await el.inner_html()
                print(f"\n[FOUND] {sel} — innerHTML length: {len(inner)}")
                print(inner[:1000])
                break

        print("\nBrowser stays open 20s...")
        await page.wait_for_timeout(20000)
        await browser.close()

asyncio.run(main())
