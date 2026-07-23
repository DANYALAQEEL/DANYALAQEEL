import fitz

doc = fitz.open(r"C:\Users\Administrator\Downloads\Classes_S4_Extracted\Classes S4\Software Design & Architecture\SDA-Assignment1-Strategy-Group3.pdf")

colors = set()
text_colors = set()
for page in doc:
    # Text colors
    for block in page.get_text("dict")["blocks"]:
        if "lines" in block:
            for line in block["lines"]:
                for span in line["spans"]:
                    # Convert to RGB tuple from integer
                    c = span["color"]
                    r = (c >> 16) & 255
                    g = (c >> 8) & 255
                    b = c & 255
                    text_colors.add((r, g, b))
    
    # Path colors
    for path in page.get_drawings():
        if path.get("color"):
            colors.add(tuple(path["color"]))
        if path.get("fill"):
            colors.add(tuple(path["fill"]))

print("Text colors:", text_colors)
print("Path colors:", colors)
