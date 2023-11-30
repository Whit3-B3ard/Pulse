import React, { useState } from 'react';

const CreatePlaylist = ({ onPlaylistCreate }) => {
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim() !== '') {
      onPlaylistCreate(newPlaylistName);
      setNewPlaylistName('');
    }
  };

  return (
    <div className="mb-4">
    <h2 className="text-gray-300 text-[24px] mb-10">Let's find something for you</h2>
      <input
        type="text"
        placeholder="New Playlist Name"
        value={newPlaylistName}
        onChange={(e) => setNewPlaylistName(e.target.value)}
        className="p-2 border-none rounded-md transition-all duration-300 shadow-md bg-[#1A1A1A] bg-opacity-50 text-white"
      />
      <button
        onClick={handleCreatePlaylist}
        className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2 rounded-md ml-3"
      >
        Create
      </button>
    </div>
  );
};

export default CreatePlaylist;
