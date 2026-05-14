import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '95+'],
  ['Luminous Flux', '12,800 lm'],
  ['Control Zones', '9 DALI zones'],
  ['Acoustic RT60', '0.60 s'],
  ['NRC', '0.84'],
  ['STI', '0.72 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF9/3b3f2ce4-93d3-4deb-b028-fff0af6a6902.png', alt: 'Marea — dining room' },
  { src: '/assets/img/projects/ONOFF9/7692b69d-b804-48f0-8935-39ff6373032f.png', alt: 'Marea — waterfront terrace lighting' },
]

export default function Marea() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF9/3b3f2ce4-93d3-4deb-b028-fff0af6a6902.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Restaurant'], ['Year', '2024'], ['Location', 'Miami']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Marea.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Ocean-side dining — light that competes with Miami's spectacle and wins.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Marea is an upscale seafood restaurant on Biscayne Bay where the design challenge was
                uniquely geographic: the space opens onto water on two sides, meaning the external
                environment — the glittering bay, the setting sun, the Miami skyline — competes directly
                with the interior experience. The lighting had to hold its own against one of the most
                dramatic natural backdrops in the world.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                We used warm 2700K table-level lighting with zero uplight to prevent glare on the glass
                facades, allowing views to remain clear while keeping the interior intimate and luminous.
                Acoustic treatment was installed in the drop ceiling coffers — a system that performs
                invisibly while reducing the RT60 from a measured pre-construction 1.1 seconds to 0.60
                seconds post-installation.
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
              <div className="metric__number reveal">0<span className="metric__unit">.60</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">RT60 (s)</div>
              <p className="label metric__label reveal reveal-delay-2">Reverberation Time / Coastal Dining Comfort</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Inside and Outside, Perfectly Calibrated.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Reducing the RT60 from 1.1 seconds to 0.60 seconds transformed Marea from an acoustically
                harsh space to one that feels naturally comfortable at full occupancy. The 45% reduction
                in reverberation time means guests no longer raise their voices to be heard — which in
                turn means the room stays quieter, and the cycle of escalating noise that plagues
                waterfront restaurants with glass and hard surfaces is broken.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                Exterior terrace lighting was designed to integrate with the interior scenes —
                warm IP65-rated luminaires at seating level, with subtle architectural uplighting on the
                pergola structure at 3500K, creating a visual continuity between indoors and the bay.
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
              ['/assets/img/projects/ONOFF3/9d8ad3a5-49f1-4986-a2bf-fda01499a75e.png', 'Restaurant · 2024', 'Lumis', '/lumis'],
              ['/assets/img/projects/ONOFF4/77bf00db-0ae9-4bad-8f0d-faf99d682d86.png', 'Wellness & Spa · 2025', 'Vela', '/vela'],
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
