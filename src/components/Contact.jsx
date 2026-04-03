export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title fade-in">
          <span className="script-label">Get in Touch</span>
          <h2>Visit Us Today</h2>
          <p>We'd love to welcome you. Come experience the warmth of Orange Vegan Cafe.</p>
          <div className="title-divider"></div>
        </div>

        <div className="contact-grid fade-in">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Our Location</h4>
                <p>42 Greenway Road, Koramangala<br />Bengaluru, Karnataka 560034</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@orangevegancafe.com">hello@orangevegancafe.com</a>
              </div>
            </div>

            <div className="contact-hours">
              <h4>Opening Hours</h4>
              <div className="hours-row">
                <span>Monday — Friday</span>
                <span>8:00 AM — 10:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>9:00 AM — 11:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>9:00 AM — 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965059997287!2d77.61167571482192!3d12.935217790875895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452fedfc0fb%3A0xc56b6eeaa82cb968!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orange Vegan Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
