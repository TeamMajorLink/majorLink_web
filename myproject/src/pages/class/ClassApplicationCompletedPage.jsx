import React from 'react';
import { styled } from 'styled-components';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import color from '../../styles/color';
import font from '../../styles/font';
import CharacterPng from '../../assets/common/character_310x348.png';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ComponentContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CharacterImgContainer = styled.div`
  margin: 8vh 0 4.8rem 0;
  /* width: 31rem; */
  height: 24rem;
`;
const CharacterImg = styled.img`
  height: 100%;

  object-fit: cover;
`;
const TextTitle = styled.p`
  margin: 0 0 2.8rem 0;

  color: ${() => color.primary_dark};
  ${() => font.semibold_48};
`;
const TextContent = styled.p`
  margin: 0 0 6.2rem 0;

  line-height: 4.8rem;
  text-align: center;
  ${() => font.regular_28};
`;
const NavButton = styled.button`
  margin: 0 0 8rem 0;
  padding: 0 5.2rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${() => color.primary_normal};
  border: none;
  border-radius: 2rem;

  color: ${() => color.white};
  ${() => font.semibold_32};

  cursor: pointer;
`;

export function ClassApplicationCompletedPage() {
  return (
    <div>
      <PageContainer>
        <HeaderComponent />
        <ComponentContainer>
          <CharacterImgContainer>
            <CharacterImg src={CharacterPng} alt="majorLink character" />
          </CharacterImgContainer>
          <TextTitle>수강 신청이 완료되었습니다.</TextTitle>
          <TextContent>
            클래스 신청이 수락되면 알림을 보내드려요.
            <br />
            신청한 강의는 내 강의실에서 확인하실 수 있습니다.
          </TextContent>
          <NavButton>내 강의실로 가기</NavButton>
        </ComponentContainer>
      </PageContainer>
    </div>
  );
}
