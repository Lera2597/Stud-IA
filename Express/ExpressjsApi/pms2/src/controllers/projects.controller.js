const projects =  [
    {
        id:1,
        name:"Website design",
        status:"active",
        description:"Website design and development"
    },
    {
        id:2,
        name:"Mobile App design",
        status:"planning",
        description:"Mobile App design and development"
    }
]

// devolre todos los proyectos
const getProjects = (req, res) => {
    //throw new Error("Test error");//solo para probar el middleware
    res.json(projects);
}

const getProjectById = (req,res)=>{
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if(!project){
        res.status(404).json({message:"Project not found"});
    }
    res.json(project);
}

const createProject = (req, res) => {
    const {name, status,description} = req.body;

    const newProject = {
        id: projects.length + 1,
        name,
        status,
        description
    }
    projects.push(newProject);
    res.status(201).json(newProject);
}

const updateProject = (req, res) => {
    console.log(`body:${JSON.stringify(req.body)}`);
    console.log(`params:${JSON.stringify(req.params)}`);

    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);
    if(!project){
        res.status(404).json({message:"Project not found"});
    }
    const {name, status, description} = req.body;
    project.name = name || project.name;// sino hay name en el cuerpo de la peticion, se usa el name del proyecto 
    project.status = status || project.status;// sino hay status en el cuerpo de la peticion, se usa el status del proyecto
    project.description = description || project.description;// sino hay description en el cuerpo de la peticion, se usa la description del proyecto
    res.json(project);
}


const deleteProject = (req, res) => {
    const id = parseInt(req.params.id); // obtener el id de la peticion
    const index = projects.findIndex(p => p.id === id);
    if(index === -1){
        res.status(404).json({message:"Project not found"});
    }
    const deletedProject = projects.splice(index, 1);
    res.json({message:"Project deleted",
        project: deletedProject[0]
    });
}

module.exports = {getProjects, getProjectById, createProject, updateProject, deleteProject};