import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Zap, User } from 'lucide-react';
const About = () => {
  const values = [{
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation technologique",
    description: "Nous repoussons les limites de la technologie pour créer des solutions révolutionnaires"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "Accessibilité & Inclusion",
    description: "Nos solutions sont conçues pour être accessibles à tous, des PME aux grandes institutions"
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence opérationnelle",
    description: "Nous nous engageons à livrer des produits de qualité supérieure avec un service client exceptionnel"
  }];
  return <section id="apropos" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-8">
              Notre Vision
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Fondée à <span className="font-semibold text-primary">Abidjan</span>, Aurora Tech place l'intelligence artificielle au centre de sa stratégie pour révolutionner la transformation digitale africaine.
              </p>
              
              <p>
                Notre <span className="font-semibold text-accent">mission</span> : offrir des outils accessibles et puissants aux entreprises, des PME aux grandes institutions.
              </p>

              {/* Founder & Objective */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 my-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary rounded-full">
                    <User className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Fondateur</p>
                    <p className="text-xl font-poppins font-bold">Kouassi Jean Paul Cédric Junior</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent rounded-full">
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Objectif 2030</p>
                    <p className="text-lg font-poppins font-semibold">Devenir le leader africain des solutions numériques innovantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="font-poppins text-2xl font-bold text-primary mb-8">
              Nos Valeurs
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => <Card key={index} className="border-0 bg-white tech-shadow hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full text-white flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-poppins text-lg font-semibold text-primary mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;