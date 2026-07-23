import os

target_path = r"c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype\backend_production\main.py"

with open(target_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the insertion point
marker = "from utils import tokenize"
insertion = """from utils import tokenize
from file_manager import join_files

# --- AUTO-STITCH DATA ---
try:
    print("ðŸ§µ Checking for split data files...")
    join_files()
except Exception as e:
    print(f"âš ï¸  Warning: File stitching failed (or files already exist): {e}")
"""

if "from file_manager import join_files" in content:
    print("Already patched.")
else:
    new_content = content.replace(marker, insertion)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully patched main.py")
