import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import aboutImg from '../assets/about.png'
import heroImg from '../assets/hero.png'

const galleryImages = [
  { src: gallery1, alt: 'Artisan latte art at Orange Vegan Cafe' },
  { src: gallery2, alt: 'Vegan dessert platter with pastries and berries' },
  { src: gallery3, alt: 'Fresh smoothie bowls with seasonal toppings' },
  { src: gallery4, alt: 'Avocado toast on artisan sourdough bread' },
  { src: aboutImg, alt: 'Cozy cafe interior with warm ambience' },
  { src: heroImg, alt: 'Fresh organic spread on the cafe table' },
]

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-title fade-in">
          <span className="script-label">Visual Journey</span>
          <h2>From Our Kitchen</h2>
          <p>A glimpse into the passion, craft, and beauty behind every plate we serve.</p>
          <div className="title-divider"></div>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-item fade-in fade-in-delay-${(i % 4) + 1}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
