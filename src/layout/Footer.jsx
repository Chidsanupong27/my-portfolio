import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { SiLine } from "react-icons/si";

const socialLinks = [
  
  { icon: Github, href: "https://github.com/Chidsanupong27", label:"GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/chidsanupong.polsri/", label:"Facebook" },
  { icon: SiLine, href: "https://line.me/ti/p/xphf-GwSaZ", label:"Line" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo + Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              CHIDSA<span className="text-primary">NUPONG</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Chidsanupong Polsri. All rights reserved.
            </p>
          </div>

          {/* Middle: Navigation */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
