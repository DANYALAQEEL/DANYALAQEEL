#!/usr/bin/env python3
"""
================================================================================
UNIVERSAL MULTI-DRIVE READ-ONLY DISK & SYSTEM SPACE INSPECTOR
================================================================================
Author: Antigravity AI Engine (for DANYALAQEEL)
License: MIT (Free to Share & Run Anywhere)
Safety: 100% Strictly Read-Only (Uses Standard Library `os`, `shutil`, `time`, `string`)
Zero Dependencies: No `pip install` required! Works out-of-the-box on Python 3.7+
Supports: Single & Multiple Disks (C:\, D:\, E:\, /Volumes, /mnt) on Windows, Mac, Linux
================================================================================
"""

import os
import string
import shutil
import time
import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

def format_size(bytes_val):
    if bytes_val >= 1024**3:
        return f"{bytes_val / (1024**3):.2f} GB"
    elif bytes_val >= 1024**2:
        return f"{bytes_val / (1024**2):.1f} MB"
    else:
        return f"{bytes_val / 1024:.1f} KB"

def detect_all_drives():
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
                for item in os.listdir(mount_root):
                    full_p = os.path.join(mount_root, item)
                    if os.path.isdir(full_p):
                        drives.append(full_p)
    return drives

def classify_file(path):
    path_lower = path.lower()
    if ".vhdx" in path_lower or "docker" in path_lower or "wsl" in path_lower:
        return "Docker / WSL Virtual Disks"
    elif ".bun" in path_lower or "npm-cache" in path_lower or "pnpm" in path_lower or "pip\\cache" in path_lower or ".cargo" in path_lower:
        return "Package Manager Caches"
    elif "huggingface" in path_lower or "torch" in path_lower or "transformers" in path_lower:
        return "AI Model Caches"
    elif "pycharm" in path_lower and "backup" in path_lower:
        return "IDE Update Backups"
    elif "updater" in path_lower:
        return "Application Updater Caches"
    elif "appdata\\local\\temp" in path_lower or "windows\\temp" in path_lower or "/tmp" in path_lower:
        return "System & User Temp Files"
    elif ".gemini" in path_lower:
        return "Antigravity Engine Data"
    elif "downloads" in path_lower:
        return "User Downloads"
    elif "desktop" in path_lower:
        return "Desktop Files & Repos"
    elif "documents" in path_lower:
        return "Documents"
    else:
        return "Other Files"

def scan_directory_tree(target_dir):
    large_files = []
    category_totals = {}
    total_bytes = 0

    try:
        for root, dirs, files in os.walk(target_dir):
            if "Application Data" in root and "AppData" in root:
                continue
            for f in files:
                full_path = os.path.join(root, f)
                try:
                    st = os.stat(full_path)
                    sz = st.st_size
                    total_bytes += sz
                    
                    cat = classify_file(full_path)
                    category_totals[cat] = category_totals.get(cat, 0) + sz

                    if sz >= 100 * 1024 * 1024:  # >= 100 MB
                        mtime = datetime.datetime.fromtimestamp(st.st_mtime).strftime('%Y-%m-%d')
                        large_files.append((sz, full_path, cat, mtime))
                except (PermissionError, FileNotFoundError, OSError):
                    continue
    except Exception:
        pass

    return total_bytes, category_totals, large_files

