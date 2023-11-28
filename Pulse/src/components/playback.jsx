import React, { useState, useRef } from 'react';

const Playback = ({ audioSrc, currentSong }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  console.log('audioSrc:', audioSrc);
  console.log('currentSong:', currentSong);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800  bg-opacity-50 text-white p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <img
          src={currentSong.image}
          alt={currentSong.artist}
          className="w-12 h-12 object-cover rounded-[5px] mr-4"
        />
        <div>
          <p className="text-sm font-semibold">{currentSong.title}</p>
          <p className="text-xs text-gray-500">{currentSong.artist}</p>
        </div>
      </div>
      <div className="flex items-center">
        <audio ref={audioRef} src={audioSrc} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
          onClick={handleTogglePlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <span className="text-xs text-gray-500">
          {isPlaying ? 'Playing' : 'Paused'}
        </span>
      </div>
    </div>
  );
};

export default Playback;

