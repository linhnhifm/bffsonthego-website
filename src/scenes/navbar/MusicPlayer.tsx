import React, { useState } from 'react';
import music from "@/assets/2am-TheRelaxedMovement.mp3"
import {
    MusicalNoteIcon,
    PauseCircleIcon
  } from "@heroicons/react/24/solid";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.035;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button
        className="rounded-full bg-secondary-500 px-5 py-2 hover:bg-primary-500 hover:text-white"
        onClick={togglePlay}
      >
        {isPlaying ? <PauseCircleIcon className="h-6 w-6"/> : <MusicalNoteIcon className="h-6 w-6"/>}
      </button>
      <audio ref={audioRef} src={music} loop/>
    </div>
  );
};

export default MusicPlayer;
