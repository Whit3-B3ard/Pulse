import React from 'react';
import Navigation from '../components/navigation';
import { Routes, Route } from 'react-router-dom';
import App from '../App';

export default function HomeLayout() {
  return (
    <div>
      <Navigation />
      
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      
    </div>
  );
}