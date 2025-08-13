import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Smartphone, Palette, ShoppingCart, Cloud, Share2, Zap, RefreshCw } from 'lucide-react';

const Ecosystem = () => {
  const connections = [
    {
      service: {
        icon: <Globe className="w-8 h-8" />,
        name: "Création Site Web",
        type: "Service"
      },
      product: {
        icon: <ShoppingCart className="w-8 h-8" />,
        name: "WEÏLI Marketplace",
        type: "Produit"
      },
      description: "Créez votre site e-commerce puis vendez directement sur notre marketplace",
      benefits: ["Visibilité accrue", "Gestion centralisée", "Paiements unifiés"]
    },
    {
      service: {
        icon: <Smartphone className="w-8 h-8" />,
        name: "App Mobile",
        type: "Service"
      },
      product: {
        icon: <Cloud className="w-8 h-8" />,
        name: "FileCed Storage",
        type: "Produit"
      },
      description: "Développez votre app et stockez toutes vos données de façon sécurisée",
      benefits: ["Synchronisation automatique", "Backup sécurisé", "Accès multi-devices"]
    },
    {
      service: {
        icon: <Palette className="w-8 h-8" />,
        name: "Design Graphique",
        type: "Service"
      },
      product: {
        icon: <Share2 className="w-8 h-8" />,
        name: "Aurora Share",
        type: "Produit"
      },
      description: "Créez vos designs puis partagez et collaborez en temps réel",
      benefits: ["Collaboration équipe", "Gestion versions", "Partage client"]
    }
  ];

  const workflow = [
    {
      step: 1,
      title: "Analysez vos besoins",
      description: "Notre IA étudie votre secteur et recommande les meilleures solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Créez avec nos services",
      description: "Développement sur mesure avec notre équipe d'experts",
      icon: <Globe className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Intégrez nos produits",
      description: "Connectez automatiquement vos créations à notre écosystème",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Évoluez en continu",
      description: "Mises à jour et nouvelles fonctionnalités automatiques",
      icon: <ArrowRight className="w-6 h-6" />
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
                L'Écosystème Aurora
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Là où nos services rencontrent nos produits pour créer une synergie parfaite
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="fade-in-left">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Notre Vision
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nous ne créons pas simplement des services ou des produits isolés. 
                  Nous construisons un écosystème où chaque élément se renforce mutuellement.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Quand vous travaillez avec Aurora Tech, vous accédez à une suite complète 
                  d'outils interconnectés qui évoluent avec vos besoins.
                </p>
                <Button className="btn-hero">
                  Découvrir les synergies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="fade-in-right">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 float-animation pulse-golden">
                        <RefreshCw className="w-10 h-10" />
                      </div>
                      <h3 className="font-poppins text-2xl font-bold">
                        Écosystème Connecté
                      </h3>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/15 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connections Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5 african-pattern">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Services ↔ Produits
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comment nos services se transforment naturellement en solutions produits
              </p>
            </div>

            <div className="space-y-12">
              {connections.map((connection, index) => (
                <Card key={index} className={`border-0 bg-white tech-shadow hover:glow-effect fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Service */}
                      <div className="text-center">
                        <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4 float-animation">
                          {connection.service.icon}
                        </div>
                        <h3 className="font-poppins text-xl font-bold text-primary mb-2">
                          {connection.service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {connection.service.type}
                        </p>
                      </div>

                      {/* Connection */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
                        </div>
                        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                          {connection.description}
                        </p>
                        <div className="space-y-2">
                          {connection.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center justify-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Product */}
                      <div className="text-center">
                        <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white mb-4 float-animation">
                          {connection.product.icon}
                        </div>
                        <h3 className="font-poppins text-xl font-bold text-primary mb-2">
                          {connection.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {connection.product.type}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Comment ça fonctionne
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un processus fluide de la création à l'évolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step, index) => (
                <Card key={index} className={`text-center border-0 bg-white tech-shadow fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto float-animation pulse-golden">
                      {step.step}
                    </div>
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-poppins text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 african-pattern">
          <div className="container-custom">
            <Card className="border-0 bg-white tech-shadow fade-in-up">
              <CardContent className="p-12 text-center">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Prêt à rejoindre l'écosystème ?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Commencez par un service, évoluez vers nos produits, et bénéficiez 
                  d'une expérience intégrée unique sur le marché africain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">
                    Commencer maintenant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline">
                    Planifier une consultation
                  </Button>
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

export default Ecosystem;