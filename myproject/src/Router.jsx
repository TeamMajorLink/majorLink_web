import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
import { ClassMatchingPage } from './pages/ClassMatchingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/class-matching" element={<ClassMatchingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
