import { useEffect, useRef } from "react";

export default function BackgroundMusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio.volume = 0.3;
      audio.play().catch((e) => {
        // Autoplay might be blocked by browser
        console.warn("Autoplay blocked:", e);
      });
      document.removeEventListener("click", playAudio);
    };

    // Most browsers block autoplay, so start on first interaction
    document.addEventListener("click", playAudio);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/calm-meditation.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
