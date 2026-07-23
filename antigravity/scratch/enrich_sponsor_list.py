import pandas as pd

# Paths
input_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\Corrected_Sponsor_List_v2.xlsx"
output_file = r"C:\Users\Administrator\.gemini\antigravity\scratch\Corrected_Sponsor_List_v3.xlsx"

try:
    df = pd.read_excel(input_file)
except Exception as e:
    print(f"Error reading input file: {e}")
    exit()

# Define known locations & contacts
# This dictionary maps simple keywords in 'Company' to (Location, Contact Person)
# "NSTP Tenant" implies "National Science & Technology Park, NUST H-12, Islamabad"
known_data = {
    "10Pearls": ("4th Floor, One Expressway, Gulberg Greens, Islamabad", "Zeeshan Aftab (MD) / HR Dept"),
    "Arbisoft": ("Chambers Fazl-ul-Haq Road, Blue Area, Islamabad / Lahore HQ", "Maria Azeem (Talent Lead)"),
    "Netsol": ("STP, 5-A Constitution Ave, F-5/1, Islamabad", "Khurram S. Rana (CHRO)"),
    "Systems Limited": ("Plot 21, Fazeelat Arcade, Sector G-11 Markaz, Islamabad", "Toima Asghar (Group CHRO)"),
    "Aawaz": ("NSTP, NUST H-12, Islamabad", "Dr. Seemab Latif (CEO/Founder)"), 
    "Rapidev": ("NSTP, NUST H-12, Islamabad", "Wajid Gulistan (CEO)"),
    "VisionX": ("NSTP, NUST H-12, Islamabad", "Farhan Masood (Visionary)"),
    "Xylexa": ("NSTP, NUST H-12, Islamabad", "Shahid Abbasi (CEO)"),
    "Kythertek": ("NSTP, NUST H-12, Islamabad", "Founder: NUST Algebra Alumni"),
    "Turkish Aerospace": ("NSTP, NUST H-12, Islamabad", "Sohail Sajid (Country Head)"),
    "HATO": ("NSTP, NUST H-12, Islamabad", "Paul Obers (Director)"),
    "Hitit": ("NSTP, NUST H-12, Islamabad", "Nur Gokman (CEO)"),
    "Growtech": ("NSTP, NUST H-12, Islamabad", "Faisal Bilal (CEO)"),
    "PriceOye": ("NSTP, NUST H-12, Islamabad", "Adnan Shaffi (CEO)"),
    "Aykel": ("NSTP, NUST H-12, Islamabad", "-"),
    "Zambeel": ("NSTP, NUST H-12, Islamabad", "-"),
    "Nayatel": ("73-E, GD Arcade, Fazl-ul-Haq Road, Blue Area, Islamabad", "Wahaj us Siraj (CEO)"),
    "Jazz": ("Jazz Digital Headquarters, 1-A, Kohistan Road, F-8 Markaz, Islamabad", "Aamir Ibrahim (CEO)"),
    "Telenor": ("345, Plot 55, River View Avenue, Block B, Govt Officers Colony, Islamabad", "Khurrum Ashfaque (CEO)"),
    "Ufone": ("Ufone Tower, Jinnah Avenue, Blue Area, Islamabad", "Hatim Bamtraf (CEO)"),
    "Zong": ("CMPak Complex, Plot#47, Kuri Road, Chak Shahzad, Islamabad", "Huo Junli (CEO)"),
    "PTCL": ("PTCL HQ, Sector G-8/4, Islamabad", "Hatem Bamatraf (Group CEO)"),
    "SadaPay": ("Ufone Tower, Blue Area, Islamabad (HQ)", "Brandon Timinsky (Founder)"),
    "NayaPay": ("Lakson Square, Karachi (HQ) / Islamabad Presence", "Danish A. Lakhani (CEO)"),
    "Graana": ("Amazon Mall, GT Road, Islamabad", "Shafiq Akbar (CEO)"),
    "Zameen": ("3rd Floor, Din Pavilion, Blue Area, Islamabad", "Zeeshan Ali Khan (CEO)"),
    "Cheezious": ("Faizabad / Commercial Market, Rawalpindi", "Umer Farooq (Brand Manager)"),
    "Foodpanda": ("Workspace, F-7 Markaz, Islamabad", "Muntazir Haider (CEO Pak)"),
    "Careem": ("Sector G-5, Diplomatic Enclave, Islamabad", "Imran Saleem (GM)"),
    "InDrive": ("Islamabad (Remote/Co-working)", "Roman Ermoshin (APAC Director)"),
    "Ibex": ("Plot 12, Mauve Area, G-9/4, Islamabad", "Nadim Elahi (CEO)"),
    "S&P Global": ("F-5/1, Constitution Ave, Islamabad", "Mujeeb Zahur (MD)"),
    "Teradata": ("Saudi Pak Tower, Blue Area, Islamabad", "Mehmood Ul Hassan (Country Manager)"),
    "Motive": ("Evacuee Trust Complex, F-5, Islamabad", "Shoaib Makani (CEO)"),
    "Confiz": ("Islamabad Office", "Hashim Ali (COO)"),
    "CodeNinja": ("2nd Floor, 87 West, A.K.M Fazl-ul-Haq Rd, Blue Area, Islamabad", "Sakhawat Khan (CEO)"),
    "Orbit-Ed": ("NSTP, NUST H-12, Islamabad", "Navera Waheed (Founder)"),
    "Consortia": ("638-F, Main Double Rd. NPF, Islamabad 44000", "Babar Ali (Director)"),
    "Emumba": ("2nd Floor, Plot 14-E, F-7 Markaz, Islamabad", "Safeer Khan (CEO)"),
    "DPL": ("2nd Floor, Plot 19, F-10 Markaz, Islamabad", "Syed Ahmad (CEO)"),
    "Averox": ("Software Technology Park 1, F-5/1, Islamabad", "-"),
    "Bitsol": ("2nd Floor, Plot 85, I-8/4, Islamabad", "-"),
    "Centangle": ("2nd Floor, Al-Babar Centre, F-8 Markaz, Islamabad", "-"),
    "Discretelogix": ("4th Floor, Plot 12-B, G-9 Markaz, Islamabad", "-"),
    "Ovex": ("Plot 39, Sector I-9/2, Islamabad", "Faisal Khan (CEO)"),
}

def get_enrichment(company_name):
    # Default values
    location = "Islamabad (Check Website)"
    person = "HR / Marketing Dept"
    
    # Check for keywords matches
    for key, val in known_data.items():
        if key.lower() in str(company_name).lower():
            location = val[0]
            person = val[1]
            break
            
    # Heuristic for others:
    if "NSTP" in location:
        location = "IN NUST: NSTP, H-12 Campus"
    
    return pd.Series([location, person])

# Apply enrichment
df[["Exact Location", "Contact Person"]] = df["Company"].apply(get_enrichment)

# Reorder columns
cols = ["Company", "Industry", "Website", "Tier", "Pitch", "Contact", "Contact Person", "Exact Location", "City", "Type"]
df = df[cols]

# Save
try:
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Sponsors')
        
        workbook = writer.book
        worksheet = writer.sheets['Sponsors']
        
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
