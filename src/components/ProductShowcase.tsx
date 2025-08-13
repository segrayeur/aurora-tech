import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, FolderOpen, Share2, Bot } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: "WEÏLI",
      description: "La plateforme de vente en ligne gratuite",
      color: "from-african-terracotta to-african-earth"
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      name: "FileCed",
      description: "Stockage cloud optimisé par IA",
      color: "from-african-green to-african-earth"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      name: "Aurora Share",
      description: "Le partage à la vitesse de l'intelligence",
      color: "from-african-gold to-african-sunset"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      name: "Byan",
      description: "Booste et création digitale",
      color: "from-african-sunset to-african-terracotta"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30 african-pattern">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-4 float-animation">
            Nos Produits Phares
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos solutions intelligentes conçues pour booster votre digitalisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className={`group hover:scale-105 transition-all duration-500 tech-shadow hover:glow-effect border-0 bg-white fade-in-up stagger-${(index % 4) + 1} animate-rotate-gentle`}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${product.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 float-animation pulse-golden`}>
                  {product.icon}
                </div>
                <h3 className="font-poppins text-xl font-bold mb-3 text-primary">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors animate-slide-in-bottom">
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in-up stagger-5">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto tech-shadow pulse-golden">
            <h3 className="font-poppins text-2xl font-bold gradient-text mb-4 float-animation">
              "Chaque produit naît de notre ADN : l'intelligence au cœur de chaque création."
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Aurora Tech est une entreprise ivoirienne spécialisée dans le développement de solutions digitales intelligentes. 
              Fondée par Kouassi Cédric Junior, nous combinons expertise technique et innovation pour répondre aux défis de la digitalisation en Afrique.
            </p>
            <Button className="btn-hero animate-slide-in-bottom">
              Voir Tous Nos Produits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;