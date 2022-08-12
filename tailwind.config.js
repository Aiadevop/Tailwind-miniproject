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
    extend: {
      fontFamily:{
        headline:['Montserrat-ExtraLight']
      },
      colors:{
        colorDorado:'#ba9120',
        colorFondo:'#474746'
      }    
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}
