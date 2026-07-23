from pathlib import Path

file_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit.py")
content = file_path.read_text(encoding="utf-8")

# 1. Update login timeout (line 282)
content = content.replace(
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=30000)',
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)'
)

# 2. Update ensure_logged_in timeouts
content = content.replace(
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=30000)',
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=90000)'
)

# Since we had multiple of these, let's verify if they all got replaced or do replacement of the specific block
# Let's write a robust replacement for ensure_logged_in
old_ensure = """async def ensure_logged_in(page: Page):
    \"\"\"Ensure we are logged in, and if not, login again\"\"\"
    # Check URL first
    if "login" in page.url.lower() or page.url == f"{BASE_URL}/" or page.url == f"{BASE_URL}":
        print("  [SESSION LOST] Detected login page URL. Re-authenticating...")
        try:
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=30000)
            success = await login(page)
            return success
        except Exception as e:
            print(f"  Re-authentication navigation failed: {e}")
            return False

    # Short timeout check for unauthorized body text
    try:
        body_text = await page.locator("body").inner_text(timeout=2000)
        is_unauthorized = "unauthorized" in body_text.lower() or "return to login" in body_text.lower()
        if is_unauthorized:
            print("  [SESSION LOST] Detected unauthorized page body. Re-authenticating...")
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=30000)
            success = await login(page)
            return success
    except Exception as e:
        # If it times out, the page might be loading or ok
        pass
    return True"""

new_ensure = """async def ensure_logged_in(page: Page):
    \"\"\"Ensure we are logged in, and if not, login again\"\"\"
    # Check URL first
    if "login" in page.url.lower() or page.url == f"{BASE_URL}/" or page.url == f"{BASE_URL}":
        print("  [SESSION LOST] Detected login page URL. Re-authenticating...")
        try:
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=90000)
            success = await login(page)
            return success
        except Exception as e:
            print(f"  Re-authentication navigation failed: {e}")
            return False

    # Short timeout check for unauthorized body text
    try:
        body_text = await page.locator("body").inner_text(timeout=2000)
        is_unauthorized = "unauthorized" in body_text.lower() or "return to login" in body_text.lower()
        if is_unauthorized:
            print("  [SESSION LOST] Detected unauthorized page body. Re-authenticating...")
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=90000)
            success = await login(page)
            return success
    except Exception as e:
        # If it times out, the page might be loading or ok
        pass
    return True"""

content = content.replace(old_ensure, new_ensure)

# 3. Update restore_super_admin timeout
content = content.replace(
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=30000)',
    'await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=90000)'
)

# 4. Update audit_super_admin goto timeout (line 415)
content = content.replace(
    'await page.goto(href, wait_until="domcontentloaded", timeout=30000)',
    'await page.goto(href, wait_until="domcontentloaded", timeout=60000)'
)

# 5. Update org and user loop timeouts
content = content.replace(
    'await active_page.goto(href, wait_until="domcontentloaded", timeout=30000)',
    'await active_page.goto(href, wait_until="domcontentloaded", timeout=60000)'
)

# Save changes
file_path.write_text(content, encoding="utf-8")
print("EMS Audit timeouts updated successfully!")
