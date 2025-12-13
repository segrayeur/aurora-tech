import { User } from '@supabase/supabase-js';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  MapPin, 
  Eye, 
  Heart,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface TalentCardProps {
  talent: {
    id: string;
    title: string;
    category: string;
    description: string | null;
    website_url: string | null;
    tiktok_url: string | null;
    facebook_url: string | null;
    instagram_url: string | null;
    whatsapp_number: string | null;
    hourly_rate: number | null;
    is_available: boolean | null;
    skills: string[] | null;
    country: string | null;
    city: string | null;
    views_count: number | null;
    likes_count: number | null;
    profiles?: {
      full_name: string;
      avatar_url: string | null;
    };
  };
  currentUser: User | null;
}

const categoryLabels: Record<string, string> = {
  developpeur_web: 'Développeur Web',
  photographe: 'Photographe',
  web_designer: 'Web Designer',
  graphiste: 'Graphiste',
  artiste: 'Artiste',
  styliste_modeliste: 'Styliste/Modéliste',
  autre: 'Autre',
};

const categoryColors: Record<string, string> = {
  developpeur_web: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  photographe: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  web_designer: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
  graphiste: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  artiste: 'bg-red-500/10 text-red-600 border-red-500/20',
  styliste_modeliste: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  autre: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
};

const TalentCard = ({ talent, currentUser }: TalentCardProps) => {
  const handleWhatsAppContact = () => {
    if (talent.whatsapp_number) {
      const message = encodeURIComponent(`Bonjour ${talent.profiles?.full_name || ''}, je vous contacte via TalentAfrika concernant vos services de ${categoryLabels[talent.category] || talent.category}.`);
      window.open(`https://wa.me/${talent.whatsapp_number.replace(/\D/g, '')}?text=${message}`, '_blank');
    }
  };

  return (
    <Card className="group overflow-hidden border-african-gold/20 hover:border-african-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-african-gold/10 card-hover-3d bg-card/80 backdrop-blur-sm">
      {/* Header with Avatar */}
      <div className="relative h-32 bg-gradient-to-br from-african-terracotta/20 to-african-gold/20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-4 right-4 w-20 h-20 bg-african-gold/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-4 w-16 h-16 bg-african-terracotta/20 rounded-full blur-xl" />
        </div>
        
        {/* Availability Badge */}
        {talent.is_available && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-african-green/90 text-primary-foreground border-none">
              <Sparkles className="w-3 h-3 mr-1" />
              Disponible
            </Badge>
          </div>
        )}

        {/* Avatar */}
        <div className="absolute -bottom-8 left-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-african-terracotta to-african-gold p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-2xl font-bold text-african-gold">
              {talent.profiles?.full_name?.charAt(0).toUpperCase() || 'T'}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="pt-12 pb-6">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-african-gold transition-colors">
            {talent.profiles?.full_name || 'Talent Anonyme'}
          </h3>
          <p className="text-sm text-muted-foreground">{talent.title}</p>
        </div>

        {/* Category Badge */}
        <Badge variant="outline" className={`mb-4 ${categoryColors[talent.category] || categoryColors.autre}`}>
          {categoryLabels[talent.category] || talent.category}
        </Badge>

        {/* Location */}
        {(talent.city || talent.country) && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span>{[talent.city, talent.country].filter(Boolean).join(', ')}</span>
          </div>
        )}

        {/* Description */}
        {talent.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {talent.description}
          </p>
        )}

        {/* Skills */}
        {talent.skills && talent.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {talent.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {talent.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{talent.skills.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Rate */}
        {talent.hourly_rate && (
          <p className="text-lg font-semibold text-african-gold mb-4">
            {talent.hourly_rate.toLocaleString()} FCFA<span className="text-sm font-normal text-muted-foreground">/heure</span>
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{talent.views_count || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{talent.likes_count || 0}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 mb-4">
          {talent.website_url && (
            <a 
              href={talent.website_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-african-gold/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
          {talent.instagram_url && (
            <a 
              href={talent.instagram_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-pink-500/20 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
          {talent.facebook_url && (
            <a 
              href={talent.facebook_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {talent.tiktok_url && (
            <a 
              href={talent.tiktok_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-foreground/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Contact Button */}
        {talent.whatsapp_number && (
          <Button 
            onClick={handleWhatsAppContact}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacter via WhatsApp
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TalentCard;
