import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import font from '../../styles/font';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  background-color: #ededed;
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
  background-color: #ffffff;
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
  background-color: #ededed;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #49bbbd;
  }
`;

const Percentage = styled.span`
  margin-left: 3rem;
  color: #49bbbd;
  font-weight: bold;
  font-size: 2.7rem;
  margin-top: 2.8%;
`;

const InputWrapper1 = styled.form`
  width: 40%;
  margin-top: 5rem;
`;

const Label = styled.label`
  ${() => font.regular_16};
  text-align: left;
  color: black;
  font-weight: 520;
  font-style: bold;
  margin-bottom: 1rem;
  margin-top: 2rem;
  margin-left: 10vh;
  display: inline-block;
`;

const SmallBox = styled.div`
  background-color: #ededed;
  color: gray;
  margin-left: 9vh;
  height: 3vh;
  width: 42vh;
  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ConfirmContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 5vh;
  padding: 1rem;
  background: #49bbbd;
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

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 42%;
  right: 25px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 8rem;
  width: 83%;
  align-items: left;
  justify-content: left;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  ${() => font.medium_16};
  color: black;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Separator = styled.hr`
  margin: 2rem 0;
  border: 1px solid #ededed;
  width: 100%;
`;

function EnterBasicInfo() {
  const [formData, setFormData] = useState({
    provider: 'NAVER',
    providerId: '',
    accessToken: '',
    password: '',
    nickname: '',
    birth: '',
    username: '',
    favorite: '',
    email: '',
    profileImg: '',
    gender: '',
    firstMajor: '',
    secondMajor: '',
    phone: '',
    learnPart: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const providerId = queryParams.get('providerId');
    const accessToken = queryParams.get('accessToken');

    console.log(`naver 식별 id: ${providerId}`);
    console.log(`엑세스 토큰: ${accessToken}`);

    setFormData((prevFormData) => ({
      ...prevFormData,
      providerId,
      accessToken,
    }));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://dev.majorlink.store/users/sign-up',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 201 || response.status === 200) {
        // 회원가입 성공 시 로그인 페이지로 리다이렉트
        navigate('/login');
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
    }
  };
  // 여기까지 연동 추가된 부분
  //
  //
  //
  //

  // const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [dob, setDob] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState({
    all: false,
    age: false,
    terms: false,
    privacy: false,
    optionalPrivacy: false,
    marketing: false,
    marketingNotification: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleConfirm = () => {
    if (
      // name &&
      // dob &&
      // nickname.length >= 2 &&
      // email &&
      // password &&
      // confirmPassword === password &&
      termsAccepted.age &&
      termsAccepted.terms &&
      termsAccepted.privacy
    ) {
      // formData를 localStorage에 저장
      localStorage.setItem('signUpData', JSON.stringify(formData));
      navigate('/createaccount-enterrequiredinfo');
    } else {
      alert('모든 필수 정보를 올바르게 입력해주세요.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTermsChange = (e) => {
    const { name: checkboxName, checked } = e.target;
    if (checkboxName === 'all') {
      setTermsAccepted({
        all: checked,
        age: checked,
        terms: checked,
        privacy: checked,
        optionalPrivacy: checked,
        marketing: checked,
        marketingNotification: checked,
      });
    } else {
      setTermsAccepted((prevState) => {
        const newState = { ...prevState, [checkboxName]: checked };
        const allChecked =
          newState.age &&
          newState.terms &&
          newState.privacy &&
          newState.optionalPrivacy &&
          newState.marketing &&
          newState.marketingNotification;
        return { ...newState, all: allChecked };
      });
    }
  };

  return (
    <div>
      <HeaderComponent />
      <Wrapper>
        <Header>메이저링크에 오신 것을 환영합니다</Header>
        <Box>
          <ProgressContainer>
            <Progress />
            <Percentage>33%</Percentage>
          </ProgressContainer>
          <InputWrapper1 onSubmit={handleSubmit}>
            <Label>이름</Label>
            <Input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              type="text"
              placeholder="이름(실명)을 입력해주세요"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
            <SmallBox>
              타인 명의로 가입 시 계정이 정지되고 재가입이 불가능합니다.
            </SmallBox>
            <Label>생년월일</Label>
            <Input
              name="birth"
              value={formData.birth}
              onChange={handleChange}
              required
              type="text"
              // value={dob}
              // onChange={(e) => setDob(e.target.value)}
            />
            <Label>닉네임</Label>
            <Input
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
              type="text"
              placeholder="2자 이상 입력해주세요"
              // value={nickname}
              // onChange={(e) => setNickname(e.target.value)}
            />
            <Label>이메일</Label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="example@email.com"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Label>비밀번호</Label>
            <PasswordInputWrapper>
              <Input
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type={passwordVisible ? 'text' : 'password'}
                placeholder="영문, 숫자, 특수문자 조합 8자 이상 입력해주세요"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <IconWrapper onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <IoEyeOffOutline size={24} />
                ) : (
                  <IoEyeOutline size={24} />
                )}
              </IconWrapper>
            </PasswordInputWrapper>
            {/* <Label>비밀번호 확인</Label>
            <Input
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 8자 이상 입력해주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            /> */}
            <CheckboxContainer>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="all"
                  checked={termsAccepted.all}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>약관 전체 동의</CheckboxLabel>
              </CheckboxWrapper>
              <Separator />
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="age"
                  checked={termsAccepted.age}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>만 14세 이상입니다 (필수)</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="terms"
                  checked={termsAccepted.terms}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>이용약관 동의 (필수)</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="privacy"
                  checked={termsAccepted.privacy}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>개인정보 수집 및 이용 동의 (필수)</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="optionalPrivacy"
                  checked={termsAccepted.optionalPrivacy}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>선택정보 수집 및 이용 동의 (선택)</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="marketing"
                  checked={termsAccepted.marketing}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>개인정보 마케팅 활용 동의 (선택)</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Checkbox
                  type="checkbox"
                  name="marketingNotification"
                  checked={termsAccepted.marketingNotification}
                  onChange={handleTermsChange}
                />
                <CheckboxLabel>마케팅 알림 수신 동의 (선택)</CheckboxLabel>
              </CheckboxWrapper>
            </CheckboxContainer>
            <ConfirmContainer>
              <ConfirmButton type="submit" onClick={handleConfirm}>
                다음
              </ConfirmButton>
            </ConfirmContainer>
          </InputWrapper1>
        </Box>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default EnterBasicInfo;
