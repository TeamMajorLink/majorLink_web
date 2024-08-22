import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Sidebar from './Sidebar';

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

function OfferClass() {
    return (
        <>
            <HeaderComponent />
            <Container>
                <Sidebar />

                <ClassContainer>
                    <Title>강의계획서</Title>
                </ClassContainer>
            </Container>
        </>
    );
}

export default OfferClass