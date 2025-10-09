import { Users, Award, Globe, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-museum.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              À propos du <span className="text-gold">Musée</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un lieu de mémoire et de célébration des civilisations africaines
            </p>
            <p className="text-lg text-gold font-medium italic">
              "Une création continue de l'humanité !"
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Musée des Civilisations Noires"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Histoire */}
          <div className="max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-8">
              Histoire du Musée
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Projet au long cours, pensé tour à tour par un militant anticolonialiste (Lamine Senghor), un penseur de la négritude (Léopold Sedar Senghor) et un chantre de la renaissance africaine (Abdoulaye Wade), le Musée des Civilisations noires (MCN) a été inauguré le 6 décembre 2018 par le Président Macky Sall.
              </p>
              <p>
                Le MCN œuvre depuis lors pour la valorisation de l'apport des Civilisations noires au patrimoine universel de l'humanité. Ainsi, le visiteur qui franchit la porte de la case à impluvium qui a inspiré son architecture rencontre tout autour du grand Baobab de l'artiste haïtien Edouard Duval-Carrié, l'exposition : l'Afrique, berceau de l'humanité.
              </p>
              <p>
                Partout ailleurs, à travers les fascinantes œuvres qui font les diverses expositions, le visiteur peut se faire une idée de la dispersion des peuples noirs à travers le monde. Il peut imaginer les formations sociales, les modes de production, les représentations symboliques, les rites initiatiques, produits par les civilisations noires depuis la nuit des temps.
              </p>
              <p>
                Il rencontre le rôle joué par les peuples noirs dans les guerres mondiales et l'avènement d'un monde libre. Il peut se remémorer les débats et les combats des intellectuels, des artistes et écrivains noirs dans les luttes pour l'émancipation, sans compter leur apport dans la naissance du Panafricanisme et les droits civiques.
              </p>
              <p>
                Le visiteur quitte la case en ayant foi en la communauté de destin qui lie les peuples noirs (africains, états-uniens, caraïbéens, européens, australiens, afro-latins, indiens…). Pour autant, sans tomber dans une approche faussement universalisante ou prétendument non-victimaire qui ruserait avec la réalité historique objective faite de maltraitance pluriséculaire des corps noirs à travers : la traite négrière, la colonisation, l'apartheid, le racisme systémique, etc.
              </p>
              <p>
                À aucun moment, les expositions ne tombent dans le piège du passéisme, du romantisme béat, de l'autoglorification et de la complaisance avec soi. Comme un miroir placé devant les visiteurs, bien des œuvres ou des expositions questionnent les inconséquences de nos trajectoires. Au demeurant, le futur africain est déjà-là !
              </p>
              <p>
                Enfin, le MCN étant enraciné depuis sa conceptualisation, il y a six décennies, au pays de la teranga, il valorise l'hospitalité, l'interculturalité, et par là-même, insuffle le respect de la diversité culturelle et les pratiques qui vont dans le sens de l'engendrement d'un monde post-racial !
              </p>
              <p className="mt-6 pt-6 border-t border-border/30">
                Grâce à MCN, nous franchissons une nouvelle étape dans notre engagement pour l'accessibilité culturelle. Cette plateforme numérique permet à chacun, où qu'il soit, de découvrir et d'apprécier notre collection exceptionnelle.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-b from-card to-card/80 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Excellence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Préserver et présenter des œuvres d'exception avec le plus grand soin
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-b from-card to-card/80 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-turquoise-light rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Accessibilité
                </h3>
                <p className="text-muted-foreground text-sm">
                  Rendre la culture accessible à tous, partout dans le monde
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-b from-card to-card/80 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Inclusion
                </h3>
                <p className="text-muted-foreground text-sm">
                  Célébrer la diversité et créer un espace pour tous
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-to-b from-card to-card/80 border border-border/50 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-turquoise to-turquoise-light rounded-xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Passion
                </h3>
                <p className="text-muted-foreground text-sm">
                  Transmettre l'amour du patrimoine et de la culture africaine
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-heading font-bold text-gold">14,000+</div>
                <p className="text-muted-foreground">Pièces dans notre collection</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-heading font-bold text-gold">50,000+</div>
                <p className="text-muted-foreground">Visiteurs par an</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-heading font-bold text-gold">15</div>
                <p className="text-muted-foreground">Pays représentés</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
