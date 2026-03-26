const express = require("express");
const app = express(); // crea una instancia de express
app.use(express.json()); // para recibir json en las peticiones o sulicitudes al servidor

const initDB = require("./database/db")

const logger = require("./middleware/logger"); // se debe ejecutar antes de las rutas
app.use(logger);

const projectsRoutes = require("./routes/projects.routes");
app.use("/api/projects", projectsRoutes);

const tasksRoutes = require("./routes/task.routes");
app.use("/api", tasksRoutes);

//manejo de errores despues de ejecutar las rutas o todas las peticiones
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const port = 3000;

initDB().then(database =>{
    app.locals.db = database
    console.log("Database ready!")

    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error("Error en la coneccion de la base datos")
})
