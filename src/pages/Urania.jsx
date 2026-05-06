import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '93+'],
  ['Luminous Flux', '6,800 lm'],
  ['Control Zones', '4 DALI zones'],
  ['Acoustic RT60', '0.62 s'],
  ['NRC', '0.85'],
  ['STI', '0.69 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/Harmonia/Urania_2.png', alt: 'Urania — main space' },
  { src: '/assets/img/projects/Harmonia/Urania_3.png', alt: 'Urania — wall panel detail' },
  { src: '/assets/img/projects/Harmonia/Urania_4.png', alt: 'Urania — atmosphere' },
]

export default function Urania() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg img-urania" style={{ filter: 'brightness(0.6)' }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Lighting & Acoustics'], ['Year', '2024'], ['Location', 'Mexico City']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Urania.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Wall panels that resolve lateral reflections and ambient light in one element.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Urania addressed a specific acoustic problem: a long, narrow room with parallel hard walls
                generating flutter echo that made conversations uncomfortable. The solution needed to treat
                both side walls while adding a warm ambient light layer without introducing ceiling fixtures.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Custom backlit PET wall panels were designed at 600mm × 1200mm modules, installed in a
                staggered pattern to maximize diffusion and break the parallel-wall reflection path while
                providing even, low-glare illumination across the room.
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
              <div className="metric__number reveal">0<span className="metric__unit">.85</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Acoustic Absorption / Speech Clarity</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Lateral control without losing warmth.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Wall-mounted treatment is often visually heavy — thick foam, fabric wrapped panels, or
                perforated boards that read as acoustic corrections. Urania's panels are designed as
                architectural elements first: the PET texture, the LED backlight, and the module rhythm
                are all part of the interior language.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                NRC 0.85 eliminates flutter echo while the RT60 of 0.62s keeps enough natural reverberation
                to maintain a lively, social atmosphere.
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
            {[['img-kyoko', 'Lighting & Acoustics · 2024', 'Kyoko', '/kyoko'], ['img-kaworu', 'Lighting & Acoustics · 2025', 'Kaworu', '/kaworu']].map(([img, cat, name, to]) => (
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
