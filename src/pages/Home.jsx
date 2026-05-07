import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS = [
  { img: 'img-ceiling-panel',     nrc: 'NRC 0.90', title: 'Ceiling Panel',     desc: 'Flat or 3D-relief PET panel with recessed or surface LED strip. Ideal for large open spans and hotel lobbies.' },
  { img: 'img-suspended-baffle', nrc: 'NRC 0.95', title: 'Suspended Baffle',  desc: 'Hanging blade or fin system. Provides high surface area for absorption while distributing indirect light upward and downward.' },
  { img: 'img-ceiling-island',   nrc: 'NRC 0.88', title: 'Ceiling Island',    desc: 'Floating acoustic island in custom shape — circular, organic, geometric. LED perimeter or embedded.' },
  { img: 'img-wall-panel',       nrc: 'NRC 0.85', title: 'Wall Panel',        desc: 'Mounted panel with integrated backlit or edgelit LED. Resolves lateral reflections and adds ambient lighting layer.' },
]

const PROCESS = [
  { n: '01', title: 'Pre-design',     desc: 'We join the design team early. Space analysis: RT60 target, lux requirements per zone, material palette.' },
  { n: '02', title: 'Proposal',       desc: 'Technical report with acoustic distribution plans, lighting layout, and material selection. Compatible with project documentation.' },
  { n: '03', title: 'Manufacturing',  desc: 'In-house production: exact dimensions, Pantone color match, LED integration. QC before shipping.' },
  { n: '04', title: 'Installation',   desc: 'On-site supervision, lighting and acoustic commissioning, as-built drawings and maintenance manual.' },
]

const SECTORS = [
  { title: 'Hospitality & Resorts',   desc: 'Lobbies, restaurants, spas, guest rooms. Zoned acoustic and light control per space function.' },
  { title: 'Corporate Offices',       desc: 'Open plans, meeting rooms, focus areas. WELL acoustic and luminance compliance.' },
  { title: 'Restaurants & Bars',      desc: 'Atmosphere design: RT60 target, CCT zoning, noise control without compromising ambiance.' },
  { title: 'Coworking & Flex Spaces', desc: 'Modular, brand-integrated panels. Cost-efficient installation with a high-end finish.' },
  { title: 'Healthcare & Wellness',   desc: 'Consultation rooms, clinics, spas — where silence and light quality are part of the treatment.' },
  { title: 'Luxury Residential',      desc: 'Bespoke solutions for high-end homes where every material decision is a design statement.' },
]


const WORKS = [
  { img: 'img-harmonia', name: 'Harmonia', to: '/harmonia' },
  { img: 'img-kaworu',   name: 'Kaworu',   to: '/kaworu' },
  { img: 'img-kyoko',    name: 'Kyoko',    to: '/kyoko' },
  { img: 'img-urania',   name: 'Urania',   to: '/urania' },
]

