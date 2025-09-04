import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, FolderOpen, Share2, Bot } from 'lucide-react';
const ProductShowcase = () => {
  const products = [{
    icon: <BarChart3 className="w-8 h-8" />,
    name: "WEÏLI",
    description: "Outil de gestion et organisation intelligente",
    color: "from-african-terracotta to-african-earth"
  }, {
    icon: <FolderOpen className="w-8 h-8" />,
    name: "FileCed",
    description: "Application de sauvegarde en ligne",
    color: "from-african-green to-african-earth"
  }, {
    icon: <Bot className="w-8 h-8" />,
    name: "QuickJob CI",
    description: "La plateforme qui connecte les jeunes aux opportunités de petits boulots",
    color: "from-african-gold to-african-sunset"
  }];
  return <section className="section-padding bg-secondary/30 african-pattern">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-4 float-animation">
            Nos Produits Phares
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos solutions intelligentes conçues pour booster votre digitalisation
          </p>
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
    </section>;
};
export default ProductShowcase;