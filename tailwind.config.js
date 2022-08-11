/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './dist/index.html',
    './tailwindcss/**/*.{html,js}',
    
  ],
  theme: {
    debugScreens: {
      position: ['top','left'],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}
