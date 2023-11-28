import { useState, useRef, useEffect } from 'react';

const Playback = ({ audioSrc, currentSong }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    // Update the time and duration whenever the audio changes
    setCurrentTime(0);
    setDuration(audioRef.current.duration);
  }, [currentSong]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const remainingTime = duration - currentTime;

  console.log('audioSrc:', audioSrc);
  console.log('currentSong:', currentSong);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] bg-opacity-50 text-white p-4 flex items-center justify-between z-50">
    <div className="flex items-center">
      <img
        src={currentSong.image}
        alt={currentSong.artist}
        className="w-12 h-12 object-cover rounded-[5px] mr-4"
      />
      <div className="flex flex-col">
        <p className="text-[10px]">{currentSong.title}</p>
        <p className="text-[10px] text-gray-500">{currentSong.artist}</p>
      </div>
    </div>
    <div className="flex items-center w-full justify-center">
      <div className="w-80 ml-4 mr-2">
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden shadow-md">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400  to-cyan-500"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(remainingTime)}</span>
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-[12px] py-[5px] mb-4 rounded-full"
        onClick={handleTogglePlay}
      >
        {isPlaying ? <i className="fa-solid fa-pause text-[14px]"></i> : <i className="fa-solid fa-play text-[14px]"></i>}
      </button>
    </div>
    <audio
      ref={audioRef}
      src={audioSrc}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetadata}
      className="hidden"
    />
    <i className="fa-solid fa-music mr-2"></i>
  </div>
  
  );
};

export default Playback;


