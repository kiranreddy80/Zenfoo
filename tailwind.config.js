/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9AC444', // Direct primary color
        zenfoo: {
          dark: '#111827',
          light: '#FFFFFF', 
          primary: '#9AC444', // Your brand green
          secondary: '#374151',
          accent: '#059669',
          muted: '#9CA3AF'
        }
      }
    },
  },
  plugins: [],
}