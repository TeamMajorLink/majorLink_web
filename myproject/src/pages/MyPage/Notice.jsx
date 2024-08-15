import styled from "styled-components";
import Sidebar from "./Sidebar";
import font from "../../styles/font";
import color from "../../styles/color";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.p`
  ${() => font.title};
  margin: 20px 0;
`;

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  th{
    border-bottom: 7px solid ${() => color.primary_normal};
    ${() => font.semibold_20};
    padding: 20px;
  }
  td {
    border-bottom: 1px solid;
    ${() => font.regular_16};
    padding: 20px;
  }
    th:first-child, td:first-child {
    border-left: none;
  }
`;

function Notice() {
  const headers = [
    {
      text: '번호',
      value: 'num'
    },
    {
      text: '제목',
      value: 'title'
    },
    {
      text: '등록일',
      value: 'date'
    },
  ];

  const items = [
    {
      id: 1,
      num: 1,
      title: '오류 정정 안내',
      date: '2024-07-28'
    },
    {
      id: 2,
      num: 2,
      title: '업데이트 안내',
      date: '2024-07-28'
    },
  ]

  const headerKey = headers.map((header) => header.value);

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar/>
        <Container>
          <Title>게시물</Title>
          <Table>
            <thead>
              <tr>
                {headers.map((header) => 
                <th key={header.text}>
                  {header.text}
                </th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => 
              <tr key={item.id}>
                {headerKey.map((key) => <td key={key + item.id}>
                  {item[key]}
                </td>)}
              </tr>)}
            </tbody>
          </Table>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Notice;