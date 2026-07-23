import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

def print_range(start, end, title):
    print("=" * 60)
    print(title)
    print("=" * 60)
    for idx in range(start-1, min(end, len(lines))):
        print(f"{idx+1}: {lines[idx]}", end="")
    print("\n")

print_range(1340, 1370, "Exercises 7.2 (cont)")
print_range(1828, 1900, "Exercises 7.3")
print_range(2416, 2480, "Exercises 7.4")
print_range(3614, 3680, "Exercises 7.5")
print_range(3914, 3980, "Review Quiz")
