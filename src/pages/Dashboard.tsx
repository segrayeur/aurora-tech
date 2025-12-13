import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import Header3D from '@/components/3d/Header3D';
import TalentForm from '@/components/talents/TalentForm';
import MyTalentProfiles from '@/components/talents/MyTalentProfiles';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, User as UserIcon, BarChart3, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) {
        navigate('/auth');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-african-terracotta/5 to-african-gold/5">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-african-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-african-terracotta/5 to-african-gold/5">
      <Header3D user={user} />
      
      <main className="container-custom pt-24 pb-16 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="font-poppins text-3xl md:text-4xl font-bold gradient-text mb-2">
              Mon Espace Talent
            </h1>
            <p className="text-muted-foreground">
              Gérez vos profils et suivez vos performances
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-african-gold/10 rounded-full border border-african-gold/20">
            <Sparkles className="w-4 h-4 text-african-gold" />
            <span className="text-sm font-medium text-african-gold">TalentAfrika Pro</span>
          </div>
        </div>

        <Tabs defaultValue="profiles" className="space-y-6">
          <TabsList className="bg-card/50 border border-african-gold/20">
            <TabsTrigger value="profiles" className="data-[state=active]:bg-african-gold/20">
              <UserIcon className="w-4 h-4 mr-2" />
              Mes Profils
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-african-gold/20">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nouveau Profil
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-african-gold/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistiques
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profiles">
            <MyTalentProfiles userId={user.id} />
          </TabsContent>

          <TabsContent value="create">
            <Card className="border-african-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-african-gold" />
                  Créer un nouveau profil talent
                </CardTitle>
                <CardDescription>
                  Partagez vos compétences et connectez-vous avec des clients potentiels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TalentForm userId={user.id} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="border-african-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-african-gold" />
                  Statistiques de performance
                </CardTitle>
                <CardDescription>
                  Suivez l'engagement sur vos profils
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-african-terracotta/10 to-african-terracotta/5 rounded-xl border border-african-terracotta/20">
                    <p className="text-3xl font-bold text-african-terracotta">0</p>
                    <p className="text-sm text-muted-foreground">Vues totales</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-african-gold/10 to-african-gold/5 rounded-xl border border-african-gold/20">
                    <p className="text-3xl font-bold text-african-gold">0</p>
                    <p className="text-sm text-muted-foreground">Likes reçus</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-african-green/10 to-african-green/5 rounded-xl border border-african-green/20">
                    <p className="text-3xl font-bold text-african-green">0</p>
                    <p className="text-sm text-muted-foreground">Contacts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
