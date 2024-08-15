import styled from "styled-components";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Sidebar from "./Sidebar";
import font from "../../styles/font";
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
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const InputContainer = styled.div`
  textarea {
    width: 100%;
    ${() => font.mypage};
    border-radius: 15px;
    border: 1px solid ${() => color.grayscale_c4};
    padding: 30px;
    margin: 20px 0;
    resize: none;
  }
`;

const InputTitle = styled.input`
  width: 100%;
  height: 60px;
  ${() => font.mypage};
  border-radius: 15px;
  border: 1px solid ${() => color.grayscale_c4};
  margin: 20px 0;
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${() => color.primary_dark};
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  float: right;
`;

function Inquiry() {
  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>구해요 게시판</Title>
          <InputContainer>
            <InputTitle
              type="text"
              placeholder="제목을 입력해주세요" />
            <textarea
              cols="40"
              rows="10"
              placeholder="내용을 입력해주세요" />
          </InputContainer>
          <div className="btn_div">
            <SubmitButton type="submit">등록</SubmitButton>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Inquiry;