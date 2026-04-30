import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import client from "../api/client"

import TasksList from "../components/TasksList.jsx"
import KanbanBoard from "../components/KanbanBoard.jsx"
const Tasks = () => {
    const { projectId } = useParams()
    const [tasks , setTasks] = useState([])
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')

    const [status , setStatus] = useState('todo')
    const [priority , setPriority] = useState('low')
    const [page , setPage] = useState(1)
    const [view , setView] = useState('list')
    
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
    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         try {
    //             const response = await client.get(`/projects/${projectId}/tasks`)
    //             setTasks(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchTasks()
    // }, [projectId])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await client.get(`/listTasks?status=${status}&priority=${priority}&page=${page}&limit=5`)
                setTasks(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTasks()
    }, [projectId, status, page])
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

                <div>
                    <h3>Filtros</h3>
                    <select 
                        className="form-control mb-3"
                        onChange={(e)=> setStatus(e.target.value)}
                    >
                        <option value="">Todas las tareas</option>
                        <option value="todo">Pendientes</option>
                        <option value="in_progress">En progreso</option>
                        <option value="pending">En revisión</option>
                        <option value="done">Completadas</option>
                    </select>
                </div>

                <h5>Seleccion de vista de tareas</h5>
                <div className="mb-3">
                    <button
                        className="btn btn-outline-light me-2"
                        onClick={() => setView('list')}
                    >
                        Lista
                    </button>

                    <button
                        className="btn btn-outline-light me-2"
                        onClick={() => setView('kanban')}
                    >
                        Kanban 
                    </button>
                </div>

                {view === 'list' ? (
                    <TasksList tasks={tasks} />
                ) : (
                    <KanbanBoard tasks={tasks} setTasks={setTasks}/>
                )}

                {/* {tasks.map((task) => (
                    <div className="card p-3 mb-2" key={task.id}>
                        <h6>{task.title}</h6>
                        <p>{task.description}</p>
                        <span>{task.status}</span>

                        <button
                            className="btn btn-danger mx-auto"
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))} */}

                <div className="d-flex gap-2 mt-3">
                    <button
                        className="btn btn-outline-light"
                        onClick={()=> setPage(page-1)}
                    >
                        Anterior
                    </button>
                    <button
                        className="btn btn-outline-light"
                        onClick={()=> setPage(page+1)}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tasks