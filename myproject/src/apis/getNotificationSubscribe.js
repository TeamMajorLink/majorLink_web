// getNotificationSubscribe.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotificationSubscribe() {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);
  console.log(authToken);

  const fetchLectureList = async (setState) => {
    if (!authToken) {
      setError(new Error('No auth token found'));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://dev.majorlink.store/notification`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken,
          },
        },
      );

      console.log(response.data); // 데이터를 콘솔에 출력 (개발 단계에서 확인)
      setState(response.data.lectureList);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (authToken) {
      fetchLectureList();
    }
  }, [authToken]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>알림구독에러: {error.message}</div>;

  return (
    <>
      <p>알림</p>
      <p>알림</p>
    </>
  );
}
