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
                  Notre Fondateur
                </h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">KOUASSI JEAN PAUL CEDRIC J</strong>, 
                    connu sous le nom de <strong className="text-accent">SEGRAYEUR</strong>, 
                    est le visionnaire derrière Aurora Tech.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionné par l'innovation technologique et convaincu du potentiel de l'Afrique 
                    dans le domaine numérique, il a fondé Aurora Tech avec une mission claire : 
                    proposer des solutions numériques innovantes qui transforment les entreprises africaines.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Basé à <strong>Abidjan, Cocody Riviera 2</strong>, SEGRAYEUR dirige une équipe 
                    déterminée à faire d'Aurora Tech un acteur incontournable de la tech en Côte d'Ivoire 
                    et en Afrique de l'Ouest.
                  </p>
                </div>
              </div>

              <div className="fade-in-right">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 tech-shadow">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <span className="text-4xl font-bold gradient-text">SG</span>
                        </div>
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