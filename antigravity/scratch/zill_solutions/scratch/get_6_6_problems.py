import re

with open('raw_extracted/chapter_6_raw.txt', 'r', encoding='utf-8') as f:
    text = f.read()

matches = list(re.finditer(r'EXERCISES\s*6\.6', text, re.IGNORECASE))
output = []
if matches:
    start_idx = matches[0].start()
    end_idx = min(len(text), start_idx + 25000)
    snippet = text[start_idx:end_idx]
    output.append(snippet)

with open('scratch/get_6_6_problems_output.txt', 'w', encoding='utf-8') as f_out:
    f_out.writelines(output)
print("Done extracting Section 6.6 exercises.")
