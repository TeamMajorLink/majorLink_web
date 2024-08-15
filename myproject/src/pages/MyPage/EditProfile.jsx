import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CiCamera } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import font from "../../styles/font";
import color from "../../styles/color";
import ProfileImg from "../../assets/pages/page_profile_sample.png"
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    ${() => font.regular_16};

  small {
    margin-top: 5px;
    color: ${() => color.primary_dark};
  }
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 70%;
  padding-left: 200px;
`;

const ImgContainer = styled.div`
  margin-bottom: 20px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${() => color.grayscale_c4};
  }
  .imgselect {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: ${() => color.grayscale_c4};
    color: gray;
    margin: 0px 0px 0px -25px;
  }
  input {
    display: none;
  }
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: medium;
  margin: 10px 0;

  .visible {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 55px;
    right: 10px;
  }
`;

const Input = styled.input`
  border: 0.94px solid ${() => color.info_border_color};
  color: ${() => color.info_text_color};
  margin-top: 15px;
  width: 350px;
  height: 40px;
  border-radius: 6px;
  border-width: 1px;
`

const BtnInput = styled.input`
  width: 80px;
  height: 27px;
  position: absolute;
  top: 52px;
  right: 10px;
  background-color: ${() => color.primary_dark};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
`;

const PwContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const GenderContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  margin: 10px 0;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GenderLabel = styled.label`
  display: inline-block;
  width: 160px;
  height: 40px;
  border: 0.94px solid ${() => color.info_border_color};
  border-radius: 6px;
  background-color: ${props => (props.isSelected ? '#36D9D4' : '#FFFFFF')};
  color: ${props => (props.isSelected ? '#FFFFFF' : '#000000')};
  text-align: center;
  line-height: 40px;
`;

const GenderInput = styled.input`
  display: none;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center;
  align-content: center;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 100%;
  background-color: ${() => color.primary_dark};
  color: white;
  border: none;
  border-radius: 11px;
  font-weight: bold;
  ${() => font.regular_16};
  padding: 10px;
