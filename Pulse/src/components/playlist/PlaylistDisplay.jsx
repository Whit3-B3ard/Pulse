import React, { useState } from 'react';

const PlaylistDisplay = ({ playlists, onSelect, onDelete }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    onSelect(playlist);
  };

  const handleDeletePlaylist = (playlistName) => {
    onDelete(playlistName);
    if (selectedPlaylist && selectedPlaylist.name === playlistName) {
      setSelectedPlaylist(null);
    }
  };

  const handleDeleteSong = (songIndex) => {
    const updatedPlaylist = { ...selectedPlaylist };
    updatedPlaylist.songs.splice(songIndex, 1);
    setSelectedPlaylist(updatedPlaylist);
  };

  return (
    <div className="mr-8 w-full">
      <ul className="mb-4">
        {playlists.map((playlist, index) => (
          <li
            key={index}
            onClick={() => handleSelectPlaylist(playlist)}
            className={`cursor-pointer mb-2 mt-10 ${
              selectedPlaylist === playlist ? 'text-white font-bold text-[35px]' : 'text-gray-700 hover:text-white text-[35px]'
            }`}
          >
            {playlist.name}
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                handleDeletePlaylist(playlist.name);
              }}
              className="text-green-200 focus:outline-none ml-10"
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </li>
        ))}
      </ul>

      {selectedPlaylist && (
        <div className="mt-20">
          <h4 className="text-white font-bold mb-2">Your songs for {selectedPlaylist.name} playlist</h4>
          <div className="flex justify-between text-gray-400 m-3 pl-24 pr-4">
            <p># Title</p>
            <p>Album</p>
            <p><i className="fa-regular fa-clock"></i></p>
          </div>
          <hr className="border-[-1px] border-gray-600 my-2"></hr>

          <div className="rounded-md mt-4">
            {selectedPlaylist.songs.map((song, songIndex) => (
              <li key={songIndex} className="flex items-center justify-between mb-4 hover:bg-gray-500 hover:bg-opacity-20 hover:cursor-pointer hover:rounded-md">
                <div className="flex">
                  <img src={song.image} alt={song.title} className="w-12 h-12 object-cover rounded mr-4 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-gray-400">{song.title}</p>
                    <p className="text-gray-600">{song.artist}</p>
                  </div>
                </div>
                <p className="text-gray-600 mr-10">{song.album}</p>
                <p className="text-gray-400 mr-4">{song.duration}</p>
                <button
                  onClick={() => handleDeleteSong(songIndex)}
                  className="text-red-500 focus:outline-none"
                >
                 <i class="fa-solid fa-x text-green-200"></i>
                </button>
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistDisplay;



