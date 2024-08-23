import { React, useRef, useState, useEffect } from 'react';

function FaceChat() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const webSocketRef = useRef(null);
  const [isCallStarted, setIsCallStarted] = useState(false);

  const createPeerConnection = () => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });

    // 로컬 스트림 추가
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => {
          if (peerConnection.signalingState !== 'closed') {
            peerConnection.addTrack(track, stream);
          }
        });
      });

    // 원격 스트림 처리
    peerConnection.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // ICE 후보 처리
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        webSocketRef.current.send(
          JSON.stringify({
            type: 'ice-candidate',
            candidate: event.candidate,
          }),
        );
      }
    };

    return peerConnection;
  };

  useEffect(() => {
    // WebSocket 서버에 연결
    webSocketRef.current = new WebSocket(
      'ws://dev.majorlink.store/ws/video-chat',
    );

    webSocketRef.current.onopen = () => {
      console.log('WebSocket 연결 성공');
    };

    webSocketRef.current.onmessage = (message) => {
      const data = JSON.parse(message.data);
      switch (data.type) {
        case 'offer':
          handleOffer(data);
          break;
        case 'answer':
          handleAnswer(data);
          break;
        case 'ice-candidate':
          handleIceCandidate(data);
          break;
        default:
          break;
      }
    };

    peerConnectionRef.current = createPeerConnection();

    const handleOffer = (data) => {
      if (peerConnectionRef.current.signalingState === 'closed') {
        peerConnectionRef.current = createPeerConnection();
      }
      peerConnectionRef.current.setRemoteDescription(
        new RTCSessionDescription(data.offer),
      );
      peerConnectionRef.current.createAnswer().then((answer) => {
        peerConnectionRef.current.setLocalDescription(answer);
        webSocketRef.current.send(JSON.stringify({ type: 'answer', answer }));
      });
    };

    const handleAnswer = (data) => {
      if (peerConnectionRef.current.signalingState !== 'closed') {
        peerConnectionRef.current.setRemoteDescription(
          new RTCSessionDescription(data.answer),
        );
      }
    };

    const handleIceCandidate = (data) => {
      if (peerConnectionRef.current.signalingState !== 'closed') {
        peerConnectionRef.current.addIceCandidate(
          new RTCIceCandidate(data.candidate),
        );
      }
    };

    return () => {
      if (peerConnectionRef.current.signalingState !== 'closed') {
        peerConnectionRef.current.close();
      }
      webSocketRef.current.close();
    };
  }, []);

  const startCall = () => {
    if (peerConnectionRef.current.signalingState === 'closed') {
      peerConnectionRef.current = createPeerConnection();
    }
    peerConnectionRef.current.createOffer().then((offer) => {
      peerConnectionRef.current.setLocalDescription(offer);
      webSocketRef.current.send(JSON.stringify({ type: 'offer', offer }));
      setIsCallStarted(true);
    });
  };

  return (
    <div style={lay}>
      <div>내 화면</div>
      <div style={myCam}>
        <video ref={localVideoRef} autoPlay muted style={{ width: '500px' }} />
      </div>
      상대방 화면
      <div style={youCam}>
        <video ref={remoteVideoRef} autoPlay style={{ width: '500px' }} />
      </div>
      <button onClick={startCall} disabled={isCallStarted}>
        강의 참여하기
      </button>
    </div>
  );
}

export default FaceChat;

const myCam = {
  border: 'solid 1px black',
  textAlign: 'center',
  marginTop: '100px',
};

const youCam = {
  border: 'solid 1px black',
  textAlign: 'center',
  marginTop: '200px',
};

const lay = {
  textAlign: 'center',
  fontSize: '50px',
};
