import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';
import cedricPhoto from '@/assets/cedric-segrayeur.png';
import { Helmet } from 'react-helmet';
const Hero = () => {
  return <>
      <Helmet>
        <title>Aurora Tech – Solutions numériques innovantes en Côte d'Ivoire</title>
        <meta name="description" content="Aurora Tech, basée à Abidjan, Côte d'Ivoire, propose des solutions numériques innovantes : développement web, applications mobiles et logiciels sur mesure pour transformer le digital en Afrique." />
        <meta name="keywords" content="solutions numériques Côte d'Ivoire, développement web mobile, logiciels sur mesure Afrique, Aurora Tech, Segrayeur, Abidjan, WEÏLI, FileCed, QuickJob CI" />
        <meta property="og:title" content="Aurora Tech – Solutions numériques innovantes en Côte d'Ivoire" />
        <meta property="og:description" content="Transformez votre présence numérique avec Aurora Tech. Développement web, applications mobiles et logiciels personnalisés en Côte d'Ivoire." />
        <meta property="og:image" content="/lovable-uploads/8715abee-8d22-4b7c-a3da-851b45b46273.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://auroratech.lovable.app/accueil" />
      </Helmet>
      <main id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <img src="/lovable-uploads/58b81631-dcfa-4f5b-85da-9960e49b229d.png" alt="KOUASSI JEAN PAUL CEDRIC J – Fondateur Aurora Tech africa" className="h-24 w-24 rounded-full object-cover spectacular-zoom" />
            </div>
            <img src="/lovable-uploads/8715abee-8d22-4b7c-a3da-851b45b46273.png" alt="Logo Aurora Tech – Solutions numériques en Côte d'Ivoire" className="h-28 w-auto mx-auto float-magic neon-glow" />
          </div>
          
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight text-shimmer">Aurora Tech – Solutions numériques innovantes en Côte d'Ivoire</h1>
          <p className="text-xl md:text-2xl font-light mb-4 opacity-90 float-animation">
            Transformez votre présence digitale avec l'excellence ivoirienne
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8 neon-glow"></div>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
            Nous accompagnons les entreprises et entrepreneurs de Côte d'Ivoire dans leur transformation numérique grâce à des solutions sur mesure : développement web professionnel, applications mobiles innovantes et logiciels personnalisés.
          </p>
          
          <p className="text-sm md:text-base mb-12 opacity-80">
            Fondé par <span className="font-semibold text-accent">KOUASSI JEAN PAUL CEDRIC J</span> (alias <span className="font-semibold text-accent">SEGRAYEUR</span>) • Expert en solutions numériques Abidjan
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

        {/* Professional Quote */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:flex items-center gap-4 max-w-sm">
          <div className="professional-frame">
            <img src="/lovable-uploads/58b81631-dcfa-4f5b-85da-9960e49b229d.png" alt="KOUASSI JEAN PAUL CEDRIC J – Fondateur Aurora Tech africa" className="h-16 w-16 rounded-full object-cover spectacular-zoom" />
          </div>
          <div className="text-white/90 italic text-sm font-medium">
            "Seul l'effort révèle les véritables compétences des hommes."
          </div>
        </div>

        {/* Logo Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <img src="/lovable-uploads/8715abee-8d22-4b7c-a3da-851b45b46273.png" alt="Logo Aurora Tech – Solutions numériques en Côte d'Ivoire" className="h-12 w-auto neon-glow opacity-80" />
        </div>
      </div>
      </main>
    </>;
};
export default Hero;