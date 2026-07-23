import os
import zipfile

def zip_directory(src_dir, dest_zip):
    print(f"Zipping {src_dir} to {dest_zip}...")
    with zipfile.ZipFile(dest_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(src_dir):
            # Exclude node_modules, dist, .vercel, and .git folders
            dirs[:] = [d for d in dirs if d not in ('node_modules', 'dist', '.vercel', '.git')]
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, src_dir)
                zipf.write(file_path, arcname)
    print("Done zipping.")

if __name__ == "__main__":
    src = "C:/Users/Administrator/.gemini/antigravity/scratch/ems-dashboard-final"
    dest1 = "C:/Users/Administrator/.gemini/antigravity/scratch/ems-dashboard-final.zip"
    dest2 = "C:/Users/Administrator/Downloads/ems-dashboard-final.zip"
    
    # Ensure destination directories exist
    os.makedirs(os.path.dirname(dest1), exist_ok=True)
    os.makedirs(os.path.dirname(dest2), exist_ok=True)
    
    zip_directory(src, dest1)
    zip_directory(src, dest2)
