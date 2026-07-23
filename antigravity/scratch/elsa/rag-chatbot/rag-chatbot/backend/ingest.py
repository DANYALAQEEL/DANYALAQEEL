import os
import sqlite3
import json
import re
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY or GEMINI_API_KEY == "YOUR_FREE_GEMINI_API_KEY":
    print("WARNING: GEMINI_API_KEY is not set or using the placeholder. Please set your key in .env")

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

DB_PATH = "vector_store.db"
KNOWLEDGE_DIR = "knowledge_base"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS document_chunks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            file_name TEXT,
            chunk_index INTEGER,
            text_content TEXT,
            embedding TEXT
        )
    """)
    conn.commit()
    conn.close()

def clear_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS document_chunks")
    conn.commit()
    conn.close()

def chunk_text(text, max_chars=800, overlap=100):
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    chunks = []
    start = 0
    while start < len(text):
        end = start + max_chars
        if end >= len(text):
            chunks.append(text[start:])
            break
        
        # Try to find a good split point (space or punctuation) near the end
        split_point = text.rfind(' ', start, end)
        if split_point == -1 or split_point <= start + (max_chars // 2):
            # No good split point found, split at max_chars
            split_point = end
            
        chunks.append(text[start:split_point].strip())
        start = split_point - overlap
        
    return chunks

def get_embedding(text):
    try:
        response = genai.embed_content(
            model="models/gemini-embedding-001",
            content=text,
            task_type="retrieval_document"
        )
        return response['embedding']
    except Exception as e:
        print(f"Error generating embedding: {e}")
        return None

def run_ingestion():
    init_db()
    
    if not os.path.exists(KNOWLEDGE_DIR):
        print(f"Knowledge directory '{KNOWLEDGE_DIR}' not found. Creating it...")
        os.makedirs(KNOWLEDGE_DIR)
        return
        
    files = [f for f in os.listdir(KNOWLEDGE_DIR) if f.endswith('.txt') or f.endswith('.md')]
    if not files:
        print(f"No text or markdown files found in '{KNOWLEDGE_DIR}'. Add files to ingest.")
        return
        
    # Clear existing data for fresh ingestion
    clear_db()
    init_db()
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print(f"Found {len(files)} files to ingest.")
    
    for file_name in files:
        file_path = os.path.join(KNOWLEDGE_DIR, file_name)
        print(f"Processing {file_name}...")
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Split text into chunks
        chunks = chunk_text(content)
        print(f"Split into {len(chunks)} chunks. Generating embeddings...")
        
        for idx, chunk in enumerate(chunks):
            embedding = get_embedding(chunk)
            if embedding:
                cursor.execute(
                    "INSERT INTO document_chunks (file_name, chunk_index, text_content, embedding) VALUES (?, ?, ?, ?)",
                    (file_name, idx, chunk, json.dumps(embedding))
                )
                print(f"  Ingested chunk {idx+1}/{len(chunks)}")
                
    conn.commit()
    conn.close()
    print("Ingestion complete! Vector store created successfully.")

if __name__ == "__main__":
    run_ingestion()
