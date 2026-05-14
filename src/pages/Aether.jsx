import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '95+'],
  ['Luminous Flux', '11,200 lm'],
  ['Control Zones', '12 DALI zones'],
  ['Acoustic RT60', '0.52 s'],
  ['NRC', '0.91'],
  ['STI', '0.74 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF1/2ba5284e-a070-48d5-af04-5136b4e823d7.png', alt: 'Aether — main space' },
  { src: '/assets/img/projects/ONOFF1/f39dbf5a-c522-4b2d-914d-6d183b09136f.png', alt: 'Aether — lighting detail' },
]

export default function Aether() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF1/2ba5284e-a070-48d5-af04-5136b4e823d7.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Hospitality'], ['Year', '2025'], ['Location', 'New York']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Aether.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Redefining hospitality through light that breathes with its guests.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Aether demanded a lighting scheme capable of transitioning seamlessly from an intimate morning
                breakfast environment to a high-energy evening social space — all within the same physical
                room. The hotel's position in Midtown Manhattan meant external light intrusion was constant
                and unpredictable, requiring adaptive control systems that responded in real time.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                Acoustic comfort was equally critical — guest conversations, ambient music, and the hum of
                the city had to coexist without competing. We designed the ceiling and wall treatments to
                absorb mid-frequency noise while preserving the warmth of the space's architectural character.
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
              <div className="metric__number reveal">0<span className="metric__unit">.91</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">A Sanctuary Above the City.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Each material selection in Aether was informed by its acoustic contribution. Upholstered wall
                panels, layered textile ceiling baffles, and porous stone finishes combine to achieve an NRC
                of 0.91 — ensuring that even at full occupancy, the space retains its composed, unhurried
                atmosphere.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                The lighting fixtures were tuned to a warm 2700K at peak occupancy, shifting to a brighter
                3500K during daytime service — changes guests perceive emotionally long before they notice
                them consciously.
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
              ['/assets/img/projects/ONOFF7/11287b38-453e-478a-865d-25c4fdfc09da.png', 'Hotel · 2024', 'Bruma', '/bruma'],
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
