import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      info: "Abidjan, Cocody Riviera 2",
      subtitle: "Côte d'Ivoire"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      info: "+225 0565868786 / +225 0778518902",
      subtitle: "Disponible 24h/7j"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mails",
      info: "auroratech2222@gmail.com",
      subtitle: "auroratech@tutamail.com"
    }
  ];

  const services = [
    "Développement Web",
    "Applications/SaaS", 
    "Logiciels Web/Mobile",
    "Design Graphique",
    "Factures Proforma",
    "Montage Vidéo",
    "Produit WEÏLI",
    "Produit FileCed",
    "Produit QuickJob CI"
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-4">
            Collaborons ensemble !
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discutons de votre projet pour une solution sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-poppins text-2xl font-bold text-primary mb-8">
              Nos Coordonnées
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-0 bg-white tech-shadow hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full text-white flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-poppins text-lg font-semibold text-primary mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {contact.info}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {contact.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 bg-white tech-shadow">
              <CardContent className="p-6">
                <h4 className="font-poppins text-lg font-semibold text-primary mb-4">
                  Notre Emplacement
                </h4>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-primary">Cocody Riviera 2</p>
                    <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-white tech-shadow">
              <CardContent className="p-8">
                <h3 className="font-poppins text-2xl font-bold text-primary mb-8">
                  Formulaire de Contact
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nom" className="text-sm font-semibold text-primary">
                        Nom complet *
                      </Label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom complet"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="entreprise" className="text-sm font-semibold text-primary">
                        Entreprise
                      </Label>
                      <Input 
                        id="entreprise" 
                        placeholder="Nom de votre entreprise"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-primary">
                        E-mail *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telephone" className="text-sm font-semibold text-primary">
                        Téléphone
                      </Label>
                      <Input 
                        id="telephone" 
                        placeholder="+225 XX XX XX XX XX"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-sm font-semibold text-primary">
                      Service souhaité *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-primary">
                      Message *
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez votre projet ou vos besoins..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button className="btn-hero w-full">
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;