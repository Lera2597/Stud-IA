const validateTaskStatus = (req,res,next) => {
    const { status } = req.body
    console.log(status)
    const statusList = ["todo","in_progress","done"]
    if(!statusList.includes(status) )
    {
        res.status(400).json({message:"Estado de tarea no permitido"})
    }
    next()
}

module.exports = validateTaskStatus;