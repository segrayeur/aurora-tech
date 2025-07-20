import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 bg-white tech-shadow">
            <CardContent className="p-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-light text-primary leading-relaxed mb-8">
                "Grâce à WEÏLI, j'ai lancé ma boutique en 24h sans investissement ! L'IA suggère même mes produits phares."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-poppins font-bold text-xl">
                  S
                </div>
                <div className="text-left">
                  <p className="font-poppins font-semibold text-lg text-primary">
                    Sarah M.
                  </p>
                  <p className="text-muted-foreground">
                    E-commerçante à Abidjan
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;