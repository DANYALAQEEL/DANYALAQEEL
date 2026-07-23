import os
import re

def search_files(directory, pattern):
    compiled_pattern = re.compile(pattern, re.IGNORECASE)
    matches = []
    
    for root, dirs, files in os.walk(directory):
        if "node_modules" in dirs:
            dirs.remove("node_modules")
        if ".git" in dirs:
            dirs.remove(".git")
            
        for file in files:
            if file.endswith((".jsx", ".js", ".css", ".html")):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        for line_num, line in enumerate(f, 1):
                            if compiled_pattern.search(line):
                                matches.append((path, line_num, line.strip()))
                except Exception as e:
                    pass
    return matches

if __name__ == "__main__":
    print("--- Searching for Terminals chart ---")
    results1 = search_files("C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\ems-dashboard-final\\src", "Percentage breakdown of online")
    for r in results1:
        print(f"File: {r[0]} | Line {r[1]}: {r[2]}")
        
    print("\n--- Searching for Alerts panel ---")
    results2 = search_files("C:\\Users\\Administrator\\.gemini\antigravity\\scratch\\ems-dashboard-final\\src", "Acknowledging alerts")
    for r in results2:
        print(f"File: {r[0]} | Line {r[1]}: {r[2]}")
