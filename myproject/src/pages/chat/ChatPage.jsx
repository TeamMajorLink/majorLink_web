// 채팅 목록
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import Sidebar from '../myClass/Sidebar';
import font from '../../styles/font';
import color from '../../styles/color';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const ListContainer = styled.ul`
  margin: 3rem 0 0 -3.2rem;
`;
const ChatContainer = styled.li`
  margin: 0 0 2rem 0;
  padding: 2rem;
  border: 0.1rem solid ${() => color.grayscale_84};
  border-radius: 1.2rem;

  width: 100%;
  height: 8.8rem;
  textAlign: center;

  cursor: pointer;
`;
const ChatContent = styled.p`
  margin: 0;
  padding: 1.2rem;
  ${() => font.bold_20};
  
`;
// const ListContainer = styled.div`
//   margin-top: 30px;
// `;

// 
// 
// 
// 
// daivit



  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
function ChatPage() {
  // 채팅 목록을 저장할 상태 변수
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  // 서버에서 채팅 목록을 가져오는 함수
  const fetchChatList = async () => {
    try {
      const response = await axios.get('https://dev.majorlink.store/chatrooms');
      setChatList(response.data); // 응답 데이터를 상태에 저장
    } catch (error) {
      console.error('채팅 목록을 가져오는데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    fetchChatList();

    const intervalId = setInterval(fetchChatList, 10000); // 10000ms = 10초

    // 컴포넌트가 언마운트될 때 인터벌을 정리(cleanup)함
    return () => clearInterval(intervalId);
  }, []); // 빈 배열로 의존성을 설정해, 컴포넌트가 처음 렌더링될 때만 실행

  const handleChatClick = (id) => {
    navigate(`/chat/${id}`);
  };
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 

  return (
    
    <div>
      <HeaderComponent />
      <Wrapper>
        <Sidebar />
        <Container>
          <Title>채팅 목록</Title>
          <ListContainer>
        {chatList.map((chat) => (
          <ChatContainer key={chat.id} onClick={() => handleChatClick(chat.id)} >
            
              <ChatContent >{chat.name}</ChatContent>
          </ChatContainer>
        ))}
          </ListContainer>
        </Container>
      </Wrapper>
      
    </div>
  );
}

export default ChatPage;
