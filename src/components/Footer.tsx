import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/thwariq-anwar",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/thwariq-anwar",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:thwariqanwar@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold gradient-text mb-2">
              Thwariq Anwar
            </div>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Enthusiast & Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-lg transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Thwariq Anwar. Made with 
            <Heart className="h-4 w-4 text-red-500" />
            and dedication to cybersecurity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;