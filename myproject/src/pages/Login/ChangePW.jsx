import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Footer from "../../components/common/footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 73vh;
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

const Changetext = styled.h1`
font-family: Inter;
font-size: 10px;
font-weight: 400;
line-height: 10px;
letter-spacing: 0.1413043588399887px;
text-align: left;
color: #A3A3A3;
margin-left: 28px;
margin-top: 10px;
margin-bottom: 15px;
`;

const Box = styled.div`
  width: 499px;
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
  margin-top: 30px;
`;

function ChangePW() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      navigate('/login-changepwcompleted'); 
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <HeaderComponent />
      <Wrapper>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <IoArrowBack />
          </BackButton>
        </Header>
        <Title>비밀번호 찾기</Title>
        <Box>
          <Label>새로운 비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Changetext>
              영문, 숫자, 특수문자 조합 8자 이상 입력해주세요
          </Changetext>
          <Label>새로운 비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ConfirmButton onClick={handleResetPassword}>
            비밀번호 재설정 완료
          </ConfirmButton>
        </Box>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default ChangePW;
