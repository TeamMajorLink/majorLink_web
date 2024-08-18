import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function ApiTestProgilePage() {
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    if (accessToken) {
      // Access Token을 로컬 스토리지에 저장
      localStorage.setItem('X-AUTH-TOKEN', accessToken);

      // 원하는 페이지로 리디렉트
      history.push('/');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('X-AUTH-TOKEN');

    if (token) {
      axios
        .get('https://dev.majorlink.store/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error('Failed to fetch profile:', error);
        });
    }
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <img src={profile.picture} alt="Profile" />
          <h1>{profile.nickname}</h1>
          <p>{profile.email}</p>
        </div>
      ) : (
        <p>로그인 해주세요.</p>
      )}
    </div>
  );
}
