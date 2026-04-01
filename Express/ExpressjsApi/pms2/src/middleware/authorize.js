const authotize = (roles = []) => {
    return (req, res, next) => {
        const userRole = req.user.role.toLowerCase();
        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();

    }

}

module.exports = authotize