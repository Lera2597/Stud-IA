const tasksService = require("../services/tasks.service");

const getAllTasks  = async (req, res) =>  {
    const tasks = await tasksService.getAllTasks(req.app.locals.db);
    res.status(200).json(tasks);
}

const getTasksByProject = async(req, res) => {
    try {
        const projectId = parseInt(req.params.projectId);
        const projectTasks = await tasksService.getTasksByProject(req.app.locals.db, projectId);
        if(!projectTasks){
            res.status(404).json({message:"Project not found"});
        }
        res.status(200).json(projectTasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTaskById = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        const task =  await tasksService.getTaskById(req.app.locals.db, id);
        if(!task){
            res.status(404).json({message:"Task not found"});
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const createTask = async(req, res) => {
    try {
        const newTask = { project_id: req.params.projectId, ...req.body };
        const task =  await tasksService.createTask(req.app.locals.db, newTask);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateTask = async(req, res) => {
    try
    {
        const id = parseInt(req.params.id);
        const task =  await tasksService.updateTask(req.app.locals.db, id, req.body);
        if(!task){
            res.status(404).json({message:"Task not found"});
        }
        res.json(task);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteTask = (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const task =  tasksService.deleteTask(req.app.locals.db, id);
        if(!task){
            res.status(404).json({message:"Task not found"});
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

module.exports = {getAllTasks, getTasksByProject, getTaskById, createTask, updateTask, deleteTask};