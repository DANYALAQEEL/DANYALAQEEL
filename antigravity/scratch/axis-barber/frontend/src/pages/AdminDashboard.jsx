import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminStats, getAdminAppointments, updateAppointmentStatus } from '../lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [scope, setScope] = useState('upcoming');
  const navigate = useNavigate();

  const loadData = () => {
    getAdminStats().then(setStats).catch(() => {
      // If unauthorized, redirect to login
      localStorage.removeItem('axis_admin_token');
      navigate('/admin/login');
    });
    getAdminAppointments(scope).then(setAppointments).catch(console.error);
  };

  useEffect(() => {
    const token = localStorage.getItem('axis_admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [scope, navigate]);

  const handleStatusChange = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      loadData();
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('axis_admin_token');
    navigate('/admin/login');
  };

  if (!stats) return <div className="p-12 text-center font-mono">Loading telemetry...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-12 border-b-2 border-foreground pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Command Center</h1>
          <p className="font-mono text-zinc-500 mt-2 text-sm uppercase">Secure connection established.</p>
        </div>
        <button onClick={handleLogout} className="text-sm font-bold uppercase underline underline-offset-4 hover:text-zinc-600">
          Terminate Session
        </button>
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="border-2 border-foreground p-6 bg-foreground text-background">
          <div className="text-sm font-bold uppercase text-zinc-400 mb-2">Today</div>
          <div className="text-4xl font-black">{stats.appointments_today}</div>
        </div>
        <div className="border-2 border-foreground p-6">
          <div className="text-sm font-bold uppercase text-zinc-500 mb-2">7-Day Outlook</div>
          <div className="text-4xl font-black">{stats.upcoming_week}</div>
        </div>
        <div className="border-2 border-foreground p-6">
          <div className="text-sm font-bold uppercase text-zinc-500 mb-2">Total Active</div>
          <div className="text-4xl font-black">{stats.total_confirmed}</div>
        </div>
        <div className="border-2 border-foreground p-6">
          <div className="text-sm font-bold uppercase text-zinc-500 mb-2">Pipeline Rev.</div>
          <div className="text-4xl font-black">${stats.revenue_pipeline.toFixed(0)}</div>
        </div>
      </div>

      {/* Appointment Control */}
      <div>
        <div className="flex gap-4 mb-6">
          {['today', 'upcoming', 'history'].map(s => (
            <button 
              key={s}
              onClick={() => setScope(s)}
              className={`px-6 py-2 border-2 border-foreground font-bold uppercase text-sm transition-colors ${scope === s ? 'bg-foreground text-background' : 'hover:bg-zinc-50'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="border-2 border-foreground overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-100 font-mono text-xs uppercase tracking-widest text-zinc-500">
                <th className="p-4 border-b-2 border-foreground">Date / Time</th>
                <th className="p-4 border-b-2 border-foreground">Client</th>
                <th className="p-4 border-b-2 border-foreground">Service</th>
                <th className="p-4 border-b-2 border-foreground">Barber</th>
                <th className="p-4 border-b-2 border-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr><td colSpan="5" className="p-8 text-center font-mono text-zinc-500">No records found.</td></tr>
              ) : (
                appointments.map(appt => (
                  <tr key={appt.id} className="border-b-[1.5px] border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="p-4 font-mono text-sm whitespace-nowrap">
                      <div className="font-bold text-foreground">{appt.date}</div>
                      <div className="text-zinc-500">{appt.time}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold uppercase">{appt.customer_name}</div>
                      <div className="text-xs text-zinc-500">{appt.customer_phone}</div>
                    </td>
                    <td className="p-4 text-sm font-semibold">{appt.service_name}</td>
                    <td className="p-4 text-sm font-mono">{appt.barber_name}</td>
                    <td className="p-4 text-right space-x-2 whitespace-nowrap">
                      {appt.status === 'confirmed' ? (
                        <>
                          <button onClick={() => handleStatusChange(appt.id, 'completed')} className="text-xs bg-foreground text-background px-3 py-1 font-bold uppercase hover:bg-zinc-800">Complete</button>
                          <button onClick={() => handleStatusChange(appt.id, 'cancelled')} className="text-xs border-[1.5px] border-foreground px-3 py-1 font-bold uppercase hover:bg-zinc-100">Cancel</button>
                        </>
                      ) : (
                        <span className={`text-xs font-mono font-bold uppercase px-2 py-1 ${appt.status === 'completed' ? 'bg-zinc-200 text-zinc-800' : 'bg-red-100 text-red-800'}`}>
                          {appt.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
