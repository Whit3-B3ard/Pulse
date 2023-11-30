import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/homeLayout';
import MainLayout from './layouts/mainLayout';
import App from './App';
import RegistrationForm from './pages/registrationForm';
import SignIn from './pages/signIn';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
        <Route path="/" element={<App />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path='/signin' element={<SignIn />} />
          </Route>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
