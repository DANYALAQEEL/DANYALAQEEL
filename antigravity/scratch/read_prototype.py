import re

with open("C:/Users/Administrator/Downloads/CF-Energy-Cloud-Enterprise-Prototype.html", "r", encoding="utf-8") as f:
    html = f.read()

# Find <script> tags
scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
print(f"Found {len(scripts)} inline scripts.")
if scripts:
    content = scripts[0]
    print("Script length:", len(content))
    # Write script content to a file to examine
    with open("C:/Users/Administrator/.gemini/antigravity/scratch/prototype_script.js", "w", encoding="utf-8") as out:
        out.write(content)
    print("Wrote script to C:/Users/Administrator/.gemini/antigravity/scratch/prototype_script.js")
