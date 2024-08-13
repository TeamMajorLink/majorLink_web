// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import color from '../../../../styles/color';
import font from '../../../../styles/font';

const InfoContainer = styled.div`
  margin: 0 28px 0 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const IconContainer = styled.div`
  margin: 0 8px 1px 0;
  padding: 0;

  width: 16px;
  height: 16px;

  border: none;
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Headcount = styled.p`
  margin: 0;
  padding: 0;

  color: ${() => color.grayscale_55};
  ${() => font.regular_16};
`;

export function ClassSubInfo({ img, content }) {
  return (
    <InfoContainer>
      <IconContainer>
        <IconImg src={img} alt="img" />
      </IconContainer>
      <Headcount>{content}</Headcount>
    </InfoContainer>
  );
}
