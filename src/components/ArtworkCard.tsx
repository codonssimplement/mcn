import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  category: string;
  image: string;
  origin?: string;
}

const ArtworkCard = ({ id, title, artist, category, image, origin }: ArtworkCardProps) => {
  return (
    <Link to={`/oeuvre/${id}`} className="group">
      <Card className="overflow-hidden artwork-card border-border/50 hover:border-gold/50 bg-gradient-to-b from-card to-card/80">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-gold transition-colors line-clamp-2">
              {title}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs">
              {category}
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{artist}</p>
            {origin && (
              <p className="text-xs text-muted-foreground/70 flex items-center">
                <span className="mr-1">📍</span>
                {origin}
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArtworkCard;
