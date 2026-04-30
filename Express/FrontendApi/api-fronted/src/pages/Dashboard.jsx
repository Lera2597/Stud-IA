import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import client from "../api/client"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


const Dashboard = () => {
    const [projects , setProjects] = useState([])

    const [name , setName] = useState('')
    const [description , setDescription] = useState('')

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const handleCreateProject = async () => {
        try {
            const response = await client.post('/projects' , {name , description})
            setProjects([...projects , response.data])
            alert('Proyecto creado')
        } catch (error) {
            console.log(error)
            alert("Error")
        }
    }

    const handleDelete = async (id) => {
        try{
            await client.delete(`/projects/${id}`)
            setProjects(projects.filter(project => project.id !== id))
        } catch (error) {
            alert("Error al eliminar el proyecto")
        }
    }
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await client.get('/projects')
                setProjects(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjects()
    },[])
    return (
        <div className="container">
            <Navbar />
            
            <div className="mt-4">
                <h2>Dashboard</h2>
                <p>Bienvenido al sistema de gestión de proyectos</p>
            </div>

            <div className="card-custom p-3 mb-3">
                <h5>Nuevo Proyecto</h5>
                <input
                    className="form-control mb-2"
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)} 
                />

                <input 
                    className="form-control mb-2"
                    placeholder="Descripción"
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick = {handleCreateProject}
                >
                    Crear Proyecto
                </button>

            </div>
            <div className="row">
                {projects.map(project =>(
                    <div className="col-md-4" key={project.id}>
                        <div className="card p-3 mb-3">
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                            <p>{project.status}</p>

                            <button
                                className="btn btn-outline-secondary mt-2 mb-2"
                                onClick={()=> navigate(`/projects/${project.id}/tasks`)}
                            >
                                Ver Tareas
                            </button>
                            {/* renderizado condicional */}
                            {user?.role === 'admin' && (
                                <button
                                    className="btn btn-danger"
                                    onClick={()=> handleDelete(project.id)}
                                >
                                    Eliminar
                                </button>
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Dashboard