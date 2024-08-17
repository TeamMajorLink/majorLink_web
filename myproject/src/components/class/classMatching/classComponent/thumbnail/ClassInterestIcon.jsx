// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';
import InterestIcon from '../../../../../assets/class/class_icon_interest_35x35.png';

const IconButton = styled.button`
  margin: 2.5px;
  padding: 0;

  width: 35px;
  height: 35px;

  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export function ClassInterestIcon() {
  return (
    <IconButton>
      <IconImg src={InterestIcon} alt="img" />
    </IconButton>
  );
}
