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
        "INSERT INTO tasks (title, description, project_id, assigned_to, status) VALUES (?, ?, ?, ?, ?)",
        [task.title, task.description, task.project_id, task.assigned_to, task.status]
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

module.exports = {
    getAllTasks,
    getTasksByProject,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};