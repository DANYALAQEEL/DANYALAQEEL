import React, { useState, useEffect } from 'react';
import { getServices, getBarbers, getAvailability, createAppointment } from '../lib/api';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [selection, setSelection] = useState({
    serviceId: null,
    barberId: null,
    date: new Date().toISOString().split('T')[0],
    time: null,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    notes: ''
  });

  useEffect(() => {
    getServices().then(setServices).catch(console.error);
    getBarbers().then(setBarbers).catch(console.error);
  }, []);

  useEffect(() => {
    if (selection.barberId && selection.date) {
      getAvailability(selection.barberId, selection.date)
        .then(res => setAvailability(res.slots))
        .catch(console.error);
    }
  }, [selection.barberId, selection.date]);

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createAppointment({
        service_id: selection.serviceId,
        barber_id: selection.barberId,
        date: selection.date,
        time: selection.time,
        customer_name: selection.customerName,
        customer_email: selection.customerEmail,
        customer_phone: selection.customerPhone,
        notes: selection.notes
      });
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to book appointment.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full border-2 border-foreground p-8 text-center bg-zinc-50">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Confirmed.</h2>
          <p className="mb-8">Your chair is reserved. We've sent a confirmation email to {selection.customerEmail}.</p>
          <button onClick={() => window.location.href = '/'} className="bg-foreground text-background px-8 py-3 font-bold uppercase w-full hover:bg-zinc-800 transition-colors">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-24">
      <div className="mb-8 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
        <span className={step >= 1 ? 'font-bold' : 'text-zinc-400'}>01 Service</span>
        <span className="text-zinc-300">/</span>
        <span className={step >= 2 ? 'font-bold' : 'text-zinc-400'}>02 Barber & Time</span>
        <span className="text-zinc-300">/</span>
        <span className={step >= 3 ? 'font-bold' : 'text-zinc-400'}>03 Details</span>
      </div>

      <div className="border-2 border-foreground p-6 md:p-10 bg-white">
        {error && <div className="bg-destructive text-destructive-foreground p-4 mb-6 font-bold uppercase">{error}</div>}

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter border-b-2 border-foreground pb-4">Select Service</h2>
            <div className="grid gap-4">
              {services.map(svc => (
                <div 
                  key={svc.id} 
                  onClick={() => setSelection({ ...selection, serviceId: svc.id })}
                  className={`border-2 border-foreground p-4 cursor-pointer transition-colors flex justify-between items-center ${selection.serviceId === svc.id ? 'bg-foreground text-background' : 'hover:bg-zinc-50'}`}
                >
                  <div>
                    <h3 className="font-bold uppercase text-lg">{svc.name}</h3>
                    <p className={`text-sm ${selection.serviceId === svc.id ? 'text-zinc-300' : 'text-zinc-600'}`}>{svc.duration_min} MIN</p>
                  </div>
                  <div className="font-mono font-bold">${svc.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <button 
              disabled={!selection.serviceId} 
              onClick={handleNext}
              className="mt-8 bg-foreground text-background px-8 py-3 font-bold uppercase w-full disabled:opacity-50 hover:bg-zinc-800 transition-colors"
            >
              Next Step
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter border-b-2 border-foreground pb-4">Barber & Time</h2>
            
            <div>
              <label className="block font-bold uppercase mb-2">Select Barber</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {barbers.map(b => (
                  <div 
                    key={b.id} 
                    onClick={() => setSelection({ ...selection, barberId: b.id, time: null })}
                    className={`border-2 border-foreground p-3 text-center cursor-pointer transition-colors ${selection.barberId === b.id ? 'bg-foreground text-background' : 'hover:bg-zinc-50'}`}
                  >
                    <div className="font-bold uppercase">{b.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {selection.barberId && (
              <div className="mt-6">
                <label className="block font-bold uppercase mb-2">Select Date</label>
                <input 
                  type="date" 
                  value={selection.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setSelection({ ...selection, date: e.target.value, time: null })}
                  className="w-full border-2 border-foreground p-3 font-mono focus:outline-none"
                />
              </div>
            )}

            {selection.barberId && selection.date && (
              <div className="mt-6">
                <label className="block font-bold uppercase mb-2">Select Time</label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {availability.map(slot => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => setSelection({ ...selection, time: slot.time })}
                      className={`p-2 border-2 font-mono text-sm transition-colors ${
                        !slot.available ? 'border-zinc-200 text-zinc-300 bg-zinc-50 cursor-not-allowed' :
                        selection.time === slot.time ? 'border-foreground bg-foreground text-background' :
                        'border-foreground hover:bg-zinc-100'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button onClick={handlePrev} className="border-2 border-foreground px-8 py-3 font-bold uppercase w-1/3 hover:bg-zinc-50 transition-colors">Back</button>
              <button 
                disabled={!selection.barberId || !selection.time} 
                onClick={handleNext}
                className="bg-foreground text-background px-8 py-3 font-bold uppercase w-2/3 disabled:opacity-50 hover:bg-zinc-800 transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter border-b-2 border-foreground pb-4">Your Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block font-bold uppercase mb-2 text-sm">Full Name</label>
                <input required type="text" value={selection.customerName} onChange={e => setSelection({...selection, customerName: e.target.value})} className="w-full border-2 border-foreground p-3 focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold uppercase mb-2 text-sm">Email Address</label>
                <input required type="email" value={selection.customerEmail} onChange={e => setSelection({...selection, customerEmail: e.target.value})} className="w-full border-2 border-foreground p-3 focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold uppercase mb-2 text-sm">Phone Number</label>
                <input required type="tel" value={selection.customerPhone} onChange={e => setSelection({...selection, customerPhone: e.target.value})} className="w-full border-2 border-foreground p-3 focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold uppercase mb-2 text-sm">Notes (Optional)</label>
                <textarea rows={3} value={selection.notes} onChange={e => setSelection({...selection, notes: e.target.value})} className="w-full border-2 border-foreground p-3 focus:outline-none"></textarea>
              </div>
            </div>

            <div className="bg-zinc-100 p-6 border-2 border-foreground mt-8">
              <h3 className="font-bold uppercase mb-4 text-sm tracking-widest text-zinc-500">Summary</h3>
              <div className="font-mono space-y-2 text-sm">
                <div className="flex justify-between"><span>Date:</span> <span className="font-bold">{selection.date} @ {selection.time}</span></div>
                <div className="flex justify-between"><span>Service:</span> <span className="font-bold">{services.find(s=>s.id===selection.serviceId)?.name}</span></div>
                <div className="flex justify-between"><span>Barber:</span> <span className="font-bold">{barbers.find(b=>b.id===selection.barberId)?.name}</span></div>
                <div className="flex justify-between pt-4 mt-4 border-t-2 border-foreground text-lg"><span>Total:</span> <span className="font-bold">${services.find(s=>s.id===selection.serviceId)?.price.toFixed(2)}</span></div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button type="button" onClick={handlePrev} className="border-2 border-foreground px-8 py-3 font-bold uppercase w-1/3 hover:bg-zinc-50 transition-colors">Back</button>
              <button 
                type="submit"
                disabled={loading || !selection.customerName || !selection.customerEmail || !selection.customerPhone}
                className="bg-foreground text-background px-8 py-3 font-bold uppercase w-2/3 disabled:opacity-50 hover:bg-zinc-800 transition-colors flex justify-center items-center"
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
