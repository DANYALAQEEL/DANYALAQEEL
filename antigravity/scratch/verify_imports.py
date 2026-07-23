import os
import re

folders = [
    r"C:\Users\Administrator\.gemini\antigravity\scratch\ems-dashboard-final\src\pages\admin",
    r"C:\Users\Administrator\.gemini\antigravity\scratch\ems-dashboard-final\src\pages\org",
    r"C:\Users\Administrator\.gemini\antigravity\scratch\ems-dashboard-final\src\pages\user"
]

allowed_packages = {"react", "react-dom", "react-router-dom", "recharts", "lucide-react"}

issues_fixed = []
issues_flagged = []

# Regex patterns
dummy_pattern = re.compile(r"from\s+['\"]([^'\"]*dummy[^'\"]*)['\"]")
component_pattern = re.compile(r"from\s+['\"]([^'\"]*(?:DataTable|Modal|StatCard|FormFields)[^'\"]*)['\"]")
import_pattern = re.compile(r"import\s+.*?\s+from\s+['\"]([^'\"]+)['\"]")
inline_style_pattern = re.compile(r"style=\{\{\s*[^}]*?\}\}")

for folder in folders:
    if not os.path.exists(folder):
        print(f"Folder not found: {folder}")
        continue
    for filename in os.listdir(folder):
        if not filename.endswith(".jsx"):
            continue
        filepath = os.path.join(folder, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        modified = False
        lines = content.splitlines()
        new_lines = []

        for line in lines:
            # Check Check 1: Dummy data imports
            dummy_match = dummy_pattern.search(line)
            if dummy_match:
                path = dummy_match.group(1)
                if path != "../../data/dummy" and path != "../../data/dummy.js":
                    # Fix it
                    new_line = line.replace(path, "../../data/dummy")
                    issues_fixed.append(f"[{filename}] Fixed dummy import path: '{path}' -> '../../data/dummy'")
                    line = new_line
                    modified = True

            # Check Check 2: Component imports
            comp_match = component_pattern.search(line)
            if comp_match:
                path = comp_match.group(1)
                # Determine what component it is and set the correct path
                expected_path = None
                if "DataTable" in path:
                    expected_path = "../../components/ui/DataTable"
                elif "Modal" in path:
                    expected_path = "../../components/ui/Modal"
                elif "StatCard" in path:
                    expected_path = "../../components/ui/StatCard"
                elif "FormFields" in path:
                    expected_path = "../../components/ui/FormFields"
                
                if expected_path and path != expected_path:
                    new_line = line.replace(path, expected_path)
                    issues_fixed.append(f"[{filename}] Fixed component import path: '{path}' -> '{expected_path}'")
                    line = new_line
                    modified = True

            # Check Check 4: No new packages
            imp_match = import_pattern.search(line)
            if imp_match:
                source = imp_match.group(1)
                # If it doesn't start with . and is not an allowed package
                if not source.startswith(".") and not source.startswith("/") and not source.startswith("\\"):
                    # Check top-level package name
                    pkg_name = source.split("/")[0]
                    if pkg_name not in allowed_packages:
                        issues_flagged.append(f"[{filename}] Unrecognized package import: '{source}'")

            new_lines.append(line)

        # Reconstruct content
        new_content = "\n".join(new_lines) + ("\n" if content.endswith("\n") else "")
        
        # Check Check 5: No inline styles
        style_matches = inline_style_pattern.findall(new_content)
        if style_matches:
            issues_flagged.append(f"[{filename}] Found {len(style_matches)} inline style attributes (e.g., {style_matches[0]})")

        if modified:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)

print("--- FIXED ISSUES ---")
for issue in issues_fixed:
    print(issue)

print("\n--- FLAGGED ISSUES (NOT FIXED) ---")
for issue in issues_flagged:
    print(issue)
