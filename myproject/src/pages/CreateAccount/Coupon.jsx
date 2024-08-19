import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Footer from "../../components/common/footer";
import font from '../../styles/font';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  background-color: #EDEDED;
`;

const Header = styled.div`
  font-family: Inter;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

const Box = styled.div`
  width: 75%;
  padding: 30px;
  border-radius: 10px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Progress = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: #EDEDED;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 3rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #49BBBD;
  }
`;

const Percentage = styled.span`
  margin-left: 3rem;
  color: #49BBBD; 
  font-weight: bold;
  font-size: 2.7rem;
  margin-top: 2.8%;
`;

const Title = styled.h1`
  font-family: Inter;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  ${() => font.regular_16};
  padding: 0.8rem;
  margin-bottom: 1.4vh;
  border-radius: 8px;
  border: 1px solid #dedddd;
  width: 80%;
  height: 5vh;
  box-sizing: border-box;
  position: relative;
  margin-left: 9vh;
`;

const BlueBox = styled.div`
  display: flex;
  justify-content: center; 

`;

const BoxHeader = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const BoxText = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const InviteBox = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const BoxLabel = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const RedLabel = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;


const ConfirmContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const ConfirmButton = styled.button`
  width: 19vh;
  height: 5vh;
  padding: 1rem;
  background: #49BBBD;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5 3rem; 
  margin-top: 1.5rem;
  margin-left: 9vh;
`;

function Coupon() {
  const navigate = useNavigate();

  const handleConfirm = () => {
      navigate("/createaccount-coupon");
  };
  const invitecode = () => {

  };


  return (
    <div>
      <HeaderComponent />
      <Wrapper>
        <Header>회원가입을 축하합니다!</Header>
        <Box>
          <ProgressContainer>
            <Progress />
            <Percentage>100%</Percentage>
          </ProgressContainer>
            <presentIcon/>
            <Title>회원가입을 축하 30000포인트를 지급해드립니다.</Title>
            <BlueBox>
                <BoxHeader>추가 쿠폰을 받고 싶다면?</BoxHeader>
                <BoxText>초대 코드 입력 시 친구와 나  모두에게 10000포인트를 선물로 드려요</BoxText>
                <InviteBox>
                    <BoxLabel>친구 초대 코드</BoxLabel>
                    <Input 
                    type="text" 
                    placeholder="친구 초대 코드를 입력해주세요" 
                    value={invitecode}
                    />
                    <RedLabel>초대 코드 입력 시 10000포인트 지급</RedLabel>
                </InviteBox>
            </BlueBox>
            <ConfirmContainer>
              <ConfirmButton onClick={handleConfirm}>다음</ConfirmButton>
            </ConfirmContainer>
        </Box>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Coupon;
