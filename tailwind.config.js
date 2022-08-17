/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //or media depende de el modo que tengas en Windows
  content: [
    './dist/index.html',
    //'./tailwindcss/**/*.{html,js}',
    './dist/test_responsive.html',    
  ],
  theme: {    
    debugScreens: {
      position: ['top','left'],
    },
    extend: {
      fontFamily:{
        headline:['Montserrat-ExtraLight'],
        montneg:['Montserrat-Negrita'],
        montnegruesa:['Montserrat-Medium'],
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
