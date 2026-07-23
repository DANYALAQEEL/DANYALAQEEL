import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../lib/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await loginAdmin({ email, password });
      localStorage.setItem('axis_admin_token', res.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md border-2 border-foreground p-8">
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-6 text-center">Staff Portal</h1>
        {error && <div className="bg-destructive text-destructive-foreground p-3 mb-6 text-sm font-bold uppercase">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold uppercase mb-2">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border-2 border-foreground p-3 focus:outline-none focus:bg-zinc-50"
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border-2 border-foreground p-3 focus:outline-none focus:bg-zinc-50"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-foreground text-background py-4 font-bold uppercase hover:bg-zinc-800 transition-colors mt-8"
          >
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
