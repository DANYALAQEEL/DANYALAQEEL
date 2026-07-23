import os
import fitz  # PyMuPDF
import re

def extract_figures_from_pdf(pdf_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    extracted = []
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        # Search for "Figure"
        rects = page.search_for("Figure")
        for rect in rects:
            # Expand the rect slightly to extract the text around it
            text_rect = fitz.Rect(rect.x0 - 10, rect.y0 - 5, rect.x1 + 150, rect.y1 + 5)
            text = page.get_text("text", clip=text_rect).strip().replace('\n', ' ')
            
            # Find figure number (e.g. "Figure 1.15")
            match = re.search(r'Figure\s+(\d+\.\d+)', text, re.IGNORECASE)
            if match:
                fig_num = match.group(1)
                fig_name = f"figure_{fig_num.replace('.', '_')}"
                
                # Check if we already extracted this figure to avoid duplicates
                if fig_name in extracted:
                    continue
                
                # Define a crop area above the caption.
                # Usually, the figure is located above the caption.
                # We crop from y0 - 180 (above) to y1 + 10 (below).
                crop_rect = fitz.Rect(
                    max(0, rect.x0 - 200),
                    max(0, rect.y0 - 220),
                    min(page.rect.width, rect.x1 + 200),
                    min(page.rect.height, rect.y1 + 15)
                )
                
                # Render the cropped area
                pix = page.get_pixmap(clip=crop_rect, dpi=200)
                out_path = os.path.join(output_dir, f"{fig_name}.png")
                pix.save(out_path)
                extracted.append(fig_name)
                print(f"Extracted {fig_name} from page {page_num} to {out_path}")
                
    doc.close()
    return extracted

if __name__ == "__main__":
    pdf_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\raw_chapters\chapter_7.pdf"
    output_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\zill_solutions\extracted_figures"
    extract_figures_from_pdf(pdf_path, output_dir)
