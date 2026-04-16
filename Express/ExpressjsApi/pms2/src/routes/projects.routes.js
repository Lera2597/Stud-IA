const express = require("express");
const router = express.Router();

const {getProjects, getProjectById, createProject, updateProject, deleteProject } = require("../controllers/projects.controller");

const authenticate = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const validateProject = require("../middleware/validateProject");

// Read
router.get("/", getProjects);

// Read by Id
router.get("/:id", getProjectById);

// Create
/**
 * @openapi
 * /projects:
 *   post:
 *     summary: Create project
 *     description: Create a new project
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               description:
 *                 type: string
 *               required:
 *                 - name
 *     responses:
 *       201:
 *         description: Project created 
 */
router.post(
    "/", 
    authenticate,
    authorize(["admin", "manager"]), //solo los administradores y los managers pueden crear proyectos
    validateProject, 
    createProject
);

// Update
router.put("/:id", updateProject);

// Delete
router.delete(
    "/:id",
    authenticate,
    authorize(["admin"]), // solo los administradores pueden borrar
    deleteProject);

module.exports = router;