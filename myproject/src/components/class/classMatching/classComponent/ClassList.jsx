import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { ClassComponent } from './ClassComponent';

const GridList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  /* 수정 필요 */
  margin-bottom: 60px;
  width: 1584px;
`;

export function ClassList({ categoryIdChanged }) {
  // 연동_24.08.20추가 - 클래스 정보
  const [lectureList, setLectureList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLectureList = async (endpoint, page = 1) => {
    try {
      const response = await axios.get(
        `https://dev.majorlink.store${endpoint}`,
        {
          params: {
            page,
          },
        },
      );

      setLectureList(response.data.lectureList);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isMostLiked = urlParams.get('MostLiked');
    const isNew = urlParams.get('New');
    const isMostRecruited = urlParams.get('MostRecruited');
    const categoryId = urlParams.get('CategoryId');
    // console.log(`isMostLiked: ${isMostLiked}`);
    // console.log(`isNew: ${isNew}`);
    // console.log(`isMostRecruited: ${isMostRecruited}`);
    // console.log(`categoryId: ${categoryId}`);

    if (isMostLiked) {
      fetchLectureList('/lecture/mostLiked');
      // console.log('좋아요순');
    } else if (isNew) {
      fetchLectureList('/lecture/new');
      // console.log('최신순');
    } else if (isMostRecruited) {
      fetchLectureList('/lecture/mostRecruited');
      // console.log('임박순');
    } else if (categoryId) {
      fetchLectureList(`/lecture/${categoryId}/category`);
      // console.log(`카테고리: ${categoryId}`);
    } else {
      fetchLectureList('/lecture/list');
      // console.log('전체 조회');
    }
  }, [categoryIdChanged]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GridList>
      {lectureList.map((lecture, index) => (
        <ClassComponent
          key={index /* eslint-disable-line react/no-array-index-key */}
          lecture={lecture}
        />
      ))}
    </GridList>
  );
}
