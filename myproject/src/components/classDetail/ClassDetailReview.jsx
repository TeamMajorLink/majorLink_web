import { styled } from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';

const ComponentContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const SectionTitleText = styled.p`
  margin: 0 0 2.2rem 1.4rem;

  ${() => font.semibold_32};
`;
const ReviewContainer = styled.div`
  margin: 0 0 2.4rem 0;
  padding: 2.8rem 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 0.1rem solid ${() => color.grayscale_9d};
  border-radius: 1.6rem;
`;
const ReviewUserContainer = styled.div`
  margin: 0 0 0.8rem 0;
  padding: 0;
  width: 80rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReviewUserText = styled.p`
  ${() => font.regular_20};
`;
const ReviewDateText = styled.p`
  color: ${() => color.grayscale_80};
  ${() => font.light_20};
`;
const ReviewStarRatingText = styled.p`
  margin: 0 0 1.6rem 0;
  ${() => font.medium_14};
`;
// const ReviewStarRatingSpan = styled.span`
//   color: ${() => color.yellow_star};
//   ${() => font.medium_14};
// `;
const ReviewContentText = styled.p`
  width: 80rem;

  color: ${() => color.grayscale_80};
  ${() => font.regular_20};
  line-height: 2.8rem;
  text-align: justify;
`;

export function ClassDetailReview() {
  return (
    <ComponentContainer>
      <SectionTitleText>수강 후기</SectionTitleText>

      <ReviewContainer>
        <ReviewUserContainer>
          <ReviewUserText>노브</ReviewUserText>
          <ReviewDateText>2024-07-31</ReviewDateText>
        </ReviewUserContainer>
        <ReviewStarRatingText>⭐⭐⭐⭐⭐ 5.0</ReviewStarRatingText>
        <ReviewContentText>
          질문을 잘 받아주시고 개념에 대해 자세히 알려주셔서 좋았습니다. 질문을
          잘 받아주시고 개념에 대해 자세히 알려주셔서 좋았습니다. 질문을 잘
          받아주시고 개념에 대해 자세히 알려주셔서 좋았습니다. 질문을 잘
          받아주시고 개념에 대해 자세히 알려주셔서 좋았습니다.
        </ReviewContentText>
      </ReviewContainer>
    </ComponentContainer>
  );
}
