import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, FileText, Smartphone, Monitor, Palette, Camera, Bot, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesDetail = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Sites Web",
      description: "Création de sites vitrines et e-commerce performants adaptés au marché africain.",
      features: ["Design responsive", "Optimisation SEO", "Paiement mobile intégré", "Hébergement inclus"],
      price: "À partir de 150 000 FCFA",
      duration: "2-4 semaines",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Factures Proforma",
      description: "Système automatisé de génération de documents professionnels.",
      features: ["Templates personnalisés", "Calcul automatique", "Export PDF", "Historique complet"],
      price: "À partir de 75 000 FCFA",
      duration: "1-2 semaines",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Applications Mobiles",
      description: "Développement d'applications iOS, Android et web personnalisées.",
      features: ["Interface native", "Mode hors ligne", "Push notifications", "Analytics intégrés"],
      price: "À partir de 500 000 FCFA",
      duration: "6-12 semaines",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Logiciels Sur Mesure",
      description: "Solutions logicielles adaptées à vos processus métiers spécifiques.",
      features: ["Analyse des besoins", "Formation utilisateurs", "Maintenance incluse", "Évolutions futures"],
      price: "Sur devis",
      duration: "8-16 semaines",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Design Graphique",
      description: "Création d'identités visuelles et supports marketing percutants.",
      features: ["Logo & charte graphique", "Supports print", "Réseaux sociaux", "Packaging produits"],
      price: "À partir de 50 000 FCFA",
      duration: "1-3 semaines",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photo & Vidéo",
      description: "Services professionnels de photographie et montage vidéo.",
      features: ["Shooting produits", "Événements corporate", "Montage vidéo", "Motion design"],
      price: "À partir de 100 000 FCFA",
      duration: "1-2 semaines",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "IA & Automatisation",
      description: "Solutions d'intelligence artificielle pour optimiser vos processus.",
      features: ["Chatbots intelligents", "Analyse prédictive", "Automatisation tâches", "Recommandations IA"],
      price: "Sur devis",
      duration: "4-8 semaines",
      color: "from-red-500 to-orange-500"
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
                Nos Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Des solutions complètes pour accompagner votre transformation digitale
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`border-0 bg-white tech-shadow hover:glow-effect fade-in-up stagger-${(index % 4) + 1}`}>
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} text-white float-animation`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-poppins text-2xl font-bold text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Fonctionnalités incluses :</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Duration */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Prix</p>
                        <p className="font-bold text-primary">{service.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Durée</p>
                        <p className="font-bold text-primary">{service.duration}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full btn-hero group">
                      Demander un devis
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5 african-pattern">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-4">
                Notre Processus
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une méthodologie éprouvée pour garantir votre satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Analyse", desc: "Étude de vos besoins et contraintes" },
                { step: "02", title: "Conception", desc: "Design et architecture de la solution" },
                { step: "03", title: "Développement", desc: "Réalisation et tests approfondis" },
                { step: "04", title: "Livraison", desc: "Déploiement et formation utilisateurs" }
              ].map((phase, index) => (
                <div key={index} className={`text-center fade-in-up stagger-${index + 1}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto float-animation pulse-golden">
                    {phase.step}
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-primary mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesDetail;