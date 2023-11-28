import { useState } from 'react';

const UserProfile = ({ username, email }) => (
  <div className="mb-4">
    <h2 className="text-xl font-bold">{username}</h2>
    <p className="text-gray-600">{email}</p>
    {/* Add more user information as needed */}
  </div>
);

const Playlist = ({ playlist }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState(playlist.songs);

  const handlePlay = (song) => {
    // Implement your play logic here
    console.log(`Playing: ${song}`);
  };

  const handleRemove = (song) => {
    // Remove the selected song from the playlist by filtering based on the song's index
    const updatedPlaylist = playlistSongs.filter((item, index) => index !== playlistSongs.indexOf(song));
    setPlaylistSongs(updatedPlaylist);
    console.log(`Removing: ${song}`);
  };
  

  const handleAdd = (song) => {
    // Add the selected song to the playlist
    setPlaylistSongs([...playlistSongs, song]);
    console.log(`Adding: ${song}`);
  };

  return (
    <div>
      <UserProfile username="Your Username" email="your.email@example.com" />

      <h1 className="text-2xl font-bold mb-4">
        Your Playlists ({playlistSongs.length} Songs)
      </h1>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-2">{playlist.name}</h2>
        <p className="text-gray-600">Created by {playlist.owner}</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Songs in {playlist.name}</h2>
          <ul>
            {playlistSongs.map((song, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700">
                <span>{song}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => {
                      setSelectedSong(song);
                      handlePlay(song);
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Play
                  </button>
                  <button
                    onClick={() => handleRemove(song)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Actions</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handleAdd('New Song')} // Replace 'New Song' with the actual song data
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Add New Song
          </button>
        </div>
      </div>

      {selectedSong && (
        <div className="mt-4">
          <p>Now Playing: {selectedSong}</p>
        </div>
      )}
    </div>
  );
};

export default Playlist;



