import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
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

// const Input = styled.input`
//   width: 100%;
//   height: 50px;
//   border: 1px solid ${() => color.grayscale_80};
//   border-radius: 15px;
//   margin-bottom: 30px;
// `;

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

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const ARRAY = [1, 2, 3, 4, 5];  // 별 배열

  // const [lecture, setLecture] = useState('');  // 강의명
  const [content, setContent] = useState('');
  const [rate, setRate] = useState(0);  // 선택된 별 개수
  // const [ownerNickname, setOwwnerNickname] = useState('');

  const authToken = localStorage.getItem('authToken');
  // console.log(authToken);

  const handleStarClick = (index) => {
    setRate(index);
    console.log(index);
  }

  const today = new Date();

  const todayDate = () => {
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');  // 0부터 출력됨
    const date = String(today.getDate()).padStart(2, '0'); // 두 자리로 변환
  
    return `${year}-${month}-${date}`;
  }

  const onSubmit = async () => { 
    const formData = {content, rate, createdAt: todayDate()};
    // const formData = {content, rate};
    const lectureId = 1;
    try {
      const response = await axios.post(
        `https://dev.majorlink.store/reviews/${lectureId}`, formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken, // 헤더에 인증 토큰 추가
            // 'X-AUTH-TOKEN': `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
            // 'Access-Control-Allow-Credentials': true,
          },
        },
      );
      // console.log('성공적으로 전송된 데이터', response.data);
      const {reviewId} = response.data.reviewId;
      const newReview = {...response.data};
      // console.log(newReview);
      navigate(`/reviews/${reviewId}/details`, { state: { newReview } });
      // const { newReview } = response.data;
      // navigate('/reviews/list', { state: { newReview } });

    } catch (error) {
      if (error.response) {
        console.log('서버에서 반환된 오류:', error.response.data);
        console.log('상태 코드:', error.response.status);
    } else if (error.request) {
        console.log('요청이 이루어졌으나 응답을 받지 못했습니다.', error.request);
    } else {
        console.log('오류 발생:', error.message);
    }
    }
  };

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>후기 작성하기</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Label htmlFor="lecture">
              <Input
                id="lecture"
                type="text"
                value={lecture}
                placeholder="수강한 과목명을 입력하세요"
                {...register('lecture', { required: true })}
                onChange={(e) => setLecture(e.target.value)}/>
            </Label> */}
            <AreaContainer>
              <StarContainer>
                <p>별점을 선택하세요</p>
                {ARRAY.map((array) => (
                  <FaStar
                    key={array.id}
                    value={rate}
                    className={array <= rate ? 'active' : 'star'}
                    size='20'
                    onClick={() => handleStarClick(array)}
                  />
                ))}
              </StarContainer>
              <hr />
              <Label htmlFor="review">
                <TextArea
                  id="review"
                  value={content}
                  type="textarea"
                  placeholder="후기를 작성해주세요"
                  {...register('review', { required: true })}
                  onChange={(e) => setContent(e.target.value)} />
              </Label>
            </AreaContainer>
            <BtnContainer>
              <CancelBtn 
                type="button"
                onClick={() => navigate('/reviews/list')}>취소</CancelBtn>
              <SubmitBtn type="submit">후기 작성</SubmitBtn>
            </BtnContainer>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ReviewForm;