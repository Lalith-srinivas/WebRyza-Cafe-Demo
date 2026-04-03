import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = ['home', 'menu', 'about', 'gallery', 'reviews', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="cafe-name">Orange Vegan</span>
          <span className="cafe-sub">cafe & kitchen</span>
        </a>

        <div className={`navbar-links${mobileOpen ? ' open' : ''}`}>
          {['home', 'menu', 'about', 'gallery', 'reviews', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => handleNavClick(e, section)}
            >
              {section}
            </a>
          ))}
          <a
            href="#menu"
            className="navbar-cta"
            onClick={(e) => handleNavClick(e, 'menu')}
          >
            Order Now
          </a>
        </div>

        <button
          className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
