import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  { img: 'img-harmonia', cat: 'Lighting & Acoustics · 2025', name: 'Harmonia', to: '/harmonia' },
  { img: 'img-kaworu',   cat: 'Lighting & Acoustics · 2025', name: 'Kaworu',   to: '/kaworu' },
  { img: 'img-kyoko',    cat: 'Lighting & Acoustics · 2024', name: 'Kyoko',    to: '/kyoko' },
  { img: 'img-urania',   cat: 'Lighting & Acoustics · 2024', name: 'Urania',   to: '/urania' },
]

export default function Portfolio() {
  useReveal()

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="label page-hero__label reveal">Our work</p>
          <h1 className="page-hero__heading reveal reveal-delay-1">Selected<br />Works.</h1>
          <p className="page-hero__desc reveal reveal-delay-2">
            A selection of projects where light and sound are designed as one — visually refined,
            technically precise, and sensorially complete.
          </p>
        </div>
      </header>

      <section className="section-portfolio">
        <div className="container">
          <div className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <Link
                to={p.to}
                key={p.name}
                className={`portfolio-item reveal${i % 2 === 1 ? ' reveal-delay-1' : ''}`}
              >
                <div className={`portfolio-item__img ${p.img}`} />
                <div className="portfolio-item__info">
                  <p className="portfolio-item__cat">{p.cat}</p>
                  <h2 className="portfolio-item__name">{p.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-portfolio-cta">
        <div className="container">
          <p className="portfolio-cta__text reveal">
            Every technical decision should contribute to beauty, comfort, and performance.
          </p>
          <Link to="/contact" className="cta__btn reveal reveal-delay-1">
            Get in touch <span className="cta__btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
