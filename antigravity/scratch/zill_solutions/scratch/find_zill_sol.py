import pypdf
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
reader = pypdf.PdfReader(pdf_path)

found = 0
for idx in range(len(reader.pages)):
    text = reader.pages[idx].extract_text()
    if "0.589" in text or "0.380" in text or "1.258" in text or "0.854" in text:
        print(f"Page {idx+1}:")
        print(text)
        print("="*80)
        found += 1
        if found >= 3:
            break
if found == 0:
    print("Not found in textbook.")
