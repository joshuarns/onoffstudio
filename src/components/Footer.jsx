import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo">onoff<span>studio</span></Link>
      <nav className="footer__links" aria-label="Footer navigation">
        <Link to="/portfolio" className="footer__link">Portfolio</Link>
        <Link to="/why" className="footer__link">Why onoff</Link>
        <Link to="/contact" className="footer__link">Contact</Link>
      </nav>
      <span className="footer__copy">© 2026 onoff studio. All rights reserved.</span>
    </footer>
  )
}
