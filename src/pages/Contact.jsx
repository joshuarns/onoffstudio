import { useReveal } from '../hooks/useReveal'

export default function Contact() {
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
          <p className="label page-hero__label reveal">Get in touch</p>
          <h1 className="page-hero__heading reveal reveal-delay-1">Contact.</h1>
          <p className="page-hero__desc reveal reveal-delay-2">
            Every conversation starts with listening — not selling. Tell us about your project.
          </p>
        </div>
      </header>

      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <img
          src="/assets/img/7bec58bd-ff03-436d-97d5-4052f329d2d2.jpg"
          alt="onoffstudio — acoustic corridor"
          loading="lazy"
          style={{ width: '100%', display: 'block', maxHeight: '60vh', objectFit: 'cover' }}
        />
      </section>

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
                Send message <span>→</span>
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
