import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import RectangleProfile from '../../components/users/RectangleProfile';
// import ProfileWriteButton from '../../components/users/ProfileWriteButton';
import ProfileTitle from '../../components/users/ProfileTitle';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProfileContainer = styled.div`
  // display: flex;
  margin: 29.7rem 19.8rem 0 8.4rem;
  // margin-right(8.4): 임의

`;

const Subhead = styled.p`
  font: ${() => font.semibold_24};
  color: ${() => color.black};
`;

const CharacterCount = styled.p`
  font: ${() => font.semibold_20};
  color: ${() => color.black};
//   position: absolute;
//   right: 2rem; // Adjusts the position of the percentage text
//   top: 65%; // Vertically align it to be close to the bars
//   transform: translateY(-50%);
`;

const Text = styled.p`
  font: ${() => font.regular_20};
  color: ${() => color.black};
  margin-left: 5rem;
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
`;

const TagContainer = styled.div`
  margin-left: 1.2rem;
`;

const Tag = styled.div`
  display: inline-flex; /* 텍스트 길이에 맞춰 크기를 조절 */
  height: 5.6rem;
  margin: 3rem 1.3rem; // 임의
  padding: 0.9rem 2.6rem; //세로 가로
  align-items: center;
  justify-content: center;
  background: ${() => color.techtag};
  border-radius: 0.815rem;
  font: ${() => font.regular_20};
  color: ${() => color.grayscale_55};
  text-align: center;
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
`;

const UrlContainer = styled.div`
  position: relative;
  width: 60.2rem;
  height: 5.1rem;
  margin-left: 5rem;
  padding: 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  border-radius: 1.5rem;
  border: 0.1rem solid ${() => color.grayscale_9d};
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 */
`;

const Url = styled.a`
  font: ${() => font.regular_15};
  color: ${() => color.black};
`;

function ProfileCardMake() {
    return (
      <>
        <HeaderComponent />

          <ProfileContainer>
            <RectangleProfile />

            <Subhead>한 줄 소개</Subhead>
            {/* 한 줄 소개를 입력해주세요 */}



            <ProfileTitle title='자기소개'/>
            <Subhead>자기소개</Subhead>
            {/* 직무 경험, 핵심 역량, 강점 등 구체적인 내용을 작성해보세요. */}
            <CharacterCount>0/1000</CharacterCount>

            <ProfileTitle title='학력 및 교육' />
            <Container>
              <Subhead>교육기관</Subhead>
              {/* 학교명이나 교육기관 명을 입력해주세요 */}
            </Container>
            <Container>
              <Subhead>전공/과정</Subhead>
              {/* 전공 혹은 과정 명을 입력해주세요. 예) 컴퓨터학과/웹 개발 과정 */}
            </Container>
            <Container> {/* className 다르게 줘서 flex 별도 설정 */}
              <Subhead>교육 기간</Subhead>
              {/* 심란하다...기간 컴포넌트 만들어서 추후 수정 */}
            </Container>
            {/* 추가하기 버튼 컴포넌트? */}

            <ProfileTitle title='활동 프로젝트' />
            <Container>
              <Subhead>활동 구분</Subhead>
              {/* 예) 인턴, 대외활동, 프로젝트, 동아리 등 */}
            </Container>
            <Container>
              <Subhead>기관/장소</Subhead>
              {/* 기관/장소 명을 입력해주세요 */}
            </Container>
            <Container>
              <Subhead>활동 기간</Subhead>
              {/* 심란하다...기간 컴포넌트 만들어서 추후 수정 */}
            </Container>
            <Container>
              <Subhead>활동 내용</Subhead>
              {/* 예) ios 모바일 어플 개발 프로젝트 진행 */}
            </Container>
            {/* 추가하기 버튼 컴포넌트? */}

            <ProfileTitle title='보유 기술' />
            <Container>
              <Subhead>보유 기술</Subhead>
              {/* 키워드 입력 후 Enter */}
              {/* 등록 버튼 컴포넌트? */}
              <Text>예시: Google Ananlytics, Photoshop, Figma, Notion, Python, Javascript, Confluence 등</Text>
              <TagContainer>
                <Tag>Figma</Tag>
              </TagContainer>
            </Container>


            <ProfileTitle title='포트폴리오' />
            <Container>
              <Subhead>첨부파일</Subhead>
              {/* 첨부할 파일을 찾아주세요 */}
              {/* 파일 첨부 버튼 컴포넌트 */}
            </Container>

            <Container>
              <Subhead>URL</Subhead>
              {/* URL 링크를 입력하세요 */}
              {/* 등록 버튼 컴포넌트 */}
              <UrlContainer>
                <Url>https:임시.com</Url>
              </UrlContainer>
            </Container>


          </ProfileContainer>

          <Container>
              {/* 취소 버튼 컴포넌트 */}
              {/* 저장하기 버튼 컴포넌트 */}
            </Container>

        
        <Footer />
      </>
    );
}

export default ProfileCardMake