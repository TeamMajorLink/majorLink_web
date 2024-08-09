// import { createGlobalStyle } from "styled-components";
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { SearchBar } from './SearchBar';
import BackgroundPng from '../../../assets/class/class_background_1920x316.png';
import CharacterPng from '../../../assets/class/class_character_1920x316.png';

const SearchContainer = styled.div`
  margin: 0;
`;
const SearchBackground = styled.div`
  height: 316px;
  background: ${() => color.gradation_primary_class};
`;
const BackgroundContainer = styled.div`
  margin: -316px 0 0 0;
  padding: 0;
  height: 316px;

  display: flex;
  justify-content: center;

  overflow: hidden;
`;
const BackgroundImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  box-sizing: content-box;

  margin: -316px 0 0 0;
  padding: 0 calc(78vw - 648px) 0 calc(22vw - 184px);
  width: 831px;
  height: 316px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const PageSubName = styled.h2`
  margin: 30px 0 22px 10px;
  width: 831px;
  ${() => font.semibold_40};
`;

export function SearchSection() {
  return (
    <SearchContainer>
      <SearchBackground />
      <BackgroundContainer>
        <BackgroundImg src={BackgroundPng} alt="img" />
      </BackgroundContainer>
      <BackgroundContainer>
        <BackgroundImg src={CharacterPng} alt="img" />
      </BackgroundContainer>
      <ContentContainer>
        <PageSubName>클래스 찾기</PageSubName>
        <SearchBar />
      </ContentContainer>
    </SearchContainer>
  );
}
