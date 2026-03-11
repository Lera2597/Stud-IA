import Header from "./components/Header"
import TaskList from "./components/TaskList"
import './App.css'
function App() {
  return (
    <div className="container">
      <Header title="Titulo de mi aplicacion" />
      <TaskList name="Tareas pendientes" />
    </div>
  )
}

export default App
