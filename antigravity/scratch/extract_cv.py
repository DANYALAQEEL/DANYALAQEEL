import sys

try:
    import PyPDF2
    with open(r"C:\Users\Administrator\Downloads\CV.pdf", "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        with open(r"C:\Users\Administrator\.gemini\antigravity\scratch\cv_extracted.txt", "w", encoding="utf-8") as out:
            out.write(text)
        print("Successfully extracted using PyPDF2")
except ImportError:
    print("PyPDF2 not found. Please install it.")
except Exception as e:
    print(f"Error: {e}")
