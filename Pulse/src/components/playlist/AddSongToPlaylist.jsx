import React, { useState } from 'react';
import songsData from '../../data/songs.json'; 

const AddSongToPlaylist = ({ selectedPlaylist, onAddSong, onRemoveSong }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = () => {
      const filteredSongs = songsData.filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredSongs);
    };
  
    const handleAddSong = (song) => {
      onAddSong(song);
      setSearchTerm('');
      setSearchResults([]);
    };
  
    const handleRemoveSong = (song) => {
      onRemoveSong(song);
    };
  
    return (
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search for a song..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border-none rounded-md transition-all duration-300 shadow-md bg-[#1A1A1A] bg-opacity-50 text-white"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Search
        </button>
  
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-white">Search Results</h3>
            <ul>
              {searchResults.map((song) => (
                <li key={song.id} className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">{song.title} - {song.artist}</span>
                  {selectedPlaylist.songs.some((selectedSong) => selectedSong.id === song.id) ? (
                    <button
                      onClick={() => handleRemoveSong(song)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddSong(song)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md"
                    >
                      Add
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default AddSongToPlaylist;

