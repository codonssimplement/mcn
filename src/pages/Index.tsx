import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Globe, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-museum.jpg";
import heroImage1 from "@/assets/hero-museum1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium backdrop-blur-sm">
                Musée des Civilisations Noires
              </span>
            </div>
            <p className="text-lg text-gold font-medium italic">
              "Une création continue de l'humanité !"
            </p>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-sand leading-tight">
              Redécouvrez les trésors du{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                patrimoine africain
              </span>
            </h1>

            <p className="text-xl text-sand/80 leading-relaxed max-w-2xl">
              Explorez notre collection unique d'œuvres d'art et d'artefacts culturels à travers une expérience numérique immersive et accessible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/explorer">
                <Button size="lg" variant="gold" className="px-8 py-6 text-lg group">
                  Explorer la collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/visite-virtuelle">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-sand/30 text-sand hover:bg-sand/10 hover:text-gold hover:border-gold"
                >
                  Visite virtuelle
                  <Globe className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Une expérience culturelle unique
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre plateforme innovante conçue pour rendre l'art africain accessible à tous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-gold/50 transition-all hover:shadow-[var(--shadow-gold)] group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Scan & Découvrez
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Scannez les QR codes au musée pour accéder instantanément aux informations détaillées de chaque œuvre
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-gold/50 transition-all hover:shadow-[var(--shadow-gold)] group">
              <div className="w-14 h-14 bg-gradient-to-br from-turquoise to-turquoise-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Guides Audio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Écoutez des descriptions narratives immersives en français, anglais et wolof pour une expérience inclusive
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-gold/50 transition-all hover:shadow-[var(--shadow-gold)] group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                Accès à Distance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Explorez le musée depuis n'importe où grâce à notre visite virtuelle interactive et immersive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Le Musée des Civilisations Noires
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Situé à Dakar, le Musée des Civilisations Noires est un espace culturel emblématique dédié à la préservation et à la célébration du patrimoine africain.
                </p>
                <p>
                  Notre collection exceptionnelle témoigne de la richesse et de la diversité des civilisations du continent africain, de l'Antiquité à nos jours.
                </p>
                <p>
                  Grâce à MCN, nous rendons ce patrimoine accessible au monde entier, offrant une expérience culturelle immersive et éducative.
                </p>
              </div>
              <Link to="/explorer">
                <Button size="lg" variant="gold" className="mt-4">
                  Explorer la collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage1} 
                  alt="Musée des Civilisations Noires"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold to-gold-light rounded-2xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
