const getAllTasks = async (db) => {
    return db.all("SELECT * FROM tasks")
}

const getTasksByProject = async (db, projectId) => {
    return db.all("SELECT * FROM tasks WHERE project_id = ?", [projectId]);
}
const getTaskById = async (db, id) => {
    return db.get("SELECT * FROM tasks WHERE id = ?", [id]);
}

const createTask = async (db, task) => {
    const result = await db.run(
        "INSERT INTO tasks (title, description, project_id, user_id, status,priority,due_date) VALUES (?, ?, ?, ?, ?)",
        [task.title, task.description, task.project_id, task.user_id, task.status, task.priority, task.due_date]
    );
    return { id: result.lastID, ...task };
}

const updateTask = async (db, id, task) => {
    await db.run(
        "UPDATE tasks SET title = ?, description = ?, project_id = ?, assigned_to = ?, status = ? WHERE id = ?",
        [task.title, task.description, task.project_id, task.assigned_to, task.status, id]
    );
    return getTaskById(db, id);
}

const deleteTask = async (db, id) => {
    const task = await getTaskById(db, id);
    await db.run(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );
    return task
}

const listTasks  = (db, queryParams) => {
    const { status, priority, limit, offset, sort} = queryParams;
    let query = "SELECT * FROM tasks WHERE 1=1";
    let params = [];
    //filtramos culumnas de la tabla tasks
    if (status) {
        query += " AND status = ?";
        params.push(status);
    }
    if (priority) {
        query += " AND priority = ?";
        params.push(priority);
    }
    query += ` ORDER BY ${sort} DESC`;
    
    query += " LIMIT ? OFFSET ?";
    params.push(limit, offset);
    query += ";";
    //console.log(query, params);
    //const tasks = await db.all(query, params);
    // console.log(tasks);
    return db.all(query, params)
}
module.exports = {
    getAllTasks,
    getTasksByProject,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    listTasks
};