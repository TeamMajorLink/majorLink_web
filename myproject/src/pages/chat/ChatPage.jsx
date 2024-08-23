import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const chatroomStyle = {
  border: '1px solid black',
  width: '80%',
  height: '40px',
  textAlign: 'center',
  marginBottom: '20px',
};

const chatnameStyle = {
  fontSize: '20px',
};

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

  return (
    <div>
      <h1>채팅 목록</h1>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id} style={chatroomStyle}>
            <button
              onClick={() => handleChatClick(chat.id)}
              style={{
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
              }}
            >
              <strong style={chatnameStyle}>{chat.name}</strong>
              <br />
              입장하기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatPage;
