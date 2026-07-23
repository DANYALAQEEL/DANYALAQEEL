import re

def count_problems(filepath):
    print(f"File: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    clean_lines = []
    for line in lines:
        # remove prefix like "561: "
        clean = re.sub(r'^\d+:\s*', '', line)
        clean_lines.append(clean)
    
    content = "".join(clean_lines)
    
    # Find digits at the start of a line in the cleaned content
    matches = re.findall(r'(?:^|\n)\s*(\d+)\.\s', content)
    # Also find digits like "1. " within lines if line starts with them but got concatenated
    matches_inline = re.findall(r'\s(\d+)\.\s', content)
    all_matches = sorted(list(set(map(int, matches + matches_inline))))
    print(f"Digits found: {all_matches}\n")

count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_1.txt")
count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_2.txt")
count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_3.txt")
count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_4.txt")
count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\exercises_7_5.txt")
count_problems(r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\scratch\quiz.txt")
