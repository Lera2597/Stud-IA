const jwt = require("jsonwebtoken");
const SECRET_KEY = "my_secret_key";

const authenticate = (req, res, next) => {
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJtaWd1ZWxAZ21haWwuY29tIiwiaWF0IjoxNzc1MDAxMjc0LCJleHAiOjE3NzUwMDQ4NzR9.145UXK_VlZWMOXDIW_nViDeTDPpnTtkHdiFFIyZYs-I
    const header = req.headers.authorization;
    // imprimir la ruta de este archivo
    console.log(`${__filename} | header: ${header}`);
    if(!header){
        return res.status(401).json({message:"Token not found"});
    }
    const token =  header.split(" ")[1];
    try {
        const decoded =  jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({message:error.message});
    }
}

module.exports = authenticate;
