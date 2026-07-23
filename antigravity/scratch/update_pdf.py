import fitz  # pymupdf
import re

input_path = r"C:\Users\Administrator\Downloads\Welcome Seecs'23 orignal copy.pdf"
output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\Welcome_Seecs_25_Updated.pdf"

# Text Replacements Map (Simple string replacements)
replacements = {
    "2023": "2025",
    "Welcome '23": "Welcome '25",
    "Welcome 23": "Welcome 25",
    "Welcome’23": "Welcome’25",
    "1000+": "1600+", 
}

# Specific Contact & Schedule Updates
# Note: For these large blocks, we might need to find the area and redraw it.
# Text search for unique phrases to locate them.
schedule_search_text = "The Welcome of Batch’23 of SEECS will be held in" 
new_schedule_text = "The Welcome of Batch’25 of SEECS will be held in\nthe last week of january 2026"

contact_search_text = "Contact Us" # Assuming there is a header or we look for the old names
# Based on user info: "DANYAL AQEEL +923088546016, Fatiha Sheikh +923135912790"
# We'll look for the old contacts on the last page.

def main():
    try:
        doc = fitz.open(input_path)
        print(f"Opened PDF with {len(doc)} pages.")

        for page_num, page in enumerate(doc):
            print(f"Processing page {page_num + 1}...")
            
            # 1. Simple Replacements
            # usage: page.search_for(text) -> list of rects
            # then: page.add_redact_annot(rect, text=new_text, ...)
            # finally: page.apply_redactions()
            
            for old_text, new_text in replacements.items():
                hits = page.search_for(old_text)
                for rect in hits:
                     # Redact the old text area
                    # We try to use the same font properties if possible, but PyMuPDF's redaction 
                    # text placement is basic. 
                    # Strategy: Redact (white out) then insert text at the same point.
                    
                    # Store font size/color if possible? Hard with search_for. 
                    # We will use a standard approximation: Header vs Body based on rect height.
                    fontsize = rect.height * 0.8 # Rough estimate
                    
                    # Add redaction annotation (invisible, just marks area)
                    # We can use 'text' arg in apply_redactions but it has limited formatting.
                    # Better: Redact to white, then insert_text.
                    page.add_redact_annot(rect, fill=(1, 1, 1)) # White fill
                    
                    # Insert new text
                    # We align slightly up/left to match standard baseline
                    insert_point = fitz.Point(rect.x0, rect.y1 - (rect.height * 0.2)) 
                    
                    # Heuristic for Color: Assume Black (0,0,0) or White (1,1,1) based on background?
                    # Most PDF changes here are likely dark text on light bg. 
                    
                    # Let's collect these insertions to do AFTER apply_redactions
                    # (Actually we must do redactions first)
            
            # Apply all redacts for this page
            page.apply_redactions()
            
            # Now re-insert the text? 
            # Issue: If we do it this way, we lost the exact positions if we had multiple hits.
            # Alternate better approach:
            # 1. Find all hits. 
            # 2. For each hit, draw white rect over it.
            # 3. Draw new text over it.
            
            # Let's restart the loop strategy.
            
        doc.close()
        
        # Re-open for the robust approach
        doc = fitz.open(input_path)
        
        for page_num, page in enumerate(doc):
            
            # --- Generic Replacements ---
            for old_text, new_text in replacements.items():
                hits = page.search_for(old_text)
                if hits:
                    print(f"  Found '{old_text}' {len(hits)} times.")
                    for rect in hits:
                        # Draw white box to clear
                        page.draw_rect(rect, color=(1,1,1), fill=(1,1,1))
                        
                        # Draw new text
                        # Centered in the rect? or Left aligned? 
                        # Assuming left aligned for compatibility
                        fontsize = rect.height * 0.75
                        page.insert_text(
                            fitz.Point(rect.x0, rect.y1 - (rect.height*0.2)), 
                            new_text, 
                            fontsize=fontsize,
                            color=(0, 0, 0) # Assumption: Text is black. 
                            # If text was white on dark, this fails. 
                            # Improvement: Check the original text color? 
                            # For this task, user wants quick update. We'll verify visually.
                        )
            
            # --- Schedule Update ---
            # Search for the schedule sentence
            # Note: The search text might be split across lines. 
            # We'll search for a unique substring: "Welcome of Batch’23"
            hits = page.search_for("Welcome of Batch’23")
            if hits:
                print("  Found Schedule section.")
                # We assume the schedule paragraph is around here.
                # Let's define a larger rect to clear the whole paragraph/sentence.
                # Hit rect only covers the search term.
                # We need to cover the specific outdated line.
                # Text: "The Welcome of Batch’23 of SEECS will be held in the last week of january 2024"
                
                # Let's blindly cover a strip to the right/down of the hit.
                base_rect = hits[0] 
                # Create a rect that covers the whole line(s)
                clear_rect = fitz.Rect(base_rect.x0, base_rect.y0, page.rect.width - 50, base_rect.y1 + 20)
                
                page.draw_rect(clear_rect, color=(1,1,1), fill=(1,1,1))
                page.insert_text(
                    fitz.Point(base_rect.x0, base_rect.y1),
                    "The Welcome of Batch’25 of SEECS will be held in the last week of January 2026",
                    fontsize=10, # Standard body text size estimate
                    color=(0,0,0)
                )

            # --- Contact Update (Last Page usually) ---
            # Search for "Contact Us" or previous known names if we knew them.
            # User provided new names: DANYAL AQEEL, Fatiha Sheikh. 
            # We don't know the OLD names to search for.
            # We'll search for "Contact Us" and assume names are below it.
            hits = page.search_for("Reach Us") # Common header
            if not hits:
                hits = page.search_for("Contact Us")
            
            if hits and page_num == len(doc) - 1: # Assuming last page
                print("  Found Contact section on last page.")
                header_rect = hits[0]
                
                # Area below header to clear
                clear_rect = fitz.Rect(header_rect.x0 - 50, header_rect.y1 + 5, page.rect.width - 50, page.rect.height - 50)
                
                # Clear it
                page.draw_rect(clear_rect, color=(1,1,1), fill=(1,1,1))
                
                # Write new contacts
                start_y = header_rect.y1 + 30
                page.insert_text(fitz.Point(header_rect.x0, start_y), "DANYAL AQEEL", fontsize=12, color=(0,0,0))
                page.insert_text(fitz.Point(header_rect.x0, start_y + 15), "+92 308 8546016", fontsize=10, color=(0,0,0))
                
                page.insert_text(fitz.Point(header_rect.x0, start_y + 45), "Fatiha Sheikh", fontsize=12, color=(0,0,0))
                page.insert_text(fitz.Point(header_rect.x0, start_y + 60), "+92 313 5912790", fontsize=10, color=(0,0,0))


        doc.save(output_path)
        print(f"Saved updated PDF to {output_path}")

    except Exception as e:
        print(f"Error updating PDF: {e}")

if __name__ == "__main__":
    main()
