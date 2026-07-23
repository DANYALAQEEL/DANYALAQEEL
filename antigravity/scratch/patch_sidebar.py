from pathlib import Path
import re

file_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit.py")
content = file_path.read_text(encoding="utf-8")

# 1. Update screenshot function to override fonts and prevent delays
old_screenshot = """async def screenshot(page: Page, name: str):
    idx = screenshot_index[0]
    screenshot_index[0] += 1
    path = SCREENSHOTS_DIR / f"{idx:04d}_{slug(name)}.png"
    try:
        await page.screenshot(path=str(path), full_page=True, timeout=5000)
    except Exception as e:
        print(f"  [screenshot error] {name}: {e}")
    return str(path)"""

new_screenshot = """async def screenshot(page: Page, name: str):
    idx = screenshot_index[0]
    screenshot_index[0] += 1
    path = SCREENSHOTS_DIR / f"{idx:04d}_{slug(name)}.png"
    try:
        try:
            # Inject style to override web fonts to prevent page.screenshot hangs
            await page.add_style_tag(content="* { font-family: Arial, Helvetica, sans-serif !important; }")
        except:
            pass
        await page.screenshot(path=str(path), full_page=True, timeout=8000)
    except Exception as e:
        print(f"  [screenshot error] {name}: {e}")
    return str(path)"""

content = content.replace(old_screenshot, new_screenshot)

# 2. Add wait_for_sidebar helper function
wait_for_sidebar_def = """
async def wait_for_sidebar(page: Page):
    \"\"\"Wait for sidebar links to dynamically render by polling\"\"\"
    print("  Waiting for sidebar links to render...")
    for i in range(120):
        try:
            # Check if we can find multiple links in common sidebar containers
            items = await page.query_selector_all(".sidebar a, aside a, .kt-menu__link, .menu-item a, .nav-item a")
            # We filter out empty text links
            valid_links = []
            for item in items:
                href = await item.get_attribute("href") or ""
                txt = (await item.inner_text()).strip()
                if href and txt and not href.startswith("javascript:") and href != "#":
                    valid_links.append(href)
            if len(set(valid_links)) > 5:
                print(f"  Sidebar rendered! Found {len(set(valid_links))} valid links after {i} seconds.")
                return True
        except:
            pass
        await page.wait_for_timeout(1000)
    print("  Sidebar render wait timed out!")
    return False
"""

# Insert wait_for_sidebar_def right before audit_super_admin
content = content.replace(
    "async def audit_super_admin(page: Page):",
    wait_for_sidebar_def + "\nasync def audit_super_admin(page: Page):"
)

# 3. Update audit_super_admin to use wait_for_sidebar
old_audit_start = """    # --- Dashboard Home ---
    print("\\n[1] Dashboard Home")
    try:
        # Wait for the sidebar links to actually render (which happens after JS loads)
        await page.wait_for_selector("aside a, .sidebar a, .kt-menu__link", timeout=30000)
        await page.wait_for_timeout(3000) # Give extra time for data widgets
    except Exception as e:
        print(f"  [Warning] Sidebar render wait timeout: {e}")
    info = await extract_page_info(page, "Dashboard Home", "Super Admin")"""

new_audit_start = """    # --- Dashboard Home ---
    print("\\n[1] Dashboard Home")
    await wait_for_sidebar(page)
    info = await extract_page_info(page, "Dashboard Home", "Super Admin")"""

content = content.replace(old_audit_start, new_audit_start)

# 4. Update find_org_login to use wait_for_sidebar
old_org_audit_start = """                await active_page.wait_for_timeout(2000)
                await screenshot(active_page, "org_dashboard_home")

                # Now audit organization dashboard
                org_info = await extract_page_info(active_page, "Organization Dashboard Home", "Organization")"""

new_org_audit_start = """                await active_page.wait_for_timeout(2000)
                await wait_for_sidebar(active_page)
                await screenshot(active_page, "org_dashboard_home")

                # Now audit organization dashboard
                org_info = await extract_page_info(active_page, "Organization Dashboard Home", "Organization")"""

content = content.replace(old_org_audit_start, new_org_audit_start)

# 5. Update find_user_login to use wait_for_sidebar
old_user_audit_start = """                await active_page.wait_for_timeout(2000)
                user_info = await extract_page_info(active_page, "User Dashboard Home", "User")"""

new_user_audit_start = """                await active_page.wait_for_timeout(2000)
                await wait_for_sidebar(active_page)
                user_info = await extract_page_info(active_page, "User Dashboard Home", "User")"""

content = content.replace(old_user_audit_start, new_user_audit_start)

# Save changes
file_path.write_text(content, encoding="utf-8")
print("Sidebar rendering and font-loading style injected successfully!")
