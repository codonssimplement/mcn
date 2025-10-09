import { Button } from "@/components/ui/button";
import { Play, Maximize2, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import virtualTourImage from "@/assets/virtual-tour.jpg";

const VirtualTour = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Visite <span className="text-gold">Virtuelle</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez les salles emblématiques du musée, où que vous soyez
            </p>
          </div>

          {/* Virtual Tour Player */}
          <div className="max-w-6xl mx-auto space-y-8 animate-scale-in">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={virtualTourImage} 
                alt="Visite virtuelle du musée"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="w-20 h-20 rounded-full bg-gold hover:bg-gold-light text-primary shadow-[var(--shadow-gold)] transform hover:scale-110 transition-transform"
                  >
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  </Button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                  6 Salles
                </h3>
                <p className="text-muted-foreground text-sm">
                  Explorez six espaces thématiques dédiés aux grandes civilisations africaines
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                  200+ Œuvres
                </h3>
                <p className="text-muted-foreground text-sm">
                  Découvrez plus de 200 pièces exceptionnelles de notre collection permanente
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                  15 Pays
                </h3>
                <p className="text-muted-foreground text-sm">
                  Un voyage à travers 15 nations africaines et leurs patrimoines uniques
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Une expérience immersive unique
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Notre visite virtuelle vous permet de découvrir le Musée des Civilisations Noires comme si vous y étiez. Naviguez librement à travers nos espaces d'exposition et admirez les détails de chaque œuvre en haute résolution.
                </p>
                <p>
                  Grâce à la technologie de visualisation 360°, explorez chaque recoin de nos galeries, lisez les cartels informatifs et écoutez les commentaires audio de nos conservateurs.
                </p>
                <p>
                  Accessible depuis n'importe quel appareil, cette expérience interactive rend le patrimoine culturel africain disponible au monde entier, 24h/24 et 7j/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="gold">
                  <Play className="mr-2 w-5 h-5" />
                  Lancer la visite guidée
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gold/30 hover:bg-gold/10 hover:text-gold"
                >
                  Mode exploration libre
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VirtualTour;
