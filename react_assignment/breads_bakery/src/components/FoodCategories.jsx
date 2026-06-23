const foodItems = [
  { title: 'croissant', description: 'Layered, buttery perfection with a golden crisp exterior.', image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=900&q=80' },
  { title: 'Brownies', description: 'Rich, fudgy brownie squares with a crackly top.', image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f2f8?auto=format&fit=crop&w=900&q=80' },
  { title: 'cinnamon bun', description: 'Soft, sticky buns glazed with sweet cinnamon syrup.', image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80' },
  { title: 'turkish bagels', description: 'Chewy bagels topped with sesame seeds and savory flavor.', image: 'https://images.unsplash.com/photo-1515444744559-4adfd88ae3ca?auto=format&fit=crop&w=900&q=80' },
  { title: 'Doughnuts', description: 'Freshly fried doughnuts with creamy fillings and sweet glaze.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80' },
  { title: 'Tarts', description: 'Colorful fruit tarts with crisp pastry and silky custard.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80' },
  { title: 'shortbread', description: 'Tender shortbread cookies with butter-rich crumb.', image: 'https://images.unsplash.com/photo-1511415518189-09b6863a6b26?auto=format&fit=crop&w=900&q=80' },
  { title: 'Cookies', description: 'Chewy, soft-baked cookies packed with flavor and texture.', image: 'https://images.unsplash.com/photo-1541604654561-754fa91f84c4?auto=format&fit=crop&w=900&q=80' },
];

export default function FoodCategories() {
  return (
    <section className="food-categories-section">
      <div className="section-intro">
        <h2>Brownies, Pastries, etc</h2>
      </div>
      <div className="food-grid">
        {foodItems.map((item) => (
          <article key={item.title} className="food-card">
            <img src={item.image} alt={item.title} />
            <div className="food-card-copy">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href="#our-bread" className="text-link">more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
