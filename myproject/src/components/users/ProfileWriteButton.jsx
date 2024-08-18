import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
import PenIcon from '../../assets/users/pen-icon.png';

const IconImg = styled.img`

`;

const ButtonComponent = styled.button`
  margin: 0;
  /* padding: 8rem 12rem; */

  width: 32.6rem;
  height: 6.4rem;

  border: none;
  border-radius: 0.8rem; //10px로 바꾸기
  background-color: ${() => color.primary_semilight};

  ${() => font.semibold_20};
  color: ${() => color.white};

  cursor: pointer;
`;

function ProfileWriteButton() {
  // const navigate = useNavigate();
  // 아래 이름 변경
  const handleMoveToPagename = () => {
    // navigate(`/login`); // 여기에 경로 수정
  };

  return (
    <ButtonComponent onClick={handleMoveToPagename}>
      작성하기
      <IconImg src={PenIcon} alt="아이콘">아이콘위치수정하기</IconImg>
    </ButtonComponent>
  );
}

export default ProfileWriteButton