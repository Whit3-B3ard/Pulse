import React, { useState } from 'react';

const Playlist = () => {
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() !== '') {
      setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylistName]);
      setNewPlaylistName('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">My Playlists</h2>

      {/* View existing playlists */}
      <ul className="mb-4">
        {playlists.map((playlist, index) => (
          <li key={index} className="text-gray-700">{playlist}</li>
        ))}
      </ul>

      {/* Create a new playlist */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="New Playlist Name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
          className="p-2 flex-1 border-none rounded-md transition-all duration-300 shadow-md bg-[#1A1A1A] bg-opacity-50 text-white"
        />
        <button
          onClick={handleCreatePlaylist}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create Playlist
        </button>
      </div>

      {/* Favorites section */}
      <h2 className="text-2xl font-bold my-4">Favorites</h2>

      {/* View favorite items */}
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index} className="text-gray-700">{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;





