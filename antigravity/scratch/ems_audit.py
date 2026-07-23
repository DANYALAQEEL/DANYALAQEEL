import sys
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

log_dir = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output")
log_dir.mkdir(exist_ok=True)
sys.stdout = Logger(log_dir / "audit_progress.log")
sys.stderr = Logger(log_dir / "audit_progress.log")
import asyncio
import json
import os
import re
from playwright.async_api import async_playwright, Page, BrowserContext
BASE_URL = "https://www.cfsmartems.com"
USERNAME = "appadmin@yopmail.com"
PASSWORD = "Admin@123"

AUDIT_DIR = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\ems_audit_output")
SCREENSHOTS_DIR = AUDIT_DIR / "screenshots"
AUDIT_DIR.mkdir(exist_ok=True)
SCREENSHOTS_DIR.mkdir(exist_ok=True)

report = []
# Initialize screenshot index dynamically to avoid overwriting existing screenshots
try:
    existing_files = os.listdir(str(SCREENSHOTS_DIR))
    indices = []
    for f in existing_files:
        match = re.match(r"^(\d+)_", f)
        if match:
            indices.append(int(match.group(1)))
    screenshot_index = [max(indices) + 1] if indices else [0]
except Exception as e:
    screenshot_index = [100] # Fallback to a high index if anything fails


def slug(text):
    return re.sub(r'[^a-z0-9_]', '_', text.lower())[:60]

async def screenshot(page: Page, name: str):
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
    return str(path)

async def get_text_safe(element):
    try:
        return (await element.inner_text()).strip()
    except:
        return ""

async def get_attr_safe(element, attr):
    try:
        return await element.get_attribute(attr) or ""
    except:
        return ""

