import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export function ApiTestReadComponent({ reviewId }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    // Spring 서버에서 데이터 가져오기
    axios
      .get(`https://dev.majorlink.store/reviews/${reviewId}/details`)
      .then((response) => {
        // API로부터 받은 데이터를 상태에 저장
        setReview(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the review!', error);
      });
  }, [reviewId]);

  if (!review) return <p>Loading...</p>;

  return (
    <PageContainer>
      <h2>{review.ownerNickname}</h2>
      <p>Rate: {review.rate}</p>
      <p>{review.content}</p>
      <p>Date: {review.createdAt}</p>
    </PageContainer>
  );
}
