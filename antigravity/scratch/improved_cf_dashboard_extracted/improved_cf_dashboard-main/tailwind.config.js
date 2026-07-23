export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFE97A',
          300: '#FFD84A',
          400: '#F5B830',
          500: '#F5A623',
          600: '#E8941A',
          700: '#CB7E12',
          800: '#8C510A',
          900: '#5A3206',
        },
        surface: {
          50:  '#FEFEF8',   // ← lemon-white page background
          100: '#F7F7EE',   // ← very soft lemon for alternates
          200: '#ECEEE6',
          300: '#D1D5C8',
          400: '#9AA09A',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#141828',   // sidebar / dark card
          950: '#0A0D14',   // deepest dark
        },
        success: { 100: '#DCFCE7', 600: '#16A34A', 700: '#15803D' },
        warning: { 100: '#FEF3C7', 600: '#F5A623', 700: '#E8941A' },
        danger:  { 100: '#FEE2E2', 600: '#DC2626', 700: '#B91C1C' },
        info:    { 100: '#DBEAFE', 600: '#2563EB', 700: '#1D4ED8' },
      },
    },
  },
  plugins: [],
}
