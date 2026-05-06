import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 4000K'],
  ['CRI', '96+'],
  ['Luminous Flux', '9,600 lm'],
  ['Control Zones', '8 DALI zones'],
  ['Acoustic RT60', '0.55 s'],
  ['NRC', '0.88'],
  ['STI', '0.72 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/Harmonia/Harmonia_1.png', alt: 'Harmonia — main space' },
  { src: '/assets/img/projects/Harmonia/Harmonia_2.png', alt: 'Harmonia — lighting detail' },
  { src: '/assets/img/projects/Harmonia/Harmonia_3.png', alt: 'Harmonia — acoustic treatment' },
  { src: '/assets/img/projects/Harmonia/Harmonia_4.png', alt: 'Harmonia — atmosphere' },
]

export default function Project() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero__bg img-harmonia-hero" />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Lighting & Acoustics'], ['Year', '2025'], ['Location', 'Mexico City']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Harmonia.</h1>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Light and sound designed as one from the beginning.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Harmonia presented a dual design challenge: to create a space with precise visual atmosphere
                while achieving acoustic performance that complements — not contradicts — the architectural
                intention. Both disciplines were integrated from day one, allowing technical decisions in one
                area to directly inform the other.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Our process combined creativity with precision — analyzing the architectural intention, the
                user experience, the materials, and the atmosphere to develop a solution that is elegant,
                efficient, and fully integrated.
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

      {/* METRIC */}
      <section className="section-metric">
        <div className="container">
          <div className="metric-grid">
            <div>
              <div className="metric__number reveal">0<span className="metric__unit">.88</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Acoustic Absorption / Speech Clarity</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Integrated Design &amp; Sensory Precision.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Every surface material was selected for its dual contribution: visual character and acoustic
                behavior. Lighting fixtures were positioned to avoid reflective interference with acoustic
                panels, while acoustic treatment was shaped to complement the light distribution geometry.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                An NRC of 0.88 and an RT60 of 0.55s ensure a space where conversations are clear, music is
                balanced, and silence feels intentional — not empty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
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

      {/* RELATED */}
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
            {[['img-kaworu', 'Lighting & Acoustics · 2025', 'Kaworu'], ['img-kyoko', 'Lighting & Acoustics · 2024', 'Kyoko']].map(([img, cat, name]) => (
              <Link to="/project" key={name} className="related-card reveal">
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
