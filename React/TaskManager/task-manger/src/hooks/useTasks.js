import { useState, useEffect, use } from "react";

export function useTasks() {
    // const apiQuery = [
    //     { id: 1, text: "Estudiar React", description: "Leer libros de react y programar", completed: false },
    //     { id: 2, text: "Estudiar Python", description: "Leer libros de python y programar", completed: true },
    //     { id: 3, text: "Estudiar GO", description: "Leer libros de go y programar", completed: false },
    // ]
    const [tasks, setTasks] = useState([]);
    // const [tasks, setTasks] = useState(apiQuery);
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(true);

    const API_URL = "https://tasklistapi.vercel.app/tasks"
    
    // useEffect(setup, dependencias)    
    useEffect(() => {
        async function startFetch() {
            setLoading(true);
            const response = await fetch(API_URL, {
                headers: {
                    Authorization: "Bearer react-students-token"
                }
            });

            const data = await response.json();
            // const formattedTasks = data.map((task) => ({
            //     id: task.id,
            //     text: task.title,
            //     description: task.description,
            //     completed: task.completed
            // }))

            const formattedTasks = data.map(task => ({
                id: task.id,
                title: task.title,
                description: task.description,
                status: task.status,
                priority: task.priority,
                emoji: task.emoji
            }))

            if(!ignore){
                setTasks(formattedTasks);
                setLoading(false);
            }
        }
        let ignore = false;
        startFetch();
        return () => {
            ignore = true;
        }

    },[])
    const addTask = (task) => {
        if (task.text === "" || task.description === "") return
        const newtask = {
            id: tasks.length + 1,
            text,
            description,
            completed: false
        }
        setTasks([...tasks, newtask])// setTasks le dice al componente que el estado fue actuliazado. entonces debe renderizar el componente
    }

    const toggleTask = (id) => {
        const updateTask = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        setTasks(updateTask)
    }

    const filteredTasks = tasks.filter((task) => {
        if(filter === "completed") return task.completed;
        if(filter === "pending") return !task.completed;
        return true
    })

    return { tasks: filteredTasks, 
        addTask, 
        toggleTask,
        filter, 
        setFilter,
        loading };
}