import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
// import ThumbnailPng from '../../assets/backEnd/back_class_thumbnail_922x522.png';

const ComponentContainer = styled.div`
  margin: 0;
  padding: 4.2rem;
  width: 41rem;
  /* height: 57.2rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid ${() => color.grayscale_f5};
  border-radius: 1.2rem;

  background-color: ${() => color.white};
  box-shadow: 0 0 14px #00000010;
`;
const ClassTitleText = styled.p`
  margin: 0.8rem 0 2.8rem 0;
  padding: 0 0.4rem;
  width: 32.6rem;
  ${() => font.bold_24};
`;
const ClassInfoBox = styled.div`
  margin: 0 0 4.4rem 0;
  padding: 1.4rem 2.4rem;
  width: 32.6rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 0.8rem;

  background-color: ${() => color.grayscale_fa};
`;
const ClassSubInfoContainer = styled.div`
  margin: 1rem 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ClassInfoName = styled.p`
  margin: 0 0.8rem 0 0;
  width: 9.4rem;
  color: ${() => color.grayscale_84};
  ${() => font.medium_14};
`;
const ClassInfoContent = styled.p`
  margin: 0;
  width: 17rem;
  color: ${() => color.grayscale_30};
  ${() => font.medium_14};
`;
const ClassApplicationButton = styled.button`
  margin: 0 0 2.4rem 0;
  width: 32.6rem;
  height: 6.4rem;

  color: ${() => color.white};
  ${() => font.bold_20};

  border: none;
  border-radius: 0.6rem;
  background-color: ${() => color.primary_normal};

  cursor: pointer;
`;
const ClassFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ClassSubButton = styled.button`
  margin: 0 1.1rem;
  width: 15.2rem;
  height: 6.4rem;

  color: ${() => color.grayscale_30};
  ${() => font.semibold_16};

  border: 0.1rem solid ${() => color.grayscale_df};
  border-radius: 0.6rem;
  background-color: ${() => color.grayscale_f5};

  cursor: pointer;
`;
// const ClassHashTag = styled.p`
//   margin: 3.8rem 2.4rem 0 0;
//   padding: 1rem 2rem;

//   color: ${() => color.grayscale_b4};
//   ${() => font.regular_16};

//   border: 0.1rem solid ${() => color.grayscale_b4};
//   border-radius: 20rem;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export function ClassAsideSection() {
  return (
    <ComponentContainer>
      <ClassTitleText>백엔드 웹 개발 기초</ClassTitleText>

      <ClassInfoBox>
        <ClassSubInfoContainer>
          <ClassInfoName>분야</ClassInfoName>
          <ClassInfoContent>공학 &gt; 컴퓨터 공학</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>레벨</ClassInfoName>
          <ClassInfoContent>초급</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>모집 인원</ClassInfoName>
          <ClassInfoContent>2명 ~ 4명</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>수업 횟수</ClassInfoName>
          <ClassInfoContent>6회차</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>요일/시간</ClassInfoName>
          <ClassInfoContent>협의 가능</ClassInfoContent>
        </ClassSubInfoContainer>
      </ClassInfoBox>

      <ClassApplicationButton>수업 신청하기</ClassApplicationButton>
      <ClassFlex>
        <ClassSubButton>저장</ClassSubButton>
        <ClassSubButton>채팅</ClassSubButton>
      </ClassFlex>
    </ComponentContainer>
  );
}
