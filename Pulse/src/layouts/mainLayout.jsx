import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/navigation';
import Sidebar from '../components/sidebar';
import { Routes, Route } from 'react-router-dom';
import NewsLetter from '../pages/newsLetter';
import RegistrationForm from '../pages/registrationForm';
import SignIn from '../pages/signIn';
import Contact from '../pages/contact';
import Explore from '../pages/explore';
import Playlist from '../pages/playlist';
import PlaylistFeatured from '../pages/playlistFeatured';
import EditProfile from '../pages/editProfile';
import Genres from '../pages/genres';

export default function MainLayout() {
  const location = useLocation();
  const isLandingOrNewsletter = location.pathname === '/' || location.pathname === '/newsLetter';

  return (
    <>
    <Navigation />
    <div className="flex bg-gray-800 bg-opacity-[20%]">
      {!isLandingOrNewsletter && <Sidebar />}
      <div className="flex-1 bg-gradient-to-b from-[#1A1A1A] to-black">
        
        <Routes>
          <Route path="/newsLetter" element={<NewsLetter />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/mock" element={<PlaylistFeatured />} />
          <Route path="/playlistF/:id" element={<PlaylistFeatured />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </div>
    </div>
    </>
  );
}