import asyncio
import os
import json
from playwright.async_api import async_playwright

async def run():
    print("Starting Playwright script...")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        
        artifact_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d"
        os.makedirs(artifact_dir, exist_ok=True)
        
        print("Navigating to login page...")
        await page.goto("https://www.cfsmartems.com/", wait_until="networkidle")

        print("Filling credentials...")
        await page.fill("input[id='Email']", "appadmin@yopmail.com")
        await page.fill("input[id='Password']", "Admin@123")
        
        submit_btn = await page.query_selector("button:has-text('Sign In')") or \
                     await page.query_selector("button[type='submit']")
        
        if submit_btn:
            await submit_btn.click()
        else:
            await page.keyboard.press("Enter")

        print("Waiting for login redirect...")
        await page.wait_for_timeout(4000)
        print("Redirected to:", page.url)

        # Now navigate to Dashboard/Index specifically!
        print("Navigating to https://www.cfsmartems.com/Dashboard/Index...")
        await page.goto("https://www.cfsmartems.com/Dashboard/Index", wait_until="networkidle")
        await page.wait_for_timeout(4000) # Wait 4 seconds for widget loading
        print("Current URL:", page.url)

        # Save screenshot
        dashboard_screenshot_path = os.path.join(artifact_dir, "real_ems_dashboard_index.png")
        await page.screenshot(path=dashboard_screenshot_path, full_page=True)
        print(f"Dashboard Index screenshot saved to: {dashboard_screenshot_path}")

        # Dump inner text
        text = await page.evaluate("() => document.body.innerText")
        print("Dashboard page text snippet:", text[:1500])

        # Extract elements and their styles
        try:
            design_data = await page.evaluate("""() => {
                const widgets = Array.from(document.querySelectorAll('.card, [class*=\"card\"], .widget, [class*=\"widget\"]'))
                    .map(el => {
                        const titleEl = el.querySelector('.card-title, h1, h2, h3, h4, [class*=\"title\"]');
                        const valueEl = el.querySelector('.card-body, [class*=\"value\"], [class*=\"amount\"], h2');
                        return {
                            classes: el.className,
                            title: titleEl ? titleEl.innerText.trim() : null,
                            value: valueEl ? valueEl.innerText.trim().slice(0, 100) : null
                        };
                    });
                
                const charts = Array.from(document.querySelectorAll('svg, canvas, [id*=\"chart\"], [class*=\"chart\"]'))
                    .map(el => ({
                        tagName: el.tagName,
                        id: el.id,
                        className: el.className,
                        width: el.getAttribute ? el.getAttribute('width') : null,
                        height: el.getAttribute ? el.getAttribute('height') : null
                    }));

                return { widgets, charts };
            }""")
            
            with open(os.path.join(artifact_dir, "ems_dashboard_index_details.json"), "w") as f:
                json.dump(design_data, f, indent=2)
            print("Dashboard index details saved.")
        except Exception as e:
            print(f"Detail extraction error: {e}")

        await browser.close()
        print("Browser closed.")

if __name__ == "__main__":
    asyncio.run(run())
