/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eef5ff',
          100: '#d9e9ff',
          200: '#bcd6ff',
          300: '#8ebaff',
          400: '#5993ff',
          500: '#3370f5',
          600: '#1e50eb',
          700: '#1a3dd8',
          800: '#1c34af',
          900: '#1c3189',
        },
        surface: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#080e1a',
        },
        success: { 100: '#dcfce7', 600: '#16a34a', 700: '#15803d' },
        warning: { 100: '#fef9c3', 600: '#ca8a04', 700: '#a16207' },
        danger:  { 100: '#fee2e2', 600: '#dc2626', 700: '#b91c1c' },
        info:    { 100: '#dbeafe', 600: '#2563eb', 700: '#1d4ed8' },
      },
    },
  },
  plugins: [],
}
