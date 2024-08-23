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
  textalign: center;

  cursor: pointer;
`;
const ChatContent = styled.p`
  margin: 0;
  padding: 1.2rem;
  ${() => font.bold_20};
`;

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '300px',
  textAlign: 'center',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};
// const ListContainer = styled.div`
//   margin-top: 30px;
//
//
function ChatPage() {
  // 채팅 목록을 저장할 상태 변수
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomName, setRoomName] = useState('');

  const token = localStorage.getItem('authToken');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = () => {
    // 서버에 POST 요청
    axios
      .post(
        'https://dev.majorlink.store/chatrooms',
        { name: roomName },
        {
          headers: {
            'X-Auth-Token': `${token}`,
          },
        },
      )
      .then((response) => {
        console.log('채팅방이 추가되었습니다:', response.data);
        closeModal();
      })
      .catch((error) => {
        console.error('채팅방 추가 중 오류가 발생했습니다:', error);
      });
  };

  const fetchChatList = async () => {
    try {
      const response = await axios.get('https://dev.majorlink.store/chatrooms');
      setChatList(response.data);
    } catch (error) {
      console.error('채팅 목록을 가져오는데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    fetchChatList();

    const intervalId = setInterval(fetchChatList, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChatClick = (id) => {
    navigate(`/chat/${id}`);
  };
  //
  //
  //
  return (
    <div>
      <HeaderComponent />
      <Wrapper>
        <Sidebar />
        <Container>
          <div>
            <button onClick={openModal}>채팅방 추가</button>

            {isModalOpen && (
              <div style={modalStyles}>
                <div style={modalContentStyles}>
                  <h2>채팅방 추가</h2>
                  <input
                    type="text"
                    value={roomName}
                    onChange={handleInputChange}
                    placeholder="채팅방 이름을 입력하세요"
                    style={inputStyles}
                  />
                  <div style={{ marginTop: '10px' }}>
                    <button onClick={handleSubmit}>입력</button>
                    <button onClick={closeModal} style={{ marginLeft: '10px' }}>
                      닫기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Title>채팅 목록</Title>
          <ListContainer>
            {chatList.map((chat) => (
              <ChatContainer
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
              >
                <ChatContent>{chat.name}</ChatContent>
              </ChatContainer>
            ))}
          </ListContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default ChatPage;
