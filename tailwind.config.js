/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] }, colors: { forest: '#17231f', moss: '#64745b', cream: '#f5f2eb', gold: '#c5a46d' }, boxShadow: { soft: '0 20px 60px rgba(23,35,31,.10)' } } },
  plugins: [],
}
