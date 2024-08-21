import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Footer from '../../components/common/footer';
import RectangleProfile from '../../components/users/RectangleProfile';
// import ProfileWriteButton from '../../components/users/ProfileWriteButton';
import ProfileTitle from '../../components/users/ProfileTitle';
import DateInput from '../../components/users/DateInput';
import AddButton from '../../components/users/AddButton';

const Container = styled.div`
  display: flex;
  justify-content: start;

  .date{

  }
`;

const ProfileContainer = styled.div`
  // margin: 29.7rem 19.8rem 0 8.4rem;
  // margin-right(8.4): 임의
  padding: 16.2rem 25.7rem; //bottom, right: 임의

`;

const Subhead = styled.p`
  font: ${() => font.semibold_24};
  color: ${() => color.black};
  margin: 4.8rem 0 3.3rem 5.3rem;

  .tilde {
    margin: 0; //임시
  }
`;

const BigInput = styled.input`
  width: 105.5rem;
  padding: 2rem 2.7rem;
  font: ${() => font.regular_20};
  color: ${() => color.black};
  border: 0.1rem solid ${() => color.grayscale_9d};
  border-radius: 1.5rem;

  .onelineintro{
    height: 11.2rem; 
  }
  .introduce{
    height: 19.6rem; 
  }
`;

// 수정하기
const BasicInput = styled.input`
  height: 6.6rem;
  padding: 2.5rem 4.4rem;
  font: ${() => font.regular_20};
  color: ${() => color.black};
  border: 0.1rem solid ${() => color.grayscale_9d};
  border-radius: 1.5rem;
  // 높이: 정중앙에 정렬하는 거 뭐더라

  .short{
    width: 56.5rem;
  }
  .long{
    width: 65.6rem;
  }
  .check{
      
  }
`;

const Label = styled.label`
  font: ${() => font.regular_20};
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
            <BigInput className='onelineintro' placeholder='한 줄 소개를 입력해주세요' />
            <CharacterCount>0/100</CharacterCount>

            <ProfileTitle title='자기소개'/>
            <Subhead>자기소개</Subhead>
            <BigInput className='introduce' placeholder='직무 경험, 핵심 역량, 강점 등 구체적인 내용을 작성해보세요.' />
            <CharacterCount>0/1000</CharacterCount>

            <ProfileTitle title='학력 및 교육' />
            <Container>
              <Subhead>교육기관</Subhead>
              <BasicInput className='short' placeholder='학교명이나 교육기관 명을 입력해주세요' />
            </Container>
            <Container>
              <Subhead>전공/과정</Subhead>
              <BasicInput className='long' placeholder='전공 혹은 과정 명을 입력해주세요. 예) 컴퓨터학과/웹 개발 과정' />
            </Container>
            <Container className='date'> {/* 수정 - flex 별도 설정? */}
              <Subhead>교육 기간</Subhead>
              <DateInput content='시작일' placeholder='예) 2024-03-04' />
              <Subhead className='tilde'>~</Subhead>
              <DateInput content='종료일' placeholder='예) 2024-06-25' />
              <BasicInput type='checkbox' id='ongoing1' name='ongoing1' />
              <Label htmlFor='ongoing1'>진행중</Label>
            </Container>
            <AddButton content='추가하기' />
            {/* 버튼 추가 */}


            <ProfileTitle title='활동 프로젝트' />
            <Container>
              <Subhead>활동 구분</Subhead>
              <BasicInput className='short' placeholder='예) 인턴, 대외활동, 프로젝트, 동아리 등' />
            </Container>
            <Container>
              <Subhead>기관/장소</Subhead>
              <BasicInput className='long' placeholder='기관/장소 명을 입력해주세요' />
            </Container>
            <Container>
              <Subhead className='date'>활동 기간</Subhead> {/* 수정 - flex 별도 설정? */}
              <DateInput content='시작일' placeholder='예) 2024.01.01' />
              <Subhead className='tilde'>~</Subhead>
              <DateInput content='종료일' placeholder='예) 2024.01.01' />
              <BasicInput type='checkbox' id='ongoing2' name='ongoing2' />
              <Label htmlFor='ongoing2'>진행중</Label>
            </Container>
            <Container>
              <Subhead>활동 내용</Subhead>
              <BasicInput className='long' placeholder='예) ios 모바일 어플 개발 프로젝트 진행' />
            </Container>
            {/* 추가하기 버튼 컴포넌트? */}

            <ProfileTitle title='보유 기술' />
            <Container>
              <Subhead>보유 기술</Subhead>
              <BasicInput className='long' placeholder='키워드 입력 후 Enter' />
              {/* 수정 - Enter 또는 버튼 클릭 시 기능 추가하기 */}
              {/* 등록 버튼 컴포넌트? */}
              <Text>예시: Google Ananlytics, Photoshop, Figma, Notion, Python, Javascript, Confluence 등</Text>
              <TagContainer>
                <Tag>Figma</Tag>
              </TagContainer>
            </Container>


            <ProfileTitle title='포트폴리오' />
            <Container>
              <Subhead>첨부파일</Subhead>
              <BasicInput type='file' className='long' placeholder='첨부할 파일을 찾아주세요'/>
              {/* 첨부할 파일을 찾아주세요 */}
              {/* 파일 첨부 버튼 컴포넌트 */}
            </Container>

            <Container>
              <Subhead>URL</Subhead>
              <BasicInput type='url' className='long' placeholder='URL 링크를 입력하세요' />
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