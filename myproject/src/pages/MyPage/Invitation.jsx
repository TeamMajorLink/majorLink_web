import styled from "styled-components";
import { HeaderComponent } from "../../components/common/header/HeaderComponent";
import Sidebar from "./Sidebar";
import font from "../../styles/font";
import color from "../../styles/color";

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

const LinkContainer = styled.div`
  display: flex;
  ${() => font.regular_20};
  padding: 30px;
  align-items: center;
`;

const CopyButton = styled.button`
  width: 200px;
  height: 60px;
  ${() => font.regular_20};
  margin-left: 70px;
  border: none;
  border-radius: 15px;
  background-color: ${() => color.primary_dark};
  color: white;
`;

const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
  th{
    border-bottom: 4px solid ${() => color.info_text_color};
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


function Invitation() {
  const headers = [
    {
      text: '이름',
      value: 'name'
    },
    {
      text: '진행 상황',
      value: 'progress'
    },
    {
      text: '포인트',
      value: 'point'
    },
  ];

  const items = [
    {
      id: 1,
      name: '노브',
      progress: '회원가입',
      point: '10000P'
    },
  ]

  const headerKey = headers.map((header) => header.value);

  return (
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>친구초대 코드</Title>
          <LinkContainer>
            <p>나의 친구 초대 코드: 5skgflw3</p>
            <CopyButton>링크 복사하기</CopyButton>
          </LinkContainer>
          <Title>친구초대 포인트</Title>
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

export default Invitation;