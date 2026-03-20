const express = require("express");
const app = express();
const port = 3000;

// solicitudes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/projects",(req,res)=>{
    res.send("Proyectos");
});
app.get("/api/projects",(req,res)=>{
    const projects = [
        {id:1,name:"Proyecto 1"},
        {id:2,name:"Proyecto 2"},
        {id:3,name:"Proyecto 3"}
    ]
    res.json(projects);
});

/// :id segmento de ruta variable
app.get("/api/projects/:id",(req,res)=>{
    const id = req.params.id;
    res.json({message:`Buscando proyecto ${id}`});
});

app.get("/about",(req,res)=>{
    res.send("Acerca de");
});

app.get("/users",(req,res)=>{
    res.send("Usuarios");
})
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});