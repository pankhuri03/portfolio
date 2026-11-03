
import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'

import Home from './pages/Home'
import Background from './pages/Background'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'



import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-page text-ink">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
