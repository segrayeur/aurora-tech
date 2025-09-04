import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo avec animation zoom */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4bd2af73-1cd4-4c48-a722-bf20d98f8b92.png" 
              alt="Aurora Tech Logo" 
              className="h-32 w-auto mx-auto animate-zoom-pulse drop-shadow-lg float-animation pulse-golden"
            />
          </div>
          
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AURORA TECH
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
            L'intelligence au cœur de chaque création
          </p>
          
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Devenir un acteur majeur de la transformation digitale en Afrique grâce aux solutions numériques innovantes.
          </p>

          {/* Photo professionnelle de Cédric Segrayeur */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f27617a5-778e-440a-a87a-5cf8f5c0a1be.png" 
              alt="KOUASSI JEAN PAUL CEDRIC J - Fondateur Aurora Tech (Segrayeur)" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-accent/50 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm mt-2 text-accent font-semibold">Fondateur : KOUASSI JEAN PAUL CEDRIC J (SEGRAYEUR)</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
              onClick={() => navigate('/services')}
            >
              Découvrir Nos Solutions
            </Button>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg"
              onClick={() => navigate('/contact')}
            >
              Nous Contacter
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;