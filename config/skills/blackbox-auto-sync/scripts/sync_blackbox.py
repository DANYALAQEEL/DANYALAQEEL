import os
import shutil
import subprocess
import datetime
import sys
from export_chat_history import export_all_chats

def sync():
    base_dir = r"C:\Users\Administrator\.gemini"
    print(f"[{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Starting Antigravity-Blackbox Auto-Sync & Chat Backup...")

    # 0. Export full chat transcript history into Markdown files
    try:
        export_all_chats()
    except Exception as e:
        print(f"Warning during chat export: {e}")

    # 1. Clean nested .git folders/files in scratch to prevent submodule lock issues
    scratch_dir = os.path.join(base_dir, "antigravity", "scratch")
    if os.path.exists(scratch_dir):
        for root, dirs, files in os.walk(scratch_dir):
            if ".git" in dirs:
                git_path = os.path.join(root, ".git")
                shutil.rmtree(git_path, ignore_errors=True)
                dirs.remove(".git")
            elif ".git" in files:
                git_file = os.path.join(root, ".git")
                try:
                    os.remove(git_file)
                except Exception:
                    pass

    # 2. Clear index lock if present
    lock_file = os.path.join(base_dir, ".git", "index.lock")
    if os.path.exists(lock_file):
        try:
            os.remove(lock_file)
        except Exception:
            pass

    # 3. Fetch GitHub OAuth token via gh CLI
    try:
        token = subprocess.check_output(["gh", "auth", "token"], text=True).strip()
    except Exception as e:
        print(f"Error fetching gh auth token: {e}")
        return

    remote_url = f"https://DANYALAQEEL:{token}@github.com/DANYALAQEEL/Antigravity-Blackbox.git"

    # 4. Stage monitored tracking paths including chat_history/
    items_to_add = [".gitignore", "GEMINI.md", "chat_history/", "config/", "antigravity/mcp/", "antigravity/scratch/"]
    for item in items_to_add:
        item_path = os.path.join(base_dir, item)
        if os.path.exists(item_path):
            subprocess.run(["git", "add", item], cwd=base_dir, capture_output=True)

    # 5. Check if there are staged changes to commit
    status_res = subprocess.run(["git", "status", "--porcelain"], cwd=base_dir, capture_output=True, text=True)
    if not status_res.stdout.strip():
        print("No new changes or chat history updates detected. Repository is up to date.")
    else:
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        commit_msg = f"Auto-sync Antigravity-Blackbox & Chat History: {timestamp}"
        subprocess.run(["git", "commit", "-m", commit_msg], cwd=base_dir, capture_output=True)
        print(f"Committed updates: '{commit_msg}'")

    # 6. Push to remote repository
    print("Pushing updates and full chat backups to GitHub...")
    push_res = subprocess.run(["git", "push", remote_url, "main", "--force"], cwd=base_dir, capture_output=True, text=True)
    if push_res.returncode == 0:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        print("[SUCCESS] Antigravity-Blackbox auto-sync & Chat History backup completed successfully!")
    else:
        print(f"Push output: {push_res.stderr or push_res.stdout}")

if __name__ == "__main__":
    sync()
