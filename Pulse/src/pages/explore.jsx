import { useState } from 'react';
import songsData from '../data/songs.json'
import Playback from '../components/playback';
import PulsePlaylist from '../components/pulseMostListened';
import PulseTopArtists from '../components/pulseTopArtists';
import SearchBar from '../components/searchBar';

const SongCard = ({ title, artist, year, image, onClick }) => {
    return (
      <div className="flex flex-col">
        <div onClick={onClick} className="bg-gray-800 bg-opacity-[20%] rounded-[5px] overflow-hidden shadow-md w-[190px] p-[15px] cursor-pointer transition-transform transform hover:scale-105">
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
            
        </div>
        <blockquote className="p-1 pt-[10px]">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{`${artist} • ${year}`}</p>
        </blockquote>
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
    const [filteredSongs, setFilteredSongs] = useState(null);

    const handleSongClick = (song) => {
      setCurrentSong(song);
    };

    const handleSearch = (searchTerm) => {
      // Filter songs based on the search term
      const filtered = songsData.filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Update the filtered songs
      setFilteredSongs(filtered);
    };

    return (
      <div className="pl-[60px] pr-[60px] pt-[30px]">
        <h2 className="text-[28px] pb-8 font-bold text-white">Browse all</h2>

        <SearchBar onSearch={handleSearch} />
        <SongList songs={filteredSongs || songsData} onSongClick={handleSongClick} />
        {currentSong && <Playback audioSrc={currentSong.audio} currentSong={currentSong} />}
        <PulsePlaylist />
        <PulseTopArtists />
      </div>
    );
};

export default Explore;