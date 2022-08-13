1. npm init -y
2. npm install tailwindcss postcss-cli autoprefixer
3. npx tailwindcss init -p
4. Rellenamos tailwind.css
5. Cambiamos los scripts del json por:
          "scripts": {
    "build": "postcss tailwind.css -o dist/css/styles.css",
    "watch": "postcss tailwind.css -o dist/css/styles.css --watch"
  },
6. Creamos la carpeta dist/css/styles.css y dist/index.html.
    **IMPORTANTE** Ejecutamos npm run build y se rellena el styles.css
7. Los tamaños por defecto de letra son 17
8. Aplicación PostCSS Language Support para que lea los @tailwind
      En el .json añadir 
          "emmet.includeLanguages": {
          "postcss": "css"
          }
9. Instalamos npm install tailwindcss-debug-screens --save-dev
      tailwind.config.js
      plugins:[
        require("tailwindcss-debug-screens"),
      ]

      theme: {
        debugScreens: {
          position: ['top','left'],
        },
      }

      npm run build

      y añadimos al index.html <body class="bg-blue-300 debug-screens">

      npm run build
10. Si quiero aplicar estilos comunes para los h1 por ej, lo añado en tailwind.css
11. Para descargar una fuente de google, google fonts,download family.
Descargar de static solo las necesarias para evitar peso.
La añadimos en dist/fonts
y en tailwind.css
dentro de @layer base
@font-face{
  font-family: Monserrat;
  src: url(/dist/fonts/Montserrat/Montserrat-ExtraLight.ttf) formal("truetype");
}
y en tailwind.config
en theme, extend añadimos
fontFamily:{
  headline:['Montserrat']
}
12. Para usar iconos feather icons
    Elegimos el icono tamaño color etc y luego lo clickamos abrimos el enlace en el
    navegador y vemos codigo fuente, copiamos el código y lo insertamos en el html y añadimos flex al boton para que lo una.
    item-center para que quede centrado el icono
    y w-max para que el fondo vaya relacionado con las letras
