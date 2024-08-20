import { NavLink } from "react-router-dom";
import styled from "styled-components";
import font from "../../../styles/font";
import color from "../../../styles/color";

const SelectContainer = styled.div`
  border: 1px solid ${() => color.grayscale_80};
  border-radius: 15px;
  ${() => font.medium_20};
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  .active {
    color: ${() => color.primary_dark};
    font-weight: ${() => font.bold_20};
  }
`;

const Vertical = styled.div`
  border-left: 1px solid;
  margin-right: 20px;
  height: 80%;
  margin-top: 7px;
`;


function RecruitingSelectMenu() {
  return(
    <div>
      <SelectContainer>
        <NavLink 
          to='/myclass/recruiting'
          className={({ isActive }) => 
          isActive ? 'active' : 'normal'}>
            진행중인</NavLink>
        <Vertical />
        <NavLink 
          to='/myclass/cancel'
          className={({ isActive }) => 
          isActive ? 'active' : 'normal'}>
            취소한</NavLink>
    </SelectContainer>
  </div>
  );
}

export default RecruitingSelectMenu;