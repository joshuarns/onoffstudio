import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '4000K – 5000K'],
  ['CRI', '92+'],
  ['Luminous Flux', '19,600 lm'],
  ['Control Zones', '18 DALI zones'],
  ['Acoustic RT60', '0.47 s'],
  ['NRC', '0.90'],
  ['STI', '0.77 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF10/2baf20f8-6b81-47e1-9f65-6cfa853be576.png', alt: 'Halo — executive floor' },
  { src: '/assets/img/projects/ONOFF10/b82493a0-9208-4820-9a71-2599fed8d578.png', alt: 'Halo — boardroom' },
]

export default function Halo() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF10/2baf20f8-6b81-47e1-9f65-6cfa853be576.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Corporate'], ['Year', '2025'], ['Location', 'Chicago']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Halo.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Corporate prestige delivered through light that commands without imposing.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Halo is the executive suite and boardroom complex of a Chicago-based financial services
                firm occupying the top three floors of a Willis Tower-adjacent tower. The spaces serve
                as the firm's most visible internal environment — where senior leadership meets, where
                major decisions are made, and where clients are received. The lighting had to project
                authority and confidence while remaining comfortable for extended use.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                The boardroom presented a precise acoustic brief: a room where every voice in a 30-person
                meeting is heard with equal clarity, where video conferencing systems perform without
                acoustic compensation artifacts, and where the room's silence during critical moments
                feels deliberate rather than hollow. We achieved an RT60 of 0.47 seconds — near the
                lower limit for a room of this volume — through flush-panel absorbers and a coffered
                ceiling with concealed acoustic fill.
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
              <div className="metric__number reveal">0<span className="metric__unit">.90</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Executive Environments</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Precision Acoustics for High-Stakes Decisions.</h3>
              <p className="metric__body reveal reveal-delay-1">
                An NRC of 0.90 across Halo's executive spaces means that ambient noise — HVAC, street
                traffic from 60 floors below, the mechanical hum of a building of this scale — is
                absorbed before it becomes a distraction. The STI of 0.77 places the boardroom in the
                top tier of speech intelligibility, critical for long negotiations, complex briefings,
                and teleconferencing with international counterparts.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                Lighting at 4000K in the primary meeting zones provides the clarity and cognitive alertness
                appropriate to executive decision-making, while corridors and reception areas shift to a
                warmer 4000K that softens the transition from the building's public zones to the private
                domain of the firm.
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
              ['/assets/img/projects/ONOFF6/2cca9790-23c8-4170-ad0d-78319876d875.png', 'Corporate · 2025', 'Nexus', '/nexus'],
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
