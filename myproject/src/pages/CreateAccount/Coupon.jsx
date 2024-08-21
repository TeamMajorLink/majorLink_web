import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Footer from "../../components/common/footer";
import font from '../../styles/font';
import couponImg from '../../assets/class/coupon_icon.png';

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

const Image = styled.img`
  width: 10%;
  height: 10%;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
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
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  position: relative;
  width: 95%;
  margin-bottom: 1.4vh;
`;

const Input = styled.input`
  ${() => font.regular_16};
  padding: 0.8rem;
  padding-right: 4rem;  // Add extra padding to make space for the button inside
  border-radius: 8px;
  border: 1px solid #dedddd;
  width: 100%;
  font-size: 1rem;
  height: 5vh;
  box-sizing: border-box;
`;

const ButtonInsideInput = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background-color: #49BBBD;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  height: 3.5vh;
`;

const BlueBox = styled.div`
  width: 50%;
  padding: 30px;
  border-radius: 10px;
  background-color: #C8EEEC;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const BoxHeader = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  margin-top: 1rem;
  justify-content: center; 
  font-weight: bold;
  ${() => font.bold_20};
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center; 
  ${() => font.regular_12};
  font-weight: bold;
`;

const InviteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15vw;
  height: 8vw;
  font-weight: bold;
`;

const BoxLabel = styled.div`
  ${() => font.regular_12};
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-items: left; 
  font-weight: bold;
`;

const RedLabel = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: center; 
  color:red;
`;

const ConfirmContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center; 
`;

const ConfirmButton = styled.button`
  width: 19vw;
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
`;

function Coupon() {
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState('');

  const handleConfirm = () => {
    navigate("/");
  };

  const handleInviteCodeChange = (e) => {
    setInviteCode(e.target.value);
  };

  const sendInviteCode = () => {
    console.log("Invite code sent:", inviteCode);
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
          <Image src={couponImg} width="100%" />
          <Title>회원가입을 축하 30000포인트를 지급해드립니다.</Title>
          <BlueBox>
            <BoxHeader>추가 쿠폰을 받고 싶다면?</BoxHeader>
            <BoxText>초대 코드 입력 시 친구와 나 모두에게 10000포인트를 선물로 드려요</BoxText>
            <InviteBox>
              <BoxLabel>친구 초대 코드</BoxLabel>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="친구 초대 코드를 입력해주세요"
                  value={inviteCode}
                  onChange={handleInviteCodeChange}
                />
                <ButtonInsideInput onClick={sendInviteCode}>전송하기</ButtonInsideInput>
              </InputContainer>
              <RedLabel>초대 코드 입력 시 10000포인트 지급</RedLabel>
            </InviteBox>
          </BlueBox>
          <ConfirmContainer>
            <ConfirmButton onClick={handleConfirm}>회원가입 완료</ConfirmButton>
          </ConfirmContainer>
        </Box>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Coupon;
