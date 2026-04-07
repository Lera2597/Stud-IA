const projectsService = require("../services/projects.service")
// devolre todos los proyectos
const  getProjects = async (req, res) => {
    const status = req.query.status
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const sort = req.query.sort || "created_at";

    const queryParams = {status, limit, offset, sort};

    const projects = await projectsService.getAllProjects(req.app.locals.db, queryParams);
    res.json(projects);
}

const getProjectById = async (req,res)=>{
    const id = parseInt(req.params.id)
    try
    {
        const project = await projectsService.getProjectById(req.app.locals.db, id);
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
    const project = await projectsService.createProject(req.app.locals.db, req.body);
    res.status(201).json(project);// status 201: recurso creado
}

const updateProject = async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        const project = await projectsService.updateProject(req.app.locals.db, id, req.body);
        if(!project)
        {
            return res.status(404).json({Message:"Project no found"})
        }
        res.status(200).json(project)
    }
    catch (error) {
        res.status(500).json({message:error.messageessage})
    }
}


const deleteProject = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const project = await projectsService.deleteProject(req.app.locals.db, id);
        if(!project)
        {
            return res.status(404).json({Message:"Project no found"})
        }
        res.status(200).json({message:"Project deleted", project})
    }
    catch (error) {
        res.status(500).json({message:error.messageessage})
    }

}

module.exports = {getProjects, getProjectById, createProject, updateProject, deleteProject};