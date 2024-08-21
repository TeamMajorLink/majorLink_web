import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import ThumbnailPng from '../../../assets/backEnd/back_class_thumbnail_922x522.png';

const ComponentContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 68rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${() => color.secondary_dark};
`;
const ThumbnailImgContainer = styled.div`
  margin: 0 4.8vw 0 2rem;
  padding: 0;

  width: 92.2rem;
  height: 52.2rem;

  border: none;
  border-radius: 2rem;

  overflow: hidden;
`;
const ThumbnailImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const ClassInfoContainer = styled.div`
  margin: 0;
  padding: 0;
`;
const ClassTitleText = styled.p`
  margin: 0 0 2.2rem 0;
  color: ${() => color.white};
  ${() => font.semibold_48};
`;
const ClassInfoLine = styled.div`
  margin-bottom: 3.8rem;
  padding: 0;
  width: 52rem;
  height: 0.1rem;

  background-color: ${() => color.white};
`;
const ClassSubInfoContainer = styled.div`
  margin: 0 0 2.2rem 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ClassInfoName = styled.p`
  margin: 0;
  width: 10rem;
  color: ${() => color.grayscale_b4};
  ${() => font.regular_20};
`;
const ClassInfoContent = styled.p`
  margin: 0 0 0 3.2rem;
  color: ${() => color.white};
  ${() => font.regular_20};
`;
const ClassHashTag = styled.p`
  margin: 3.8rem 2.4rem 0 0;
  padding: 1rem 2rem;

  color: ${() => color.grayscale_b4};
  ${() => font.regular_16};

  border: 0.1rem solid ${() => color.grayscale_b4};
  border-radius: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ClassDetailTitle({ lectureInfo }) {
  return (
    <ComponentContainer>
      <ThumbnailImgContainer>
        <ThumbnailImg src={ThumbnailPng} alt="thumbnail-img" />
      </ThumbnailImgContainer>
      <ClassInfoContainer>
        <ClassTitleText>{lectureInfo.name}</ClassTitleText>
        <ClassInfoLine />
        <ClassSubInfoContainer>
          <ClassInfoName>분야</ClassInfoName>
          <ClassInfoContent>
            {lectureInfo.mainCategory} &gt; {lectureInfo.subCategory}
          </ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>레벨</ClassInfoName>
          <ClassInfoContent>{lectureInfo.level}</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassInfoName>수업 개요</ClassInfoName>
          <ClassInfoContent>{lectureInfo.body}</ClassInfoContent>
        </ClassSubInfoContainer>
        <ClassSubInfoContainer>
          <ClassHashTag>#{lectureInfo.tag}</ClassHashTag>
          <ClassHashTag>#컴퓨터공학</ClassHashTag>
        </ClassSubInfoContainer>
      </ClassInfoContainer>
    </ComponentContainer>
  );
}
