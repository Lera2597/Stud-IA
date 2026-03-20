const express = require("express");
const app = express();
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
    res.send("Hello World!");
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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});