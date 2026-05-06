import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '95+'],
  ['Luminous Flux', '8,400 lm'],
  ['Control Zones', '6 DALI zones'],
  ['Acoustic RT60', '0.60 s'],
  ['NRC', '0.92'],
  ['STI', '0.70 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/Harmonia/Kaworu_1.png', alt: 'Kaworu — main space' },
  { src: '/assets/img/projects/Harmonia/Kaworu_2.png', alt: 'Kaworu — lighting detail' },
  { src: '/assets/img/projects/Harmonia/Kaworu_3.png', alt: 'Kaworu — acoustic treatment' },
  { src: '/assets/img/projects/Harmonia/Kaworu_4.png', alt: 'Kaworu — atmosphere' },
]

export default function Kaworu() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg img-kaworu" style={{ filter: 'brightness(0.6)' }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Lighting & Acoustics'], ['Year', '2025'], ['Location', 'Mexico City']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Kaworu.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Suspended geometry that absorbs, diffuses, and illuminates.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Kaworu required a ceiling solution for a large open-plan space where reverberation was
                undermining speech clarity and the existing lighting system produced harsh shadows. The
                brief called for a single intervention that resolved both problems simultaneously.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                The result is a suspended baffle system with integrated indirect LED — each element
                contributes to the NRC target while distributing soft upward and downward light across the
                entire floor plate.
              </p>
            </div>
            <div className="specs-panel reveal reveal-delay-1">
              <div className="specs-panel__title">Technical Specifications</div>
              {SPECS.map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-row__key">{key}</span>
                  <span className="spec-row__value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-metric">
        <div className="container">
          <div className="metric-grid">
            <div>
              <div className="metric__number reveal">0<span className="metric__unit">.92</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Acoustic Absorption / Speech Clarity</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">High absorption without visual weight.</h3>
              <p className="metric__body reveal reveal-delay-1">
                The baffle geometry was calculated to maximize exposed surface area while maintaining an open,
                airy ceiling plane. Each fin is angled to capture mid and high-frequency reflections that
                cause fatigue in open-plan environments.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                An NRC of 0.92 delivers near-full absorption at the frequencies that matter most for speech —
                while the integrated LED provides 8,400 lm of diffuse, glare-free illumination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gallery">
        <div className="container">
          <div className="approach-header" style={{ marginBottom: 40 }}>
            <p className="label reveal">Photography</p>
            <h2 className="approach__heading reveal reveal-delay-1">Project Gallery.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              Documentation of the completed space — light, material, and atmosphere as built.
            </p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((img, i) => (
              <div key={img.src} className={`gallery-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 2)}` : ''}`}>
                <div className="gallery-item__img">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-related">
        <div className="container">
          <div className="section-header">
            <p className="label reveal">More Work</p>
            <div className="section-header__row">
              <h2 className="section-header__heading reveal reveal-delay-1">Related Projects</h2>
              <Link to="/portfolio" className="section-header__link reveal reveal-delay-1">View portfolio →</Link>
            </div>
          </div>
          <div className="related-grid">
            {[['img-harmonia', 'Lighting & Acoustics · 2025', 'Harmonia', '/harmonia'], ['img-urania', 'Lighting & Acoustics · 2024', 'Urania', '/urania']].map(([img, cat, name, to]) => (
              <Link to={to} key={name} className="related-card reveal">
                <div className={`related-card__img ${img}`} />
                <div className="related-card__info">
                  <p className="related-card__cat">{cat}</p>
                  <h3 className="related-card__name">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
