import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #EDEDED;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
`;

const Box = styled.div`
width: 499px;
height: 403px;
top: 362px;
left: 721px;
gap: 0px;
border-radius: 15px 15px 15px 15px;
opacity: 0px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
margin-bottom: 20px;
`;

const Title = styled.h1`
font-family: Inter;
font-size: 30px;
font-weight: 600;
line-height: 22.61px;
letter-spacing: 0.1413043588399887px;
text-align: center;
color: black;
margin-top: 50px;
margin-bottom: 50px;
`;

const Label = styled.label`
font-family: Inter;
font-size: 24px;
font-weight: 500;
line-height: 30px;
letter-spacing: 0.1413043588399887px;
text-align: center;
color: black;
margin-top: 10px;
margin-bottom: 30px;
`;

const Text = styled.label`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 22.61px;
letter-spacing: 0.1413043588399887px;
text-align:center;
color: black;
margin-top: 10px;
margin-bottom: 30px;
`;


const ConfirmButton = styled.button`
  width: 410px;
  height: 53px;
  margin-left: 45px;
  background: #49BBBD;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
  margin-top: 20px;
`;

function FindEmail() {
    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate("/login"); 
      };
  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <IoArrowBack />
        </BackButton>
      </Header>
      <Box>
      <Title>비밀번호 변경 완료</Title>
        <Label>새로운 비밀번호로<br/>변경되었습니다.</Label>
        <Text>변경된 비밀번호로 로그인 해주세요.</Text>
        <ConfirmButton onClick={handleConfirm}>로그인 하기</ConfirmButton>
      </Box>
    </Wrapper>
  );
}

export default FindEmail;