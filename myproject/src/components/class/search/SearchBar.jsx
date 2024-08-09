// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import SearchIconPng from '../../../assets/class/class_icon_search_28x28.png';

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  width: 831px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SearchInput = styled.input`
  margin: 0;
  padding: 22px;
  width: 831px;
  height: 74px;

  background-color: ${() => color.white};
  border: 1px solid ${() => color.grayscale_ea};
  border-radius: 37px;

  ${() => font.regular_20};
  color: ${() => color.black};

  &::placeholder {
    color: ${() => color.grayscale_a3};
  }
`;
const SubmitButton = styled.button`
  margin: 12px 12px 12px -64px;
  padding: 11px;
  width: 50px;
  height: 50px;

  background-color: ${() => color.primary_dark};

  border: none;
  border-radius: 50%;
`;
const IconImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
`;

export function SearchBar() {
  return (
    <SearchForm>
      <SearchInput type="text" placeholder="검색어를 입력하세요" />
      <SubmitButton>
        <IconImg src={SearchIconPng} alt="img" />
      </SubmitButton>
    </SearchForm>
  );
}