async def extract_page_info(page: Page, section_name: str, dashboard: str):
    """Extract comprehensive info from current page"""
    info = {
        "dashboard": dashboard,
        "section": section_name,
        "url": page.url,
        "screenshot": "",
        "tabs": [],
        "elements": [],
        "table_columns": [],
        "row_actions": [],
        "forms": [],
        "filters": [],
        "modals": [],
        "pagination": "",
        "notes": [],
        "sidebar_items": []
    }

    # Screenshot
    info["screenshot"] = await screenshot(page, f"{dashboard}_{section_name}")
    await page.wait_for_timeout(800)

    # Page title
    try:
        title = await page.title()
        info["page_title"] = title
    except:
        info["page_title"] = ""

    # Extract tabs (Bootstrap tabs, nav-tabs)
    try:
        tab_els = await page.query_selector_all(".nav-tabs .nav-link, .nav-pills .nav-link, [role='tab']")
        for t in tab_els:
            txt = await get_text_safe(t)
            if txt:
                info["tabs"].append(txt)
    except:
        pass

    # Extract all buttons
    try:
        btns = await page.query_selector_all("button, a.btn, input[type='button'], input[type='submit']")
        for btn in btns:
            txt = await get_text_safe(btn)
            cls = await get_attr_safe(btn, "class")
            href = await get_attr_safe(btn, "href")
            if txt and len(txt) < 80:
                info["elements"].append({"type": "button", "text": txt, "class": cls, "href": href})
    except:
        pass

    # Extract table columns
    try:
        headers = await page.query_selector_all("table thead th, .datatable thead th, [class*='table'] thead th")
        for h in headers:
            txt = await get_text_safe(h)
            if txt:
                info["table_columns"].append(txt)
    except:
        pass

    # Also try DataTables style
    try:
        if not info["table_columns"]:
            headers = await page.query_selector_all("th")
            for h in headers:
                txt = await get_text_safe(h)
                if txt:
                    info["table_columns"].append(txt)
    except:
        pass

    # Extract form fields
    try:
        inputs = await page.query_selector_all("input:not([type='hidden']):not([type='submit']):not([type='button']), select, textarea")
        for inp in inputs:
            name = await get_attr_safe(inp, "name")
            type_ = await get_attr_safe(inp, "type") or "text"
            placeholder = await get_attr_safe(inp, "placeholder")
            label_text = ""
            try:
                inp_id = await get_attr_safe(inp, "id")
                if inp_id:
                    label = await page.query_selector(f"label[for='{inp_id}']")
                    if label:
                        label_text = await get_text_safe(label)
            except:
                pass
            tag = await inp.evaluate("el => el.tagName.toLowerCase()")
            if tag == "select":
                opts = await inp.query_selector_all("option")
                opt_texts = [await get_text_safe(o) for o in opts]
                info["forms"].append({
                    "name": name or label_text,
                    "type": "select",
                    "options": opt_texts[:20]
                })
            else:
                info["forms"].append({
                    "name": name or label_text or placeholder,
                    "type": type_,
                    "placeholder": placeholder
                })
    except:
        pass

    # Extract filters (search boxes, dropdowns in filter areas)
    try:
        filter_area = await page.query_selector_all(".filter-area select, .filters select, [class*='filter'] select")
        for fa in filter_area:
            opts = await fa.query_selector_all("option")
            opt_texts = [await get_text_safe(o) for o in opts]
            info["filters"].append(opt_texts)
    except:
        pass

    # Extract pagination info
    try:
        pag = await page.query_selector(".pagination, .dataTables_info, .paginate_button")
        if pag:
            info["pagination"] = await get_text_safe(pag)
    except:
        pass

    # Extract summary cards / stat boxes
    try:
        cards = await page.query_selector_all(".card .card-body, .widget, .stat-box, [class*='stat'], [class*='widget']")
        for card in cards[:20]:
            txt = await get_text_safe(card)
            if txt and len(txt) < 200:
                info["elements"].append({"type": "card/widget", "text": txt})
    except:
        pass

    # Extract headings
    try:
        headings = await page.query_selector_all("h1, h2, h3, h4, h5, .page-title, .card-title")
        for h in headings:
            txt = await get_text_safe(h)
            if txt and len(txt) < 150:
                info["elements"].append({"type": "heading", "text": txt})
    except:
        pass

    # Extract badges / status labels
    try:
        badges = await page.query_selector_all(".badge, .label, [class*='status']")
        for b in badges[:30]:
            txt = await get_text_safe(b)
            cls = await get_attr_safe(b, "class")
            if txt:
                info["elements"].append({"type": "badge/status", "text": txt, "class": cls})
    except:
        pass

    # Deduplicate elements
    seen = set()
    unique_elements = []
    for el in info["elements"]:
        key = el.get("text", "")
        if key and key not in seen:
            seen.add(key)
            unique_elements.append(el)
    info["elements"] = unique_elements

    return info

async def extract_sidebar(page: Page):
    """Extract all sidebar navigation items"""
    sidebar_items = []
    try:
        try:
            await page.wait_for_selector(".menu-item, .nav-item, .kt-menu__item, aside, .sidebar", timeout=30000)
        except:
            pass
        # Try different sidebar selectors
        selectors = [
            ".sidebar .nav-item, .sidebar li",
            "#sidebar .nav-item",
            ".side-menu li",
            "[class*='sidebar'] li",
            ".menu-item, .nav-item",
            "aside li",
            ".kt-menu__item"
        ]
        for sel in selectors:
            items = await page.query_selector_all(sel)
            if items:
                for item in items:
                    txt = await get_text_safe(item)
                    href = ""
                    link = await item.query_selector("a")
                    if link:
                        href = await get_attr_safe(link, "href")
                        txt = await get_text_safe(link)
                    if txt and len(txt) < 80 and txt not in sidebar_items:
                        sidebar_items.append({"text": txt, "href": href})
                if sidebar_items:
                    break
    except Exception as e:
        sidebar_items = [{"error": str(e)}]
    return sidebar_items

