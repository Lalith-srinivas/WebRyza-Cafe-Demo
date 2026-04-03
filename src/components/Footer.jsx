export default function Footer() {
  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="cafe-name">Orange Vegan</span>
            <span className="cafe-script">cafe & kitchen</span>
            <p>
              A haven for plant-based food lovers. Fresh, organic, and crafted with care — every single day.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="YouTube">🎥</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
            <a href="#menu" onClick={(e) => handleClick(e, 'menu')}>Menu</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')}>About Us</a>
            <a href="#gallery" onClick={(e) => handleClick(e, 'gallery')}>Gallery</a>
            <a href="#reviews" onClick={(e) => handleClick(e, 'reviews')}>Reviews</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <a href="#">42 Greenway Road, Koramangala</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:hello@orangevegancafe.com">hello@orangevegancafe.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Orange Vegan Cafe. All rights reserved.</p>
          <a href="#">Designed with 🧡 for plant lovers</a>
        </div>
      </div>
    </footer>
  )
}
