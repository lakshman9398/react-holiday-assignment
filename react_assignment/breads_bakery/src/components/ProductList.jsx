import ProductCard from './Productcard';
import ScrollReveal from './ScrollReveal';

export default function ProductList({ products }) {
  return (
    <section className="product-section">
      <ScrollReveal>
        <div className="section-header">
          <h2>Our Signature Bakes</h2>
          <p>Handcrafted every morning with wild yeast and organic grains.</p>
        </div>
      </ScrollReveal>
      
      <div className="product-grid">
        {products.map((item, index) => (
          <ScrollReveal 
            key={item.id} 
            delayClass={`delay-${(index % 3) + 1}`} // Alternates delays cleanly: delay-1, delay-2, delay-3
          >
            <ProductCard product={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}