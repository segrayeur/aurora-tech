import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, Users, Award, Globe, Code } from 'lucide-react';

const values = [
  { icon: Zap, title: "Innovation", description: "Nous développons des solutions digitales avant-gardistes adaptées aux besoins spécifiques du marché ivoirien et africain." },
  { icon: Target, title: "Excellence", description: "Chaque projet bénéficie de notre expertise technique et de notre engagement envers la qualité made in Côte d'Ivoire." },
  { icon: Users, title: "Collaboration", description: "Nous travaillons en partenariat étroit avec nos clients pour co-créer des solutions numériques sur mesure." },
  { icon: Award, title: "Fiabilité", description: "Aurora Tech garantit des livrables robustes, sécurisés et maintenus selon les standards internationaux." },
  { icon: Globe, title: "Impact Local", description: "Nous contribuons activement à la transformation numérique de la Côte d'Ivoire et de l'Afrique de l'Ouest." },
  { icon: Code, title: "Expertise Technique", description: "Maîtrise complète des technologies web modernes, développement mobile natif et solutions cloud." }
];

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Company Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 gradient-text">
                Qui sommes-nous ?
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Notre Vision</h3>
                  <p>
                    Devenir le leader des solutions numériques innovantes en Côte d'Ivoire et rayonner à travers l'Afrique de l'Ouest. Aurora Tech ambitionne de démocratiser l'accès aux technologies numériques pour tous les secteurs d'activité.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Notre Mission</h3>
                  <p>
                    Accompagner la transformation digitale des entreprises ivoiriennes en proposant des solutions web et mobiles sur mesure. Nous mettons notre expertise technique au service de l'innovation locale pour créer de la valeur durable.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Notre Fondateur</h3>
                  <p className="mb-3">
                    <strong>KOUASSI JEAN PAUL CEDRIC J</strong>, connu sous le pseudonyme <strong>SEGRAYEUR</strong>, est un entrepreneur passionné de technologie.
                  </p>
                  <p className="text-accent font-semibold mb-3">
                    Gen IA | Webdesigner | Développeur Web/Mobile | Développeur Windev
                  </p>
                  <p>
                    Expert en solutions numériques, spécialisé dans le développement web, mobile, logiciels bureau, Windev, Python, Java et applications natives. Il a fondé Aurora Tech avec la vision de propulser l'écosystème numérique ivoirien.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Notre Objectif</h3>
                  <p>
                    Créer un écosystème numérique robuste en Côte d'Ivoire en développant des solutions logicielles adaptées aux réalités locales. Nos produits phares (WEÏLI, FileCed, QuickJob CI) témoignent de notre capacité à innover pour répondre aux besoins concrets du marché africain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Nos Valeurs Fondamentales</h3>
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-hover-3d tech-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;