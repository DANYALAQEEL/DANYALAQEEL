import asyncio
import os
import json
from playwright.async_api import async_playwright

async def run():
    print("Starting Playwright script...")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        artifact_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\6ae2359a-fae5-48ec-9f81-37c83d9e938d"
        
        print("Logging in...")
        await page.goto("https://www.cfsmartems.com/", wait_until="networkidle")
        await page.fill("input[id='Email']", "appadmin@yopmail.com")
        await page.fill("input[id='Password']", "Admin@123")
        
        submit_btn = await page.query_selector("button:has-text('Sign In')") or \
                     await page.query_selector("button[type='submit']")
        await submit_btn.click()
        
        await page.wait_for_timeout(5000)
        print("Page URL:", page.url)

        # Extract styling details of key components
        styles = await page.evaluate("""() => {
            const getStyles = (selector) => {
                const el = document.querySelector(selector);
                if (!el) return null;
                const comp = getComputedStyle(el);
                return {
                    background: comp.background || comp.backgroundColor,
                    backgroundColor: comp.backgroundColor,
                    color: comp.color,
                    fontSize: comp.fontSize,
                    fontWeight: comp.fontWeight,
                    padding: comp.padding,
                    margin: comp.margin,
                    border: comp.border,
                    borderRadius: comp.borderRadius,
                    boxShadow: comp.boxShadow,
                    height: comp.height,
                    width: comp.width,
                    fontFamily: comp.fontFamily
                };
            };

            const data = {};
            data['body'] = getStyles('body');
            data['sidebar'] = getStyles('nav, .sidebar, [class*="sidebar"]');
            data['topbar'] = getStyles('header, .topbar, [class*="header"]');
            
            // Add Device button style (first button with Add)
            const addBtn = Array.from(document.querySelectorAll('button, a, .btn'))
                .find(el => el.innerText.includes('Add'));
            if (addBtn) {
                const comp = getComputedStyle(addBtn);
                data['addButton'] = {
                    text: addBtn.innerText,
                    background: comp.backgroundColor,
                    color: comp.color,
                    padding: comp.padding,
                    borderRadius: comp.borderRadius,
                    fontWeight: comp.fontWeight
                };
            }

            // Card container style
            data['card'] = getStyles('.card, [class*="card"]');
            
            // Offline status badge style
            const offlineBadge = Array.from(document.querySelectorAll('span, .badge, [class*="badge"]'))
                .find(el => el.innerText.includes('Offline'));
            if (offlineBadge) {
                const comp = getComputedStyle(offlineBadge);
                data['offlineBadge'] = {
                    text: offlineBadge.innerText,
                    background: comp.backgroundColor,
                    color: comp.color,
                    padding: comp.padding,
                    borderRadius: comp.borderRadius,
                    fontWeight: comp.fontWeight
                };
            }

            // Online status badge style
            const onlineBadge = Array.from(document.querySelectorAll('span, .badge, [class*="badge"]'))
                .find(el => el.innerText.includes('Online'));
            if (onlineBadge) {
                const comp = getComputedStyle(onlineBadge);
                data['onlineBadge'] = {
                    text: onlineBadge.innerText,
                    background: comp.backgroundColor,
                    color: comp.color,
                    padding: comp.padding,
                    borderRadius: comp.borderRadius,
                    fontWeight: comp.fontWeight
                };
            }

            // Nav link item styling
            const navLink = document.querySelector('.menu-link, a[class*="link"]');
            if (navLink) {
                const comp = getComputedStyle(navLink);
                data['navLink'] = {
                    color: comp.color,
                    fontSize: comp.fontSize,
                    fontWeight: comp.fontWeight
                };
            }

            // Table header styling
            data['th'] = getStyles('th');
            data['td'] = getStyles('td');

            return data;
        }""")

        with open(os.path.join(artifact_dir, "ems_component_styles.json"), "w") as f:
            json.dump(styles, f, indent=2)
        print("Component styles extracted and saved.")
        
        await browser.close()
        print("Browser closed.")

if __name__ == "__main__":
    asyncio.run(run())
