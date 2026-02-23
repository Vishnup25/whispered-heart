import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Attempt to autoplay when the component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; // Set to 100% volume
      // Browsers often block autoplay without user interaction, but we will try!
      // To guarantee playing, the browser requires the user to click *anywhere* on the page first.
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          setPlaying(true);
        }).catch((e) => {
          console.log("Autoplay prevented by browser, will play on first interaction.", e);
        });
      }
    }

    // Fallback: If autoplay was blocked, play audio on the *first* click anywhere on the website
    const handleFirstInteraction = () => {
      if (audioRef.current && !playing) {
        audioRef.current.play();
        setPlaying(true);
      }
      // Remove listener after first interaction so we don't keep firing it
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => document.removeEventListener('click', handleFirstInteraction);
  }, [playing]);

  return (
    <audio
      ref={audioRef}
      src="/photos/Taylor Swift- Delicate.mp3"
      loop
      preload="auto"
    // We are not rendering any visible button anymore as requested!
    />
  );
};

export default MusicToggle;
