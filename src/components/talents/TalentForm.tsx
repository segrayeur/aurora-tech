import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { z } from 'zod';

const talentSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères').max(100),
  category: z.string().min(1, 'Veuillez sélectionner une catégorie'),
  description: z.string().max(1000).optional(),
  seoKeywords: z.string().max(500).optional(),
  websiteUrl: z.string().url('URL invalide').optional().or(z.literal('')),
  tiktokUrl: z.string().url('URL invalide').optional().or(z.literal('')),
  facebookUrl: z.string().url('URL invalide').optional().or(z.literal('')),
  instagramUrl: z.string().url('URL invalide').optional().or(z.literal('')),
  whatsappNumber: z.string().max(20).optional(),
  hourlyRate: z.number().min(0).optional(),
  city: z.string().max(100).optional(),
  skills: z.string().optional(),
});

interface TalentFormProps {
  userId: string;
  onSuccess?: () => void;
}

const categories = [
  { value: 'developpeur_web', label: 'Développeur Web' },
  { value: 'photographe', label: 'Photographe' },
  { value: 'web_designer', label: 'Web Designer' },
  { value: 'graphiste', label: 'Graphiste' },
  { value: 'artiste', label: 'Artiste (Peintre, Sculpteur...)' },
  { value: 'styliste_modeliste', label: 'Styliste / Modéliste' },
  { value: 'autre', label: 'Autre' },
];

const TalentForm = ({ userId, onSuccess }: TalentFormProps) => {
  const [loading, setLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    seoKeywords: '',
    websiteUrl: '',
    tiktokUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    whatsappNumber: '',
    hourlyRate: '',
    city: '',
    skills: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = talentSchema.parse({
        ...formData,
        hourlyRate: formData.hourlyRate ? parseFloat(formData.hourlyRate) : undefined,
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setLoading(true);

    try {
      const skillsArray = formData.skills
        ? formData.skills.split(',').map(s => s.trim()).filter(Boolean)
        : null;

      const { error } = await supabase.from('talents').insert({
        user_id: userId,
        title: formData.title,
        category: formData.category as any,
        description: formData.description || null,
        seo_keywords: formData.seoKeywords || null,
        website_url: formData.websiteUrl || null,
        tiktok_url: formData.tiktokUrl || null,
        facebook_url: formData.facebookUrl || null,
        instagram_url: formData.instagramUrl || null,
        whatsapp_number: formData.whatsappNumber || null,
        hourly_rate: formData.hourlyRate ? parseFloat(formData.hourlyRate) : null,
        city: formData.city || null,
        skills: skillsArray,
        is_available: isAvailable,
        country: "Côte d'Ivoire",
      });

      if (error) throw error;

      toast({
        title: "Profil créé !",
        description: "Votre profil talent est maintenant visible.",
      });

      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/explore');
      }
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Titre du profil *</Label>
          <Input
            id="title"
            placeholder="Ex: Développeur React Senior"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className={errors.title ? 'border-destructive' : ''}
          />
          {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Catégorie *</Label>
          <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
            <SelectTrigger className={errors.category ? 'border-destructive' : ''}>
              <SelectValue placeholder="Sélectionnez une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Décrivez vos compétences et services..."
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={4}
        />
      </div>

      {/* SEO */}
      <div className="space-y-2">
        <Label htmlFor="seoKeywords">Mots-clés SEO</Label>
        <Input
          id="seoKeywords"
          placeholder="Ex: React, TypeScript, Freelance Abidjan"
          value={formData.seoKeywords}
          onChange={(e) => handleChange('seoKeywords', e.target.value)}
        />
        <p className="text-xs text-muted-foreground">Séparez les mots-clés par des virgules</p>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <Label htmlFor="skills">Compétences</Label>
        <Input
          id="skills"
          placeholder="Ex: React, Node.js, Figma"
          value={formData.skills}
          onChange={(e) => handleChange('skills', e.target.value)}
        />
        <p className="text-xs text-muted-foreground">Séparez les compétences par des virgules</p>
      </div>

      {/* Location and Rate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city">Ville</Label>
          <Input
            id="city"
            placeholder="Ex: Abidjan"
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Tarif horaire (FCFA)</Label>
          <Input
            id="hourlyRate"
            type="number"
            placeholder="Ex: 15000"
            value={formData.hourlyRate}
            onChange={(e) => handleChange('hourlyRate', e.target.value)}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Liens et contacts</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="websiteUrl">Site Web</Label>
            <Input
              id="websiteUrl"
              type="url"
              placeholder="https://monsite.com"
              value={formData.websiteUrl}
              onChange={(e) => handleChange('websiteUrl', e.target.value)}
              className={errors.websiteUrl ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappNumber">Numéro WhatsApp</Label>
            <Input
              id="whatsappNumber"
              placeholder="+225 XX XX XX XX XX"
              value={formData.whatsappNumber}
              onChange={(e) => handleChange('whatsappNumber', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instagramUrl">Instagram</Label>
            <Input
              id="instagramUrl"
              type="url"
              placeholder="https://instagram.com/votre-profil"
              value={formData.instagramUrl}
              onChange={(e) => handleChange('instagramUrl', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="facebookUrl">Facebook</Label>
            <Input
              id="facebookUrl"
              type="url"
              placeholder="https://facebook.com/votre-page"
              value={formData.facebookUrl}
              onChange={(e) => handleChange('facebookUrl', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tiktokUrl">TikTok</Label>
            <Input
              id="tiktokUrl"
              type="url"
              placeholder="https://tiktok.com/@votre-profil"
              value={formData.tiktokUrl}
              onChange={(e) => handleChange('tiktokUrl', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
        <Switch
          id="isAvailable"
          checked={isAvailable}
          onCheckedChange={setIsAvailable}
        />
        <div>
          <Label htmlFor="isAvailable" className="font-semibold">Disponible pour des missions</Label>
          <p className="text-sm text-muted-foreground">Activez pour indiquer que vous acceptez de nouveaux projets</p>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-african-terracotta to-african-gold hover:opacity-90 text-primary-foreground py-6"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Création en cours...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Publier mon profil talent
          </>
        )}
      </Button>
    </form>
  );
};

export default TalentForm;
