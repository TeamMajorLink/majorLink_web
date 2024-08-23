import axios from 'axios';
// import styled from 'styled-components';
import { Stomp } from '@stomp/stompjs';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';

const ChatNameText = styled.p`
  ${() => font.bold_16};
  margin: 0;
  padding: 0.8rem;

  color: ${() => color.grayscale_9d};
`;
const ChatContentText = styled.p`
  ${() => font.regular_16};
  margin: 0;
  padding: 0.8rem;

  // color: ${() => color.grayscale_80};
`;

const chatContainerStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '5px',
  maxHeight: '92vh',
  overflowY: 'auto',
  marginBottom: '20px',
};

const messageStyle = {
  marginBottom: '10px',
  padding: '1.2rem',
  backgroundColor: '#fff',
  borderRadius: '5px',
  
  display: 'flex',
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 20px)',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  flex: '1',
  marginRight: '10px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
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
const ChatLog = () => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const token = localStorage.getItem('authToken');
  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjY4ODYxOTQsInN1YiI6ImFjY2Vzcy10b2tlbiIsInV1aWQiOiIzMTU5ZjMxYy1kZjI4LTRkNzktYjA1Mi0zN2IyNGY2ZmUzZjkiLCJpYXQiOjE3MjQyOTQxOTR9.SCB1sksvzLVM_LePSQ40J2yay3y0PDncOxvO43acsz4';

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const showMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  };

  useEffect(() => {
    // ws://43.202.8.75:8080 ip주소
    const socket = new WebSocket('ws://dev.majorlink.store/ws');
    const client = Stomp.over(socket);

    client.connect(
      {
        'X-Auth-Token': `${token}`,
      },
      (frame) => {
        console.log(`Connected: ${frame}`);
        client.subscribe('/topic/public', (messageOutput) => {
          console.log(messageOutput.body);
          showMessage(JSON.parse(messageOutput.body));
        });
      },
      (error) => {
        console.error('Connection error:', error);
      },
    );

    setStompClient(client);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dev.majorlink.store/chat/history/${id}`, {
          headers: {
            'X-Auth-Token': `${token}`,
          },
        })
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error('Error fetching chat history:', error);
        });
    }
  }, [id]); // id가 변경될 때마다 요청

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const sendMessage = async () => {
    if (stompClient && message.trim() !== '') {
      try {
        // UUID를 가져오는 GET 요청
        const response = await axios.get(
          'https://dev.majorlink.store/users/get-uuid',
          {
            headers: {
              'X-Auth-Token': `${token}`,
            },
          },
        );

        const uuid = response.data;
        console.log(response);

        const chatMessage = JSON.stringify({
          sender: uuid,
          content: message,
          chatroom: parseInt(id, 10),
        });
        console.log(chatMessage.sender);

        console.log(chatMessage);

        stompClient.send(
          '/app/chat.message',
          {
            'X-Auth-Token': `${token}`,
          },
          chatMessage,
        );

        setMessage(''); // 메시지 전송 후 입력 필드 초기화
        console.log(messages);
      } catch (error) {
        console.error('Error fetching UUID:', error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
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
  return (
    <div className="container">
      <div id="chat" className="mt-4" style={chatContainerStyle}>
        {messages.map((msg, index) => (
          <div key={index} style={messageStyle}>
            <ChatNameText>{msg.name}</ChatNameText> 
            <ChatContentText>{msg.content}</ChatContentText> 
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div id="inputContainer" style={inputContainerStyle}>
        <input
          type="text"
          id="message"
          className="form-control"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={buttonStyle}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatLog;
