import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  { img: '/assets/img/projects/Harmonia/Harmonia_1.png',                               cat: 'Lighting & Acoustics · 2025', name: 'Harmonia', to: '/harmonia' },
  { img: '/assets/img/projects/ONOFF1/2ba5284e-a070-48d5-af04-5136b4e823d7.png',       cat: 'Hospitality · 2025',          name: 'Aether',   to: '/aether'   },
  { img: '/assets/img/projects/ONOFF2/0ef21fa9-c843-46de-8ae1-7136b1fd8bfe.png',       cat: 'Residential · 2025',          name: 'Solano',   to: '/solano'   },
  { img: '/assets/img/projects/ONOFF3/9d8ad3a5-49f1-4986-a2bf-fda01499a75e.png',       cat: 'Restaurant · 2024',           name: 'Lumis',    to: '/lumis'    },
  { img: '/assets/img/projects/ONOFF4/77bf00db-0ae9-4bad-8f0d-faf99d682d86.png',       cat: 'Wellness & Spa · 2025',       name: 'Vela',     to: '/vela'     },
  { img: '/assets/img/projects/ONOFF5/6e030e0d-0785-42e1-88f4-98eba7552610.png',       cat: 'Cultural · 2024',             name: 'Canto',    to: '/canto'    },
  { img: '/assets/img/projects/ONOFF6/2cca9790-23c8-4170-ad0d-78319876d875.png',       cat: 'Corporate · 2025',            name: 'Nexus',    to: '/nexus'    },
  { img: '/assets/img/projects/ONOFF7/11287b38-453e-478a-865d-25c4fdfc09da.png',       cat: 'Hotel · 2024',                name: 'Bruma',    to: '/bruma'    },
  { img: '/assets/img/projects/ONOFF8/53e02da3-5403-452b-8d1a-3248d1cc8a0f.png',       cat: 'Retail · 2025',               name: 'Zenith',   to: '/zenith'   },
  { img: '/assets/img/projects/ONOFF9/3b3f2ce4-93d3-4deb-b028-fff0af6a6902.png',       cat: 'Restaurant · 2024',           name: 'Marea',    to: '/marea'    },
  { img: '/assets/img/projects/ONOFF10/2baf20f8-6b81-47e1-9f65-6cfa853be576.png',      cat: 'Corporate · 2025',            name: 'Halo',     to: '/halo'     },
  { img: '/assets/img/projects/ONOFF11/10df50eb-ecc9-4f5c-b995-87cbc5f7ecbc.png',      cat: 'Residential · 2025',          name: 'Cipher',   to: '/cipher'   },
  { img: '/assets/img/projects/ONOFF12/2288a431-5f63-4411-8597-2762b3fa25b5.png',      cat: 'Wellness · 2024',             name: 'Duna',     to: '/duna'     },
]

export default function Portfolio() {
  useReveal()

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <p className="label page-hero__label reveal">Our work</p>
          <h1 className="page-hero__heading reveal reveal-delay-1">Selected<br />Works.</h1>
          <p className="page-hero__desc reveal reveal-delay-2">
            A selection of projects where light and sound are designed as one — visually refined,
            technically precise, and sensorially complete.
          </p>
        </div>
      </header>

      <section className="section-portfolio">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}>
            {PROJECTS.map((p, i) => (
              <Link
                to={p.to}
                key={p.name}
                className={`portfolio-item reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  aspectRatio: '4/3',
                  background: `url('${p.img}') center/cover`,
                  filter: 'brightness(0.82)',
                  transition: 'filter 0.4s ease, transform 0.4s ease',
                  width: '100%',
                }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0.82)'}
                />
                <div className="portfolio-item__info">
                  <p className="portfolio-item__cat">{p.cat}</p>
                  <h2 className="portfolio-item__name">{p.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-portfolio-cta">
        <div className="container">
          <p className="portfolio-cta__text reveal">
            Every technical decision should contribute to beauty, comfort, and performance.
          </p>
          <Link to="/contact" className="cta__btn reveal reveal-delay-1">
            Get in touch <span className="cta__btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
