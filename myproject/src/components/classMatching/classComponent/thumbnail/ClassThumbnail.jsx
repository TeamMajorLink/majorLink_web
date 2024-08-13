// import { createGlobalStyle, styled } from "styled-components";
import { styled } from 'styled-components';
import { ClassCategoryButton } from './ClassCategoryButton';
import { ClassInterestIcon } from './ClassInterestIcon';
import ThumbnailPng from '../../../../assets/class/back_class_thumbnail_480x292.png';

const ThumbnailImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 480px;
  height: 292px;

  border: none;
`;
const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ButtonsContainer = styled.div`
  position: relative;
  bottom: 276px;
  left: 20px;

  margin: 0;
  padding: 0;

  width: 440px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function ClassThumbnail() {
  return (
    <ThumbnailImgContainer>
      <ThumbnailImg src={ThumbnailPng} alt="img" />

      <ButtonsContainer>
        <ClassCategoryButton />
        <ClassInterestIcon />
      </ButtonsContainer>
    </ThumbnailImgContainer>
  );
}
