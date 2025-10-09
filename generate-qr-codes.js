import QRCode from 'qrcode';

const generateQRCodes = async () => {
  const qrCodes = [
    { data: 'https://musee-civilisations-noires.com/oeuvre/1', filename: 'qr-oeuvre-1.png' },
    { data: 'https://musee-civilisations-noires.com/oeuvre/2', filename: 'qr-oeuvre-2.png' },
    { data: 'https://musee-civilisations-noires.com/oeuvre/3', filename: 'qr-oeuvre-3.png' },
    { data: 'https://musee-civilisations-noires.com/explorer?category=Sculpture', filename: 'qr-sculptures.png' },
    { data: 'https://musee-civilisations-noires.com/explorer?category=Textile', filename: 'qr-textiles.png' },
  ];

  for (const qr of qrCodes) {
    try {
      await QRCode.toFile(`public/qr-codes/${qr.filename}`, qr.data, {
        width: 300,
        margin: 2,
        color: {
          dark: '#2D1810',  // Couleur primaire du musée
          light: '#FFFFFF'
        }
      });
      console.log(`✅ QR Code généré: ${qr.filename}`);
    } catch (err) {
      console.error(`❌ Erreur génération ${qr.filename}:`, err);
    }
  }

  console.log('🎯 Tous les QR codes ont été générés dans public/qr-codes/');
};

generateQRCodes();
