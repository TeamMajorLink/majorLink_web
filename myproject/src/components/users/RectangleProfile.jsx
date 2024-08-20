import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

import ProfileImg from '../../assets/common/profile_default_125x125.png';

const RectContainer = styled.div`
  position: relative;
  margin: 0 0 4.3rem 0;
  width: 120.8rem;
  height: 25.6rem;
  display: flex; // 현재 무시되고 있음...
  align-items: center; // 현재 무시되고 있나?...
  justify-content: flex-start; /* 가로 축에서 왼쪽 정렬 */ 
  background: ${() => color.gradation_rectangle};
  border-radius: 4rem 4rem 0 0;
  padding: 2rem;
  display: flex;
`;

const ProImg = styled.img`
  // position: absolute;
  // top: 82px;
  // left: 98px;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  margin-left: 9.8rem;
`;

const RectProInfo = styled.div`
  // position: absolute;
  // top:
  // left:
  margin: 0 0 0 9.4rem;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font: ${() => font.semibold_48};
  color: ${() => color.white};
  margin: 0;
`;

const Major = styled.p`
  font: ${() => font.semibold_24};
  color: ${() => color.white};
  margin: 0;
`;

const Intro = styled.p`
  font: ${() => font.regular_16};
  color: ${() => color.white};
  margin-top: 1rem;
`;

function RectangleProfile() {
    return (

        <RectContainer>
            <ProImg src={ProfileImg} alt="프로필기본이미지" />
            <RectProInfo>
                <Name>링키</Name>
                <Major>컴퓨터학과 전공</Major>
                <Intro>한 줄 소개를 입력하세요</Intro>
            </RectProInfo>

        </RectContainer>
    );
}

export default RectangleProfile