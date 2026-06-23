import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Bread', href: '#our-bread' },
  { label: 'Menu', href: '#categories' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="nav-logo">
          <img
            src="https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/logo-2.png"
            alt="Breads Bakery NYC"
          />
          <span>Breads Bakery</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-button" onClick={() => setIsOpen(false)}>
            Book an appointment
          </a>
        </nav>

        <button className={`menu-toggle ${isOpen ? 'menu-toggle-open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
