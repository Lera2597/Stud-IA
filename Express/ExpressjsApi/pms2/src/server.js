const express = require("express");
const app = express(); // crea una instancia de express
app.use(express.json()); // para recibir json en las peticiones o sulicitudes al servidor

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
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});