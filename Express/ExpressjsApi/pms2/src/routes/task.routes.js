const express = require("express");
const router = express.Router();

const {getAllTasks, getTasksByProject, getTaskById, createTask, updateTask, deleteTask} = require("../controllers/tasks.controller");
const validateTaskStatus = require("../middleware/validateTaskStatus")

router.get("/tasks", getAllTasks);
router.get("/projects/:projectId/tasks", getTasksByProject);
router.get("/tasks/:id", getTaskById);
router.post("/projects/:projectId/tasks",validateTaskStatus, createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;