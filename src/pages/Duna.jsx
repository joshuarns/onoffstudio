import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3000K'],
  ['CRI', '96+'],
  ['Luminous Flux', '5,600 lm'],
  ['Control Zones', '8 DALI zones'],
  ['Acoustic RT60', '0.46 s'],
  ['NRC', '0.92'],
  ['STI', '0.79 (Excellent)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF12/2288a431-5f63-4411-8597-2762b3fa25b5.png', alt: 'Duna — wellness retreat interior' },
  { src: '/assets/img/projects/ONOFF12/5814b9b8-b10e-4c27-afdb-e313e685c53e.png', alt: 'Duna — treatment room' },
]

export default function Duna() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF12/2288a431-5f63-4411-8597-2762b3fa25b5.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Wellness'], ['Year', '2024'], ['Location', 'Barcelona']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Duna.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Mediterranean wellness — restoring the body through architecture, light, and profound quiet.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Duna is a day-retreat wellness facility in the Gràcia neighborhood of Barcelona, housed
                within a converted 19th-century industrial building. The existing structure had extraordinary
                character — exposed brick, timber roof trusses, original stone flooring — but zero acoustic
                performance. Stone and brick are among the most reflective materials in the built
                environment, and the space's RT60 before intervention exceeded 1.8 seconds.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Our intervention had to respect the heritage fabric while delivering the acoustic
                performance of a purpose-built wellness space. We lined the underside of the trusses
                with concealed mineral wool panels faced in natural linen, and introduced floating
                timber partitions with acoustic infill between treatment zones. Lighting was kept to
                a constant 2700K throughout — warm, candle-like, and free from any blue-spectrum
                content that would interfere with the parasympathetic state the facility exists to induce.
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
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Heritage Wellness Space</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Ancient Structure, Modern Silence.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Reducing Duna's RT60 from 1.8 seconds to 0.46 seconds represents one of the most dramatic
                acoustic transformations in our portfolio — achieved entirely through reversible
                interventions that preserve the listed building's heritage status. An NRC of 0.92 means
                the space now absorbs sound nearly as effectively as a purpose-built acoustic environment,
                despite the underlying stone and brick surfaces remaining exposed.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The STI of 0.79 places Duna in the "Excellent" intelligibility band — important for
                instructor-led sessions, sound bath experiences, and the guided meditation programs that
                form a core part of the facility's offering. Every spoken word reaches every guest with
                clarity and warmth.
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
              ['/assets/img/projects/ONOFF4/77bf00db-0ae9-4bad-8f0d-faf99d682d86.png', 'Wellness & Spa · 2025', 'Vela', '/vela'],
              ['/assets/img/projects/ONOFF5/6e030e0d-0785-42e1-88f4-98eba7552610.png', 'Cultural · 2024', 'Canto', '/canto'],
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
