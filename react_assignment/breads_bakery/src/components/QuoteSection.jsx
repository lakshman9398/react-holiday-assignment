export default function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-inner">
        <div className="quote-visual">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
            alt="Baker shaping dough"
          />
        </div>

        <div className="quote-content">
          <div className="quote-card">
            <h3>We've had one goal: to bake the best tasting breads, cakes and pastries.</h3>
            <p>
              Our kitchen is built on consistency, tradition, and the highest-grade ingredients. Every product is handcrafted with pride so each bite feels like a fresh bakery moment.
            </p>
            <a href="#our-bread" className="btn-primary">View Products</a>
          </div>
          <div className="quote-float">
            <img
              src="https://images.unsplash.com/photo-1512058564366-c9e3ba989e4e?auto=format&fit=crop&w=800&q=80"
              alt="Basket of bread"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
