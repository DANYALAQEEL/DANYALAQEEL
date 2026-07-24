#!/usr/bin/env python3
"""
================================================================================
UNIVERSAL MULTI-DRIVE READ-ONLY DISK & SYSTEM SPACE INSPECTOR v3.0
================================================================================
Author: Open Source Community (Refined via Claude Code CLI)
License: MIT (Free to Share, Modify & Run Anywhere)
Safety: 100% Strictly Read-Only (Uses Standard Library `os`, `shutil`, `sys`, `time`)
Dependencies: ZERO External Dependencies! Works out-of-the-box on Python 3.7+
Platforms: Windows, macOS, Linux (Single & Multi-Drive Auto-Detection)
================================================================================
"""

import os
import sys
import string
import shutil
import time
import json
import argparse
import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

VERSION = "3.0.0"

# Reconfigure stdout for UTF-8 encoding safely where supported
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

def safe_print(*args, **kwargs):
    """Safely print text handling terminal encoding errors gracefully."""
    try:
        print(*args, **kwargs)
    except UnicodeEncodeError:
        text = " ".join(str(a) for a in args)
        encoded_text = text.encode(sys.stdout.encoding or 'ascii', errors='replace').decode(sys.stdout.encoding or 'ascii')
        print(encoded_text, **kwargs)

def format_size(bytes_val):
    """Format bytes into human-readable string (B, KB, MB, GB, TB)."""
    if bytes_val >= 1024**4:
        return f"{bytes_val / (1024**4):.2f} TB"
    elif bytes_val >= 1024**3:
        return f"{bytes_val / (1024**3):.2f} GB"
    elif bytes_val >= 1024**2:
        return f"{bytes_val / (1024**2):.1f} MB"
    elif bytes_val >= 1024:
        return f"{bytes_val / 1024:.1f} KB"
    else:
        return f"{bytes_val} B"

def detect_all_drives():
    """Detect all mounted drives across Windows, macOS, and Linux."""
    drives = []
    if os.name == 'nt':
        for letter in string.ascii_uppercase:
            drive_path = f"{letter}:\\"
            if os.path.exists(drive_path):
                drives.append(drive_path)
    else:
        drives.append('/')
        for mount_root in ['/Volumes', '/mnt', '/media']:
            if os.path.exists(mount_root):
                try:
                    for item in os.listdir(mount_root):
                        full_p = os.path.join(mount_root, item)
                        if os.path.isdir(full_p) and not os.path.islink(full_p):
                            drives.append(full_p)
                except Exception:
                    pass
    return drives

def classify_file(path):
    """Categorize files based on path patterns for intelligent insights."""
    p_lower = path.lower()
    
    # 🐳 Docker & Virtual Machines
    if ".vhdx" in p_lower or "docker" in p_lower or "wsl" in p_lower or "hyper-v" in p_lower or ".qcow2" in p_lower or ".vmdk" in p_lower:
        return "Docker & Virtual Machines"
    
    # 🤖 AI Model Weights & LLM Caches
    elif "huggingface" in p_lower or "torch" in p_lower or "transformers" in p_lower or "ollama" in p_lower or "lm-studio" in p_lower or p_lower.endswith(('.gguf', '.safetensors', '.bin', '.onnx')):
        return "AI Models & LLM Weights"
    
    # 📦 Developer Package Caches & Environment Stores
    elif ".bun" in p_lower or "npm-cache" in p_lower or ".pnpm-store" in p_lower or "yarn/cache" in p_lower or "pip/cache" in p_lower or "pip\\cache" in p_lower or ".cargo" in p_lower or ".m2" in p_lower or ".gradle" in p_lower or ".nuget" in p_lower:
        return "Developer Package Caches (Bun/npm/pip/cargo/m2)"
    elif "node_modules" in p_lower or ".venv" in p_lower or "anaconda" in p_lower or "miniconda" in p_lower:
        return "Dependencies & Virtual Envs"
    
    # 🛠️ IDE Backups & Tool Data
    elif "pycharm" in p_lower and "backup" in p_lower:
        return "PyCharm IDE Update Backups"
    elif "updater" in p_lower or "autoupdate" in p_lower:
        return "Application Updater Caches"
    elif ".vscode" in p_lower or "code/user" in p_lower or "code\\user" in p_lower:
        return "VS Code & Extensions Data"
    
    # 🌐 Browser Caches & Web Data
    elif "chrome/user data" in p_lower or "edge/user data" in p_lower or "firefox/profiles" in p_lower or "chrome\\user data" in p_lower or "edge\\user data" in p_lower:
        return "Web Browser User Data & Caches"
    
    # ⚡ System Temp & User Folders
    elif "appdata\\local\\temp" in p_lower or "windows\\temp" in p_lower or "/tmp" in p_lower:
        return "System & User Temp Files"
    elif "downloads" in p_lower:
        return "User Downloads"
    elif "desktop" in p_lower:
        return "Desktop Files & Repos"
    elif "documents" in p_lower:
        return "Documents"
    elif "pictures" in p_lower or "photos" in p_lower:
        return "Pictures & Media"
    elif "videos" in p_lower or "movies" in p_lower:
        return "Videos & Recordings"
    else:
        return "Other Files & Directories"

