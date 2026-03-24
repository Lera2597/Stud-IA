let tasks = [
    {
        id:1,
        title:"Task 1",
        project_id:1,
        status:"active"
    },
    {
        id:2,
        title:"Task 2",
        project_id:1,
        status:"in_progress"
    }
    
]

const getTasksByProject = (req, res) => {
    const projectId = parseInt(req.params.projectId);
    const projectTasks = tasks.filter(
        task => task.project_id === projectId
    )
    res.json(projectTasks);
}

const createTask = (req, res) => {
    const {title, status} = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        status,
        project_id : parseInt(req.params.projectId)

    }
    tasks.push(newTask);
    res.status(201).json(newTask);// status 201: recurso creado
}

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if(!task){
        res.status(404).json({message:"Task not found"});
    }
    res.json(task);
}

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if(!task){
        res.status(404).json({message:"Task not found"});
    }
    const {title, status} = req.body;
    task.title = title || task.title;
    task.status = status || task.status;
    res.json(task);
}

const deleteTask = (req,res)=>{
    const id= parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1){
        res.status(404).json({message:"Task not found"});
    }
    const deletedTask = tasks.splice(index, 1);
    res.json({message:"Task deleted", task: deletedTask[0]});

}

module.exports = {getTasksByProject, createTask, getTaskById, updateTask, deleteTask};