import sys
import unicodedata
import pypdf

def clean_text(text):
    if not text:
        return ""
    text = unicodedata.normalize('NFKC', text)
    return text

def extract_all(pdf_path, output_txt_path):
    print(f"Opening PDF: {pdf_path}")
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total pages: {total_pages}")
    
    extracted_content = []
    for page_num in range(total_pages):
        page = reader.pages[page_num]
        raw_text = page.extract_text()
        cleaned = clean_text(raw_text)
        
        extracted_content.append(f"=== PAGE {page_num + 1} ===\n")
        extracted_content.append(cleaned)
        extracted_content.append("\n\n")
        
    with open(output_txt_path, "w", encoding="utf-8") as f:
        f.writelines(extracted_content)
        
    print(f"Successfully saved extracted text to: {output_txt_path}")

if __name__ == "__main__":
    pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_chapters\chapter_6.pdf"
    output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_6_raw.txt"
    extract_all(pdf_path, output_path)
