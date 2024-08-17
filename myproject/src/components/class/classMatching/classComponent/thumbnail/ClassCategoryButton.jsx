// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';
import font from '../../../../../styles/font';
import color from '../../../../../styles/color';

const CategoryButton = styled.button`
  margin: 0;
  padding: 8px 12px;

  height: 40px;

  border: none;
  border-radius: 8px;
  background-color: black;

  ${() => font.medium_16};
  color: ${() => color.white};
`;

export function ClassCategoryButton() {
  return <CategoryButton>프로그래밍</CategoryButton>;
}
