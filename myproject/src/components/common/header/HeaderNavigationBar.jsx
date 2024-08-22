import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './Header.Style';
import LogoPng from '../../../assets/common/header_logo_328x98.png';

export function HeaderNavigationBar() {
  const navigate = useNavigate();
  const [isClassPageSelected, setIsClassPageSelected] = useState(false);
  const [isRegistrationPageSelected, setIsRegistrationPageSelected] =
    useState(false);
  const [isMyClassPageSelected, setIsMyClassPageSelected] = useState(false);

  // 네비게이션 - 페이지 이동 & 글자 색깔
  // 경로 추가 & 색변화 수정 예정
  const handleMoveToHome = () => {
    navigate(`/`);
  };
  const handleClassPage = () => {
    navigate(`/class/matching`);
    setIsClassPageSelected(true);
  };
  const handleRegistrationPage = () => {
    navigate(`/users/profile-card`);
    setIsRegistrationPageSelected(true);
  };
  const handleMyClassPage = () => {
    navigate(`/myclass/recruiting`);
    setIsMyClassPageSelected(true);
  };

  return (
    <A.ContainerLeft>
      <A.LogoImgContainer>
        <A.LogoImg onClick={handleMoveToHome} src={LogoPng} alt="majorLink" />
      </A.LogoImgContainer>
      <A.NavigationText
        onClick={handleClassPage}
        selected={isClassPageSelected}
      >
        클래스
      </A.NavigationText>
      <A.NavigationText
        onClick={handleRegistrationPage}
        selected={isRegistrationPageSelected}
      >
        수업 등록하기
      </A.NavigationText>
      <A.NavigationText
        onClick={handleMyClassPage}
        selected={isMyClassPageSelected}
      >
        내 강의실
      </A.NavigationText>
    </A.ContainerLeft>
  );
}
