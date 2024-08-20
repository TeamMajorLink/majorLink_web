// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const Wrapper = styled.div`
  .sidebar {
    display: flex;
    width: 25rem;
    flex-direction: column;
    margin-right: 70px;
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
      .title {
        ${() => font.semibold_40};
        color: ${() => color.black};
        margin: 20px 0;
      }

      // .navlink {
      // display: flex;
      // align-items: center; /* 세로 정렬 */
      // }
    li {
      margin: 20px 0;
      display: flex; // 내가 추가
      flex-direction: row; // 내가 추가
      .active {
        color: ${() => color.primary_dark};
        // font-weight: bold;
        font: ${() => font.semibold_24};
      }
    }
  }

  * {
    font: ${() => font.regular_24};
    color: ${() => color.black};
  }
`;

// const SelectButton = styled.button`
//   background-color: transparent;
//   border: none;
//   ${() => font.mypage};
//   padding: 0;
//   font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
//   color: ${({ active }) => (active ? (color.primary_dark) : (color.black))};
// `;

// const SelectUserContainer = styled.div`
//   li {
//     margin: 0;
//     .normal {
//       ${() => font.regular_14};
//     }
//     .active {
//       font-weight: bold;
//       color: ${() => color.primary_dark};
//       ${() => font.regular_14};
//     }
//   }
// `;

function Sidebar() {

  // 클래스 관리 버튼 state
  // const [openTab, setOpenTab] = useState(false);

  // 튜티 튜터 선택 state
  // const [selectUser, setSelectUser] = useState('tutor');


  return (
    <Wrapper>
      <div className="sidebar">
        {/* Link to가 맞나... / navigate로 수정하기 */}
        
        <li>
        <Link to="/users/profile-card/nickname" className="title">
          수업 개설하기</Link></li>
        <div className="navlink">
        {/* <li>
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
          </SelectUserContainer>} */}
        <li><NavLink 
          to="/users/profile-card/nickname"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            프로필 카드</NavLink></li>
        <li><NavLink 
          to="/offeredclasslist"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            클래스 개설</NavLink></li>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;