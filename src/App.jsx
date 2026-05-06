import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Project from './pages/Project'
import Propuesta from './pages/Propuesta'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<Project />} />
        <Route path="/propuesta" element={<Propuesta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
