const authService = require("./auth.service");

const register = async (req, res) => {
    const user = await authService.registerUser(req.app.locals.db, req.body);
    res.status(201).json(user);
};

const login = async (req, res) => {
    const token = await authService.loginUser(req.app.locals.db, req.body);
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    res.json(token);
};

module.exports = { register, login };