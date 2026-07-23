import os

docker_path = r"C:\Users\Administrator\AppData\Local\Docker"

def scan_docker(path):
    print(f"Scanning files in {path}...")
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            try:
                size = os.path.getsize(fp)
                if size > 100 * 1024 * 1024: # Larger than 100MB
                    print(f"  {size / (1024*1024*1024):.2f} GB - {fp}")
            except Exception:
                pass

if __name__ == "__main__":
    scan_docker(docker_path)
