// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import ArrowLeftPng from '../../../assets/class/class_icon_arrow_left_20x20.png';
import ArrowRightPng from '../../../assets/class/class_icon_arrow_right_20x20.png';
// import ArrowLeftWhitePng from '../../../assets/class/class_icon_arrow_left_white_20x20.png';
// import ArrowRightWhitePng from '../../../assets/class/class_icon_arrow_right_white_20x20.png';

const ButtonListContainer = styled.div`
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  button:hover p {
    color: ${() => color.white};
  }

  /* 수정 필요 */
  margin-bottom: 60px;
`;
const PaginationButton = styled.button`
  margin: 6px;
  padding: 0;
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${() => color.white};
  border: 1px solid ${() => color.grayscale_ea};
  border-radius: 50%;

  &:hover {
    border: none;
    background-color: ${() => color.primary_dark};
  }
`;
const ArrowIconImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
const PageNumber = styled.p`
  color: ${() => color.primary_dark};
  ${() => font.medium_18};
`;

export function Pagination() {
  return (
    <ButtonListContainer>
      <PaginationButton>
        <ArrowIconImg src={ArrowLeftPng} alt="img" />
      </PaginationButton>
      <PaginationButton>
        <PageNumber>1</PageNumber>
      </PaginationButton>
      <PaginationButton>
        <PageNumber>2</PageNumber>
      </PaginationButton>
      <PaginationButton>
        <PageNumber>3</PageNumber>
      </PaginationButton>
      <PaginationButton>
        <ArrowIconImg src={ArrowRightPng} alt="img" />
      </PaginationButton>
    </ButtonListContainer>
  );
}
