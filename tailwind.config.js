/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F2EA',
        forest: '#1F3F2B',
        charcoal: '#1A1A1A',
        gold: '#C8B476'
      }
    },
  },
  plugins: [],
}
