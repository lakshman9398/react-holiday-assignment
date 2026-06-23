export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">fresh bread & baked goods</span>
          <h1>Baked fresh daily</h1>
          <p className="hero-description">
            Made with time-honoured techniques, premium ingredients, and a love for artisan baking.
            Experience our breads, pastries and cakes straight from the oven.
          </p>

          <div className="hero-actions">
            <a href="#our-bread" className="btn-primary">View Menu</a>
            <a href="#contact" className="btn-secondary">Visit Our Store</a>
          </div>

          <div className="hero-contact-grid">
            <div className="hero-contact-card">
              <div className="hero-contact-icon">📍</div>
              <div>
                <span className="contact-label">Location</span>
                <strong>254 W 27ST ST, NEW YORK, NY 10011</strong>
              </div>
            </div>
            <div className="hero-contact-card">
              <div className="hero-contact-icon">📞</div>
              <div>
                <span className="contact-label">Call Us</span>
                <strong>(212) 123-4567</strong>
              </div>
            </div>
            <div className="hero-contact-card">
              <div className="hero-contact-icon">⏰</div>
              <div>
                <span className="contact-label">Hours</span>
                <strong>Mon – Sun: 6:00 AM – 8:00 PM</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan baker holding fresh bread"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
