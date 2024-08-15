import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './Header.Style';
import { HeaderNavigationBar } from './HeaderNavigationBar';

export function HeaderBeforeLogin() {
  const navigate = useNavigate();

  // 네비게이션 수정 예정
  const handleMoveToHome = () => {
    navigate(`/login`);
  };

  return (
    <A.HeaderContainer>
      <HeaderNavigationBar />
      <A.ContainerRight>
        <A.LogInText onClick={handleMoveToHome}>로그인</A.LogInText>
        <A.SignUpText onClick={handleMoveToHome}>회원가입</A.SignUpText>
      </A.ContainerRight>
    </A.HeaderContainer>
  );
}
