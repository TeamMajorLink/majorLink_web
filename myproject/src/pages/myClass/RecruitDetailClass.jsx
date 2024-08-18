import styled from "styled-components";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import font from "../../styles/font";
import Sidebar from "./Sidebar";
import color from "../../styles/color";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  hr {
    background-color: ${() => color.primary_normal};
    height: 7px;
    border: none;
  }
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const DetailContainer = styled.div`
  width: 95%;
  height: 160px;
  margin-top: 40px;
  border: 1px solid ${() => color.grayscale_9d};
  border-radius: 12px;
`;

function RecruitDetailClass() {
  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>모집 중인 클래스</Title>
          <hr />
          <DetailContainer>
            <p>내용~</p>
          </DetailContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default RecruitDetailClass;