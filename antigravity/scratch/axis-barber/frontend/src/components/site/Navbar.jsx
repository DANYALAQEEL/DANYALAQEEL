import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="border-b-2 border-foreground bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase font-display">
            AXIS // Barber Co.
          </Link>
          <div className="flex items-center gap-6">
            {!isAdmin ? (
              <>
                <Link to="/" className="text-sm font-semibold uppercase hover:underline underline-offset-4">Home</Link>
                <Link to="/book" className="bg-foreground text-background px-6 py-2 text-sm font-bold uppercase hover:bg-zinc-800 transition-colors">
                  Book Now
                </Link>
              </>
            ) : (
              <Link to="/admin" className="text-sm font-bold uppercase underline underline-offset-4">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
