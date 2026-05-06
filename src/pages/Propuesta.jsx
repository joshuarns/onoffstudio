import { useReveal } from '../hooks/useReveal'

const PROCESS_ROWS = [
  ['Diagnosis',        '1 week',   'Report'],
  ['Concept',          '2 weeks',  'Renders'],
  ['Technical Design', '3 weeks',  'Plans'],
  ['Specification',    '1 week',   'Document'],
  ['Site Supervision', 'Ongoing',  'Site Visits'],
]

const SERVICES_ROWS = [
  ['Spatial Audit',     '✓', '✓'],
  ['DIALux Simulation', '✓', '✓'],
  ['3D Renders',        '—', '✓'],
  ['DALI Protocol',     '—', '✓'],
  ['On-site Supervision','—', '✓'],
]

export default function Propuesta() {
  useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = document.getElementById('form-success')
    if (success) success.style.display = 'block'
    e.target.reset()
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="label page-hero__label reveal">Services</p>
          <h1 className="page-hero__heading reveal reveal-delay-1">Technical<br />Proposal.</h1>
          <p className="page-hero__desc reveal reveal-delay-2">
            Every project begins with a tailored proposal that integrates diagnosis, design, and implementation strategy.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="section-propuesta-intro">
        <div className="container">
          <div className="propuesta-intro-grid">
            <div>
              <span className="propuesta__tag reveal">Methodology</span>
              <h2 className="propuesta__heading reveal reveal-delay-1">
                A process designed for precision.
              </h2>
              <p className="propuesta__body reveal reveal-delay-2">
                Our technical proposal is not a generic document — it's the result of an in-depth audit of the
                space, its use, materials, and the objectives of those who will inhabit it. Every specification
                has a reason.
              </p>
              <p className="propuesta__body reveal reveal-delay-2" style={{ marginTop: 16 }}>
                We work with architects, designers, and developers from concept stage through final delivery,
                ensuring the lighting vision remains intact throughout the entire construction process.
              </p>
            </div>
            <div className="img-harmonia reveal reveal-delay-1" style={{ aspectRatio: '4/3', borderRadius: 2, overflow: 'hidden' }} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-stats">
        <div className="container">
          <div className="stats-grid">
            {[['400+', 'Proposals delivered'], ['700', 'Consulting hours'], ['500+', 'Satisfied clients']].map(([n, label]) => (
              <div key={label} className="stat reveal">
                <div className="stat__number">{n}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL */}
      <section className="section-technical">
        <div className="technical-watermark" aria-hidden="true">TECHNICAL</div>
        <div className="container technical-content">
          <p className="label reveal">Specifications</p>
          <h2 className="approach__heading reveal reveal-delay-1" style={{ marginTop: 16, marginBottom: 0 }}>
            What every proposal includes.
          </h2>
          <div className="technical-grid">
            <div className="tech-table reveal">
              <div className="tech-table__head">Work process</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '10px 24px 8px', borderBottom: '1px solid var(--border)' }}>
                <span className="tech-row__head">Phase</span>
                <span className="tech-row__head">Duration</span>
                <span className="tech-row__head">Deliverable</span>
              </div>
              {PROCESS_ROWS.map(([phase, duration, deliverable]) => (
                <div key={phase} className="tech-row">
                  <span className="tech-row__item">{phase}</span>
                  <span className="tech-row__item">{duration}</span>
                  <span className="tech-row__item">{deliverable}</span>
                </div>
              ))}
            </div>

            <div className="tech-table reveal reveal-delay-1">
              <div className="tech-table__head">Included services</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '10px 24px 8px', borderBottom: '1px solid var(--border)' }}>
                <span className="tech-row__head">Service</span>
                <span className="tech-row__head">Basic</span>
                <span className="tech-row__head">Premium</span>
              </div>
              {SERVICES_ROWS.map(([service, basic, premium]) => (
                <div key={service} className="tech-row">
                  <span className="tech-row__item">{service}</span>
                  <span className="tech-row__item">{basic}</span>
                  <span className="tech-row__item">{premium}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section-contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <p className="label reveal" style={{ marginBottom: 20 }}>Contact</p>
              <h2 className="contact__heading reveal reveal-delay-1">
                Tell us about your project.
              </h2>
              <p className="contact__desc reveal reveal-delay-2">
                We respond within 24 hours. Every conversation starts with listening — not selling.
              </p>
            </div>

            <form className="form reveal reveal-delay-1" onSubmit={handleSubmit} noValidate>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input type="text" id="c-name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-company">Company</label>
                  <input type="text" id="c-company" placeholder="Studio / Company" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input type="email" id="c-email" placeholder="you@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="c-type">Project type</label>
                <select id="c-type" defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option>Residential</option>
                  <option>Hospitality</option>
                  <option>Corporate</option>
                  <option>Culture / Museums</option>
                  <option>Retail</option>
                  <option>Exterior / Landscaping</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Describe your project</label>
                <textarea id="c-message" rows="5" placeholder="Tell us about the space, goals, and estimated timeline..." />
              </div>
              <button type="submit" className="form__submit">
                Send proposal <span>→</span>
              </button>
              <p className="form-success" id="form-success" style={{ display: 'none', fontSize: '0.875rem', color: '#22c55e', marginTop: 4 }}>
                Message sent. We'll be in touch soon.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
