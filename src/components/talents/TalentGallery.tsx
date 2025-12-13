import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { TalentCategory } from '@/pages/Explore';
import TalentCard from './TalentCard';
import { Loader2, Users, Sparkles } from 'lucide-react';

interface Talent {
  id: string;
  user_id: string;
  title: string;
  category: TalentCategory;
  description: string | null;
  seo_keywords: string | null;
  website_url: string | null;
  tiktok_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  whatsapp_number: string | null;
  hourly_rate: number | null;
  is_available: boolean | null;
  portfolio_images: string[] | null;
  skills: string[] | null;
  country: string | null;
  city: string | null;
  views_count: number | null;
  likes_count: number | null;
  created_at: string;
  profiles?: {
    full_name: string;
    avatar_url: string | null;
  };
}

interface TalentGalleryProps {
  selectedCategory: TalentCategory | 'all';
  searchQuery: string;
  currentUser: User | null;
}

const TalentGallery = ({ selectedCategory, searchQuery, currentUser }: TalentGalleryProps) => {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTalents();
  }, [selectedCategory, searchQuery]);

  const fetchTalents = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('talents')
        .select('*')
        .order('created_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,city.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
      console.error('Error fetching talents:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-custom px-4 py-16 flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-african-gold animate-spin" />
          <p className="text-muted-foreground">Chargement des talents...</p>
        </div>
      </div>
    );
  }

  if (talents.length === 0) {
    return (
      <div className="container-custom px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-african-gold/10 rounded-full flex items-center justify-center">
            <Users className="w-12 h-12 text-african-gold" />
          </div>
          <h3 className="text-2xl font-poppins font-semibold mb-2">Aucun talent trouvé</h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery 
              ? `Aucun résultat pour "${searchQuery}"`
              : 'Soyez le premier à partager votre talent !'
            }
          </p>
          <div className="flex items-center justify-center gap-2 text-african-gold">
            <Sparkles className="w-5 h-5" />
            <span>Inscrivez-vous pour publier votre profil</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container-custom px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{talents.length}</span> talent{talents.length > 1 ? 's' : ''} trouvé{talents.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {talents.map((talent, index) => (
          <div 
            key={talent.id}
            className="fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TalentCard talent={talent} currentUser={currentUser} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalentGallery;
