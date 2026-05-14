import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '3000K – 4500K'],
  ['CRI', '93+'],
  ['Luminous Flux', '14,600 lm'],
  ['Control Zones', '10 DALI zones'],
  ['Acoustic RT60', '0.62 s'],
  ['NRC', '0.82'],
  ['STI', '0.70 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF3/9d8ad3a5-49f1-4986-a2bf-fda01499a75e.png', alt: 'Lumis — main dining space' },
  { src: '/assets/img/projects/ONOFF3/f3e99cfb-3966-4fd8-8534-1912e1b64f4c.png', alt: 'Lumis — bar and lighting detail' },
]

export default function Lumis() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF3/9d8ad3a5-49f1-4986-a2bf-fda01499a75e.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Restaurant'], ['Year', '2024'], ['Location', 'Mexico City']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Lumis.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Dramatic dining atmosphere without sacrificing acoustic intelligibility.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Lumis is a contemporary Mexican restaurant in Colonia Roma where the brief demanded theatrical
                lighting — dramatic contrasts, deep shadows, and glowing focal points on each table — while
                the owners insisted that guests could hear each other comfortably across a full table.
                These two goals are rarely aligned, and resolving them required careful orchestration.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                The acoustic solution incorporated material choices hidden within the restaurant's identity:
                handcrafted clay ceiling tiles with variable surface porosity, timber slat baffles behind
                the open kitchen partition, and upholstered banquette backs that double as acoustic absorbers.
                The drama of the space was preserved; the noise was not.
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
              <div className="metric__number reveal">0<span className="metric__unit">.62</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">RT60 (s)</div>
              <p className="label metric__label reveal reveal-delay-2">Reverberation Time / Dining Comfort</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Where Food, Light, and Sound Share the Table.</h3>
              <p className="metric__body reveal reveal-delay-1">
                An RT60 of 0.62 seconds sits at the upper boundary for comfortable restaurant dining —
                lively enough to feel energetic and full, controlled enough for guests to converse without
                strain. The zoned DALI system allows the kitchen team to shift from prep mode to service
                mode with a single scene trigger, altering the entire emotional character of the room.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                Table lighting at 3000K makes food appear vivid and appetizing, while accent tracks at 4500K
                illuminate the bar and kitchen theater — a deliberate tension that guides the eye and
                gives the space narrative depth.
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
              ['/assets/img/projects/ONOFF9/3b3f2ce4-93d3-4deb-b028-fff0af6a6902.png', 'Restaurant · 2024', 'Marea', '/marea'],
              ['/assets/img/projects/Harmonia/Harmonia_1.png', 'Lighting & Acoustics · 2025', 'Harmonia', '/harmonia'],
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
