import React from 'react';
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

const ComponentContainer = styled.form`
  margin: 16.4rem 0 0 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageTitle = styled.p`
  margin: 0 0 12rem 0;
  color: ${() => color.primary_dark};
  ${() => font.semibold_40};
`;
const FlexStart = styled.div`
  margin: 0;
  padding: 0;
  width: 88.4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const FlexEnd = styled.div`
  margin: 0;
  padding: 0;
  width: 88.4rem;

  display: flex;
  justify-content: flex-end;
`;
const IsEssential = styled.div`
  margin: 0 0 4.8rem 0;
  padding: 0;
  width: 10.8rem;
  height: 5.4rem;

  border: 0.1rem solid ${() => color.primary_normal};
  border-radius: 1rem;
  /* background-color: ${() => color.primary_dark}; */
  background-color: ${() => color.white};

  /* color: ${() => color.white}; */
  color: ${() => color.primary_dark};
  ${() => font.semibold_24};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuestionContainerUl = styled.ul`
  margin: 0;
  padding: 0;
`;
const QuestionTextLi = styled.li`
  margin: 0 0 2rem 0;
  ${() => font.semibold_24};
`;
const InputTextBoxBig = styled.input`
  margin: 0 0 5.6rem 0;
  padding: 2.4rem 3.2rem;
  width: 86.4rem;
  height: 19.6rem;

  border: 0.1rem solid ${() => color.grayscale_9d};
  border-radius: 1.4rem;

  color: ${() => color.grayscale_84};
  ${() => font.regular_20};
`;
const SubmitButton = styled.button`
  margin: 0 0 12rem 0;
  padding: 0;
  width: 24.8rem;
  height: 8.4rem;

  border: none;
  border-radius: 1.4rem;
  background-color: ${() => color.primary_dark};

  color: ${() => color.white};
  ${() => font.semibold_24};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export function ClassApplicationComponent() {
  return (
    <div>
      <ComponentContainer>
        <PageTitle>수업 신청서</PageTitle>
        <FlexStart>
          <IsEssential>* 필수</IsEssential>
          <QuestionContainerUl>
            <QuestionTextLi>
              클래스를 통해 배우고 싶거나 기대하는 것은 무엇인가요?
            </QuestionTextLi>
            <InputTextBoxBig />
            <QuestionTextLi>
              클래스를 통해 배우고 싶거나 기대하는 것은 무엇인가요?
            </QuestionTextLi>
            <InputTextBoxBig />
          </QuestionContainerUl>
        </FlexStart>
        <FlexStart>
          <IsEssential>* 선택</IsEssential>
          <QuestionContainerUl>
            <QuestionTextLi>
              클래스를 통해 배우고 싶거나 기대하는 것은 무엇인가요?
            </QuestionTextLi>
            <InputTextBoxBig />
          </QuestionContainerUl>
        </FlexStart>
        <FlexEnd>
          <SubmitButton>수업 신청서 보내기</SubmitButton>
        </FlexEnd>
      </ComponentContainer>
    </div>
  );
}
