import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const INK   = '#1A1713'
const BROWN = '#8B6B3D'
const CREAM = 'rgb(236, 233, 228)'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

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
      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px',
        background: scrolled ? CREAM : 'transparent',
        borderBottom: scrolled ? `1px solid rgba(26,23,19,0.1)` : 'none',
        transition: 'background 0.35s, border-color 0.35s',
      }}>

        {/* Logo */}
        <Link to="/" onClick={close} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/assets/img/ONOFF LOGO-BLACK.png" alt="onoff studio" style={{ height: 20, display: 'block' }} />
        </Link>

        {/* Center: ARCHITECTURAL LIGHTING • ACOUSTIC DESIGN */}
        <div className="nav-subtitle" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          alignItems: 'center', gap: 10,
          fontFamily: '"Tomorrow", sans-serif', fontWeight: 600,
          fontSize: '0.72rem', letterSpacing: '0.2em', color: INK, opacity: 0.5,
        }}>
          <span>ARCHITECTURAL LIGHTING</span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: INK, opacity: 0.6, display: 'inline-block' }} />
          <span>ACOUSTIC DESIGN</span>
        </div>

        {/* Right: MENU + circle button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: '"Tomorrow", sans-serif', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.2em', color: INK, opacity: 0.55 }}>
            MENU
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              width: 42, height: 42, borderRadius: '50%',
              background: BROWN, border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5,
            }}
          >
            {open ? (
              <>
                <span style={{ width: 16, height: 1.5, background: '#fff', display: 'block', transform: 'rotate(45deg) translate(2px, 2px)' }} />
                <span style={{ width: 16, height: 1.5, background: '#fff', display: 'block', transform: 'rotate(-45deg) translate(2px, -2px)' }} />
              </>
            ) : (
              <>
                <span style={{ width: 16, height: 1.5, background: '#fff', display: 'block' }} />
                <span style={{ width: 16, height: 1.5, background: '#fff', display: 'block' }} />
                <span style={{ width: 16, height: 1.5, background: '#fff', display: 'block' }} />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* ── FULLSCREEN MENU OVERLAY ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 299,
        background: CREAM,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 48px',
        gap: 8,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}>
        {[['PORTFOLIO', '/portfolio'], ['WHY ONOFF', '/why'], ['CONTACT', '/contact']].map(([label, to]) => (
          <NavLink
            key={to} to={to} onClick={close}
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(56px, 9vw, 112px)',
              letterSpacing: '0.02em', lineHeight: 0.95,
              color: isActive ? BROWN : INK,
              transition: 'color 0.2s',
            })}
          >
            {label}
          </NavLink>
        ))}
        <div style={{ marginTop: 48, display: 'flex', gap: 32, fontSize: '0.65rem', letterSpacing: '0.18em', color: INK, opacity: 0.35, fontFamily: '"Inter", sans-serif' }}>
          <span>© 2026 onoff studio</span>
          <span>onoffstudio.design</span>
        </div>
      </div>
    </>
  )
}
