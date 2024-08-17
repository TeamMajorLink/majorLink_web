import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage';
import { ClassMatchingPage } from './pages/class/ClassMatchingPage';
import { ClassDetailPage } from './pages/class/ClassDetailPage';
import MyPage from './pages/MyPage/MyPage';
import EditProfile from './pages/MyPage/EditProfile';
import RechargePoints from './pages/MyPage/RechargePoints';
import Posts from './pages/MyPage/Posts';
import Invitation from './pages/MyPage/Invitation';
import Notice from './pages/MyPage/Notice';
import Event from './pages/MyPage/Event';
import Inquiry from './pages/MyPage/Inquiry';
import FindEmail from './pages/Login/FindEmail_number';

import ProfileCard from './pages/users/ProfileCard';
import ProfileCardMake from './pages/users/ProfileCardMake';
import OfferClass from './pages/users/OfferClass';
import OfferedClassList from './pages/users/OfferedClassList';
import OfferedClassModify from './pages/users/OfferedClassModify';
import { ClassApplicationCompletedPage } from './pages/class/ClassApplicationCompletedPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/login-findemail" element={<FindEmail />} />
        <Route path="/class-matching" element={<ClassMatchingPage />} />
        <Route path="/class-detail" element={<ClassDetailPage />} />
=======

        {/* class - 강승현 */}
        <Route path="/class/matching" element={<ClassMatchingPage />} />
        <Route path="/class/detail" element={<ClassDetailPage />} />
        <Route
          path="/class/application-completed"
          element={<ClassApplicationCompletedPage />}
        />

>>>>>>> 7b714f8dbcc2f9417e4b1a3ea42af807eb957dd4
        {/* mypage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/rechargepoints" element={<RechargePoints />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/event" element={<Event />} />
        <Route path="/inquiry" element={<Inquiry />} />

        {/* 수업 개설하기 수정 예정 */}
        <Route path="/users/profile-card" element={<ProfileCardMake />} />
        <Route path="/users/profile-card/:nickname" element={<ProfileCard />} />

        <Route path="/offerclass" element={<OfferClass />} />
        <Route path="/offeredclasslist" element={<OfferedClassList />} />
        <Route
          path="/offeredclassmodify/:class"
          element={<OfferedClassModify />}
        />
      </Routes>
    </BrowserRouter>
  );
}
