import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Loader2, 
  Eye, 
  Heart, 
  Trash2, 
  Edit, 
  MapPin,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface MyTalentProfilesProps {
  userId: string;
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

const MyTalentProfiles = ({ userId }: MyTalentProfilesProps) => {
  const [talents, setTalents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMyTalents();
  }, [userId]);

  const fetchMyTalents = async () => {
    try {
      const { data, error } = await supabase
        .from('talents')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTalents(data || []);
    } catch (error) {
      console.error('Error fetching talents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (talentId: string) => {
    setDeleting(talentId);
    try {
      const { error } = await supabase
        .from('talents')
        .delete()
        .eq('id', talentId)
        .eq('user_id', userId);

      if (error) throw error;

      setTalents(prev => prev.filter(t => t.id !== talentId));
      toast({
        title: "Profil supprimé",
        description: "Votre profil talent a été supprimé avec succès.",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-african-gold animate-spin" />
          <p className="text-muted-foreground">Chargement de vos profils...</p>
        </div>
      </div>
    );
  }

  if (talents.length === 0) {
    return (
      <Card className="border-african-gold/20">
        <CardContent className="py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-african-gold/10 rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-african-gold" />
          </div>
          <h3 className="text-xl font-poppins font-semibold mb-2">Aucun profil talent</h3>
          <p className="text-muted-foreground mb-6">
            Créez votre premier profil pour vous faire connaître !
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <Card key={talent.id} className="border-african-gold/20 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-african-terracotta to-african-gold" />
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{talent.title}</CardTitle>
                <Badge variant="outline" className="mt-2">
                  {categoryLabels[talent.category] || talent.category}
                </Badge>
              </div>
              {talent.is_available && (
                <Badge className="bg-african-green text-primary-foreground">
                  Disponible
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {talent.city && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{talent.city}, {talent.country}</span>
              </div>
            )}

            {talent.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {talent.description}
              </p>
            )}

            {talent.hourly_rate && (
              <p className="font-semibold text-african-gold">
                {talent.hourly_rate.toLocaleString()} FCFA/h
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{talent.views_count || 0} vues</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{talent.likes_count || 0} likes</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1" disabled>
                <Edit className="w-4 h-4 mr-2" />
                Modifier
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    disabled={deleting === talent.id}
                  >
                    {deleting === talent.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      Supprimer ce profil ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action est irréversible. Votre profil "{talent.title}" sera définitivement supprimé.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(talent.id)}
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      Supprimer
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyTalentProfiles;
