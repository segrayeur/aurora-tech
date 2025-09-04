import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';
import cedricPhoto from '@/assets/cedric-segrayeur.png';
import { Helmet } from 'react-helmet';
const Hero = () => {
  return <>
      <Helmet>
        <title>Aurora Tech - L'intelligence au cœur de chaque création | Développement Web & Apps Mobile Côte d'Ivoire</title>
        <meta name="description" content="Aurora Tech, société de développement web et applications mobiles en Côte d'Ivoire. Fondée par Segrayeur (Kouassi Cédric), nous proposons des solutions numériques innovantes en Afrique." />
        <meta name="keywords" content="développement web, applications mobiles, numérique Afrique, Aurora Tech, Segrayeur, Côte d'Ivoire, solutions digitales, solutions numériques innovantes, WEÏLI, FileCed, QuickJob CI" />
        <meta property="og:title" content="Aurora Tech - Solutions Numériques Innovantes en Afrique" />
        <meta property="og:description" content="Propulsons la transformation numérique de l'Afrique grâce aux solutions numériques innovantes. Fondé par Segrayeur." />
        <meta property="og:image" content="/lovable-uploads/4bd2af73-1cd4-4c48-a722-bf20d98f8b92.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://auroratech.lovable.app" />
      </Helmet>
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Professional Photo + Logo */}
          <div className="mb-8 flex flex-col items-center gap-6">
            <div className="professional-frame">
              <img src="/lovable-uploads/58b81631-dcfa-4f5b-85da-9960e49b229d.png" alt="Kouassi Jean Paul Cédric J (Segrayeur) - Fondateur Aurora Tech" className="h-24 w-24 rounded-full object-cover spectacular-zoom" />
            </div>
            <img src="/lovable-uploads/6990da45-816f-46d1-ae3f-7066b8eb9af7.png" alt="Aurora Tech Logo" className="h-28 w-auto mx-auto float-magic neon-glow" />
          </div>
          
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight text-shimmer">AURORA-TECH africa</h1>
          <p className="text-xl md:text-2xl font-light mb-4 opacity-90 float-animation">
            L'intelligence au cœur de chaque création
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8 neon-glow"></div>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
            Devenir un acteur majeur de la transformation numérique en Afrique grâce aux solutions numériques innovantes.
          </p>
          
          <p className="text-sm md:text-base mb-12 opacity-80">
            Fondé par <span className="font-semibold text-accent">KOUASSI JEAN PAUL CEDRIC J</span> (alias <span className="font-semibold text-accent">SEGRAYEUR</span>)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm font-semibold px-8 py-4 text-lg">
              Découvrir Nos Solutions
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg">
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
    </>;
};
export default Hero;