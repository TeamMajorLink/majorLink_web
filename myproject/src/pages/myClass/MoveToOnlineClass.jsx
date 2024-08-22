import styled from "styled-components";
import font from "../../styles/font";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import CharacterImg from "../../assets/pages/page_character.png";
import BlueImg from "../../assets/pages/page_blue.png";
import PurpleImg from "../../assets/pages/page_purple.png";
import QuestionImg from "../../assets/pages/page_question.png";
import color from "../../styles/color";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    ${() => font.title};
    position: absolute;
    top: 0;
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
  margin-top: 50px;
`;

const Question = styled.img`
  position: absolute;
  top: 30%;
  right: -20%;
  width: 60px;
  height: 90px;
`;

const ZoomBtn = styled.button`
  ${() => font.title};
  color: ${() => color.white};
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 21.5px;
  background-color: ${() => color.primary_dark};
  margin-top: -60px;
  padding: 15px 0;
`;


function MoveToOnlineClass() {
  return(
    <div>
      <HeaderComponent />
      <Wrapper>
        <BackgroundContainer>
          <p>즐겁게 수업을 시작해보아요!</p>
          <Blue src={BlueImg} alt="파란 이미지" />
          <Purple src={PurpleImg} alt="파란 이미지" />
        </BackgroundContainer>
        <MainContainer>
          <MainImg src={CharacterImg} alt="링키 이미지" />
          <Question src={QuestionImg} alt="물음표 이미지" />
        </MainContainer>
        <ZoomBtn type="button">Zoom으로 연결</ZoomBtn>
      </Wrapper>
    </div>
  );
}

export default MoveToOnlineClass;