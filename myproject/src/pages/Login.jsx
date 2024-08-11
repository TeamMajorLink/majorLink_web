import React from 'react';
import styled from 'styled-components';


const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f3f3;
`;


const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #42c2a8;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3bb096;
  }
`;

const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || '#ddd'};
  margin: 10px 0;
  color: ${(props) => props.color || 'white'};

  img {
    margin-right: 10px;
  }
`;

const Links = styled.div`
  margin: 20px 0;
  a {
    margin: 0 10px;
    color: #555;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <LoginBox>
        <Title>로그인</Title>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>이메일 로그인</Button>
        <Links>
          <a href="/">이메일 찾기</a> | <a href="/">비밀번호 찾기</a> | <a href="/">회원가입</a>
        </Links>
        <hr />
        <div>다른 방법으로 로그인하기</div>
        <SocialButton bgColor="#FEE500" color="#3C1E1E">
          <img src="" alt="Kakao" width="20" />
          카카오로 로그인
        </SocialButton>
        <SocialButton bgColor="#03C75A">
          <img src="" alt="Naver" width="20" />
          네이버로 로그인
        </SocialButton>
      </LoginBox>
    </LoginWrapper>
  );
}

export default Login;
