import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import ArtworkCard from "@/components/ArtworkCard";
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

interface ArtworkData {
  title: string;
  artist: string;
  category: string;
  origin: string;
  period: string;
  image: string;
  descriptionFR: string;
  descriptionEN: string;
  descriptionWOL: string;
}

const artworkData: Record<string, ArtworkData> = {
  "1": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork1,
    descriptionFR: "Cette œuvre d'art exceptionnelle représente la richesse culturelle du Sénégal. Elle incarne l'héritage artistique traditionnel transmis de génération en génération par les artisans locaux.",
    descriptionEN: "This exceptional artwork represents the cultural richness of Senegal. It embodies the traditional artistic heritage passed down from generation to generation by local artisans.",
    descriptionWOL: "Bii œuvre artistique bu exceptionnel dafa melni richesse culturelle bu Sénégal. Dinañu koy jëfandikoo ci héritage artistique traditionnel yi.",
  },
  "2": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    period: "XXe siècle",
    image: potteryImage,
    descriptionFR: "Cette poterie traditionnelle témoigne du savoir-faire ancestral des artisans sénégalais. Chaque pièce raconte une histoire culturelle unique.",
    descriptionEN: "This traditional pottery testifies to the ancestral know-how of Senegalese artisans. Each piece tells a unique cultural story.",
    descriptionWOL: "Bii poterie traditionnelle dafa wone savoir-faire ancestral yi yu artisan Sénégalais.",
  },
  "3": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    period: "XXe siècle",
    image: textileImage,
    descriptionFR: "Ce textile traditionnel représente l'art textile sénégalais, transmis depuis des siècles et symbole de l'identité culturelle du pays.",
    descriptionEN: "This traditional textile represents Senegalese textile art, passed down for centuries and symbol of the country's cultural identity.",
    descriptionWOL: "Bii textile traditionnel dafa melni art textile Sénégalais, buñ koy jëfandikoo ci siècle yi.",
  },
  "4": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Bronze",
    origin: "Senegal",
    period: "XXe siècle",
    image: sculptureImage,
    descriptionFR: "Cette sculpture en bronze illustre la maîtrise technique des artisans sénégalais dans l'art de la fonte. Elle représente un élément important de la culture locale.",
    descriptionEN: "This bronze sculpture illustrates the technical mastery of Senegalese artisans in casting art. It represents an important element of local culture.",
    descriptionWOL: "Bii sculpture ci bronze dafa wone maîtrise technique yi yu artisan Sénégalais ci art bu fonte.",
  },
  "5": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork2,
    descriptionFR: "Cette sculpture représente l'expression artistique traditionnelle du Sénégal, mettant en valeur les techniques ancestrales de sculpture sur bois.",
    descriptionEN: "This sculpture represents the traditional artistic expression of Senegal, highlighting the ancestral wood carving techniques.",
    descriptionWOL: "Bii sculpture dafa melni expression artistique traditionnelle bu Sénégal.",
  },
  "6": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork3,
    descriptionFR: "Cette œuvre céramique illustre la diversité des formes et des motifs traditionnels utilisés dans l'artisanat sénégalais depuis des générations.",
    descriptionEN: "This ceramic work illustrates the diversity of forms and traditional patterns used in Senegalese craftsmanship for generations.",
    descriptionWOL: "Bii œuvre céramique dafa wone diversité yi yu formes ak motifs traditionnels.",
  },
  "7": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Bronze",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork4,
    descriptionFR: "Cette statuette en bronze témoigne de l'excellence artistique des artisans sénégalais dans la création d'objets rituels et décoratifs.",
    descriptionEN: "This bronze statuette testifies to the artistic excellence of Senegalese artisans in creating ritual and decorative objects.",
    descriptionWOL: "Bii statuette ci bronze dafa wone excellence artistique yi yu artisan Sénégalais.",
  },
  "8": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork5,
    descriptionFR: "Cette sculpture incarne l'essence de l'art traditionnel sénégalais, préservant les techniques ancestrales de sculpture sur différents matériaux.",
    descriptionEN: "This sculpture embodies the essence of traditional Senegalese art, preserving ancestral sculpting techniques on different materials.",
    descriptionWOL: "Bii sculpture dafa melni essence yi yu art traditionnel Sénégalais.",
  },
  "9": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork6,
    descriptionFR: "Ce textile traditionnel représente les motifs culturels caractéristiques du Sénégal, transmis à travers les générations d'artisans.",
    descriptionEN: "This traditional textile represents the characteristic cultural patterns of Senegal, passed down through generations of artisans.",
    descriptionWOL: "Bii textile traditionnel dafa melni motifs culturels caractéristiques yi yu Sénégal.",
  },
  "10": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork7,
    descriptionFR: "Cette sculpture illustre la continuité de l'art traditionnel sénégalais, mettant en lumière les compétences techniques des artisans locaux.",
    descriptionEN: "This sculpture illustrates the continuity of traditional Senegalese art, highlighting the technical skills of local artisans.",
    descriptionWOL: "Bii sculpture dafa wone continuité yi yu art traditionnel Sénégalais.",
  },
  "11": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork8,
    descriptionFR: "Cette œuvre représente l'héritage culturel vivant du Sénégal, perpétuant les traditions artistiques ancestrales.",
    descriptionEN: "This work represents the living cultural heritage of Senegal, perpetuating ancestral artistic traditions.",
    descriptionWOL: "Bii œuvre dafa melni héritage culturel vivant bu Sénégal.",
  },
  "12": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Céramique",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork9,
    descriptionFR: "Cette poterie incarne l'art céramique traditionnel du Sénégal, préservant les techniques de fabrication ancestrales.",
    descriptionEN: "This pottery embodies traditional Senegalese ceramic art, preserving ancestral manufacturing techniques.",
    descriptionWOL: "Bii poterie dafa melni art céramique traditionnel bu Sénégal.",
  },
  "13": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork10,
    descriptionFR: "Cette sculpture représente la maîtrise artistique des artisans sénégalais dans la création d'œuvres symboliques.",
    descriptionEN: "This sculpture represents the artistic mastery of Senegalese artisans in creating symbolic works.",
    descriptionWOL: "Bii sculpture dafa melni maîtrise artistique yi yu artisan Sénégalais.",
  },
  "14": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork11,
    descriptionFR: "Cette œuvre illustre la diversité et la beauté de l'art traditionnel sénégalais à travers les âges.",
    descriptionEN: "This work illustrates the diversity and beauty of traditional Senegalese art through the ages.",
    descriptionWOL: "Bii œuvre dafa wone diversité ak beauté yi yu art traditionnel Sénégalais.",
  },
  "15": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Textile",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork12,
    descriptionFR: "Ce textile traditionnel représente l'identité culturelle du Sénégal à travers ses motifs et couleurs caractéristiques.",
    descriptionEN: "This traditional textile represents Senegal's cultural identity through its characteristic patterns and colors.",
    descriptionWOL: "Bii textile traditionnel dafa melni identité culturelle bu Sénégal.",
  },
  "16": {
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Sculpture",
    origin: "Senegal",
    period: "XXe siècle",
    image: artwork13,
    descriptionFR: "Cette sculpture incarne l'esprit artistique traditionnel du Sénégal, préservant l'héritage culturel pour les générations futures.",
    descriptionEN: "This sculpture embodies the traditional artistic spirit of Senegal, preserving cultural heritage for future generations.",
    descriptionWOL: "Bii sculpture dafa melni esprit artistique traditionnel bu Sénégal.",
  },
};

