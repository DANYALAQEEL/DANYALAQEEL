import re

with open('raw_extracted/chapter_6_raw.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for "EXERCISES 6.1", "EXERCISES 6.2", etc. and see how many problems are listed
sections = re.split(r'EXERCISES\s*6\.', text, flags=re.IGNORECASE)

print(f"Number of sections split: {len(sections)}")
for idx in range(1, len(sections)):
    sect_text = sections[idx]
    # find the section number (e.g. 1, 2, 3, etc.)
    match = re.match(r'^(\d+)', sect_text)
    if match:
        sect_num = match.group(1)
        # Find all problem numbers like "\n1. ", "\n2. ", ..., "\n30. " or similar at the start of lines
        # In PDF text, they might look like "\n1.", "\n2.", etc.
        prob_nums = re.findall(r'\n\s*(\d+)\s*\.', sect_text)
        prob_nums = [int(n) for n in prob_nums]
        if prob_nums:
            print(f"Section 6.{sect_num}: Max problem number in text = {max(prob_nums)}, total numbered lines = {len(prob_nums)}")
        else:
            print(f"Section 6.{sect_num}: No numbered problems found in text.")
            
# Also check for Review Exercises
review_match = re.search(r'REVIEW\s*(?:EXERCISES|QUIZ|QUESTIONS)', text, re.IGNORECASE)
if review_match:
    print("Found Review section.")
