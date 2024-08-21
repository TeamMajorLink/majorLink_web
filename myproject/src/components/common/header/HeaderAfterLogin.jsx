import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as A from './Header.Style';
import { HeaderNavigationBar } from './HeaderNavigationBar';
import BookmarkIconPng from '../../../assets/common/header_icon_bookmark_30x30.png';
import MessageIconPng from '../../../assets/common/header_icon_message_30x30.png';
import AlarmIconPng from '../../../assets/common/header_icon_alarm_30x30.png';
import ProgilePng from '../../../assets/common/back_header_profile_63x63.png';

export function HeaderAfterLogin({ authToken }) {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  // console.log(`authToken(헤더 알림): ${authToken}`);

  // 알림 연동
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          'https://dev.majorlink.store/notification',
          {
            headers: {
              'X-AUTH-TOKEN': authToken,
            },
          },
        );
        const notificationsData = response.data;
        console.log(notificationsData);

        setNotifications(notificationsData);

        // 브라우저 알림 권한
        const showNotification = (notification) => {
          const browserNotification = new Notification(
            'majorLink에서 알림이 왔습니다.',
            {
              body: notification.content,
              // body: response.data.content,
            },
          );

          setTimeout(() => {
            browserNotification.close();
          }, 10 * 1000);

          browserNotification.addEventListener('click', () => {
            window.open(notification.url, '_blank');
          });
        };

        // 브라우저 알림 허용 권한
        let granted = false;

        if (Notification.permission === 'granted') {
          granted = true;
        } else if (Notification.permission !== 'denied') {
          const permission = await Notification.requestPermission();
          granted = permission === 'granted';
        }

        // 알림 보여주기
        if (granted && Array.isArray(notificationsData)) {
          notificationsData.forEach((notification) => {
            showNotification(notification);
          });
        }
      } catch (error) {
        console.error('알림(header get요청코드) 에러났어요~~', error);
      }
    };

    fetchNotifications();
  }, []);
  console.log(notifications);

  notifications.forEach((notification) => {
    console.log('여기 notification 데이터 내용');
    console.log(`id: ${notification.id}`);
    console.log(`receiver: ${notification.receiver}`);
    console.log(`sender: ${notification.sender}`);
    console.log(`content: ${notification.content}`);
    console.log(`lectureId: ${notification.lectureId}`);
    console.log(`createdAt: ${notification.createdAt}`);
  });

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
        {/* {notifications.map((notification) => (
          <li key={notification.id}>
            <p>
              <strong>Receiver:</strong> {notification.receiver}
            </p>
            <p>
              <strong>Sender:</strong> {notification.sender}
            </p>
            <p>
              <strong>Content:</strong> {notification.content}
            </p>
            <p>
              <strong>lectureId:</strong> {notification.lectureId}
            </p>
            <p>
              <strong>Created At:</strong>{' '}
              {new Date(notification.createdAt).toLocaleString()}
            </p>
          </li>
        ))} */}
        {/* 프로필 이미지 수정 예정 */}
        <A.ProfileContainer onClick={handleMoveToMyPage}>
          <A.ProfileImg src={ProgilePng} alt="img" />
        </A.ProfileContainer>
      </A.ContainerRight>
    </A.HeaderContainer>
  );
}
