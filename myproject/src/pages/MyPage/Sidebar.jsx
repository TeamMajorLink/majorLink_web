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

function Sidebar() {
  return(
    <Wrapper>
      <div className="sidebar">
        <li>
        <Link to="/mypage" className="title">
          마이페이지</Link></li>
        <div className="navlink">
          <li><NavLink 
          to="/editprofile" 
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            계정 설정</NavLink></li>
          <li><NavLink 
          to="/rechargepoints"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            포인트</NavLink></li>
          <li><NavLink 
          to="/posts"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            게시물</NavLink></li>
          <li><NavLink 
          to="/invitation"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            친구초대코드</NavLink></li>
          <li><NavLink 
          to="/notice"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            공지사항</NavLink></li>
          <li><NavLink 
          to="/event"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>
            이벤트</NavLink></li>
          <li><NavLink 
          to="/inquiry"
          className={({ isActive }) => 
          isActive ? "active" : undefined}>문의하기</NavLink></li>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;