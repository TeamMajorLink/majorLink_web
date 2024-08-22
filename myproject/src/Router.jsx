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
import RecruitClass from './pages/myClass/tutee/RecruitClass';
import RecruitDetailClass from './pages/myClass/tutee/RecruitDetailClass';
import ReviewList from './pages/myClass/review/ReviewList';
import ReviewForm from './pages/myClass/review/ReviewForm';
import ReviewDetail from './pages/myClass/review/ReviewDetail';
import MoveToOnlineClass from './pages/myClass/MoveToOnlineClass';
import CancelClass from './pages/myClass/tutee/CancelClass';
import DoingClass from './pages/myClass/tutee/DoingClass';
import DoingDetailClass from './pages/myClass/tutee/DoingDetailClass';
import DoneClass from './pages/myClass/tutee/DoneClass';
import TutorRecruitClass from './pages/myClass/tutor/TutorRecruitClass';
import TutorRecruitDetailClass from './pages/myClass/tutor/TutorRecruitDetailClass';
import TutorCancelClass from './pages/myClass/tutor/TutorCancelClass';
import TutorDoingClass from './pages/myClass/tutor/TutorDoingClass';
import TutorDoingDetailClass from './pages/myClass/tutor/TutorDoingDetailClass';
import TutorDoneClass from './pages/myClass/tutor/TutorDoneClass';
import LectureLikeButton from './pages/apiTest/DDClassLikeButton';
import NotificationSubscribe from './apis/getNotificationSubscribe';
import PostNotification from './pages/apiTest/DDPostNotification';
import { HeaderComponentNNN } from './components/common/header/HeaderComponentNNN';
import { HeaderComponent } from './components/common/header/HeaderComponent';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* api 연동 테스트 - 삭제 예정!! */}
        <Route path="/api-test/create" element={<ApiTestCreatePage />} />
        <Route path="/api-test/read" element={<ApiTestReadPage />} />
        <Route path="/dd" element={<LectureLikeButton />} />
        <Route path="/header" element={<HeaderComponent />} />

        {/* 알림 연동 - 구독, 수강신청, 알림 받기 */}
        <Route path="/headerNNN" element={<HeaderComponentNNN />} />
        <Route path="/notc" element={<PostNotification />} />
        <Route
          path="/notification-subscribe"
          element={<NotificationSubscribe />}
        />
        {/* 소셜로그인 연동 */}
        <Route path="/new-user" element={<EnterBasicInfo />} />
        <Route path="/member" element={<HomePage />} />

        {/* 홈 */}
        <Route path="/" element={<HomePage />} />
        {/* 로그인 */}
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
        {/* 회원가입 */}
        <Route
          path="/createaccount-enterbasicinfo"
          element={<EnterBasicInfo />}
        />
        <Route
          path="/createaccount-enterrequiredinfo"
          element={<EnterRequiredInfo />}
        />
        <Route path="/createaccount-coupon" element={<Coupon />} />

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
        <Route path="/users/profile-card/nickname" element={<ProfileCard />} />
        <Route path="/users/profile-card" element={<ProfileCardMake />} />

        <Route path="/offerclass" element={<OfferClass />} />
        <Route path="/offeredclasslist" element={<OfferedClassList />} />
        <Route
          path="/offeredclassmodify/:class"
          element={<OfferedClassModify />}
        />

        {/* 내 강의실 */}
        {/* 내 강의실 */}
        {/* 내 강의실 */}
        <Route path="/myclass/recruiting" element={<RecruitClass />} />
        <Route
          path="/myclass/recruiting/:id"
          element={<RecruitDetailClass />}
        />
        <Route path="/myclass/cancel" element={<CancelClass />} />
        <Route path="/myclass/cancel/:id" element={<RecruitDetailClass />} />

        <Route path="/myclass/doing" element={<DoingClass />} />
        <Route path="/myclass/doing/:id" element={<DoingDetailClass />} />
        <Route path="/myclass/done" element={<DoneClass />} />
        <Route path="/myclass/done/:id" element={<DoingDetailClass />} />

        <Route
          path="/myclass-tutor/recruiting"
          element={<TutorRecruitClass />}
        />
        <Route
          path="/myclass-tutor/recruiting/:id"
          element={<TutorRecruitDetailClass />}
        />
        <Route path="/myclass-tutor/cancel" element={<TutorCancelClass />} />
        <Route
          path="/myclass-tutor/cancel/:id"
          element={<TutorRecruitDetailClass />}
        />

        <Route path="/myclass-tutor/doing" element={<TutorDoingClass />} />
        <Route
          path="/myclass-tutor/doing/:id"
          element={<TutorDoingDetailClass />}
        />
        <Route path="/myclass-tutor/done" element={<TutorDoneClass />} />
        <Route
          path="/myclass-tutor/done/:id"
          element={<TutorDoingDetailClass />}
        />

        <Route path="/myclass/review-list" element={<ReviewList />} />
        <Route path="/myclass/review-list/:id" element={<ReviewDetail />} />
        <Route path="/myclass/review-form" element={<ReviewForm />} />

        <Route
          path="/myclass/movetoonlineclass"
          element={<MoveToOnlineClass />}
        />
      </Routes>
    </BrowserRouter>
  );
}
