
import pypdf

file_path = r"C:\Users\Administrator\Downloads\Welcome Seecs'23 orignal copy.pdf"

try:
    reader = pypdf.PdfReader(file_path)
    print(f"Number of pages: {len(reader.pages)}")
    print(f"Is Encrypted: {reader.is_encrypted}")
    
    # Check first page text to see if it's text-based
    page1 = reader.pages[0]
    text = page1.extract_text()
    if text.strip():
        print("PDF is text-based (searchable).")
        print(f"Preview: {text[:200]}...")
    else:
        print("PDF appears to be image-based (scanned) or has no extractable text.")
        
except Exception as e:
    print(f"Error reading PDF: {e}")
