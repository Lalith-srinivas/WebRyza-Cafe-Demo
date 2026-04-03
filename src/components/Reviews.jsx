const reviews = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Food Blogger',
    stars: 5,
    text: 'Absolutely blown away by the flavors! The Buddha Bowl is a masterpiece, and the Matcha Latte is the best I\'ve had anywhere. This cafe proves vegan food can be truly extraordinary.',
  },
  {
    name: 'Arjun Mehta',
    initials: 'AM',
    role: 'Regular Customer',
    stars: 5,
    text: 'My favorite weekend spot! The ambience is so cozy and the avocado toast is to die for. The staff always remembers my order — that personal touch makes all the difference.',
  },
  {
    name: 'Sneha Reddy',
    initials: 'SR',
    role: 'Wellness Coach',
    stars: 5,
    text: 'As a nutritionist, I\'m very particular about what I eat. Orange Vegan Cafe uses the freshest organic ingredients and every dish is packed with flavor. A gem of a place!',
  },
  {
    name: 'Kabir Patel',
    initials: 'KP',
    role: 'Coffee Enthusiast',
    stars: 4,
    text: 'The cold brew here is exceptional — perfectly smooth with deep chocolatey notes. And the raw chocolate tart? Pure indulgence. I recommend this place to everyone.',
  },
]

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-title fade-in">
          <span className="script-label">Testimonials</span>
          <h2>What Our Guests Say</h2>
          <p>Real stories from people who've experienced the magic of our plant-based kitchen.</p>
          <div className="title-divider"></div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className={`review-card fade-in fade-in-delay-${(i % 4) + 1}`}>
              <span className="quote-icon">"</span>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <span key={j} className="star" style={{ opacity: j < review.stars ? 1 : 0.25 }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div className="review-author-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
