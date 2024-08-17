import React, { useState } from 'react';
import axios from 'axios';

export function ApiTestCreateComponent({ lectureId }) {
  const [content, setContent] = useState('');
  const [rate, setRate] = useState('');
  const [authToken, setAuthToken] = useState(''); // 인증 토큰을 상태로 관리

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      content,
      rate,
    };

    try {
      const response = await axios.post(
        `https://dev.majorlink.store/reviews/${lectureId}`,
        reviewData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken, // 헤더에 인증 토큰 추가
          },
        },
      );
      console.log('Review submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </p>
      </div>
      <div>
        <p>
          Rate:
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min="1"
            max="5"
          />
        </p>
      </div>
      <div>
        <p>
          Auth Token:
          <input
            type="text"
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
          />
        </p>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}
