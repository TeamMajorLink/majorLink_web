// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import HeadcountIcon17 from '../../../../../assets/class/class_icon_headcount_17x17.png';
import color from '../../../../../styles/color';
import font from '../../../../../styles/font';

const HeadcountContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 55px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const IconContainer = styled.div`
  margin: 0 8px 1px 0;
  padding: 0;

  width: 17px;
  height: 17px;

  border: none;
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Headcount = styled.p`
  margin: 0;
  width: 36px;

  color: ${() => color.grayscale_30};
  ${() => font.regular_16};
`;

export function ClassHeadcount({ cnum, pnum }) {
  return (
    <HeadcountContainer>
      <IconContainer>
        <IconImg src={HeadcountIcon17} alt="img" />
      </IconContainer>
      <Headcount>
        {cnum}/{pnum}
      </Headcount>
    </HeadcountContainer>
  );
}
