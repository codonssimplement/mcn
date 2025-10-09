import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const QRCodeTest = () => {
  const qrCodes = [
    { filename: 'qr-oeuvre-1.png', title: 'Œuvre #1', description: 'Sculpture Sénégalaise → Navigation directe', action: 'Navigation vers /oeuvre/1' },
    { filename: 'qr-oeuvre-2.png', title: 'Œuvre #2', description: 'Céramique traditionnelle → Navigation directe', action: 'Navigation vers /oeuvre/2' },
    { filename: 'qr-oeuvre-3.png', title: 'Œuvre #3', description: 'Textile artisanal → Navigation directe', action: 'Navigation vers /oeuvre/3' },
    { filename: 'qr-sculptures.png', title: 'Toutes les Sculptures', description: 'Catégorie Sculpture → Filtrage galerie', action: 'Filtre "Sculpture" appliqué' },
    { filename: 'qr-textiles.png', title: 'Tous les Textiles', description: 'Catégorie Textile → Filtrage galerie', action: 'Filtre "Textile" appliqué' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Test du <span className="text-gold">Scanner QR</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilisez votre caméra pour scanner ces QR codes et tester la fonctionnalité complète
            </p>
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gold font-medium">
                ✨ <strong>Nouveau :</strong> Chaque scan déclenche une action réelle !
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• <strong>Œuvres individuelles :</strong> Navigation directe vers la page de l'œuvre</li>
                <li>• <strong>Catégories :</strong> Filtrage automatique de la galerie</li>
                <li>• <strong>Notifications :</strong> Toast de confirmation à chaque scan</li>
              </ul>
            </div>
          </div>

          {/* QR Codes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qrCodes.map((qr, index) => (
              <Card key={index} className="p-6 text-center space-y-4 border-border/50 hover:border-gold/50 transition-colors">
                <div className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={`/qr-codes/${qr.filename}`}
                    alt={`QR Code ${qr.title}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {qr.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {qr.description}
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-md p-2">
                    <p className="text-xs text-primary font-medium">
                      🎯 {qr.action}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-gold/5 border-gold/20">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                Comment tester le scanner QR fonctionnel ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-gold">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Ouvrir le scanner</h3>
                  <p className="text-sm text-muted-foreground">
                    Aller sur /explorer et cliquer sur "Scanner QR" (point vert animé)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-gold">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Scanner un QR code</h3>
                  <p className="text-sm text-muted-foreground">
                    Pointer la caméra vers un QR code sur cette page
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-gold">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Voir l'action</h3>
                  <p className="text-sm text-muted-foreground">
                    Navigation automatique + notification toast de confirmation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QRCodeTest;
