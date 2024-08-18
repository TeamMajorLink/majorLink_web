import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import RectangleProfile from '../../components/users/RectangleProfile';
import ProfileStatus from '../../components/users/ProfileStatus';
// import ProfileWriteButton from '../../components/users/ProfileWriteButton';

const Line = styled.hr`
  display: flex;
  width: 1208px;
  border: 7px solid ${() => color.line};
`;

const Title = styled.p`
  font: ${() => font.semibold_28};
  color: ${() => color.primary_dark};
  text-align: start;
  margin-bottom: 8px;
`;

function ProfileCard() {
    return (
        <>
            <HeaderComponent />

            {/* 사이드바 */}

            <RectangleProfile />

            <ProfileStatus />



            {/* <ProfileWriteButton /> */}



            <Line />
            <Title>자기소개</Title>
            {/* 내용 - 없으면 공란 */}

            <Line />
            <Title>학력 및 교육</Title>
            {/* 내용 - 없으면 공란 */}

            <Line />
            <Title>활동 프로젝트</Title>
            {/* 내용 - 없으면 공란 */}

            <Line />
            <Title>보유 기술</Title>
            {/* 내용 - 없으면 공란 */}

            <Line />
            <Title>포트폴리오</Title>
            {/* 내용 - 없으면 공란 */}

            <Footer />
            
        </>
    );
}

export default ProfileCard