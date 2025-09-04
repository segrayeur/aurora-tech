import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À Propos', href: '#apropos' },
    { label: 'Services', href: '#services' },
    { label: 'Produits', href: '#produits' },
    { label: 'Contact', href: '#contact' },
  ];

  const products = [
    { label: 'WEÏLI', href: '#weili' },
    { label: 'FileCed', href: '#fileced' },
    { label: 'Aurora Share', href: '#aurora-share' },
    { label: 'Byan', href: '#byan' },
  ];

  const services = [
    { label: 'Sites Web', href: '#sites-web' },
    { label: 'Apps Mobile', href: '#apps-mobile' },
    { label: 'Design Graphique', href: '#design' },
    { label: 'IA & Automatisation', href: '#ia' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/4bd2af73-1cd4-4c48-a722-bf20d98f8b92.png" 
                  alt="Aurora Tech Logo" 
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                L'intelligence au cœur de chaque création. Propulsons la transformation digitale de l'Afrique grâce à des solutions IA innovantes.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Cocody Riviera 2, Abidjan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+225 05 65 86 87 86</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">auroratech2222@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">
                Nos Produits
              </h3>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.label}>
                    <a 
                      href={product.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {product.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">
                Nos Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Aurora Tech. Tous droits réservés. Fondé par Kouassi Cédric Junior.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;