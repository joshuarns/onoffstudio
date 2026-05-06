import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="main-nav">
        <Link to="/" className="nav__logo">onoff<span>studio</span></Link>
        <div className="nav__links">
          <NavLink to="/portfolio" className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}>Portfolio</NavLink>
          <NavLink to="/propuesta" className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}>Technical Proposal</NavLink>
        </div>
        <Link to="/#contact" className="nav__cta" onClick={close}>Contact</Link>
        <button
          className={`nav__toggle${open ? ' is-open' : ''}`}
          id="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile${open ? ' is-open' : ''}`} id="nav-mobile">
        <NavLink to="/portfolio" className="nav__link" onClick={close}>Portfolio</NavLink>
        <NavLink to="/propuesta" className="nav__link" onClick={close}>Technical Proposal</NavLink>
        <Link to="/#contact" className="nav__cta" onClick={close}>Contact</Link>
      </div>
    </>
  )
}
