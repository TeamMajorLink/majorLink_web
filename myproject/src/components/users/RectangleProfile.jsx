import React from 'react';
import styled from 'styled-components';
import font from "../../styles/font";
import color from "../../styles/color";

// import Rectangle from '../../assets/users/profile_rectangle.png';
import ProfileImg from '../../assets/common/back_header_profile_63x63.png';

const RectPro = styled.div`
  position: relative;
  width: 1208px;
  height: 256px; 
  background: ${() => color.gradation_rectangle};
  border-radius: 40px 40px 0px 0px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ProImg = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-right: 20px;
`;

const RectProInfo = styled.div`
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

        <RectPro>
            <ProImg src={ProfileImg} alt="프로필기본이미지" />
            <RectProInfo>
                <Name>링키</Name>
                <Major>컴퓨터학과 전공</Major>
                <Intro>한 줄 소개를 입력하세요</Intro>
            </RectProInfo>

        </RectPro>
    );
}

export default RectangleProfile