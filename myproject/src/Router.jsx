import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
// import App from './App';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
