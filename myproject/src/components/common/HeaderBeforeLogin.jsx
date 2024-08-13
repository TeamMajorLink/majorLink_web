import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
import LogoPng from '../../assets/common/header_logo_328x98.png';

const Container = styled.div`
  margin: 0;
  height: 16.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 32.8rem;
  height: 9.8rem;

  border: none;
  cursor: pointer;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const NavigationText = styled.p`
  margin: 0 1.2rem 0 3.2rem;
  padding: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.selected ? () => font.semibold_22 : () => font.regular_22};

  color: ${(props) =>
    props.selected ? () => color.primary_dark : () => color.black};

  cursor: pointer;
`;

export function HeaderBeforeLogin() {
  const navigate = useNavigate();
  const [isClassPageSelected, setIsClassPageSelected] = useState(false);
  const [isRegistrationPageSelected, setIsRegistrationPageSelected] =
    useState(false);
  const [isMyClassPageSelected, setIsMyClassPageSelected] = useState(false);

  // 네비게이션 - 페이지 이동 & 글자 색깔
  const handleMoveToHome = () => {
    navigate(`/`);
  };
  const handleClassPage = () => {
    navigate(`/class-matching`);
    setIsClassPageSelected(true);
  };
  const handleRegistrationPage = () => {
    setIsRegistrationPageSelected(true);
  };
  const handleMyClassPage = () => {
    setIsMyClassPageSelected(true);
  };

  return (
    <Container>
      <LogoImgContainer>
        <LogoImg onClick={handleMoveToHome} src={LogoPng} alt="majorLink" />
      </LogoImgContainer>
      <NavigationText onClick={handleClassPage} selected={isClassPageSelected}>
        클래스
      </NavigationText>
      <NavigationText
        onClick={handleRegistrationPage}
        selected={isRegistrationPageSelected}
      >
        수업 등록하기
      </NavigationText>
      <NavigationText
        onClick={handleMyClassPage}
        selected={isMyClassPageSelected}
      >
        내 강의실
      </NavigationText>
    </Container>
  );
}
