import fitz
import re

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_chapters\chapter_2.pdf"
doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text("text")
    for line in text.split('\n'):
        if re.search(r'^\s*2\.[1-7]\s+', line) or "Review Quiz" in line or "REVIEW QUIZ" in line:
            clean_line = line.strip().encode('ascii', 'ignore').decode('ascii')
            print(f"Page {page_num + 1}: {clean_line}")

doc.close()
