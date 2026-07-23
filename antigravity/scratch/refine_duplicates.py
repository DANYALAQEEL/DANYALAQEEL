import os
import json

def get_file_identity(filepath):
    """Get unique file identifier on Windows (volume index + file index)."""
    try:
        stat = os.stat(filepath)
        return (stat.st_dev, stat.st_ino)
    except Exception:
        return None

def refine_duplicates(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    refined_groups = []
    total_actual_wasted = 0
    
    for group in data['groups']:
        paths = group['paths']
        size = group['size']
        
        # Group paths by their physical file identity
        identity_map = {}
        for path in paths:
            ident = get_file_identity(path)
            if ident:
                if ident not in identity_map:
                    identity_map[ident] = []
                identity_map[ident].append(path)
        
        # If all paths are hard links to the same physical file,
        # they do not cost extra space.
        if len(identity_map) <= 1:
            # All paths point to the same physical file (or there is only 1 path left due to errors)
            continue
            
        # We have multiple distinct physical files that are duplicates of each other.
        # Wasted space is (number of distinct physical files - 1) * size.
        distinct_count = len(identity_map)
        wasted_bytes = (distinct_count - 1) * size
        total_actual_wasted += wasted_bytes
        
        # For paths, we can just group them by physical identity for display
        distinct_paths = [paths[0] for paths in identity_map.values()]
        
        refined_groups.append({
            'size': size,
            'hash': group['hash'],
            'wasted_bytes': wasted_bytes,
            'distinct_count': distinct_count,
            'identity_groups': [paths for paths in identity_map.values()]
        })
        
    refined_groups.sort(key=lambda x: x['wasted_bytes'], reverse=True)
    return refined_groups, total_actual_wasted

if __name__ == '__main__':
    json_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\duplicate_files.json"
    refined, total_wasted = refine_duplicates(json_path)
    
    print("\n=== REFINED DUPLICATE SUMMARY (EXCLUDING HARD LINKS) ===")
    print(f"Total True Duplicate Groups: {len(refined)}")
    print(f"Total True Wasted Space: {total_wasted / (1024*1024):.2f} MB ({total_wasted} bytes)\n")
    
    print("Top 25 True Duplicate Groups by Wasted Space:")
    for i, group in enumerate(refined[:25]):
        size_mb = group['size'] / (1024*1024)
        wasted_mb = group['wasted_bytes'] / (1024*1024)
        print(f"\n{i+1}. Size: {size_mb:.2f} MB | Wasted: {wasted_mb:.2f} MB | Distinct Physical Files: {group['distinct_count']}")
        print("   Physical copies (deleting all but one of these will free up space):")
        for paths in group['identity_groups']:
            # paths[0] is the main path, others in paths are hardlinks to it
            hardlink_suffix = f" (has {len(paths)-1} hardlink(s) pointing to it)" if len(paths) > 1 else ""
            print(f"     - {paths[0]}{hardlink_suffix}")
            
    # Write refined to a file
    output_path = r"C:\Users\Administrator\.gemini\antigravity\scratch\true_duplicate_files.json"
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump({
            'total_wasted_bytes': total_wasted,
            'total_wasted_mb': total_wasted / (1024*1024),
            'groups': refined
        }, f, indent=2)
    print(f"\nRefined details written to {output_path}")
