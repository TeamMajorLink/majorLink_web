import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LectureLikeButton({ lectureId = 1 }) {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem('authToken'));
  }, []);

  console.log(authToken);

  const handleLikeClick = async () => {
    const url = `https://dev.majorlink.store/lecture/${lectureId}/like`;

    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken,
          },
        },
      );

      console.log('좋아요 요청 성공:', response.data);
    } catch (error) {
      if (error.response) {
        // 서버가 응답했으나 상태 코드가 2xx 범위가 아닐 때
        console.error(
          '좋아요 요청 실패:',
          error.response.status,
          error.response.statusText,
        );
      } else if (error.request) {
        // 요청이 전송되었으나 응답이 없을 때
        console.error('좋아요 요청 실패: 응답이 없습니다.', error.request);
      } else {
        // 요청을 설정하는 중에 발생한 에러
        console.error('좋아요 요청 중 에러 발생:', error.message);
      }
    }
  };

  return (
    <button type="button" onClick={handleLikeClick}>
      좋아요
    </button>
  );
}

export default LectureLikeButton;
