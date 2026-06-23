const categories = [
  {
    title: 'Breads',
    description: 'Classic artisan loaves, sourdough, baguettes, and seeded favorites.',
    image: 'https://images.unsplash.com/photo-1512058564366-c9e3ba989e4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cookies',
    description: 'Delicate, buttery cookies baked to perfection every day.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pastries',
    description: 'Flaky croissants, sticky buns, and sweet morning treats.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
];

export default function FreshBreads() {
  return (
    <section className="fresh-breads-section" id="categories">
      <div className="section-intro">
        <h2>Bakery favorites</h2>
      </div>
      <div className="fresh-grid">
        {categories.map((item) => (
          <article key={item.title} className="fresh-card">
            <img src={item.image} alt={item.title} />
            <div className="fresh-card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#our-bread" className="btn-secondary">Explore</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
