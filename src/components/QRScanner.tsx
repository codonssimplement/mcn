import { useState, useRef, useEffect, useCallback } from "react";
import QrScanner from "qr-scanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Camera, Flashlight, RotateCcw } from "lucide-react";

interface QRScannerProps {
  onResult: (result: string) => void;
  onClose: () => void;
}

const QRScannerComponent = ({ onResult, onClose }: QRScannerProps) => {
  const [error, setError] = useState<string>("");
  const [hasCamera, setHasCamera] = useState<boolean>(true);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);

  const startScanner = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      setError("");
      setIsScanning(true);

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          onResult(result.data);
          onClose();
        },
        {
          onDecodeError: (err) => {
            // Ignore decode errors during normal operation
          },
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      scannerRef.current = scanner;
      await scanner.start();
      setIsScanning(true);

    } catch (err: any) {
      console.error("Erreur scanner QR:", err);
      setIsScanning(false);

      if (err.name === "NotAllowedError") {
        setError("Accès à la caméra refusé. Veuillez autoriser l'accès à la caméra.");
        setHasCamera(false);
      } else if (err.name === "NotFoundError") {
        setError("Aucune caméra trouvée sur cet appareil.");
        setHasCamera(false);
      } else {
        setError("Erreur lors de l'initialisation du scanner. Veuillez réessayer.");
      }
    }
  }, [onResult, onClose]);

  useEffect(() => {
    if (videoRef.current && hasCamera) {
      startScanner();
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.destroy();
      }
    };
  }, [hasCamera, startScanner]);

  const toggleFlash = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.toggleFlash();
        setIsFlashOn(!isFlashOn);
      } catch (err) {
        console.error("Erreur toggle flash:", err);
      }
    }
  };

  const retryScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.destroy();
      scannerRef.current = null;
    }
    setError("");
    setHasCamera(true);
    setIsScanning(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-border">
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Scanner un QR Code
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Camera container */}
          <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
            {hasCamera ? (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
                {!isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center text-white">
                      <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Initialisation du scanner...</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-white text-center p-4">
                <div>
                  <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm mb-4">{error}</p>
                  <Button onClick={retryScanner} size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Réessayer
                  </Button>
                </div>
              </div>
            )}

            {/* Controls overlay */}
            {hasCamera && isScanning && (
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={toggleFlash}
                  className="bg-black/50 hover:bg-black/70 text-white border-white/20"
                >
                  <Flashlight className={`w-4 h-4 ${isFlashOn ? 'text-yellow-400' : ''}`} />
                </Button>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Positionnez le QR code dans le cadre pour le scanner
            </p>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QRScannerComponent;
