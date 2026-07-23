import pandas as pd
import os

# Define the output path
output_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\Corrected_Sponsor_List.xlsx"

# 1. Reconstruct and clean the existing data
# Based on the user's provided file content
data = [
    {"Company": "10Pearls", "Industry": "Software / AI", "Website": "https://10pearls.com", "Tier": "High", "Pitch": "Employer Branding: 'Cool' workplace for tech talent.", "Contact": "info@10pearls.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Arbisoft", "Industry": "Software Dev", "Website": "https://arbisoft.com", "Tier": "High", "Pitch": "Elite Recruitment: Finding top 1% engineers.", "Contact": "contact@arbisoft.com", "City": "Lahore/Isb", "Type": "Monetary / Recruitment"},
    {"Company": "Consortia Solutions", "Industry": "Consulting / Tech", "Website": "https://consortiasolutions.com", "Tier": "Medium", "Pitch": "Services: Fintech and risk analytics consulting.", "Contact": "info@consortiasolutions.com", "City": "Islamabad", "Type": "Monetary / Service"},
    {"Company": "Aawaz (Women Empowerment)", "Industry": "Social Impact / AI", "Website": "https://aawaz.com.pk", "Tier": "Medium", "Pitch": "CSR: Supporting women entrepreneurs and inclusivity.", "Contact": "info@aawaz.com.pk", "City": "Islamabad", "Type": "CSR / Monetary"},
    {"Company": "Bykea", "Industry": "Logistics / App", "Website": "https://bykea.com", "Tier": "High", "Pitch": "User Acquisition: Promo codes for student commutes.", "Contact": "info@bykea.com", "City": "Karachi/Rwp", "Type": "In-Kind / Monetary"},
    {"Company": "Careem", "Industry": "Ride Hailing", "Website": "https://careem.com", "Tier": "High", "Pitch": "Mobility: Corporate packages and student discounts.", "Contact": "support@careem.com", "City": "Karachi/Isb", "Type": "In-Kind / Credits"},
    {"Company": "Cheezious", "Industry": "Food & Beverage", "Website": "https://cheezious.com", "Tier": "High", "Pitch": "Local Legend: Food stalls and vouchers.", "Contact": "support@cheezious.com", "City": "Rawalpindi", "Type": "Monetary / Food"},
    {"Company": "Devsinc", "Industry": "Software Dev", "Website": "https://devsinc.com", "Tier": "High", "Pitch": "Aggressive Hiring: Rapid scaling needs.", "Contact": "sales@devsinc.com", "City": "Lahore/Isb", "Type": "Monetary / Recruitment"},
    {"Company": "DPL (Digital Processing)", "Industry": "IT Services", "Website": "https://dplit.com", "Tier": "High", "Pitch": "Culture: 'Rebel' branding; innovative talent.", "Contact": "info@dplit.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Emumba", "Industry": "Product Tech", "Website": "https://emumba.com", "Tier": "High", "Pitch": "Engineering: Silicon Valley culture; high-bar hiring.", "Contact": "info@emumba.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Foodpanda", "Industry": "Food Tech", "Website": "https://foodpanda.pk", "Tier": "High", "Pitch": "Sales: Pandapro subscriptions and brand activation.", "Contact": "affiliate@foodpanda.pk", "City": "Islamabad", "Type": "Monetary / Vouchers"},
    {"Company": "Graana.com", "Industry": "PropTech", "Website": "https://graana.com", "Tier": "High", "Pitch": "PropTech: Aggressive marketing for real estate.", "Contact": "info@graana.com", "City": "Islamabad", "Type": "Monetary"},
    {"Company": "InDrive", "Industry": "Ride Hailing", "Website": "https://indrive.com", "Tier": "High", "Pitch": "User Acquisition: Affordable mobility for students.", "Contact": "support@indrive.com", "City": "Islamabad", "Type": "Monetary / Credits"},
    {"Company": "Jazz (PMCL)", "Industry": "Telecom", "Website": "https://jazz.com.pk", "Tier": "High", "Pitch": "Ecosystem: JazzCash, data bundles, youth lifestyle.", "Contact": "businesscare@jazz.com.pk", "City": "Islamabad", "Type": "Monetary / Sponsorship"},
    {"Company": "Markaz Technologies", "Industry": "E-com / Gig", "Website": "https://markaz.app", "Tier": "High", "Pitch": "Gig Economy: Reselling app for student income.", "Contact": "hello@markaz.app", "City": "Islamabad", "Type": "Monetary / User Acq"},
    {"Company": "Nayatel", "Industry": "ISP", "Website": "https://nayatel.com", "Tier": "High", "Pitch": "Connectivity: Internet sponsorship; fiber branding.", "Contact": "sales@nayatel.com", "City": "Islamabad", "Type": "In-Kind / Monetary"},
    {"Company": "NayaPay", "Industry": "Fintech", "Website": "https://nayapay.com", "Tier": "High", "Pitch": "Wallet: Digital payments and wallet activation.", "Contact": "marketing@nayapay.com", "City": "Karachi/Isb", "Type": "Monetary / Activation"},
    {"Company": "NetSol Technologies", "Industry": "Software", "Website": "https://netsoltech.com", "Tier": "High", "Pitch": "Enterprise: Global asset finance leader.", "Contact": "info@netsolpk.com", "City": "Lahore/Isb", "Type": "Monetary / Recruitment"},
    {"Company": "Ovex Technologies", "Industry": "BPO / IT", "Website": "https://ovextech.com", "Tier": "High", "Pitch": "Volume Hiring: Major BPO player needing mass recruitment.", "Contact": "info@ovextech.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "PriceOye", "Industry": "E-commerce", "Website": "https://priceoye.pk", "Tier": "High", "Pitch": "Gadgets: Student discounts on electronics.", "Contact": "hello@priceoye.com", "City": "Islamabad", "Type": "Monetary / Sales"},
    {"Company": "PTCL", "Industry": "Telecom", "Website": "https://ptcl.com.pk", "Tier": "High", "Pitch": "Connectivity: Flash Fiber promotion and gaming support.", "Contact": "company.secretary@ptclgroup.com", "City": "Islamabad", "Type": "Monetary / Sponsorship"},
    {"Company": "SadaPay", "Industry": "Fintech", "Website": "https://sadapay.pk", "Tier": "High", "Pitch": "Wallet: Neobank for freelancers; debit card issuance.", "Contact": "hello@sadapay.pk", "City": "Islamabad", "Type": "Monetary / Activation"},
    {"Company": "Systems Limited", "Industry": "IT Services", "Website": "https://systemsltd.com", "Tier": "High", "Pitch": "Industry Leader: Mass recruitment drives.", "Contact": "info@systemsltd.com", "City": "Lahore/Isb", "Type": "Monetary / Recruitment"},
    {"Company": "Techlogix", "Industry": "Consulting", "Website": "https://techlogix.com", "Tier": "High", "Pitch": "Enterprise: High-end consulting; elite hiring.", "Contact": "info@techlogix.com", "City": "Islamabad", "Type": "Monetary / Recruitment"},
    {"Company": "Telenor Pakistan", "Industry": "Telecom", "Website": "https://telenor.com.pk", "Tier": "High", "Pitch": "Youth: Gaming, data, and youth empowerment.", "Contact": "customercare@telenor.com.pk", "City": "Islamabad", "Type": "Monetary / Sponsorship"},
    {"Company": "Turkish Aerospace", "Industry": "Aerospace", "Website": "https://tusas.com", "Tier": "High", "Pitch": "Defense: NSTP anchor tenant; elite hiring.", "Contact": "contact@tusas.co.id", "City": "Islamabad", "Type": "Monetary / Branding"},
    {"Company": "Ufone 4G", "Industry": "Telecom", "Website": "https://ufone.com", "Tier": "High", "Pitch": "Youth: Super Card promotion and affordable connectivity.", "Contact": "customercare@ufone.com", "City": "Islamabad", "Type": "Monetary / Sponsorship"},
    {"Company": "Zong 4G", "Industry": "Telecom", "Website": "https://zong.com.pk", "Tier": "High", "Pitch": "Data: 4G leadership; student bundles and CSR.", "Contact": "info@zong.com.pk", "City": "Islamabad", "Type": "Monetary / Sponsorship"},
]

# 2. Add New High-Potential Companies
new_companies = [
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
]

# Combine lists
final_list = data + new_companies

# Create DataFrame
df = pd.DataFrame(final_list)

# Define columns order
columns = ["Company", "Industry", "Website", "Tier", "Pitch", "Contact", "City", "Type"]
df = df[columns]

# Create Excel writer with formatting
try:
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Sponsors')
        
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

except Exception as e:
    print(f"Error creating file: {e}")
