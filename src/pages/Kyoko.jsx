import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '3000K – 4000K'],
  ['CRI', '94+'],
  ['Luminous Flux', '7,200 lm'],
  ['Control Zones', '4 DALI zones'],
  ['Acoustic RT60', '0.58 s'],
  ['NRC', '0.88'],
  ['STI', '0.71 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/Harmonia/Kyoko_1.png', alt: 'Kyoko — main space' },
  { src: '/assets/img/projects/Harmonia/Kyoko_2.png', alt: 'Kyoko — lighting detail' },
  { src: '/assets/img/projects/Harmonia/Kyoko_3.png', alt: 'Kyoko — acoustic treatment' },
  { src: '/assets/img/projects/Harmonia/Kyoko_4.png', alt: 'Kyoko — atmosphere' },
]

export default function Kyoko() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg img-kyoko" style={{ filter: 'brightness(0.6)' }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Lighting & Acoustics'], ['Year', '2024'], ['Location', 'Mexico City']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Kyoko.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                A floating island that redefines the ceiling plane.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Kyoko called for a custom ceiling island — an organic form that anchors the central dining
                area while providing the acoustic treatment and ambient lighting the space required. The shape
                had to feel architectural, not applied.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                The island was designed parametrically to match the table layout below, with an LED perimeter
                that produces a soft halo effect and a high-density PET core that absorbs mid-frequency
                reflections from hard floor and wall surfaces.
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
              <div className="metric__number reveal">0<span className="metric__unit">.88</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Acoustic Absorption / Speech Clarity</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Form derived from acoustic geometry.</h3>
              <p className="metric__body reveal reveal-delay-1">
                The island shape was not arbitrary — its curvature was calculated to scatter lateral
                reflections away from the dining zone while the PET thickness was tuned to achieve NRC 0.88
                across the 500Hz – 4kHz range.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The result is a space where ambient noise stays controlled even at full occupancy — and
                where the light source is always the ceiling island, never a bare fixture.
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
            {[['img-harmonia', 'Lighting & Acoustics · 2025', 'Harmonia', '/harmonia'], ['img-kaworu', 'Lighting & Acoustics · 2025', 'Kaworu', '/kaworu']].map(([img, cat, name, to]) => (
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
