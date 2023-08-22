/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobF: ['Roboto, sans-serif', 'sans'],
        RobG: ['Roboto Condensed', 'sans-serif']
      },
      fontWeight: {
        cust: ['600', '800'], // Add more weights if needed
      },
    },
  },
  plugins: [],
}