import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { ClassMatchingPage } from './pages/ClassMatchingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/class-matching" element={<ClassMatchingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
