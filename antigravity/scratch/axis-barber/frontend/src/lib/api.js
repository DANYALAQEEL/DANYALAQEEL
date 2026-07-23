import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('axis_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getServices = () => api.get('/services').then(res => res.data);
export const getBarbers = () => api.get('/barbers').then(res => res.data);
export const getAvailability = (barberId, date) => api.get('/availability', { params: { barber_id: barberId, date } }).then(res => res.data);
export const createAppointment = (data) => api.post('/appointments', data).then(res => res.data);

export const loginAdmin = (credentials) => api.post('/auth/login', credentials).then(res => res.data);
export const getAdminStats = () => api.get('/admin/stats').then(res => res.data);
export const getAdminAppointments = (scope = 'upcoming') => api.get('/admin/appointments', { params: { scope } }).then(res => res.data);
export const updateAppointmentStatus = (id, status) => api.patch(`/admin/appointments/${id}/status`, { status }).then(res => res.data);
