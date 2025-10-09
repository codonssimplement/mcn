import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, QrCode, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import QRScanner from "@/components/QRScanner";
import artwork1 from "@/assets/18ce50e7-c7a3-41fb-a858-7041ea0b1c0a.jpg";
import artwork2 from "@/assets/24f3b048-6ac8-416d-a719-0d1fd4c481d1.jpg";
import artwork3 from "@/assets/368e6c01-8120-4677-8426-dac978597785.jpg";
import artwork4 from "@/assets/41ef8a9f-d5b0-44e0-898d-03d8f63c0e02.jpg";
import artwork5 from "@/assets/494064d5-5431-4864-b1b8-1ffcab84421c.jpg";
import artwork6 from "@/assets/67a363e1-ad2e-42e9-9604-470dad610757.jpg";
import artwork7 from "@/assets/8b42af43-87a2-4043-83e7-33f1213afd13.jpg";
import artwork8 from "@/assets/9132b745-c338-4ab4-b485-e559584e5ae0.jpg";
import artwork9 from "@/assets/daef7562-164e-47cf-bcfa-30a0ba7e1efe.jpg";
import artwork10 from "@/assets/f163e4ce-53f6-4d3e-a337-941276d0580b.jpg";
import artwork11 from "@/assets/f4242d92-f3d7-42ff-8035-10d51bd04c54.jpg";
import artwork12 from "@/assets/fc432193-2811-404d-afe4-3f3364ca34d3.jpg";
import artwork13 from "@/assets/ffa3ca5c-2191-41b3-8666-7f25282336d4.jpg";
import potteryImage from "@/assets/artwork-pottery.jpg";
import textileImage from "@/assets/artwork-textile.jpg";
import sculptureImage from "@/assets/artwork-sculpture.jpg";

const artworks = [
  {
    id: "1",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork1,
  },
  {
    id: "2",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    image: potteryImage,
  },
  {
    id: "3",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    image: textileImage,
  },
  {
    id: "4",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Bronze",
    origin: "Senegal",
    image: sculptureImage,
  },
  {
    id: "5",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork2,
  },
  {
    id: "6",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    image: artwork3,
  },
  {
    id: "7",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Bronze",
    origin: "Senegal",
    image: artwork4,
  },
  {
    id: "8",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork5,
  },
  {
    id: "9",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    image: artwork6,
  },
  {
    id: "10",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork7,
  },
  {
    id: "11",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork8,
  },
  {
    id: "12",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    image: artwork9,
  },
  {
    id: "13",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork10,
  },
  {
    id: "14",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork11,
  },
  {
    id: "15",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    image: artwork12,
  },
  {
    id: "16",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    image: artwork1,
  },
];

const Explorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showQRScanner, setShowQRScanner] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleQRScan = (result: string) => {
    console.log("QR Code scanné:", result);

    // Analyser l'URL scannée
    if (result.includes("/oeuvre/")) {
      // Extraction de l'ID de l'œuvre
      const match = result.match(/\/oeuvre\/(\d+)/);
      if (match) {
        const artworkId = match[1];
        console.log(`🔍 Navigation vers l'œuvre #${artworkId}`);

        toast({
          title: "Œuvre trouvée !",
          description: `Navigation vers l'œuvre #${artworkId}`,
          duration: 2000,
        });

        // Petite pause pour laisser voir le toast
        setTimeout(() => {
          navigate(`/oeuvre/${artworkId}`);
        }, 500);
        return;
      }
    }

    if (result.includes("/explorer?category=")) {
      // Extraction de la catégorie
      const urlParams = new URLSearchParams(result.split('?')[1]);
      const category = urlParams.get('category');
      if (category) {
        console.log(`🏷️ Filtrage par catégorie: ${category}`);

        toast({
          title: "Catégorie appliquée !",
          description: `Affichage des œuvres en ${category}`,
          duration: 2000,
        });

        setSelectedCategory(category);
        setShowQRScanner(false);
        return;
      }
    }

    // Si on ne reconnaît pas le format, afficher un message
    console.log("❓ Format QR code non reconnu");
    toast({
      title: "QR Code scanné",
      description: `Contenu: ${result.substring(0, 50)}...`,
      variant: "default",
      duration: 3000,
    });
  };

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Explorer les <span className="text-gold">Œuvres</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre collection exceptionnelle d'art et d'artefacts africains
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une œuvre, un artiste, une région..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-card border-border/50 focus:border-gold"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12 bg-card border-border/50">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="Sculpture">Sculpture</SelectItem>
                  <SelectItem value="Céramique">Céramique</SelectItem>
                  <SelectItem value="Textile">Textile</SelectItem>
                  <SelectItem value="Bronze">Bronze</SelectItem>
                </SelectContent>
              </Select>

              <Button
                size="lg"
                variant="gold"
                className="h-12 md:w-auto relative"
                onClick={() => setShowQRScanner(true)}
              >
                <QrCode className="w-5 h-5 md:mr-2" />
                <span className="hidden md:inline">Scanner QR</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              {filteredArtworks.length} œuvre{filteredArtworks.length > 1 ? "s" : ""} trouvée{filteredArtworks.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} {...artwork} />
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Aucune œuvre trouvée. Essayez une autre recherche.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <QRScanner
          onResult={handleQRScan}
          onClose={() => setShowQRScanner(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Explorer;
