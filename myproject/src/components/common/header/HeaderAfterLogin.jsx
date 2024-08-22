import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './Header.Style';
import { HeaderNavigationBar } from './HeaderNavigationBar';
import BookmarkIconPng from '../../../assets/common/header_icon_bookmark_30x30.png';
import MessageIconPng from '../../../assets/common/header_icon_message_30x30.png';
import AlarmIconPng from '../../../assets/common/header_icon_alarm_30x30.png';
import ProgilePng from '../../../assets/common/back_header_profile_63x63.png';

export function HeaderAfterLogin({ authToken }) {
  const navigate = useNavigate();
  // 연동_24.08.22추가 - 실시간 알림
  // 연동_24.08.22추가 - 실시간 알림
  // 연동_24.08.22추가 - 실시간 알림
  const showNotification = (notification) => {
    if (!notification) return;

    const browserNotification = new Notification(
      'majorLink에서 알림이 왔습니다.',
      {
        body: notification.content,
      },
    );

    setTimeout(() => {
      browserNotification.close();
    }, 10 * 1000);

    browserNotification.addEventListener('click', () => {
      // window.open(notification.url, '_blank'); // 알림 클릭 시 링크 열기
      window.open('http://localhost:3000/'); // 알림 클릭 시 링크 열기
    });
  };
  useEffect(() => {
    const fetchNotifications = () => {
      const socket = new EventSource(
        `https://dev.majorlink.store/notification/subscribe/${authToken}`,
      );

      socket.onmessage = (event) => {
        const newNotification = JSON.parse(event.data);
        // 초기 연결 메시지를 무시하도록 필터링
        if (
          typeof newNotification === 'string' &&
          newNotification.includes('EventStream Create')
        ) {
          return;
        }
        // console.log(`event.data 데이터: ${event.data}`);
        // console.log(`소켓 데이터: ${newNotification.content}`);

        // 브라우저 알림 표시
        showNotification(newNotification);
      };

      socket.onerror = (err) => {
        console.error(
          '위 에러(ERR_HTTP2_PROTOCOL_ERROR)는 1분이 지나 알림이 꺼졌다는 내용이니 신경쓰지 않으셔도 됩니다.:',
          err,
        );
        socket.close();
      };

      socket.onclose = () => {
        console.log('알림 connection closed');
      };

      return () => {
        socket.close();
      };
    };

    fetchNotifications();
  }, [authToken]);

  // 네비게이션 수정 예정
  const handleMoveToHome = () => {
    navigate(`/mypage`);
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
