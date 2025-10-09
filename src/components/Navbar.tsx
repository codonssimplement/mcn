import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logoMCN from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Language = "FR" | "EN" | "WOL";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("FR");
  const location = useLocation();
  const { toast } = useToast();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Explorer", href: "/explorer" },
    { name: "Visite à distance", href: "/visite-virtuelle" },
    { name: "À propos", href: "/a-propos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === "EN") {
      toast({
        title: "Bientôt disponible",
        description: "La version anglaise sera bientôt disponible.",
        duration: 3000,
      });
      return;
    }

    if (newLanguage === "WOL") {
      toast({
        title: "Bientôt disponible",
        description: "La version wolof sera bientôt disponible.",
        duration: 3000,
      });
      return;
    }

    setLanguage(newLanguage);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform overflow-hidden">
              <img src={logoMCN} alt="MCN Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-heading font-bold text-gold">MCN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors relative group ${
                  isActive(item.href)
                    ? "text-gold"
                    : "text-sand hover:text-gold"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform origin-left transition-transform ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sand hover:text-gold hover:bg-gold/10">
                  <Globe className="w-4 h-4 mr-2" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-gold/20">
                <DropdownMenuItem onClick={() => setLanguage("FR")} className="cursor-pointer">
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("EN")} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("WOL")} className="cursor-pointer">
                  Wolof
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-sand hover:text-gold transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                    isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-sand hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
