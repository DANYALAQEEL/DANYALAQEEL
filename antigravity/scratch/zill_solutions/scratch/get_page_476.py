import pypdf
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\A First Course in Complex Analysis With Applications by Zill.pdf"
reader = pypdf.PdfReader(pdf_path)

# Extract page 476 (476 is page number in PDF or page index? Let's check page index 475, which is 476th page)
text = reader.pages[475].extract_text()
print(text)
