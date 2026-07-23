with open("C:/Users/Administrator/.gemini/antigravity/scratch/prototype_script.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Searching for drag, drop, and grid functions:")
for idx, line in enumerate(lines):
    if "drag" in line.lower() or "drop" in line.lower() or "resize" in line.lower() or "grid" in line.lower():
        if "function" in line or "addEventListener" in line or "const" in line:
            print(f"Line {idx+1}: {line.strip()}")
