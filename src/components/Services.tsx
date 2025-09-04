import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, FileText, Smartphone, Monitor, Palette, Camera, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      domain: "Développement Web",
      description: "Création de sites vitrines/e-commerce performants.",
      target: "PME, Startups",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      domain: "Applications/SaaS",
      description: "Développement d'applications personnalisées (iOS, Android, Web).",
      target: "Startups, Grandes entreprises",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      domain: "Logiciels Web/Mobile",
      description: "Solutions logicielles adaptées à vos processus métiers.",
      target: "Administrations, Écoles",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      domain: "Design Graphique",
      description: "Création de logos, flyers, affiches percutants.",
      target: "Tous secteurs",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      domain: "Factures Proforma",
      description: "Génération automatisée de documents professionnels.",
      target: "TPE, Commerces",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      domain: "Montage Vidéo",
      description: "Services professionnels de montage vidéo et post-production.",
      target: "Événements, Campagnes marketing",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 gradient-text">
            Nos services numériques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aurora Tech propose une gamme complète de services digitaux pour accompagner votre croissance en Côte d'Ivoire. De la conception à la maintenance, nous maîtrisons toute la chaîne de développement numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 tech-shadow hover:glow-effect border-0 bg-white">
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="font-poppins text-xl font-bold text-primary mb-3">
                  {service.domain}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-sm font-semibold text-accent">Public cible :</span>
                  <span className="text-sm text-muted-foreground ml-2">{service.target}</span>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center gradient-text mb-4">
            Nos produits phares : WEÏLI, FileCed, QuickJob CI
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center mb-8">
            Découvrez nos solutions logicielles innovantes développées en Côte d'Ivoire pour répondre aux défis locaux. Chaque produit illustre notre expertise technique et notre compréhension du marché africain.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 tech-shadow mb-4">
                <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Créez votre site web</p>
                <p className="text-sm text-muted-foreground">(Service)</p>
              </div>
              <div className="text-accent font-bold text-2xl">↓</div>
              <div className="bg-white rounded-xl p-6 tech-shadow mt-4">
                <p className="font-semibold text-accent">Vendez sur WEÏLI</p>
                <p className="text-sm text-muted-foreground">(Produit)</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 tech-shadow mb-4">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Développez votre appli</p>
                <p className="text-sm text-muted-foreground">(Service)</p>
              </div>
              <div className="text-accent font-bold text-2xl">↓</div>
              <div className="bg-white rounded-xl p-6 tech-shadow mt-4">
                <p className="font-semibold text-accent">Stockez sur FileCed</p>
                <p className="text-sm text-muted-foreground">(Produit)</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 tech-shadow mb-4">
                <Palette className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Conception graphique</p>
                <p className="text-sm text-muted-foreground">(Service)</p>
              </div>
              <div className="text-accent font-bold text-2xl">↓</div>
              <div className="bg-white rounded-xl p-6 tech-shadow mt-4">
                <p className="font-semibold text-accent">Trouvez des jobs via QuickJob CI</p>
                <p className="text-sm text-muted-foreground">(Produit)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-poppins font-bold gradient-text mb-8">
              Sites et Applications créés par Aurora Tech/Segrayeur
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">Site vitrine</h5>
                <a href="https://cuef-abidjan.auroratech.be" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:underline">cuef-abidjan.auroratech.be</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">Site institutionnel</h5>
                <a href="https://llc-ufhb.auroratech.be" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:underline">llc-ufhb.auroratech.be</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">Portfolio</h5>
                <a href="https://abel-ekra.auroratech.be" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:underline">abel-ekra.auroratech.be</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">SaaS</h5>
                <a href="https://quickjob-ci.auroratech.be" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:underline">quickjob-ci.auroratech.be</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">Landing page</h5>
                <a href="https://anumeric.auroratech.be" target="_blank" rel="noopener noreferrer" 
                   className="text-accent hover:underline">anumeric.auroratech.be</a>
              </div>
              
              <div className="bg-white rounded-xl p-6 tech-shadow">
                <h5 className="font-semibold text-primary mb-2">Applications</h5>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">• GDES2024 (inscription thèse/master)</p>
                  <p className="text-muted-foreground">• ATTES.DID (attestations de réussite)</p>
                  <p className="text-muted-foreground">• PRINT2025 (relevés et attestations)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;