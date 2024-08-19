import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import font from '../../styles/font';
import { postLinkSocialAccount } from '../../apis/postSignIn';

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
    width: 66%;
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

const Title = styled.h1`
  font-family: Inter;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 2rem;
`;

const Info = styled.h3`
  ${() => font.regular_16};
  color: red;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 400;
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

const Highlighted = styled.span`
  ${() => font.regular_16};
  color: red;
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

const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const GenderButton = styled.button`
  padding: 1.5rem;
  border: 1px solid ${({ selected }) => (selected ? '#49BBBD' : '#efefef')};
  background-color: ${({ selected }) => (selected ? '#49BBBD' : '#fff')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-left: 9vh;
  margin-right: 3vh;
  margin: 5 3rem;
`;

const ConfirmContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
`;

const ConfirmButton = styled.button`
  width: 19vh;
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

const ButtonInsideInput = styled.button`
  position: absolute;
  display: flex;
  margin-left: 42.5vh;
  margin-top: -5.8vh;
  background-color: #49bbbd;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem 1.5rem;
`;

const StatusMessage = styled.p`
  font-family: Inter;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
  color: ${(props) => (props.isValid ? '#49BBBD' : 'red')};
  margin-top: 0.5rem;
  margin-left: 9vh;
`;

function SignupPage() {
  const navigate = useNavigate();
  // const [firstMajor, setFirstMajor] = useState('');
  // const [secondMajor, setSecondMajor] = useState('');
  // const [interest, setInterest] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(null);
  const [gender, setGender] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  // const handleConfirm = () => {
  //   if (firstMajor && gender && phoneNumber && verificationCode) {
  //     navigate('/createaccount-coupon');
  //   } else {
  //     alert('필수 정보를 모두 입력해주세요.');
  //   }
  // };

  const handleConfirm1 = () => {
    navigate('/createaccount-fieldselect');
  };

  const handleSendCode = () => {
    alert('인증번호가 발송되었습니다.');
  };

  const handleVerifyCode = () => {
    if (verificationCode === '123456') {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  };

  //
  //
  //
  //
  // 여기부터 연동 추가된 부분
  const [formData, setFormData] = useState({
    firstMajor: '',
    secondMajor: '',
    phone: '',
    learnPart: '',
    email: '',
    profileImg: '',
    gender: '',
  });

  const handleConfirm = () => {
    console.log(`회원가입 내용: ${JSON.stringify(formData, null, 2)}`);
    // navigate('/createaccount-coupon');

    if (formData.firstMajor && gender && formData.phone && verificationCode) {
      // navigate('/createaccount-coupon');
    } else {
      alert('필수 정보를 모두 입력해주세요.');
    }
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender,
    }));
  }, [gender]);

  useEffect(() => {
    const storedData = localStorage.getItem('signUpData');
    if (storedData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...JSON.parse(storedData),
      }));
    }
  }, []);

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
            // 'Authorization': `Bearer ${yourAuthToken}`,
          },
        },
      );

      if (response.status === 201 || response.status === 200) {
        localStorage.removeItem('signUpData'); // 데이터 전송 후 localStorage에서 삭제
        postLinkSocialAccount();

        // navigate('/login'); // 회원가입 후 로그인 페이지로 이동
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      console.log('에러에러에러~~~');
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
            <Percentage>66%</Percentage>
          </ProgressContainer>
          <InputWrapper1 onSubmit={handleSubmit}>
            <Title>필수 정보를 입력해주세요</Title>
            <Info>*표시는 필수 입력 정보입니다.</Info>
            <Label>
              제1전공<Highlighted>*</Highlighted>
            </Label>
            <Input
              name="firstMajor"
              value={formData.firstMajor}
              onChange={handleChange}
              required
              type="text"
              placeholder="나의 본전공을 입력하세요"
              // value={firstMajor}
              // onChange={(e) => setFirstMajor(e.target.value)}
            />
            <Label>제2전공</Label>
            <Input
              name="secondMajor"
              value={formData.secondMajor}
              onChange={handleChange}
              type="text"
              placeholder="나의 부전공 혹은 복수전공을 입력해주세요"
              // value={secondMajor}
              // onChange={(e) => setSecondMajor(e.target.value)}
            />
            <Label>나의 관심사</Label>
            <Input
              name="learnPart"
              value={formData.learnPart}
              onChange={handleChange}
              type="text"
              placeholder="예) 데이터사이언스, 마케팅 등"
              // value={interest}
              // onChange={(e) => setInterest(e.target.value)}
            />
            <Label>
              성별<Highlighted>*</Highlighted>
            </Label>
            <GenderContainer>
              <GenderButton
                selected={gender === 'MALE'}
                onClick={() => setGender('MALE')}
              >
                남자
              </GenderButton>
              <GenderButton
                selected={gender === 'FEMALE'}
                onClick={() => setGender('FEMALE')}
              >
                여자
              </GenderButton>
            </GenderContainer>
            <Label>
              휴대전화 번호 인증<Highlighted>*</Highlighted>
            </Label>
            <div style={{ position: 'relative' }}>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="text"
                placeholder="예) 010-1234-1234"
                // value={phoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <ButtonInsideInput onClick={handleSendCode}>
                전송하기
              </ButtonInsideInput>
            </div>
            <Label>인증번호</Label>
            <div style={{ position: 'relative' }}>
              <Input
                type="text"
                placeholder="SMS 인증번호를 입력해주세요"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <ButtonInsideInput onClick={handleVerifyCode}>
                인증하기
              </ButtonInsideInput>
            </div>
            {isCodeValid !== null && (
              <StatusMessage isValid={isCodeValid}>
                {isCodeValid
                  ? '인증번호가 일치합니다.'
                  : '인증번호가 일치하지 않습니다.'}
              </StatusMessage>
            )}
            <ConfirmContainer>
              <ConfirmButton onClick={handleConfirm1}>이전</ConfirmButton>
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

export default SignupPage;
