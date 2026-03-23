const express = require("express");
const app = express(); // crea una instancia de express

app.use(express.json()); // para recibir json en las peticiones o sulicitudes al servidor
const port = 3000;

const projects =  [
    {
        id:1,
        name:"Website design",
        status:"active"
    },
    {
        id:2,
        name:"Mobile App design",
        status:"planning"
    }
]
app.get("/", (req, res) => {
    res.send("Project Management System - API");
});

app.get("/api", (req, res) => {
    res.json({
        name : "Project Management System - API",
        version : "1.0.0",
        status : "running"
    });
})

app.get("/api/projects", (req, res) => {
    res.json(projects);
})

app.get("/api/projects/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if(!project){
        res.status(404).json({message:"Project not found"});
    }
    res.json(project);
})

//en el cuerpo de la peticion(mensaje POST)se envian los datos en json
app.post("/api/projects", (req, res) => {
    const {name, status} = req.body;

    const newProject = {
        id: projects.length + 1,
        name,
        status
    }
    projects.push(newProject);
    res.status(201).json(newProject);
})


app.put("/api/projects/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if(!project){
        res.status(404).json({message:"Project not found"});
    }
    const {name, status} = req.body;
    project.name = name || project.name;// sino hay name en el cuerpo de la peticion, se usa el name del proyecto 
    project.status = status || project.status;// sino hay status en el cuerpo de la peticion, se usa el status del proyecto
    res.json(project);
})

app.delete("/api/projects/:id", (req, res) => {
    const id = parseInt(req.params.id); // obtener el id de la peticion
    const index = projects.findIndex(p => p.id === id);
    if(index === -1){
        res.status(404).json({message:"Project not found"});
    }
    const deletedProject = projects.splice(index, 1);
    res.json({message:"Project deleted",
        project: deletedProject[0]
    });
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});