import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '3000K – 5000K'],
  ['CRI', '94+'],
  ['Luminous Flux', '18,200 lm'],
  ['Control Zones', '16 DALI zones'],
  ['Acoustic RT60', '0.75 s'],
  ['NRC', '0.80'],
  ['STI', '0.68 (Fair–Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF5/6e030e0d-0785-42e1-88f4-98eba7552610.png', alt: 'Canto — cultural hall' },
  { src: '/assets/img/projects/ONOFF5/f49c3e93-58d3-4954-a07b-30719d7f6c9d.png', alt: 'Canto — gallery wing' },
]

export default function Canto() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF5/6e030e0d-0785-42e1-88f4-98eba7552610.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Cultural'], ['Year', '2024'], ['Location', 'Barcelona']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Canto.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                A cultural venue that shifts identity with every performance and exhibition.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Canto is a multidisciplinary cultural center in the Eixample district of Barcelona — part
                gallery, part performance hall, part civic forum. The space needed to function with equal
                precision across radically different program modes: silent art viewing, amplified live music,
                spoken word, and large public gatherings. No single acoustic or lighting configuration
                could serve all of these without intelligent adaptability.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                We designed a variable acoustic system using motorized banners and adjustable diffuser panels
                that shift the RT60 between 0.45s (gallery mode) and 0.75s (concert mode) within minutes.
                The lighting infrastructure supports 16 independently addressable zones with color-tunable
                sources, enabling curatorial-grade control over how artworks and performers are revealed.
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
              <div className="metric__number reveal">0<span className="metric__unit">.75</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">RT60 (s)</div>
              <p className="label metric__label reveal reveal-delay-2">Reverberation Time / Performance Mode</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Infrastructure for Culture at Every Scale.</h3>
              <p className="metric__body reveal reveal-delay-1">
                The variable acoustic system allows Canto to reach 0.75 seconds RT60 for live music — a
                figure that gives orchestral and chamber performances the room to breathe — while collapsing
                to 0.45 seconds for exhibition and lecture modes where clarity and intelligibility are
                paramount. This range is achieved without any permanent acoustic compromise.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The 18,200 lm lighting system distributes across 16 zones, allowing curators and technical
                directors to sculpt entirely different spatial experiences from the same physical envelope —
                a critical capability for a venue with year-round programming demands.
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
            {[
              ['/assets/img/projects/ONOFF12/2288a431-5f63-4411-8597-2762b3fa25b5.png', 'Wellness · 2024', 'Duna', '/duna'],
              ['/assets/img/projects/ONOFF6/2cca9790-23c8-4170-ad0d-78319876d875.png', 'Corporate · 2025', 'Nexus', '/nexus'],
            ].map(([img, cat, name, to]) => (
              <Link to={to} key={name} className="related-card reveal">
                <div className="related-card__img" style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
