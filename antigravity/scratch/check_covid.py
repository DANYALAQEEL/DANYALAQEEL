import struct
import os
from pathlib import Path

DATA_DIR = Path(r"c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype\backend_production\data")
LEXICON_FILE = DATA_DIR / "lexicon.bin"
NUM_BARRELS = 4

def read_u32(f): return struct.unpack('<I', f.read(4))[0]
def read_u16(f): return struct.unpack('<H', f.read(2))[0]

def check_word(target_word):
    if not LEXICON_FILE.exists():
        print("Lexicon file not found!")
        return

    print(f"Scanning lexicon for '{target_word}'...")
    with open(LEXICON_FILE, "rb") as f:
        try:
            count = read_u32(f)
        except Exception:
            print("Failed to read count. File might be empty or corrupt.")
            return

        print(f"Total words in lexicon: {count}")
        
        for i in range(count):
            try:
                wid = read_u32(f)
                wlen = read_u16(f)
                word_bytes = f.read(wlen)
                word = word_bytes.decode('utf-8', errors='ignore')
                
                if word == target_word:
                    barrel_id = wid % NUM_BARRELS
                    print(f"FOUND: '{word}' -> ID: {wid}")
                    print(f"Maps to Barrel: {barrel_id}")
                    if barrel_id != 0:
                        print("â Œ PROBLEM: This word is in a missing barrel (1, 2, or 3).")
                    else:
                        print("âœ… OK: This word is in Barrel 0 (which you pushed).")
                    return
            except Exception as e:
                print(f"Error reading entry {i}: {e}")
                break
        
        print(f"Word '{target_word}' not found in lexicon.")

if __name__ == "__main__":
    check_word("covid")
