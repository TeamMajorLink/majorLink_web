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
import FindPWNumber from './pages/Login/FindPW_number';
import ChangePW from './pages/Login/ChangePW';
import ChangePWCompleted from './pages/Login/ChangePWCompleted';
import ShowEmail from './pages/Login/ShowEmail';
import FindPW from './pages/Login/FindPW';
import Coupon from './pages/CreateAccount/Coupon';
import EnterBasicInfo from './pages/CreateAccount/EnterBasicInfo';
import EnterRequiredInfo from './pages/CreateAccount/EnterRequiredInfo';
import ProfileCard from './pages/users/ProfileCard';
import ProfileCardMake from './pages/users/ProfileCardMake';
import OfferClass from './pages/users/OfferClass';
import OfferedClassList from './pages/users/OfferedClassList';
import OfferedClassModify from './pages/users/OfferedClassModify';
import { ClassApplicationPage } from './pages/class/ClassApplicationPage';
import { ClassApplicationCompletedPage } from './pages/class/ClassApplicationCompletedPage';
import { ApiTestReadPage } from './pages/apiTest/ApiTestReadPage';
import { ApiTestCreatePage } from './pages/apiTest/ApiTestCreatePage';
// import { ApiTestProgilePage } from './pages/apiTest/ApiTestProfilePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>3
        {/* api 연동 테스트 - 삭제 예정!! */}
        <Route path="/api-test/create" element={<ApiTestCreatePage />} />
        <Route path="/api-test/read" element={<ApiTestReadPage />} />
        {/* <Route
          path="/api-test/login-profile"
          element={<ApiTestProgilePage />}
        /> */}
        <Route path="/naver" element={<FindEmail />} />
        <Route path="/signup" element={<FindEmail />} />
        {/* 여기 회원가입 페이지 */}
        <Route path="/new-user" element={<FindEmail />} />

        {/* home, sign-in, sign-up */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-findemail" element={<FindEmail />} />
        <Route path="/login-showemail" element={<ShowEmail />} />
        <Route path="/login-findpw" element={<FindPW />} />
        <Route path="/login-findpw_number" element={<FindPWNumber />} />
        <Route path="/login-changepw" element={<ChangePW />} />
        <Route
          path="/login-changepwcompleted"
          element={<ChangePWCompleted />}
        />

        <Route path="/createaccount-coupon" element={<Coupon />} />
        <Route path="/createaccount-enterbasicinfo" element={<EnterBasicInfo />} />
        <Route path="/createaccount-enterrequiredinfo" element={<EnterRequiredInfo />} />
        
        {/* class - 강승현 */}
        <Route path="/class/matching" element={<ClassMatchingPage />} />
        <Route path="/class/detail" element={<ClassDetailPage />} />
        <Route path="/class/application" element={<ClassApplicationPage />} />
        <Route
          path="/class/application-completed"
          element={<ClassApplicationCompletedPage />}
        />
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
        <Route path="/users/profile-card/nickname" element={<ProfileCard />} />

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
