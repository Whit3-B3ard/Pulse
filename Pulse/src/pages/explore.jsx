import { useState } from 'react';
import songsData from '../data/songs.json'
import Playback from '../components/playback';
import PulsePlaylist from '../components/pulseMostListened';

const SongCard = ({ title, artist, year, genre, image, onClick }) => {
    return (
        <div onClick={onClick} className="bg-black rounded-[5px] overflow-hidden shadow-md w-[190px] p-[15px] cursor-pointer transition-transform transform hover:scale-105">
            <img src={image} alt={artist} className="w-full h-[150px] object-cover rounded-[5px]" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={onClick}
          className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 9-14 9V3z"
            />
          </svg>
        </button>
      </div>
            <div className="p-1">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{`${artist} • ${year}`}</p>
                <p className="text-sm text-gray-600">{`Genre: ${genre}`}</p>
            </div>
        </div>
    );
};

const SongList = ({ songs, onSongClick }) => {
    return (
        <div className="flex gap-4">
            {songs.map(song => (
                <SongCard key={song.id} {...song} onClick={() => onSongClick(song)} />
            ))}
        </div>
    );
};

const Explore = () => {
    const [currentSong, setCurrentSong] = useState(null);
  
    const handleSongClick = (song) => {
      // Update the current song when a song is clicked
      setCurrentSong(song);
    };
  
    return (
      <div className="p-8">
        <h2 className="text-[28px] pb-8 font-bold text-white">Browse all</h2>
        <SongList songs={songsData} onSongClick={handleSongClick} />
            {currentSong && (
                <Playback audioSrc={currentSong.audio} currentSong={currentSong} />
            )}
        <PulsePlaylist />
      </div>
    );
  };

export default Explore;