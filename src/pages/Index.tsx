import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen african-pattern">
      <Header />
      <Hero />
      <div className="fade-in-up stagger-1">
        <ProductShowcase />
      </div>
      <div className="fade-in-left stagger-2">
        <About />
      </div>
      <div className="fade-in-right stagger-3">
        <Services />
      </div>
      <div className="fade-in-up stagger-4">
        <Testimonial />
      </div>
      <div className="fade-in-up stagger-5">
        <Contact />
      </div>
      <div className="fade-in-up stagger-6">
        <FAQ />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
