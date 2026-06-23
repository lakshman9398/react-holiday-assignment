import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureHighlights from './components/FeatureHighlights';
import BreadGallery from './components/BreadGallery';
import AboutBakery from './components/AboutBakery';
import QuoteSection from './components/QuoteSection';
import FreshBreads from './components/FreshBreads';
import FoodCategories from './components/FoodCategories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Hero />
        <FeatureHighlights />
        <BreadGallery />
        <AboutBakery />
        <QuoteSection />
        <FreshBreads />
        <FoodCategories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
