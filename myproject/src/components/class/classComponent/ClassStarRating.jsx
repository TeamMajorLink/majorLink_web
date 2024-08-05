// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';

const StarRatingContainer = styled.div`
  margin: 0;
`;
const StarIconContainer = styled.div`
  margin: 0;
`;
const StarIcon = styled.img`
  margin: 0;
`;
const StarRating = styled.p`
  margin: 0;
`;

export function ClassStarRating() {
  return (
    <StarRatingContainer>
      <StarIconContainer>
        <StarIcon />
      </StarIconContainer>
      <StarRating>4.8</StarRating>
    </StarRatingContainer>
  );
}
