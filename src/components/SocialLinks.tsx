import { Facebook, Instagram, Music } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://facebook.com/auroratech2222",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram", 
      url: "https://instagram.com/segrayeur_officiel",
      color: "hover:text-pink-600"
    },
    {
      icon: <Music className="w-5 h-5" />,
      name: "TikTok",
      url: "https://tiktok.com/@segrayeur_officiel",
      color: "hover:text-gray-800"
    }
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-secondary rounded-full text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
          aria-label={`Suivre Aurora Tech sur ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;