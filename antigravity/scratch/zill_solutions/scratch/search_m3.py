import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Find occurrences of "M-3" or "entry M-3"
import re
matches = [m.start() for m in re.finditer(r"M-3", text, re.IGNORECASE)]
for m in matches:
    print(text[m-200:m+200])
    print("="*40)
