import aboutImage from '../assets/about.png'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in">
            <span className="script-label">Our Story</span>
            <h2>Where Every Bite Tells a Story of Nature</h2>
            <p>
              Born from a passion for wholesome, plant-based cuisine, Orange Vegan Cafe is more than just a place to eat — it's a celebration of nature's finest offerings. Every dish is a testament to our commitment to fresh, organic ingredients.
            </p>
            <p>
              We partner directly with local organic farms to bring you the freshest seasonal produce. Our kitchen transforms these humble ingredients into extraordinary culinary experiences that nourish both body and soul.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Menu Items</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">12K+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic</span>
              </div>
            </div>
          </div>

          <div className="about-image fade-in fade-in-delay-2">
            <img src={aboutImage} alt="Inside Orange Vegan Cafe — cozy interior with plants and warm lighting" />
          </div>
        </div>
      </div>
    </section>
  )
}
