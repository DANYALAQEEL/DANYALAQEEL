# University Security Command Center & Card Logger System

A unified, real-time security monitoring system for university campuses. Features ID card OCR detection (CNIC numbers, names) and vehicle number plate detection with live video streams.

## Project Structure

- Card-Logger-Frontend-main/: Next.js 14 Web UI (App Router, Tailwind CSS, recharts, WebSocket status sync).
- Card-Logger-Backend-main/: FastAPI backend server (PostgreSQL database integration, WebSocket notification hubs).
- OCR-Backend-main/: PaddleOCR-powered AI detection pipeline for card and plate processing.

---

## 🛠️ Installation & Setup

### Prerequisites
- **PostgreSQL 16** (database sgicl with user postgres / password postgres or custom config)
- **Node.js 18+**
- **Python 3.10 - 3.11**

### 1. Database Initialization
1. Ensure your PostgreSQL service is running and create a database named sgicl.
2. Navigate to the backend folder:
   `ash
   cd Card-Logger-Backend-main
   `
3. Initialize the database schema, seed data, and WebSocket triggers:
   `ash
   pip install sqlalchemy psycopg2-binary python-decouple
   python init_db_tables.py
   `

### 2. Run the FastAPI Backend
1. Copy .env.example to .env inside the Card-Logger-Backend-main directory.
2. Install Python dependencies:
   `ash
   pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose passlib bcrypt python-multipart aiofiles Pillow python-decouple asyncpg opencv-python-headless pyjwt starlette
   `
3. Run the FastAPI server:
   `ash
   python main.py
   `
   *The server runs on http://127.0.0.1:8000.*

### 3. Run the OCR AI Engine
1. Navigate to the OCR engine folder:
   `ash
   cd ../OCR-Backend-main
   `
2. Copy .env.example to .env and set the absolute folder paths for saving card/plate images.
3. Install dependencies:
   `ash
   pip install paddleocr paddlepaddle numpy==1.26.4 opencv-python psycopg2-binary python-decouple
   `
4. Run the single-threaded stable detection engine:
   `ash
   python main_singlethread.py
   `

### 4. Run the Next.js Frontend
1. Navigate to the frontend directory:
   `ash
   cd ../Card-Logger-Frontend-main
   `
2. Copy .env.example to .env.local.
3. Install Node dependencies:
   `ash
   npm install
   `
4. Start the Next.js dev server:
   `ash
   npm run dev
   `
   *Access the Security Command Center dashboard at http://localhost:3000.*
