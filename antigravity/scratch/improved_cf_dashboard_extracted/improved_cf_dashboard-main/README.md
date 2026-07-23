# CF Smart EMS Dashboard (EmbedAIoT)

An advanced, multi-role React + Vite + Tailwind CSS web application designed for real-time IoT Energy Management System (EMS) monitoring, analytics, and organizational control.

---

## 🚀 Key Features

*   **Role-Based Access Control (RBAC)**: Tailored workflows and layouts for three distinct user roles:
    *   **Super Admin (`/admin/*`)**: Complete system monitoring across all registered organizations, user management, gateway control, product catalog management, global alarms, and system settings.
    *   **Organization (`/org/*`)**: Fine-grained device and gateway provisioning, historical data chart views, task schedules, alarms, and organization-specific configurations.
    *   **End User (`/user/*`)**: Personalized dashboards showing active consumption alerts, voltage/current phase imbalance analysis, real-time power factor, anomalies, and active billing/tariffs.
*   **Impersonation & Session Switching**:
    *   **Login as User**: Super Admins can log in directly as any End User from the *Users* tab.
    *   **Login as Organization**: Super Admins can log in directly as any Organization from the *Organizations* tab.
*   **Animated Mascot Login Experience**:
    *   Features a floating theme switcher on the login page to toggle between a **Classic SaaS layout** and an **Interactive Mascot layout**.
    *   The interactive mascot layout features a CSS-only animated Panda that reacts to input focus—shifting its gaze when typing the username and covering its eyes with smooth animations when typing the password.
*   **Consistent Premium Brand System**:
    *   **Deep Navy (`#141828`)**: Retained for dark, high-contrast sidebar panels.
    *   **Lemon-White (`#FEFEF8`)**: Applied to central workspaces to let key data and highlights stand out.
    *   **Amber/Gold (`#F5A623`)**: Expressed as primary accents, button focuses, and active navigations.
*   **Refactored Grid Forms & Unified Charts**:
    *   All modal form inputs (Add/Edit modals) are arranged in responsive grids.
    *   All charts (rendered via `recharts`) utilize a consistent styling system (grid line markers, tooltips, and tick highlights).

---

## 🛠 Tech Stack

*   **Core**: React 18, Vite (build tool), React Router DOM (client-side routing)
*   **Styling**: Tailwind CSS
*   **Charts**: Recharts
*   **Icons**: Lucide React
*   **Build Pipeline**: Rollup (configured through Vite)

---

## 📂 Project Structure

```text
ems-dashboard-final/
├── src/
│   ├── components/
│   │   ├── layout/       # Sidebar, Topbar, and Dashboard shell layouts
│   │   └── ui/           # Reusable UI elements (DataTable, StatCard, Modal, FormFields)
│   ├── config/           # Navigation items config arrays
│   ├── context/          # Auth context and mock profiles session state
│   ├── data/             # Dummy data files containing mock orgs, devices, and metrics
│   ├── pages/
│   │   ├── admin/        # 18 Admin pages (Organizations, Gateways, Devices, Theme, Settings, etc.)
│   │   ├── org/          # 10 Organization dashboards and analytics tabs
│   │   ├── user/         # 14 End-user diagnostic charts, slab rates, and AI alerts
│   │   └── Login.jsx     # Main entry Login portal with interactive design switcher
│   ├── App.jsx           # Main routing switchboard and ProtectedRoute wrappers
│   ├── index.css         # Tailwind directives and custom animation styles
│   └── main.jsx
├── tailwind.config.js    # Customized theme palette, fonts, and shadows
├── package.json
└── vite.config.js
```

---

## ⚙️ How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Setup and Startup
1.  **Clone or navigate** to the project directory:
    ```bash
    cd "C:\Users\Administrator\.gemini\antigravity\scratch\ems-dashboard-final"
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to **[http://localhost:5173](http://localhost:5173)**.

---

## 🔐 Mock Credentials (Quick Demo Access)

You can click the **Quick Demo Access** cards on the login screen for instant access, or type the following credentials:

| Role | Username / Email | Password | Dashboard URL |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `appadmin@yopmail.com` | `password123` | `/admin` |
| **Organization** | `org@cfsmartems.com` | `password123` | `/org` |
| **End User** | `maryam@delicia.com` | `password123` | `/user` |
