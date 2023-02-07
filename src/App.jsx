import {Route, Routes} from 'react-router-dom'

import Home from "./pages/Home"
import ProjectPage from './pages/ProjectPage'

import './App.css'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:id" element={<ProjectPage />} />
    </Routes>
  )
}

export default App
