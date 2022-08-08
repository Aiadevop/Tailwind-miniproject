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
    Ejecutamos npm run build y se rellena el styles.css

