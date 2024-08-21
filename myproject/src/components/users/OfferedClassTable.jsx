import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import ThumbImg from "../../assets/common/thumbnail_myclass_172x95.png";

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  th{
    border-top: 7px solid ${() => color.primary_normal};
    border-bottom: 1px solid ${() => color.grayscale_80};
    ${() => font.semibold_20};
    padding: 20px;
  }
  td {
    border-bottom: 1px solid;
    ${() => font.regular_18};
    padding: 20px;
  }
  th:first-child, td:first-child {
    border-left: none;
  }
  img {
    width: 100px;
    padding: none;
  }
  button {
    border-radius: 20px;
    border: 2px solid ${() => color.primary_normal};
    ${() => font.regular_18};
    color: ${() => color.primary_normal};
    background-color: transparent;
    padding: 10px;
    width: 60%
  }
`;

function OfferedClassTable() {

    const headers = [
        {
          text: '썸네일',
          value: 'img'
        },
        {
          text: '클래스 명',
          value: 'class'
        },
        {
          text: '운영 상태',
          value: 'state'
        },
        {
          text: '등록일',
          value: 'date'
        },
      ];
    
      const items = [
        {
          id: '1',
          img: 'img',
          class: '백엔드 웹 개발 기초',
          state: '임시 저장',
          date: '2024-07-21',
        },
      ];
    
      const headerKey = headers.map((header) => header.value);


    return(
        <Table>
                <colgroup>
                  <col width="20%" />
                  <col width="40%" />
                  <col width="20%" />
                  <col width="20%" />
                </colgroup>
                <thead>
                  <tr>
                    {headers.map((header) => 
                    <th key={header.text}>
                      {header.text}
                    </th>)}
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      {headerKey.map((key) => {
                        let content;

                        if (key === 'state') {
                          content = item[key];
                        } else if (key === 'img') {
                          content = <img src={ThumbImg} alt="썸네일" />;
                        } else if (key === 'class') {
                          content = (
                            <Link to={`/myclass/recruiting/${item.id}`}>
                              {item[key]}
                            </Link>
                          )
                        } else {
                          content = item[key];
                        }
                        return <td key={key + item.id}>{content}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </Table>


    )



}

export default OfferedClassTable