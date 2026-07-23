import os
import sqlite3
import json
import math
from typing import List, Optional
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import google.generativeai as genai
from ingest import run_ingestion

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
PORT = int(os.getenv("PORT", 8000))
HOST = os.getenv("HOST", "127.0.0.1")

# Configure Gemini
if GEMINI_API_KEY and GEMINI_API_KEY != "YOUR_FREE_GEMINI_API_KEY":
    genai.configure(api_key=GEMINI_API_KEY)
else:
    print("WARNING: GEMINI_API_KEY is not configured correctly.")

app = FastAPI(title="Elsa Energy RAG Chatbot API")

# Enable CORS for frontend widget testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://elsaenergy.pk",
        "https://www.elsaenergy.pk",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "http://127.0.0.1",
        "http://localhost"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "vector_store.db"

# Data models
class ChatMessage(BaseModel):
    role: str  # "user" or "model"
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

class IngestResponse(BaseModel):
    status: str
    message: str

# Vector operations
def cosine_similarity(v1: List[float], v2: List[float]) -> float:
    dot = sum(a * b for a, b in zip(v1, v2))
    norm1 = math.sqrt(sum(a * a for a in v1))
    norm2 = math.sqrt(sum(b * b for b in v2))
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return dot / (norm1 * norm2)

def get_query_embedding(text: str) -> Optional[List[float]]:
    try:
        response = genai.embed_content(
            model="models/gemini-embedding-001",
            content=text,
            task_type="retrieval_query"
        )
        return response['embedding']
    except Exception as e:
        print(f"Error fetching query embedding: {e}")
        return None

def retrieve_context(query: str, top_k: int = 3) -> str:
    query_emb = get_query_embedding(query)
    if not query_emb:
        return ""
        
    if not os.path.exists(DB_PATH):
        return ""
        
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT text_content, embedding FROM document_chunks")
    rows = cursor.fetchall()
    conn.close()
    
    scored_chunks = []
    for text, emb_json in rows:
        chunk_emb = json.loads(emb_json)
        score = cosine_similarity(query_emb, chunk_emb)
        scored_chunks.append((score, text))
        
    # Sort by score descending
    scored_chunks.sort(key=lambda x: x[0], reverse=True)
    
    # Take top K and join them
    top_chunks = scored_chunks[:top_k]
    
    # Log retrieved sources for debugging
    print(f"\n--- Retreived Context for Query: '{query}' ---")
    for idx, (score, text) in enumerate(top_chunks):
        print(f"Rank {idx+1} (Score: {score:.4f}): {text[:60]}...")
    print("-------------------------------------------\n")
    
    return "\n\n".join([text for _, text in top_chunks])

# API Routes
@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Elsa Energy Chatbot API is running.",
        "config": {
            "gemini_api_configured": bool(GEMINI_API_KEY and GEMINI_API_KEY != "YOUR_FREE_GEMINI_API_KEY")
        }
    }

@app.post("/chat")
def chat(request: ChatRequest):
    if not GEMINI_API_KEY or GEMINI_API_KEY == "YOUR_FREE_GEMINI_API_KEY":
        raise HTTPException(
            status_code=500, 
            detail="Gemini API Key is not configured. Please add your GEMINI_API_KEY in the backend .env file."
        )

    user_query = request.message
    
    # Retrieve relevant context from SQLite database
    context = retrieve_context(user_query, top_k=3)
    
    # System Instructions
    system_instruction = (
        "You are Elsa, a professional and helpful smart energy assistant for Elsa Energy (based in Pakistan). "
        "Your goal is to assist customers with questions about Elsa's smart automation solutions (Geyser Control, Water Pump Automation, Appliance Control), "
        "hardware products (USR-N510, USR-M100, USR-M300), and calculators (EMS Calculator, ROI Calculator).\n\n"
        "Guidelines:\n"
        "1. Strictly use the provided Context to answer the user's question. If the Context does not contain the answer, "
        "politely inform the user that you don't have that specific information and offer to direct them to "
        "support (support portal: https://elsaenergy.pk/cfcustomer/login or email: info@elsaenergy.pk).\n"
        "2. Keep answers concise, professional, and formatted in clean markdown (with lists and bold text where appropriate).\n"
        "3. Answer in the same language as the user (English/Roman Urdu/Urdu).\n"
        "4. Do NOT make up facts or pricing. Refer to the EMS or ROI Calculator for pricing estimates.\n\n"
        f"Context from Knowledge Base:\n{context}"
    )

    try:
        # Construct the generation model
        model = genai.GenerativeModel(
            model_name="gemini-2.5-flash",
            system_instruction=system_instruction
        )
        
        # Build standard chat format for Gemini
        # We can pass history if desired. For now, let's keep it simple or format history
        # as context inside the call.
        chat_session = model.start_chat(history=[])
        
        # Format chat history for context if present
        history_prompt = ""
        if request.history:
            history_prompt += "Previous conversation history:\n"
            for msg in request.history[-5:]: # Keep last 5 messages for context
                speaker = "User" if msg.role == "user" else "Assistant"
                history_prompt += f"{speaker}: {msg.content}\n"
            history_prompt += f"\nCurrent User Question: {user_query}"
        else:
            history_prompt = user_query

        response = chat_session.send_message(history_prompt)
        return {
            "answer": response.text,
            "context_retrieved": bool(context)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM generation failed: {str(e)}")

@app.post("/ingest", response_model=IngestResponse)
def trigger_ingestion(background_tasks: BackgroundTasks):
    background_tasks.add_task(run_ingestion)
    return {
        "status": "processing",
        "message": "Ingestion task started in the background. It will process all files in the knowledge_base folder."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host=HOST, port=PORT, reload=True)
