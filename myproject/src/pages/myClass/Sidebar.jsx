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

  // // 클래스 관리 버튼 state
  // const [openTab, setOpenTab] = useState(false);

  // // 튜티 튜터 선택 state
  // const [selectUser, setSelectUser] = useState('tutor');

  return (
    <Wrapper>
      <div className="sidebar">
        <li>
        <Link to="/myclass/recruiting" className="title">
          내 강의실</Link></li>
        <div className="navlink">
          <li><NavLink 
            to="/myclass/recruiting"
            className={({ isActive }) => 
            isActive ? "active" : "normal"}>
              클래스 관리</NavLink></li>
        <SelectUserContainer>
          <li><NavLink 
            to="/myclass/recruiting"
            className={({ isActive }) => 
            isActive ? "active" : "normal"}>
              • 튜티</NavLink></li>
          <li><NavLink 
          to="/myclass-tutor/recruiting"
          className={({ isActive }) => 
          isActive ? "active" : "normal"}>
            • 튜터</NavLink></li>
          </SelectUserContainer>
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