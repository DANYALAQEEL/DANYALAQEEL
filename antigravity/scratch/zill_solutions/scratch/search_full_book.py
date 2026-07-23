import pypdf
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
reader = pypdf.PdfReader(pdf_path)

print(f"Total pages: {len(reader.pages)}")

# Search for "M-3" in pages
found = 0
for idx in range(len(reader.pages) - 1, -1, -1):  # Appendix is at the end, so search backward
    text = reader.pages[idx].extract_text()
    if "M-3" in text or "M–3" in text or "Entry M-3" in text or "M-4" in text:
        print(f"Page {idx+1}:")
        print(text[:1000])
        print("="*40)
        found += 1
        if found >= 3:
            break
