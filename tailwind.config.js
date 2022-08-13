/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //'./pages/**/*.{html,js}',
    //'./components/**/*.{html,js}',
    './dist/index.html',
    //'./tailwindcss/**/*.{html,js}',
    './dist/test_responsive.html'
    
  ],
  theme: {    
    debugScreens: {
      position: ['top','left'],
    },
    extend: {
      fontFamily:{
        headline:['Montserrat-ExtraLight'],
        rubik:['RubikDistressed-Regular'],

      },
      colors:{
        colorDorado:'#ba9120',
        colorFondo:'#474746',
        colorLetra:'#080807',
      }     
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),  
  ],
}