export default function Home() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg img-hero" />
        <div className="hero__content">
          <p className="label hero__label reveal">Architectural Lighting · Acoustic Design</p>
          <h1 className="hero__headline reveal reveal-delay-1">
            Where light and sound<br />become architecture.
          </h1>
          <div className="hero__sub reveal reveal-delay-2">
            <p className="hero__desc">
              onoff studio integrates sound absorption and illumination within a single architectural element —
              one specification, one product, one installation.
            </p>
            <span className="hero__scroll">
              <span className="hero__scroll-line" />
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="section-intro">
        <div className="container">
          <div className="intro-grid">
            <div>
              <p className="label intro__label reveal">The Concept</p>
              <h2 className="intro__heading reveal reveal-delay-1">
                Light and acoustics as one design language.
              </h2>
              <p className="intro__body reveal reveal-delay-2">
                Acoustic lighting is the integration of sound absorption and illumination within a single
                architectural element. Instead of treating light and acoustics as separate systems — coordinated
                by different consultants at different stages — onoff studio resolves both in one specification,
                one product, one installation.
              </p>
            </div>
            <div className="intro__image reveal reveal-delay-1">
              <img src="/assets/img/7692b69d-b804-48f0-8935-39ff6373032f.jpg" alt="onoff studio acoustic lighting interior" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section-approach" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Why It Matters</p>
            <h2 className="approach__heading reveal reveal-delay-1">Sound shapes how a space feels.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              Sound design is often treated as a correction. onoff studio treats it as part of the concept.
            </p>
          </div>
          <div className="pillars-grid">
            {[
              { n: '—', title: 'Too Loud',   body: 'Hard surfaces — concrete, glass, metal — reflect sound waves, creating echo and reverberation that cause fatigue, reduce speech intelligibility, and undermine the spatial experience.' },
              { n: '—', title: 'Too Quiet',  body: 'Over-absorptive spaces feel unnatural and unsettling. The goal is a calibrated RT60 — the right reverberation time for the use of the space, whether hospitality, office, or retail.' },
              { n: '—', title: 'Calibrated', body: 'onoff studio calculates target RT60 per space typology and designs acoustic and lighting systems that reach it — without visual compromise and without acoustic over-correction.' },
            ].map((p, i) => (
              <div key={p.title} className={`pillar reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="pillar__number">{p.n}</div>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-services-dual" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Services</p>
            <h2 className="approach__heading reveal reveal-delay-1">Two disciplines.<br />One solution.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              Acoustics and lighting designed together from day one — one specification, one product, one installation.
            </p>
          </div>
          <div className="dual-grid">
            <div className="dual-card reveal">
              <p className="label dual-card__label">Acoustics</p>
              <h3 className="dual-card__heading">The right silence.</h3>
              <ul className="dual-card__list">
                {['100% recycled PET panels — in-house manufactured', 'Suspended baffles, ceiling islands, wall panels', 'NRC 0.85 – 0.95 across mid and high frequencies', 'Custom formats: flat, perforated, 3D relief, printed', 'LEED · WELL · EPD certifications available', 'Target RT60 calculated per space typology'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="dual-card reveal reveal-delay-1">
              <p className="label dual-card__label">Lighting</p>
              <h3 className="dual-card__heading">Light that gives form.</h3>
              <ul className="dual-card__list">
                {['Luminotechnical design: UGR, lux levels, CCT zoning', 'Integrated LED within acoustic panels and baffles', 'Lighting concept for hospitality and corporate', 'DALI / DMX / KNX control systems', 'Luminaire specification and technical documentation', 'On-site coordination with electrical contractors'].map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE PRODUCT */}
      <section className="section-product" style={{ padding: 'var(--section-y) 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="product-grid">
            <div className="product-img reveal">
              <img src="/assets/img/2baf20f8-6b81-47e1-9f65-6cfa853be576.jpg" alt="Acoustic lighting panel" loading="lazy" />
            </div>
            <div className="product-info">
              <p className="label reveal">Signature Product</p>
              <h2 className="product-info__heading reveal reveal-delay-1">Acoustic lighting panel.</h2>
              <p className="product-info__body reveal reveal-delay-2">
                A single ceiling element that resolves two design problems simultaneously: high-performance
                sound absorption and integrated diffuse illumination. Manufactured in recycled PET with
                dimmable LED module. Fully customizable.
              </p>
              <div className="product-specs reveal reveal-delay-2">
                {[['0.85 – 0.95', 'NRC'], ['2700 – 6500K', 'CCT'], ['≥ 90', 'CRI'], ['Recycled PET', 'Material']].map(([v, l]) => (
                  <div key={l} className="product-spec">
                    <span className="product-spec__value">{v}</span>
                    <span className="product-spec__label">{l}</span>
                  </div>
                ))}
              </div>
              <p className="product-info__note reveal">In-house manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="section-range" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Product Range</p>
            <h2 className="approach__heading reveal reveal-delay-1">Four ways to integrate<br />light and sound.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              Each format resolves the acoustic-lighting integration differently — choose by ceiling type, span, and design intent.
            </p>
          </div>
          <div className="range-grid">
            {PRODUCTS.map((p, i) => (
              <div key={p.title} className={`range-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className={`range-card__img ${p.img}`} />
                <div className="range-card__body">
                  <div className="range-card__nrc">{p.nrc}</div>
                  <h3 className="range-card__title">{p.title}</h3>
                  <p className="range-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-approach" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Our Process</p>
            <h2 className="approach__heading reveal reveal-delay-1">From concept to installation.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              We join the design team early — sound and light are part of the concept, not corrections.
            </p>
          </div>
          <div className="pillars-grid pillars-grid--2col">
            {PROCESS.map((p, i) => (
              <div key={p.n} className={`pillar reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="pillar__number">{p.n}</div>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section-sectors" style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="approach-header">
            <p className="label reveal">Sectors</p>
            <h2 className="approach__heading reveal reveal-delay-1">Spaces where detail<br />defines the experience.</h2>
            <p className="approach__desc reveal reveal-delay-2">
              From hospitality to healthcare — every typology where acoustic and lighting quality determines how a space is perceived.
            </p>
          </div>
          <div className="sectors-grid">
            {SECTORS.map((s, i) => (
              <div key={s.title} className={`sector-item reveal${i % 3 > 0 ? ` reveal-delay-${i % 3}` : ''}`}>
                <h4 className="sector-item__title">{s.title}</h4>
                <p className="sector-item__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-stats" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-grid">
            {[['8', '+', 'U.S. states served'], ['100', '%', 'Recycled PET'], ['≤ 6', '', 'Weeks lead time']].map(([n, sup, label]) => (
              <div key={label} className="stat reveal">
                <div className="stat__number">{n}<span className="stat__sup">{sup}</span></div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="section-works-teaser">
        <div className="container">
          <div className="section-header">
            <p className="label reveal">Portfolio</p>
            <div className="section-header__row">
              <h2 className="section-header__heading reveal reveal-delay-1">Selected Works</h2>
              <Link to="/portfolio" className="section-header__link reveal reveal-delay-1">View all →</Link>
            </div>
            <p className="approach__desc reveal reveal-delay-2">
              A selection of projects where light and sound were designed as one — from concept to commissioning.
            </p>
          </div>
          <div className="works-teaser-grid">
            {WORKS.map((w, i) => (
              <Link to={w.to} key={w.name} className={`work-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className={`work-card__img ${w.img}`} />
                <div className="work-card__overlay">
                  <div className="work-card__cat">Lighting &amp; Acoustics</div>
                  <div className="work-card__name">{w.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta" id="contact">
        <div className="container">
          <h2 className="cta__heading reveal">
            If you're working on a project where acoustics and lighting are part of the experience — not an afterthought — let's talk from the design stage.
          </h2>
          <Link to="/contact" className="cta__btn reveal reveal-delay-1">
            Let's design together <span className="cta__btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
