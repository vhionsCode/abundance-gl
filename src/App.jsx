import { useEffect, useMemo, useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'
import serviceImg1 from './assets/g1.webp'
import serviceImg2 from './assets/g2.webp'
import serviceImg3 from './assets/g3.webp'
import heroImg from './assets/g4.webp'
import serviceImg5 from './assets/g5.webp'

function App() {
  const services = useMemo(
    () => [
      {
        title: 'Geophysical Survey',
        icon: '🛰️',
        image: serviceImg1,
      },
      {
        title: 'Borehole Drilling',
        icon: '🏗️',
        image: serviceImg2,
      },
      {
        title: 'Installations',
        icon: '🛠️',
        image: serviceImg3,
      },
      {
        title: 'Water Treatment Services',
        icon: '💧',
        image: serviceImg5,
      },
      {
        title: 'Consultations',
        icon: '📋',
        image: heroImg,
      },
    ],
    []
  )

  const rotatingTexts = useMemo(() => services.map((service) => service.title), [services])

  const [textIndex, setTextIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = rotatingTexts[textIndex]
    const speed = isDeleting ? 55 : 90

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentText.length) {
        setTypedText(currentText.slice(0, typedText.length + 1))
        return
      }

      if (!isDeleting && typedText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 900)
        return
      }

      if (isDeleting && typedText.length > 0) {
        setTypedText(currentText.slice(0, typedText.length - 1))
        return
      }

      if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, textIndex, rotatingTexts])

  const whatsappLink =
    'https://wa.me/2348034562562?text=Hello%20Abundance%20Geoservices%20Limited%2C%20I%20would%20like%20to%20request%20your%20service.'

  return (
    <div className="page-wrap">
      <div className="background-shapes" aria-hidden="true">
        <svg className="shape shape-one" viewBox="0 0 400 400">
          <path d="M79.2,-101.5C108.6,-86.5,143,-72.6,157.3,-48.6C171.6,-24.7,165.9,9.2,154.6,40.7C143.3,72.2,126.4,101.4,100.7,120.4C75,139.4,40.5,148.2,7,139.8C-26.5,131.4,-59,105.8,-89.2,84.3C-119.4,62.8,-147.4,45.4,-161.3,18.2C-175.3,-9,-175.2,-46,-157.3,-74C-139.4,-102,-103.7,-120.9,-71.7,-136.1C-39.7,-151.2,-11.3,-162.6,13.6,-180.3C38.4,-197.9,76.8,-221.9,79.2,-101.5Z" />
        </svg>
        <svg className="shape shape-two" viewBox="0 0 400 400">
          <path d="M47.8,-68.5C66.8,-58.2,90.5,-57.6,105.3,-46.4C120.2,-35.2,126.3,-13.4,124.1,8.8C121.9,30.9,111.4,53.4,96.8,71.2C82.2,89,63.5,102.2,42.6,111.4C21.8,120.7,-1.2,126,-24.9,123.2C-48.6,120.4,-72.9,109.5,-87.5,91.5C-102.2,73.5,-107.2,48.4,-112.3,24.7C-117.3,1,-122.4,-21.3,-116,-40.1C-109.6,-58.9,-91.8,-74.2,-72.3,-84.4C-52.9,-94.7,-31.7,-99.9,-11.4,-95.3C8.9,-90.7,17.8,-76.2,47.8,-68.5Z" />
        </svg>
      </div>

      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <img src={logoImg} alt="" className="brand-logo" />
          </span>
          <span className="brand-text">Abundance Geoservices Limited</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Trusted Water & Ground Engineering Partner</p>
            <h1>
              Professional Solutions in <span className="hero-typewriter">{typedText}</span>
              <span className="caret" aria-hidden="true">
                |
              </span>
            </h1>
            <p>
              Abundance Geoservices Limited delivers reliable geoservices for homes,
              institutions, businesses, and communities across Nigeria.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Request a Quote
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src={heroImg}
              alt="Borehole drilling service equipment in operation"
            />
          </div>
        </section>

        <section className="section about" id="about">
          <h2>About Us</h2>
          <p>
            We combine field experience, modern equipment, and quality assurance to
            provide dependable geophysical and water infrastructure services.
          </p>
          <div className="stats-grid">
            <article className="about-card">
              <span className="about-icon" aria-hidden="true">
                ✅
              </span>
              <h3>Reliable Delivery</h3>
              <p>Projects executed with clear process, safety, and accountability.</p>
            </article>
            <article className="about-card">
              <span className="about-icon" aria-hidden="true">
                ⚙️
              </span>
              <h3>Technical Expertise</h3>
              <p>Competent team for surveying, drilling, installation, and treatment.</p>
            </article>
            <article className="about-card">
              <span className="about-icon" aria-hidden="true">
                🤝
              </span>
              <h3>Client Focused</h3>
              <p>Practical recommendations tailored to your site and project goals.</p>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-thumb">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-head">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>
                  High-quality execution with professional standards and responsive
                  support.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process">
          <h2>How We Work</h2>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Site Assessment</h3>
              <p>We evaluate your project needs and site conditions.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Technical Execution</h3>
              <p>Our team deploys the right tools and methods for the job.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Delivery & Support</h3>
              <p>We complete handover and provide recommendations for durability.</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Tell us about your project and we will get back to you quickly.</p>
            <ul>
              <li>
                <strong>Phone:</strong> +234 803 456 2562
              </li>
              <li>
                <strong>Email:</strong> vickyng099@gmail.com
              </li>
              <li>
                <strong>Address:</strong> 6, Ogo Oluwa Close, Oke-Kuto, Abeokuta,
                Ogun State, Nigeria.
              </li>
            </ul>
          </div>

          <form
            name="abundance-contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="abundance-contact" />
            <p className="hidden-field">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <label>
              Full Name
              <input type="text" name="name" required />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" required />
            </label>
            <label>
              Email Address
              <input type="email" name="email" required />
            </label>
            <label>
              Service Needed
              <select name="service" required>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Briefly describe your project"
                required
              ></textarea>
            </label>
            <button type="submit" className="btn btn-primary">
              Send Request
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Abundance Geoservices Limited. All rights reserved.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Abundance Geoservices on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.11 17.63c-.27-.14-1.58-.78-1.82-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.85 1.03-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.41.12-.54.13-.13.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.45-.6-.45-.16-.01-.34-.01-.53-.01-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22s.96 2.57 1.09 2.75c.13.18 1.89 2.88 4.58 4.04.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.51-.31M16.17 27h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-4.09 1.07 1.09-3.98-.25-.41a10.78 10.78 0 0 1-1.66-5.78c0-5.95 4.84-10.79 10.8-10.79 2.88 0 5.59 1.12 7.63 3.16a10.72 10.72 0 0 1 3.17 7.63c0 5.95-4.85 10.8-10.8 10.8m9.19-19.98A12.95 12.95 0 0 0 16.17 3.2c-7.16 0-12.98 5.82-12.98 12.97 0 2.28.6 4.5 1.74 6.46L3.1 29.2l6.74-1.77a13.04 13.04 0 0 0 6.33 1.61h.01c7.15 0 12.97-5.82 12.97-12.97 0-3.46-1.35-6.71-3.79-9.05" />
        </svg>
      </a>
    </div>
  )
}

export default App
