// getNotificationSubscribe.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotificationSubscribe() {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem('authToken'));
  }, []);
  console.log(authToken);

  const fetchLectureList = async (setState) => {
    try {
      const response = await axios.get(
        `https://dev.majorlink.store/notification/subscribe`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken,
          },
        },
      );

      setState(response.data.lectureList);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLectureList();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <p>알림</p>
      <p>알림</p>
    </>
  );
}
