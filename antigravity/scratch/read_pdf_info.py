import os

pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\cvt_book\A First Course in Complex Analysis With Applications by Zill.pdf"

def inspect_pdf():
    # Try importing pypdf first
    try:
        import pypdf
        print("Using pypdf library...")
        reader = pypdf.PdfReader(pdf_path)
        print(f"Total Pages: {len(reader.pages)}")
        
        # Print metadata
        meta = reader.metadata
        print("Metadata:")
        for k, v in meta.items():
            print(f"  {k}: {v}")
            
        # Print text of first 10 pages to identify edition and table of contents
        print("\n=== Text from first 10 pages ===")
        for i in range(min(10, len(reader.pages))):
            print(f"--- Page {i+1} ---")
            print(reader.pages[i].extract_text()[:1000]) # Print first 1000 chars of each page
        return
    except ImportError:
        print("pypdf is not installed.")

    # Try PyMuPDF / fitz
    try:
        import fitz
        print("Using PyMuPDF library...")
        doc = fitz.open(pdf_path)
        print(f"Total Pages: {doc.page_count}")
        print("Metadata:", doc.metadata)
        print("\n=== Text from first 10 pages ===")
        for i in range(min(10, doc.page_count)):
            print(f"--- Page {i+1} ---")
            print(doc[i].get_text()[:1000])
        return
    except ImportError:
        print("fitz is not installed.")

    # Try pdfplumber
    try:
        import pdfplumber
        print("Using pdfplumber library...")
        with pdfplumber.open(pdf_path) as pdf:
            print(f"Total Pages: {len(pdf.pages)}")
            print("\n=== Text from first 10 pages ===")
            for i in range(min(10, len(pdf.pages))):
                print(f"--- Page {i+1} ---")
                print(pdf.pages[i].extract_text()[:1000])
        return
    except ImportError:
        print("pdfplumber is not installed.")

    print("No PDF reading library found. Installing pypdf...")
    import subprocess
    try:
        subprocess.run(["pip", "install", "pypdf"], check=True)
        # Retry with pypdf
        import pypdf
        reader = pypdf.PdfReader(pdf_path)
        print(f"Total Pages: {len(reader.pages)}")
        print("\n=== Text from first 10 pages ===")
        for i in range(min(10, len(reader.pages))):
            print(f"--- Page {i+1} ---")
            print(reader.pages[i].extract_text()[:1000])
    except Exception as e:
        print(f"Failed to install or run pypdf: {e}")

if __name__ == "__main__":
    inspect_pdf()
