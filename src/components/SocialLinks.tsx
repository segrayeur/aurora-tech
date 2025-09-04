import { Instagram, Facebook } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@auroratech',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/auroratech',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://facebook.com/auroratech',
      color: 'hover:bg-blue-600'
    }
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-secondary/20 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:text-white group bubble-float`}
          aria-label={social.name}
        >
          {typeof social.icon === 'string' ? (
            <span className="text-lg">{social.icon}</span>
          ) : (
            social.icon
          )}
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;