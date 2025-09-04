import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aurora Tech - L'intelligence au cœur de chaque création | Segrayeur Côte d'Ivoire</title>
        <meta name="description" content="Aurora Tech, dirigée par Segrayeur, développe des solutions numériques innovantes en Côte d'Ivoire. Services: développement web, applications mobiles, IA. Produits: WEÏLI, FileCed, QuickJob CI." />
        <meta name="keywords" content="développement web, applications mobiles, numérique Afrique, Aurora Tech, Segrayeur Côte d'Ivoire, WEÏLI, FileCed, QuickJob CI, solutions digitales" />
        <meta property="og:title" content="Aurora Tech - Solutions Numériques Innovantes | Segrayeur" />
        <meta property="og:description" content="Développement web, apps mobiles et solutions IA en Côte d'Ivoire par Aurora Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auroratech.ci" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://auroratech.ci" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
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
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
