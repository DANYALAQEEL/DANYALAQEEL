import fitz
import aspose.words as aw
import re

out_pdf_path = r"C:\Users\Administrator\Downloads\SDA-Assignment1-Strategy-Group3-Modified.pdf"

import shutil

temp_docx = r"C:\Users\Administrator\.gemini\antigravity\scratch\temp_template.docx"
shutil.copy2(r"C:\Users\Administrator\Downloads\Assignment1 template.docx", temp_docx)

print("Converting template to PDF...")
doc = aw.Document(temp_docx)
doc.save(r"C:\Users\Administrator\.gemini\antigravity\scratch\cover_page.pdf")

print("Opening PDFs...")
pdf = fitz.open(r"C:\Users\Administrator\Downloads\Classes_S4_Extracted\Classes S4\Software Design & Architecture\SDA-Assignment1-Strategy-Group3.pdf")
cover_pdf = fitz.open(r"C:\Users\Administrator\.gemini\antigravity\scratch\cover_page.pdf")

print("Modifying colors...")
for page in pdf:
    # clean_contents standardizes content syntax and concatenates streams
    page.clean_contents()
    xref = page.get_contents()[0]
    cont = pdf.xref_stream(xref)
    
    # Replace the identified pink patterns with sky blue (135, 206, 235) -> (0.529, 0.808, 0.922)
    cont = re.sub(br'1(?:\.0*)?\s+0\.8(?:0*)?\s+1(?:\.0*)?\s+rg', b'0.529 0.808 0.922 rg', cont)
    cont = re.sub(br'0\.949(?:0*)?\s+0\.808(?:0*)?\s+0\.929(?:0*)?\s+rg', b'0.529 0.808 0.922 rg', cont)
    cont = re.sub(br'0\.969(?:0*)?\s+0\.867(?:0*)?\s+0\.957(?:0*)?\s+rg', b'0.529 0.808 0.922 rg', cont)
    
    pdf.update_stream(xref, cont)

print("Replacing cover page...")
# insert_pdf inserts the cover page at the beginning
pdf.insert_pdf(cover_pdf, from_page=0, to_page=0, start_at=0)
# Delete original cover page which moved to index 1
pdf.delete_page(1)

pdf.save(out_pdf_path)
print("Saved to", out_pdf_path)
