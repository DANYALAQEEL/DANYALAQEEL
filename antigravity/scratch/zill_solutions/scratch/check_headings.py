import os

dir_path = 'solutions/chapter_6'
files = [
    'section_6.1_solutions.md',
    'section_6.2_solutions.md',
    'section_6.3_solutions.md',
    'section_6.4_solutions.md',
    'section_6.5_solutions.md',
    'section_6.6_solutions.md',
    'section_6.7_solutions.md',
    'chapter_6_review_quiz.md'
]

for filename in files:
    filepath = os.path.join(dir_path, filename)
    print(f"=== File: {filename} ===")
    headings = []
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            if line.startswith('#'):
                headings.append(line.strip())
    print(headings[:8])
    if len(headings) > 8:
        print(f"... and {len(headings)-8} more")
    print()
