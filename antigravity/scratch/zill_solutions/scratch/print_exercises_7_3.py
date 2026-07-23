import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's extract between EXERCISES 7.3 and EXERCISES 7.4
start_idx = text.find("EXERCISES 7.3")
end_idx = text.find("EXERCISES 7.4")

if start_idx != -1 and end_idx != -1:
    print(text[start_idx:end_idx])
else:
    print("Could not find boundaries")
