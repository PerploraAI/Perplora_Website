import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from 'lucide-react'; // Adjust the import based on your icon library

const socialLinks = [
  { icon: InstagramIcon, link: "https://www.instagram.com/perploraai/" },
  { icon: LinkedinIcon, link: "http://www.linkedin.com/in/perploraai" },
  { icon: FacebookIcon, link: "https://www.facebook.com" },
  { icon: YoutubeIcon, link: "https://www.youtube.com/@perploraAI" },
  { icon: TwitterIcon, link: "https://x.com/Perploraai" },
];

const SocialIcons = () => {
  return (
    <div className="text-white text-lg flex flex-col gap-2 items-center">
      <div className="flex justify-center flex gap-6 mt-3">
        {socialLinks.map(({ icon: Icon, link }, index) => (
          <a 
            key={index} 
            href={link} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:scale-105  transition ease-in-out hover:text-primary"
          >
            <Icon className="w-8 h-8 hover:text-primary text-white" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;