`;


function EditProfile() {
  const { 
    register, 
    handleSubmit,
    watch 
  } = useForm();

  const onSubmit = data => console.log(data);

    // 회원 정보 데이터
    // const [user, setUser] = useState({
    //   name: '이름',
    //   nickname: '닉네임',
    //   email: '',
    //   newPw: '',
    //   checkPw: '',
    //   phone: '',
    //   major: '',
    //   minor: '',
    //   interest: '',
    //   gender: ''
    // })

  // 데이터 불러오기
  useEffect(() => {
    
  })

  // 비밀번호 보기
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false
  });

  const handlePwType = ()=> {
    setPwType(() => {
      // visible === false (비밀번호 안 보임)
      if (!pwType.visible) {
        return { type: "text", visible: true };
      }
        return { type: "password", visible: false };
    });
  };

  const [checkPwType, setCheckPwType] = useState({
    type: "password",
    visible: false
  });

  const handleCheckPwType = ()=> {
    setCheckPwType(() => {
      // visible === false (비밀번호 안 보임)
      if (!checkPwType.visible) {
        return { type: "text", visible: true };
      }
        return { type: "password", visible: false };
    });
  };

  // 인증 div 보이기
  const [showCodeDiv, setShowCodeDiv] = useState(false);

  const handleCodeDiv = () => {
    setShowCodeDiv(!showCodeDiv);
  }

  const [selectGender, setSelectGender] = useState('');

  const handleSelectGender = (option) => {
    setSelectGender(option);
  }

  const pw = useRef();
  pw.current = watch("newPw");


  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar/>
      <Container>
        <Title>계정 설정</Title>
        {/* 이미지 (영상 제출용) */}
        <ImgContainer>
          <img src={ProfileImg} alt="프로필 이미지" />
          <label htmlFor="profile" aria-label="프로필 사진 업로드">
          <CiCamera className="imgselect" />
            <input 
              type="file"
              id="profile"
              accept="image/png, image/jpeg"/>
          </label>
        </ImgContainer>
        {/* 폼 */}
          <form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="name">
                이름
                <Input
                  id="name"
                  type="text"
                  placeholder="이름(실명)을 입력해주세요" 
                  {...register("name")}
                  />
              </Label>
              <Label htmlFor="nickname">
                닉네임
                <Input
                  id="nickname"
                  type="text"
                  placeholder="닉네임을 입력해주세요" 
                  {...register("nickname")}
                  />
              </Label>
              <Label htmlFor="email">
                이메일
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com" 
                  {...register("email", {
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "유효한 이메일 주소를 입력해주세요"
                    }
                  })}
                  />
              </Label>
              <PwContainer>
                <Label htmlFor="newPw">
                  비밀번호 변경
                  <Input
                    id="newPw"
                    type={pwType.type}
                    placeholder="영문, 숫자, 특수문자 조합 8자 이상 입력해주세요" 
                    {...register("newPw", {
                      minLength: 8,
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message: "영문, 숫자, 특수문자 조합 8자 이상 입력해주세요"
                      }
                    })}
                    />
                    <IoEyeOutline className="visible" onClick={handlePwType} />
                </Label>
              </PwContainer>
              <PwContainer>
                <Label htmlFor="checkPw">
                  비밀번호 변경 확인
                  <Input
                    id="checkPw"
                    type={checkPwType.type}
                    placeholder="영문, 숫자, 특수문자 조합 8자 이상 입력해주세요" 
                    {...register("checkPw", {
                      validate: (value) => value === pw.current
                    })}
                    />
                    <IoEyeOutline className="visible" onClick={handleCheckPwType} />
                </Label>
              </PwContainer>
              <PwContainer>
                  <Label htmlFor="phone">
                    휴대폰 번호
                    <Input
                      id="phone"
                      type="text"
                      placeholder="010-1234-5678"
                      {...register("phone")}
                      />
                    <BtnInput
                        type="button"
                        className="verifybtn"
                        value="인증하기"
                        onClick={handleCodeDiv}/>
                    <small>휴대전화 번호 변경 시 다시 인증해주세요</small>
                  </Label>
                </PwContainer>
                {/* 인증하기 버튼 누르면 나오는 div */}
                {showCodeDiv && (
                  <PwContainer>
                    <Label htmlFor="code">
                      인증번호
                      <Input
                        id="code"
                        type="text"
                        {...register("code")}
                        />
                        <BtnInput 
                          type="button"
                          className="verifybtn"
                          value="확인"/>
                    </Label>
                </PwContainer>
                )}
                <Label htmlFor="major">
                  제1전공
                  <Input
                    id="major"
                    type="text"
                    placeholder="나의 본전공을 입력해주세요" 
                    {...register("major")}
                    />
                </Label>
                <Label htmlFor="minor">
                  제2전공
                  <Input
                    id="minor"
                    type="text"
                    placeholder="나의 복수전공 혹은 부전공을 입력해주세요" 
                    {...register("minor")}
                    />
                </Label>
                <Label htmlFor="interest">
                  나의 관심사
                  <Input
                    id="interest"
                    type="text"
                    placeholder="예) 데이터사이언스, 마케팅 등" 
                    {...register("interest")}
                    />
                </Label>

                {/* 성별 */}
                <GenderContainer>
                  <p>성별</p>
                  <SelectContainer>
                    <GenderLabel 
                      htmlFor="male"
                      isSelected={selectGender === '남자'}
                      onClick={() => handleSelectGender('남자')}>
                        남자
                        <GenderInput
                          id="male"
                          type="radio"
                          value="남자"
                          name="gender"
                          checked={selectGender === '남자'}
                          onClick={() => handleSelectGender('남자')}
                          {...register("gender")} />
                      </GenderLabel>
                      <GenderLabel 
                        htmlFor="female"
                        isSelected={selectGender === '여자'}
                        onClick={() => handleSelectGender('여자')}>
                        여자
                        <GenderInput
                          id="female"
                          type="radio"
                          value="여자"
                          name="gender"
                          checked={selectGender === '여자'}
                          onClick={() => handleSelectGender('여자')}
                          {...register("gender")} />
                      </GenderLabel>
                  </SelectContainer>
                </GenderContainer>
                {/* 알림 수신 -> 토글 스위치 */}
                <BtnContainer>
                  <SubmitButton type="submit">저장하기</SubmitButton>
                </BtnContainer>
          </form>
      </Container>
    </Wrapper>
    </div>
  );
}

export default EditProfile;