def run_multi_drive_disk_inspection():
    print("=" * 80)
    print("[SCANNER] UNIVERSAL MULTI-DRIVE READ-ONLY DISK & SYSTEM SPACE INSPECTOR")
    print("=" * 80)
    
    start_time = time.time()

    # Automatically detect current user's home directory dynamically
    user_home = os.path.expanduser("~")
    user_name = os.path.basename(user_home)
    print(f"  * Detected Active User Profile: {user_home} ({user_name})")

    # 1. Multi-Drive Overview
    detected_drives = detect_all_drives()
    print(f"\n--- DETECTED DISK DRIVES & STORAGE OVERVIEW ({len(detected_drives)} Drive(s) Found) ---")
    print("-" * 80)
    for drv in detected_drives:
        try:
            total_disk, used_disk, free_disk = shutil.disk_usage(drv)
            pct_used = (used_disk / total_disk * 100) if total_disk > 0 else 0
            pct_free = (free_disk / total_disk * 100) if total_disk > 0 else 0
            print(f"  * Drive [{drv:<5}] Total: {format_size(total_disk):<10} | Used: {format_size(used_disk):<10} ({pct_used:.1f}%) | Free: {format_size(free_disk):<10} ({pct_free:.1f}%)")
        except Exception:
            print(f"  * Drive [{drv:<5}] [Drive Connected - Access Restricted or Optical/Unformatted]")

    # Dynamically build scan targets for any user on any machine across detected drives
    scan_roots = [
        os.path.join(user_home, "AppData") if os.name == 'nt' else os.path.join(user_home, ".config"),
        os.path.join(user_home, "Downloads"),
        os.path.join(user_home, "Desktop"),
        os.path.join(user_home, "Documents"),
        os.path.join(user_home, ".bun"),
        os.path.join(user_home, ".cargo"),
        os.path.join(user_home, ".gemini"),
    ]

    # Include secondary drive root folders if additional drives exist (e.g. D:\, E:\)
    for drv in detected_drives:
        if drv != "C:\\" and drv != "/":
            scan_roots.append(drv)

    if os.name == 'nt':
        scan_roots.extend([r"C:\ProgramData", r"C:\Windows\Temp"])

    all_large_files = []
    aggregated_categories = {}

    print(f"\nParallel scanning {len(scan_roots)} user & system paths across all connected drives...")

    with ThreadPoolExecutor(max_workers=6) as executor:
        future_to_root = {executor.submit(scan_directory_tree, root): root for root in scan_roots if os.path.exists(root)}
        for future in as_completed(future_to_root):
            root_path = future_to_root[future]
            try:
                tot_bytes, cat_map, heavy_files = future.result()
                all_large_files.extend(heavy_files)
                for cat, sz in cat_map.items():
                    aggregated_categories[cat] = aggregated_categories.get(cat, 0) + sz
            except Exception:
                pass

    elapsed = time.time() - start_time
    print(f"[OK] Multi-threaded multi-drive scan completed in {elapsed:.2f} seconds.\n")

    # Display Category Breakdown
    print("=" * 80)
    print("CATEGORY BREAKDOWN & STORAGE DISTRIBUTION")
    print("=" * 80)
    sorted_cats = sorted(aggregated_categories.items(), key=lambda x: x[1], reverse=True)
    for cat, sz in sorted_cats:
        print(f"  * {cat:<35} : {format_size(sz)}")

    # Deduplicate & Sort Heavyweight Files
    unique_heavy = {p: (sz, cat, mtime) for sz, p, cat, mtime in all_large_files}
    sorted_heavy = sorted([(sz, p, cat, mtime) for p, (sz, cat, mtime) in unique_heavy.items()], key=lambda x: x[0], reverse=True)

    print("\n" + "=" * 80)
    print("TOP HEAVYWEIGHT INDIVIDUAL FILES (> 100 MB)")
    print("=" * 80)
    if sorted_heavy:
        for idx, (sz, p, cat, mtime) in enumerate(sorted_heavy[:25], 1):
            print(f" {idx:2d}. [{format_size(sz):>9}] [{mtime}] [{cat}]")
            print(f"     Path: {p}")
    else:
        print("  No individual files over 100 MB found.")

    print("\n" + "=" * 80)
    print("RECOMMENDED SAFE CLEANUP OPPORTUNITIES")
    print("=" * 80)
    reclaimable = 0
    if "Package Manager Caches" in aggregated_categories:
        sz = aggregated_categories["Package Manager Caches"]
        reclaimable += sz
        print(f"  * Clear Package Manager Caches (Bun/npm/pip) : {format_size(sz)}")
    if "IDE Update Backups" in aggregated_categories:
        sz = aggregated_categories["IDE Update Backups"]
        reclaimable += sz
        print(f"  * Remove Old IDE Update Backups              : {format_size(sz)}")
    if "Application Updater Caches" in aggregated_categories:
        sz = aggregated_categories["Application Updater Caches"]
        reclaimable += sz
        print(f"  * Delete Application Updater Binaries        : {format_size(sz)}")
    
    print(f"\n  [TARGET] Total Instantly Reclaimable Storage : {format_size(reclaimable)}")

    print("\n" + "=" * 80)
    print("SCAN SAFETY: 100% STRICTLY READ-ONLY (0 System State Modifications)")
    print("=" * 80)

if __name__ == "__main__":
    run_multi_drive_disk_inspection()
