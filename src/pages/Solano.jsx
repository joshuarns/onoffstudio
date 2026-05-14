import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 4000K'],
  ['CRI', '97+'],
  ['Luminous Flux', '8,400 lm'],
  ['Control Zones', '6 DALI zones'],
  ['Acoustic RT60', '0.48 s'],
  ['NRC', '0.85'],
  ['STI', '0.75 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF2/0ef21fa9-c843-46de-8ae1-7136b1fd8bfe.png', alt: 'Solano — main space' },
  { src: '/assets/img/projects/ONOFF2/70429e21-b4ce-4062-8a49-ef9dbe1b17d0.png', alt: 'Solano — lighting detail' },
]

export default function Solano() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF2/0ef21fa9-c843-46de-8ae1-7136b1fd8bfe.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Residential'], ['Year', '2025'], ['Location', 'Los Angeles']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Solano.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Domestic calm engineered through precision light and acoustic comfort.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Solano is a high-end residential property in the hills of Los Angeles where the client sought
                an environment that felt genuinely quiet — not just visually minimal, but sensorially restful.
                The open-plan layout, while visually striking, created significant acoustic challenges with
                parallel hard surfaces generating persistent echo and flutter.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Our lighting strategy prioritized human-centric principles: tunable white luminaires that
                track the natural California light cycle, supporting the body's circadian rhythm through
                imperceptible daily transitions. The result is a home that energizes at dawn and settles
                into warmth by dusk — without the resident ever touching a switch.
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
              <div className="metric__number reveal">0<span className="metric__unit">.48</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">RT60 (s)</div>
              <p className="label metric__label reveal reveal-delay-2">Reverberation Time / Acoustic Clarity</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Living in Silence, Surrounded by Light.</h3>
              <p className="metric__body reveal reveal-delay-1">
                An RT60 of 0.48 seconds places Solano at the ideal end of the domestic acoustic spectrum —
                enough liveliness for natural conversation, enough absorption to prevent the fatigue that
                hard surfaces impose over time. Hidden acoustic panels behind stretched fabric maintain the
                clean architectural language while doing serious acoustic work.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                Combined with a CRI of 97, the lighting reveals materials with exceptional fidelity —
                natural wood tones, stone veining, and textile weaves are rendered exactly as the designer
                intended, not approximated.
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
              ['/assets/img/projects/ONOFF11/10df50eb-ecc9-4f5c-b995-87cbc5f7ecbc.png', 'Residential · 2025', 'Cipher', '/cipher'],
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
