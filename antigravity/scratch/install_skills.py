import os
import shutil
import json

src_dir = r"C:\Users\Administrator\.gemini\antigravity\scratch\ui-ux-pro-max-skill\.claude\skills"
dst_dir = r"C:\Users\Administrator\.gemini\config\skills"
manifest_path = os.path.join(dst_dir, ".antigravity-install-manifest.json")

def resolve_and_copy(src, dst):
    """
    Copy src to dst. Resolves symlinks and git-style symlink text files.
    """
    # Check if src is a real symlink
    if os.path.islink(src):
        real_src = os.readlink(src)
        # Handle relative symlink target
        if not os.path.isabs(real_src):
            real_src = os.path.normpath(os.path.join(os.path.dirname(src), real_src))
        src = real_src

    # Check if src is a directory
    if os.path.isdir(src):
        os.makedirs(dst, exist_ok=True)
        for item in os.listdir(src):
            resolve_and_copy(os.path.join(src, item), os.path.join(dst, item))
        return

    # Check if src is a git-style symlink file
    is_git_symlink = False
    target_path = None
    if os.path.isfile(src) and os.path.getsize(src) < 1000:
        try:
            with open(src, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                if content.startswith(('../', '..\\', 'src/')):
                    # Resolve relative to the file's directory
                    test_path = os.path.normpath(os.path.join(os.path.dirname(src), content))
                    if os.path.exists(test_path):
                        is_git_symlink = True
                        target_path = test_path
        except Exception:
            pass

    if is_git_symlink:
        print(f"Resolving git-style symlink: {src} -> {target_path}")
        resolve_and_copy(target_path, dst)
    else:
        # Normal file copy
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        try:
            shutil.copy2(src, dst)
        except Exception as e:
            print(f"Error copying {src} to {dst}: {e}")

def main():
    new_skills = []
    
    if not os.path.exists(src_dir):
        print(f"Source directory {src_dir} does not exist!")
        return

    for skill_name in os.listdir(src_dir):
        skill_src = os.path.join(src_dir, skill_name)
        if not os.path.isdir(skill_src):
            continue
            
        skill_dst = os.path.join(dst_dir, skill_name)
        print(f"Installing skill: {skill_name}")
        resolve_and_copy(skill_src, skill_dst)
        new_skills.append(skill_name)
        
    # Update manifest
    if os.path.exists(manifest_path):
        try:
            with open(manifest_path, 'r', encoding='utf-8') as f:
                manifest = json.load(f)
        except Exception as e:
            print(f"Error reading manifest: {e}")
            manifest = {"schemaVersion": 1, "entries": []}
            
        if "entries" not in manifest:
            manifest["entries"] = []
            
        updated = False
        for ns in new_skills:
            if ns not in manifest["entries"]:
                manifest["entries"].append(ns)
                updated = True
                
        if updated:
            manifest["entries"].sort()
            with open(manifest_path, 'w', encoding='utf-8') as f:
                json.dump(manifest, f, indent=2)
            print("Successfully updated .antigravity-install-manifest.json")
        else:
            print("Skills already registered in manifest.")
    else:
        print(f"Manifest not found at {manifest_path}. Skipping manifest update.")

if __name__ == '__main__':
    main()
