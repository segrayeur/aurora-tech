import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import GrowthChart from '@/components/GrowthChart';
import { Helmet } from 'react-helmet';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "L'intelligence au cœur de chaque création avec des solutions avant-gardistes"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Partenariat étroit avec nos clients pour des résultats exceptionnels"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Qualité premium et attention aux détails dans chaque projet"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expertise",
      description: "Maîtrise technique et veille technologique permanente"
    }
  ];

  return (
    <>
      <Helmet>
        <title>À Propos - Aurora Tech | Segrayeur Fondateur | Solutions Numériques Côte d'Ivoire</title>
        <meta name="description" content="Découvrez Aurora Tech, fondée par Segrayeur (Kouassi Jean Paul Cédric J) en Côte d'Ivoire. Notre mission: devenir un acteur majeur de la transformation numérique en Afrique." />
        <meta name="keywords" content="Aurora Tech, Segrayeur, Kouassi Cédric, fondateur, transformation numérique Afrique, entreprise technologie Côte d'Ivoire" />
      </Helmet>

      <div className="min-h-screen pt-20 bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h1 className="font-poppins text-5xl md:text-6xl font-bold gradient-text mb-6 text-shimmer">
                À Propos d'Aurora Tech
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Devenir un acteur majeur de la transformation numérique en Afrique grâce aux solutions numériques innovantes.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left">
                <h2 className="font-poppins text-4xl font-bold gradient-text mb-6">
                  Présentation : KOUASSI JEAN PAUL CEDRIC J (alias SEGRAYEUR)
                </h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Je suis <strong className="text-primary">Kouassi Jean Paul Cédric Junior</strong>, informaticien à l'UFR LLC/UFHB, développeur passionné basé à <strong className="text-accent">Abidjan, Côte d'Ivoire</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Connu sous le pseudonyme <strong className="text-accent">Segrayeur</strong>, j'aide les entreprises, startups et particuliers à réussir leur transformation digitale grâce à des solutions logicielles performantes et sur mesure.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4 text-lg">💻 Expertises principales :</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Développement d'applications mobiles (Android/iOS)</li>
                      <li>• Développement web (sites vitrines, e-commerce, applications SaaS)</li>
                      <li>• Conception de logiciels de bureau et outils internes</li>
                      <li>• Création de solutions numériques adaptées aux besoins des entreprises</li>
                      <li>• Technologies : Windev, Python, Java, développement natif et frameworks modernes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6">
                    <h3 className="font-semibold text-accent mb-2 text-lg">🎯 Mission :</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Proposer des solutions logicielles modernes, robustes et accessibles, adaptées aux besoins du marché africain et international.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-2 text-lg">🌟 Vision :</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Faire d'Aurora Tech un acteur incontournable de la transformation digitale en Afrique grâce aux solutions numériques innovantes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in-right">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 tech-shadow">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1 professional-frame">
                        <img 
                          src="/lovable-uploads/58b81631-dcfa-4f5b-85da-9960e49b229d.png"
                          alt="Kouassi Jean Paul Cédric J (Segrayeur) - Fondateur Aurora Tech" 
                          className="w-full h-full rounded-full object-cover spectacular-zoom"
                        />
                      </div>
                      <h3 className="font-poppins text-2xl font-bold text-primary mb-2">
                        SEGRAYEUR
                      </h3>
                      <p className="text-accent font-semibold mb-4">
                        Fondateur & CEO Aurora Tech
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>📍 Abidjan, Cocody Riviera 2</p>
                        <p>📞 +225 0665868786</p>
                        <p>📧 auroratech2222@gmail.com</p>
                        <p>📧 auroratech@tutamail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Chart Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="font-poppins text-4xl font-bold gradient-text mb-4">
                Notre Trajectoire de Croissance
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Depuis notre création, Aurora Tech ne cesse de grandir et d'innover
              </p>
            </div>
            
            <div className="fade-in-up">
              <GrowthChart />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-4xl font-bold gradient-text mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Les piliers qui guident chacune de nos actions et innovations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group card-hover-3d border-0 bg-white tech-shadow hover:glow-effect fade-in-up stagger-${index + 1}">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins text-xl font-bold mb-3 text-primary">
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

        {/* Mission Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center fade-in-up">
              <h2 className="font-poppins text-4xl font-bold gradient-text mb-8">
                Notre Mission
              </h2>
              <div className="bg-white rounded-2xl p-8 tech-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                  "Devenir un acteur majeur de la transformation numérique en Afrique 
                  grâce aux solutions numériques innovantes."
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Nous croyons fermement que l'Afrique a le potentiel de devenir un leader 
                  mondial dans le domaine technologique. Aurora Tech s'engage à contribuer 
                  à cette vision en proposant des solutions qui répondent aux besoins 
                  spécifiques du marché africain.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;