import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import client from "../api/client"
const Tasks = () => {
    const { projectId } = useParams()
    const [tasks , setTasks] = useState([])
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')

    const handleCreateTask = async () => {
        try {
            console.log("projectId: " , projectId)
            console.log("title: " , title)
            const response = await client.post(`/projects/${projectId}/tasks` ,
                {title,
                description,
                "status":"todo",
                "user_id":1
                }   
            )
            setTasks([...tasks , response.data])
            
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDeleteTask = async (id) => {
        try {
            await client.delete(`/tasks/${id}`)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await client.get(`/projects/${projectId}/tasks`)
                setTasks(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTasks()
    }, [projectId])

    return (
        <div className="container">
            <Navbar />
            <div className="mt-4">
                <h2>Tareas</h2>

                <input
                    className="form-control mb-2"
                    placeholder="Nueva tarea"
                    onChange={(e)=> setTitle(e.target.value)} 
                />

                <input
                    className="form-control mb-2"
                    placeholder="Agrega una descripcion"
                    onChange={(e)=> setDescription(e.target.value)} 
                />
                <button
                    className="btn btn-primary"
                    onClick={handleCreateTask}
                >
                    Crear
                </button>
                {tasks.map((task) => (
                    <div className="card p-3 mb-2" key={task.id}>
                        <h6>{task.title}</h6>
                        <p>{task.description}</p>
                        <span>{task.status}</span>

                        {/* //boton para eliminar tarea */}
                        <button
                            className="btn btn-danger mx-auto"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tasks