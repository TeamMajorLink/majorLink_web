import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { ClassMatchingPage } from './pages/ClassMatchingPage';
import MyPage from './pages/MyPage/MyPage';
import EditProfile from './pages/MyPage/EditProfile';
import RechargePoints from './pages/MyPage/RechargePoints';
import Posts from './pages/MyPage/Posts';
import Invitation from './pages/MyPage/Invitation';
import Notice from './pages/MyPage/Notice';
import Event from './pages/MyPage/Event';
import Inquiry from './pages/MyPage/Inquiry';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/class-matching" element={<ClassMatchingPage />} />
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/editprofile' element={<EditProfile />}/>
        <Route path='/rechargepoints' element={<RechargePoints/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/invitation' element={<Invitation/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/inquiry' element={<Inquiry/>}/>
      </Routes>
    </BrowserRouter>
  );
}
