import { useState } from 'react';
import songsData from '../data/songs.json'
import Playback from '../components/playback';

const SongCard = ({ title, artist, year, genre, image, onClick }) => {
    return (
        <div onClick={onClick} className="bg-black rounded-[5px] overflow-hidden shadow-md w-[190px] p-[15px]">
            <img src={image} alt={artist} className="w-full h-32 object-cover rounded-[5px]" />
            <div className="p-3">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
      </div>
    );
  };
  


export default Explore;