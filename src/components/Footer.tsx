import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gold/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-gold">MCN</h3>
            <p className="text-sand/80 text-sm leading-relaxed">
              Explorez le patrimoine culturel africain à travers une expérience numérique immersive.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mcndakar" target="_blank" rel="noopener noreferrer" className="text-sand hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mcndakar?igsh=MTNkaGFjMG5zYjVzNg==" target="_blank" rel="noopener noreferrer" className="text-sand hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sand/80 hover:text-gold transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/explorer" className="text-sand/80 hover:text-gold transition-colors text-sm">
                  Explorer les œuvres
                </Link>
              </li>
              <li>
                <Link to="/test-qr" className="text-sand/80 hover:text-gold transition-colors text-sm">
                  Test Scanner QR
                </Link>
              </li>
              <li>
                <Link to="/visite-virtuelle" className="text-sand/80 hover:text-gold transition-colors text-sm">
                  Visite virtuelle
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sand/80 hover:text-gold transition-colors text-sm">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sand/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span>Route de l'Aéroport, Dakar, Sénégal</span>
                  <span className="block text-xs text-gold mt-1">Coordonnées: MHG7+WW Dakar</span>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-sand/80 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+221 33 889 11 80</span>
              </li>
              <li className="flex items-center space-x-2 text-sand/80 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@mcn.sn</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-gold">Horaires</h4>
            <div className="text-sand/80 text-sm space-y-2">
              <p>Mardi - Dimanche</p>
              <p className="font-medium">10h00 - 19h00</p>
              <p className="text-xs mt-4 text-sand/60">Fermé le lundi</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-sand/60 text-sm">
            © {currentYear} Musée des Civilisations Noires × SenStartup. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
