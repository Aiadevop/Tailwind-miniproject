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
13. Fondo HeroPatterns
    Copio el código que aparece y añado en tailwind.css
    body { codigo }
14. Configurar Alpinejs
    Google github alpinejs
    Seguir su instalación en https://github.com/alpinejs/alpine/blob/v2.8.2/README.es.md , ponemos en el head el script
    Descargamos en VSC la aplicación Alpine.js IntelliSense
    Esto nos permite generar variables por ejemplo
    <section x-data="{ word: 'Hello' }" id="header">
    Que las podemos usar posteriormente como en este caso.
    <h2 class="mt-2">Word: <span x-text="word"></span>  Muscle building • Functional training •
                        Nutritional advice</h2>
    Generando un resultado en la web
    Word: Hello Muscle building • Functional training • Nutritional advice
    La variable solo aparecerá en la section que está definida.

    <!-- Definimos la variable dark en el x data -->
    <!-- En el x-bind le decimos que si dark es true lo igualamos a dark si no a nada -->
    <html x-data="{ dark: false }" x-bind:class="dark ? 'dark' : '' " lang="es">

  15. Previously used directives in Alpine.js
        ● x-data > to define variables
        ● x-bind, or short form “:” > to make attributes dynamic, e.g. the classes
        ● @click > to change variables with a click
        ● x-show > to show or hide elements dynamically
        ● x-text > to change text dynamically
        

