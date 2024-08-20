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

export function ClassList() {
  // 연동_24.08.20추가 - 클래스 정보
  const [lectureList, setLectureList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [lectureListMostLiked, setLectureListMostLiked] = useState([]);
  const [lectureListNew, setLectureListNew] = useState([]);
  const [lectureListMostRecruited, setLectureListMostRecruited] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isMostLiked = urlParams.get('MostLiked');
    const isNew = urlParams.get('New');
    const isMostRecruited = urlParams.get('MostRecruited');

    if (isMostLiked) {
      setLectureList(lectureListMostLiked);
    } else if (isNew) {
      setLectureList(lectureListNew);
    } else if (isMostRecruited) {
      setLectureList(lectureListMostRecruited);
    }
  }, [lectureListMostLiked, lectureListNew, lectureListMostRecruited]);

  const fetchLectureList = async (endpoint, setState, page = 1) => {
    try {
      const response = await axios.get(
        `https://dev.majorlink.store${endpoint}`,
        {
          params: {
            page,
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
    fetchLectureList('/lecture/list', setLectureList);
    fetchLectureList('/lecture/mostLiked', setLectureListMostLiked);
    fetchLectureList('/lecture/new', setLectureListNew);
    fetchLectureList('/lecture/mostRecruited', setLectureListMostRecruited);
  }, []);

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
