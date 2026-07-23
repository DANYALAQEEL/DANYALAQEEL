import re
from pathlib import Path

file_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit.py")
content = file_path.read_text(encoding="utf-8")

# 1. Inject Logger at the top of the file
logger_code = """import sys
from pathlib import Path
from datetime import datetime

class Logger(object):
    def __init__(self, filename):
        self.terminal = sys.stdout
        self.filename = filename

    def write(self, message):
        self.terminal.write(message)
        try:
            with open(self.filename, "a", encoding="utf-8") as f:
                f.write(message)
        except:
            pass

    def flush(self):
        self.terminal.flush()

# Reconfigure stdout/stderr for Unicode encoding support on Windows terminals
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

log_dir = Path(r"C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\ems_audit_output")
log_dir.mkdir(exist_ok=True)
sys.stdout = Logger(log_dir / "audit_progress.log")
sys.stderr = Logger(log_dir / "audit_progress.log")
"""

# Replace the imports and sys.stdout configuration
content = re.sub(
    r"import asyncio[\s\S]+?except AttributeError:\s+pass\s+",
    lambda m: logger_code + "\nimport asyncio\n",
    content
)

# 2. Update ensure_logged_in
ensure_logged_in_code = """async def ensure_logged_in(page: Page):
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

content = re.sub(
    r"async def ensure_logged_in[\s\S]+?return True",
    lambda m: ensure_logged_in_code,
    content
)

# 3. Optimize timeouts in goto and wait calls
# Change timeout=120000, timeout=60000, timeout=40000 to timeout=30000
content = content.replace("timeout=120000", "timeout=30000")
content = content.replace("timeout=60000", "timeout=30000")
content = content.replace("timeout=40000", "timeout=30000")

# Write changes back
file_path.write_text(content, encoding="utf-8")
print("EMS Audit Script Patched successfully!")
