import { useReveal } from '../hooks/useReveal'

const WHY = [
  { title: 'Full Integration',       desc: 'Acoustics + lighting from a single firm. Less coordination, more design control.' },
  { title: 'In-house Manufacturing', desc: 'Manufactured in the U.S. Controlled lead times, guaranteed quality.' },
  { title: 'From Pre-design',        desc: 'We engage before construction documents. Sound and light are part of the concept, not corrections.' },
  { title: 'Real Sustainability',    desc: 'Recycled PET, zero VOCs. Direct contribution to LEED and WELL Building certification.' },
  { title: 'Technical Deliverables', desc: 'Plans, technical reports and spec sheets compatible with your project documentation set.' },
  { title: 'No Intermediaries',      desc: 'Direct manufacturing means better pricing and shorter lead times without sacrificing quality.' },
]

export default function WhyOnOff() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero__bg img-why-hero" />
        <div className="project-hero__content">
          <h1 className="project-hero__title reveal reveal-delay-1">Why onoff<br />studio.</h1>
        </div>
      </section>

      {/* WHY ONOFF */}
      <section className="section-why" style={{ padding: 'var(--section-y) 0', background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Why onoff studio</p>
            <h2 className="approach__heading reveal reveal-delay-1">What no other<br />design firm offers.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              We built onoff studio around the gaps that architects and developers hit when specifying acoustics and lighting as separate disciplines.
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

      {/* IMAGE */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <img
          src="/assets/img/a171c8fe-92b1-4b01-b439-e14632d4d4eb.jpg"
          alt="onoff studio — acoustic lighting panel"
          loading="lazy"
          style={{ width: '100%', display: 'block' }}
        />
      </section>
    </>
  )
}