async def login(page: Page):
    """Login to the platform"""
    print("\n[LOGIN] Navigating to login page...")
    await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
    await page.wait_for_timeout(2000)
    print(f"  URL after load: {page.url}")
    await screenshot(page, "login_page")

    # Fill credentials
    try:
        # Try email field
        email_field = await page.query_selector("input[type='email'], input[name='Email'], input[name='email'], input[name='Username'], input[name='username']")
        if email_field:
            await email_field.fill(USERNAME)
            print("  Filled email/username")

        pwd_field = await page.query_selector("input[type='password']")
        if pwd_field:
            await pwd_field.fill(PASSWORD)
            print("  Filled password")

        # Click submit
        submit = await page.query_selector("button[type='submit'], input[type='submit'], .btn-primary, button:has-text('Login'), button:has-text('Sign In')")
        if submit:
            await submit.click()
            print("  Clicked submit")
        else:
            await pwd_field.press("Enter")
            print("  Pressed Enter")

        await page.wait_for_load_state("domcontentloaded", timeout=30000)
        await page.wait_for_timeout(2000)
        print(f"  URL after login: {page.url}")
        await screenshot(page, "after_login")
        return True
    except Exception as e:
        print(f"  [LOGIN ERROR] {e}")
        await screenshot(page, "login_error")
        return False

async def ensure_logged_in(page: Page):
    """Ensure we are logged in, and if not, login again"""
    # Check URL first
    if "login" in page.url.lower() or page.url == f"{BASE_URL}/" or page.url == f"{BASE_URL}":
        print("  [SESSION LOST] Detected login page URL. Re-authenticating...")
        try:
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
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
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
            success = await login(page)
            return success
    except Exception as e:
        # If it times out, the page might be loading or ok
        pass
    return True

async def restore_super_admin(page: Page):
    """Restore the Super Admin session by logging out / clearing session and logging back in"""
    print("\n[RESTORE] Restoring Super Admin session...")
    try:
        # Clear cookies
        await page.context.clear_cookies()
    except Exception as e:
        print(f"  Error clearing cookies: {e}")
        
    try:
        # Clear local/session storage safely within JS try/catch to avoid SecurityError on some frames/documents
        await page.evaluate("""() => {
            try { localStorage.clear(); } catch(e) {}
            try { sessionStorage.clear(); } catch(e) {}
        }""")
    except Exception as e:
        print(f"  Error clearing storage: {e}")
    
    # Go to home and login with retries for network drops
    for attempt in range(3):
        try:
            await page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=120000)
            break
        except Exception as e:
            print(f"  Attempt {attempt+1} to load login page failed: {e}")
            if attempt < 2:
                await asyncio.sleep(5)
            else:
                raise e
    await login(page)



async def wait_for_sidebar(page: Page):
    """Wait for sidebar links to dynamically render by polling"""
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

