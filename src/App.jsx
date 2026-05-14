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
import Aether from './pages/Aether'
import Solano from './pages/Solano'
import Lumis from './pages/Lumis'
import Vela from './pages/Vela'
import Canto from './pages/Canto'
import Nexus from './pages/Nexus'
import Bruma from './pages/Bruma'
import Zenith from './pages/Zenith'
import Marea from './pages/Marea'
import Halo from './pages/Halo'
import Cipher from './pages/Cipher'
import Duna from './pages/Duna'

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
        <Route path="/aether" element={<Aether />} />
        <Route path="/solano" element={<Solano />} />
        <Route path="/lumis" element={<Lumis />} />
        <Route path="/vela" element={<Vela />} />
        <Route path="/canto" element={<Canto />} />
        <Route path="/nexus" element={<Nexus />} />
        <Route path="/bruma" element={<Bruma />} />
        <Route path="/zenith" element={<Zenith />} />
        <Route path="/marea" element={<Marea />} />
        <Route path="/halo" element={<Halo />} />
        <Route path="/cipher" element={<Cipher />} />
        <Route path="/duna" element={<Duna />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
