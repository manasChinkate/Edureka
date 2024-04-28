/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': '#F5F5F5',
        'fontgray': '#81828B',
        'headerblue': '#BEE1FA',
        'switch': '#E1E0E1',
        'row' : '#F0F0F0'

      },
    },
  },
  plugins: [],
}