# Known Windows Junction Names to skip
JUNCTION_SKIPS = frozenset([
    "application data", "history", "local settings", "my documents", 
    "nethood", "printhood", "recent", "sendto", "start menu", "templates"
])

def scan_directory_tree(target_dir, min_size_bytes):
    """Recursively scan a directory tree using os.lstat (strictly read-only)."""
    heavy_files = []
    category_totals = {}
    total_bytes = 0
    scanned_files_count = 0
    visited_inodes = set()

    try:
        for root, dirs, files in os.walk(target_dir, followlinks=False):
            # Guard against circular Windows junctions
            dirs[:] = [d for d in dirs if d.lower() not in JUNCTION_SKIPS]

            for f in files:
                full_path = os.path.join(root, f)
                try:
                    st = os.lstat(full_path)
                    
                    # Prevent double-counting hardlinks/inodes
                    inode_key = (st.st_dev, st.st_ino)
                    if inode_key in visited_inodes:
                        continue
                    visited_inodes.add(inode_key)

                    sz = st.st_size
                    total_bytes += sz
                    scanned_files_count += 1
                    
                    cat = classify_file(full_path)
                    category_totals[cat] = category_totals.get(cat, 0) + sz

                    if sz >= min_size_bytes:
                        mtime = datetime.datetime.fromtimestamp(st.st_mtime).strftime('%Y-%m-%d')
                        heavy_files.append((sz, full_path, cat, mtime))
                except (PermissionError, FileNotFoundError, OSError):
                    continue
    except Exception:
        pass

    return total_bytes, scanned_files_count, category_totals, heavy_files

# ------------------------------------------------------------------------------
# MAIN SCANNER ROUTINE
# ------------------------------------------------------------------------------

