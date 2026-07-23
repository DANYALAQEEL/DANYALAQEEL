import zipfile
import os

acme_file = r'C:\Users\Administrator\.gemini\antigravity\scratch\AcmeLab12-503823\simple-pf.acme'
with open(acme_file, 'r') as f:
    content = f.read()

old_str = '''    Component Sink : FileSystemSinkT = new FileSystemSinkT extended with {
        Port input : FilterInputPortT = new FilterInputPortT extended with {

        }

    }'''

new_str = '''    Component Sink : FileSystemSinkT = new FileSystemSinkT extended with {
        Port input : FilterInputPortT = new FilterInputPortT extended with {

        }
        Property path = "/home/user/processed.tar.zip";
    }'''

content = content.replace(old_str, new_str)
with open(acme_file, 'w') as f:
    f.write(content)

old_dir = r'C:\Users\Administrator\.gemini\antigravity\scratch\AcmeLab12-503823'
new_dir = r'C:\Users\Administrator\.gemini\antigravity\scratch\AcmeLab1-503823'
if os.path.exists(old_dir):
    os.rename(old_dir, new_dir)

final_zip = r'C:\Users\Administrator\Downloads\AcmeLab1-503823.zip'
user_docx_path = r'C:\Users\Administrator\.gemini\antigravity\scratch\DANYAL AQEEL_503823_Lab_12.docx'

if os.path.exists(final_zip):
    os.remove(final_zip)

with zipfile.ZipFile(final_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
    zipf.write(user_docx_path, os.path.basename(user_docx_path))
    for root, dirs, files in os.walk(new_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, r'C:\Users\Administrator\.gemini\antigravity\scratch')
            zipf.write(file_path, arcname)

print('Success')
