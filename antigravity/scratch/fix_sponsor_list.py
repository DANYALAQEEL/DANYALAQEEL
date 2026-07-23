import pandas as pd
import numpy as np

# Paths
original_file = r"C:\Users\Administrator\Downloads\sponser welcome contact.xlsx"
output_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\Corrected_Sponsor_List_v2.xlsx"

# 1. Read the original data
try:
    df_orig = pd.read_excel(original_file)
    print(f"Original entries: {len(df_orig)}")
except Exception as e:
    print(f"Error reading original file: {e}")
    exit()

# 2. Define Corrections (function to apply row-by-row)
def apply_corrections(row):
    # Fix CSI Bangkok -> Consortia Solutions
    if "CSI Bangkok" in str(row['Company Name']):
        row['Company Name'] = "Consortia Solutions"
        row['Website'] = "https://consortiasolutions.com"
        row['Pitch Angle'] = "Services: Fintech and risk analytics consulting."
        # Keep the contact info as it was likely correct for Consortia (based on my analysis)
        
    # Fix Aawaz AI -> Aawaz (Women Empowerment)
    # The original had "Aawaz AI" with "aiawaaz.io" (Indian). 
    # We want to keep the name but clarify it and maybe fix website if we found the Pakistani one.
    if "Aawaz AI" in str(row['Company Name']):
        row['Company Name'] = "Aawaz (Women Empowerment)"
        row['Website'] = "https://aawaz.com.pk" # The Pakistani entity
        row['Pitch Angle'] = "CSR: Supporting women entrepreneurs and inclusivity."
    
    return row

df_orig = df_orig.apply(apply_corrections, axis=1)

# 3. Standardize Columns to match our desired output format
# Original columns: ['Company Name', 'Industry/Sector', 'Website', 'Relevance/Tier', 'Pitch Angle', 'Contact Phone', 'Contact Email', 'City']
# Desired columns: "Company", "Industry", "Website", "Tier", "Pitch", "Contact", "City", "Type"

# Rename to match
df_orig = df_orig.rename(columns={
    'Company Name': 'Company',
    'Industry/Sector': 'Industry',
    'Relevance/Tier': 'Tier',
    'Pitch Angle': 'Pitch',
    'Contact Email': 'Contact'
})

# Add 'Type' column to original data (default value)
df_orig['Type'] = "Monetary / Sponsorship" 

# Select only the columns we want to keep/merge
df_orig = df_orig[["Company", "Industry", "Website", "Tier", "Pitch", "Contact", "City", "Type"]]


# 4. Define New Companies to Add
new_companies_data = [
    {"Company": "S&P Global", "Industry": "Fintech / Data", "Website": "https://www.spglobal.com", "Tier": "High", "Pitch": "Corporate Branding: Major employer in Islamabad seeking top talent.", "Contact": "CampusRecruiting@spglobal.com", "City": "Islamabad", "Type": "Monetary / CSR"},
    {"Company": "Teradata", "Industry": "Data Analytics", "Website": "https://www.teradata.com", "Tier": "High", "Pitch": "Tech Recruitment: Hiring data scientists and engineers.", "Contact": "Islamabad.Recruitment@teradata.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Motive (formerly KeepTruckin)", "Industry": "Fleet Tech / AI", "Website": "https://gomotive.com", "Tier": "High", "Pitch": "Product/Tech: High-growth AI company hiring aggressively.", "Contact": "support@gomotive.com", "City": "Islamabad", "Type": "Monetary / Branding"},
    {"Company": "Ibex", "Industry": "BPO / Tech", "Website": "https://ibex.co", "Tier": "High", "Pitch": "Mass Hiring: Constant need for fresh grads; energetic culture.", "Contact": "careers.pk@ibex.co", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Zameen.com", "Industry": "Real Estate / Tech", "Website": "https://zameen.com", "Tier": "High", "Pitch": "Brand Visibility: Reaching young professionals and families.", "Contact": "queries@zameen.com", "City": "Lahore/Isb", "Type": "Monetary / Branding"},
    {"Company": "Confiz", "Industry": "Software / Retail", "Website": "https://confiz.com", "Tier": "Medium", "Pitch": "Tech Consulting: Hiring for enterprise retail solutions.", "Contact": "talent@confiz.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Educative", "Industry": "EdTech", "Website": "https://educative.io", "Tier": "Medium", "Pitch": "Developer Learning: Promoting courses to CS students.", "Contact": "business@educative.io", "City": "Lahore/Isb", "Type": "Monetary / Subscriptions"},
    {"Company": "CodeNinja", "Industry": "Software Services", "Website": "https://codeninja.co", "Tier": "Medium", "Pitch": "Growth: Fast-growing software house in Islamabad.", "Contact": "info@codeninja.co", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Orbit-Ed", "Industry": "EdTech / AI", "Website": "https://orbit-ed.com", "Tier": "Medium", "Pitch": "Innovation: AI-based learning; relevant to students.", "Contact": "info@orbit-ed.com", "City": "Islamabad", "Type": "In-Kind / Partnership"},
    {"Company": "Remotebase", "Industry": "HR Tech", "Website": "https://remotebase.com", "Tier": "High", "Pitch": "Remote Work: Hiring top talent for Silicon Valley startups.", "Contact": "hello@remotebase.com", "City": "Remote/Isb", "Type": "Monetary / Recruitment"},
    {"Company": "NUST (Internal Partners)", "Industry": "Education / Tech", "Website": "https://nust.edu.pk", "Tier": "High", "Pitch": "Collaboration: Partnering with specific schools (SEECS, ASAB) or NSTP.", "Contact": "partnerships@nust.edu.pk", "City": "Islamabad", "Type": "Internal / In-Kind"}
]

df_new = pd.DataFrame(new_companies_data)

# 5. Merge Dataframes
df_final = pd.concat([df_orig, df_new], ignore_index=True)

# 6. Save with Auto-width Formatting
try:
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df_final.to_excel(writer, index=False, sheet_name='Sponsors')
        
        # Access the workbook and sheet
        workbook = writer.book
        worksheet = writer.sheets['Sponsors']
        
        # Auto-adjust column widths
        for column in worksheet.columns:
            max_length = 0
            column = [cell for cell in column]
            for cell in column:
                try:
                    if len(str(cell.value)) > max_length:
                        max_length = len(str(cell.value))
                except:
                    pass
            adjusted_width = (max_length + 2)
            worksheet.column_dimensions[column[0].column_letter].width = adjusted_width

    print(f"Successfully created: {output_file}")
    print(f"Total entries: {len(df_final)}")

except Exception as e:
    print(f"Error creating file: {e}")
