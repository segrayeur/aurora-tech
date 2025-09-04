import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, FolderOpen, Share2, Bot } from 'lucide-react';
const ProductShowcase = () => {
  const products = [{
    icon: <BarChart3 className="w-8 h-8" />,
    name: "WEÏLI",
    description: "Outil de gestion et organisation intelligente développé par Aurora Tech pour optimiser la productivité des entreprises ivoiriennes.",
    color: "from-african-terracotta to-african-earth",
    alt: "WEÏLI – Outil de gestion intelligente Aurora Tech"
  }, {
    icon: <FolderOpen className="w-8 h-8" />,
    name: "FileCed",
    description: "Solution de sauvegarde et stockage sécurisé de documents en ligne, adaptée aux besoins du marché africain.",
    color: "from-african-green to-african-earth",
    alt: "FileCed – Sauvegarde en ligne Aurora Tech"
  }, {
    icon: <Bot className="w-8 h-8" />,
    name: "QuickJob CI",
    description: "Plateforme de mise en relation emploi-jeunes développée spécifiquement pour la Côte d'Ivoire et l'Afrique de l'Ouest.",
    color: "from-african-gold to-african-sunset",
    alt: "QuickJob CI – Gestion des emplois par Aurora Tech"
  }];
  return <section className="section-padding bg-secondary/30 african-pattern">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-4 float-animation">
            Nos produits phares : WEÏLI, QuickJob CI, FileCed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions numériques 100% ivoiriennes pour transformer le digital en Afrique
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${product.color} rounded-2xl p-8 text-white tech-shadow hover:scale-105 transition-all duration-300`}>
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-white/90 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        <div className="text-center fade-in-up stagger-5">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto tech-shadow pulse-golden">
            <h3 className="font-poppins text-2xl font-bold gradient-text mb-4 float-animation">
              "Chaque produit naît de notre ADN : l'intelligence au cœur de chaque création."
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Aurora Tech révolutionne l'écosystème numérique ivoirien avec des produits conçus localement. 
              Notre vision : démocratiser l'accès aux technologies innovantes pour toutes les entreprises africaines.
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