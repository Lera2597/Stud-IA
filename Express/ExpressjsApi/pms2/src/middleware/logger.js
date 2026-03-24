const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);// muestra el metodo y la url de la peticion
    next();
}

module.exports = logger;