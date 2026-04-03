import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <div className="hero-offer">
          <span className="offer-dot"></span>
          <span>10% off on your first order</span>
        </div>

        <p className="hero-script">vegan cafe &amp; kitchen</p>

        <h1>Orange Vegan Cafe</h1>

        <p className="hero-tagline">Fresh &bull; Organic &bull; Delicious</p>

        <div className="hero-buttons">
          <a href="#menu" className="btn-primary" onClick={(e) => {
            e.preventDefault()
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Menu
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
