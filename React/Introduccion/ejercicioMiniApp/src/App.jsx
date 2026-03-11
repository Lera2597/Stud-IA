import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
function App() {
  return (
    <>
      <Header/>
      <div className='peliculas'>
        <Card nombrePelicula="avatar" />
        <Card nombrePelicula="matrix" />
        <Card nombrePelicula="thor" />
      </div>
      
    </>
  )
}

export default App
