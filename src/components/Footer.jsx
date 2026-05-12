import { Link } from 'react-router-dom'

const INK    = '#1A1713'
const C      = 'rgb(236, 233, 228)'
const BORDER = 'rgba(26,23,19,0.12)'
const BROWN  = '#8B6B3D'
const TMR    = '"Tomorrow", sans-serif'
const POP    = '"Poppins", sans-serif'

export default function Footer() {
  return (
    <footer style={{
      background: C,
      borderTop: `1px solid ${BORDER}`,
      padding: '32px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      fontFamily: POP,
      color: INK,
    }}>
      {/* Left group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/assets/img/ONOFF LOGO-BLACK.png" alt="onoffstudio" style={{ height: 20, display: 'block' }} />
        </Link>

        <span style={{
          fontFamily: TMR, fontWeight: 500,
          fontSize: '0.6rem', letterSpacing: '0.16em',
          color: INK, opacity: 0.45,
          textTransform: 'uppercase',
        }}>
          NEW YORK
        </span>

        <span style={{
          fontFamily: TMR,
          fontSize: '0.6rem', letterSpacing: '0.1em',
          color: INK, opacity: 0.35,
        }}>
          © 2026
        </span>
      </div>

      {/* Right group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <a
          href="mailto:info@onoffstudio.design"
          style={{
            fontFamily: TMR, fontWeight: 500,
            fontSize: '0.6rem', letterSpacing: '0.14em',
            color: INK, opacity: 0.55,
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          INFO@ONOFFSTUDIO.DESIGN
        </a>

        <a
          href="https://instagram.com"
          target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: TMR, fontWeight: 500,
            fontSize: '0.6rem', letterSpacing: '0.14em',
            color: INK, opacity: 0.45,
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          INSTAGRAM
        </a>

        {/* WhatsApp small */}
        <a
          href="https://wa.me/1234567890"
          target="_blank" rel="noopener noreferrer"
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: BROWN,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.77-.24-.39A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" fill="#fff"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
