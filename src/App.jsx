import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Harmonia from './pages/Harmonia'
import Kaworu from './pages/Kaworu'
import Kyoko from './pages/Kyoko'
import Urania from './pages/Urania'
import Propuesta from './pages/Propuesta'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/harmonia" element={<Harmonia />} />
        <Route path="/kaworu" element={<Kaworu />} />
        <Route path="/kyoko" element={<Kyoko />} />
        <Route path="/urania" element={<Urania />} />
        <Route path="/propuesta" element={<Propuesta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
