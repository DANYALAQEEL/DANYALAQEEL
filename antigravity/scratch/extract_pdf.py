import pdfplumber
import json

pdf_path = r"C:\Users\Administrator\Downloads\DCVF.pdf"

with pdfplumber.open(pdf_path) as pdf:
    all_text = []
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            all_text.append(f"--- PAGE {i+1} ---\n{text}")
    
    full_text = "\n\n".join(all_text)
    print(full_text)
