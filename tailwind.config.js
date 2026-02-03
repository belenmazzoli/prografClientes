/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./index.html",
    "./src/*.html",
    "./src/**/*.{html,js}",
    "./**/*.html"
  ],
  theme: {
    extend: {},
     fontFamily: {
        // Esto te permite usar la clase 'font-fa-pro' si la necesitas
        'fa-pro': ['"Font Awesome 6 Pro"', 'sans-serif'],
      }
  },
  plugins: [],
}

 