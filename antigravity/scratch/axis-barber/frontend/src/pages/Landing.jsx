import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServices, getBarbers } from '../lib/api';

export default function Landing() {
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(console.error);
    getBarbers().then(setBarbers).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center border-b-2 border-foreground overflow-hidden">
        <div className="absolute inset-0 bg-zinc-100 -z-10" />
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
            Precision<br />Grooming
          </h1>
          <p className="font-mono uppercase text-lg md:text-xl tracking-widest mb-10">Objectivity in Style. No Compromise.</p>
          <Link to="/book" className="inline-block bg-foreground text-background px-12 py-4 text-xl font-bold uppercase tracking-wide hover:bg-zinc-800 transition-colors">
            Reserve a Chair
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-b-2 border-foreground bg-foreground text-background py-4 marquee-container">
        <div className="marquee-content text-2xl font-black uppercase tracking-widest">
          <span>AXIS BARBER CO. // PRECISION GROOMING // ZERO COMPROMISE // AXIS BARBER CO. // PRECISION GROOMING // ZERO COMPROMISE //&nbsp;</span>
          <span>AXIS BARBER CO. // PRECISION GROOMING // ZERO COMPROMISE // AXIS BARBER CO. // PRECISION GROOMING // ZERO COMPROMISE //&nbsp;</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 w-full">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 border-b-2 border-foreground pb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(svc => (
            <div key={svc.id} className="border-2 border-foreground p-6 flex flex-col group hover:bg-zinc-50 transition-colors">
              <h3 className="text-2xl font-bold uppercase mb-2 group-hover:underline underline-offset-4">{svc.name}</h3>
              <p className="text-zinc-600 mb-6 flex-1">{svc.description}</p>
              <div className="flex justify-between items-center font-mono font-bold uppercase pt-4 border-t-2 border-foreground">
                <span>{svc.duration_min} MIN</span>
                <span>${svc.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Barbers Section */}
      <section className="bg-zinc-100 border-t-2 border-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 border-b-2 border-foreground pb-4">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map(barber => (
              <div key={barber.id} className="group cursor-pointer">
                <div className="border-2 border-foreground overflow-hidden mb-4 bg-zinc-200 aspect-[3/4]">
                  {barber.image ? (
                    <img src={barber.image} alt={barber.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-zinc-400">NO IMAGE</div>
                  )}
                </div>
                <h3 className="text-2xl font-bold uppercase">{barber.name}</h3>
                <p className="font-mono text-sm text-zinc-600 uppercase mb-2">{barber.title}</p>
                <p className="text-sm">{barber.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
