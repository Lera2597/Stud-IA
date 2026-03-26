const getAllProjects = async (db) => {
    return db.all("SELECT * FROM projects");
}
const getProjectById = async (db, id) => {
    return db.get("SELECT * FROM projects WHERE id = ?", [id]);
}

const createProject = async (db, project) => {
    const result = await db.run(
        "INSERT INTO projects (name, status, description) VALUES (?, ?, ?)",
        [project.name, project.status, project.description]
    ); //parameter binding
    
    return {id: result.lastID, ...project}
}

const updateProject = async (db, id, project) => {
    await db.run(
        "UPDATE projects SET name = ?, status = ?, description = ? WHERE id = ?",
        [project.name, project.status, project.description, id]
    );

    return getProjectById(db, id);
}

const deleteProject = async (db, id) => {
    const project = await getProjectById(db, id);
    await db.run(
        "DELETE FROM projects WHERE id = ?",
        [id]
    );
    //retorna el elemento borrado
    return  project
}
module.exports = {getAllProjects, getProjectById, createProject, updateProject, deleteProject};