import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navigation from "./components/navigation";
import NewsLetter from "./pages/newsLetter";
import RegistrationForm from "./pages/registrationForm";
import SignIn from "./pages/signIn";
import Contact from "./pages/contact";
import Sidebar from "./components/sidebar";
import Explore from "./pages/explore";
import Playlist from "./pages/playlist";
import PlaylistFeatured from "./pages/playlistFeatured";
import EditProfile from './pages/editProfile'

const RoutesContainer = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="flex bg-gray-800 bg-opacity-[20%]">
        <Sidebar />
        <div className="flex-1 bg-gradient-to-b from-[#1A1A1A] to-black">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/newsLetter" element={<NewsLetter />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlistF/:id" element={<PlaylistFeatured />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RoutesContainer;

