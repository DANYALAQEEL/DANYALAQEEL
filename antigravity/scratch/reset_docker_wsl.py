import subprocess
import os
import time

vhdx_path = r"C:\Users\Administrator\AppData\Local\Docker\wsl\disk\docker_data.vhdx"

def shutdown_wsl():
    print("Shutting down WSL to release file locks...")
    try:
        result = subprocess.run(["wsl", "--shutdown"], capture_output=True, text=True, check=True)
        print("WSL shut down successfully.")
    except Exception as e:
        print(f"Error shutting down WSL: {e}")

def delete_vhdx():
    if not os.path.exists(vhdx_path):
        print(f"File not found: {vhdx_path}")
        return 0
        
    try:
        size = os.path.getsize(vhdx_path)
    except Exception:
        size = 53.4 * 1024 * 1024 * 1024 # fallback estimate

    print(f"Attempting to delete {vhdx_path} ({size / (1024*1024*1024):.2f} GB)...")
    
    # Retry loop in case WSL is still releasing the lock
    for attempt in range(5):
        try:
            os.remove(vhdx_path)
            print("Successfully deleted the Docker VHDX file!")
            return size
        except PermissionError:
            print(f"File is locked (Attempt {attempt + 1}/5). Waiting 3 seconds...")
            time.sleep(3)
        except Exception as e:
            print(f"Unexpected error: {e}")
            break
            
    print("Could not delete the file. Please make sure Docker Desktop is fully closed in your system tray.")
    return 0

if __name__ == "__main__":
    shutdown_wsl()
    # Wait a moment for processes to exit
    time.sleep(2)
    freed = delete_vhdx()
    if freed > 0:
        print(f"\n=== SUCCESS ===")
        print(f"Reclaimed {freed / (1024*1024*1024):.2f} GB of SSD space!")
