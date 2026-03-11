import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import movieDetail from "./pages/movieDetail";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<movieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
