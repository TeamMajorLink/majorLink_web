import React, { useState } from 'react';
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

const Title = styled.h1`
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: black;
  margin-bottom: 60px;
  margin-top: 60px;
`;

const Box = styled.div`
  width: 499px;
  height: 266px;
  padding: 20px;
  border-radius: 15px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: Commissioner;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 18.84px;
  text-align: left;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 26px;
  display: block;
  color: black;
`;

const Input = styled.input`
  width: 410px;
  height: 60px;
  margin-top: 10px;
  margin-left: 23px;
  padding: 0 100px 0 10px; 
  margin-bottom: 10px;
  border-radius: 11.3px;
  border: 0.94px solid #DDDDDD;
  font-family: Commissioner, sans-serif;
  font-size: 15px;
`;

const PWtext = styled.h2`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 20px;
  color: #A3A3A3;
`;

const ConfirmButton = styled.button`
  width: 410px;
  height: 53px;
  margin-left: 27px;
  background: #49BBBD;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
`;

function FindPW() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/login-findpw_number', { state: { email } });
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <IoArrowBack />
        </BackButton>
      </Header>
      <Title>비밀번호 찾기</Title>
      <Box>
        <Label>가입된 이메일 주소를 입력해주세요</Label>
        <Input 
          type="email" 
          placeholder="example@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PWtext>
          가입하신 이메일 주소를 입력해주시면<br/>
          비밀번호 재설정을 위한 이메일 인증번호를 보내드립니다.
        </PWtext>
        <ConfirmButton onClick={handleNext}>이메일 전송하기</ConfirmButton>
      </Box>
    </Wrapper>
  );
}

export default FindPW;

