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
  const [lectureList, setLectureList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLectureList = async (page = 1) => {
    try {
      const response = await axios.get(
        'https://dev.majorlink.store/lecture/list',
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
    fetchLectureList();
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
