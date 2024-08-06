// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';
import StarIcon from '../../../assets/class/class_icon_star_15x15.png';
import font from '../../../styles/font';

const StarRatingContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 61px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const IconContainer = styled.div`
  margin: 0 10px 1px 0;
  padding: 0;

  width: 15px;
  height: 15px;

  border: none;
`;
const IcomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StarRating = styled.p`
  margin: 0;
  width: 36px;

  ${() => font.regular_16};
`;

export function ClassStarRating() {
  return (
    <StarRatingContainer>
      <IconContainer>
        <IcomImg src={StarIcon} alt="img" />
      </IconContainer>
      <StarRating>4.8</StarRating>
    </StarRatingContainer>
  );
}
