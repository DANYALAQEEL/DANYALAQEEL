import sys
import unicodedata
import pypdf

# Ensure standard output can print UTF-8 on Windows
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def clean_text(text):
    """Normalize ligatures and remove encoding anomalies."""
    if not text:
        return ""
    # Normalize ligatures (e.g., \ufb00 -> ff, \ufb01 -> fi, \ufb02 -> fl)
    text = unicodedata.normalize('NFKC', text)
    # Replace common symbol characters if needed
    return text

def extract_pages(pdf_path, start_page, end_page, output_txt_path):
    """Extract pages from start_page to end_page (1-indexed) and save to output_txt_path."""
    print(f"Opening PDF: {pdf_path}")
    reader = pypdf.PdfReader(pdf_path)
    
    total_pages = len(reader.pages)
    if start_page < 1 or end_page > total_pages or start_page > end_page:
        raise ValueError(f"Invalid page range {start_page}-{end_page}. PDF has {total_pages} pages.")
        
    print(f"Extracting pages {start_page} to {end_page}...")
    
    extracted_content = []
    for page_num in range(start_page - 1, end_page):
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
    pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_textbook\A First Course in Complex Analysis With Applications by Zill.pdf"
    output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_extracted\chapter_1_raw.txt"
    
    # Chapter 1 exercises span from Page 19 to Page 64 (approx)
    # Let's extract pages 18 to 64 to make sure we cover everything in Chapter 1
    try:
        extract_pages(pdf_path, 18, 64, output_path)
    except Exception as e:
        print(f"Error during extraction: {e}")
