const testimonials = [
  { name: 'stella larson', text: 'Delicious bread every morning. The flavors are consistently excellent and the service is friendly.', },
  { name: 'nick jhonson', text: 'The bakery offerings are a highlight of our week. Fresh, flavorful, and beautifully presented.', },
  { name: 'olga ivanova', text: 'A cozy bakery with incredible pastries. Everything feels handmade and tastes exceptional.', },
  { name: 'paul hudson', text: 'Perfect breakfast pastries and friendly service. This bakery is my go-to in the neighborhood.', },
  { name: 'cash hudson', text: 'Our event orders always arrive fresh and on time. The quality is impressive every time.', },
  { name: 'mike perry', text: 'The sourdough and croissants are outstanding. Highly recommend for any bread lover.', },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-intro">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p>{item.text}</p>
            <h6>{item.name}</h6>
          </article>
        ))}
      </div>
    </section>
  );
}
