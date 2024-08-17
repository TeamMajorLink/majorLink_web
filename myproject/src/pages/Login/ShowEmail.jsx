import React from 'react';
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
  height: 336px;
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
  margin-left: 30px;
  display: block;
  color: black;
`;

const ShowBox = styled.div`
  width: 390px;
  height: 117px;
  top: 499px;
  left: 756px;
  gap: 0px;
  margin-left: 30px;
  margin-bottom: 5px;
  margin-top: 15px;
  border-radius: 15px 15px 15px 15px;
  opacity: 0px;
  background: #D9D9D9;
  text-align: center;

`;

const Showtext = styled.h3`
  font-family: Commissioner;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.84px;
  text-align: center;
  color: #555555;
  margin-top: 15px;

`;

const EmailText = styled.h1`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 22.61px;
  text-align: center;
  margin-top: 15px;

`;

const FindPW = styled.h2`
  font-family: Commissioner;
  font-size: 12px;
  font-weight: 400;
  line-height: 18.84px;
  text-align: left;
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
  text-decoration: underline;
  color:#666666;

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

function FindEmail() {
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate('/login'); 
      };

      const handleConfirmPW = () => {
        navigate('/login-findpw'); 
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
          <Label>가입된 이메일을 알려드려요</Label>
          <ShowBox>
              <Showtext>
                  아래 이메일로 가입하셨습니다
              </Showtext>
              <EmailText>
                  example@email.com
              </EmailText>
          </ShowBox>
          <FindPW onClick={handleConfirmPW}>비밀번호 찾기</FindPW>
          <ConfirmButton onClick={handleConfirm}>로그인하기</ConfirmButton>
        </Box>
      </Wrapper>
    <Footer/>
    </div>
  );
}

export default FindEmail;
