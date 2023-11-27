import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Navigation from './components/navigation';
import NewsLetter from './pages/newsLetter';
import RegistrationForm from './pages/registrationForm';
import SignIn from './pages/signIn';
import Contact from './pages/contact';


export default function routes() {

  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
    
        <Route path='/' element={<App />}/>
        <Route path="/newsLetter" element={<NewsLetter />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
     </>
  )
}
