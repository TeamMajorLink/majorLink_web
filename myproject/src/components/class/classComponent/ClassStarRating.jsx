// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';
import StarIcon from '../../../assets/class/class_icon_star_15x15.png';
import color from '../../../styles/color';
import font from '../../../styles/font';

const StarRatingContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const IconContainer = styled.div`
  margin: 0;
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
  color: ${() => color.primary_normal};
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
