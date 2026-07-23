import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black tracking-tighter uppercase font-display mb-2">AXIS // Barber Co.</h2>
          <p className="text-sm text-zinc-600 uppercase font-mono">Precision Grooming. No Compromise.</p>
        </div>
        <div className="flex gap-6 text-sm font-semibold uppercase">
          <Link to="/book" className="hover:underline underline-offset-4">Book</Link>
          <Link to="/admin/login" className="hover:underline underline-offset-4">Staff</Link>
        </div>
      </div>
    </footer>
  );
}
