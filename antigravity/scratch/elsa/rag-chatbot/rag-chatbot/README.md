# Elsa RAG Chatbot Module

This directory contains a complete, standalone RAG (Retrieval-Augmented Generation) chatbot. It is designed to be run and verified independently, and can be integrated into any frontend (like the Elsa Energy Laravel website).

The chatbot answers user queries about Elsa Energy solutions, products, and calculators, using a local SQLite vector store grounded on files in the `knowledge_base/` directory.

---

## Directory Structure

```
rag-chatbot/
├── README.md                   # This documentation file
├── backend/                    # Python FastAPI microservice
│   ├── .env.example            # Environment variables example template
│   ├── ingest.py               # Document ingestion & embedding generation script
│   ├── main.py                 # FastAPI Web Server (expose /chat and /ingest)
│   ├── requirements.txt        # Python library dependencies
│   ├── vector_store.db         # SQLite database storing text chunks & embeddings (gitignored)
│   └── knowledge_base/         # Place your training text/markdown files here
│       └── elsa_info.txt       # Built-in document about Elsa Energy
└── frontend/                   # UI Chat widget (plug-and-play)
    ├── chatbot.css             # Glassmorphism visual styles
    ├── chatbot.js              # State manager, markdown parser, & HTTP client
    └── widget.html             # Standalone sandbox testing HTML file
```

---

## Step-by-Step Backend Setup

### 1. Install Python Dependencies
Open your command prompt or terminal in the `rag-chatbot/backend/` folder and run:
```bash
pip install -r requirements.txt
```

### 2. Configure Environment Variables
1. Rename `.env.example` to `.env`.
2. Open `.env` and fill in your Gemini API key (you can obtain a free key from [Google AI Studio](https://aistudio.google.com/)):
   ```env
   GEMINI_API_KEY=AIzaSy...your_gemini_key...
   ```

### 3. Ingest Your Knowledge Base Documents
Place any `.txt` or `.md` files containing your company info, FAQs, or manuals in `backend/knowledge_base/`.

Then run the ingestion script to create the local SQLite vector database:
```bash
python ingest.py
```
*Note: This will read all text files, split them into chunks, generate embeddings via the Gemini API, and store them in `vector_store.db`.*

### 4. Start the FastAPI Web Server
Run the FastAPI development server:
```bash
uvicorn main:app --reload --port 8000
```
Your server will start running at `http://127.0.0.1:8000`. You can visit `http://127.0.0.1:8000/` in your browser to verify it is online.

---

## How to Test and Verify

1. Ensure the Python FastAPI backend is running on port 8000.
2. Double-click or open `frontend/widget.html` in any web browser.
3. Click the **Floating Chat Bubble** at the bottom-right of the page to open the chat window.
4. Try asking some questions like:
   * *"What does geyser control do?"*
   * *"How is EMS better than solar?"*
   * *"What is the USR-M100 product?"*
5. The assistant should answer using your ingested `elsa_info.txt` context.

---

## Laravel Integration Guide

To integrate this chatbot widget into your Laravel project permanently:

### 1. Add Frontend Assets
1. Copy `frontend/chatbot.css` to `public/css/chatbot.css` (or integrate it into your main CSS build/Laravel Mix).
2. Copy `frontend/chatbot.js` to `public/js/chatbot.js`.

### 2. Include the Widget in the Main Layout
Add the stylesheet link in your layout head, and the scripts at the bottom:

In `resources/views/frontend/layout/layout.blade.php`:
```html
<head>
    <!-- Add FontAwesome (if not already present) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Add Chatbot CSS -->
    <link rel="stylesheet" href="{{ asset('css/chatbot.css') }}">
</head>
<body>
    ...
    
    <!-- Add Chatbot JS at the very bottom of the body -->
    <script src="{{ asset('js/chatbot.js') }}"></script>
</body>
```

### 3. Proxy Chat Requests (Optional but Recommended)
Instead of calling `http://127.0.0.1:8000` directly from the client browser (which exposes your API endpoint), you can set up a proxy route in Laravel.

1. Update the `API_BASE_URL` in your `public/js/chatbot.js` to point to your local backend route:
   ```javascript
   const API_BASE_URL = "/api/chatbot";
   ```
2. Create a Laravel controller method that handles this route and sends a POST request to your FastAPI server:
   ```php
   // In routes/api.php or routes/web.php
   Route::post('/api/chatbot/chat', [ChatbotProxyController::class, 'proxyChat']);
   ```
   ```php
   // In app/Http/Controllers/ChatbotProxyController.php
   use Illuminate\Http\Request;
   use Illuminate\Support\Facades\Http;

   class ChatbotProxyController extends Controller
   {
       public function proxyChat(Request $request)
       {
           // Forward input to the local FastAPI RAG server
           $response = Http::post('http://127.0.0.1:8000/chat', [
               'message' => $request->input('message'),
               'history' => $request->input('history', [])
           ]);

           return response()->json($response->json(), $response->status());
       }
   }
   ```
