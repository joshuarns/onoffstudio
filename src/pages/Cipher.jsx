import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '97+'],
  ['Luminous Flux', '7,200 lm'],
  ['Control Zones', '7 DALI zones'],
  ['Acoustic RT60', '0.50 s'],
  ['NRC', '0.86'],
  ['STI', '0.74 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF11/10df50eb-ecc9-4f5c-b995-87cbc5f7ecbc.png', alt: 'Cipher — living space' },
  { src: '/assets/img/projects/ONOFF11/76f5dc7a-dcf6-469f-a2f8-898257ece6c7.png', alt: 'Cipher — study and detail' },
]

export default function Cipher() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF11/10df50eb-ecc9-4f5c-b995-87cbc5f7ecbc.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Residential'], ['Year', '2025'], ['Location', 'New York']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Cipher.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                A Manhattan penthouse designed for the resident who demands silence and precision.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Cipher is a full-floor penthouse on the Upper West Side occupied by a client with an
                acute sensitivity to both visual and acoustic environments. The existing space suffered
                from the endemic issues of high-rise residential living: HVAC noise transmission, impact
                sound from the floor above, and the persistent presence of urban noise that penetrated
                through the building's aging envelope. The client's brief was unambiguous — make it quiet.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                We combined floating floor systems, decoupled ceiling assemblies, and a room-within-a-room
                approach for the home office and home cinema to achieve the lowest possible noise floor.
                Lighting design followed a strict principle of invisibility — no fixture should be visible
                or perceptible as a light source, only as light itself. Recessed linear elements, coving,
                and integration within millwork deliver every lumen without a single exposed aperture.
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
              <div className="metric__number reveal">0<span className="metric__unit">.86</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Private Residence</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Invisible Design, Absolute Comfort.</h3>
              <p className="metric__body reveal reveal-delay-1">
                The acoustic performance at Cipher is defined by what cannot be heard: no HVAC hum,
                no impact noise, no flutter echo. An NRC of 0.86 across the primary living zones absorbs
                the reflections that, in an untreated penthouse, would generate the listening fatigue
                that accumulates over hours at home — a subtler stress than workplace noise, but no
                less real.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The CRI of 97 was specified at the client's explicit request — a passion for art and
                material culture meant that the quality of light falling on the private collection was
                non-negotiable. Every zone renders color with near-daylight fidelity, ensuring the
                client's investments are always seen as intended.
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
              ['/assets/img/projects/ONOFF2/0ef21fa9-c843-46de-8ae1-7136b1fd8bfe.png', 'Residential · 2025', 'Solano', '/solano'],
              ['/assets/img/projects/ONOFF7/11287b38-453e-478a-865d-25c4fdfc09da.png', 'Hotel · 2024', 'Bruma', '/bruma'],
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
