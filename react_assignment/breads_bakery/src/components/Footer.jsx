export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/bakery-logo-white.png"
            alt="Breads Bakery Logo"
          />
          <p>Bringing the authentic taste of old-world artisan baking directly to the streets of New York City.</p>
        </div>

        <div className="footer-groups">
          <div className="footer-group">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#our-bread">Bakery Menu</a></li>
              <li><a href="#contact">Visit Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-group">
            <h5>Help</h5>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Allergens</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-group footer-contact">
            <h5>Hours & Location</h5>
            <p>14 E 12th St, New York, NY 10007</p>
            <p>(123) 456-2253</p>
            <p>Monday - Sunday<br />7:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Breads Bakery NYC. Built with React.</p>
      </div>
    </footer>
  );
}
