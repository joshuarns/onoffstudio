import { Link } from 'react-router-dom'

const C      = 'rgb(236, 233, 228)'
const BROWN  = '#8B6B3D'
const INK    = '#1A1713'
const BORDER = 'rgba(26,23,19,0.12)'
const BEBAS  = '"Bebas Neue", sans-serif'
const TMR    = '"Tomorrow", sans-serif'
const POP    = '"Poppins", sans-serif'

const PROJECTS = [
  { img: '/assets/img/2baf20f8-6b81-47e1-9f65-6cfa853be576.jpg', label: 'HARMONIA', to: '/harmonia' },
  { img: '/assets/img/7bec58bd-ff03-436d-97d5-4052f329d2d2.jpg', label: 'KAWORU',   to: '/kaworu'   },
  { img: '/assets/img/7692b69d-b804-48f0-8935-39ff6373032f.jpg', label: 'KYOKO',    to: '/kyoko'    },
  { img: '/assets/img/70429e21-b4ce-4062-8a49-ef9dbe1b17d0.jpg', label: 'URANIA',   to: '/urania'   },
]

const SPECS = [
  ['NRC',      '0.85 – 0.95'],
  ['CCT',      '2700 – 6500 K'],
  ['CRI',      '≥ 90'],
  ['MATERIAL', '100% RECYCLED PET'],
  ['LIGHT',    'INTEGRATED LED'],
  ['CONTROL',  'DALI / DMX / KNX'],
]

const PROCESS = [
  ['01', 'PRE-DESIGN',    'Space analysis, RFQ & lighting concepts.'],
  ['02', 'DESIGN',        'Acoustic + light plans and specifications.'],
  ['03', 'MANUFACTURING', 'In-house production to exact dimensions.'],
  ['04', 'INSTALLATION',  'On-site supervision and commissioning.'],
]

const dot = (color = INK) => ({
  width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0,
})

const sectionNum = (n) => (
  <span style={{ fontFamily: TMR, fontSize: '0.6rem', letterSpacing: '0.16em', color: INK, opacity: 0.4 }}>{n}</span>
)

