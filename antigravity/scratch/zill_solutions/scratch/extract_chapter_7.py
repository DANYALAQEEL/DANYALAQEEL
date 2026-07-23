import pypdf
import os

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_chapters\chapter_7.pdf"
output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_7_raw.txt"

os.makedirs(os.path.dirname(output_path), exist_ok=True)

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

with open(output_path, "w", encoding="utf-8") as f:
    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        f.write(f"--- PAGE {idx+1} ---\n")
        f.write(text)
        f.write("\n")

print("Extraction completed!")
