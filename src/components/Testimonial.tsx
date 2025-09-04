import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Adama KONE",
    company: "Directeur Général - EcoTech CI",
    content: "Aurora Tech a transformé notre présence digitale avec un site e-commerce moderne qui a multiplié nos ventes par 3 en 6 mois. L'équipe comprend parfaitement les enjeux du marché ivoirien.",
    rating: 5,
    location: "Abidjan, Côte d'Ivoire"
  },
  {
    name: "Marie-Claire BROU",
    company: "Fondatrice - Fashion Boutique Abidjan",
    content: "L'application mobile développée par Aurora Tech nous a permis de fidéliser notre clientèle. Interface intuitive en français, paiements locaux sécurisés, tout est parfait!",
    rating: 5,
    location: "Abidjan, Cocody"
  },
  {
    name: "Jean-Baptiste OUATTARA",
    company: "Responsable IT - Banque Régionale",
    content: "Le système de gestion WEÏLI a révolutionné nos opérations internes. Reporting en temps réel, sécurité bancaire et formation complète de nos équipes.",
    rating: 5,
    location: "Abidjan, Plateau"
  }
];

const Testimonial = () => {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 gradient-text">
            Témoignages et réussites
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La confiance de nos clients ivoiriens témoigne de la qualité de nos solutions numériques. Découvrez comment Aurora Tech transforme les entreprises à travers la Côte d'Ivoire.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover-3d tech-shadow border-border/50 relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformez votre entreprise avec Aurora Tech. Bénéficiez d'un accompagnement personnalisé et de solutions numériques qui s'adaptent à vos besoins spécifiques en Côte d'Ivoire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Demander un devis gratuit
              </button>
              <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                📞 0565868786 / 0778518902
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;