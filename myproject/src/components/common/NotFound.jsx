import styled from "styled-components";
import { HeaderComponent } from "./header/HeaderComponent";
import font from "../../styles/font";
import CharacterImg from "../../assets/pages/page_character.png"
import BlueImg from "../../assets/pages/page_blue.png";
import PurpleImg from "../../assets/pages/page_purple.png";
import QuestionImg from "../../assets/pages/page_question.png";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
  ${() => font.medium_40};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  position: absolute; /* 위치를 절대 위치로 설정 */
  bottom: 5%; /* 아래에서 10% 위치로 조정 */
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  p {
    ${() => font.bold_60};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -60%;
  }
`;

const Blue = styled.img`  
  position: absolute;
  left: 42%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 40%
`;

const Purple = styled.img`
  position: absolute;
  left: 60%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 40%;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImg = styled.img`
  width: 300px;
  margin-top: 100px;
`;

const Question = styled.img`
  position: absolute;
  top: 30%;
  right: -20%;
  width: 60px;
  height: 90px;
`;


function NotFound() {
  return(
    <div>
      <HeaderComponent />
      <Wrapper>
        <BackgroundContainer>
          <p>Error 404</p>
          <Blue src={BlueImg} alt="파란 이미지" />
          <Purple src={PurpleImg} alt="파란 이미지" />
        </BackgroundContainer>
        <MainContainer>
          <MainImg src={CharacterImg} alt="링키 이미지" />
          <Question src={QuestionImg} alt="물음표 이미지" />
        </MainContainer>
        <p>페이지를 찾을 수 없습니다.</p>
      </Wrapper>
    </div>
  );
}

export default NotFound;