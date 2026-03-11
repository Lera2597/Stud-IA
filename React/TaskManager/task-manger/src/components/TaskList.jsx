import { useState } from "react"; // es el hook de react mas usado,este maneja el estado del componente
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

function TaskList({ name }) {
    //Creamos un estado 
    // constat [estado,establecerEstado] = useState(estadoInicial);
    // const [tasks, setTasks] = useState(apiQuery);
    // const [count, setCount] = useState(0);
    // const [filter,setFilter] = useState("all");
    const [newtask, setNewTask] = useState({text: "", description: ""});
    const {tasks, addTask, toggleTask,setFilter, loading} = useTasks();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setNewTask({
            ...newtask,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newtask);
        addTask(newtask);
        setNewTask({text: "", description: ""});
    }
    // estas funciones se llevaron a un hook llamado useTasks
    // const addTask = ()=>{
    //     const newtask = {
    //         id: tasks.length +1,
    //         text: `Tarea ${tasks.length +1}`
    //     }
    //     setTasks([...tasks,newtask])// setTasks le dice al componente que el estado fue actuliazado. entonces debe renderizar el componente
    // }

    // const updateCounter = ()=>{
    //     setCount(count + 1)
    // }

    // const toggleTask = (id) => {
    //     const updateTask = tasks.map((task) => 
    //         task.id === id ? { ...task, completed: !task.completed } : task
    //     )
    //     setTasks(updateTask)
    // }

    // d
    return (
        <>
            <h2>Lista: {name}</h2>
            <div className="task-list">
                {/* <button onClick={addTask}>Agregar tarea dummy</button>
                <button onClick={updateCounter}>Contador: {count}</button> */}

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="text"
                        placeholder="Ingrese una tarea" 
                        value={newtask.text}
                        onChange={handleChange}
                    />
                    <input type="text"
                        name="description"
                        placeholder="Ingrese una descripcion" 
                        value={newtask.description}
                        onChange={handleChange}
                    />
                    <button type="submit">Agregar</button>
                </form>

                <div className="filters">
                        <button onClick={()=>setFilter("all")}>Todas</button>
                        <button onClick={()=>setFilter("completed")}>Completadas</button>
                        <button onClick={()=>setFilter("pending")}>Pendientes</button>
                </div>
                {/* {tasks.map((task) => (
                    <TaskItem key={task.id} text={task.text} description={task.description} />
                ))} */}

                {/* {
                    filteredTasks.map((task) => (
                        <TaskItem key={task.id} 
                        task={task} 
                        toggleTask={toggleTask} />
                    ))
                } */}

                {/* {
                    tasks.map((task) => (
                        <TaskItem key={task.id} 
                        task={task} 
                        toggleTask={toggleTask} />
                    ))
                } */}
                {
                    loading ?(<p>Cargando...</p>): 
                        tasks.map((task) => (
                            <TaskItem 
                            key={task.id} 
                            task={task} 
                            toggleTask={toggleTask} />
                        ))
                }
            </div>
        </>
    );
}

export default TaskList