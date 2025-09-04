import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "+2250665868786";
  const message = "Bonjour Aurora Tech, je souhaite en savoir plus sur vos services !";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;