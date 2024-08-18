import React from 'react';
import styled from 'styled-components';
// import font from "../../styles/font";
// import color from "../../styles/color";
// import HeaderComponent from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import RectangleProfile from '../../components/users/RectangleProfile';




const ProfileStatus = styled.div`

`;

const ProfileStatusBar = styled.div`
// 몰라 피그마에서 div래
// #A3A3A3, 네 모서리 둥글게
`;

const ProfileWriteBtn = styled.button`
`;

const Line = styled.hr`
// 따로 만들어야 할 듯 근데 이게맞나?...
// 7px #2EE8E8
`;

function ProfileCard() {
    return (
        <>
            {/* <HeaderComponent /> */}
            {/* 사이드바 */}
            <RectangleProfile />




            <ProfileStatus>
                h2 프로필 완성도 / 작게 프로필 100% 완성 시 포인트를 지급해드립니다.
                <ProfileStatusBar />
                <ProfileStatusBar />
                <ProfileStatusBar />
                <ProfileStatusBar />
                <ProfileStatusBar />
                20%
            </ProfileStatus>



            <ProfileWriteBtn />



            <Line />
            {/* 제목 */}
            {/* 내용 - 없으면 공란 */}

            <Line />
            {/* 제목 */}
            {/* 내용 - 없으면 공란 */}

            <Line />
            {/* 제목 */}
            {/* 내용 - 없으면 공란 */}

            <Line />
            {/* 제목 */}
            {/* 내용 - 없으면 공란 */}

            <Line />
            {/* 제목 */}
            {/* 내용 - 없으면 공란 */}

            <Footer />
            
        </>
    );
}

export default ProfileCard