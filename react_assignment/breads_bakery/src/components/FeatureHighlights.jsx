const highlights = [
  {
    title: 'Baked Fresh Daily',
    description: 'Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft.',
  },
  {
    title: 'Great Value',
    description: 'With the most competitive prices on the market we are able to deliver great value without compromising on taste.',
  },
  {
    title: 'Institutions',
    description: 'We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow.',
  },
  {
    title: 'Delivery To Your Door',
    description: 'Same day delivery available within Manhattan. Order now for warm fresh delivery.',
  },
  {
    title: 'No Order Too Large',
    description: 'We can handle orders from small cafes to large corporate events with care and speed.',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="feature-section">
      <div className="section-intro">
        <h2>We bake fresh, handmade bread, pastries and cakes every day</h2>
      </div>

      <div className="feature-grid">
        {highlights.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
