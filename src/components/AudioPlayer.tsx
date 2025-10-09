import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

interface AudioPlayerProps {
  audioUrl?: string;
  title: string;
}

const AudioPlayer = ({ audioUrl, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const togglePlayPause = () => {
    toast({
      title: "Bientôt disponible",
      description: "Les guides audio seront bientôt disponibles.",
      duration: 3000,
    });
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 border border-gold/20 shadow-[var(--shadow-gold)]">
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlayPause}
          size="lg"
          className="w-14 h-14 rounded-full bg-gold hover:bg-gold-light text-primary shrink-0"
        >
          <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
        </Button>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-sand font-medium">{title}</span>
            <Volume2 className="w-4 h-4 text-gold" />
          </div>

          <div className="space-y-1">
            <Slider
              value={[0]}
              max={100}
              step={1}
              disabled={true}
              className="w-full opacity-50"
            />
            <div className="flex justify-between text-xs text-sand/60">
              <span>0:00</span>
              <span>0:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
