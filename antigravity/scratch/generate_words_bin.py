import struct
import os
from pathlib import Path

DATA_DIR = Path(r"c:\Users\Administrator\Downloads\new modification 3.0\search-engine-prototype\backend_production\data")
LEXICON_FILE = DATA_DIR / "lexicon.bin"
WORDS_FILE = DATA_DIR / "words.bin"

def read_u32(f): return struct.unpack('<I', f.read(4))[0]
def read_u16(f): return struct.unpack('<H', f.read(2))[0]

def write_u32(f, val): f.write(struct.pack('<I', val))

def generate_words_bin():
    if not LEXICON_FILE.exists():
        print("Lexicon file not found!")
        return

    print("Reading lexicon...")
    words = []
    with open(LEXICON_FILE, "rb") as f:
        try:
            count = read_u32(f)
            print(f"Total words in lexicon: {count}")
            
            for i in range(count):
                wid = read_u32(f)
                wlen = read_u16(f)
                word_bytes = f.read(wlen)
                words.append(word_bytes)
                
                if i % 100000 == 0:
                    print(f"Processed {i} words...", end='\r')
                    
        except Exception as e:
            print(f"Error reading lexicon: {e}")
            return

    print(f"\nCollected {len(words)} words.")
    
    print(f"Writing to {WORDS_FILE}...")
    with open(WORDS_FILE, "wb") as f:
        # Write count
        write_u32(f, len(words))
        
        for w_bytes in words:
            # Write length (u32)
            write_u32(f, len(w_bytes))
            # Write bytes
            f.write(w_bytes)
            
    print("Done! words.bin generated.")

if __name__ == "__main__":
    generate_words_bin()
