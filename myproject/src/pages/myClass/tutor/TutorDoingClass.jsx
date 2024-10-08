import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderComponent } from "../../../components/common/header/HeaderComponent";
import Sidebar from "../Sidebar";
import font from "../../../styles/font";
import color from "../../../styles/color";
import TutorDoingSelectMenu from "./TutorDoingSelectMenu";
import ThumbImg from "../../../assets/common/thumbnail_myclass_172x95.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 100px;
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

const ListContainer = styled.div`
  margin-top: 30px;
`;

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


function TutorDoingClass() {

  const headers = [
    {
      text: '번호',
      value: 'num'
    },
    {
      text: '썸네일',
      value: 'img'
    },
    {
      text: '클래스 명',
      value: 'class'
    },
    {
      text: '수업 요일 및 시간',
      value: 'time'
    },
    {
      text: '수업 입장',
      value: 'state'
    },
  ];

  const items = [
    {
      id: '1',
      num: '1',
      img: 'img',
      class: '회계원리',
      time: '매주 화요일 7시',
      state: '수업 입장하기'
    },
  ];

  const headerKey = headers.map((header) => header.value);

  return(
    <div>
      <HeaderComponent />
      <Wrapper>
      <Sidebar />
        <Container>
          <Title>수업받는 클래스</Title>
          <TutorDoingSelectMenu />
          <ListContainer>
              <Table>
                <colgroup>
                  <col width="10%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col width="25%" />
                  <col width="25%" />
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
                          content = <Link to='/myclass/movetoonlineclass'><button type="button">{item[key]}</button></Link>;
                        } else if (key === 'img') {
                          content = <img src={ThumbImg} alt="썸네일" />;
                        } else if (key === 'class') {
                          content = (
                            <Link to={`/myclass-tutor/doing/${item.id}`}>
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
          </ListContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default TutorDoingClass;