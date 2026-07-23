import fitz
import re

doc = fitz.open(r"C:\Users\Administrator\Downloads\Classes_S4_Extracted\Classes S4\Software Design & Architecture\SDA-Assignment1-Strategy-Group3.pdf")

for i, page in enumerate(doc):
    cont = page.read_contents()
    # Find all rg and RG operators
    matches = re.findall(rb'([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s+(rg|RG)', cont)
    if matches:
        print(f"Page {i+1} colors:", set(matches))