async def audit_super_admin(page: Page):
    """Full Super Admin dashboard audit"""
    print("\n" + "="*60)
    print("AUDITING: SUPER ADMIN DASHBOARD")
    print("="*60)

    sections = []

    # --- Dashboard Home ---
    print("\n[1] Dashboard Home")
    await wait_for_sidebar(page)
    info = await extract_page_info(page, "Dashboard Home", "Super Admin")
    info["sidebar_items"] = await extract_sidebar(page)
    sections.append(info)

    # Get all sidebar links
    sidebar_links = []
    try:
        sb_items = await extract_sidebar(page)
        for item in sb_items:
            href = item.get("href", "")
            txt = item.get("text", "")
            if href and txt and not href.startswith("javascript:") and href != "#":
                full_href = href if href.startswith("http") else f"{BASE_URL}{href}"
                if full_href not in [l["href"] for l in sidebar_links]:
                    sidebar_links.append({"text": txt.strip(), "href": full_href})
    except Exception as e:
        print(f"  Error getting sidebar links: {e}")

    print(f"\n  Found {len(sidebar_links)} sidebar links")
    for l in sidebar_links:
        print(f"    - {l['text']}: {l['href']}")

    # --- Visit each sidebar link ---
    visited = set([page.url])
    for link in sidebar_links:
        href = link["href"]
        name = link["text"]
        
        # Skip logout links to prevent session termination
        if any(x in href.lower() for x in ["logout", "signout", "log-out", "sign-out"]):
            print(f"  [Skipping logout link] {name} -> {href}")
            continue
            
        if href in visited:
            continue
        if not href or href == "#" or "javascript:" in href:
            continue
        visited.add(href)

        try:
            # Ensure we are logged in before visiting page
            await ensure_logged_in(page)

            print(f"\n[Visiting] {name} -> {href}")
            try:
                await page.goto(href, wait_until="domcontentloaded", timeout=60000)
                await page.wait_for_timeout(1500)
                info = await extract_page_info(page, name, "Super Admin")
                sections.append(info)
            except Exception as e:
                print(f"  Error visiting {href}: {e}")
                sections.append({
                    "dashboard": "Super Admin",
                    "section": name,
                    "url": href,
                    "error": f"Page load failed: {e}"
                })
                continue

            # Check for sub-tabs and click each
            tabs = await page.query_selector_all(".nav-tabs .nav-link:not(.active), .nav-pills .nav-link:not(.active)")
            for tab in tabs:
                tab_name = await get_text_safe(tab)
                if tab_name:
                    print(f"  [Tab] {tab_name}")
                    try:
                        await tab.click()
                        await page.wait_for_timeout(1000)
                        tab_info = await extract_page_info(page, f"{name} > {tab_name}", "Super Admin")
                        sections.append(tab_info)
                    except Exception as e:
                        print(f"    Tab click error: {e}")

            # Check for "Add/Create/New" button and document the form
            add_btns = await page.query_selector_all(
                "button:has-text('Add'), button:has-text('Create'), button:has-text('New'), "
                "a.btn:has-text('Add'), a.btn:has-text('Create'), a.btn:has-text('New'), "
                "button:has-text('+ Add'), button:has-text('+ Create')"
            )
            for btn in add_btns[:1]:  # Just first button to avoid duplicates
                btn_txt = await get_text_safe(btn)
                print(f"  [Add Button] {btn_txt}")
                try:
                    await btn.click()
                    await page.wait_for_timeout(1500)
                    form_info = await extract_page_info(page, f"{name} > {btn_txt} Form", "Super Admin")
                    form_info["notes"].append(f"Opened via button: {btn_txt}")
                    sections.append(form_info)
                    # Try to close modal if open
                    close = await page.query_selector(".modal .close, .modal button:has-text('Close'), .modal button:has-text('Cancel'), [data-dismiss='modal']")
                    if close:
                        await close.click()
                        await page.wait_for_timeout(500)
                    else:
                        # Go back
                        await page.goto(href, wait_until="domcontentloaded", timeout=30000)
                        await page.wait_for_timeout(1000)
                except Exception as e:
                    print(f"    Add button error: {e}")
                    try:
                        await page.goto(href, wait_until="domcontentloaded", timeout=30000)
                    except:
                        pass

        except Exception as e:
            print(f"  Error visiting {href}: {e}")
            sections.append({
                "dashboard": "Super Admin",
                "section": name,
                "url": href,
                "error": str(e)
            })

    return sections

