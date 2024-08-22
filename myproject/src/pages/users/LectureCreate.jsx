import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Sidebar from './Sidebar';
import ProfileTitle from '../../components/users/ProfileTitle';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;


  .sidebar{
    margin: 19.8rem 0 8.4rem 20rem;
  }
  .status{
    margin-top: 2.9rem;
    vertical-align: bottom;
  }
`;

const ClassContainer = styled.div`
  // display: flex;
  margin: 29.7rem 19.8rem 0 8.4rem;
  // margin-right(8.4): 임의

`;

const Title = styled.p`
  font: ${() => font.semibold_36};
  color: ${() => color.black};
  //margin: 4.8rem 0 3.3rem 5.3rem;
`;

const Subhead = styled.p`
  font: ${() => font.semibold_24};
  width: 14.9rem;
  margin: 4.8rem 6.3rem 3.3rem 5.3rem;
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */


  .color{
    color: ${() => color.primary_dark};
  }
  .black{
    color: ${() => color.black};
  }
`;






const Line = styled.hr`

`;

function OfferClass() {
    return (
        <>
            <HeaderComponent />
            <Container>
                <Sidebar />

                <ClassContainer>
                    <Title>강의계획서</Title>
                    <ProfileTitle title='클래스 소개' />
                    <Subhead className='color'>기본 정보</Subhead>

                    <Subhead className='black'>클래스명</Subhead>
                    <Subhead className='black'>카테고리{">"}전공분야</Subhead>
                    <Subhead className='black'>클래스 레벨</Subhead>
                    <Subhead className='black'>수업 개요</Subhead>
                    <Subhead className='black'>태그</Subhead>
                    <Subhead className='black'>클래스 썸네일</Subhead>
                    <Line />



                    <Subhead className='color'>클래스 운영</Subhead>

                    <Subhead className='black'>클래스 상세 소개</Subhead>
                    <Subhead className='black'>참여인원</Subhead>
                    <Subhead className='black'>희망 시작일</Subhead>
                    <Subhead className='black'>희망 시간 및 요일</Subhead>


                    
                    <ProfileTitle title='커리큘럼' />
                    <Subhead className='black'>회차</Subhead>
                    <Subhead className='black'>커리큘럼</Subhead>



                    <ProfileTitle title='튜터 소개' />



                    <ProfileTitle title='클래스 설정' />
                    <Subhead className='black'>공개 여부</Subhead>
                    <Subhead className='black'>수업 링크</Subhead>



                </ClassContainer>
            </Container>
        </>
    );
}

export default OfferClass