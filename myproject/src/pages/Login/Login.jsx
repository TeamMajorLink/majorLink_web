import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import kakaoIcon from '../../assets/class/kakao_icon.png';
import naverIcon from '../../assets/class/naver_icon.png';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import { webSocialLoginNaver } from '../../apis/webSocialLoginNaver';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 73vh;
  width: 100%;
  background-color: #ededed;
`;

const Header = styled.h1`
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

const LoginBox = styled.div`
  width: 499px;
  padding: 40px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const LoginInput = styled.div`
  font-family: Commissioner, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 53px;
  padding: 0 40px 0 11.3px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 11.3px;
  border: 0.94px solid #dddddd;
  font-family: Commissioner, sans-serif;
  font-size: 15px;
  line-height: 1.25;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 53px;
  background-color: #00c3a8;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
  width: 394px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  margin: 20px 0;
  text-align: center;
  position: relative;
`;

const DividerText = styled.span`
  background-color: #ffffff;
  padding: 0 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #999999;
  font-size: 14px;
  top: -10px;
`;

const SocialButton1 = styled.button`
  width: 100%;
  height: 53px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 10px;
  background-color: #fee500;
`;

const SocialButton2 = styled.button`
  width: 100%;
  height: 53px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 11.3px;
  cursor: pointer;
  margin-bottom: 15px;
  margin-top: 10px;
  background-color: #03c75a;
`;

const SocialIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 599px;
  height: 353px;
  top: 365px;
  left: 660px;
  gap: 0px;
  border-radius: 20px 20px 20px 20px;
  opacity: 0px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h2`
  margin-top: 50px;
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 20px;
`;

const ModalText = styled.p`
  margin-top: 60px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  white-space: pre-line;
`;

const ModalButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  height: 55px;
  width: 420px;
  background-color: #49bbbd;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  font-family: Commissioner;
`;

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      navigate('/home');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <HeaderComponent />
      <LoginWrapper>
        <Header>로그인</Header>
        <LoginBox>
          <LoginInput>
            이메일
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LoginInput>
          <LoginInput>
            비밀번호
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconWrapper onClick={handlePasswordToggle}>
              {isPasswordVisible ? (
                <IoEyeOffOutline size={24} />
              ) : (
                <IoEyeOutline size={24} />
              )}
            </IconWrapper>
          </LoginInput>
          <Button onClick={handleLogin}>이메일 로그인</Button>
          <LinksWrapper>
            <Link to="/login-findemail">이메일 찾기</Link>
            <span>|</span>
            <Link to="/login-findpw">비밀번호 찾기</Link>
            <span>|</span>
            <span>회원가입</span>
          </LinksWrapper>
          <Divider>
            <DividerText>다른 방법으로 로그인하기</DividerText>
          </Divider>
          <SocialButton1>
            <SocialIcon src={kakaoIcon} alt="kakao_Icon" />
            카카오로 로그인
          </SocialButton1>
          <SocialButton2 onClick={webSocialLoginNaver}>
            <SocialIcon src={naverIcon} alt="naver_Icon" />
            네이버로 로그인
          </SocialButton2>
        </LoginBox>

        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>로그인에 실패하였습니다</ModalHeader>
              <ModalText>
                이메일이나 비밀번호가
                <br />
                올바르게 입력되었는지 확인 후<br />
                다시 시도하십시오.
              </ModalText>
              <ModalButton onClick={handleCloseModal}>확인</ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </LoginWrapper>
      <Footer />
    </div>
  );
}

export default Login;
