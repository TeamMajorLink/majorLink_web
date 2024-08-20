import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Sidebar from './Sidebar';
import Footer from '../../components/common/footer';
import RectangleProfile from '../../components/users/RectangleProfile';
import ProfileStatus from '../../components/users/ProfileStatus';
import ProfileWriteButton from '../../components/users/ProfileWriteButton';
import ProfileTitle from '../../components/users/ProfileTitle';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;


  .sidebar{
    margin: 19.8rem 0 8.4rem 20rem;
  }
  .status{
    margin-top: 2.9rem;
    vertical-align: bottom;
  }
`;

const ProfileContainer = styled.div`
  // display: flex;
  margin: 29.7rem 19.8rem 0 8.4rem;
  // margin-right(8.4): 임의

`;

const Text = styled.p`
  font: ${() => font.regular_20};
  color: ${() => color.black};
  margin-left: 5rem;
`;

const List = styled.ul`
  // list-style-type: disc !important;
  margin-left: 5rem;
  list-style-position: outside;
  color: ${() => color.black} !important;
  padding-inline-start: 0 !important;
`;

const ListItem = styled.li`
  font: ${() => font.regular_20};
  color: ${() => color.black};

  // ::marker {
  //   font: ${() => font.regular_20};
  //   color: ${() => color.black};
  // }
`;

const TagContainer = styled.div`
  margin-left: 5rem;
`;

const Tag = styled.div`
  display: inline-flex; /* 텍스트 길이에 맞춰 크기를 조절 */
  height: 4.2rem;
  margin: 1rem 1.1rem;
  padding: 0.1rem 1.9rem;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid ${() => color.primary_dark};
  border-radius: 5rem;
  font: ${() => font.profilecard};
  color: ${() => color.primary_dark};
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

function ProfileCard() {
    return (
      <>
        <HeaderComponent />

        <Container className="sidebar">
          <Sidebar />

          <ProfileContainer>
            <RectangleProfile />

            <Container className="status">
              <ProfileStatus />

              <ProfileWriteButton />
            </Container>



            <ProfileTitle title='자기소개'/>
            <Text>안녕하세요.</Text>

            <ProfileTitle title='학력 및 교육' />
            <List>
              <ListItem>• 안녕대학교 컴퓨터학과(2020.03~)</ListItem>
              <ListItem>• 헬로 부트캠프(2021.03~2021.12)</ListItem>
            </List>

            <ProfileTitle title='활동 프로젝트' />
            <List>
              <ListItem>• 안녕대학교 컴퓨터학과 동아리 하이하이</ListItem>
            </List>

            <ProfileTitle title='보유 기술' />
            <TagContainer>
              <Tag>Python</Tag>
              <Tag>My SQL</Tag>
              <Tag>JavaScript</Tag>
            </TagContainer>

            <ProfileTitle title='포트폴리오' />
            <UrlContainer>
              <Url href="https://www.notion.linky.portfolio">https://www.notion.linky.portfolio</Url>
            </UrlContainer>
          </ProfileContainer>
        </Container>

        
        <Footer />
      </>
    );
}

export default ProfileCard