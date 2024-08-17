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

const Box = styled.div`
  width: 499px;
  height: 404px;
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
  font-weight: 800;
  line-height: 18.84px;
  text-align: left;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 30px;
  display: block;
  color: black;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

`;

const Input = styled.input`
  width: 410px;
  height: 60px;
  margin-top: 10px;
  margin-left: 23px;

  padding: 0 100px 0 10px; 
  margin-bottom: 20px;
  border-radius: 11.3px;
  border: 0.94px solid #DDDDDD;
  font-family: Commissioner, sans-serif;
  font-size: 15px;
`;

const ButtonInsideInput = styled.button`
  position: absolute;
  left: 330px;
  top: 19px;
  width: 85px;
  height: 40px;

  background-color:#49BBBD;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
`;

const StatusMessage = styled.p`
 font-family: Inter;
font-size: 11px;
font-weight: 400;
line-height: 18.84px;
text-align: left;
color: ${props => (props.isValid ? '#49BBBD' : 'red')};
margin-bottom: 20px;
margin-left: 27px;
`;

const ConfirmButton = styled.button`
  width: 410px;
  height: 53px;
  margin-left: 27px;
  background-color: #49BBBD;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
`;

function FindEmail() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(null); 
  const navigate = useNavigate();
  const handleSendCode = () => {
    alert("인증번호가 발송되었습니다.");
  };
  const handleVerifyCode = () => {
    if (verificationCode === "123456") {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  };

  const handleConfirm = () => {
    if (isCodeValid) {
      navigate('/login-showemail');
    } else {
      alert("인증을 완료해주세요.");
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
        <Title>이메일 찾기</Title>
        <Box>
          <Label>휴대전화 번호</Label>
          <InputWrapper>
            <Input 
              type="text" 
              placeholder="예) 010-1234-1234" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <ButtonInsideInput onClick={handleSendCode}>전송</ButtonInsideInput>
          </InputWrapper>
          <Label>인증번호</Label>
          <InputWrapper>
            <Input 
              type="text" 
              placeholder="SMS 인증번호를 입력해주세요" 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <ButtonInsideInput onClick={handleVerifyCode}>인증하기</ButtonInsideInput>
          </InputWrapper>
          {isCodeValid !== null && (
            <StatusMessage isValid={isCodeValid}>
              {isCodeValid ? "인증번호가 일치합니다." : "인증번호가 일치하지 않습니다."}
            </StatusMessage>
          )}
          <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
        </Box>
      </Wrapper>
      <Footer/>
    </div>

  );
}

export default FindEmail;
