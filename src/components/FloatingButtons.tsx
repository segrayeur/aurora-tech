import { Bot, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import ChatbotRAG from './ChatbotRAG';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  

  const buttons = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      action: () => {
        const phoneNumber = "2250565868786";
        const message = "Bonjour Aurora Tech, je suis intéressé par vos services.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
      },
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Contact",
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      label: "Assistant IA",
      action: () => {
        setIsOpen(false);
        setIsChatbotOpen(true);
      },
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Individual buttons */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {buttons.map((button, index) => (
            <button
              key={button.label}
              onClick={button.action}
              className={`${button.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 bubble-float flex items-center gap-2 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={button.label}
            >
              {button.icon}
              <span className="hidden group-hover:block text-xs font-medium whitespace-nowrap bg-black/80 px-2 py-1 rounded absolute right-full mr-2">
                {button.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 neon-glow spectacular-zoom"
        aria-label="Ouvrir menu flottant"
      >
        <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      </div>

      {/* Chat Modal */}
      <ChatbotRAG isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

export default FloatingButtons;