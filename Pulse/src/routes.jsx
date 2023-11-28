import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Navigation from './components/navigation';
import NewsLetter from './pages/newsLetter';
import RegistrationForm from './pages/registrationForm';
import SignIn from './pages/signIn';
import Contact from './pages/contact';
import Sidebar from './components/sidebar';
import Explore from './pages/explore';

export default function RoutesContainer() {
  
  return (
    <BrowserRouter>
      <Navigation />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/newsLetter" element={<NewsLetter />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}