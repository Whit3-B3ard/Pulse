import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/homeLayout';
import MainLayout from './layouts/mainLayout';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}