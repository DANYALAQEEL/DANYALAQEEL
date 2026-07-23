import os
import sys

def get_dir_size(path, depth=0, max_depth=25, visited=None):
    if visited is None:
        visited = set()
        
    if depth > max_depth:
        return 0
        
    total = 0
    try:
        real_path = os.path.realpath(path)
        if real_path in visited:
            return 0
        visited.add(real_path)
    except Exception:
        pass

    try:
        for entry in os.scandir(path):
            try:
                if entry.is_symlink():
                    continue
                if entry.is_dir(follow_symlinks=False):
                    total += get_dir_size(entry.path, depth + 1, max_depth, visited)
                elif entry.is_file(follow_symlinks=False):
                    total += entry.stat().st_size
            except Exception:
                continue
    except Exception:
        pass
    return total

def analyze_disk():
    print("Starting disk analysis of C:\\... (safely handling nested folders and symlinks)")
    
    # 1. Analyze C:\ root folders
    root_dirs = []
    root_files_size = 0
    try:
        for entry in os.scandir("C:\\"):
            if entry.is_dir(follow_symlinks=False):
                # Skip System Volume Information and Recovery
                if entry.name.lower() in ["system volume information", "recovery", "$recycle.bin"]:
                    continue
                root_dirs.append(entry.path)
            elif entry.is_file(follow_symlinks=False):
                try:
                    root_files_size += entry.stat().st_size
                except Exception:
                    pass
    except Exception as e:
        print(f"Error reading C:\\ root: {e}")
        return

    # Calculate sizes of C:\ root folders
    root_sizes = []
    for d in root_dirs:
        print(f"Measuring root folder: {d} ...")
        size = get_dir_size(d)
        root_sizes.append((d, size))
    root_sizes.append(("C:\\ (Root Files like pagefile.sys, hiberfil.sys)", root_files_size))
    root_sizes.sort(key=lambda x: x[1], reverse=True)

    print("\n=== C:\\ ROOT LEVEL BREAKDOWN ===")
    for path, size in root_sizes:
        if size > 0:
            print(f"  {size / (1024*1024*1024):.2f} GB - {path}")

    # 2. Drill down into C:\Users
    users_path = "C:\\Users"
    if os.path.exists(users_path):
        print(f"\nDrilling down into {users_path}...")
        user_dirs = []
        for entry in os.scandir(users_path):
            if entry.is_dir(follow_symlinks=False):
                user_dirs.append(entry.path)
        
        user_sizes = []
        for d in user_dirs:
            size = get_dir_size(d)
            user_sizes.append((d, size))
        user_sizes.sort(key=lambda x: x[1], reverse=True)
        
        print("\n=== C:\\Users BREAKDOWN ===")
        for path, size in user_sizes:
            if size > 0:
                print(f"  {size / (1024*1024*1024):.2f} GB - {path}")

    # 3. Drill down into C:\Users\Administrator (the main active user)
    admin_path = "C:\\Users\\Administrator"
    if os.path.exists(admin_path):
        print(f"\nDrilling down into {admin_path}...")
        admin_dirs = []
        for entry in os.scandir(admin_path):
            if entry.is_dir(follow_symlinks=False):
                admin_dirs.append(entry.path)
                
        admin_sizes = []
        for d in admin_dirs:
            size = get_dir_size(d)
            admin_sizes.append((d, size))
        admin_sizes.sort(key=lambda x: x[1], reverse=True)
        
        print("\n=== C:\\Users\\Administrator BREAKDOWN ===")
        for path, size in admin_sizes:
            if size > 0:
                print(f"  {size / (1024*1024*1024):.2f} GB - {path}")

        # 4. Drill down into AppData (usually the largest hidden space user)
        appdata_path = os.path.join(admin_path, "AppData")
        if os.path.exists(appdata_path):
            print(f"\nDrilling down into {appdata_path}...")
            appdata_subdirs = []
            for sub in ["Local", "Roaming", "LocalLow"]:
                sub_path = os.path.join(appdata_path, sub)
                if os.path.exists(sub_path):
                    for entry in os.scandir(sub_path):
                        if entry.is_dir(follow_symlinks=False):
                            appdata_subdirs.append(entry.path)
            
            appdata_sizes = []
            for d in appdata_subdirs:
                size = get_dir_size(d)
                appdata_sizes.append((d, size))
            appdata_sizes.sort(key=lambda x: x[1], reverse=True)
            
            print("\n=== AppData LARGEST SUBDIRECTORIES (Top 15) ===")
            for path, size in appdata_sizes[:15]:
                if size > 0:
                    print(f"  {size / (1024*1024*1024):.2f} GB - {path}")

if __name__ == "__main__":
    analyze_disk()
