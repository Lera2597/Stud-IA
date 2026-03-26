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
const  getProjects = async (req, res) => {
    //throw new Error("Test error");//solo para probar el middleware
    const projects = await req.app.locals.db.all("SELECT * FROM projects");
    res.json(projects);
}

const getProjectById = async (req,res)=>{
    const id = parseInt(req.params.id);
    // const project = projects.find(p => p.id === id);
    // if(!project){
    //     res.status(404).json({message:"Project not found"});
    // }
    // res.json(project);
    try
    {
        const project = await req.app.locals.db.get("SELECT * FROM projects WHERE id = ?", [id]);
        if(!project){
            res.status(404).json({message:"Project not found"});
        }
        res.json(project);
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
    }
}

const createProject = async (req, res) => {
    const {name, status,description} = req.body;

    // const newProject = {
    //     id: projects.length + 1,
    //     name,
    //     status,
    //     description
    // }
    // projects.push(newProject);
    // res.status(201).json(newProject);

    const result = await req.app.locals.db.run(
            "INSERT INTO projects (name, status, description) VALUES (?, ?, ?)",
            [name, status, description]
        ); //parameter binding
    
    res.status(201).json({id: result.lastID, name, status, description});
}

const updateProject = async(req, res) => {
    // const id = parseInt(req.params.id);
    // const project = projects.find(p => p.id === id);
    // if(!project){
    //     res.status(404).json({message:"Project not found"});
    // }
    // const {name, status, description} = req.body;
    // project.name = name || project.name;// sino hay name en el cuerpo de la peticion, se usa el name del proyecto 
    // project.status = status || project.status;// sino hay status en el cuerpo de la peticion, se usa el status del proyecto
    // project.description = description || project.description;// sino hay description en el cuerpo de la peticion, se usa la description del proyecto
    // res.json(project);

    const {id} = req.params
    const { name, description, status} = req.body

    try{
        if(isNaN(id)){
            return res.status(400).json({Messge:"Invalid Id"})
        }
        const result = await req.app.locals.db.run(
            `UPDATE projects 
            SET name=? ,description=?, status=?
            WHERE id=?
            `,
            [name,description,status,id]
        )
        if(result.changes === 0)
        {
            return res.status(404).json({Message:"Project no found"})
        }

        const updateProject = await req.app.locals.db.get(
            `SELECT * FROM projects WHERE id=?`,
            [id]
        )
        res.json(updateProject)
    }
    catch (error) {
        res.status(500).json({message:error.messageessage})
    }
}


const deleteProject = async (req, res) => {
    // const id = parseInt(req.params.id); // obtener el id de la peticion
    // const index = projects.findIndex(p => p.id === id);
    // if(index === -1){
    //     res.status(404).json({message:"Project not found"});
    // }
    // const deletedProject = projects.splice(index, 1);
    // res.json({message:"Project deleted",
    //     project: deletedProject[0]
    // });
    const {id} = req.params
    try{
        if(isNaN(id)){
            return res.status(400).json({Messge:"Invalid Id"})
        }
        const result = await req.app.locals.db.run(
            `DELETE FROM projects WHERE id=?`,
            [id]
        )
        if(result.changes === 0)
        {
            return res.status(404).json({Message:"Project no found"})
        }
        res.status(204).send()
    }
    catch (error) {
        res.status(500).json({message:error.messageessage})
    }

}

module.exports = {getProjects, getProjectById, createProject, updateProject, deleteProject};