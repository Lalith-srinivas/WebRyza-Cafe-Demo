import { useState, useEffect, useRef } from 'react'

const menuData = {
  Coffee: [
    { name: 'Oat Milk Latte', price: '₹249', desc: 'Creamy oat milk with double-shot espresso, topped with latte art', tag: 'Bestseller' },
    { name: 'Matcha Latte', price: '₹279', desc: 'Ceremonial grade matcha whisked with steamed almond milk', tag: 'Vegan' },
    { name: 'Cold Brew', price: '₹199', desc: '18-hour cold-steeped single origin beans, smooth and bold', tag: '' },
    { name: 'Espresso Tonic', price: '₹229', desc: 'Double espresso over premium tonic water with citrus zest', tag: 'New' },
    { name: 'Turmeric Latte', price: '₹219', desc: 'Golden milk with organic turmeric, cinnamon, and coconut milk', tag: 'Healthy' },
    { name: 'Mocha Delight', price: '₹269', desc: 'Rich Belgian cocoa blended with espresso and oat cream', tag: '' },
  ],
  Beverages: [
    { name: 'Fresh Orange Juice', price: '₹179', desc: 'Cold-pressed Valencia oranges, no added sugar or preservatives', tag: 'Fresh' },
    { name: 'Acai Smoothie', price: '₹299', desc: 'Organic acai, banana, blueberries, and coconut milk blend', tag: 'Superfood' },
    { name: 'Green Detox', price: '₹249', desc: 'Kale, spinach, apple, ginger, and lemon cold-pressed juice', tag: 'Healthy' },
    { name: 'Mango Lassi', price: '₹199', desc: 'Alphonso mango blended with cashew yogurt and cardamom', tag: 'Vegan' },
    { name: 'Iced Hibiscus Tea', price: '₹169', desc: 'Organic hibiscus with rose water, mint, and raw honey', tag: '' },
    { name: 'Berry Blast', price: '₹259', desc: 'Mixed berries, pomegranate, and chia seeds power smoothie', tag: 'Superfood' },
  ],
  Desserts: [
    { name: 'Raw Chocolate Tart', price: '₹349', desc: 'Dark cacao with cashew cream, topped with edible gold leaf', tag: 'Signature' },
    { name: 'Coconut Panna Cotta', price: '₹299', desc: 'Silky coconut cream set with agar, passion fruit coulis', tag: 'Vegan' },
    { name: 'Berry Cheesecake', price: '₹329', desc: 'Cashew-based cheesecake with seasonal mixed berry compote', tag: 'Bestseller' },
    { name: 'Tiramisu', price: '₹369', desc: 'Espresso-soaked layers with mascarpone-style cashew cream', tag: 'New' },
    { name: 'Matcha Mochi', price: '₹249', desc: 'Soft rice flour mochi filled with matcha coconut cream', tag: '' },
    { name: 'Banana Bread', price: '₹199', desc: 'Moist walnut banana bread with maple glaze, served warm', tag: 'Classic' },
  ],
  Specials: [
    { name: 'Avocado Toast', price: '₹379', desc: 'Sourdough with smashed avocado, microgreens, seeds, and chili flakes', tag: 'Signature' },
    { name: 'Buddha Bowl', price: '₹429', desc: 'Quinoa, roasted sweet potato, chickpeas, tahini dressing', tag: 'Bestseller' },
    { name: 'Truffle Mushroom Pasta', price: '₹459', desc: 'Handmade fettuccine with wild mushrooms, truffle oil, cashew parmesan', tag: 'Chef\'s Pick' },
    { name: 'Mediterranean Wrap', price: '₹349', desc: 'Hummus, falafel, sun-dried tomatoes, olives, arugula in lavash', tag: 'Healthy' },
    { name: 'Thai Green Curry', price: '₹399', desc: 'Fragrant coconut curry with tofu, Thai basil, jasmine rice', tag: '' },
    { name: 'Açaí Bowl', price: '₹359', desc: 'Thick açaí base topped with granola, fresh fruits, coconut flakes', tag: 'Superfood' },
  ],
}

const categories = Object.keys(menuData)

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Coffee')
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = gridRef.current.querySelectorAll('.fade-in')
    cards.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeCategory])

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-title fade-in">
          <span className="script-label">Our Offerings</span>
          <h2>Curated Menu</h2>
          <p>Handcrafted with love using the finest organic, plant-based ingredients sourced from local farms.</p>
          <div className="title-divider"></div>
        </div>

        <div className="menu-categories fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-cat-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid" ref={gridRef}>
          {menuData[activeCategory].map((item, i) => (
            <div key={item.name} className={`menu-card fade-in fade-in-delay-${(i % 4) + 1}`}>
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              {item.tag && <span className="tag">{item.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
