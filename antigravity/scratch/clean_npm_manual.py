import shutil
import os

npm_cache = r"C:\Users\Administrator\AppData\Local\npm-cache"

def remove_readonly(func, path, excinfo):
    import stat
    try:
        os.chmod(path, stat.S_IWRITE)
        func(path)
    except Exception as e:
        print(f"Failed to remove {path}: {e}")

if __name__ == "__main__":
    if os.path.exists(npm_cache):
        # Calculate size first
        size = 0
        for root, dirs, files in os.walk(npm_cache):
            for f in files:
                try:
                    size += os.path.getsize(os.path.join(root, f))
                except Exception:
                    pass
                    
        print(f"Deleting npm cache folder at {npm_cache} ({size / (1024*1024):.2f} MB)...")
        try:
            shutil.rmtree(npm_cache, onerror=remove_readonly)
            print("Successfully deleted npm cache!")
        except Exception as e:
            print(f"Error: {e}")
    else:
        print(f"npm cache folder does not exist at {npm_cache}")
