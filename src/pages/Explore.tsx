import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import Header3D from '@/components/3d/Header3D';
import TalentGallery from '@/components/talents/TalentGallery';
import TalentFilters from '@/components/talents/TalentFilters';
import { Sparkles, Globe, Zap } from 'lucide-react';

export type TalentCategory = 
  | 'developpeur_web'
  | 'photographe'
  | 'web_designer'
  | 'graphiste'
  | 'artiste'
  | 'styliste_modeliste'
  | 'autre';

const Explore = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TalentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-african-terracotta/5 to-african-gold/5">
      <Header3D user={user} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-african-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-african-terracotta/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-african-gold/10 rounded-full border border-african-gold/20">
              <Sparkles className="w-4 h-4 text-african-gold" />
              <span className="text-sm font-medium text-african-gold">Plateforme 3D Immersive</span>
            </div>
          </div>
          
          <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Découvrez les Talents Africains
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Une expérience immersive pour explorer et connecter avec les meilleurs développeurs, 
            designers, photographes et artistes d'Afrique.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-african-terracotta" />
              <span>Présence panafricaine</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-african-gold" />
              <span>Connexion instantanée</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-african-green" />
              <span>Profils vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <TalentFilters 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Talent Gallery */}
      <TalentGallery 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        currentUser={user}
      />
    </div>
  );
};

export default Explore;
