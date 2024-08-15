import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import font from "../../styles/font";
import color from "../../styles/color";
import ProfileImg from "../../assets/pages/page_profile_sample.png"
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;
  
  * {
    ${() => font.mypage};
  }
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const Profile = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${() => color.mypage_navbtn_color};
    margin: 0 20px 20px 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const Profileinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .nickname {
    ${() => font.semibold_20};
  }
`;

const AccountButton = styled.button`
  width: 95px;
  height: 40px;
  margin-left: 110px;
  font: ${() => font.regular_16};
  border-radius: 15px;
  background-color: ${() => color.grayscale_d9};
  border: none;
  border-radius: 15px;
`;

const PointButton = styled.button`
  text-align: start;
  margin-top: 10px;
  height: 60px;
  padding: 0 50px;
  border: none;
  border-radius: 15px;
  width: 100%;
`;

const Setting = styled.div`
  margin-top: 30px;
`;

const LinkContainer = styled.div`
  li {
  margin: 20px 0;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  margin-top: 40px;
  p {
    margin-right: 20px;
    color: ${() => color.grayscale_9d};
  }
  div {
    border-left: 2px solid ${() => color.grayscale_9d};
    margin-right: 20px;
  }
`;

const QuitButton = styled.button`
  background-color: white;
  border: none;
  color: ${() => color.grayscale_9d};
`;

const QuitContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const ModalTitle = styled.p`
  ${() => font.title};
  margin: 50px 0;
  color: ${() => color.primary_dark};
`;

const BtnGroup = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  text-align: center;
`;

const RealQuitButton = styled.button`
  background-color: ${() => color.grayscale_ea};
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  margin: 0 20px;
`;

const CancelButton = styled.button`
  background-color: ${() => color.primary_normal};
  border: none;
  color: white;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  margin: 0 20px;
`;

function Modal( {setModal} ) {

  const closeModal = () => {
    setModal(false);
  }

  return(
    <QuitContainer>
      <ModalContainer>
        <ModalTitle>정말 탈퇴하시겠습니까?</ModalTitle>
        <p>회원탈퇴 시 포인트 및 수업 정보가 삭제되고 복구가 불가합니다.</p>
        <BtnGroup>
          <RealQuitButton type="button">탈퇴하기</RealQuitButton>
          <CancelButton type="button" onClick={() => closeModal()}>
            취소하기</CancelButton>
        </BtnGroup>
      </ModalContainer>
    </QuitContainer>
  );
}

function MyPage() {
  const navigate = useNavigate();

  function handleMoveToEdit() {
    navigate("/editprofile");
  }

  function handleMoveToPoints() {
    navigate("/rechargepoints");
  }

  const [modal, setModal] = useState(false);

  return (
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar/>
        <Container>
          {/* 프로필 */}
          <Profile>
            <Title>마이페이지</Title>
            <ProfileContainer>
              <img src={ProfileImg} alt="프로필 이미지" />
              <Profileinfo>
                <p className="nickname">링키</p>
                <p>support@majorlink.co.kr</p>
              </Profileinfo>
            </ProfileContainer>
            <AccountButton type="button" onClick={() => handleMoveToEdit()}>계정설정</AccountButton>
              <PointButton onClick={() => handleMoveToPoints()}>포인트</PointButton>
          </Profile>

          {/* 설정 */}
          <Setting>
            <Title>설정</Title>
            <LinkContainer>
              <li><Link to="/posts">게시물</Link></li>
              <li><Link to="/invitation">친구초대코드</Link></li>
              <li><Link to="/notice">공지사항</Link></li>
              <li><Link to="/event">이벤트</Link></li>
              <li><Link to="/inquiry">문의하기</Link></li>
            </LinkContainer>

            {/* 추후 수정 */}
            <AuthContainer>
              <p>로그아웃</p>
              <div />
              <QuitButton onClick={() => { setModal(!modal) }}>계정 탈퇴</QuitButton>
            </AuthContainer>
            {modal && <Modal setModal={setModal} />}
          </Setting>
        </Container>
      </Wrapper>
    </div>
  );
}

export default MyPage;