import os
import shutil
import subprocess

targets = [
    {
        "name": "PyCharm Backup Folder",
        "path": r"C:\Users\Administrator\AppData\Roaming\JetBrains\PyCharm2025.2-backup",
        "type": "directory"
    },
    {
        "name": "Orchids Updater Cache",
        "path": r"C:\Users\Administrator\AppData\Local\orchids-updater",
        "type": "contents"
    },
    {
        "name": "Antigravity Updater Cache",
        "path": r"C:\Users\Administrator\AppData\Local\antigravity-updater",
        "type": "contents"
    }
]

def remove_readonly(func, path, excinfo):
    """Clear the read-only bit and retry path removal."""
    import stat
    try:
        os.chmod(path, stat.S_IWRITE)
        func(path)
    except Exception as e:
        print(f"Failed to remove {path} even after changing permissions: {e}")

def delete_path(path, delete_contents_only=False):
    freed_bytes = 0
    if not os.path.exists(path):
        return 0
        
    # Calculate size first
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            try:
                freed_bytes += os.path.getsize(fp)
            except Exception:
                pass

    try:
        if delete_contents_only:
            for item in os.listdir(path):
                item_path = os.path.join(path, item)
                if os.path.isdir(item_path):
                    shutil.rmtree(item_path, onerror=remove_readonly)
                else:
                    try:
                        os.chmod(item_path, 0o777)
                        os.remove(item_path)
                    except Exception as e:
                        print(f"Could not remove file {item_path}: {e}")
        else:
            shutil.rmtree(path, onerror=remove_readonly)
        print(f"Successfully cleaned: {path}")
        return freed_bytes
    except Exception as e:
        print(f"Error cleaning {path}: {e}")
        return 0

def clean_bun_cache():
    print("Running 'bun pm cache clean'...")
    try:
        # Measure size before
        bun_cache_path = r"C:\Users\Administrator\.bun\install\cache"
        size_before = 0
        if os.path.exists(bun_cache_path):
            for root, dirs, files in os.walk(bun_cache_path):
                for f in files:
                    try:
                        size_before += os.path.getsize(os.path.join(root, f))
                    except Exception:
                        pass
        
        result = subprocess.run(["bun", "pm", "cache", "clean"], capture_output=True, text=True, check=True)
        print(result.stdout)
        
        # Verify if cleaned or manually delete remaining if any
        if os.path.exists(bun_cache_path):
            delete_path(bun_cache_path, delete_contents_only=True)
            
        return size_before
    except Exception as e:
        print(f"Could not run 'bun pm cache clean': {e}. Attempting manual deletion of cache folder...")
        return delete_path(r"C:\Users\Administrator\.bun\install\cache")

if __name__ == "__main__":
    total_freed = 0
    
    # 1. Clean Bun Cache
    total_freed += clean_bun_cache()
    
    # 2. Clean other targets
    for target in targets:
        print(f"Cleaning {target['name']}...")
        if target['type'] == 'contents':
            total_freed += delete_path(target['path'], delete_contents_only=True)
        else:
            total_freed += delete_path(target['path'], delete_contents_only=False)
            
    print(f"\n=== CLEANUP COMPLETED ===")
    print(f"Total space freed: {total_freed / (1024*1024):.2f} MB ({total_freed} bytes)")
