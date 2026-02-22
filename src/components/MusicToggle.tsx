import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };

  return (
    <motion.button
      className="music-toggle"
      onClick={toggle}
      animate={playing ? { scale: [1, 1.05, 1] } : {}}
      transition={playing ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : {}}
      aria-label="Toggle music"
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-petal" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </motion.button>
  );
};

export default MusicToggle;
