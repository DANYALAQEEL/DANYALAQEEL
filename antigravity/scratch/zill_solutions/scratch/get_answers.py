import pypdf
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Administrator\..gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
# Oh wait, the path in previous script was:
# r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"

reader = pypdf.PdfReader(pdf_path)

for idx in range(len(reader.pages) - 1, len(reader.pages) - 40, -1):
    text = reader.pages[idx].extract_text()
    if "Exercises 7.3" in text or "Exercises 7.4" in text or "Exercises 7.5" in text:
        print(f"Page {idx+1}:")
        print(text)
        print("="*80)