const relatedArtworks = [
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
    id: "7",
    title: "Oeuvre Test",
    artist: "Artisan MCN",
    category: "Bronze",
    origin: "Senegal",
    image: artwork4,
  },
];

const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworkData[id || "1"] || artworkData["1"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/explorer" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'exploration
          </Link>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="space-y-6 animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                    {artwork.title}
                  </h1>
                  <Badge variant="secondary" className="shrink-0">
                    {artwork.category}
                  </Badge>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gold" />
                    <span className="font-medium">{artwork.artist}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>{artwork.origin}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>{artwork.period}</span>
                  </div>
                </div>
              </div>

              {/* Description Tabs */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Description
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {artwork.descriptionFR}
                  </p>
                </div>
              </div>

              {/* Audio Player */}
              <div className="space-y-3">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Écouter la description
                </h3>
                <AudioPlayer title={artwork.title} />
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4">
                <Button variant="gold" className="flex-1">
                  Partager cette œuvre
                </Button>
                <Button variant="outline" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                  Ajouter aux favoris
                </Button>
              </div>
            </div>
          </div>

          {/* Related Artworks */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Œuvres similaires
              </h2>
              <p className="text-muted-foreground">
                Découvrez d'autres pièces de notre collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArtworks.map((item) => (
                <ArtworkCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtworkDetail;
