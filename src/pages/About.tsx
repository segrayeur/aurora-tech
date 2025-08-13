import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Nous travaillons étroitement avec nos clients pour comprendre leurs besoins spécifiques."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour créer des solutions avant-gardistes."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "La qualité est au cœur de chacun de nos projets et services."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficacité",
      description: "Nous optimisons chaque solution pour maximiser votre retour sur investissement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-accent/10 african-pattern">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center fade-in-up">
              <h1 className="font-poppins text-4xl md:text-6xl font-bold gradient-text mb-6">
                À Propos d'Aurora Tech
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Pionniers de la transformation digitale en Afrique, nous connectons l'intelligence artificielle 
                aux besoins réels des entreprises africaines.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-left">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Aurora Tech a été fondée avec la vision de démocratiser l'accès aux technologies 
                  intelligentes en Afrique. Nous croyons que chaque entreprise, quelle que soit sa taille, 
                  mérite des outils performants pour prospérer dans l'économie numérique.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous ne nous contentons pas de développer des solutions techniques - nous créons 
                  des ponts entre la technologie et les réalités du marché africain.
                </p>
              </div>
              
              <div className="fade-in-right">
                <img 
                  src="/lovable-uploads/4bd2af73-1cd4-4c48-a722-bf20d98f8b92.png" 
                  alt="Aurora Tech Mission" 
                  className="w-full h-64 object-contain float-animation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5 african-pattern">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident chacune de nos actions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className={`text-center border-0 bg-white tech-shadow hover:glow-effect fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-6 float-animation">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Notre Équipe
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des experts passionnés au service de votre réussite
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10 tech-shadow fade-in-up">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-poppins font-bold text-3xl mx-auto mb-6 float-animation pulse-golden">
                    AT
                  </div>
                  <h3 className="font-poppins text-2xl font-bold gradient-text mb-4">
                    Une équipe pluridisciplinaire
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Développeurs, designers, experts IA et consultants business unis par une passion commune : 
                    faire de l'Afrique un acteur majeur de l'innovation technologique mondiale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;