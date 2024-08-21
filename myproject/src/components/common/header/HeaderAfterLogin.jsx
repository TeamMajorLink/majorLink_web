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
  // 로그 삭제
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
        setNotifications(response.data);
      } catch (error) {
        console.error('알림(header get요청코드) 에러났어요~~', error);
      }
    };

    fetchNotifications();
  }, []);
  notifications.forEach((notification) => {
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
        {notifications.map((notification) => (
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
        ))}
        {/* 프로필 이미지 수정 예정 */}
        <A.ProfileContainer onClick={handleMoveToMyPage}>
          <A.ProfileImg src={ProgilePng} alt="img" />
        </A.ProfileContainer>
      </A.ContainerRight>
    </A.HeaderContainer>
  );
}
