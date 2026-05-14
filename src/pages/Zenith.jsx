import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '3000K – 6500K'],
  ['CRI', '96+'],
  ['Luminous Flux', '16,000 lm'],
  ['Control Zones', '14 DALI zones'],
  ['Acoustic RT60', '0.55 s'],
  ['NRC', '0.83'],
  ['STI', '0.71 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF8/53e02da3-5403-452b-8d1a-3248d1cc8a0f.png', alt: 'Zenith — retail floor' },
  { src: '/assets/img/projects/ONOFF8/a171c8fe-92b1-4b01-b439-e14632d4d4eb.png', alt: 'Zenith — feature display' },
]

export default function Zenith() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF8/53e02da3-5403-452b-8d1a-3248d1cc8a0f.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Retail'], ['Year', '2025'], ['Location', 'Los Angeles']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Zenith.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                Retail light that sells without the customer noticing it's selling.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Zenith is a flagship luxury retail environment on Melrose Avenue where the product ranges
                from precision timepieces to soft goods — each category requiring fundamentally different
                lighting approaches. Watches need tight, specular highlights at high CCT; textiles need
                diffuse, warm rendering that flatters how fabric reads on the body. A single lighting
                solution could not serve both.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                We designed a two-layer system: an ambient layer at 3000K that defines the store's warmth
                and brand identity, overlaid with adjustable accent tracks tunable from 4000K to 6500K
                for precision product illumination. The acoustic design reduced the store's RT60 to 0.55s —
                a level that supports unhurried conversation between client and sales staff without the
                ambient buzz that drives dwell time down in high-traffic retail.
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
              <div className="metric__number reveal">0<span className="metric__unit">.55</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">RT60 (s)</div>
              <p className="label metric__label reveal reveal-delay-2">Reverberation Time / Retail Dwell Optimization</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Light as the Silent Salesperson.</h3>
              <p className="metric__body reveal reveal-delay-1">
                Studies in retail environments consistently show that acoustic comfort directly influences
                dwell time and purchase intent. At Zenith, an RT60 of 0.55s creates an environment where
                clients linger — where the act of browsing feels unhurried and private, and where
                conversations between client and staff feel intimate rather than exposed.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                A CRI of 96 across all zones ensures that the color rendering of every product — from the
                patina of aged leather to the ice-blue of a sapphire crystal — is reproduced with the
                accuracy that luxury goods demand. What the client sees in the store is what they take home.
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
              ['/assets/img/projects/ONOFF9/3b3f2ce4-93d3-4deb-b028-fff0af6a6902.png', 'Restaurant · 2024', 'Marea', '/marea'],
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
