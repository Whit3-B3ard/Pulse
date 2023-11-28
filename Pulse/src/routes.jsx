import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import Navigation from './components/navigation';
import NewsLetter from './pages/newsLetter';
import RegistrationForm from './pages/registrationForm';
import SignIn from './pages/signIn';
import Contact from './pages/contact';
import Sidebar from './components/sidebar';
import Playlist from './pages/playlist';
import Explore from './pages/explore';

export default function RoutesContainer() {
  const [allPlaylists, setAllPlaylists] = useState([]);

  const handleAddPlaylist = (newPlaylistName) => {
    if (newPlaylistName.trim() === '') {
      // Don't add empty playlist names
      return;
    }

    // Generate a unique ID for the new playlist (you may need a more robust solution)
    const newPlaylistId = Date.now().toString();

    // Create a new playlist object
    const newPlaylist = {
      id: newPlaylistId,
      name: newPlaylistName,
      owner: 'User', // You can customize the owner information
      songs: [], // Initially, the playlist has no songs
    };

    // Update the state to include the new playlist
    setAllPlaylists([...allPlaylists, newPlaylist]);
  };

  const playlistRoutes = allPlaylists.map((playlist) => (
    <Route key={playlist.id} path={`/playlist/${playlist.id}`} element={<Playlist playlist={playlist} />} />
  ));

  return (
    <BrowserRouter>
      <Navigation />
      <div className="flex">
        <Sidebar playlists={allPlaylists} handleAddPlaylist={handleAddPlaylist} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/newsLetter" element={<NewsLetter />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            {playlistRoutes}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
