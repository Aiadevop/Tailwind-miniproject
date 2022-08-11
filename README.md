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