import styled from "styled-components";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import font from "../../../styles/font";
import Sidebar from "../Sidebar";
import color from "../../../styles/color";
import ThumbImg from "../../../assets/common/thumbnail_myclass_172x95.png";
// import { useEffect, useState } from "react";
// import axios from "axios";

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
  // width: 52vw;
  // height: 35vh;
  width: 95%;
  height: 300px;
  margin-top: 40px;
  border: 1px solid ${() => color.grayscale_9d};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  img {
    height: 70%;
    margin: 0 30px;
  }
`;

const ClassTitle = styled.p`
  ${() => font.bold_24};
  margin: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 200px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-content: space-between;
`;

const SmallContainer = styled.div`
  display: flex;
  ${() => font.bold_18};
  align-items: center;
  padding: 5px 0;
  p {
    width: 150px;
    height: 30px;
    padding-left: 5px;
  }
  button {
    border-radius: 20px;
    border: 2px solid ${() => color.primary_normal};
    background-color: transparent;
    padding: 10px;
    width: 150px;
    height: 40px;
    ${() => font.bold_18};
    color: ${() => color.primary_normal};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SmallTitle = styled.p`
  margin-right: 60px;
  width: 100px;
  display: flex;
  align-items: center;
`;

function RecruitDetailClass() {

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchDetail = async () => {
  //     const response = await axios.get(`https://dev.majorlink.store//lecture/${lectureId}/details`);
  //     setReviews(response.data);
  //   }
  // })


  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>모집 중인 클래스</Title>
          <hr />
          <DetailContainer>
            <ClassTitle>마케팅조사론</ClassTitle>
            <ContentContainer>
              <LeftContainer>
                <img src={ThumbImg} alt="클래스 썸네일 이미지" />
              </LeftContainer>
              <RightContainer>
                <SmallContainer>
                  <SmallTitle>모집된 인원</SmallTitle>
                  <p>1/4 명</p>
                </SmallContainer>
                <SmallContainer>
                  <SmallTitle>강의계획서</SmallTitle>
                  <button type="button">강의계획서</button>
                </SmallContainer>
                <SmallContainer>
                  <SmallTitle>수업 상태</SmallTitle>
                  <button type="button">수업 취소하기</button>
                </SmallContainer>
              </RightContainer>
            </ContentContainer>
          </DetailContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default RecruitDetailClass;