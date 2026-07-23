import re
import sys

def main():
    with open('raw_extracted/chapter_6_raw.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    # Find all occurrences of Figure 6.something
    matches = re.finditer(r'Figure 6\.\d+', text)
    
    output = []
    for match in matches:
        fig_name = match.group()
        start_idx = max(0, match.start() - 150)
        end_idx = min(len(text), match.end() + 150)
        snippet = text[start_idx:end_idx].replace('\n', ' ')
        output.append(f"{fig_name} (around index {match.start()}):\n... {snippet} ...\n")
        
    with open('scratch/figures_in_text.txt', 'w', encoding='utf-8') as f_out:
        f_out.write('\n'.join(output))
    print(f"Saved {len(output)} figure matches to scratch/figures_in_text.txt")

if __name__ == "__main__":
    main()
