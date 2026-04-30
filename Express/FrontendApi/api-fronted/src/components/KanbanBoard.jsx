import {DragDropContext} from "@hello-pangea/dnd"
import KanbanColumn from "./KanbanColumn";
import client from "../api/client";

const KanbanBoard = ({tasks, setTasks}) => {
    const columns = {
        todo: tasks.filter(t => t.status === 'todo'),   
        in_progress: tasks.filter(t => t.status === 'in_progress'),
        done: tasks.filter(t => t.status === 'done'),
        pending: tasks.filter(t => t.status === 'pending')
    }

    // const handleOnDragEnd = async (result) => {
    //     const {destination, draggableId} = result
    //     if(!destination) return
    //     const newStatus = destination.draggableId
        
    //     try{
    //         await client.put(`/tasks/${draggableId}` , {status: newStatus})
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }


    const handleOnDragEnd = async (result) => {
        const {source, destination, draggableId} = result
        if(!destination) return

        // Si se suelta en el mismo lugar, no hacer nada
        if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
        ) {
        return;
        }

        const newStatus = destination.droppableId
        
        try{
            await client.put(`/tasks/${draggableId}` , {status: newStatus})

            // const updatedTasks = tasks.map(t => 
            //     t.id === parseInt(draggableId)
            //     ? {...t , status: newStatus} : t)

            // Crear copias de los arrays para no mutar el estado
            const nuevosTareas = { ...tasks };
            
            // Obtener la tarea que se está moviendo
            const [tareaMovida] = nuevosTareas[source.droppableId].splice(source.index, 1);

            // Insertar la tarea en la nueva posición
            nuevosTareas[destination.droppableId].splice(destination.index, 0, tareaMovida);

            setTasks(nuevosTareas)

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="row">
                <KanbanColumn id="todo" title="To Do" tasks={columns.todo}/>
                <KanbanColumn id="in_progress" title="In progress" tasks={columns.in_progress}/>
                <KanbanColumn id="done" title="Done" tasks={columns.done}/>
                <KanbanColumn id="pending" title="Pending" tasks={columns.pending}/>

            </div>
        </DragDropContext>
    )
}

export default KanbanBoard