import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Cloud, Share2, Star, Users, TrendingUp, Zap, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      name: "WEÏLI",
      tagline: "La marketplace intelligente",
      description: "Plateforme e-commerce avec IA intégrée qui suggère automatiquement vos meilleurs produits et optimise votre visibilité.",
      features: [
        "Suggestions IA de produits tendances",
        "Gestion automatisée des stocks",
        "Paiements mobiles intégrés",
        "Analytics avancées",
        "Support multilingue"
      ],
      status: "Disponible",
      users: "500+ vendeurs actifs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      name: "FileCed",
      tagline: "Stockage cloud sécurisé",
      description: "Solution de stockage cloud adaptée aux entreprises africaines avec synchronisation multi-appareils et sécurité renforcée.",
      features: [
        "Stockage illimité",
        "Synchronisation temps réel",
        "Partage sécurisé",
        "Sauvegarde automatique",
        "Accès hors ligne"
      ],
      status: "Bêta fermée",
      users: "50+ entreprises testent",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      name: "Aurora Share",
      tagline: "Partage créatif intelligent",
      description: "Plateforme de partage et collaboration créative avec outils d'édition collaboratifs et gestion de versions.",
      features: [
        "Édition collaborative",
        "Historique des versions",
        "Commentaires en temps réel",
        "Export multi-formats",
        "Intégration réseaux sociaux"
      ],
      status: "En développement",
      users: "Lancement prévu Q2 2024",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "1000+", label: "Utilisateurs actifs" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "50+", label: "Entreprises partenaires" },
    { icon: <Zap className="w-8 h-8" />, value: "99.9%", label: "Disponibilité" },
    { icon: <Shield className="w-8 h-8" />, value: "100%", label: "Données sécurisées" }
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
                Nos Produits
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Des solutions logicielles innovantes conçues pour le marché africain
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              {products.map((product, index) => (
                <Card key={index} className={`border-0 bg-white tech-shadow hover:glow-effect fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Product Info */}
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 rounded-full bg-gradient-to-r ${product.color} text-white float-animation`}>
                            {product.icon}
                          </div>
                          <div>
                            <h2 className="font-poppins text-3xl font-bold text-primary">
                              {product.name}
                            </h2>
                            <p className="text-accent font-semibold">
                              {product.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-8">
                          <h3 className="font-semibold text-primary mb-4">Fonctionnalités clés :</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Status & Stats */}
                        <div className="flex flex-wrap gap-4 mb-8">
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            product.status === 'Disponible' 
                              ? 'bg-green-100 text-green-800' 
                              : product.status === 'Bêta fermée'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {product.status}
                          </div>
                          <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            {product.users}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4">
                          {product.status === 'Disponible' ? (
                            <>
                              <Button className="btn-hero">Essayer maintenant</Button>
                              <Button variant="outline">En savoir plus</Button>
                            </>
                          ) : product.status === 'Bêta fermée' ? (
                            <>
                              <Button className="btn-hero">Rejoindre la bêta</Button>
                              <Button variant="outline">Documentation</Button>
                            </>
                          ) : (
                            <>
                              <Button className="btn-hero">Liste d'attente</Button>
                              <Button variant="outline">Découvrir</Button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Product Visual */}
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className={`h-80 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center text-white relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="relative z-10 text-center">
                            {product.icon}
                            <h3 className="font-poppins text-2xl font-bold mt-4">
                              {product.name}
                            </h3>
                            <p className="opacity-90 mt-2">
                              Interface preview
                            </p>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5 african-pattern">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Nos Performances
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des chiffres qui témoignent de notre impact
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className={`text-center border-0 bg-white tech-shadow fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-4 float-animation">
                      {stat.icon}
                    </div>
                    <h3 className="font-poppins text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10 tech-shadow fade-in-up">
              <CardContent className="p-12 text-center">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Rejoignez l'Écosystème Aurora
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Découvrez comment nos produits peuvent s'intégrer dans votre workflow 
                  et booster votre productivité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">Démarrer gratuitement</Button>
                  <Button variant="outline">Demander une démo</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;