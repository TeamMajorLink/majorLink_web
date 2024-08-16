import React, { useRef } from 'react';
import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';
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
  margin: 0 0 3.6rem 0;

  color: ${() => color.primary_dark};
  ${() => font.semibold_36};
`;

export function ClassDetailNavigation() {
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
          </SectionContainer>

          {/* section2Ref */}
          <SectionContainer ref={section2Ref}>
            <SectionTitleText>커리큘럼</SectionTitleText>
          </SectionContainer>

          {/* section3Ref */}
          <SectionContainer ref={section3Ref}>
            <SectionTitleText>튜터 소개</SectionTitleText>
          </SectionContainer>

          {/* section4Ref */}
          <SectionContainer ref={section4Ref}>
            <SectionTitleText>수강 후기</SectionTitleText>
            <ClassDetailReview />
          </SectionContainer>
        </SectionListContainer>

        <AsideContainer>
          <ClassAsideSection />
        </AsideContainer>
      </SectionFlex>
    </ComponentContainer>
  );
}
