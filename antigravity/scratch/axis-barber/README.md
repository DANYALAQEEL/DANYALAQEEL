# AXIS // Barber Co. 

AXIS Barber Co. is a premium, modern, brutalist-inspired storefront and booking platform for high-end grooming services. The platform offers a sleek, high-contrast digital experience, featuring an interactive multi-stage booking pipeline and a comprehensive administrative command center.

## 🚀 Features

### Customer Experience
*   **Brutalist "Swiss & High-Contrast" Aesthetic**: Built with a strict monochrome palette, 1px geometric borders, and zero-radius components for a masculine, editorial feel.
*   **Dynamic Marquees & Micro-animations**: Implemented using pure CSS keyframes to create a premium, fluid browsing experience.
*   **Seamless Multi-Stage Booking Pipeline**:
    *   **Stage 1: Service Selection**: Choose from curated high-end services.
    *   **Stage 2: Professional & Time Allocation**: Real-time availability scheduling for specific barbers.
    *   **Stage 3: Client Details**: Secure detail capture.
    *   **Stage 4: Confirmation**: Real-time reservation finalization.

### Administrative Command Center
*   **Secure Authentication**: JWT-based authentication for administrative staff.
*   **Live Dashboard**: Real-time metrics including "Today's Pipeline", complete with revenue tracking and appointment volume.
*   **Appointment Management**: Instantly toggle appointment statuses (Pending, Completed, Cancelled).

## 🛠️ Tech Stack

**Frontend**
*   **React 19**: Modern component-based UI.
*   **Tailwind CSS**: Strict adherence to brutalist design tokens.
*   **Radix UI / Shadcn**: Unstyled, accessible primitives serving as the structural foundation.
*   **Lucide React**: Minimalist, consistent iconography.

**Backend**
*   **FastAPI**: High-performance, asynchronous Python web framework.
*   **Motor (AsyncIOMotorClient) / MongoMock**: Asynchronous MongoDB drivers (currently configured for in-memory execution via `mongomock-motor` for rapid local development).
*   **Pydantic**: Strict data validation and schema definitions.
*   **JWT (JSON Web Tokens)**: Secure, stateless administrative sessions.
*   **Resend (Optional Integration)**: Transactional email notifications.

## 📦 Local Development Setup

### Prerequisites
*   Node.js (v18+ recommended)
*   Python (3.10+ recommended)

### 1. Backend Setup
Navigate to the backend directory and set up the Python environment:
```bash
cd backend
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn server:app --reload --port 8000
```
*Note: The backend is currently configured to use `mongomock-motor` for an in-memory database, meaning no local MongoDB installation is required.*

### 2. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd frontend

# Install dependencies (use legacy-peer-deps for React 19 compatibility with certain packages)
npm install --legacy-peer-deps

# In case of Ajv issues with react-scripts:
npm install ajv@^8.12.0 --legacy-peer-deps

# Start the development server
npm start
```
The application will be accessible at `http://localhost:3000` (or whichever port React defaults to, e.g., `3006`).

## 🔐 Default Credentials
*   **Admin Email**: `admin@axisbarber.co`
*   **Admin Password**: `admin123`
*(Ensure you change these in a production environment by modifying the `.env` configuration).*

## 🏗️ Future Enhancements
*   Stripe payment integration for deposit capture during the booking flow.
*   Persistent MongoDB cluster deployment for production data retention.
*   Resend API integration for automated transactional email confirmations.
