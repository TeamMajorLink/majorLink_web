import React, { useRef } from 'react';
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { ClassDetailReview } from './ClassDetailReview';
import { ClassAsideSection } from './ClassAsideSection';

const ComponentContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NavigationBar = styled.div`
  margin: 0;
  padding: 0 0 0 10vw;
  width: 100%;
  height: 8.6rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${() => color.white};
  box-shadow: 0 4px 14px #00000010;
`;
const NavigationSectionTextSelected = styled.p`
  margin: 0 8rem 0 0;

  color: ${() => color.primary_dark};
  ${() => font.bold_24};

  cursor: pointer;
`;
const NavigationSectionTextNotSelected = styled.p`
  margin: 0 8rem 0 0;

  color: ${() => color.grayscale_84};
  ${() => font.semibold_24};

  &:hover {
    color: ${() => color.primary_dark};
    ${() => font.bold_24};
  }

  cursor: pointer;
`;
const SectionFlex = styled.div`
  margin: 11.8rem 0 0 0;
  padding: 0 4vw 0 10vw;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
const AsideContainer = styled.div`
  margin: 0;
  padding: 0;

  position: sticky;
  top: 6rem;
  align-self: flex-start;
`;
const SectionListContainer = styled.div`
  margin: 0;
  padding: 0;
`;
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const SectionTitleText = styled.p`
  margin: 3rem 0 4rem 0;

  color: ${() => color.primary_dark};
  ${() => font.semibold_36};
`;
const SectionContentTitleText = styled.p`
  margin: 0 0 2rem 0;

  ${() => font.semibold_28};
`;
const SectionContentInfoText = styled.p`
  margin: 0 0 8rem 0;

  ${() => font.regular_24};
`;

export function ClassDetailNavigation({ openModal, lectureInfo }) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ComponentContainer>
      <NavigationBar>
        <NavigationSectionTextSelected
          onClick={() => scrollToSection(section1Ref)}
        >
          클래스 소개
        </NavigationSectionTextSelected>
        <NavigationSectionTextNotSelected
          onClick={() => scrollToSection(section2Ref)}
        >
          커리큘럼
        </NavigationSectionTextNotSelected>
        <NavigationSectionTextNotSelected
          onClick={() => scrollToSection(section3Ref)}
        >
          튜터 소개
        </NavigationSectionTextNotSelected>
        <NavigationSectionTextNotSelected
          onClick={() => scrollToSection(section4Ref)}
        >
          수강 후기
        </NavigationSectionTextNotSelected>
      </NavigationBar>

      <SectionFlex>
        <SectionListContainer>
          {/* section1Ref */}
          <SectionContainer ref={section1Ref}>
            <SectionTitleText>클래스 소개</SectionTitleText>

            <SectionContentTitleText>클래스 상세 소개</SectionContentTitleText>
            <SectionContentInfoText>{lectureInfo.info}</SectionContentInfoText>
            <SectionContentTitleText>참여 인원</SectionContentTitleText>
            <SectionContentInfoText>
              {lectureInfo.pnum}명
            </SectionContentInfoText>
            <SectionContentTitleText>희망 시작일</SectionContentTitleText>
            <SectionContentInfoText>
              {lectureInfo.startDate}
            </SectionContentInfoText>
            <SectionContentTitleText>희망 시간 및 요일</SectionContentTitleText>
            <SectionContentInfoText>
              요일: {lectureInfo.day}
              <br />
              시간: {lectureInfo.time}
            </SectionContentInfoText>
          </SectionContainer>

          {/* section2Ref */}
          <SectionContainer ref={section2Ref}>
            <SectionTitleText>커리큘럼</SectionTitleText>

            <SectionContentTitleText>회차</SectionContentTitleText>
            <SectionContentInfoText>
              {lectureInfo.curri}회차
            </SectionContentInfoText>
            <SectionContentTitleText>커리큘럼</SectionContentTitleText>
            <SectionContentInfoText>{lectureInfo.info}</SectionContentInfoText>
          </SectionContainer>

          {/* section3Ref */}
          <SectionContainer ref={section3Ref}>
            <SectionTitleText>튜터 소개</SectionTitleText>

            <SectionContentTitleText>튜터</SectionContentTitleText>
            <SectionContentInfoText>{lectureInfo.tutor}</SectionContentInfoText>
          </SectionContainer>

          {/* section4Ref */}
          <SectionContainer ref={section4Ref}>
            <SectionTitleText>수강 후기</SectionTitleText>
            <ClassDetailReview />
          </SectionContainer>
        </SectionListContainer>

        <AsideContainer>
          <ClassAsideSection openModal={openModal} lectureInfo={lectureInfo} />
        </AsideContainer>
      </SectionFlex>
    </ComponentContainer>
  );
}
