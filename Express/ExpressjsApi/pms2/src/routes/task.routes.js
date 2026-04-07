const express = require("express");
const router = express.Router();

const {getAllTasks, getTasksByProject, getTaskById, createTask, updateTask, deleteTask, getCurrentUser, listTasks} = require("../controllers/tasks.controller");
const validateTaskStatus = require("../middleware/validateTaskStatus")
const authenticate = require("../middleware/auth");
router.get("/tasks", getAllTasks);
router.get("/projects/:projectId/tasks", getTasksByProject);
router.get("/tasks/:id", getTaskById);
router.post("/projects/:projectId/tasks",validateTaskStatus, createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/me",authenticate, getCurrentUser);
router.get("/listTasks", listTasks);

module.exports = router;