import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
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
  height: 200px;
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

const ShowBox = styled.div`
width: 390px;
height: 117px;
top: 499px;
left: 756px;
gap: 0px;
border-radius: 15px 0px 0px 0px;
opacity: 0px;
background: #D9D9D9;
`;

const Showtext = styled.text`
font-family: Commissioner;
font-size: 15.07px;
font-weight: 400;
line-height: 18.84px;
text-align: left;

`;

const EmailText = styled.h1`
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 22.61px;
text-align: left;

`;

const FindPW = styled.h2`
font-family: Commissioner;
font-size: 12px;
font-weight: 400;
line-height: 18.84px;
text-align: left;

`;

const ConfirmButton = styled.button`
  width: 410px;
  height: 53px;
  margin-left: 27px;
  background-color: #00C3A8;
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
        // 확인 버튼을 눌렀을 때 이동하거나 다른 동작을 설정할 수 있습니다.
        navigate('/some-other-page'); // 확인 클릭 시 다른 페이지로 이동
      };
  return (
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
        <FindPW>비밀번호 찾기</FindPW>
        <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
      </Box>
    </Wrapper>
  );
}

export default FindEmail;
