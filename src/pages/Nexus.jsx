import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '3500K – 5000K'],
  ['CRI', '90+'],
  ['Luminous Flux', '22,400 lm'],
  ['Control Zones', '20 DALI zones'],
  ['Acoustic RT60', '0.50 s'],
  ['NRC', '0.87'],
  ['STI', '0.76 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF6/2cca9790-23c8-4170-ad0d-78319876d875.png', alt: 'Nexus — open-plan office' },
  { src: '/assets/img/projects/ONOFF6/b496b885-0c23-4b98-8ca9-c84a0cb14f0e.png', alt: 'Nexus — collaboration zone' },
]

export default function Nexus() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF6/2cca9790-23c8-4170-ad0d-78319876d875.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Corporate'], ['Year', '2025'], ['Location', 'Chicago']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Nexus.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Cognitive performance at scale — a headquarters designed for how people actually think.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Nexus is the Chicago headquarters of a global technology firm occupying four floors of a
                Loop-district tower. The challenge was not simply to provide adequate task illumination,
                but to design lighting that actively supports cognitive performance, focus, and collaboration
                across a workforce of over 800 people and multiple work modes simultaneously.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Open-plan acoustics in a tall-ceiling corporate environment are notoriously difficult.
                We deployed a ceiling-integrated acoustic system using recycled PET fiber panels in a
                grid that follows the lighting layout — creating a visual rhythm that unifies the space
                while reducing speech transmission between workstations to STI 0.76 in focus zones.
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
              <div className="metric__number reveal">0<span className="metric__unit">.87</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Focus Environments</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">The Science of Productive Environments.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Research consistently links acoustic quality to productivity and error rates in knowledge
                work. At Nexus, an NRC of 0.87 across the open floor plates reduces the acoustic energy
                that would otherwise accumulate during peak hours — when hundreds of simultaneous
                conversations create a cumulative noise load that degrades concentration and raises stress.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The lighting system delivers 5000K in deep-focus zones and drops to 3500K in collaboration
                and social areas — a deliberate biological cue that helps workers self-select the right
                environment for their current task.
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
              ['/assets/img/projects/ONOFF10/2baf20f8-6b81-47e1-9f65-6cfa853be576.png', 'Corporate · 2025', 'Halo', '/halo'],
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
