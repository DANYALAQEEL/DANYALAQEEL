with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

def save_range(start_idx, end_idx, filename):
    with open(filename, "w", encoding="utf-8") as f:
        for idx in range(start_idx - 1, min(end_idx - 1, len(lines))):
            f.write(f"{idx+1}: {lines[idx]}")

save_range(560, 1257, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_1.txt")
save_range(1257, 1828, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_2.txt")
save_range(1828, 2416, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_3.txt")
save_range(2416, 3614, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt")
save_range(3614, 3914, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_5.txt")
save_range(3914, 4500, r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\quiz.txt")

print("Exercises split and saved!")
