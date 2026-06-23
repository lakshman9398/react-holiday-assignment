import ScrollReveal from './ScrollReveal';

export default function IntroSplit() {
  return (
    <section className="split-section">
      <div className="split-container">
        
        {/* Row 1 */}
        <div className="split-row">
          <div className="split-image-block img-artisan-baking"></div>
          <div className="split-text-block">
            <ScrollReveal>
              <span className="split-accent-label">Our Tradition</span>
              <h2>Baked from Scratch, <br />Every Single Day</h2>
              <p>We believe great bread requires patience. Our dedicated kitchen staff works through the night monitoring natural fermentation cycles.</p>
              <button className="btn-text-link">Explore Our Process &rarr;</button>
            </ScrollReveal>
          </div>
        </div>

        {/* Row 2 */}
        <div className="split-row reverse-row">
          <div className="split-image-block img-ingredients"></div>
          <div className="split-text-block">
            <ScrollReveal>
              <span className="split-accent-label">The Ingredients</span>
              <h2>Pure Grains. <br />No Shortcuts.</h2>
              <p>Our signature crunch comes from simple elements: organic locally-ground flour, filtered water, and our 13-year-old sourdough starter.</p>
              <button className="btn-text-link">Meet Our Farmers &rarr;</button>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}