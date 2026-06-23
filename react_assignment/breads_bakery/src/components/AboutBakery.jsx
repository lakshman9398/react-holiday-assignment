export default function AboutBakery() {
  const links = ['Our People', 'Our Values', 'Our History', 'Our Culture', 'Ingredients', 'Our Bakery'];

  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <h2>About Bakery</h2>
        <p>
          Our bakery brings authentic artisan flavors to New York City with every oven batch. We combine classic recipes, fresh ingredients, and family baking techniques for taste you can trust.
        </p>
        <div className="about-links-grid">
          {links.map((item) => (
            <a key={item} href="#" className="about-link">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="about-visual">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80"
            alt="Hands preparing fresh dough"
          />
        </div>
      </div>
    </section>
  );
}
