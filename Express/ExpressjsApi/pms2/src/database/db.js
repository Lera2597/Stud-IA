const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

async function connectDB(){
    return open(
        {
            filename:"./database.sqlite",
            driver:sqlite3.Database
        }
    )
}

async function initDB(){
    const db = await connectDB()

    await db.exec(`
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                status TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name varchar(100) NOT NULL,
                email varchar(100) NOT NULL UNIQUE,
                password varchar(250) NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                role TEXT default 'agent' CHECK(role IN ('admin', 'manager', 'agent'))
            );

            CREATE TABLE IF NOT EXISTS task (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                project_id INTEGER NOT NULL,
                assigned_to INTEGER NOT NULL,
                title VARCHAR(200) NOT NULL,
                description VARCHAR(100),
                status TEXT DEFAULT 'todo' CHECK(status IN ('todo', 'in_progress', 'done')),
                priority TEXT DEFAULT 'low' CHECK(priority IN ('low', 'medium', 'high', 'critical')),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (project_id) REFERENCES projects(id),
                FOREIGN KEY (assigned_to) REFERENCES users(id)
            );
        `)
    return db
}
module.exports = {connectDB, initDB}