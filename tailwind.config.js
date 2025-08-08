/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
        background: {
          light: '#F8FAFC',
          medium: '#F1F5F9',
        }
      }
    },
  },
  plugins: [],
};