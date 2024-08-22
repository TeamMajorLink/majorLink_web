import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
import PenIcon from '../../assets/users/pen-icon.png';

const IconImg = styled.img`
  margin: 0;
  width: 2.4rem;
  height: 2.4rem;
`;

const ButtonComponent = styled.button`
  margin: 0;
  /* padding: 8rem 12rem; */

  width: 17.6rem;
  height: 5.8rem;

  border: none;
  border-radius: 1rem; //10px로 바꾸기
  background-color: ${() => color.primary_semilight};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${() => font.semibold_20};
  color: ${() => color.white};

  cursor: pointer;
`;

function ProfileWriteButton() {
  const navigate = useNavigate();
  // 아래 이름 변경
  const handleMoveToPagename = () => {
    navigate(`/users/profile-card`); // 여기에 경로 수정
  };

  return (
    <ButtonComponent onClick={handleMoveToPagename}>
      <IconImg src={PenIcon} alt="아이콘" />
      작성하기
    </ButtonComponent>
  );
}

export default ProfileWriteButton