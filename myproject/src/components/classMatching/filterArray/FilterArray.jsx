// import { createGlobalStyle } from "styled-components";
import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import { DropdownComponent } from './DropdownComponent';
import ResetIconPng from '../../../assets/class/class_icon_reset_24x24.png';

const SectionContainer = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* 수정 필요 */
  margin-bottom: 60px;
`;
const SectionText = styled.p`
  margin: 0 0 22px 8px;
  padding: 0 10vw;
  width: 100vw;

  ${() => font.semibold_28};
  color: ${() => color.primary_dark};
`;
const FilterArrayContainer = styled.div`
  margin: 0;
  padding: 0 10vw;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterContainer = styled.div`
  margin: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ArrayContainer = styled.div`
  margin: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ResetButton = styled.div`
  margin: 0 0 0 -16px;
  padding: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
`;
const ResetIconImg = styled.img`
  margin-right: 14px;
  width: 24px;
  height: 24px;
`;
const ResetText = styled.p`
  ${() => font.semibold_22};
  color: ${() => color.primary_dark};
`;
const ArrayText = styled.p`
  padding: 8px;

  ${(props) =>
    props.selected ? () => font.semibold_18 : () => font.regular_18};
  ${(props) =>
    props.selected ? () => font.semibold_18 : () => font.regular_18};

  color: ${(props) =>
    props.selected ? () => color.primary_dark : () => color.black};

  cursor: pointer;
`;

export function FilterArray() {
  const [isArraySelected, setIsArraySelected] = useState(true);

  const toggleSelected = () => {
    setIsArraySelected(true);
  };

  return (
    <SectionContainer>
      <SectionText>검색 필터</SectionText>
      <FilterArrayContainer>
        <FilterContainer>
          <DropdownComponent />
          <DropdownComponent />
          <DropdownComponent />
          <ResetButton>
            <ResetIconImg src={ResetIconPng} alt="img" />
            <ResetText>초기화</ResetText>
          </ResetButton>
        </FilterContainer>
        <ArrayContainer>
          <ArrayText selected={isArraySelected} onClick={toggleSelected}>
            인기순
          </ArrayText>
          <ArrayText selected={!isArraySelected} onClick={toggleSelected}>
            최신순
          </ArrayText>
        </ArrayContainer>
      </FilterArrayContainer>
    </SectionContainer>
  );
}
