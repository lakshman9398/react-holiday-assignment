import { useState } from 'react';

const bakeryProducts = [
  {
    id: 1,
    name: 'Sourdough',
    category: 'Breads',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1518976024611-48805f5d2643?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Croissant',
    category: 'Pastries',
    price: '$3.25',
    image: 'https://images.unsplash.com/photo-1511689980-b48c8a6663f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Bagel',
    category: 'Breads',
    price: '$2.75',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Muffin',
    category: 'Pastries',
    price: '$3.75',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
];

export default function BreadGallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filterOptions = ['All', 'Breads', 'Pastries'];
  const displayProducts = selectedFilter === 'All'
    ? bakeryProducts
    : bakeryProducts.filter((product) => product.category === selectedFilter);

  return (
    <section className="product-showcase" id="our-bread">
      <div className="showcase-container">
        <div className="showcase-header">
          <div className="header-badge">Our Bread</div>
          <h2>A values-driven bakery</h2>
          <p>From sourdough to flaky pastries, every item is crafted with care and baked to perfection.</p>
        </div>

        <nav className="bread-filter-nav" aria-label="Bread categories">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`bread-filter-tab ${selectedFilter === option ? 'tab-active' : ''}`}
              aria-selected={selectedFilter === option}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </button>
          ))}
        </nav>

        <div className="products-showcase">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="showcase-card"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="card-image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className={`card-overlay ${hoveredProduct === product.id ? 'overlay-visible' : ''}`}>
                  <button className="overlay-btn">Quick View</button>
                  <button className="overlay-btn overlay-solid">Add to Cart</button>
                </div>
              </div>

              <div className="card-info">
                <span className="product-type">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-cost">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
