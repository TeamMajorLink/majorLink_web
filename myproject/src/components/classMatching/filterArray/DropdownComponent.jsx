// import { createGlobalStyle } from "styled-components";
import React, { useState } from 'react';
import { styled } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';
import ArrowDownPng from '../../../assets/class/class_icon_arrow_down_32x32.png';

const DropdownContainer = styled.div`
  margin: 0 48px 0 0;
  padding: 0;
  /* width: 166px; */
  width: 186px;
  height: 67px;

  cursor: pointer;
`;
const DropdownToggle = styled.button`
  margin: 0;
  padding: 0;
  /* width: 166px; */
  width: 186px;
  height: 67px;

  background-color: ${() => color.white};
  border: 1px solid ${() => color.grayscale_9d};
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 10;
  cursor: pointer;
`;
const DropdownSelectedText = styled.p`
  margin-left: 20px;
  ${() => font.semibold_22};
  color: ${() => color.grayscale_55};

  ${DropdownToggle}:hover & {
    color: ${color.grayscale_55}; /* 높은 우선순위 */
  }
`;
const DropdownIconImg = styled.img`
  margin-right: 20px;
  width: 32px;
  height: 32px;
`;
const DropdownItemList = styled.ul`
  margin: -67px 0 0 0;
  padding: 82px 0 16px 0;

  background-color: ${() => color.white};
  border: 1px solid ${() => color.grayscale_9d};
  border-radius: 10px;

  position: relative;
  z-index: 9;

  overflow: hidden;
`;
const DorpdownItem = styled.li`
  margin: 0;
  padding: 0 0 0 20px;
  width: 186px;
  height: 52px;

  &:hover {
    background-color: ${() => color.primary_light};
  }

  ${() => font.regular_20};
  color: ${() => color.black};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export function DropdownComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    label: '카테고리',
  });

  const options = [
    { id: 1, label: '인문과학' },
    { id: 2, label: '사회과학' },
    { id: 3, label: '공학' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownToggle onClick={toggleDropdown}>
        <DropdownSelectedText>{selectedOption.label}</DropdownSelectedText>
        <DropdownIconImg src={ArrowDownPng} alt="img" />
      </DropdownToggle>
      {isOpen && (
        <DropdownItemList>
          {options.map((option) => (
            <DorpdownItem
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </DorpdownItem>
          ))}
        </DropdownItemList>
      )}
    </DropdownContainer>
  );
}
