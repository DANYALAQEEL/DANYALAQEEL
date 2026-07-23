import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import Footer from './components/site/Footer';
import Landing from './pages/Landing';
import Booking from './pages/Booking';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
