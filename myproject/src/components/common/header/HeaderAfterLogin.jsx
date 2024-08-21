import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as A from './Header.Style';
import { HeaderNavigationBar } from './HeaderNavigationBar';
import BookmarkIconPng from '../../../assets/common/header_icon_bookmark_30x30.png';
import MessageIconPng from '../../../assets/common/header_icon_message_30x30.png';
import AlarmIconPng from '../../../assets/common/header_icon_alarm_30x30.png';
import ProgilePng from '../../../assets/common/back_header_profile_63x63.png';

export function HeaderAfterLogin({ authToken }) {
  const navigate = useNavigate();
  // const [notifications, setNotifications] = useState([]);
  // console.log(authToken(헤더 알림): ${authToken});

  // 브라우저 알림 표시
  const showNotification = (notification) => {
    if (!notification) return; // notification 데이터가 없으면 리턴

    const browserNotification = new Notification(
      'HeaderAfterLogin.jsx에서 보내는 알림',
      {
        body: notification.content, // 알림 내용 표시
      },
    );

    setTimeout(() => {
      browserNotification.close();
    }, 10 * 1000);

    browserNotification.addEventListener('click', () => {
      window.open(notification.url, '_blank'); // 알림 클릭 시 링크 열기
    });
  };

  // 알림 연동
  useEffect(() => {
    const fetchNotifications = () => {
      // WebSocket을 사용하여 실시간 알림 처리
      const socket = new EventSource(
        `https://dev.majorlink.store/notification/subscribe/${authToken}`,
      );

      socket.onmessage = (event) => {
        const newNotification = JSON.parse(event.data);
        console.log(`소켓 데이터: ${newNotification.content}`);

        // 브라우저 알림 표시
        showNotification(newNotification);
      };

      socket.onerror = (err) => {
        console.error('WebSocket 에러:', err);
        socket.close(); // 오류 발생 시 연결을 닫습니다.
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed');
      };

      // 컴포넌트 언마운트 시 WebSocket 연결 종료
      return () => {
        socket.close();
      };
    };

    fetchNotifications();
  }, [authToken]);
  // console.log(notifications);

  // notifications.forEach((notification) => {
  //   console.log('여기 notification 데이터 내용');
  //   console.log(`id: ${notification.id}`);
  //   console.log(`receiver: ${notification.receiver}`);
  //   console.log(`sender: ${notification.sender}`);
  //   console.log(`content: ${notification.content}`);
  //   console.log(`lectureId: ${notification.lectureId}`);
  //   console.log(`createdAt: ${notification.createdAt}`);
  // });

  // 네비게이션 수정 예정
  const handleMoveToHome = () => {
    navigate(`/login`);
  };
  const handleMoveToMyPage = () => {
    navigate(`/mypage`);
  };

  return (
    <A.HeaderContainer>
      <HeaderNavigationBar />
      <A.ContainerRight>
        <A.IconContainer onClick={handleMoveToHome}>
          <A.IconImg src={BookmarkIconPng} alt="img" />
        </A.IconContainer>
        <A.IconContainer onClick={handleMoveToHome}>
          <A.IconImg src={MessageIconPng} alt="img" />
        </A.IconContainer>
        <A.IconContainer onClick={handleMoveToHome}>
          <A.IconImg src={AlarmIconPng} alt="img" />
        </A.IconContainer>
        {/* 프로필 이미지 수정 예정 */}
        <A.ProfileContainer onClick={handleMoveToMyPage}>
          <A.ProfileImg src={ProgilePng} alt="img" />
        </A.ProfileContainer>
      </A.ContainerRight>
    </A.HeaderContainer>
  );
}
