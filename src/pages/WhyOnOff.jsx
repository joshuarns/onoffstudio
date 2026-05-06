import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const WHY = [
  {
    title: 'Full Integration',
    desc: 'Acoustics + lighting from a single firm. Less coordination, more design control. One point of contact from pre-design through commissioning.',
  },
  {
    title: 'In-house Manufacturing',
    desc: 'Every panel is manufactured in-house. Controlled lead times, exact dimensions, Pantone color match, and quality inspection before shipping.',
  },
  {
    title: 'From Pre-design',
    desc: 'We engage before construction documents. Sound and light are part of the concept, not corrections applied after the fact.',
  },
  {
    title: 'Real Sustainability',
    desc: 'Recycled PET core, zero VOCs, EPD available. Direct contribution to LEED and WELL Building certification — with documentation.',
  },
  {
    title: 'Technical Deliverables',
    desc: 'Plans, acoustic reports, lighting calculations, and spec sheets formatted to be compatible with your project documentation set.',
  },
  {
    title: 'No Intermediaries',
    desc: 'Direct manufacturing means better pricing, shorter lead times, and no quality loss from third-party production.',
  },
]

const STATS = [
  ['8+',   'U.S. states served'],
  ['100%', 'Recycled PET'],
  ['≤ 6',  'Weeks lead time'],
  ['96+',  'CRI average'],
]

export default function WhyOnOff() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero__bg img-harmonia-hero" />
        <div className="project-hero__content">
          <div className="project-hero__meta reveal">
            {[['Discipline', 'Lighting & Acoustics'], ['Based in', 'United States'], ['Since', '2020']].map(([label, value]) => (
              <div key={label} className="project-hero__meta-item">
                <span className="project-hero__meta-label">{label}</span>
                <span className="project-hero__meta-value">{value}</span>
              </div>
            ))}
          </div>
          <h1 className="project-hero__title reveal reveal-delay-1">Why onoff<br />studio.</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div>
              <p className="label challenge__label reveal">Our Difference</p>
              <h2 className="challenge__heading reveal reveal-delay-1">
                What no other design firm offers.
              </h2>
              <p className="challenge__body reveal reveal-delay-2">
                Most architectural projects treat acoustics and lighting as separate disciplines — coordinated
                by different consultants, specified at different stages, and installed without a shared
                design language. The result is spaces that look designed but don't feel designed.
              </p>
              <p className="challenge__body reveal reveal-delay-2" style={{ marginTop: 20 }}>
                onoff studio was built to close that gap. We integrate both disciplines from the first
                design conversation, manufacture the elements in-house, and deliver a space where every
                surface contributes to both what you see and what you hear.
              </p>
            </div>
            <div className="specs-panel reveal reveal-delay-1">
              <div className="specs-panel__title">At a Glance</div>
              {[
                ['Integration', 'Acoustics + Lighting'],
                ['Manufacturing', 'In-house, U.S.'],
                ['Lead Time', '≤ 6 weeks'],
                ['Material', '100% Recycled PET'],
                ['Certifications', 'LEED · WELL · EPD'],
                ['Engagement', 'From pre-design'],
                ['CRI', '93 – 96+'],
              ].map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-row__key">{key}</span>
                  <span className="spec-row__value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-stats" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map(([n, label]) => (
              <div key={label} className="stat reveal">
                <div className="stat__number">{n}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ITEMS */}
      <section style={{ padding: 'var(--section-y) 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Six Reasons</p>
            <h2 className="approach__heading reveal reveal-delay-1">Built around the gaps<br />every architect hits.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              Each one of these points comes from a real problem we encountered — and decided to solve structurally.
            </p>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <div key={w.title} className={`why-item reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <h4 className="why-item__title">{w.title}</h4>
                <p className="why-item__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK — project visual */}
      <section style={{ padding: 'var(--section-y) 0', background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="product-grid">
            <div className="product-img reveal">
              <img
                src="/assets/img/projects/Harmonia/Harmonia_3.png"
                alt="onoff studio — acoustic lighting panel detail"
                loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 2 }}
              />
            </div>
            <div className="product-info">
              <p className="label reveal">In Practice</p>
              <h2 className="product-info__heading reveal reveal-delay-1">One element.<br />Two problems solved.</h2>
              <p className="product-info__body reveal reveal-delay-2">
                Every onoff studio product is engineered to perform acoustically and visually at the same time.
                The panel you specify for NRC 0.88 is the same panel delivering 9,600 lm of diffuse,
                glare-free illumination.
              </p>
              <p className="product-info__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                This isn't acoustic treatment with a light strip added. It's a single architectural element
                designed from first principles to resolve both disciplines simultaneously.
              </p>
              <Link to="/portfolio" className="cta__btn reveal reveal-delay-2" style={{ marginTop: 32, display: 'inline-flex' }}>
                See the work <span className="cta__btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND IMAGE — different project */}
      <section style={{ padding: 'var(--section-y) 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="product-grid" style={{ direction: 'rtl' }}>
            <div className="product-img reveal" style={{ direction: 'ltr' }}>
              <img
                src="/assets/img/projects/Harmonia/Kaworu_2.png"
                alt="onoff studio — suspended baffle system"
                loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 2 }}
              />
            </div>
            <div className="product-info" style={{ direction: 'ltr' }}>
              <p className="label reveal">Manufacturing</p>
              <h2 className="product-info__heading reveal reveal-delay-1">Made in-house.<br />No compromises.</h2>
              <p className="product-info__body reveal reveal-delay-2">
                Manufacturing in-house means every order is built to exact project specifications — not
                adapted from a catalog. Custom dimensions, Pantone color matching, and LED integration
                are part of every project, not add-ons.
              </p>
              <p className="product-info__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                No third-party production means no quality dilution, no communication gaps, and
                lead times under 6 weeks from approved drawings.
              </p>
              <Link to="/propuesta" className="cta__btn reveal reveal-delay-2" style={{ marginTop: 32, display: 'inline-flex' }}>
                Start a project <span className="cta__btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta" id="contact">
        <div className="container">
          <h2 className="cta__heading reveal">
            If light and acoustics are part of the experience you're designing — let's talk from the beginning.
          </h2>
          <Link to="/propuesta" className="cta__btn reveal reveal-delay-1">
            Let's design together <span className="cta__btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
