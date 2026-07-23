import os

paths = [
    r'C:\Users\Administrator\AppData\Roaming\JetBrains\PyCharm2025.2-backup',
    r'C:\Users\Administrator\.bun\install\cache',
    r'C:\Users\Administrator\AppData\Local\orchids-updater',
    r'C:\Users\Administrator\AppData\Local\antigravity-updater'
]

def get_dir_size(path):
    total = 0
    if not os.path.exists(path):
        return None
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            try:
                total += os.path.getsize(fp)
            except Exception:
                pass
    return total

for p in paths:
    size = get_dir_size(p)
    if size is None:
        print(f"{p} : Does not exist")
    else:
        print(f"{p} : {size / (1024*1024):.2f} MB")
