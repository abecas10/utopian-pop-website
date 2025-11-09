import { Heart, Mail, Instagram, Music } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logoIcon} alt="Utopian Pop Icon" className="w-16 h-16 rounded-full" />
            <p className="text-sm text-muted-foreground">
              Música con propósito. Transformando el mundo canción a canción.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:info@utopianpop.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@utopianpop.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Music className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> by Utopian Pop © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
