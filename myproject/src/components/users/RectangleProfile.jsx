import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

import ProfileImg from '../../assets/common/profile_default_125x125.png';

const RectContainer = styled.div`
  position: relative;
  width: 1208px;
  height: 256px;
  display: flex; // 현재 무시되고 있음...
  align-items: center; // 현재 무시되고 있음...
  justify-content: flex-start; /* 가로 축에서 왼쪽 정렬 */ 
  background: ${() => color.gradation_rectangle};
  border-radius: 40px 40px 0px 0px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ProImg = styled.img`
  // position: absolute;
  // top: 82px;
  // left: 98px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-left: 98px;
`;

const RectProInfo = styled.div`
  // position: absolute;
  // top:
  // left:
  margin-left: 94px;
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
  margin-top: 10px;
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