import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({ playlists, handleAddPlaylist }) => {
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleAdd = () => {
    handleAddPlaylist(newPlaylistName);
    setNewPlaylistName('');
  };

  return (
    <div className="sidebar bg-gray-700 h-screen text-white w-1/6">
      <nav>
        <ul>
          <li className="p-4">
            <Link to="/explore" className="hover:text-gray-300">
              Explore
            </Link>
          </li>
          <li className="p-4">
            <h2>Playlists</h2>

            <ul>
              {playlists.map((playlist) => (
                <li key={playlist.id} className="p-2">
                  <Link to={`/playlist/${playlist.id}`} className="hover:text-gray-300">
                    {playlist.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="p-4">
            <div>
              <input
                type="text"
                placeholder="New Playlist"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                className="p-2"
              />
              <button onClick={handleAdd} className="p-2 bg-green-500 text-white rounded">
                Add Playlist
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;





