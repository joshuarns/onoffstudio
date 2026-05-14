import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SPECS = [
  ['Color Temperature', '2700K – 3500K'],
  ['CRI', '94+'],
  ['Luminous Flux', '10,800 lm'],
  ['Control Zones', '11 DALI zones'],
  ['Acoustic RT60', '0.58 s'],
  ['NRC', '0.89'],
  ['STI', '0.73 (Good)'],
]

const GALLERY = [
  { src: '/assets/img/projects/ONOFF7/11287b38-453e-478a-865d-25c4fdfc09da.png', alt: 'Bruma — hotel lobby' },
  { src: '/assets/img/projects/ONOFF7/7bec58bd-ff03-436d-97d5-4052f329d2d2.png', alt: 'Bruma — guest suite corridor' },
]

export default function Bruma() {
  useReveal()

  return (
    <>
      <section className="project-hero">
        <div className="project-hero__bg" style={{ background: `url('/assets/img/projects/ONOFF7/11287b38-453e-478a-865d-25c4fdfc09da.png') center/cover` }} />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Category', 'Hotel'], ['Year', '2024'], ['Location', 'New York']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Bruma.</h1>
        </div>
      </section>

      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">The Challenge</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                A boutique hotel that disappears into quiet luxury from the moment of arrival.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Bruma is a 92-room boutique hotel in the West Village with a strong editorial identity —
                moody, layered, deliberately unhurried. The lighting brief called for a space that felt
                perpetually dusky regardless of the hour, while maintaining enough functional illumination
                for guests to navigate, read, and use the facilities safely and comfortably.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                The lobby's acoustic environment presented a significant challenge: a double-height void with
                exposed concrete and polished terrazzo is an acoustic nightmare. We resolved it by suspending
                a series of custom sculptural baffles at varying heights — objects that read as art
                installations while performing meaningful acoustic work, absorbing the frequencies that
                would otherwise generate the characteristic hotel-lobby reverb guests find fatiguing.
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
              <div className="metric__number reveal">0<span className="metric__unit">.89</span></div>
              <div className="metric__sub-number reveal reveal-delay-1">NRC</div>
              <p className="label metric__label reveal reveal-delay-2">Noise Reduction Coefficient / Guest Comfort</p>
            </div>
            <div>
              <h3 className="metric__heading reveal">Where the City Fades and the Hotel Begins.</h3>
              <p className="metric__body reveal reveal-delay-1">
                An NRC of 0.89 in the public spaces transforms the acoustic character of the hotel's
                common areas — from check-in desk to bar to corridor — ensuring that the transition from
                New York City's noise to Bruma's intentional calm is felt within seconds of arrival.
                The sculptural baffles absorb 89% of incident mid-frequency energy without disrupting
                the visual composition.
              </p>
              <p className="metric__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                Guest suite lighting was designed with particular care: a single scene-control interface
                manages all in-room lighting from 2700K warm ambience to 3500K task lighting at the desk,
                with blackout capability in every zone to support genuine rest.
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
              ['/assets/img/projects/ONOFF1/2ba5284e-a070-48d5-af04-5136b4e823d7.png', 'Hospitality · 2025', 'Aether', '/aether'],
              ['/assets/img/projects/ONOFF11/10df50eb-ecc9-4f5c-b995-87cbc5f7ecbc.png', 'Residential · 2025', 'Cipher', '/cipher'],
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
