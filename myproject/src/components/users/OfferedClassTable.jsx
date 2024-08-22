import React from 'react';
import styled from 'styled-components';
// import font from '../../styles/font';
// import color from '../../styles/color';

// Styled Components
const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1.2rem;
  text-align: left;

  thead {
    background-color: #00c8c8;
    color: white;
    th {
      padding: 10px;
      text-align: center;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;
      &:hover {
        background-color: #f1f1f1;
      }

      td {
        padding: 10px;
        text-align: center;
        img {
          width: 100px;
          height: auto;
        }
      }
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    margin: 0 10px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      color: #ccc;
    }
  }
`;

// Sample Data
const posts = [
  {
    id: 1,
    thumbnail: '/path/to/image1.jpg',
    title: '백엔드 웹 개발 기초',
    status: '임시 저장',
    date: '2024-07-21',
  },
  {
    id: 2,
    thumbnail: '/path/to/image2.jpg',
    title: '백엔드 웹 개발 기초',
    status: '임시 저장',
    date: '2024-07-21',
  },
  {
    id: 3,
    thumbnail: '/path/to/image3.jpg',
    title: '백엔드 웹 개발 기초',
    status: '임시 저장',
    date: '2024-07-21',
  },
];

// React Component
function OfferedClassTable() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>썸네일</th>
            <th>클래스 명</th>
            <th>운영 상태</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td><img src={post.thumbnail} alt="썸네일" /></td>
              <td>{post.title}</td>
              <td>{post.status}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Component */}
      <Pagination>
        <button type='button'>&lt;</button>
        <span>1/1</span>
        <button type='button'>&gt;</button>
      </Pagination>
    </TableContainer>
  );
}

export default OfferedClassTable;
