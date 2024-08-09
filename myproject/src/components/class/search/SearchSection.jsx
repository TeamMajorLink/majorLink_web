// import { createGlobalStyle } from "styled-components";
import { styled, css } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { SearchBar } from './SearchBar';
import BackgroundLeftPng from '../../../assets/class/class_background_planet_68x316.png';
import BackgroundRightPng from '../../../assets/class/class_background_plane_600x316.png';
import CharacterPng from '../../../assets/class/class_character_176x202.png';

const SearchContainer = styled.div`
  margin: 0;
`;
const SearchBackground = styled.div`
  height: 316px;
  background: ${() => color.gradation_primary_class};
`;
const BackgroundContainer = css`
  margin: -316px 0 0 0;
  padding: 0;
  height: 316px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
const BackgroundContainerLeft = styled.div`
  ${BackgroundContainer}
  padding: 0 calc(97vw - 64px) 0 calc(7vw - 4px);
`;
const BackgroundContainerRight = styled.div`
  ${BackgroundContainer}
  padding: 0 calc(4vw - 24px) 0 calc(96vw - 576px);
`;
const BackgroundContainerCharacter = styled.div`
  ${BackgroundContainer}
  padding: 0 calc(14vw - 24px) 0 calc(86vw - 152px);
`;
const BackgroundImg = styled.img`
  height: 100%;
  object-fit: cover;
`;
const CharacterImg = styled.img`
  height: 202px;
  object-fit: cover;
`;
const ContentContainer = styled.div`
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
      <BackgroundContainerLeft>
        <BackgroundImg src={BackgroundLeftPng} alt="img" />
      </BackgroundContainerLeft>
      <BackgroundContainerRight>
        <BackgroundImg src={BackgroundRightPng} alt="img" />
      </BackgroundContainerRight>
      <BackgroundContainerCharacter>
        <CharacterImg src={CharacterPng} alt="img" />
      </BackgroundContainerCharacter>
      <ContentContainer>
        <PageSubName>클래스 찾기</PageSubName>
        <SearchBar />
      </ContentContainer>
    </SearchContainer>
  );
}
