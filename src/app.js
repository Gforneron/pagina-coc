// LLamadas de Librerias
const express = require("express"); // framework para construir aplicaciones web
const path = require("path"); // manejo de rutas


// Crear la aplicación de Express
const app = express();
const port = process.env.port || 3001; 

// Configurar el motor de vistas a usar

app.set("view engine", "ejs"); // usar EJS como motor de vistas
app.set("views", path.resolve(__dirname, "views")); // establecer la carpeta de vistas en ./views

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));


// Configurar las rutas de la aplicación
app.use("/", require("./routers/router.js")); // rutas para el inicio de la aplicación

// Manejar errores 404
//app.use((req, res, next) => {
//  res.status(404).render("main/no-encontrado"); // renderizar la vista 404 cuando no se encuentra la ruta
//});


// Iniciar el servidor
app.listen(port, () =>
  console.log("Corriendo servidor en: http://localhost:3001/")
);
