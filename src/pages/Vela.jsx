import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3000K'],
  ['CRI', '98+'],
  ['Luminous Flux', '6,800 lm'],
  ['Control Zones', '9 DALI zones'],
  ['Acoustic RT60', '0.45 s'],
  ['NRC', '0.93'],
  ['STI', '0.78 (Excellent)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF4/77bf00db-0ae9-4bad-8f0d-faf99d682d86.png', alt: 'Vela — wellness spa interior' },
]

export default function Vela() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF4/77bf00db-0ae9-4bad-8f0d-faf99d682d86.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Wellness & Spa'], ['Year', '2025'], ['Location', 'Miami']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Vela.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Sensory restoration through the precise calibration of light and silence.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Vela is a luxury wellness and spa facility on Miami's Brickell waterfront where the design
                imperative was restorative calm. In a city defined by high stimulation, the space needed to
                offer genuine decompression — not simply visual tranquility, but a measurable reduction in
                ambient noise and cognitive load from the moment a guest crossed the threshold.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                We specified the lowest achievable CCT — a constant 2700K throughout all treatment zones —
                and paired it with an NRC of 0.93 across the ceiling and wall treatments. The acoustic
                performance was achieved through layered mineral wool panels behind hand-plastered surfaces,
                maintaining the spa's bespoke luxury aesthetic while delivering clinical-grade quiet.
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
              <div className="metric__number reveal">0<span className="metric__unit">.93</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Restorative Quiet</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Engineered Stillness for the Body and Mind.</h3>
              <p className="metric__body reveal reveal-delay-1">
                With an NRC of 0.93, Vela absorbs nearly all ambient sound that strikes its treated surfaces —
                creating an acoustic environment that actively supports the body's parasympathetic response.
                The RT60 of 0.45 seconds means sound decays almost instantly, making the space feel hushed
                and intentional rather than clinically dead.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The CRI of 98 ensures that skin tones, botanical elements, and natural materials are
                rendered with exceptional accuracy — a subtle but meaningful detail in a space where the
                guest's relationship to their own body is central to the experience.
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
              ['/assets/img/projects/ONOFF1/2ba5284e-a070-48d5-af04-5136b4e823d7.png', 'Hospitality · 2025', 'Aether', '/aether'],
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