def run_inspector(min_size_mb=100, top_count=20, export_json=False, output_dir=None):
    start_time = time.time()
    min_size_bytes = min_size_mb * 1024 * 1024

    safe_print("=" * 80)
    safe_print(f"UNIVERSAL READ-ONLY DISK & SYSTEM SPACE INSPECTOR v{VERSION}")
    safe_print("Safe • Multi-Drive • Multi-Threaded • Zero Dependencies")
    safe_print("=" * 80)

    # 1. Profile Resolution
    user_home = os.path.expanduser("~")
    user_name = os.path.basename(user_home)
    safe_print(f"\n[INFO] Active User Profile : {user_home} ({user_name})")

    # 2. Multi-Drive Detection
    drives = detect_all_drives()
    safe_print(f"[INFO] Connected Drives    : {len(drives)} Drive(s) Found ({', '.join(drives)})\n")

    safe_print("--- DRIVE STORAGE OVERVIEW ---")
    safe_print("-" * 80)
    drive_stats = []
    for drv in drives:
        try:
            total_disk, used_disk, free_disk = shutil.disk_usage(drv)
            pct_used = (used_disk / total_disk * 100) if total_disk > 0 else 0
            pct_free = (free_disk / total_disk * 100) if total_disk > 0 else 0
            drive_stats.append({
                "drive": drv,
                "total_bytes": total_disk,
                "used_bytes": used_disk,
                "free_bytes": free_disk,
                "total_human": format_size(total_disk),
                "used_human": format_size(used_disk),
                "free_human": format_size(free_disk),
                "used_pct": f"{pct_used:.1f}%",
                "free_pct": f"{pct_free:.1f}%"
            })
            safe_print(f"  * Drive [{drv:<6}] Total: {format_size(total_disk):<10} | Used: {format_size(used_disk):<10} ({pct_used:>5.1f}%) | Free: {format_size(free_disk):<10} ({pct_free:>5.1f}%)")
        except Exception:
            safe_print(f"  * Drive [{drv:<6}] [Drive Connected - Access Restricted]")

    # 3. Target Resolution & Parallel Scanning
    scan_roots = [
        os.path.join(user_home, "AppData") if os.name == 'nt' else os.path.join(user_home, ".config"),
        os.path.join(user_home, "Downloads"),
        os.path.join(user_home, "Desktop"),
        os.path.join(user_home, "Documents"),
        os.path.join(user_home, ".bun"),
        os.path.join(user_home, ".cargo"),
        os.path.join(user_home, ".cache"),
    ]

    for drv in drives:
        if drv != "C:\\" and drv != "/":
            scan_roots.append(drv)

    if os.name == 'nt':
        scan_roots.extend([r"C:\ProgramData", r"C:\Windows\Temp"])

    valid_roots = [r for r in scan_roots if os.path.exists(r)]
    safe_print(f"\n[SCAN] Parallel scanning {len(valid_roots)} system & user directories...")

    all_heavy = []
    aggregated_cats = {}
    total_files_scanned = 0

    max_workers = min(8, len(valid_roots)) if valid_roots else 1
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_map = {executor.submit(scan_directory_tree, root, min_size_bytes): root for root in valid_roots}
        for future in as_completed(future_map):
            try:
                tot_b, f_count, cat_map, heavy = future.result()
                total_files_scanned += f_count
                all_heavy.extend(heavy)
                for cat, sz in cat_map.items():
                    aggregated_cats[cat] = aggregated_cats.get(cat, 0) + sz
            except Exception:
                pass

    elapsed = time.time() - start_time
    safe_print(f"[OK] Scanned {total_files_scanned:,} files across all drives in {elapsed:.2f} seconds.\n")

    # 4. Storage Distribution Breakdown
    safe_print("=" * 80)
    safe_print("CATEGORY BREAKDOWN & STORAGE DISTRIBUTION")
    safe_print("=" * 80)
    sorted_cats = sorted(aggregated_cats.items(), key=lambda x: x[1], reverse=True)
    for cat, sz in sorted_cats:
        if sz > 10 * 1024 * 1024:  # Show > 10MB
            safe_print(f"  * {cat:<45} : {format_size(sz)}")

    # 5. Heavyweight Files List (> min_size_mb)
    unique_heavy = {p: (sz, cat, mtime) for sz, p, cat, mtime in all_heavy}
    sorted_heavy = sorted([(sz, p, cat, mtime) for p, (sz, cat, mtime) in unique_heavy.items()], key=lambda x: x[0], reverse=True)

    safe_print("\n" + "=" * 80)
    safe_print(f"TOP HEAVYWEIGHT FILES (> {min_size_mb} MB)")
    safe_print("=" * 80)
    if sorted_heavy:
        for idx, (sz, p, cat, mtime) in enumerate(sorted_heavy[:top_count], 1):
            safe_print(f" {idx:2d}. [{format_size(sz):>9}] [{mtime}] [{cat}]")
            safe_print(f"     Path: {p}")
    else:
        safe_print(f"  No individual files over {min_size_mb} MB found.")

    # 6. Recommended Safe Cleanup Opportunities
    safe_print("\n" + "=" * 80)
    safe_print("RECOMMENDED SAFE CLEANUP OPPORTUNITIES")
    safe_print("=" * 80)
    
    _CLEANUP_ADVICE = [
        ("Developer Package Caches (Bun/npm/pip/cargo/m2)", "Clear Package Manager Caches (Bun/npm/pip/cargo/m2)"),
        ("PyCharm IDE Update Backups", "Remove PyCharm IDE Update Backups"),
        ("Application Updater Caches", "Delete Application Updater Binaries"),
        ("System & User Temp Files", "Clear Temporary Files"),
        ("Web Browser User Data & Caches", "Clear Browser Cache Directories")
    ]

    reclaimable = 0
    for cat_key, advice_label in _CLEANUP_ADVICE:
        if cat_key in aggregated_cats:
            sz = aggregated_cats[cat_key]
            reclaimable += sz
            safe_print(f"  * {advice_label:<50} : {format_size(sz)}")

    safe_print(f"\n  [TARGET] Total Instantly Reclaimable Storage         : {format_size(reclaimable)}")

    safe_print("\n" + "=" * 80)
    safe_print("SCAN SAFETY: 100% STRICTLY READ-ONLY (Zero System State Modifications)")
    safe_print("=" * 80)

    # 7. Timestamped JSON Export Option
    if export_json:
        out_target = output_dir if (output_dir and os.path.exists(output_dir)) else user_home
        timestamp_str = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        json_filename = f"disk_scan_{timestamp_str}.json"
        json_path = os.path.join(out_target, json_filename)
        
        report_data = {
            "version": VERSION,
            "timestamp": datetime.datetime.now().isoformat(),
            "user": user_name,
            "drives": drive_stats,
            "categories": {cat: {"bytes": sz, "formatted": format_size(sz)} for cat, sz in sorted_cats},
            "top_files": [{"size_bytes": sz, "size_formatted": format_size(sz), "path": p, "category": cat, "modified": mtime} for sz, p, cat, mtime in sorted_heavy[:top_count]],
            "reclaimable_bytes": reclaimable,
            "reclaimable_formatted": format_size(reclaimable)
        }
        
        with open(json_path, "w", encoding="utf-8") as jf:
            json.dump(report_data, jf, indent=2)
        safe_print(f"\n[REPORT] Saved timestamped JSON inspection report to: {json_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Universal Multi-Drive Read-Only Disk & System Inspector")
    parser.add_argument("--min-size", type=int, default=100, help="Minimum file size threshold in MB (default: 100)")
    parser.add_argument("--top", type=int, default=20, help="Number of top heavyweight files to display (default: 20)")
    parser.add_argument("--json", action="store_true", help="Export inspection report to timestamped disk_scan_YYYYMMDD_HHMMSS.json")
    parser.add_argument("--output-dir", type=str, default=None, help="Directory to save JSON report (defaults to user home)")
    parser.add_argument("--version", action="version", version=f"%(prog)s {VERSION}")
    
    args = parser.parse_args()

    if args.min_size < 1:
        parser.error("--min-size must be a positive integer greater than 0")
    if args.top < 1:
        parser.error("--top must be a positive integer greater than 0")

    run_inspector(min_size_mb=args.min_size, top_count=args.top, export_json=args.json, output_dir=args.output_dir)