async def find_org_login(page: Page):
    """Find and access Organization dashboard"""
    print("\n" + "="*60)
    print("SEARCHING: Organization Dashboard Access")
    print("="*60)

    org_sections = []

    # Navigate to organization list
    org_url = f"{BASE_URL}/Organization/Index"
    try:
        await page.goto(org_url, wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(2000)
        await page.wait_for_selector("table tbody tr td, td", timeout=30000)
        await page.wait_for_timeout(1000)
    except Exception as e:
        print(f"Error loading/waiting for Organization page: {e}")

    # Extract Organization List page info
    info = await extract_page_info(page, "Organization List", "Super Admin -> Organization")
    info["notes"].append("Direct impersonation of Organization Admins is restricted by backend role security policy (cannot impersonate another Admin).")
    org_sections.append(info)

    return org_sections


async def find_user_login(page: Page):
    """Find and access User/Customer dashboard"""
    print("\n" + "="*60)
    print("SEARCHING: User/Customer Dashboard Access (Login as Customer User)")
    print("="*60)

    user_sections = []

    # Navigate to users list
    user_url = f"{BASE_URL}/User/Index"
    try:
        await page.goto(user_url, wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(2000)
    except Exception as e:
        print(f"Error loading User index page: {e}")
        return user_sections

    # Select "All" from length select to list everyone
    try:
        length_select = await page.query_selector("select[name*='length']")
        if length_select:
            await length_select.select_option("All")
            await page.wait_for_timeout(5000)
            print("Selected 'All' records length")
    except Exception as e:
        print(f"Error selecting All records length: {e}")

    rows = await page.query_selector_all("table tbody tr")
    print(f"Total rows found: {len(rows)}")

    # Store users in a list of dicts first to avoid ElementHandle lifecycle issues
    user_list = []
    for idx, row in enumerate(rows):
        cells = await row.query_selector_all("td")
        if len(cells) >= 8:
            org = (await cells[0].inner_text()).strip()
            name = (await cells[1].inner_text()).strip()
            email = (await cells[2].inner_text()).strip()
            role = (await cells[4].inner_text()).strip()
            status = (await cells[5].inner_text()).strip()
            login_btn = await cells[7].query_selector("a.btnLoginAsUser, a[title*='Login As User']")
            has_btn = login_btn is not None

            user_list.append({
                "index": idx,
                "name": name,
                "org": org,
                "email": email,
                "role": role,
                "status": status,
                "has_btn": has_btn
            })

    # Find the active Customer
    target_customer = None
    for u in user_list:
        if u["role"].lower() == "customer" and u["status"].lower() == "active" and u["has_btn"]:
            target_customer = u
            break

    if not target_customer:
        print("No active Customer user found!")
        return user_sections

    print(f"Found active Customer: Name='{target_customer['name']}', Org='{target_customer['org']}', Email='{target_customer['email']}'")

    # Relocate row and click button
    rows = await page.query_selector_all("table tbody tr")
    row_el = rows[target_customer["index"]]
    btn_el = await row_el.query_selector("a.btnLoginAsUser, a[title*='Login As User']")
    if btn_el:
        print("Clicking impersonate button for Customer (same tab)...")
        try:
            await btn_el.click()
            await page.wait_for_timeout(8000) # Wait generous 8 seconds for dashboard load
            print(f"Impersonation Successful. Current URL: {page.url}")
        except Exception as e:
            print(f"Error clicking impersonate button: {e}")
            return user_sections
    else:
        print("Impersonation button not found during relocation!")
        return user_sections

    # Scrape User/Customer Dashboard
    await wait_for_sidebar(page)
    user_info = await extract_page_info(page, "Customer Dashboard Home", "User")
    user_info["sidebar_items"] = await extract_sidebar(page)
    user_sections.append(user_info)

    # Audit all user sidebar links
    user_sidebar_links = []
    try:
        sb_items = await extract_sidebar(page)
        for item in sb_items:
            href = item.get("href", "")
            txt = item.get("text", "")
            if href and txt and not href.startswith("javascript:") and href != "#":
                full_href = href if href.startswith("http") else f"{BASE_URL}{href}"
                if full_href not in [l["href"] for l in user_sidebar_links]:
                    user_sidebar_links.append({"text": txt.strip(), "href": full_href})
    except Exception as e:
        print(f"  Error getting user sidebar links: {e}")

    visited_user = set([page.url])
    for link in user_sidebar_links:
        href = link["href"]
        name = link["text"]
        
        # Skip actions that leave the session
        if any(x in href.lower() for x in ["logout", "signout", "log-out", "sign-out", "backtoadmin"]):
            print(f"    [User] Skipping exit/logout link: {name} -> {href}")
            continue
        if href in visited_user:
            continue
        visited_user.add(href)
        print(f"\n  [User] Visiting: {name} -> {href}")
        try:
            await page.goto(href, wait_until="domcontentloaded", timeout=60000)
            await page.wait_for_timeout(1500)
            section_info = await extract_page_info(page, name, "User")
            user_sections.append(section_info)
        except Exception as e:
            print(f"    Error: {e}")
            user_sections.append({"dashboard": "User", "section": name, "url": href, "error": str(e)})

    # Restore Super Admin session by navigating to BackToAdmin
    print("\nRestoring Super Admin session via BackToAdmin...")
    try:
        await page.goto(f"{BASE_URL}/Account/BackToAdmin", wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)
        print(f"Restored session. Current URL: {page.url}")
    except Exception as e:
        print(f"Error calling BackToAdmin: {e}")

    return user_sections


def generate_report(all_sections):
    """Generate a markdown report from all sections"""
    lines = []
    lines.append("# CF Smart EMS — Complete Platform Audit Report")
    lines.append(f"\n**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"**Platform:** {BASE_URL}")
    lines.append(f"**Total Sections Documented:** {len(all_sections)}\n")
    lines.append("---\n")

    current_dashboard = None
    for sec in all_sections:
        db = sec.get("dashboard", "Unknown")
        if db != current_dashboard:
            lines.append(f"\n# DASHBOARD: {db}\n")
            lines.append("---")
            current_dashboard = db

        lines.append(f"\n## MODULE: {sec.get('section', 'Unknown')}")
        if sec.get("error"):
            lines.append(f"\n> ⚠️ ERROR: {sec['error']}")
            continue

        lines.append(f"\n**URL:** `{sec.get('url', '')}`")
        if sec.get("page_title"):
            lines.append(f"\n**Page Title:** {sec['page_title']}")
        if sec.get("screenshot"):
            lines.append(f"\n**Screenshot:** `{sec['screenshot']}`")

        # Sidebar items (only for home screens)
        if sec.get("sidebar_items"):
            lines.append(f"\n### Sidebar Navigation Items")
            for item in sec["sidebar_items"]:
                if isinstance(item, dict):
                    txt = item.get("text", "")
                    href = item.get("href", "")
                    if txt:
                         lines.append(f"- **{txt}** -> `{href}`")

        # Tabs
        if sec.get("tabs"):
            lines.append(f"\n### TABS")
            for t in sec["tabs"]:
                lines.append(f"- {t}")

        # Elements
        if sec.get("elements"):
            lines.append(f"\n### ELEMENTS")
            for el in sec["elements"]:
                t = el.get("type", "")
                txt = el.get("text", "")
                lines.append(f"- **[{t}]** {txt}")

        # Table Columns
        if sec.get("table_columns"):
            lines.append(f"\n### TABLE COLUMNS")
            for col in sec["table_columns"]:
                lines.append(f"- {col}")

        # Forms
        if sec.get("forms"):
            lines.append(f"\n### FORMS / INPUT FIELDS")
            for f in sec["forms"]:
                name = f.get("name", "unnamed")
                ftype = f.get("type", "text")
                placeholder = f.get("placeholder", "")
                options = f.get("options", [])
                if options:
                    lines.append(f"- **{name}** [{ftype}] — Options: {', '.join(options[:10])}")
                else:
                    lines.append(f"- **{name}** [{ftype}]{f' — placeholder: {placeholder}' if placeholder else ''}")

        # Filters
        if sec.get("filters"):
            lines.append(f"\n### FILTERS")
            for fl in sec["filters"]:
                if isinstance(fl, list):
                    lines.append(f"- {', '.join(fl[:10])}")

        # Pagination
        if sec.get("pagination"):
            lines.append(f"\n### PAGINATION")
            lines.append(f"- {sec['pagination']}")

        # Notes
        if sec.get("notes"):
            lines.append(f"\n### NOTES")
            for n in sec["notes"]:
                lines.append(f"- {n}")

        lines.append("\n---")

    return "\n".join(lines)

async def main():
    print("="*60)
    print("CF SMART EMS — FULL PLATFORM AUDIT")
    print("="*60)
    print(f"Output directory: {AUDIT_DIR}")
    print(f"Screenshots: {SCREENSHOTS_DIR}")

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=False,
            args=["--start-maximized"]
        )
        context = await browser.new_context(
            viewport={"width": 1600, "height": 900},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
        )

        # Intercept and route requests to use local cached javascript bundles
        async def handle_route(route):
            url = route.request.url
            if "plugins.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\plugins.bundle.js")
                if local_path.exists():
                    await route.fulfill(
                        status=200,
                        content_type="application/javascript",
                        body=local_path.read_bytes()
                    )
                    print("  [ROUTED LOCAL] plugins.bundle.js served from local cache")
                    return
            elif "scripts.bundle.js" in url:
                local_path = Path(r"C:\Users\Administrator\.gemini\antigravity\scratch\scripts.bundle.js")
                if local_path.exists():
                    await route.fulfill(
                        status=200,
                        content_type="application/javascript",
                        body=local_path.read_bytes()
                    )
                    print("  [ROUTED LOCAL] scripts.bundle.js served from local cache")
                    return
            
            # Block web fonts to prevent screenshot hangs and speed up loading
            if any(x in url.lower() for x in [".woff", ".woff2", ".ttf", "fonts.googleapis", "fonts.gstatic"]):
                await route.abort()
                return
                
            # Block analytics and other tracking scripts
            if any(x in url.lower() for x in ["google-analytics", "doubleclick"]):
                await route.abort()
                return
                
            await route.continue_()

        await context.route("**/*", handle_route)
        page = await context.new_page()

        all_sections = []

        # Step 1: Login
        logged_in = await login(page)
        if not logged_in:
            print("[FATAL] Login failed! Check credentials or site availability.")
            return

        # Step 2: Super Admin Audit
        raw_data_path = AUDIT_DIR / "raw_data.json"
        super_admin_sections = []
        if raw_data_path.exists():
            try:
                with open(raw_data_path, "r", encoding="utf-8") as f:
                    existing_data = json.load(f)
                # Keep only Super Admin sections from the existing data
                super_admin_sections = [x for x in existing_data if x.get("dashboard") == "Super Admin"]
                if len(super_admin_sections) >= 30:
                    print(f"\n[Super Admin] Loaded {len(super_admin_sections)} sections from existing raw_data.json, skipping audit.")
                else:
                    super_admin_sections = []
            except Exception as e:
                print(f"Error loading existing raw_data.json: {e}")
                super_admin_sections = []

        if not super_admin_sections:
            super_admin_sections = await audit_super_admin(page)

        all_sections.extend(super_admin_sections)
        print(f"\n[Super Admin] Documented {len(super_admin_sections)} sections")

        # Save intermediate result
        with open(AUDIT_DIR / "raw_data.json", "w", encoding="utf-8") as f:
            json.dump(all_sections, f, indent=2, ensure_ascii=False)
        print(f"  Saved raw data")

        # Step 3: Organization Dashboard
        # Restore super admin first to ensure clean state
        await restore_super_admin(page)
        try:
            await page.goto(f"{BASE_URL}/Device/Index", wait_until="domcontentloaded", timeout=30000)
            await page.wait_for_timeout(1500)
        except:
            pass
        org_sections = await find_org_login(page)
        all_sections.extend(org_sections)
        print(f"\n[Organization] Documented {len(org_sections)} sections")

        # Save intermediate result
        with open(AUDIT_DIR / "raw_data.json", "w", encoding="utf-8") as f:
            json.dump(all_sections, f, indent=2, ensure_ascii=False)

        # Step 4: User Dashboard
        # Restore super admin first to ensure clean state
        await restore_super_admin(page)
        try:
            await page.goto(f"{BASE_URL}/Device/Index", wait_until="domcontentloaded", timeout=30000)
            await page.wait_for_timeout(1500)
        except:
            pass
        user_sections = await find_user_login(page)
        all_sections.extend(user_sections)
        print(f"\n[User] Documented {len(user_sections)} sections")

        # Final save
        with open(AUDIT_DIR / "raw_data.json", "w", encoding="utf-8") as f:
            json.dump(all_sections, f, indent=2, ensure_ascii=False)

        # Generate report
        print("\n[REPORT] Generating markdown report...")
        report_md = generate_report(all_sections)
        report_path = AUDIT_DIR / "FULL_AUDIT_REPORT.md"
        with open(report_path, "w", encoding="utf-8") as f:
            f.write(report_md)

        print(f"\n{'='*60}")
        print(f"AUDIT COMPLETE!")
        print(f"  Total sections: {len(all_sections)}")
        print(f"  Screenshots: {screenshot_index[0]} captured")
        print(f"  Report: {report_path}")
        print(f"  Raw data: {AUDIT_DIR / 'raw_data.json'}")
        print(f"{'='*60}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
