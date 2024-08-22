import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { HeaderComponent } from '../../components/common/header/HeaderComponent';
import { ClassDetailTitle } from '../../components/class/classDetail/ClassDetailTitle';
import { ClassDetailNavigation } from '../../components/class/classDetail/ClassDetailNavigation';
import { ClassApplicationModal } from '../../components/class/classDetail/ClassApplicationModal';

const PageContainer = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function ClassDetailPage() {
  // 상세 정보 연동
  const [authToken, setAuthToken] = useState(null);
  const [lectureInfo, setLectureInfo] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const lectureId = urlParams.get('lectureId');

  useEffect(() => {
    setAuthToken(localStorage.getItem('authToken'));
  }, []);

  useEffect(() => {
    const fetchDetailInfo = async () => {
      const url = `https://dev.majorlink.store/lecture/${lectureId}/details`;

      try {
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': authToken,
          },
        });

        // console.log('요청 성공:', response.data);
        setLectureInfo(response.data);
      } catch (error) {
        if (error.response) {
          console.error(
            '요청 실패:',
            error.response.status,
            error.response.statusText,
          );
        } else if (error.request) {
          console.error('요청 실패: 응답이 없습니다.', error.request);
        } else {
          console.error('요청 중 에러 발생:', error.message);
        }
      }
    };

    fetchDetailInfo();
  }, []);

  // 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeaderComponent />
      <PageContainer>
        <ClassDetailTitle lectureInfo={lectureInfo} />
      </PageContainer>
      <ClassDetailNavigation openModal={openModal} lectureInfo={lectureInfo} />

      {isModalOpen && <ClassApplicationModal closeModal={closeModal} />}
    </div>
  );
}
