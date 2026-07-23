import subprocess
import os

def run_cmd(args):
    cmd_str = " ".join(args)
    print(f"\nExecuting: {cmd_str}")
    try:
        result = subprocess.run(args, capture_output=True, text=True, check=False)
        print("=== STDOUT ===")
        print(result.stdout)
        if result.stderr:
            print("=== STDERR ===")
            print(result.stderr)
        print(f"Finished with exit code: {result.returncode}")
    except Exception as e:
        print(f"Failed to execute command: {e}")

if __name__ == "__main__":
    print("Starting cache and docker cleanup...")
    
    # 1. Clean npm cache
    run_cmd(["npm", "cache", "clean", "--force"])
    
    # 2. Clean pip cache
    run_cmd(["pip", "cache", "purge"])
    
    # 3. Clean Docker system
    # We add --force to bypass confirmation prompts
    run_cmd(["docker", "system", "prune", "-a", "--volumes", "--force"])
    
    print("\nCleanup script finished executing.")
