import { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotRAGProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotRAG = ({ isOpen, onClose }: ChatbotRAGProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant Aurora Tech. Comment puis-je vous aider avec nos solutions numériques ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Base de connaissances Aurora Tech
  const knowledgeBase = {
    'qui sommes-nous': 'Aurora Tech est une entreprise ivoirienne basée à Abidjan, spécialisée dans les solutions numériques innovantes. Fondée par KOUASSI JEAN PAUL CEDRIC J (SEGRAYEUR), nous développons des sites web, applications mobiles et logiciels sur mesure.',
    'services': 'Nous proposons : Développement Web, Applications mobiles, Logiciels sur mesure (Windev, Python, Java), Conception graphique, Formation IA, Formation Pack Office, Installation système Windows.',
    'produits': 'Nos produits phares sont : WEÏLI (gestion d\'entreprise), FileCed (sauvegarde documents), QuickJob CI (plateforme emploi).',
    'contact': 'Contactez-nous : +225 0565868786 / +225 0778518902, auroratech2222@gmail.com, auroratech@tutamail.com, Adresse : Cocody Riviera 2, Abidjan',
    'prix': 'Pour un devis personnalisé, contactez-nous via WhatsApp +225 0565868786 ou notre formulaire de contact.',
    'weili': 'WEÏLI est notre solution de gestion d\'entreprise qui permet de créer un site web, gérer les ventes en ligne et suivre les opérations en temps réel.',
    'fileced': 'FileCed offre un espace sécurisé pour stocker vos documents importants, accessible depuis ordinateur ou smartphone.',
    'quickjob': 'QuickJob CI connecte candidats et entreprises en Côte d\'Ivoire avec des offres d\'emploi locales et notifications personnalisées.'
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key) || lowerMessage.includes(key.replace('-', ' '))) {
        return response;
      }
    }

    // Réponses pour des mots-clés spécifiques
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      return 'Bonjour ! Bienvenue chez Aurora Tech. Comment puis-je vous aider aujourd\'hui ?';
    }
    
    if (lowerMessage.includes('site web') || lowerMessage.includes('website')) {
      return 'Nous créons des sites web professionnels, e-commerce et landing pages. Contactez-nous pour un devis gratuit !';
    }
    
    if (lowerMessage.includes('mobile') || lowerMessage.includes('application')) {
      return 'Nous développons des applications mobiles iOS et Android ainsi que des solutions SaaS. Quel type d\'application vous intéresse ?';
    }

    if (lowerMessage.includes('formation') || lowerMessage.includes('ia')) {
      return 'Nous proposons des formations en IA pour débutants et formations Pack Office. Contactez-nous pour plus d\'informations !';
    }

    return 'Je ne suis pas sûr de comprendre votre question. Pouvez-vous me contacter directement via WhatsApp au +225 0565868786 pour une assistance personnalisée ?';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulated response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border rounded-lg w-full max-w-md h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Assistant Aurora Tech</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                  <p className="text-sm">...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tapez votre message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={isLoading} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotRAG;