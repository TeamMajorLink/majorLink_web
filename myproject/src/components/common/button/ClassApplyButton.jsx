import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

const ButtonComponent = styled.button`
  margin: 0;
  /* padding: 8rem 12rem; */

  width: 32.6rem;
  height: 6.4rem;

  border: none;
  border-radius: 0.8rem;
  background-color: ${() => color.primary_normal};

  ${() => font.bold_20};
  color: ${() => color.white};

  cursor: pointer;
`;

export function ClassApplyButton() {
  const navigate = useNavigate();
  // 아래 이름 변경
  const handleMoveToPagename = () => {
    navigate(`/login`); // 여기에 경로 수정
  };

  return (
    <ButtonComponent onClick={handleMoveToPagename}>
      수업 신청하기
    </ButtonComponent>
  );
}
