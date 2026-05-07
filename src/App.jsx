import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Harmonia from './pages/Harmonia'
import Kaworu from './pages/Kaworu'
import Kyoko from './pages/Kyoko'
import Urania from './pages/Urania'
import Contact from './pages/Contact'
import WhyOnOff from './pages/WhyOnOff'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/harmonia" element={<Harmonia />} />
        <Route path="/kaworu" element={<Kaworu />} />
        <Route path="/kyoko" element={<Kyoko />} />
        <Route path="/urania" element={<Urania />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why" element={<WhyOnOff />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
