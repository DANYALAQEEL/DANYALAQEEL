import pypdf
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
reader = pypdf.PdfReader(pdf_path)

for idx in range(len(reader.pages)):
    text = reader.pages[idx].extract_text()
    if "Appendix III" in text and "Table of Conformal Mappings" in text:
        print(f"Page {idx+1}:")
        print(text)
        print("="*80)
