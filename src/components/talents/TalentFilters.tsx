import { TalentCategory } from '@/pages/Explore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Camera, 
  Palette, 
  PenTool, 
  Paintbrush, 
  Scissors, 
  MoreHorizontal,
  Search,
  Filter
} from 'lucide-react';

interface TalentFiltersProps {
  selectedCategory: TalentCategory | 'all';
  onCategoryChange: (category: TalentCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  { id: 'all' as const, label: 'Tous', icon: Filter },
  { id: 'developpeur_web' as TalentCategory, label: 'Développeur Web', icon: Code2 },
  { id: 'photographe' as TalentCategory, label: 'Photographe', icon: Camera },
  { id: 'web_designer' as TalentCategory, label: 'Web Designer', icon: Palette },
  { id: 'graphiste' as TalentCategory, label: 'Graphiste', icon: PenTool },
  { id: 'artiste' as TalentCategory, label: 'Artiste', icon: Paintbrush },
  { id: 'styliste_modeliste' as TalentCategory, label: 'Styliste/Modéliste', icon: Scissors },
  { id: 'autre' as TalentCategory, label: 'Autre', icon: MoreHorizontal },
];

const TalentFilters = ({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}: TalentFiltersProps) => {
  return (
    <section className="container-custom px-4 py-8">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Rechercher un talent, une compétence, une ville..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 py-6 text-lg border-african-gold/30 focus:border-african-gold rounded-full bg-card/50"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <Button
              key={category.id}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`rounded-full flex items-center gap-2 transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-african-terracotta to-african-gold text-primary-foreground border-none' 
                  : 'border-african-gold/30 hover:border-african-gold hover:bg-african-gold/10'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default TalentFilters;