export default function Home() {
  return (
    <div style={{ background: C, color: INK, fontFamily: POP }}>

      {/* ── HERO ── */}
      <section className="home-hero" style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '100px 48px 80px',
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: BEBAS,
            fontWeight: 400,
            fontSize: 'clamp(56px, 13vw, 180px)',
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
            color: INK,
          }}>
            <span style={{ display: 'block' }}>LIGHT AND</span>
            <span style={{ display: 'block' }}>SOUND</span>
            <span style={{ display: 'block' }}>AS ARCHITECTURE</span>
          </h1>

          <p style={{
            marginTop: 40,
            fontFamily: POP, fontWeight: 300,
            fontSize: '1.05rem', color: INK,
            lineHeight: 1.8, textAlign: 'center', opacity: 0.65,
          }}>
            We design acoustic<br />lighting systems<br />that shape spaces.
          </p>

          <span style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: BROWN, margin: '18px auto 0' }} />
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: 36, left: 48,
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: TMR, fontWeight: 600,
          fontSize: '0.62rem', letterSpacing: '0.22em', color: INK, opacity: 0.5,
        }}>
          <span>SCROLL TO EXPLORE</span>
          <span style={dot(INK)} />
        </div>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/1234567890"
          target="_blank" rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 400,
            width: 52, height: 52, borderRadius: '50%',
            background: BROWN,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)', textDecoration: 'none',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.77-.24-.39A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" fill="#fff"/>
          </svg>
        </a>
      </section>

      {/* ── 01  SILENCE IS DESIGNED ── */}
      <section className="home-grid-01" style={{ borderTop: `1px solid ${BORDER}` }}>

        <div className="home-grid-01__text" style={{
          padding: '72px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          {sectionNum('01')}
          <div>
            <h2 style={{
              fontFamily: BEBAS, fontWeight: 400,
              fontSize: 'clamp(48px, 6vw, 88px)',
              lineHeight: 0.88, letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: '0 0 28px',
            }}>
              SILENCE<br />IS DESIGNED.
            </h2>
            <p style={{ fontFamily: POP, fontSize: '0.88rem', lineHeight: 1.8, opacity: 0.58, maxWidth: 340, marginBottom: 36 }}>
              Acoustic lighting is the integration of sound absorption and illumination
              in a single element. Not a correction. Part of the concept.
            </p>
            <Link to="/why" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: TMR, fontWeight: 600,
              fontSize: '0.62rem', letterSpacing: '0.2em',
              color: INK, textDecoration: 'none',
            }}>
              OUR PHILOSOPHY <span style={dot(INK)} />
            </Link>
          </div>
        </div>

        <div className="home-grid-01__img" style={{
          background: `url('/assets/img/f49c3e93-58d3-4954-a07b-30719d7f6c9d.jpg') center/cover`,
          filter: 'brightness(0.68) sepia(0.1)',
          minHeight: 480,
        }} />
      </section>

      {/* ── 02  SPACES WE SHAPE ── */}
      <section className="home-section-02" style={{ padding: '72px 48px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          {sectionNum('02')}
          <span style={{ fontFamily: TMR, fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.2em', color: INK, opacity: 0.5 }}>
            ATMOSPHERES
          </span>
        </div>

        <h2 style={{
          fontFamily: BEBAS, fontWeight: 400,
          fontSize: 'clamp(44px, 5.5vw, 76px)',
          lineHeight: 0.9, letterSpacing: '0.02em',
          textTransform: 'uppercase',
          margin: '0 0 48px',
        }}>
          SPACES WE SHAPE
        </h2>

        <div className="home-grid-02">
          {PROJECTS.map(({ img, label, to }) => (
            <Link key={label} to={to} style={{ textDecoration: 'none', color: INK }}>
              <div style={{
                aspectRatio: '3/4',
                background: `url('${img}') center/cover`,
                marginBottom: 14,
                filter: 'brightness(0.78) sepia(0.08)',
                transition: 'filter 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.9) sepia(0.04)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0.78) sepia(0.08)'}
              />
              <span style={{ fontFamily: TMR, fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.2em', color: INK }}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 03  ONE ELEMENT. TWO FUNCTIONS. ── */}
      <section className="home-section-03" style={{ borderTop: `1px solid ${BORDER}`, overflow: 'hidden' }}>

        <div className="home-section-03__bar" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '36px 48px 0',
        }}>
          {sectionNum('03')}
          <span style={{ fontFamily: TMR, fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.2em', color: INK, opacity: 0.5 }}>
            SIGNATURE PRODUCT
          </span>
        </div>

        <div className="home-grid-03">

          <div className="home-grid-03__specs" style={{ padding: '48px 24px 64px 48px', alignSelf: 'center' }}>
            {SPECS.map(([k, v]) => (
              <div key={k} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 8,
                borderTop: `1px solid ${BORDER}`,
                padding: '10px 0',
                alignItems: 'center',
              }}>
                <span style={{ fontFamily: TMR, fontSize: '0.52rem', letterSpacing: '0.16em', opacity: 0.38, textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontFamily: POP, fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.01em', textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>

          <div className="home-grid-03__content" style={{ paddingBottom: 72 }}>
            <h2 className="home-grid-03__heading" style={{
              fontFamily: BEBAS, fontWeight: 400,
              fontSize: 'clamp(56px, 7.5vw, 114px)',
              lineHeight: 0.88, letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: 0,
              padding: '48px 48px 32px 0',
              color: INK,
              textAlign: 'left',
            }}>
              ONE ELEMENT.<br />
              TWO FUNCTIONS.
            </h2>

            <img
              src="/assets/img/panel-acustico.png"
              alt="Acoustic lighting panel"
              loading="lazy"
              className="home-panel-img"
            />
          </div>

        </div>
      </section>

      {/* ── 04 + 05  MATERIAL MATTERS / FROM CONCEPT TO INSTALLATION ── */}
      <section className="home-grid-0405" style={{ borderTop: `1px solid ${BORDER}` }}>

        <div className="home-grid-0405__left" style={{
          padding: '72px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: `1px solid ${BORDER}`,
        }}>
          {sectionNum('04')}
          <div>
            <h2 style={{
              fontFamily: BEBAS, fontWeight: 400,
              fontSize: 'clamp(44px, 5vw, 76px)',
              lineHeight: 0.88, letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: '0 0 36px',
            }}>
              MATERIAL<br />MATTERS.
            </h2>
            {['100% RECYCLED PET', 'High performance acoustics', 'Cradle To Cradle certified', 'Built to last'].map(item => (
              <div key={item} style={{
                borderTop: `1px solid ${BORDER}`,
                padding: '14px 0',
                fontFamily: POP, fontSize: '0.85rem', opacity: 0.65,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="home-grid-0405__img" style={{
          background: `url('/assets/img/projects/Harmonia/Kyoko_3.png') center/cover`,
          filter: 'brightness(0.72) sepia(0.1)',
          minHeight: 280,
        }} />

        <div className="home-grid-0405__right" style={{
          padding: '72px 48px',
          borderLeft: `1px solid ${BORDER}`,
          display: 'flex', flexDirection: 'column',
        }}>
          {sectionNum('05')}

          <h2 style={{
            fontFamily: BEBAS, fontWeight: 400,
            fontSize: 'clamp(36px, 4vw, 60px)',
            lineHeight: 0.9, letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: '40px 0 48px',
          }}>
            FROM CONCEPT<br />
            <span style={{ color: BROWN }}>TO INSTALLATION.</span>
          </h2>

          <div style={{ flex: 1 }}>
            {PROCESS.map(([n, title, desc]) => (
              <div key={n} style={{
                display: 'grid',
                gridTemplateColumns: '32px 1.3fr 1.7fr',
                gap: 12,
                borderTop: `1px solid ${BORDER}`,
                padding: '18px 0',
                alignItems: 'start',
              }}>
                <span style={{ fontFamily: TMR, fontSize: '0.6rem', letterSpacing: '0.1em', opacity: 0.38 }}>{n}</span>
                <span style={{ fontFamily: TMR, fontSize: '0.65rem', letterSpacing: '0.12em', fontWeight: 700 }}>{title}</span>
                <span style={{ fontFamily: POP, fontSize: '0.78rem', opacity: 0.58, lineHeight: 1.65 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LET'S DESIGN ATMOSPHERES THAT LAST. ── */}
      <section className="home-section-cta" style={{ padding: '80px 48px', borderTop: `1px solid ${BORDER}` }}>
        <div className="home-grid-cta">
          <h2 style={{
            fontFamily: BEBAS, fontWeight: 400,
            fontSize: 'clamp(56px, 8vw, 112px)',
            lineHeight: 0.88, letterSpacing: '0.02em',
            textTransform: 'uppercase', margin: 0,
          }}>
            LET'S DESIGN<br />ATMOSPHERES<br />
            <span style={{ color: BROWN }}>THAT LAST.</span>
          </h2>

          <div style={{ paddingBottom: 8 }}>
            <p style={{ fontFamily: POP, fontSize: '0.88rem', opacity: 0.58, lineHeight: 1.8, marginBottom: 32, maxWidth: 460 }}>
              If you're working on a project where acoustics and lighting are part of
              the experience — let's talk from the design stage.
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: TMR, fontWeight: 600,
              fontSize: '0.62rem', letterSpacing: '0.2em',
              color: INK, textDecoration: 'none',
            }}>
              START A CONVERSATION <span style={dot(INK)} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
