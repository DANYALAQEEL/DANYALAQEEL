import os
import hashlib
import json
import sys

def get_file_hash(filepath, full=False):
    """Compute MD5 hash. If full=False, only hash the first 8KB to quickly filter."""
    hasher = hashlib.md5()
    try:
        with open(filepath, 'rb') as f:
            if not full:
                chunk = f.read(8192)
                hasher.update(chunk)
            else:
                while True:
                    chunk = f.read(65536)
                    if not chunk:
                        break
                    hasher.update(chunk)
        return hasher.hexdigest()
    except Exception:
        return None

def find_duplicates(scan_dirs, min_size=10240):
    # Map from size -> list of paths
    size_map = {}
    
    # Exclude patterns (lowercase)
    exclude_dirs = {
        '.git', '.github', 'node_modules', '.next', '.venv', 'venv', 'env', 
        '.gemini', '.cache', 'appdata\\local\\microsoft\\windows', 
        'appdata\\local\\packages', 'appdata\\local\\temp'
    }
    
    print("Scanning directories...")
    file_count = 0
    
    for scan_dir in scan_dirs:
        if not os.path.exists(scan_dir):
            print(f"Directory {scan_dir} does not exist. Skipping.")
            continue
            
        for root, dirs, files in os.walk(scan_dir):
            # Exclude directories we don't want to traverse
            # Modify dirs in-place to avoid going into excluded directories
            # For Windows, check case-insensitive match
            dirs[:] = [d for d in dirs if d.lower() not in exclude_dirs and not any(part in os.path.join(root, d).lower() for part in exclude_dirs)]
            
            for file in files:
                filepath = os.path.join(root, file)
                # Skip symlinks
                if os.path.islink(filepath):
                    continue
                try:
                    size = os.path.getsize(filepath)
                    if size >= min_size:
                        if size not in size_map:
                            size_map[size] = []
                        size_map[size].append(filepath)
                        file_count += 1
                        if file_count % 10000 == 0:
                            print(f"Found {file_count} files...")
                except (PermissionError, FileNotFoundError):
                    continue
                except Exception:
                    continue

    print(f"Finished initial scan. Total files scanned above size threshold: {file_count}")
    
    # Filter out sizes with only one file
    possible_duplicates = {size: paths for size, paths in size_map.items() if len(paths) > 1}
    print(f"Found {len(possible_duplicates)} file sizes with potential duplicates.")
    
    # Now hash first chunk
    partial_hash_map = {}
    for size, paths in possible_duplicates.items():
        for path in paths:
            phash = get_file_hash(path, full=False)
            if phash:
                key = (size, phash)
                if key not in partial_hash_map:
                    partial_hash_map[key] = []
                partial_hash_map[key].append(path)
                
    # Filter partial hashes with > 1 file
    potential_duplicates_2 = {key: paths for key, paths in partial_hash_map.items() if len(paths) > 1}
    
    # Now compute full hash for those
    full_hash_map = {}
    for (size, phash), paths in potential_duplicates_2.items():
        for path in paths:
            fhash = get_file_hash(path, full=True)
            if fhash:
                key = (size, fhash)
                if key not in full_hash_map:
                    full_hash_map[key] = []
                full_hash_map[key].append(path)
                
    # Filter full hashes with > 1 file
    duplicates = {key: paths for key, paths in full_hash_map.items() if len(paths) > 1}
    
    # Compile results
    results = []
    total_wasted_space = 0
    
    for (size, fhash), paths in duplicates.items():
        count = len(paths)
        wasted = (count - 1) * size
        total_wasted_space += wasted
        results.append({
            'size': size,
            'hash': fhash,
            'wasted_bytes': wasted,
            'paths': paths
        })
        
    # Sort by wasted space descending
    results.sort(key=lambda x: x['wasted_bytes'], reverse=True)
    
    return results, total_wasted_space

if __name__ == '__main__':
    scan_dirs = [r"C:\Users\Administrator"]
    if len(sys.argv) > 1:
        scan_dirs = sys.argv[1:]
        
    # Scan files larger than 10KB to avoid listing tiny files that don't cost significant space
    results, total_wasted = find_duplicates(scan_dirs, min_size=10240)
    
    # Print summary
    print("\n=== DUPLICATE FILES SUMMARY ===")
    print(f"Total Duplicate Groups: {len(results)}")
    print(f"Total Wasted Space: {total_wasted / (1024*1024):.2f} MB ({total_wasted} bytes)\n")
    
    # Top 30
    print("Top 30 Duplicate Groups by Wasted Space:")
    for i, group in enumerate(results[:30]):
        size_mb = group['size'] / (1024*1024)
        wasted_mb = group['wasted_bytes'] / (1024*1024)
        print(f"\n{i+1}. Size: {size_mb:.2f} MB | Wasted: {wasted_mb:.2f} MB | Count: {len(group['paths'])}")
        print("   Paths:")
        for path in group['paths']:
            print(f"     - {path}")
            
    # Write full results to JSON
    output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\duplicate_files.json"
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump({
            'total_wasted_bytes': total_wasted,
            'total_wasted_mb': total_wasted / (1024*1024),
            'groups': results
        }, f, indent=2)
    print(f"\nFull details written to {output_path}")
