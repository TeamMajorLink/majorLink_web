import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Sidebar from './Sidebar';
import OfferedClassTable from '../../components/users/OfferedClassTable';

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

// const Line = styled.hr`
//   display: flex;
//   width: 120.8rem;
//   margin: 5rem 0 2.3rem 0; // 위쪽: 미정입니다...
//   border: 0.7rem solid ${() => color.primary_normal};
// `;

function OfferClass() {
    return (
        <>
            <HeaderComponent />

            <Container className='sidebar'>
                <Sidebar />

                <ClassContainer>
                  <Container>
                    <Title>개설 클래스</Title>
                      {/* 클래스 만들기 버튼 - 추가하기 */}
                    <button type='button'>+ 클래스 만들기</button>  
                  </Container>
                  {/* <Line /> */}
                  <OfferedClassTable />
                </ClassContainer>
            </Container>
        </>
    );
}

export default OfferClass