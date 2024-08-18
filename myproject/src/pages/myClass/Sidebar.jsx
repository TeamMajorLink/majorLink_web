import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const Wrapper = styled.div`
  .sidebar {
    display: flex;
    flex-direction: column;
    margin-right: 70px;
      .title {
        ${() => font.title};
        margin: 20px 0;
      }
    li {
      margin: 20px 0;
      .active {
        color: ${() => color.primary_dark};
        font-weight: bold;
      }
    }
  }

  * {
    ${() => font.mypage};
  }
`;

const SelectButton = styled.button`
  background-color: transparent;
  border: none;
  ${() => font.mypage};
  padding: 0;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  color: ${({ active }) => (active ? (color.primary_dark) : (color.black))};
`;

const SelectUserContainer = styled.div`
  li {
    margin: 0;
    .normal {
      ${() => font.regular_14};
    }
    .active {
      font-weight: bold;
      color: ${() => color.primary_dark};
      ${() => font.regular_14};
    }
  }
`;

function Sidebar() {

  // 클래스 관리 버튼 state
  const [openTab, setOpenTab] = useState(false);

  // 튜티 튜터 선택 state
  const [selectUser, setSelectUser] = useState('tutor');

  return (
    <Wrapper>
      <div className="sidebar">
        <li>
        <Link to="/recruitclass" className="title">
          내 강의실</Link></li>
        <div className="navlink">
        <li>
          <SelectButton type="button" 
          onClick={() => { setOpenTab(!openTab) }}
          active={selectUser}>
            클래스 관리</SelectButton></li>
        {openTab && <SelectUserContainer>
          <li><NavLink 
            to="/tutee"
            className={({ isActive }) => 
            isActive ? "active" : "normal"}
            onClick={() => setSelectUser('tutee')}>
              • 튜티</NavLink></li>
          <li><NavLink 
          to="/recruitclass"
          className={({ isActive }) => 
          isActive ? "active" : "normal"}
          onClick={() => setSelectUser('tutor')}>
            • 튜터</NavLink></li>
          </SelectUserContainer>}
        <li><NavLink 
          to="/classapply"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            클래스 신청</NavLink></li>
        <li><NavLink 
          to="/savedclass"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            저장한 클래스</NavLink></li>
        <li><NavLink 
          to="/classchat"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            클래스 채팅</NavLink></li>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;