import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import Sidebar from "../Sidebar";
import font from "../../../styles/font";
import color from "../../../styles/color";

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

const Label = styled.label`

`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${() => color.grayscale_80};
  border-radius: 15px;
  margin-bottom: 30px;
`;

const AreaContainer = styled.div`
  border: 1px solid ${() => color.grayscale_80};
  border-radius: 15px;
  height: 30vh;

  hr {
    width: 95%;
    display: flex;
    margin-left: 15px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  padding: 20px;
  align-content: center;
  p {
    font: ${() => font.regular_14};
    color: ${() => color.grayscale_80};
    margin-right: 20px;
  }
  .star {
    color: ${() => color.grayscale_9d};
    margin: auto 3px;
  }
  .active {
    color: ${() => color.yellow_star};
    margin: auto 3px;
  }
`;

const TextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  height: 70%;
  padding: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

const CancelBtn = styled.button`
  border: none;
  border-radius: 15px;
  font: ${() => font.regular_14};
  color: ${() => color.white};
  background-color: ${() => color.grayscale_9d};
  width: 60px;
  height: 40px;
  margin-right: 20px;
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 15px;
  font: ${() => font.regular_14};
  color: ${() => color.white};
  background-color: ${() => color.primary_dark};
  width: 100px;
  height: 40px;
`;

function ReviewForm() {

  const {
    register,
    handleSubmit,
  } = useForm();

  const ARRAY = [1, 2, 3, 4, 5];  // 별 배열

  const [rating, setRating] = useState(0);  // 선택된 별 개수

  const handleStarClick = (index) => {
    setRating(index);
    console.log(index);
  }

  const onSubmit = (data) => { 
    const formData = {...data, rating};
    console.log('결과값: ', formData);
  };

  const navigate = useNavigate();

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>후기 작성하기</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="title">
              <Input
                id="title"
                type="text"
                placeholder="수강한 과목명을 입력하세요"
                {...register('title', { required: true })}/>
            </Label>
            <AreaContainer>
              <StarContainer>
                <p>별점을 선택하세요</p>
                {ARRAY.map((array) => (
                  <FaStar
                    className={array <= rating ? 'active' : 'star'}
                    key={array.id}
                    size='20'
                    onClick={() => handleStarClick(array)}
                  />
                ))}
              </StarContainer>
              <hr />
              <Label htmlFor="review">
                <TextArea
                  id="review"
                  type="textarea"
                  placeholder="후기를 작성해주세요"
                  {...register('review', { required: true })} />
              </Label>
            </AreaContainer>
            <BtnContainer>
              <CancelBtn 
                type="button"
                onClick={() => navigate('/myclass/review-list')}>취소</CancelBtn>
              <SubmitBtn type="submit">후기 작성</SubmitBtn>
            </BtnContainer>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewForm;