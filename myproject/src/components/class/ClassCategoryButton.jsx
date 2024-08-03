import { createGlobalStyle, styled } from "styled-components";

const CategoryButton = styled.button`
  margin: 0;
  padding: 8px 12px;

  height: 40px;

  border: none;
  border-radius: 8px;
  background-color: black;

  /* font-family: ; */
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

export function ClassCategoryButton() {
  return <CategoryButton>프로그래밍</CategoryButton>;
}
