const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_secret_key";

const registerUser = async (db, data) => {  
    const {name, email, password, role} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role || "agent";
    const result = await db.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, userRole]
    ); //parameter binding
    
    return {id: result.lastID, name, email}
}

const loginUser = async (db, data) => {  
    const {email, password} = data;
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    const token = jwt.sign(
        {id: user.id, email: user.email, role: user.role}, 
        SECRET_KEY,
        {expiresIn: "1h"});

    return {token};
}

module.exports = {registerUser, loginUser};